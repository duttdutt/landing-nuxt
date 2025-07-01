import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxtjs/i18n'],

	devtools: {
		enabled: true,
	},

	srcDir: './src',
	alias: {
		scss: fileURLToPath(new URL('./src/assets/scss', import.meta.url)),
		public: fileURLToPath(new URL('./public', import.meta.url)),
		constants: fileURLToPath(new URL('./constants', import.meta.url)),
	},

	compatibilityDate: '2025-05-15',

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

	typescript: {
		builder: 'vite',
		strict: true,
		typeCheck: true,
	},

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
