import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Configuration - PayloadKit',
  description: 'Smart PayloadCMS configuration with PostgreSQL/MongoDB and VPS support',
}

export default function ConfigurationPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Documentation
          </Link>
        </Button>
      </div>

      {/* Page Description */}
      <PageDescription
        title="Configuration"
        description="PayloadKit uses a modular configuration architecture that divides PayloadCMS configuration into reusable and maintainable modules."
        category="guides"
        version="0.4.3"
        difficulty="intermediate"
        estimatedTime="15 minutes"
        lastUpdated="September 2025"
      />

      {/* Benefits Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Benefits of Modular Configuration</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">🗄️ Smart Database</h3>
            <p className="text-sm text-muted-foreground">PostgreSQL by default with MongoDB support</p>
          </div>
          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">☁️ Intelligent Deploy</h3>
            <p className="text-sm text-muted-foreground">Auto-detection for Vercel vs VPS (Dokploy)</p>
          </div>
          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">📦 Modular</h3>
            <p className="text-sm text-muted-foreground">Each aspect configured separately</p>
          </div>
          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">🔄 Reusable</h3>
            <p className="text-sm text-muted-foreground">Configs shared between projects</p>
          </div>
        </div>
      </section>

      {/* File Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Configuration Structure</h2>
        <CodeBlock
          code={`src/config/
├── index.ts              # Main entry point
├── db-config/            # Database configuration
│   ├── index.ts          # Auto-selection PostgreSQL/MongoDB
│   ├── postgres.ts       # PostgreSQL adapter + smart connection
│   └── mongodb.ts        # MongoDB adapter (optional)
├── collections-config.ts # Collections configuration
├── plugins-config.ts     # Plugins configuration
├── globals-config.ts     # Globals configuration
├── jobs-config.ts        # Jobs/tasks configuration
└── email-config.ts       # Email configuration dev/prod`}
          language="text"
          title="Configuration Directory Structure"
        />
      </section>

      {/* Setup Tutorial */}
      <TutorialSteps
        title="Basic Configuration Setup"
        steps={[
          {
            title: 'Add Configuration',
            keyword: 'CLI',
            description: 'Add the modular configuration to your project',
            content: (
              <div className="space-y-4">
                <Snippet command="bunx payloadkit@latest add db-config" title="Add Database Config" />
                <Snippet command="bunx payloadkit@latest add collections-config" title="Add Collections Config" />
                <Alert>
                  <AlertDescription>
                    This will create the modular configuration structure in <code>src/config/</code>
                  </AlertDescription>
                </Alert>
              </div>
            )
          },
          {
            title: 'Update Payload Config',
            keyword: 'Integration',
            description: 'Integrate the modular configuration in your payload.config.ts',
            content: (
              <div className="space-y-4">
                <CodeBlock
                  code={`// src/payload.config.ts
import { buildConfig } from 'payload'
import {
  dbConfig,
  collectionsConfig,
  pluginsConfig,
  globalsConfig,
  jobsConfig,
  emailConfig,
} from './config'

export default buildConfig({
  // Modular configuration
  db: dbConfig,
  collections: collectionsConfig,
  plugins: pluginsConfig,
  globals: globalsConfig,
  jobs: jobsConfig,
  email: emailConfig,

  // Standard configuration
  secret: process.env.PAYLOAD_SECRET,
  // ...
})`}
                  language="typescript"
                  title="Updated Payload Config"
                />
                <Alert>
                  <AlertDescription>
                    Replace your existing monolithic config with these modular imports
                  </AlertDescription>
                </Alert>
              </div>
            )
          },
          {
            title: 'Environment Setup',
            keyword: 'Variables',
            description: 'Configure environment variables for different deployment scenarios',
            content: (
              <div className="space-y-4">
                <CodeBlock
                  code={`# Required for all environments
DATABASE_URI=postgresql://user:pass@host:5432/db
PAYLOAD_SECRET=your-secret

# VPS/Dokploy only (build separate from runtime)
DATABASE_BUILD_URI=postgresql://build:pass@accessible:5432/build

# MongoDB (if using MongoDB instead of PostgreSQL)
MONGODB_URI=mongodb://localhost:27017/my_project`}
                  language="bash"
                  title="Environment Variables"
                />
              </div>
            )
          }
        ]}
        allowSkip={false}
      />

      {/* Database Configuration */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Database Configuration</h2>
          <p className="text-muted-foreground">
            PayloadKit automatically detects and configures your database based on environment variables.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                PostgreSQL <Badge variant="default">Default</Badge>
              </h3>
              <CodeBlock
                code={`// Automatic usage
import { dbConfig } from './config'

// Or explicit
import { postgresDbConfig } from './config'`}
                language="typescript"
                title="PostgreSQL Configuration"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                MongoDB <Badge variant="secondary">Optional</Badge>
              </h3>
              <CodeBlock
                code={`import { createDbConfig } from './config'

const dbConfig = createDbConfig('mongodb')`}
                language="typescript"
                title="MongoDB Configuration"
              />
            </div>
          </div>

          {/* Environment Variables Table */}
          <div className="rounded-lg border overflow-hidden">
            <div className="bg-muted px-6 py-3 border-b">
              <h4 className="font-semibold">Database Environment Variables</h4>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm font-medium">
                  <div>Variable</div>
                  <div>Description</div>
                  <div>Environment</div>
                </div>
                <Separator />
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-3 gap-4">
                    <code className="text-xs bg-muted px-2 py-1 rounded">DATABASE_URI</code>
                    <div>Main connection</div>
                    <div>Vercel + VPS runtime</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <code className="text-xs bg-muted px-2 py-1 rounded">DATABASE_BUILD_URI</code>
                    <div>Build-time connection</div>
                    <div>VPS only</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <code className="text-xs bg-muted px-2 py-1 rounded">MONGODB_URI</code>
                    <div>MongoDB connection</div>
                    <div>If MongoDB used</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Configuration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Intelligent Deployment</h2>
        <p className="text-muted-foreground">
          PayloadKit automatically adapts to different deployment environments.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">Vercel (Automatic)</h3>
            <CodeBlock
              code={`# Required variables
DATABASE_URI=postgresql://user:pass@host:5432/db
PAYLOAD_SECRET=your-secret`}
              language="bash"
              title=".env"
            />
          </div>

          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">VPS/Dokploy</h3>
            <CodeBlock
              code={`# Build-time (accessible at build)
DATABASE_BUILD_URI=postgresql://build:pass@host:5432/db

# Runtime (production database)
DATABASE_URI=postgresql://prod:pass@host:5432/db`}
              language="bash"
              title="VPS Environment"
            />
          </div>

          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">Local Development</h3>
            <CodeBlock
              code={`# Automatic fallback
DATABASE_URI=postgresql://localhost:5432/payloadkit_dev`}
              language="bash"
              title="Local .env"
            />
          </div>
        </div>
      </section>

      {/* Configuration Extension */}
      <TutorialSteps
        title="Extending Configuration"
        steps={[
          {
            title: 'Custom Collections',
            keyword: 'Collections',
            description: 'Add your own collections to the configuration',
            content: (
              <CodeBlock
                code={`// src/config/collections-config.ts
import { createCollectionsConfig } from './collections-config'
import { Posts } from './collections/Posts'
import { Categories } from './collections/Categories'

export const collectionsConfig = createCollectionsConfig([
  Posts,
  Categories,
])`}
                language="typescript"
                title="Custom Collections"
              />
            )
          },
          {
            title: 'Custom Plugins',
            keyword: 'Plugins',
            description: 'Extend functionality with custom plugins',
            content: (
              <CodeBlock
                code={`// src/config/plugins-config.ts
import { createPluginsConfig } from './plugins-config'
import { searchPlugin } from '@payloadcms/plugin-search'

export const pluginsConfig = createPluginsConfig([
  searchPlugin({
    collections: ['posts'],
  }),
])`}
                language="typescript"
                title="Custom Plugins"
              />
            )
          }
        ]}
        allowSkip
      />

      {/* Email & Jobs Configuration */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Email & Jobs Configuration</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Email Configuration</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Development (Console)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Emails are automatically logged to console in development
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Production (SMTP)</h4>
                <CodeBlock
                  code={`SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_ADDRESS=noreply@yourdomain.com
FROM_NAME="Your App Name"`}
                  language="bash"
                  title="SMTP Configuration"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Jobs Configuration</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Secure jobs with automatic access for logged users and CRON support
              </p>
              <CodeBlock
                code={`# Environment variables
CRON_SECRET=your-cron-secret

# Header for Vercel Cron
Authorization: Bearer your-cron-secret`}
                language="bash"
                title="Jobs Security"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Migration Guide */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Migration from Monolithic Config</h2>
          <p className="text-muted-foreground">
            Transform your existing payload.config.ts to use the modular approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-600">Before (Monolithic)</h3>
            <CodeBlock
              code={`export default buildConfig({
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI }
  }),
  collections: [Users, Media, Pages],
  plugins: [seoPlugin(), formBuilderPlugin()],
  // ...
})`}
              language="typescript"
              title="Old Configuration"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-600">After (Modular)</h3>
            <CodeBlock
              code={`export default buildConfig({
  db: dbConfig,           // Smart database with auto-detection
  collections: collectionsConfig,  // Reusable collections
  plugins: pluginsConfig, // Essential plugins
  // ...
})`}
              language="typescript"
              title="New Configuration"
            />
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>

        <div className="space-y-4">
          <Alert>
            <AlertDescription>
              <strong>Cannot find module '@payloadcms/db-mongodb'</strong><br />
              MongoDB is optional. Install only if needed: <code>bun add @payloadcms/db-mongodb</code>
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertDescription>
              <strong>Build fails on VPS</strong><br />
              Check DATABASE_BUILD_URI - it must be accessible during build
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertDescription>
              <strong>Emails not working</strong><br />
              Verify all SMTP variables are set: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Button variant="outline" asChild>
            <Link href="/docs/deployment">
              Deployment Guide
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/getting-started">
              Getting Started
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/examples">
              View Examples
            </Link>
          </Button>
        </div>
      </section>

      {/* Tags */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {['Configuration', 'Database', 'PostgreSQL', 'MongoDB', 'Deployment', 'Email', 'Jobs'].map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}