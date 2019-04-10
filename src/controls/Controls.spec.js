import React from 'react';
import Control from './Controls';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('<Control />', () => {
	it('closed, locked', () => {
		const { getByTestId } = render(<Control locked={true} closed={true} />);
		expect(getByTestId('tog-lock')).toHaveTextContent('Unlock Gate');
		expect(getByTestId('tog-open')).toHaveTextContent('Open Gate');
	});

	it('open, unlocked', () => {
		const { getByTestId } = render(<Control locked={false} closed={false} />);
		expect(getByTestId('tog-lock')).toHaveTextContent('Lock Gate');
		expect(getByTestId('tog-open')).toHaveTextContent('Close Gate');
	});

	it('closed, unlocked', () => {
		const { getByTestId } = render(<Control locked={false} closed={true} />);
		expect(getByTestId('tog-lock')).toHaveTextContent('Lock Gate');
		expect(getByTestId('tog-open')).toHaveTextContent('Open Gate');
	});
});