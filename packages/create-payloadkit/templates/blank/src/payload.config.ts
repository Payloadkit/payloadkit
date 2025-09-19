import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

// Import modular configurations
import { Users } from './collections/Users'
import { dbConfig, collectionsConfig, globalsConfig } from './config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Detect build-time environment
const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build' ||
                   process.env.DISABLE_DB_CONNECTION === 'true'

export default buildConfig({
  admin: {
    disable: isBuildTime,
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  db: dbConfig,
  collections: collectionsConfig,
  globals: globalsConfig,

  // Core configuration
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
