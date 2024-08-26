import clsx from "clsx";

interface Props {
	text: string;
	count?: number;
	isActive?: boolean;
	onClick?: () => void;
	size?: "sm" | "md" | "lg";
}

export default function Chip({
	text,
	count,
	isActive = false,
	onClick,
	size = "md",
}: Props) {
	return (
		<button
			onClick={onClick}
			className={clsx(
				"inline-flex items-center justify-center gap-1.5 px-3 rounded-md",
				isActive
					? "bg-chips text-white cursor-default"
					: "bg-chips/[8%] hover:bg-chips/20 text-chips cursor-pointer",
				size === "md" && "py-1.5",
				size === "lg" && "py-2"
			)}
		>
			<span className="text-[14px] leading-[20px] font-medium">
				{text}
			</span>
			{count && (
				<span className="text-[10px] leading-[20px] tracking-[0.08em] font-semibold">
					{count}
				</span>
			)}
		</button>
	);
}
