import { Canvas } from "@react-three/fiber";
import NFT from "../NFT";
import styles from "./gallery.module.css";

//TODO: improve types
const PictureGallery = ({ images }: any) => {
	return (
		<section className={styles.pictureGallery}>
			{images?.map((image: any, index: number) => (
				<Canvas key={index} style={{ width: "350px", height: "350px" }}>
					<NFT imgUrl={image.media[0].thumbnail} />
				</Canvas>
			))}
		</section>
	);
};

export default PictureGallery;
