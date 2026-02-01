import type { BaseLink, RichLink } from '@/types/links'

export const headerLinks: RichLink[] = [
  {
    title: 'Proyectos',
    href: '/proyectos',
    subtitle: 'Qué hago',
    icon: 'code',
  },
  { title: 'Ahora',
    href: '/now',
    subtitle: 'Con qué estoy',
    icon: 'zap',
  },
  {
    title: 'Uses',
    href: '/uses',
    subtitle: 'Mi setup',
    icon: 'pocket-knife',
  },
  {
    title: 'Tunes',
    href: '/tunes',
    subtitle: 'Escuchando',
    icon: 'headphones',
  },
]

export const footerLinks: BaseLink[] = [
  {
    title: 'Privacidad',
    href: '/privacidad',
  },
  {
    title: 'La web',
    href: '/la-web',
  },
]

export const socialLinks: RichLink[] = [
  {
    subtitle: 'Bluesky',
    href: 'https://bsky.app/profile/inigochoa.me',
    icon: 'bluesky',
    title: 'Encuéntrame en Bluesky',
  },
  {
    subtitle: 'GitHub',
    href: 'https://github.com/inigochoa',
    icon: 'github',
    title: 'Ver mis repositorios',
  },
  {
    subtitle: 'NPM',
    href: 'https://www.npmjs.com/~inigochoa',
    icon: 'npm',
    title: 'Mi perfil en NPM',
  },
]
