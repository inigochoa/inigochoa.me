import { site } from '@/data/site'

/**
 * Format a date to a compact, consistent format
 * @param date - Date object or timestamp
 * @returns Formatted date string (e.g. "23 ene, 20:30")
 */
export function formatDate(date: Date | number): string {
  const dateObject = 'number' === typeof date ? new Date(date * 1000) : date
  const locale = site.lang

  return dateObject.toLocaleString(locale, {
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    month: 'short',
  })
}
