interface Props {
	children: React.ReactNode;
	visible: boolean;
	onClose: () => void;
}

export default function ModalWindow({ children, visible, onClose }: Props) {
	if (visible) {
		return (
			<div className="fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-[2px] flex-middle">
				<div className="bg-black/[24%] w-full h-full absolute" />
				<div className="z-[1] relative">
					<div className="bg-white border border-borders rounded-2xl w-[488px] p-6">
						{children}
					</div>
					<button
						className="bg-white rounded-lg border border-borders flex-middle p-3 hover:bg-[#eee] absolute top-0 -right-4 translate-x-full"
						onClick={onClose}
					>
						<img alt="" src="/icons/close.svg" />
					</button>
				</div>
			</div>
		);
	}
}
