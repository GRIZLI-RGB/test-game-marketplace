import clsx from "clsx";
import Button from "../button";

const HEAD = ["Описание", "Продавец", "Наличие", "Цена"];

const DATA = [
	{
		id: 1,
		opinion: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
		seller: {
			name: "Продавец 1",
			score: 4.5,
			dateRegister: new Date("2022-01-01"),
			feedbacks_count: 4266,
		},
		items_count: 123,
		price: 0.55,
	},
	{
		id: 2,
		opinion:
			"💎✨Неограниченный доступ к играм | 30 дней✨💎, Игровой сервер",
		seller: {
			name: "Продавец 2",
			score: 2.6,
			dateRegister: new Date("2021-06-15"),
			feedbacks_count: 3000,
		},
		items_count: 200,
		price: 1.2,
	},
	{
		id: 3,
		opinion:
			"🚀🏆Услуги по прокачке аккаунта | 50 часов🏆🚀, Профессиональный сервис",
		seller: {
			name: "Продавец 3",
			score: 4.2,
			dateRegister: new Date("2020-09-10"),
			feedbacks_count: 1500,
		},
		items_count: 75,
		price: 0.75,
	},
	{
		id: 4,
		opinion:
			"🎮🛠️Создание игровых аккаунтов | 7 дней🛠️🎮, Аккаунт-менеджер",
		seller: {
			name: "Продавец 4",
			score: 5.0,
			dateRegister: new Date("2023-02-01"),
			feedbacks_count: 800,
		},
		items_count: 50,
		price: 1.0,
	},
	{
		id: 5,
		opinion: "🚀🎉Тренировка персонажа | 14 дней🎉🚀, Тренер",
		seller: {
			name: "Продавец 5",
			score: 4.9,
			dateRegister: new Date("2023-05-20"),
			feedbacks_count: 1200,
		},
		items_count: 30,
		price: 1.5,
	},
];

const getTimeAgo = (date: Date) => {
	const secondsAgo = Math.floor((Date.now() - date.getTime()) / 1000);
	const minutesAgo = Math.floor(secondsAgo / 60);
	const hoursAgo = Math.floor(minutesAgo / 60);
	const daysAgo = Math.floor(hoursAgo / 24);
	const yearsAgo = Math.floor(daysAgo / 365);

	if (yearsAgo > 0) return `${yearsAgo} год${yearsAgo > 1 ? "а" : ""} назад`;
	if (daysAgo > 0) return `${daysAgo} день${daysAgo > 1 ? "я" : ""} назад`;
	if (hoursAgo > 0) return `${hoursAgo} час${hoursAgo > 1 ? "а" : ""} назад`;
	if (minutesAgo > 0)
		return `${minutesAgo} минут${minutesAgo > 1 ? "ы" : ""} назад`;
	return "менее минуты назад";
};

export default function ItemsTable() {
	return (
		<>
			<table className="w-full">
				<thead>
					<tr>
						{HEAD.map((item) => (
							<th key={item} className="pb-1">
								<div
									className={clsx(
										"flex items-center gap-1",
										["Описание", "Продавец"].includes(item)
											? "justify-start"
											: "justify-end cursor-pointer hover:brightness-50"
									)}
								>
									<span className="text-[14px] leading-[20px] text-secondaryText font-normal">
										{item}
									</span>
									{["Наличие", "Цена"].includes(item) && (
										<img src="/icons/sort.svg" alt="" />
									)}
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{DATA.map((item) => (
						<tr
							key={item.id}
							className={clsx(
								item.id !== 1 && "border-t border-borders"
							)}
						>
							<td className="py-4 leading-[24px] max-w-[616px]">
								{item.opinion}
							</td>
							<td className="py-4">
								<div className="flex gap-2 items-start">
									<div className="relative inline-block">
										<img src="/images/avatar.png" alt="" />
										<div className="absolute rounded-full w-3 h-3 border-2 border-white -bottom-0.5 -right-0.5 bg-[#1DB462]" />
									</div>
									<div className="flex flex-col gap-px">
										<div className="flex items-center gap-1">
											<p className="font-medium leading-[24px]">
												{item.seller.name}
											</p>
											<div
												className={clsx(
													"px-1 py-0.5 rounded-md leading-[18px] flex items-center gap-0.5",
													item.seller.score === 5
														? "bg-positive/[8%]"
														: item.seller.score < 4
														? "bg-negative/[8%]"
														: "bg-gold/[8%]"
												)}
											>
												<span
													className={clsx(
														"text-[12px] font-semibold",
														item.seller.score === 5
															? "text-positive"
															: item.seller
																	.score < 4
															? "text-negative"
															: "text-gold"
													)}
												>
													{item.seller.score}
												</span>
												<img
													src={`/icons/feedback-stars/${
														item.seller.score === 5
															? "positive"
															: item.seller
																	.score < 4
															? "negative"
															: "gold"
													}.svg`}
													alt=""
												/>
											</div>
										</div>
										<p className="text-secondaryText leading-[18px] text-[12px]">
											{getTimeAgo(
												item.seller.dateRegister
											)}
											, {item.seller.feedbacks_count}{" "}
											отзывов
										</p>
									</div>
								</div>
							</td>
							<td className="py-4 text-right leading-[24px] w-[104px]">
								{item.items_count}
							</td>
							<td className="py-4 text-right font-semibold leading-[24px] w-[104px]">
								<div className="flex flex-col gap-1 items-end">
									<span>{item.price} ₽</span>
									<div className="flex items-center gap-1">
										<img src="/icons/fast.svg" alt="" />
										<img src="/icons/attach.svg" alt="" />
									</div>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="mt-6">
				<Button variant="outline" widthFull size="lg">
					Показать больше предложений
				</Button>
			</div>
		</>
	);
}
