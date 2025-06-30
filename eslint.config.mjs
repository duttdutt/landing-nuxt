// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	antfu({
		type: 'app',
		vue: true,
		formatters: {
			css: true,
		},
		stylistic: {
			quotes: 'single',
			indent: 'tab',
		},
		typescript: true,
	}),
)
