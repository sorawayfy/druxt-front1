export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'druxt-empty',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'druxt-site'
  ],

  // druxt: {
  //   baseUrl: 'http://druxtsite/'
  // },

  druxt: {
    baseUrl: 'http://druxtsite/',
    // blocks: {
    //   query: { fields: [] },
    // },
    // entity: {
    //   components: { fields: false },
    //   query: { schema: true },
    // },
    // menu: {
    //   query: { requiredOnly: true },
    // },
    // views: {
    //   query: { bundleFilter: true },
    // },
  },

  // proxy: [ 
  //   'http://druxtsite/sites/default/files'
  // ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
