// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable SSR for proper static generation
  // This is needed for yarn generate to pre-render content
  ssr: true,

  // Compatibility and future flags
  compatibilityDate: '2024-11-20',

  // Modules - buildModules are merged into modules in Nuxt 3
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],

  // Global CSS
  css: [
    '~/assets/css/main.css'
  ],

  // Auto import components
  components: true,

  // App config replaces head in Nuxt 3
  app: {
    head: {
      title: 'NL-RSE',
      htmlAttrs: {
        'data-theme': 'light' // https://daisyui.com/docs/default-themes
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The Netherlands Research Software Engineers community' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Content module configuration
  content: {
    // Add any content module options here
    // https://content.nuxt.com/get-started/configuration
  },

  // PWA configuration with @vite-pwa/nuxt
  pwa: {
    manifest: {
      lang: 'en',
      name: 'NL-RSE',
      short_name: 'NL-RSE',
      description: 'The Netherlands Research Software Engineers community'
    }
  },

  // Nitro configuration for static generation and RSS feed
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/feed.xml',
        '/blog',
        '/event',
        '/core-team',
        '/groups'
      ]
    }
  },

  // Development tools
  devtools: { enabled: true },

  // TypeScript configuration
  typescript: {
    strict: false,
    shim: false
  }
})
