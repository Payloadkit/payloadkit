/**
 * PayloadKit Modular Configuration
 * This configuration provides smart defaults for your deployment environment.
 */

// Export modular configurations (copied from PayloadKit registry)
export { dbConfig } from './db-config'
export { collectionsConfig } from './collections-config'
export { pluginsConfig } from './plugins-config'
export { globalsConfig } from './globals-config'
export { jobsConfig } from './jobs-config'
export { emailConfig } from './email-config'

// For compatibility, re-export individual configs
export * from './db-config'
export * from './collections-config'
export * from './plugins-config'
export * from './globals-config'
export * from './jobs-config'
export * from './email-config'