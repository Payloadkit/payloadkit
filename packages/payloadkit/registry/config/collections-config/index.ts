import { CollectionConfig } from 'payload'

// Import collections from registry
// These imports will be resolved when the config is copied to a project
import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'

/**
 * Basic collections configuration for PayloadKit
 * Includes essential collections for most applications
 */
export const collectionsConfig: CollectionConfig[] = [
  Users,
  Media,
  Pages,
]

/**
 * Extended collections configuration
 * Add more collections as needed for your project
 */
export function createCollectionsConfig(additionalCollections: CollectionConfig[] = []) {
  return [
    ...collectionsConfig,
    ...additionalCollections,
  ]
}