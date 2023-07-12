import { Canvas } from "@react-three/fiber";
import NFT from "../NFT";
import styles from "./gallery.module.css";

//TODO: improve types
const PictureGallery = ({ images }: any) => {
	return (
		<section className={styles.pictureGallery}>
			{images?.map((image: any, index: number) => (
				<div className={styles.canvasContainer}>
					<div className={styles.canvas}>
						<Canvas key={index}>
							<NFT
								imgUrl={
									image.media[0].thumbnail ||
									image.contract.openSea.imageUrl
								}
							/>
						</Canvas>
					</div>
					<div className={styles.textContainer}>
						<p>{image.contract.name}</p>
						<p>
							${image.contract.symbol} - #
							{image.tokenId.slice(0, 8)}
						</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default PictureGallery;
