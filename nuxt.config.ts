import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@nuxtjs/google-fonts', '@nuxt/devtools'],

	devtools: {
		enabled: true,
	},
	srcDir: './src',

	/**
	 * Aliases
	 */
	alias: {
		scss: fileURLToPath(new URL('./src/assets/scss', import.meta.url)),
		public: fileURLToPath(new URL('./public', import.meta.url)),
		constants: fileURLToPath(new URL('./constants', import.meta.url)),
	},
	compatibilityDate: '2025-05-15',

	/**
	 * Vite
	 */
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "scss/_main.scss" as *;',
				},
			},
			preprocessorMaxWorkers: true,
		},
		vue: {
			style: {
				trim: true,
			},
			features: {
				optionsAPI: false,
			},
		},
	},

	/**
	 * TypeScript
	 */
	typescript: {
		builder: 'vite',
		strict: true,
		typeCheck: true,
	},

	/**
	 * ESLint
	 */
	eslint: {
		config: {
			standalone: false,
			stylistic: {
				commaDangle: 'only-multiline',
				indent: 'tab',
			},
		},
	},

	/**
	 * Fonts
	 * LINK: https://google-fonts.nuxtjs.org/
	 */
	googleFonts: {
		families: {
			Montserrat: {
				wght: '200..900',
				ital: '200..700',
			},
		},
		display: 'swap',
		prelod: true,
		outputDir: 'assets',
		stylePath: 'google-fonts.css',
	},

	/**
	 * Internationalization
	 * LINK: https://i18n.nuxtjs.org/
	 */
	i18n: {
		detectBrowserLanguage: {
			useCookie: true,
			fallbackLocale: 'ru',
		},
		strategy: 'no_prefix',
		locales: [
			{
				code: 'en',
				name: 'English',
				file: 'en.json',
			},
			{
				code: 'ru',
				name: 'Русский',
				file: 'ru.json',
			},
		],
		lazy: true,
		defaultLocale: 'ru',
	},
})
