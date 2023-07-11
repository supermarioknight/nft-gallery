import { clearHistory, useDispatch, useSelector } from "@/lib/redux";
import Image from "next/image";
import Button from "../Button/Button";
import styles from "./Footer.module.css";

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
					{clickHistory?.images.map((c, index) => {
						return (
							<Image
								key={index}
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
