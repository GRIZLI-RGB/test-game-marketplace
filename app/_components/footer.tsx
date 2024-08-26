import Logo from "./logo";

const SUPPORT_LINKS = [
	{ text: "Написать в поддержку", link: "#" },
	{
		text: "Политика конфиденциальности",
		link: "#",
	},
	{
		text: "Пользовательское соглашение",
		link: "#",
	},
];

const SOCIAL_LINKS = [
	{
		link: "#",
		icon: "telegram",
	},
	{
		link: "#",
		icon: "discord",
	},
	{
		link: "#",
		icon: "vk",
	},
	{
		link: "#",
		icon: "youtube",
	},
];

export default function Footer() {
	return (
		<footer className="mt-auto border-t border-borders bg-white pt-8 pb-11">
			<div className="container flex items-start justify-between">
				<div className="flex items-start gap-[88px]">
					<div className="leading-[20px] text-secondaryText text-[14px] max-w-[296px]">
						<Logo width={118} height={24} />
						<p className="mt-3 mb-2">
							© 2024 STARVELL, лучший маркетплейс цифровых товаров
							и услуг
						</p>
						<p>Дизайн сделан в 0xHearts.com</p>
					</div>
					<div>
						<h6 className="text-[#33363E] font-medium">
							Поддержка
						</h6>
						<ul className="mt-2 text-secondaryText flex flex-col gap-1 text-[14px]">
							{SUPPORT_LINKS.map(({ text, link }) => (
								<li key={text} className="leading-[20px]">
									<a
										className="hover:brightness-50"
										href={link}
									>
										{text}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<section className="flex gap-3 items-center">
					{SOCIAL_LINKS.map(({ link, icon }) => (
						<a
							rel="noopener noreferrer"
							style={{
								background: `url('/icons/social/${icon}-bg.png') no-repeat center`,
							}}
							className="group relative flex-middle inline-flex w-11 h-11 rounded-full transition-all duration-300 ease-in-out transform hover:rotate-180"
							key={icon}
							href={link}
							target="_blank"
						>
							<img
								className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-rotate-180"
								src={`/icons/social/${icon}.svg`}
								alt={`Иконка ${icon}`}
							/>
						</a>
					))}
				</section>
			</div>
		</footer>
	);
}
