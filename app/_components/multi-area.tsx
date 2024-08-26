"use client";

import { useRef, useState } from "react";

export default function Multiarea() {
	const [text, setText] = useState<string>("");
	const [height, setHeight] = useState<number>(110);
	const maxChars: number = 200;
	const textAreaRef = useRef<HTMLDivElement | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		const startY = e.clientY;

		const handleMouseMove = (e: MouseEvent) => {
			const newHeight = height + (e.clientY - startY);
			if (newHeight > 110 && newHeight < 180) {
				setHeight(newHeight);
				if (textAreaRef.current) {
					textAreaRef.current.style.height = `${newHeight}px`;
				}
			}
		};

		const handleMouseUp = () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
	};

	return (
		<div
			ref={textAreaRef}
			className="text-area-container w-full rounded-lg px-2.5 py-2 border border-borders relative"
			style={{ height: `${height}px` }}
		>
			<textarea
				className="w-full placeholder:text-placeholders leading-[24px] resize-none"
				value={text}
				onChange={handleChange}
				style={{ height: "100%" }}
				maxLength={maxChars}
				placeholder="Введите ваш текст"
			/>
			<div className="gap-1.5 flex items-center absolute right-2.5 bottom-2">
				<span className="text-[12px] leading-[18px] font-medium tracking-[0.02em] text-placeholders">
					{text.length}/{maxChars}
				</span>
				<div
					className="cursor-pointer hover:brightness-50 active:brightness-0"
					onMouseDown={handleMouseDown}
				>
					<img src="/icons/resizer.svg" alt="" />
				</div>
			</div>
		</div>
	);
}
