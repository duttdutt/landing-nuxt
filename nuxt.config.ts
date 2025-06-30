// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'single',
        jsx: false,
        indent: 'tab',
        commaDangle: "always",
        blockSpacing: true,
        arrowParens: true
      },
      formatters: {

      }
    }
  },

  typescript: {
    builder: 'vite',
    strict: true,
    typeCheck: true
  },

  devtools: {
    enabled: true
  },

  modules: ['@nuxt/eslint']
})
