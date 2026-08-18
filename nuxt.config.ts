// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devServer: {
    port: 43129
  },
  modules: ['@nuxt/content'],
  content: {
    experimental: {
      nativeSqlite: true
    }
  },
  devtools: { enabled: false },
  nitro: {}
})
