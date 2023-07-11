"use client";
import { addImageToHistory, useDispatch } from "@/lib/redux";
import { Canvas, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

export const NFT = (props: JSX.IntrinsicElements["mesh"] | any) => {
	const textures = useLoader(TextureLoader, props.imgUrl);
	const texture = Array.isArray(textures) ? textures[0] : textures;
	const ref = useRef<THREE.Mesh>(null!);
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);
	const imageAspectRatio = texture.image
		? texture.image.width / texture.image.height
		: 1;
	const planeWidth = 3; // Set the desired width of the plane
	const planeHeight = planeWidth / imageAspectRatio;
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(addImageToHistory(props.imgUrl));
		click(!clicked);
	};

	return (
		<>
			<Canvas style={{ width: "300px", height: "300px" }}>
				<mesh
					{...props}
					ref={ref}
					scale={clicked ? [2, 2, 2] : [1, 1, 1]}
					onClick={handleClick}
					onPointerOver={(event) => hover(true)}
					onPointerOut={(event) => hover(false)}
				>
					<planeGeometry args={[planeWidth, planeHeight]} />
					<meshBasicMaterial map={texture} />
				</mesh>
			</Canvas>
		</>
	);
};
