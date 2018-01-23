module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '搅布局',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'y' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'http://at.alicdn.com/t/font_397275_abkkn64rh3g6tj4i.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // const sassResourcesLoader = {
      //   loader: 'sass-resources-loader',
      //   options: {
      //     resources: [
      //      '~/assets/scss/app.scss'
      //     ]
      //   }
      // }
      // // 遍历nuxt定义的loader配置，向里面添加新的配置。
      // config.module.rules.forEach((rule) => {
      //   if (rule.test.toString() === '/\\.vue$/') {
      //     rule.options.loaders.sass.push(sassResourcesLoader)
      //     rule.options.loaders.scss.push(sassResourcesLoader)
      //   }
      //   if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {
      //     rule.use.push(sassResourcesLoader)
      //   }
      // })
    }
  },
  css: [
    'element-ui/lib/theme-chalk/index.css'
    // {src: `~/assets/scss/app.scss`, lang: 'sass'}
  ],
  plugins: [
    {src: 'plugins/element-ui.js', ssr: true},
    {src: 'plugins/vue-resource.js', ssr: true},
    {src: 'plugins/header.js'}
  ]
}
