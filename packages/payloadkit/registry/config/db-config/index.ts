// Smart database configuration for PayloadKit
// Automatically detects and configures the best database setup for your environment

export { postgresDbConfig, getDatabaseConnectionString } from './postgres'
export { mongoDbConfig, getMongoConnectionString } from './mongodb'

/**
 * Auto-select database configuration based on environment
 * PostgreSQL is the default choice for PayloadKit
 *
 * @param dbType - 'postgres' (default) | 'mongodb'
 * @returns Database adapter configuration
 */
export function createDbConfig(dbType: 'postgres' | 'mongodb' = 'postgres') {
  if (dbType === 'mongodb') {
    const { mongoDbConfig } = require('./mongodb')
    return mongoDbConfig
  }

  // Default to PostgreSQL
  const { postgresDbConfig } = require('./postgres')
  return postgresDbConfig
}

// Re-export for convenience
export const dbConfig = createDbConfig()