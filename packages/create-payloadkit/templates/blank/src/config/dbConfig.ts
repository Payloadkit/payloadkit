import { postgresAdapter } from '@payloadcms/db-postgres'

function getDatabaseConnectionString(): string {
  const isBuildTime = process.env.npm_lifecycle_event === 'build'

  if (isBuildTime && process.env.DATABASE_BUILD_URI) {
    return process.env.DATABASE_BUILD_URI
  }

  return process.env.DATABASE_URI || process.env.DATABASE_BUILD_URI || ''
}

export const dbConfig = postgresAdapter({
  migrationDir: './migrations',
  idType: 'uuid',
  blocksAsJSON: true,
  pool: {
    connectionString: getDatabaseConnectionString(),
  },
})
