import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'
import daisyui from 'daisyui'

export default {
  darkMode: false, // or 'media' or 'class'
  plugins: [
    tailwindTypography,
    tailwindForms,
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
  content: [
    'content/**/*.md',
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}',
    'nuxt.config.{js,ts}'
  ],
  safelist: ['grid', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'gap-4']
}
