import { mongooseAdapter } from '@payloadcms/db-mongodb'

/**
 * Smart MongoDB connection string resolver
 * - Vercel: Uses MONGODB_URI automatically
 * - VPS/Atlas: Uses MONGODB_BUILD_URI for build-time, MONGODB_URI for runtime
 * - Local: Falls back to local development database
 */
function getMongoConnectionString(): string {
  // Detect Vercel environment
  const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV

  // Detect build-time context
  const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build' ||
                     process.env.npm_lifecycle_event === 'build' ||
                     process.env.DISABLE_DB_CONNECTION === 'true'

  // Vercel: Simple MONGODB_URI (no BUILD_URI needed)
  if (isVercel) {
    return process.env.MONGODB_URI || ''
  }

  // VPS/Atlas: Use BUILD_URI during build, regular URI during runtime
  if (isBuildTime && process.env.MONGODB_BUILD_URI) {
    return process.env.MONGODB_BUILD_URI
  }

  // Runtime or fallback
  return process.env.MONGODB_URI ||
         process.env.MONGODB_BUILD_URI ||
         'mongodb://localhost:27017/payloadkit-dev'
}

/**
 * MongoDB adapter configuration for PayloadCMS
 * Supports both Vercel and VPS deployments with smart connection handling
 */
export const mongoDbConfig = mongooseAdapter({
  url: getMongoConnectionString(),
  migrationDir: './migrations',
})

// Export the connection string function for external use
export { getMongoConnectionString }