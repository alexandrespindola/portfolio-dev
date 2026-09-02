/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#40ea1e',
				secondary: '#1E831A',
				background: '#050505',
				// Tailwind's default "gray" scale leans blue. Keep every UI surface neutral.
				gray: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
					950: '#0a0a0a',
				},
			},
		},
	},
	plugins: [],
}
