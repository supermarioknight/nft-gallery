import { ConnectButton } from "@rainbow-me/rainbowkit";
import { render, screen } from "@testing-library/react";
import { Nav } from "./Nav";

jest.mock("@rainbow-me/rainbowkit", () => ({
	ConnectButton: jest.fn(),
}));

describe("Nav", () => {
	beforeEach(() => {
		(ConnectButton as unknown as jest.Mock).mockClear();
	});

	it("renders logo and connect button", () => {
		render(<Nav />);

		expect(screen.getByTestId("navbar")).toBeInTheDocument();
		expect(screen.getByTestId("wallet-button")).toBeInTheDocument();

		expect(ConnectButton).toHaveBeenCalledTimes(1);
	});
});
