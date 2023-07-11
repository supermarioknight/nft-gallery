import { Network, Alchemy } from "alchemy-sdk";
const settings = {
	apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
	network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

export const fetcher = (address: string) => {
	return alchemy.nft.getNftsForOwner(address || "");
};
