export interface Frontmatter {
  title: string
  description: string
  quote?: {
    author: string
    quote: string
  }
  schemas?: string[]
}

export interface Site {
  description: string
  easter_egg: string
  lang: string
  locale: string
  name: string
  title: string
  umami: {
    id: string
    url: string
  }
  url: string
}
