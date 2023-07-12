import { Network, Alchemy } from "alchemy-sdk";
const settings = {
	apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
	network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export const fetcher = (address: string) => {
	return alchemy.nft.getNftsForOwner(
		"0x154B4045F07B48C3B75D73a3f6C7C11Dfec95b4a"
	);
};
