import { postgresAdapter } from '@payloadcms/db-postgres'

/**
 * Smart database connection string resolver
 * - Vercel: Uses DATABASE_URI automatically
 * - VPS/Dokploy: Uses DATABASE_BUILD_URI for build-time, DATABASE_URI for runtime
 * - Local: Falls back to local development database
 */
function getDatabaseConnectionString(): string {
  // Detect Vercel environment
  const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV

  // Detect build-time context
  const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build' ||
                     process.env.npm_lifecycle_event === 'build' ||
                     process.env.DISABLE_DB_CONNECTION === 'true'

  // Vercel: Simple DATABASE_URI (no BUILD_URI needed)
  if (isVercel) {
    return process.env.DATABASE_URI || ''
  }

  // VPS/Dokploy: Use BUILD_URI during build, regular URI during runtime
  if (isBuildTime && process.env.DATABASE_BUILD_URI) {
    return process.env.DATABASE_BUILD_URI
  }

  // Runtime or fallback
  return process.env.DATABASE_URI || process.env.DATABASE_BUILD_URI || ''
}

/**
 * PostgreSQL adapter configuration for PayloadCMS
 * Supports both Vercel and VPS deployments with smart connection handling
 */
export const postgresDbConfig = postgresAdapter({
  migrationDir: './migrations',
  idType: 'uuid',
  blocksAsJSON: true,
  push: true,
  pool: {
    connectionString: getDatabaseConnectionString(),
  },
})

// Export the connection string function for external use
export { getDatabaseConnectionString }