/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: ["light", "dark", {
			drugcula: {
				"primary": "#e2df24",
				"secondary": "#68d8d1",
				"accent": "#129b22",
				"neutral": "#161723",
				"base-100": "#35375F",
				"info": "#3298E2",
				"success": "#5CE0AB",
				"warning": "#F6C309",
				"error": "#E46780",
			},
		}, "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
	},
	plugins: [require('@tailwindcss/typography'), require("daisyui")],
}
