"use client";
import useSWR from "swr";
import { useAccount } from "wagmi";
import { fetcher } from "../lib/utils";
import Gallery from "./components/Gallery/Gallery";

export default function IndexPage() {
	const { address, isConnecting, isDisconnected } = useAccount();
	const { data } = useSWR(address, fetcher);
	if (isConnecting) return <p>Onboarding…</p>;
	if (isDisconnected) return <p>Disconnected</p>;

	return (
		<div>
			<Gallery images={!isDisconnected && data?.ownedNfts} />
		</div>
	);
}
