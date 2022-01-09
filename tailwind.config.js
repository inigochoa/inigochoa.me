module.exports = {
  mode: 'jit',
  content: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    debugScreens: {
      position: ['left', 'top'],
    },
    extend: {
      colors: {
        arrow: '#9ca3af',
        background: '#1a2533',
        card: '#223244',
        garnet: 'rgba(255, 0, 0, 0.65)',
        primary: '#fafafa',
        secondary: '#cacaca',
      },
      outline: {
        garnet: ['2px dashed rgba(255, 0, 0, 0.65)', '.5rem']
      },
      typography: theme => ({
        DEFAULT: {
          css: [
            {
              color: theme('colors.secondary'),
              'h1': {
                color: theme('colors.primary'),
              },
              'h2': {
                color: theme('colors.primary'),
              },
              'h3': {
                color: theme('colors.primary'),
              },
              'h4': {
                color: theme('colors.primary'),
              },
              'h5': {
                color: theme('colors.primary'),
              },
              'h6': {
                color: theme('colors.primary'),
              },
              a: {
                color: theme('colors.secondary'),
              },
              code: {
                color: theme('colors.primary'),
              },
              strong: {
                color: theme('colors.primary'),
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
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-selection-variant'),
    ...process.env.NODE_ENV === 'development'
      ? [require('tailwindcss-debug-screens')]
      : [],
  ],
}
