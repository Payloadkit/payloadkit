/**
 * PayloadKit Core Utilities
 */

/**
 * Utility function for merging CSS classes (clsx + tailwind-merge pattern)
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ')
}

/**
 * Converts string to kebab-case
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

/**
 * Converts string to PascalCase
 */
export function toPascalCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
    .replace(/^(.)/, (char) => char.toUpperCase())
}

/**
 * Converts string to camelCase
 */
export function toCamelCase(str: string): string {
  const pascal = toPascalCase(str)
  return pascal.charAt(0).toLowerCase() + pascal.slice(1)
}

/**
 * Generates a slug from a title
 */
export function generateSlug(title: string): string {
  return toKebabCase(title)
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

/**
 * Validates if a string is a valid npm package name
 */
export function isValidPackageName(name: string): boolean {
  const regex = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/
  return regex.test(name)
}

/**
 * Validates if a string is a valid project name
 */
export function isValidProjectName(name: string): boolean {
  return /^[a-z0-9-_]+$/.test(name)
}

/**
 * Deep merge objects
 */
export function deepMerge<T extends Record<string, any>>(
  target: T,
  ...sources: Array<Partial<T>>
): T {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        deepMerge(target[key] as T, source[key] as Partial<T>)
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return deepMerge(target, ...sources)
}

/**
 * Check if value is an object
 */
function isObject(item: any): item is Record<string, any> {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Format date time for consistent display
 */
export function formatDateTime(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * Safe JSON parsing with fallback
 */
export function safeJsonParse<T>(str: string, fallback: T): T {
  try {
    return JSON.parse(str)
  } catch {
    return fallback
  }
}

/**
 * Check if code is running in development
 */
export function isDev(): boolean {
  return process.env.NODE_ENV === 'development'
}

/**
 * Check if code is running in production
 */
export function isProd(): boolean {
  return process.env.NODE_ENV === 'production'
}