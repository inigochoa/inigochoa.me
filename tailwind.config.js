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
        dark: {
          arrow: '#9ca3af',
          background: '#1a2533',
          card: '#223244',
          primary: '#f9fafa',
          secondary: '#dde0e2',
        },
        garnet: 'rgba(255, 0, 0, 0.65)',
        light: {
          arrow: '#9ca3af',
          background: '#f3f4f6',
          card: '#ffffff',
          primary: '#000000',
          secondary: '#374151',
        },
      },
      outline: {
        garnet: ['2px dashed rgba(255, 0, 0, 0.65)', '.5rem']
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

        dark: {
          css: {
            color: theme('colors.dark.secondary'),
            'h1': {
              color: theme('colors.dark.primary'),
            },
            'h2': {
              color: theme('colors.dark.primary'),
            },
            'h3': {
              color: theme('colors.dark.primary'),
            },
            'h4': {
              color: theme('colors.dark.primary'),
            },
            'h5': {
              color: theme('colors.dark.primary'),
            },
            'h6': {
              color: theme('colors.dark.primary'),
            },
            a: {
              color: theme('colors.dark.secondary'),
            },
            code: {
              color: theme('colors.dark.primary'),
            },
            strong: {
              color: theme('colors.dark.primary'),
            },
          },
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
