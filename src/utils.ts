import type { InjectionKey } from 'vue'
import { inject } from 'vue'
import type { Dayjs } from 'dayjs'

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback)

  if (!resolved) 
    throw new Error(`Could not resolve ${key.description}`)

  return resolved
}


export const localesMap = Object.fromEntries(
  Object.entries(import.meta.glob('./locale/*.js')).map(
    ([path, loadLocale]) => [path.match(/([\w-]*)\.js$/)?.[1], loadLocale],
  ),
) as Record<string, () => Promise<{ default: Dayjs['localeData'] }>>
