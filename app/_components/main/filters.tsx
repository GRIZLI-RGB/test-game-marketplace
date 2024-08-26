"use client";

import { useState } from "react";

import Button from "../button";
import Dropdown from "../dropdown";
import Search from "../search";
import Toggler from "../toggler";
import Chip from "./chip";
import ModalWindow from "../modal-window";
import Input from "../input";

export default function Filters() {
	const [reportRodal, setReportRodal] = useState(false);

	return (
		<>
			<section className="flex items-start justify-between">
				<div className="flex flex-col gap-2 grow">
					<div className="flex items-center gap-1">
						<Chip isActive text="Все" size="lg" />
						<Chip text="Аккаунты" size="lg" />
						<Chip text="Услуги" size="lg" />
						<Dropdown title="Способ доставки" variant="outline" />
					</div>
					<div className="flex items-center gap-1">
						<Toggler label="Только продавцы онлайн" />
						<Toggler
							iconLeft="fast"
							label="Моментальная доставка"
						/>
						<Search
							maxWidth={317}
							placeholder="Поиск по описанию лота..."
							searchIcon="end"
							size="lg"
						/>
					</div>
				</div>
				<Button variant="primary" onClick={() => setReportRodal(true)}>
					Продать Blox Fruits
				</Button>
			</section>
			<ModalWindow
				visible={!reportRodal}
				onClose={() => setReportRodal(false)}
			>
				<h6 className="font-semibold text-[20px] leading-[28px] mb-6">
					Жалоба на 0xHearts.com
				</h6>
				<form className="flex flex-col gap-4">
					<Input type="dropdown" label="Причина жалобы" />
					<Input type="multitext" label="Опишите проблему" />
					<Input type="file" label="Доказательства" />
					<div className="flex items-center gap-2 mt-1">
						<Button variant="outline" widthFull>
							Мне нужна поддержка
						</Button>
						<Button variant="primary" widthFull>
							Пожаловаться
						</Button>
					</div>
				</form>
			</ModalWindow>
		</>
	);
}
