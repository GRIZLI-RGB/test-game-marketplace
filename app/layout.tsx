import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./styles/globals.css";

const inter = Inter({
	subsets: [
		"cyrillic",
		"cyrillic-ext",
		"latin",
		"latin-ext",
		"greek",
		"greek-ext",
		"vietnamese",
	],
	weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
	title: "Купить робуксы Roblox - без переплат / Биржа FunPay",
	description:
		"На нашей бирже вы можете купить робуксы Roblox напрямую у других игроков. FunPay гарантирует — защищенные сделки, отсутствие посредников и минимальные цены.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
