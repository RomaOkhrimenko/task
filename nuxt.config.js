export default {
  head: {
    title: 'TEST TASK',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: []
  },

  css: ['~/assets/styles/index.scss'],

  plugins: [
    {
      src: '~/plugins/gsap.ts',
      mode: 'client'
    }
  ],

  server: {
    host: 'localhost',
    port: '3000'
  },

  components: true,


  buildModules: [
    '@nuxtjs/pwa',
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module'
  ],

  modules: ['@nuxtjs/axios'],

  build: {},

  axios: {
    baseURL: '/'
  }
}
