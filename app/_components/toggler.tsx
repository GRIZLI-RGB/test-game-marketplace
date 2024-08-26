"use client";

import clsx from "clsx";
import { useState } from "react";

interface Props {
	label: string;
	iconLeft?: string;
}

export default function Toggler({ label, iconLeft }: Props) {
	const [active, setActive] = useState(false);

	return (
		<div className="rounded-lg border border-borders px-3 py-2 flex items-center gap-2">
			{iconLeft && <img src={`/icons/${iconLeft}.svg`} alt="" />}
			<p className="text-[14px] leading-[20px]">{label}</p>
			<div
				className={clsx(
					active ? "bg-positive" : "bg-borders",
					"w-7 h-4 rounded-full relative cursor-pointer"
				)}
				onClick={() => setActive(!active)}
			>
				<div className={clsx("bg-white rounded-full w-3 h-3 absolute top-1/2 -translate-y-1/2", active ? "right-0.5" : "left-0.5")} />
			</div>
		</div>
	);
}
