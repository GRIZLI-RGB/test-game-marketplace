"use client";

import { useClickAway } from "@uidotdev/usehooks";
import clsx from "clsx";
import { useState } from "react";

interface Props {
	variant: "ghost" | "outline";
	title?: string;
	placeholder?: string;
}

export default function Dropdown({ variant, title, placeholder }: Props) {
	const [open, setOpen] = useState(false);

	const ref: any = useClickAway(() => setOpen(false));

	return (
		<div className="relative" ref={ref}>
			<div
				className={clsx(
					"flex items-center group cursor-pointer transition-all",
					variant === "ghost" && "gap-1",
					variant === "outline" &&
						"gap-2 px-3 py-2 hover:bg-black/[4%] rounded-lg border border-borders justify-between"
				)}
				gap-1
				onClick={() => setOpen(!open)}
			>
				<span
					className={clsx(
						"text-[14px] leading-[20px] transition-all duration-[120ms]",
						variant === "ghost" &&
							"text-secondaryText group-hover:brightness-50",
						variant === "outline" &&
							placeholder &&
							"text-placeholders text-[16px] leading-[24px]"
					)}
				>
					{title || placeholder}
				</span>
				<img
					className={clsx(
						"group-hover:brightness-50 transition-all duration-[120ms]",
						open && "-rotate-180"
					)}
					src="/icons/arrow-down.svg"
					alt=""
				/>
			</div>
			{open && (
				<ul
					className={clsx(
						"border border-slate-200 absolute min-w-[100px] left-0 z-[1] translate-y-full overflow-hidden",
						variant === "ghost" &&
							"-bottom-3 rounded-md bg-slate-100",
						variant === "outline" &&
							"-bottom-2 rounded-lg right-0 bg-white p-1"
					)}
				>
					{[...new Array(3)].map((_, i) => (
						<li
							onClick={() => setOpen(false)}
							key={i}
							className={clsx(
								"text-[14px] leading-[20px] transition-colors cursor-pointer",
								variant === "ghost" &&
									"hover:bg-slate-200 px-3.5 py-2",
								variant === "outline" &&
									"rounded-lg hover:bg-[#F7F7F7] p-2"
							)}
						>
							{i + 1}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
