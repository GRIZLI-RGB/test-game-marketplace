"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface Props {
	placeholder?: string;
	maxWidth?: number;
	searchIcon?: "start" | "end";
	size?: "sm" | "md" | "lg";
}

export default function Search({
	placeholder = "Поиск",
	maxWidth,
	searchIcon = "start",
	size = "md",
}: Props) {
	const [focused, setFocused] = useState(false);

	return (
		<div
			className={clsx(
				"flex gap-3 items-center px-3 rounded-md w-full",
				!focused ? "shadow-search" : "shadow-searchFocus",
				size === "md" && "h-8",
				size === "lg" && "h-9"
			)}
			style={{
				maxWidth: maxWidth ? `${maxWidth}px` : "100%",
			}}
		>
			{searchIcon === "start" && (
				<Image src="/icons/search.svg" alt="" width={16} height={16} />
			)}
			<input
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				className="text-[14px] placeholder:text-placeholders leading-[20px]"
				type="text"
				placeholder={placeholder}
			/>
			{searchIcon === "end" && (
				<Image src="/icons/search.svg" alt="" width={16} height={16} />
			)}
		</div>
	);
}
