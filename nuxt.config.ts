import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	modules: [
		'@nuxt/eslint',
		'@nuxtjs/i18n',
		'@nuxtjs/google-fonts',
		'@nuxt/devtools',
		'@vueuse/nuxt',
		'@nuxtjs/color-mode',
	],

	ssr: true,
	devtools: {
		enabled: true,
	},

	/**
	 * App
	 */
	app: {
		head: {
			title: 'GlovBox',
			viewport: 'width=device-width,initial-scale=1',
			htmlAttrs: { lang: 'ru' },
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
			],
		},
	},
	/**
	 * Color Mode
	 */
	colorMode: {
		preference: 'dark',
		fallback: 'dark',
		storage: 'cookie',
	},
	runtimeConfig: {
		telegramToken: process.env.NUXT_TELEGRAM_TOKEN,
		telegramChatId: process.env.NUXT_TELEGRAM_CHAT_ID,
	},

	dir: {
		public: '../public',
	},
	srcDir: 'src',

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
					// additionalData: '@use main.scss',
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
		preload: true,
		useStylesheet: true,
	},

	/**
	 * Internationalization
	 * LINK: https://i18n.nuxtjs.org/
	 */
	i18n: {
		detectBrowserLanguage: false,
		strategy: 'prefix',
		locales: [
			{
				code: 'en',
				language: 'en',
				name: 'English',
				file: 'en.json',
			},
			{
				code: 'ru',
				language: 'ru',
				name: 'Русский',
				file: 'ru.json',
			},
		],
		lazy: true,
		defaultLocale: 'ru',
		bundle: {
			optimizeTranslationDirective: false,
		},
		vueI18n: './i18n.config.ts',
	},
})
