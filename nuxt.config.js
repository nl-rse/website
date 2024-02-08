import ExpandableTextLine from 'vue-expandable-text-line'

const isDev = process.env.NODE_ENV === 'development'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  generate: {
    fallback: true,
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()
      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },

  // If deploying on github pages
  // http://<username>.github.io/<repository-name>.
  // router: {
  //   // base: '/<repository-name>/'
  //   base: isDev ? '/' : '/website/'
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NL-RSE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      'data-theme': 'light' // https://daisyui.com/docs/default-themes
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/ExpandableTextLine.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: { ExpandableTextLine },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    'nuxt-vite'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    'nuxt-content-body-html',
    '@nuxt/content',
    '@nuxtjs/feed'
  ],

  // Create a feed
  feed: [
    {
      path: '/feed.xml',
      async create (feed, args) {
        feed.options = {
          title: 'NL-RSE Blog and Events',
          link: isDev ? 'https://localhost:3000/feed.xml' : 'https://nl-rse.netlify.app/feed.xml',
          description: 'NL-RSE Blog feed!'
        }
        const { $content } = require('@nuxt/content')

        const posts = await $content('posts')
          .sortBy('date', 'desc')
          .fetch()

        const events = await $content('events')
          .sortBy('date', 'desc')
          .fetch()

        const combinedPosts = [...posts, ...events]

        combinedPosts.forEach((post) => {
          feed.addItem({
            title: post.title,
            content: `
              <p>
                <img
                  alt="Cover image"
                  src="${post.image}"
                >
              </p>
              ${post.bodyHtml}
            `,
            id: post.title,
            link: post.path,
            img: post.image,
            date: new Date(post.date)
          })
        })
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: ['some', 'info']
    }
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
