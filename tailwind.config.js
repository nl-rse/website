import tailwindTypography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  darkMode: false, // or 'media' or 'class'
  // mode: 'jit', // NOT WORKING WITH VITE issue link -> https://github.com/nuxt/vite/issues/159
  // see issue https://github.com/nuxt/vite/issues/159
  plugins: [
    tailwindTypography,
    daisyui
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#6f0045',
          'primary-focus': '#4d002f',
          'primary-content': '#ffffff',
          secondary: '#b8b8b8',
          'secondary-focus': '#878787',
          'secondary-content': '#ffffff',
          accent: '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          neutral: '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          info: '#2094f3',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724'
        }
      }
    ]
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  }
}
