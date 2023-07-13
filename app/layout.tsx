"use client";
import { Providers } from "@/lib/providers";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, optimism, polygon, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Footer from "./components/Footer/Footer";
import { Nav } from "./components/Navbar/Nav";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";

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
	// keep autoConnect at false to avoid hydration errors in nextjs
	autoConnect: true,
	connectors,
	publicClient,
});

export default function RootLayout(props: React.PropsWithChildren) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<WagmiConfig config={wagmiConfig}>
						<RainbowKitProvider chains={chains}>
							<header>
								<Nav />
							</header>
							<main className={styles.main}>
								{props.children}
							</main>
							<Footer />
						</RainbowKitProvider>
					</WagmiConfig>
				</Providers>
			</body>
		</html>
	);
}
