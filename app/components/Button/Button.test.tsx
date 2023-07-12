import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
	const buttonText = "Click me";

	it("renders button text correctly", () => {
		render(<Button>{buttonText}</Button>);
		expect(screen.getByTestId(buttonText)).toBeInTheDocument();
	});

	it("calls onClick handler when button is clicked", () => {
		const onClickMock = jest.fn();
		render(<Button onClick={onClickMock}>{buttonText}</Button>);
		fireEvent.click(screen.getByText(buttonText));
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});
});
