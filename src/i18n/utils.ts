import { messages } from '@/i18n/messages'

type TransParams = Record<string, string | number>

export function t(key: string, params?: TransParams): string {
  let translation = messages[key] || key

  if (params) {
    Object.entries(params).forEach(([placeholder, value]) => {
      translation = translation.replace(
        new RegExp(`%${placeholder}%`, 'g'),
        String(value)
      )
    })
  }

  return translation
}
