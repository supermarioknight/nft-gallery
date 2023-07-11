"use client";
import useSWR from "swr";
import { useAccount } from "wagmi";
import { fetcher } from "../lib/utils";
import { NFT } from "./components/NFT";

export default function IndexPage() {
	const { address, isConnecting, isDisconnected } = useAccount();
	const { data, error } = useSWR(address, fetcher);

	if (isConnecting) return <div>Connecting…</div>;
	if (isDisconnected) return <div>Disconnected</div>;

	return (
		<>
			{!isDisconnected &&
				data?.ownedNfts.map((o) => {
					return (
						<NFT
							key={o.contract.address}
							imgUrl={o.media[0].thumbnail}
						/>
					);
				})}
		</>
	);
}
