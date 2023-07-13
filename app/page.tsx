"use client";
import { OwnedBaseNftsResponse } from "alchemy-sdk";
import useSWR from "swr";
import { useAccount } from "wagmi";
import { fetcher } from "../lib/utils";
import Gallery from "./components/Gallery/Gallery";
import dynamic from "next/dynamic";
import { useIsMounted } from "@/lib/hooks";

export default function IndexPage() {
	const isMounted = useIsMounted();
	const { address, isConnecting, isDisconnected, isConnected } = useAccount();
	const { data } = useSWR<OwnedBaseNftsResponse>(address, fetcher);

	if (!isMounted) return null;
	if (isConnecting) return <p>Onboarding…</p>;
	if (isDisconnected) return <p>Disconnected</p>;

	return (
		<div>
			<Gallery images={!isDisconnected && data?.ownedNfts} />
		</div>
	);
}
