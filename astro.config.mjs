import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Wunder',
			customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
			social: {
				github: 'https://github.com/stardoom4/alphalight',
				raindrop: 'https://raindrop.io/Celestial-Entity/main-43067410',
			},
			sidebar: [
				{
					label: 'Celestial Entity',
					autogenerate: { directory: 'celestial-entity' },
				},
				{
					label: 'Astronomy',
					autogenerate: { directory: 'astronomy' },
				},
				{
					label: 'Science',
					autogenerate: { directory: 'science' },
				},
			],
		}),
	],
});
