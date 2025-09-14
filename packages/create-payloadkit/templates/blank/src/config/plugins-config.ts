import { Plugin } from 'payload'

/**
 * Basic plugins configuration for PayloadKit
 * Essential plugins for most PayloadCMS applications
 */
export const pluginsConfig: Plugin[] = [
  // Add plugins as needed
]

/**
 * Extended plugins configuration
 * Add more plugins as needed for your project
 */
export function createPluginsConfig(additionalPlugins: Plugin[] = []) {
  return [
    ...pluginsConfig,
    ...additionalPlugins,
  ]
}