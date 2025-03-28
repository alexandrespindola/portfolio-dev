/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#40ea1e',
				secondary: '#1E831AFF',
				background: '#050505',
			},
		},
	},
	plugins: [],
}
