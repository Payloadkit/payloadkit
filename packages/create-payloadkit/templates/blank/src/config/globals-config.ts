import { GlobalConfig } from 'payload'

/**
 * Basic globals configuration for PayloadKit
 * Includes essential globals for most applications
 */
export const globalsConfig: GlobalConfig[] = [
  // Add globals as needed
]

/**
 * Extended globals configuration
 * Add more globals as needed for your project
 */
export function createGlobalsConfig(additionalGlobals: GlobalConfig[] = []) {
  return [
    ...globalsConfig,
    ...additionalGlobals,
  ]
}