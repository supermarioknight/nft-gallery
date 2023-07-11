import React, { FC, MouseEvent, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	children: ReactNode;
	className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
