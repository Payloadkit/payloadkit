import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

// Import collections from registry
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

// Import security plugins from PayloadKit registry
import { betterAuthSecurityPlugin } from '@payloadkit/registry/plugins/better-auth-security'
import { auditLoggingPlugin } from '@payloadkit/registry/plugins/audit-logging'
import { rateLimitingPlugin } from '@payloadkit/registry/plugins/rate-limiting'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media, 
    Pages,
  ],
  plugins: [
    // Better Auth with 2FA enabled by default - enterprise security
    betterAuthSecurityPlugin(),
    // Comprehensive audit logging for compliance (GDPR, SOX, HIPAA)
    auditLoggingPlugin(),
    // Rate limiting for brute force protection
    rateLimitingPlugin(),
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
})