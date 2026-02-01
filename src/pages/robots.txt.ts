import type { APIRoute } from 'astro'
import { site } from '@/data/site'

const AI_AGENTS_URL = 'https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/main/robots.txt'

async function getAIPolicies(): Promise<string> {
  try {
    const response = await fetch(AI_AGENTS_URL)

    if (!response.ok) {
      return ''
    }

    const text = await response.text()

    return text.trim()
  } catch (error) {
    console.warn('Failed to fetch AI agents list:', error)
    return ''
  }
}

export const GET: APIRoute = async () => {
  const aiPolicies = await getAIPolicies()

  let content = ''

  if (aiPolicies) {
    content += `# ${AI_AGENTS_URL}\n${aiPolicies}\n\n`
  }

  // Project specific rules
  content += `# Project specific rules\n`
  content += `User-agent: *\n`
  content += `Disallow: /humans.txt\n\n`

  // Sitemap
  content += `Sitemap: ${site.url}/sitemap-index.xml\n`

  return new Response(content.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
