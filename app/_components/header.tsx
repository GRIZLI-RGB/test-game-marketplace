import Button from "./button";
import Dropdown from "./dropdown";
import Logo from "./logo";
import Search from "./search";

export default function Header() {
	return (
		<header className="py-3 bg-white border-b border-borders">
			<div className="container flex items-center justify-between">
				<div className="flex gap-[50px] items-center grow">
					<Logo width={118} height={24} />
					<Search
						placeholder="Поиск игр и приложений..."
						maxWidth={384}
					/>
				</div>
				<div className="flex items-center gap-6">
					<div className="flex items-center gap-4">
						<Dropdown title="Поддержка" variant="ghost" />
						<Dropdown title="Русский" variant="ghost" />
						<Dropdown title="RUB" variant="ghost" />
					</div>
					<div className="flex items-center gap-2">
						<Button variant="outline">Вход</Button>
						<Button variant="primary">Регистрация</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
