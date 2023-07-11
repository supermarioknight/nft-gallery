"use client";
import { useAccount } from "wagmi";
import useSWR from "swr";
import { fetcher } from "../../lib/utils";
import Image from "next/image";

export const NFT = () => {
	const { address, isConnecting, isDisconnected } = useAccount();
	const { data, error } = useSWR(address, fetcher);
	console.log(`🍀 \n | 🍄 file: NFT.tsx:13 \n | 🍄 NFT \n | 🍄 data:`, data);

	return (
		<div>
			<h1>Wallet Address</h1>
			<h1>{address}</h1>
			<div>
				{data?.ownedNfts?.map((o) => {
					return (
						<>
							<Image
								src={o?.media[0].thumbnail || ""}
								width={200}
								height={200}
								alt={""}
							></Image>
						</>
					);
				})}
			</div>
		</div>
	);
};
