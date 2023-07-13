import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { useDispatch, useSelector } from "@/lib/redux";
import Footer from "./Footer";

jest.mock("../../../lib/redux", () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

describe("Footer", () => {
	let mockDispatch: jest.Mock;
	let mockUseSelector: jest.Mock;

	beforeEach(() => {
		mockDispatch = jest.fn();
		useDispatch.mockReturnValue(mockDispatch);

		mockUseSelector = jest.fn();
		useSelector.mockImplementation(mockUseSelector);
	});

	const mockImages = [
		"https://unsplash.com/photos/yx7TJle8LhM",
		"https://unsplash.com/photos/oZvxlkxqhI0",
	];

	it("renders clear history button correctly", () => {
		mockUseSelector.mockReturnValue({ images: mockImages });

		const { getByText }: RenderResult = render(<Footer />);
		const clearHistoryButton: HTMLElement = getByText("Clear History");
		expect(clearHistoryButton).toBeInTheDocument();
	});

	it("renders thumbnail images correctly", () => {
		mockUseSelector.mockReturnValue({ images: mockImages });

		const { getAllByAltText }: RenderResult = render(<Footer />);
		const thumbnailImages: HTMLElement[] = getAllByAltText("thumbnail");
		expect(thumbnailImages).toHaveLength(mockImages.length);
	});
});
