import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				borders: "#E8EBF0",
				placeholders: "#9E9DA4",
				chips: "#5C80FD",
				baseText: "#36394A",
				secondaryText: "#6E7076",
				primary: "#4E75FF",
				primaryHover: "#355ff7",
				positive: "#1DB462",
				negative: "#FF5C5C",
				gold: "#E1B000",
			},
			boxShadow: {
				search: "0px 1px 2px rgba(153, 161, 176, 0.16), 0px 0px 0px 1px rgba(17, 38, 66, 0.08)",
				searchFocus:
					"0px 1px 2px rgba(153, 161, 176, 0.16), 0px 0px 0px 1px rgba(17, 38, 66, 0.3)",
				primaryButton:
					"0px 1px 2px rgba(57, 89, 204, 0.5), 0px 0px 0px 1px #4665D2",
				outlineButton:
					"0px 1px 2px rgba(164, 172, 185, 0.24), 0px 0px 0px 1px rgba(18, 55, 105, 0.08)",
			},
		},
	},
	plugins: [],
};
export default config;
