import Dropdown from "./dropdown";
import Dropzone from "./dropzone";
import Multiarea from "./multi-area";

interface Props {
	label: string;
	type: "file" | "multitext" | "dropdown";
}

export default function Input({ label, type }: Props) {
	return (
		<div>
			<label className="pb-1 text-[14px] leading-[20px] text-secondaryText block">
				{label}
			</label>
			{type === "dropdown" && (
				<Dropdown
					placeholder="Выберите причину жалобы"
					variant="outline"
				/>
			)}
			{type === "multitext" && <Multiarea />}
			{type === "file" && <Dropzone />}
		</div>
	);
}
