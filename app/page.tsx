"use client";
import useSWR from "swr";
import { useAccount } from "wagmi";
import { fetcher } from "../lib/utils";
import { NFT } from "./components/NFT";
import Gallery from "./components/Gallery/Gallery";

export default function IndexPage() {
	const { address, isConnecting, isDisconnected } = useAccount();
	const { data, error } = useSWR(address, fetcher);

	if (isConnecting) return <div>Connecting…</div>;
	if (isDisconnected) return <div>Disconnected</div>;

	return (
		<>
			<Gallery images={!isDisconnected && data?.ownedNfts} />
		</>
	);
}
