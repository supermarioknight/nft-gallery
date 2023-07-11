"use client";
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";

import styles from "./styles/layout.module.css";
import "./styles/globals.css";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
	[mainnet, polygon, optimism, arbitrum, zora],
	[
		alchemyProvider({
			apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "",
		}),
		publicProvider(),
	]
);

const { connectors } = getDefaultWallets({
	appName: "My RainbowKit App",
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
	chains,
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
});

export default function RootLayout(props: React.PropsWithChildren) {
	return (
		<Providers>
			<html lang="en">
				<body>
					<WagmiConfig config={wagmiConfig}>
						<RainbowKitProvider chains={chains}>
							<section className={styles.container}>
								<header>
									<Nav />
								</header>

								<main className={styles.main}>
									{props.children}
								</main>
							</section>
						</RainbowKitProvider>
					</WagmiConfig>
				</body>
			</html>
		</Providers>
	);
}
