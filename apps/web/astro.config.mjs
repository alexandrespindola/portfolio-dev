// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://spindola.me",
	output: "static",
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
