// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  typescript: {
    builder: 'vite',
    strict: true,
    typeCheck: true
  },
  devtools: {
    enabled: true
  }
})
