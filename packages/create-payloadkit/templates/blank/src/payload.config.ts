import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

// Import modular configuration from PayloadKit registry
import {
  dbConfig,
  collectionsConfig,
  pluginsConfig,
  globalsConfig,
  jobsConfig,
  emailConfig,
} from './config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  // Modular configurations from PayloadKit registry
  db: dbConfig,
  collections: collectionsConfig,
  plugins: pluginsConfig,
  globals: globalsConfig,
  jobs: jobsConfig,
  email: emailConfig,

  // Core configuration
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})