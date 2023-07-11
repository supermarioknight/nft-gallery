import React from "react";
import styles from "./gallery.module.css";
import { NFT } from "../NFT";
import { Canvas } from "@react-three/fiber";

//TODO: improve types

const PictureGallery = ({ images }: any) => {
	console.log(
		`🍀 \n | 🍄 file: Gallery.tsx:6 \n | 🍄 PictureGallery \n | 🍄 images:`,
		images
	);
	const getRandomPlacement = () => {
		const positions = [
			"top-left",
			"top-right",
			"bottom-left",
			"bottom-right",
		];
		const randomIndex = Math.floor(Math.random() * positions.length);
		return positions[randomIndex];
	};

	return (
		<div className={styles.pictureGallery}>
			{images?.map(
				(image: any, index: number) => (
					<Canvas style={{ width: "400px", height: "400px" }}>
						<NFT imgUrl={image.media[0].thumbnail} key={index} />
					</Canvas>
				)
				// <img
				// 	key={index}
				// 	src={image}
				// 	className={`${styles.picture} ${
				// 		styles[getRandomPlacement()]
				// 	}`}
				// 	alt="Gallery Image"
				// />
			)}
		</div>
	);
};

export default PictureGallery;
