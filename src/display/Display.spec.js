import React from "react";
import { render, fireEvent, cleanup, getByTestId } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";

import Display from "./Display";
import Dashboard from "../dashboard/Dashboard";

afterEach(cleanup);

describe("Display tests!", () => {
  it("renders!", () => {
    render(<Display />);
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should display the correct colors with the correct words on initial load", () => {
    const { getByTestId } = render(<Display />);

    expect(getByTestId('disp-lock')).toHaveClass("green-led");
    expect(getByTestId('disp-open')).toHaveClass("green-led");
  });

  it("should display the correct colors in response to event triggers", () => {
    const { getByTestId, getByText } = render(<Dashboard />);
    expect(getByTestId('disp-open')).toHaveClass("green-led");
    expect(getByTestId('disp-lock')).toHaveClass("green-led");

    const closeButton = getByText(/Close Gate/);
    fireEvent.click(closeButton);

    expect(getByTestId('disp-open')).toHaveClass("red-led");

    const lockButton = getByText(/Lock Gate/);
    fireEvent.click(lockButton);

    expect(getByTestId('disp-lock')).toHaveClass("red-led");

    const unlockButton = getByText(/Unlock Gate/);
    fireEvent.click(unlockButton);

    expect(getByTestId('disp-lock')).toHaveClass("green-led");

    const openButton = getByText(/Open Gate/);
    fireEvent.click(openButton);

    expect(getByTestId('disp-open')).toHaveClass("green-led");
  });
});