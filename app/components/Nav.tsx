"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/layout.module.css";

export const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ConnectButton />
		</nav>
	);
};
