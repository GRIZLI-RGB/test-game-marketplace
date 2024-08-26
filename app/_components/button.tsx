"use client";

import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	variant: "primary" | "outline" | "ghost";
	widthFull?: boolean;
	size?: "sm" | "md" | "lg";
	onClick?: () => void;
}

export default function Button({
	children,
	variant,
	widthFull,
	size = "md",
	onClick = () => {},
}: Props) {
	return (
		<button
			onClick={onClick}
			className={clsx(
				"px-3 font-medium rounded-md",
				variant === "primary" &&
					"text-white shadow-primaryButton bg-primary hover:bg-primaryHover",
				variant === "outline" &&
					"shadow-outlineButton bg-white hover:bg-black/[4%]",
				widthFull && "w-full",
				size === "sm" && "text-[12px] leading-[16px] py-1",
				size === "md" && "text-[14px] leading-[20px] py-1.5",
				size === "lg" && "text-[16px] leading-[24px] py-2"
			)}
		>
			{children}
		</button>
	);
}
