import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'
require('dotenv').config()
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  srcDir: 'src',

  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/firebase.js' },
    { src: '~/plugins/vuetify.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {

  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    keyFb: process.env.KEY_API_FIREBASE,
    authDomainFirebase: process.env.AUTH_DOMAIN_FIREBASE,
    dbUrlFb: process.env.DATABASE_URL_FIREBASE,
    projectIdFb: process.env.PROJECT_ID_FIREBASE,
    storageFb: process.env.STORAGE_BUCKET_FIREBASE,
    messajeSendFb: process.env.MESSAGIN_SENDER_ID_FIREBASE,
    appIdFb: process.env.APPI_ID_FIREBASE
  }
}
