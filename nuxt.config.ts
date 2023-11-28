export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  ssr: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  plugins: [
    '~/plugins/fontawesome',
  ],
})
