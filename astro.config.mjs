// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import rehypeExternalLinks from 'rehype-external-links'
import tailwindcss from '@tailwindcss/vite'
import { site } from './src/data/site'
import sitemapConfig from './src/lib/sitemap'

// https://astro.build/config
export default defineConfig({
  experimental: {
    clientPrerender: true,
    failOnPrerenderConflict: true,
    fonts: [{
      name: 'Geist',
      cssVariable: '--font-sans',
      provider: fontProviders.fontsource(),
      weights: [300, 400, 500, 600, 800],
    }, {
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.fontsource(),
      weights: [400],
    }],
    preserveScriptOrder: true,
    staticImportMetaEnv: true,
  },
  integrations: [
    icon(),
    mdx(),
    sitemap(sitemapConfig),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ['noopener', 'noreferrer'],
          target: '_blank',
        }
      ]
    ],
  },
  site: site.url,
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
