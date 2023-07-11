import React from "react";
import styles from "./Footer.module.css";
import { useSelector, useDispatch, clearHistory } from "@/lib/redux";
import Image from "next/image";
import Button from "../Button/Button";

const Footer = () => {
	const clickHistory = useSelector((state) => state.clickHistory);
	const dispatch = useDispatch();
	const handleClearHistory = () => {
		dispatch(clearHistory());
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.footerLogo}>
					<Button
						className={styles.footerLogoLink}
						onClick={handleClearHistory}
					>
						Clear History
					</Button>
				</div>
				<div>
					{clickHistory?.images.map((c) => {
						return (
							<Image
								src={c}
								width={50}
								height={50}
								alt="thumbnail"
							/>
						);
					})}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
