"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "../icons/Logo";
import styles from "./nav.module.css";

export const Nav = () => {
	return (
		<header className={styles.navbar} data-testid="navbar">
			<nav className={styles.navbarContainer}>
				<div className={styles.navbarBrand}>
					<a href="/" className={styles.navbarLogo}>
						<Logo className={styles.navbarLogo} />
					</a>
				</div>
				<div data-testid="wallet-button">
					<ConnectButton />
				</div>
			</nav>
		</header>
	);
};
