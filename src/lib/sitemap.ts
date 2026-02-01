import type { SitemapItem, SitemapOptions } from '@astrojs/sitemap'
import { ChangeFreqEnum } from '@astrojs/sitemap'

const config: SitemapOptions = {
  changefreq: ChangeFreqEnum.YEARLY,
  priority: 0.5,
  serialize(item: SitemapItem) {
    delete item.lastmod

    if (item.url.endsWith('/') || item.url.endsWith('/index.html')) {
      item.changefreq = ChangeFreqEnum.MONTHLY
      item.priority = 1.0
    } else if (/\/now/.test(item.url)) {
      item.changefreq = ChangeFreqEnum.MONTHLY
      item.lastmod = new Date().toISOString()
      item.priority = 0.7
    } else if (/\/tunes/.test(item.url)) {
      item.changefreq = ChangeFreqEnum.DAILY
      item.lastmod = new Date().toISOString()
      item.priority = 0.7
    }

    return item
  },
}

export default config
