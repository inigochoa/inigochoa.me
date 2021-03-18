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
      },
      typography: theme => ({
        DEFAULT: {
          css: [
            {
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
