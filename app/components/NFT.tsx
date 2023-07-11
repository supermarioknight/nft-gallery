import { useDispatch } from "@/lib/redux";
import { addImageToHistory } from "@/lib/redux/";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";

export const NFT = (props: any) => {
	const textures = useLoader(TextureLoader, props.imgUrl);
	const texture = Array.isArray(textures) ? textures[0] : textures;

	const ref = useRef<THREE.Mesh>();
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

	const { size } = useThree(); // Get the size of the canvas

	useFrame(({ clock }) => {
		if (ref.current) {
			const time = clock.getElapsedTime();
			const positionX = Math.sin(time * 0.3) * 1; // Adjust the movement range and speed as needed
			const positionY = Math.cos(time * 0.3) * 1; // Adjust the movement range and speed as needed
			ref.current.position.x = positionX;
			ref.current.position.y = positionY;
		}
	});

	return (
		<>
			<mesh
				{...props}
				ref={ref}
				scale={clicked ? [2, 2, 2] : [1, 1, 1]}
				onClick={handleClick}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
			>
				<planeGeometry args={[planeWidth, planeHeight]} />
				<meshBasicMaterial map={texture} />
			</mesh>
			<mesh>
				<planeGeometry args={[size.width, size.height]} />
				<meshBasicMaterial color="transparent" visible={false} />
			</mesh>
		</>
	);
};
