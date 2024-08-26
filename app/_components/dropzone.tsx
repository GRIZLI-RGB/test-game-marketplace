"use client";

import clsx from "clsx";
import { useState } from "react";

export default function Dropzone() {
	const [hoverInput, setHoverInput] = useState(false);

	return (
		<div className={clsx("text-center py-4 px-[27px] border border-dashed border-placeholders rounded-lg relative transition-all", hoverInput && "bg-black/5")}>
			<input
				onMouseEnter={() => setHoverInput(true)}
				onMouseLeave={() => setHoverInput(false)}
				type="file"
				className="bg-red-500 absolute left-0 top-0 right-0 bottom-0 z-[5] opacity-0 cursor-pointer"
			/>
			<img className="mx-auto" src="/icons/upload.svg" alt="" />
			<p className="mt-3 mb-1 font-medium leading-[24px]">
				Выберите файл или перетащите его сюда
			</p>
			<span className="text-secondaryText text-[14px] leading-[20px]">
				JPEG или PNG до 5 MB
			</span>
		</div>
	);
}
