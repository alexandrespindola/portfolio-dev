// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://spindola.me",
	output: "static",
	integrations: [tailwind(), sitemap()],
});
