import type { APIRoute } from 'astro'
import { site } from '@/data/site'

export const GET: APIRoute = () => {
  const domain = site.url
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '');

  return new Response(domain, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
