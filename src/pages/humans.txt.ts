import type { APIRoute } from 'astro'
import { formatDate } from '@/lib/dates'
import { author } from '@/data/author'
import { socialLinks } from '@/data/links'
import { site } from '@/data/site'

export const GET: APIRoute = () => {
  const content = `/* TEAM */
Developer: ${author.name}
Location: ${author.location || 'Unknown'}
${socialLinks.map(link => `${link.subtitle}: ${link.href}`).join('\n')}

/* THANKS */
Astro - https://astro.build
Tailwind CSS - https://tailwindcss.com

/* SITE */
Last update: ${formatDate(new Date())}
Language: ${site.locale}
Standards: HTML5, CSS3, TypeScript
Components: Astro, Tailwind
Software: VS Code, Git
`

  return new Response('\ufeff' + content.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
