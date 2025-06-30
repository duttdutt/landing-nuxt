// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  antfu({
    formatters: {
      html: true,
      css: true,
      scss: true,
      markdown: true
    },
    pnpm: true,
    typescript: true,
    vue: true
  }),
})

