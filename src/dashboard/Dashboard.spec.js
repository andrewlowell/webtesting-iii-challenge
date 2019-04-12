import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
