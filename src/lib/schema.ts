import type { Author } from '@/types/author'
import type { BaseLink } from '@/types/links'
import type { Project } from '@/types/project'
import type { Frontmatter, Site } from '@/types/site'

const authorSchema = (author: Author) => ({
  '@type': 'Person',
  name: author.name,
})

const partOfSchema = (site: Site) => ({
  '@type': 'WebSite',
  url: site.url,
})

/** website */
export const aboutSchema = (frontmatter: Frontmatter, url: string, site: Site) => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: frontmatter.title,
  description: frontmatter.description,
  url,
  inLanguage: site.lang,
  about: partOfSchema(site),
  isPartOf: partOfSchema(site),
})

/** projects, tunes */
export const collectionSchema = (frontmatter: Frontmatter, url: string, site: Site, items?: any[]) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: frontmatter.title,
  description: frontmatter.description,
  url,
  inLanguage: site.lang,
  isPartOf: partOfSchema(site),
  ...(items && { mainEntity: items }),
})

/** home, now, uses */
export const pageSchema = (frontmatter: Frontmatter, url: string, site: Site) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: frontmatter.title,
  description: frontmatter.description,
  url,
  inLanguage: site.lang,
  isPartOf: partOfSchema(site),
})

/** home */
export const personSchema = (author: Author, site: Site, socialLinks: BaseLink[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: author.name,
  url: site.url,
  jobTitle: author.role,
  description: author.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: author.location,
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: author.role,
    occupationLocation: {
      '@type': 'City',
      name: author.location,
    },
  },
  sameAs: socialLinks.map(link => link.href),
  knowsAbout: author.stack,
})

/** privacy */
export const privacySchema = (frontmatter: Frontmatter, url: string, site: Site) => ({
  '@context': 'https://schema.org',
  '@type': 'PrivacyPage',
  name: frontmatter.title,
  description: frontmatter.description,
  url,
  inLanguage: site.lang,
  isPartOf: partOfSchema(site),
})

/** home */
export const siteSchema = (author: Author, site: Site) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: site.lang,
  author: authorSchema(author),
})

/** projects */
export const softwareSchema = (author: Author, project: Project) => ({
  '@type': 'SoftwareSourceCode',
  name: project.name,
  description: project.description,
  url: project.href,
  programmingLanguage: project.stack,
  author: authorSchema(author),
})
