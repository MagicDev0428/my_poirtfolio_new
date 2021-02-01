
export default {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Petousis Menelaos | Front-End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'cv, resume, portfolio, web, developer, development, menepet, Petousis, Menelaos, front end'
      },
      { hid: 'author', name: 'author', content: 'Petousis Menelaos' },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: '9sEWsJkZcwBqggjqv64dtaxGbzGJbMXzqov0MLM0F34'
      }, {
        vmid: 'og:title',
        name: 'og:title',
        content: 'About | Petousis Menelaos'
      }, {
        vmid: 'description',
        name: 'description',
        content: 'Petousis Menelaos | Personal site with my resume and ability to contact me!'
      }, {
        vmid: 'og:description',
        name: 'og:description',
        content: 'Petousis Menelaos | Personal site with my resume and ability to contact me!'
      }
    ],
    script: [
      { src: 'https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#668fab' },
  /*
  ** Global CSS
  */
  css: [],
  /**
   * Global Page Transition
   */
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],
  googleAnalytics: {
    id: 'UA-155164825-1'
  },
  /**
   * Sass file import
   */
  styleResources: {
    scss: ['assets/styles/main.scss']
  },
  pwa: {
    manifest: {
      name: 'Petousis Menelaos | Personal Website',
      short_name: 'Petousis Menelaos | Personal Website',
      background_color: '#f4f4f4',
      theme_color: '#668fab',
      description: 'Petousis Menelaos Front-end Dev Resume site"',
      lang: 'en-US',
      categories: ['cv', 'resume', 'portfolio', 'web', 'developer', 'development', 'menepet', 'front end']
    },
    meta: {
      name: 'Petousis Menelaos | Front-End Developer',
      author: 'Petousis Menelaos <menepet@gmail.com>',
      description: 'Petousis Menelaos | Personal site with my resume and ability to contact me!',
      theme_color: '#668fab'
    },
    workbox: {
      offlineAnalytics: true,
      offlineStrategy: 'StaleWhileRevalidate',
      runtimeCaching: [
        {
          urlPattern: 'https://cdn.linearicons.com/.*',
          handler: 'cacheFirst',
          strategyOptions: {
            cacheName: 'linear-icons'
          }
        }
      ]
    }
  },
  generate: {
    exclude: [
      /^(?=.*\portfolio\b).*$/
    ]
  },
  sitemap: {
    hostname: 'https://menepet.me',
    gzip: true,
    exclude: [
      '/portfolio'
    ],
    routes: [
      '/index',
      '/about',
      '/contact',
      '/resume'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },

    html: {
      minify: {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
