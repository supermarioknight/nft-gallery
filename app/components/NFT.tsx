import { useDispatch } from "@/lib/redux";
import { addImageToHistory } from "@/lib/redux";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, useState, FC } from "react";
import { TextureLoader, Mesh } from "three";

interface NFTProps {
	imgUrl: string;
}

const NFT = (props: NFTProps) => {
	const textures = useLoader(TextureLoader, props.imgUrl);
	const texture = Array.isArray(textures) ? textures[0] : textures;

	const ref = useRef<Mesh>(null);
	const [hovered, setHovered] = useState(false);
	const [clicked, setClicked] = useState(false);

	const imageAspectRatio = texture.image
		? texture.image.width / texture.image.height
		: 1;
	const planeWidth = 4; // Set the desired width of the plane
	const planeHeight = planeWidth / imageAspectRatio;

	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(addImageToHistory(props.imgUrl));
		setClicked(!clicked);
	};

	useFrame(({ clock }) => {
		if (ref.current) {
			const time = clock.getElapsedTime();
			const positionX = Math.sin(time * 0.6) * 0.2; // Adjust the movement range and speed as needed
			const positionY = Math.cos(time * 0.1) * 0.3; // Adjust the movement range and speed as needed
			ref.current.position.x = positionX;
			ref.current.position.y = positionY;
		}
	});

	return (
		<>
			<pointLight position={[10, 10, 10]} />
			<mesh
				{...props}
				ref={ref}
				scale={clicked ? [4, 4, 4] : [2, 2, 2]}
				onClick={handleClick}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
			>
				<planeGeometry args={[planeWidth, planeHeight]} />
				<meshBasicMaterial map={texture} />
			</mesh>
		</>
	);
};

export default NFT;
