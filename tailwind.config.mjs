/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				saudi: "#156839"
			},
			fontFamily: {
				"merriweather": ["Merriweather", 'serif']
			}
		},
	},
	plugins: [],
}
