module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  darkMode: false,
  theme: {
    debugScreens: {
      position: ['left', 'top'],
    },
    extend: {
      colors: {
        garnet: 'rgba(255, 0, 0, 0.6)',
        light: {
          arrow: '#9ca3af',
          background: '#f3f4f6',
          card: '#ffffff',
          content: '#ffffff',
          primary: '#000000',
          secondary: '#374151',
          tertiary: '#6b7280',
        },
      },
      typography: theme => ({
        DEFAULT: {
          css: [
            {
              color: theme('colors.light.secondary'),
              'h1': {
                color: theme('colors.light.primary'),
              },
              'h2': {
                color: theme('colors.light.primary'),
              },
              'h3': {
                color: theme('colors.light.primary'),
              },
              'h4': {
                color: theme('colors.light.primary'),
              },
              'h5': {
                color: theme('colors.light.primary'),
              },
              'h6': {
                color: theme('colors.light.primary'),
              },
              a: {
                color: theme('colors.light.secondary'),
              },
              code: {
                color: theme('colors.light.primary'),
              },
              strong: {
                color: theme('colors.light.primary'),
              },
              'h1::before': {
                color: theme('colors.garnet'),
                content: '"#"',
                marginRight: '.75rem',
              },
              'h2::before': {
                color: theme('colors.garnet'),
                content: '"#"',
                marginRight: '.75rem',
              },
              'h3::before': {
                color: theme('colors.garnet'),
                content: '"#"',
                marginRight: '.75rem',
              },
              'h4::before': {
                color: theme('colors.garnet'),
                content: '"#"',
                marginRight: '.75rem',
              },
              'h5::before': {
                color: theme('colors.garnet'),
                content: '"#"',
                marginRight: '.75rem',
              },
              'h6::before': {
                color: theme('colors.garnet'),
                content: '"#"',
                marginRight: '.75rem',
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      padding: ['even', 'odd'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ...process.env.NODE_ENV === 'development'
      ? [require('tailwindcss-debug-screens')]
      : [],
  ],
}
