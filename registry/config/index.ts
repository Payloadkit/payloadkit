/**
 * PayloadKit Modular Configuration System
 *
 * This modular approach allows you to:
 * - Pick and choose configuration components
 * - Easily extend with custom configurations
 * - Maintain clean separation of concerns
 * - Support different deployment environments automatically
 */

// Database configurations
export {
  dbConfig,
  postgresDbConfig,
  mongoDbConfig,
  createDbConfig,
  getDatabaseConnectionString,
  getMongoConnectionString
} from './db-config'

// Collections configuration
export {
  collectionsConfig,
  createCollectionsConfig
} from './collections-config'

// Plugins configuration
export {
  pluginsConfig,
  createPluginsConfig
} from './plugins-config'

// Globals configuration
export {
  globalsConfig,
  createGlobalsConfig
} from './globals-config'

// Jobs configuration
export {
  jobsConfig,
  createJobsConfig
} from './jobs-config'

// Email configuration
export {
  emailConfig,
  createEmailConfig
} from './email-config'

/**
 * Complete PayloadKit configuration factory
 * Creates a full PayloadCMS configuration with sensible defaults
 *
 * @param options - Configuration options
 */
export function createPayloadKitConfig(options: {
  databaseType?: 'postgres' | 'mongodb'
  additionalCollections?: any[]
  additionalPlugins?: any[]
  additionalGlobals?: any[]
  customEmail?: any
} = {}) {
  const {
    databaseType = 'postgres',
    additionalCollections = [],
    additionalPlugins = [],
    additionalGlobals = [],
    customEmail
  } = options

  return {
    db: createDbConfig(databaseType),
    collections: createCollectionsConfig(additionalCollections),
    plugins: createPluginsConfig(additionalPlugins),
    globals: createGlobalsConfig(additionalGlobals),
    jobs: jobsConfig,
    email: customEmail || emailConfig,
  }
}