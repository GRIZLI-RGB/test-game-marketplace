import Footer from "../_components/footer";
import Header from "../_components/header";
import Categories from "../_components/main/categories";
import Filters from "../_components/main/filters";
import ItemsTable from "../_components/main/items-table";
import SeoText from "../_components/main/seo-text";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="relative max-w-[1256px] mx-auto border border-bordes rounded-2xl bg-white w-full my-6 px-16 py-10">
				<img
					className="right-0 top-0 absolute"
					src="/images/welcome-game-photo.png"
					alt=""
				/>
				<div className="max-w-[680px]">
					<h1 className="font-semibold text-[24px] leading-[32px]">
						Робуксы Roblox
					</h1>
					<p className="mt-1 mb-6 leading-[24px] text-secondaryText">
						Какой-то длинный текст, связанный с SEO-оптимизацией
						относительно данной категории, на которую вы сейчас
						смотрите. Какой-то длинный текст, связанный с
						SEO-оптимизацией относительно данной категории, на
						которую вы сейчас смотрите.
					</p>
					<Categories />
				</div>
				<div className="my-6 pt-6 pb-10 border-y border-borders">
					<Filters />
					<div className="mt-[31px]">
						<ItemsTable />
					</div>
				</div>
				<SeoText />
			</main>
			<Footer />
		</div>
	);
}
