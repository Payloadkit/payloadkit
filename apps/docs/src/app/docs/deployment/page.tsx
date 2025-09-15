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
  title: 'Deployment - PayloadKit',
  description: 'Deploy PayloadCMS on VPS with DATABASE_BUILD_URI for Dokploy, Railway, and more',
}

export default function DeploymentPage() {
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
        title="Deployment"
        description="PayloadKit simplifies VPS deployment by automatically managing differences between build-time and runtime database connections."
        category="guide"
        version="0.1.0"
        difficulty="advanced"
        estimatedTime="20 minutes"
        lastUpdated="January 2025"
      />

      {/* Problem & Solution Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Problem Solved</h2>
        <p className="text-muted-foreground">
          On VPS platforms, the production database is often not accessible during build. PayloadCMS needs a database connection to generate TypeScript types, causing deployment failures.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-red-200 dark:border-red-800 p-6 space-y-4">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">❌ Before PayloadKit</h3>
            <CodeBlock
              code={`# Build fails because prod DB is not accessible
ERROR: Connection failed to postgresql://prod:pass@private-host:5432/db`}
              language="bash"
              title="Build Failure"
            />
          </div>

          <div className="rounded-lg border border-green-200 dark:border-green-800 p-6 space-y-4">
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">✅ With PayloadKit</h3>
            <CodeBlock
              code={`# Build succeeds with DATABASE_BUILD_URI
✅ Connected to build database
✅ Types generated successfully
✅ Build completed
# Runtime uses DATABASE_URI (prod DB)
✅ Connected to production database`}
              language="bash"
              title="Build Success"
            />
          </div>
        </div>
      </section>

      {/* Smart Architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Smart Architecture</h2>
        <p className="text-muted-foreground">
          PayloadKit automatically detects the environment and uses the right configuration:
        </p>

        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted px-6 py-3 border-b">
            <h4 className="font-semibold">Environment Detection</h4>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4 text-sm font-medium">
                <div>Environment</div>
                <div>Build</div>
                <div>Runtime</div>
                <div>Configuration</div>
              </div>
              <Separator />
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-4 gap-4">
                  <div className="font-medium">Vercel</div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">DATABASE_URI</code>
                  <code className="text-xs bg-muted px-2 py-1 rounded">DATABASE_URI</code>
                  <Badge variant="default">Auto-detection</Badge>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="font-medium">VPS/Dokploy</div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">DATABASE_BUILD_URI</code>
                  <code className="text-xs bg-muted px-2 py-1 rounded">DATABASE_URI</code>
                  <Badge variant="secondary">Smart fallback</Badge>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="font-medium">Local Dev</div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">DATABASE_URI</code>
                  <code className="text-xs bg-muted px-2 py-1 rounded">DATABASE_URI</code>
                  <Badge variant="outline">Local fallback</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VPS Configuration Tutorial */}
      <TutorialSteps
        title="VPS Configuration"
        description="Set up your VPS deployment with PayloadKit's smart database detection"
        steps={[
          {
            title: 'Environment Variables',
            keyword: 'Variables',
            description: 'Configure build and runtime database connections',
            content: (
              <div className="space-y-4">
                <CodeBlock
                  code={`# Build database (accessible during build)
DATABASE_BUILD_URI=postgresql://build_user:build_pass@accessible_host:5432/build_db

# Production database (runtime)
DATABASE_URI=postgresql://prod_user:prod_pass@private_host:5432/prod_db

# Other required variables
PAYLOAD_SECRET=your-super-secure-secret
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com

# Email (optional)
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-smtp-password`}
                  language="bash"
                  title="Environment Configuration"
                />
                <Alert>
                  <AlertDescription>
                    The build database must be accessible during the Docker build process, while the production database is only needed at runtime.
                  </AlertDescription>
                </Alert>
              </div>
            )
          },
          {
            title: 'Build Database Setup',
            keyword: 'Database',
            description: 'Create a temporary database for the build process',
            content: (
              <div className="space-y-4">
                <CodeBlock
                  code={`-- Temporary database for build
CREATE DATABASE payloadkit_build;
CREATE USER build_user WITH PASSWORD 'build_password';
GRANT ALL PRIVILEGES ON DATABASE payloadkit_build TO build_user;

-- Required extensions
\\c payloadkit_build;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";`}
                  language="sql"
                  title="Build Database Setup"
                />
                <Alert>
                  <AlertDescription>
                    The build database only needs the schema, no actual data is required.
                  </AlertDescription>
                </Alert>
              </div>
            )
          },
          {
            title: 'Dockerfile Configuration',
            keyword: 'Docker',
            description: 'The PayloadKit Dockerfile is optimized for VPS deployment',
            content: (
              <div className="space-y-4">
                <CodeBlock
                  code={`# Build stage with DATABASE_BUILD_URI
FROM base AS builder
ENV PAYLOAD_DISABLE_ADMIN=true
ENV DATABASE_URI="postgresql://dummy:dummy@localhost:5432/dummy"
# DATABASE_BUILD_URI will be injected by Dokploy

# Type generation with build DB
RUN bunx payload generate:types && \\
    bunx payload generate:importmap && \\
    bun run build

# Production stage with DATABASE_URI
FROM oven/bun:1-alpine AS runner
# DATABASE_URI will be injected by Dokploy at runtime`}
                  language="dockerfile"
                  title="Optimized Dockerfile"
                />
              </div>
            )
          }
        ]}
        allowSkip={false}
      />

      {/* Platform-Specific Configurations */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Platform-Specific Setup</h2>
          <p className="text-muted-foreground">
            PayloadKit works with all major VPS platforms. Here are specific configurations for popular services.
          </p>
        </div>

        <div className="space-y-8">
          {/* Dokploy */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              Dokploy <Badge variant="default">Popular</Badge>
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Service Configuration</h4>
                <CodeBlock
                  code={`# dokploy.yml
version: '3.8'
services:
  app:
    build: .
    environment:
      - DATABASE_BUILD_URI=\${DATABASE_BUILD_URI}
      - DATABASE_URI=\${DATABASE_URI}
      - PAYLOAD_SECRET=\${PAYLOAD_SECRET}
      - NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
    ports:
      - "3000:3000"`}
                  language="yaml"
                  title="dokploy.yml"
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Environment Variables in Dokploy</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium mb-2">Build Variables:</p>
                    <CodeBlock
                      code="DATABASE_BUILD_URI=postgresql://builduser:buildpass@accessible-db:5432/builddb"
                      language="bash"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Runtime Variables:</p>
                    <CodeBlock
                      code={`DATABASE_URI=postgresql://produser:prodpass@private-db:5432/proddb
PAYLOAD_SECRET=your-production-secret
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com`}
                      language="bash"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Platforms */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">CapRover</h3>
              <CodeBlock
                code={`{
  "schemaVersion": 2,
  "dockerfileLines": [
    "FROM your-registry/payloadkit-app:latest"
  ],
  "envVars": [
    {
      "key": "DATABASE_BUILD_URI",
      "value": "postgresql://build:pass@build-db:5432/build"
    },
    {
      "key": "DATABASE_URI",
      "value": "postgresql://prod:pass@srv-captain--db:5432/prod"
    }
  ]
}`}
                language="json"
                title="CapRover Config"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Railway</h3>
              <CodeBlock
                code={`# Railway variables
railway variables set DATABASE_BUILD_URI="postgresql://build:pass@build.railway.app:5432/railway"
railway variables set DATABASE_URI="postgresql://prod:pass@prod.railway.app:5432/railway"
railway variables set PAYLOAD_SECRET="your-secret"`}
                language="bash"
                title="Railway Setup"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Coolify</h3>
              <CodeBlock
                code={`# docker-compose.yml for Coolify
services:
  app:
    build: .
    environment:
      DATABASE_BUILD_URI: $DATABASE_BUILD_URI
      DATABASE_URI: $DATABASE_URI
      PAYLOAD_SECRET: $PAYLOAD_SECRET
    labels:
      - "coolify.managed=true"`}
                language="yaml"
                title="Coolify Config"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Troubleshooting */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Build Issues</h3>
              <div className="space-y-4">
                <Alert>
                  <AlertDescription>
                    <strong>Cannot connect to database during build</strong><br />
                    Check DATABASE_BUILD_URI accessibility:
                    <CodeBlock
                      code={`# Test connection to build DB
psql "\${DATABASE_BUILD_URI}" -c "SELECT 1;"

# Check environment variables
echo $DATABASE_BUILD_URI`}
                      language="bash"
                    />
                  </AlertDescription>
                </Alert>

                <Alert>
                  <AlertDescription>
                    <strong>Types generation failed</strong><br />
                    Build DB must have PayloadCMS extensions:
                    <CodeBlock
                      code={`psql "\${DATABASE_BUILD_URI}" -c "CREATE EXTENSION IF NOT EXISTS \\"uuid-ossp\\";"
psql "\${DATABASE_BUILD_URI}" -c "CREATE EXTENSION IF NOT EXISTS \\"pgcrypto\\";"`}
                      language="bash"
                    />
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Runtime Issues</h3>
              <div className="space-y-4">
                <Alert>
                  <AlertDescription>
                    <strong>Application starts but database connection fails</strong><br />
                    Verify DATABASE_URI is accessible from container:
                    <CodeBlock
                      code="docker exec your-container env | grep DATABASE_URI"
                      language="bash"
                    />
                  </AlertDescription>
                </Alert>

                <Alert>
                  <AlertDescription>
                    <strong>Slow build performance</strong><br />
                    Optimize build database:
                    <CodeBlock
                      code={`-- Minimal build database (no data)
CREATE DATABASE payloadkit_build_minimal;
-- Only required extensions`}
                      language="sql"
                    />
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Best Practices</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">Build/Runtime Separation</h3>
            <CodeBlock
              code={`# Build DB: Minimal, accessible, temporary
DATABASE_BUILD_URI=postgresql://build:pass@public-build-db:5432/build

# Prod DB: Secure, private, with real data
DATABASE_URI=postgresql://prod:pass@private-prod-db:5432/prod`}
              language="bash"
              title="Proper Separation"
            />
          </div>

          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">Security</h3>
            <CodeBlock
              code={`# Build DB: Limited permissions
CREATE USER build_user WITH PASSWORD 'temp_build_password';
GRANT CONNECT ON DATABASE build_db TO build_user;

# Prod DB: Full permissions
CREATE USER prod_user WITH PASSWORD 'secure_prod_password';
GRANT ALL PRIVILEGES ON DATABASE prod_db TO prod_user;`}
              language="sql"
              title="Security Setup"
            />
          </div>

          <div className="rounded-lg border p-6 space-y-4">
            <h3 className="text-lg font-semibold">Monitoring</h3>
            <CodeBlock
              code={`# Build logs
docker logs your-build-container

# Runtime logs
docker logs your-app-container

# DB verification
docker exec your-app psql $DATABASE_URI -c "SELECT version();"`}
              language="bash"
              title="Monitoring Commands"
            />
          </div>
        </div>
      </section>

      {/* Migration Guide */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Migration to PayloadKit</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-600">Before (Classic Config)</h3>
            <CodeBlock
              code={`// Before
export default buildConfig({
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI }
  })
})`}
              language="typescript"
              title="Old Configuration"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-600">After (PayloadKit)</h3>
            <CodeBlock
              code={`// After (PayloadKit)
import { dbConfig } from './config'

export default buildConfig({
  db: dbConfig  // Smart database with BUILD_URI support
})`}
              language="typescript"
              title="New Configuration"
            />
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-medium mb-2">Variables to Add</h4>
          <CodeBlock
            code={`# Only add DATABASE_BUILD_URI
DATABASE_BUILD_URI=postgresql://build:pass@accessible:5432/build

# DATABASE_URI remains the same
DATABASE_URI=postgresql://prod:pass@private:5432/prod`}
            language="bash"
            title="Required Variables"
          />
        </div>
      </section>

      {/* Solution Comparison */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Solution Comparison</h2>

        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted px-6 py-3 border-b">
            <h4 className="font-semibold">Deployment Methods Comparison</h4>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4 text-sm font-medium">
                <div>Method</div>
                <div>Complexity</div>
                <div>Security</div>
                <div>Performance</div>
              </div>
              <Separator />
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-4 gap-4">
                  <div className="font-medium text-green-600">PayloadKit</div>
                  <div>⭐ Simple</div>
                  <div>⭐⭐⭐ Excellent</div>
                  <div>⭐⭐⭐ Fast</div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="font-medium">Dummy DB</div>
                  <div>⭐⭐ Medium</div>
                  <div>⭐ Poor</div>
                  <div>⭐⭐ Medium</div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="font-medium">Tunneling</div>
                  <div>⭐⭐⭐ Complex</div>
                  <div>⭐⭐ Medium</div>
                  <div>⭐ Slow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Button variant="outline" asChild>
            <Link href="/docs/configuration">
              Configuration Guide
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/security">
              Security Guide
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/getting-started">
              Getting Started
            </Link>
          </Button>
        </div>
      </section>

      {/* Tags */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {['Deployment', 'VPS', 'Dokploy', 'Railway', 'Database', 'Docker', 'Production'].map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}