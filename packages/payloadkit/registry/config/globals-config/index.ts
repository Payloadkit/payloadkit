import { GlobalConfig } from 'payload'

// Import globals from registry
// These imports will be resolved when the config is copied to a project
import { Header } from '@/globals/Header'
import { Footer } from '@/globals/Footer'

/**
 * Basic globals configuration for PayloadKit
 * Includes essential globals for most applications
 */
export const globalsConfig: GlobalConfig[] = [
  Header,
  Footer,
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