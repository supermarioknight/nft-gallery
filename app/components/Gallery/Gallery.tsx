import { Canvas } from "@react-three/fiber";
import { OwnedBaseNft } from "alchemy-sdk";
import NFT from "../NFT";
import styles from "./gallery.module.css";

interface PictureGalleryProps {
	images: OwnedBaseNft[] | undefined;
}

const PictureGallery = ({ images }: PictureGalleryProps) => {
	return (
		<section className={styles.pictureGallery}>
			{images?.map((image: any, index: number) => (
				<div className={styles.canvasContainer}>
					<div className={styles.canvas}>
						<Canvas key={index}>
							<NFT
								imgUrl={
									image.media.length < 1
										? image.contract.openSea.imageUrl
										: image.media[0].thumbnail
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
