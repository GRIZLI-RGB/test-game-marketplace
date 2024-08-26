"use client";

import { useState } from "react";

import Chip from "./chip";

const CATEGORIES = [
	"Робуксы",
	"Подарочные карты",
	"Донат робуксов (паки)",
	"Вип-сервер",
	"Аккаунты",
	"Премиум",
	"Подарочные карты",
	"Донат робуксов (паки)",
	"Премиум",
	"Вип-сервер",
	"Аккаунты",
	"Скины",
	"Аккаунты",
	"Премиум",
	"Подарочные карты",
	"Вип-сервер",
	"Аккаунты",
	"Prime Gaming",
	"Вип-сервер",
	"Аккаунты",
	"Донат робуксов (паки)",
	"Премиум",
	"Скины",
	"Prime Gaming",
	"Вип-сервер",
	"Аккаунты",
];

export default function Categories() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="flex gap-2 flex-wrap">
			{CATEGORIES.map((category, index) => (
				<Chip
					onClick={() => setActiveIndex(index)}
					key={category}
					text={category}
					count={index % 2 === 0 ? 1233 : 395}
					isActive={activeIndex === index}
				/>
			))}
		</section>
	);
}
