export interface BaseLink {
  href: string
  title: string
}

export interface RichLink extends BaseLink {
  icon: string
  subtitle: string
}
