const
  dev      = global.dev = ('development' === process.env.NODE_ENV),
  hostname = 'https://inigochoa.me/'

module.exports = config => {
  /* --- COLLECTIONS --- */
  config.addCollection('menuItems', collection =>
    collection
      .getFilteredByGlob('./src/**/*.md')
      .filter(item => dev || !item.data.draft)
      .filter(item => 'eleventyNavigation' in item.data)
      .sort((itemA, itemB) => (itemA.data.eleventyNavigation.order || 0) - (itemB.data.eleventyNavigation.order || 0))
  )
  config.addCollection('legalPages', collection =>
    collection
      .getFilteredByGlob('./src/**/*.md')
      .filter(item => dev || !item.data.draft)
      .filter(item => 'legal' in item.data && item.data.legal)
  )

  /* --- FILTERS --- */
  const dateformat = require('./lib/filters/dateformat')
  config.addFilter('dateymd', dateformat.ymd)
  config.addFilter('year', dateformat.year)

  /* --- PLUGINS --- */
  config.addPlugin(require('eleventy-plugin-metagen'))
  config.addPlugin(require('@11ty/eleventy-navigation'))
  config.addPlugin(require('@quasibit/eleventy-plugin-sitemap'), {
    sitemap: {
      hostname: hostname,
    },
  })

  /* --- SHORTCODES --- */
  config.addShortcode('currentYear', require('./lib/shortcodes/currentYear'))
  config.addShortcode('languageColor', require('./lib/shortcodes/languageColor'))
  config.addShortcode('version', require('./lib/shortcodes/version'))

  /* --- TRANSFORMATIONS --- */
  config.addTransform('htmlminify', require('./lib/transforms/htmlminify'))

  /* --- WATCHES --- */
  config.addWatchTarget('./_assets/src/css/')
  config.addWatchTarget('./_assets/src/js/')

  const mdOptions = {
    html: true,
    linkify: true,
    typographer: true,
  }
  const markdownIt  = require('markdown-it')
  const mdContainer = require('markdown-it-container')
  const mdIterator  = require('markdown-it-for-inline')

  config.setLibrary('md', markdownIt(mdOptions)
    .use(mdContainer, 'warning')
    .use(mdIterator, 'url_new_win', 'link_open', (tokens, idx) => {
      const [attrName, href] = tokens[idx].attrs.find(attr => 'href' === attr[0])

      if (href && !href.includes(hostname) && !href.startsWith('/') && !href.startsWith('#')) {
        tokens[idx].attrPush(['rel', 'noopener noreferrer'])
        tokens[idx].attrPush(['target', '_blank'])
      }
    })
  )

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
    },
  }
}
