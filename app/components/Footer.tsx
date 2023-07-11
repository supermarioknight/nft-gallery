import { useSelector } from "@/lib/redux";
import Image from "next/image";

function Footer() {
	const clickHistory = useSelector((state) => state.clickHistory);

	return (
		<div>
			{clickHistory?.images.map((c) => {
				return <Image src={c} width={50} height={50} alt="thumbnail" />;
			})}
		</div>
	);
}

export default Footer;
