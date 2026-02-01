import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    href: 'https://github.com/inigochoa/lock-code-challenge',
    name: 'Lock Code Challenge',
    description: 'Adivina el código de 3 dígitos viendo solo una pequeña parte.',
    stack: ['Astro', 'JavaScript'],
    featured: true,
  },
  {
    href: 'https://github.com/inigochoa/monitorbot',
    name: 'MonitorBot',
    description: 'Un bot privado de Telegram para monitorizar páginas web. Añade una lista de URL y recibe notificaciones cuando su estado cambie.',
    stack: ['JavaScript', 'Shell'],
    featured: true,
  },
  {
    href: 'https://github.com/inigochoa/card',
    name: '@inigochoa/card',
    description: 'Mi tarjeta de presentación de NPM. Solo escribe npx @inigochoa/card. Idea original de @bitandbang.',
    stack: ['TypeScript'],
  },
]

export const featured: Project[] = projects.filter(project => project?.featured)
