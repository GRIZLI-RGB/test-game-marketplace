import Image from "next/image";

interface Props {
	width: number;
	height: number;
}

export default function Logo({ width, height }: Props) {
	return (
		<a href="/">
			<Image
				className="inline-block"
				src={"/images/logo.svg"}
				alt={"STARVELL"}
				width={width}
				height={height}
			/>
		</a>
	);
}
