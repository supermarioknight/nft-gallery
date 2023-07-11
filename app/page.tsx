import { NFT } from "./components/NFT";

export default function IndexPage() {
	// if (isConnecting) return <div>Connecting…</div>;
	// if (isDisconnected) return <div>Disconnected</div>;

	return (
		<div>
			<NFT />
		</div>
	);
}

export const metadata = {
	title: "Redux Toolkit",
};
