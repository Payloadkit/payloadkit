import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Container, Database, Mail, Settings } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { Snippet } from '@/components/snippet'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Docker Development Setup - PayloadKit',
  description: 'Complete Docker development environment with PostgreSQL, Redis, and MailHog',
}

export default function DockerPage() {
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
        title="Docker Development Setup"
        description="PayloadKit offers a complete Docker development environment with PostgreSQL, Redis, MailHog, and pgAdmin. One command for a full development stack."
        category="guides"
        version="0.1.0"
        difficulty="intermediate"
        estimatedTime="10 minutes"
        lastUpdated="January 2025"
      />

      {/* Features Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Container className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <strong>Multi-stage Dockerfile</strong>
              <p className="text-sm text-muted-foreground">Optimized Dev, Build, and Production stages</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Database className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>PostgreSQL 16</strong>
              <p className="text-sm text-muted-foreground">Database with extensions and health checks</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Settings className="h-5 w-5 text-purple-600 mt-0.5" />
            <div>
              <strong>Hot-reload Development</strong>
              <p className="text-sm text-muted-foreground">Automatic reload on code changes</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Mail className="h-5 w-5 text-orange-600 mt-0.5" />
            <div>
              <strong>Optional Services</strong>
              <p className="text-sm text-muted-foreground">Redis, MailHog, pgAdmin included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Start</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-3">1. Standard Launch</h3>
            <p className="text-sm text-muted-foreground mb-4">Basic environment (app + PostgreSQL)</p>
            <div className="space-y-2">
              <Snippet command="npm run docker:dev" title="Start Development" />
              <Snippet command="npm run docker:dev:detached" title="Background Mode" />
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-3">2. Full Environment</h3>
            <p className="text-sm text-muted-foreground mb-4">With Redis, MailHog, and pgAdmin</p>
            <Snippet command="npm run docker:dev:full" title="Full Stack" />
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-semibold mb-3">3. First Build</h3>
            <p className="text-sm text-muted-foreground mb-4">Build and launch together</p>
            <Snippet command="npm run docker:dev:build" title="Build + Start" />
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Available Services</h2>

        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted px-6 py-3 border-b">
            <h4 className="font-semibold">Docker Services</h4>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4 text-sm font-medium">
                <div>Service</div>
                <div>Port</div>
                <div>Description</div>
                <div>Profile</div>
              </div>
              <Separator />
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-4 gap-4">
                  <code className="text-xs bg-muted px-2 py-1 rounded font-semibold">app</code>
                  <div>3000</div>
                  <div>PayloadKit + Next.js</div>
                  <div className="text-green-600">Always</div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <code className="text-xs bg-muted px-2 py-1 rounded font-semibold">postgres</code>
                  <div>5432</div>
                  <div>PostgreSQL 16 + extensions</div>
                  <div className="text-green-600">Always</div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <code className="text-xs bg-muted px-2 py-1 rounded font-semibold">redis</code>
                  <div>6379</div>
                  <div>Cache and sessions</div>
                  <div className="text-blue-600">full</div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <code className="text-xs bg-muted px-2 py-1 rounded font-semibold">mailhog</code>
                  <div>8025</div>
                  <div>Test email interface</div>
                  <div className="text-blue-600">full</div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <code className="text-xs bg-muted px-2 py-1 rounded font-semibold">pgadmin</code>
                  <div>5050</div>
                  <div>PostgreSQL administration</div>
                  <div className="text-blue-600">full</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Tutorial */}
      <TutorialSteps
        title="Docker Setup"
        steps={[
          {
            title: 'Environment Configuration',
            keyword: 'Config',
            description: 'Set up your environment variables for Docker development',
            content: (
              <div className="space-y-4">
                <CodeBlock
                  code={`# Database
POSTGRES_USER=payloadkit
POSTGRES_PASSWORD=payloadkit
POSTGRES_DB=payloadkit_dev

# PayloadKit
DATABASE_URI=postgresql://payloadkit:payloadkit@localhost:5432/payloadkit_dev
PAYLOAD_SECRET=your-secret-key`}
                  language="bash"
                  title="Docker Environment Variables"
                />
              </div>
            )
          },
          {
            title: 'Launch Development',
            keyword: 'Development',
            description: 'Start your Docker development environment',
            content: (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Standard Development</h4>
                  <Snippet command="npm run docker:dev" title="Start Development Environment" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Full Stack with All Services</h4>
                  <Snippet command="npm run docker:dev:full" title="Start Full Environment" />
                </div>
                <Alert>
                  <AlertDescription>
                    The full environment includes Redis for caching, MailHog for email testing, and pgAdmin for database management.
                  </AlertDescription>
                </Alert>
              </div>
            )
          },
          {
            title: 'Database Management',
            keyword: 'Database',
            description: 'Access and manage your PostgreSQL database',
            content: (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Direct Database Access</h4>
                  <Snippet command="npm run docker:db" title="Connect to Database" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">pgAdmin Web Interface</h4>
                  <div className="rounded-lg border p-4 space-y-2">
                    <p><strong>URL:</strong> <code>http://localhost:5050</code></p>
                    <p><strong>Email:</strong> <code>admin@payloadkit.dev</code></p>
                    <p><strong>Password:</strong> <code>admin</code></p>
                  </div>
                </div>
              </div>
            )
          },
          {
            title: 'Email Testing',
            keyword: 'Email',
            description: 'Configure and test email functionality with MailHog',
            content: (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">SMTP Configuration</h4>
                  <CodeBlock
                    code={`# Email Testing with MailHog
SMTP_HOST=mailhog
SMTP_PORT=1025
SMTP_USER=
SMTP_PASS=`}
                    language="bash"
                    title="MailHog SMTP Settings"
                  />
                </div>
                <Alert>
                  <AlertDescription>
                    <strong>MailHog Web Interface:</strong> <code>http://localhost:8025</code><br />
                    All emails sent by PayloadCMS will appear in the MailHog interface for testing.
                  </AlertDescription>
                </Alert>
              </div>
            )
          }
        ]}
        allowSkip={false}
      />

      {/* Available NPM Scripts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Available NPM Scripts</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Development</h3>
            <div className="space-y-3">
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">npm run docker:dev</code>
                <p className="text-sm text-muted-foreground mt-1">Standard launch</p>
              </div>
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">npm run docker:dev:build</code>
                <p className="text-sm text-muted-foreground mt-1">Build + launch</p>
              </div>
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">npm run docker:dev:detached</code>
                <p className="text-sm text-muted-foreground mt-1">Background launch</p>
              </div>
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">npm run docker:dev:full</code>
                <p className="text-sm text-muted-foreground mt-1">Full environment</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Management</h3>
            <div className="space-y-3">
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">npm run docker:stop</code>
                <p className="text-sm text-muted-foreground mt-1">Stop all services</p>
              </div>
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">npm run docker:reset</code>
                <p className="text-sm text-muted-foreground mt-1">Complete reset (removes volumes)</p>
              </div>
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">npm run docker:logs</code>
                <p className="text-sm text-muted-foreground mt-1">View app logs</p>
              </div>
              <div>
                <code className="text-sm bg-muted px-2 py-1 rounded">npm run docker:db</code>
                <p className="text-sm text-muted-foreground mt-1">Direct PostgreSQL connection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Production with Dokploy/VPS</h2>

        <p className="text-muted-foreground">
          The Dockerfile includes 3 optimized stages for different environments:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Multi-Stage Dockerfile</h3>
            <CodeBlock
              code={`# Stage 1: Development (hot-reload)
FROM oven/bun:1-alpine AS dev

# Stage 2: Build (type generation + build)
FROM base AS builder
ENV PAYLOAD_DISABLE_ADMIN=true
ENV DATABASE_BUILD_URI=postgresql://...

# Stage 3: Production (optimized standalone)
FROM oven/bun:1-alpine AS runner`}
              language="dockerfile"
              title="Multi-Stage Build"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Production Environment</h3>
            <CodeBlock
              code={`# Build-time (if database accessible at build)
DATABASE_BUILD_URI=postgresql://build-user:pass@build-host:5432/build-db

# Runtime
DATABASE_URI=postgresql://prod-user:pass@prod-host:5432/prod-db
PAYLOAD_SECRET=your-production-secret
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com

# Production email
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-smtp-password`}
              language="bash"
              title="Production Variables"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Production Build</h3>
            <Snippet command="docker build --target runner -t payloadkit-prod ." title="Build Production Image" />
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>

        <div className="space-y-4">
          <div className="rounded-lg border p-6">
            <h4 className="font-semibold mb-2">Port 5432 already in use</h4>
            <p className="text-sm text-muted-foreground mb-2">Change PostgreSQL port in docker-compose.yml:</p>
            <CodeBlock
              code={`# docker-compose.yml
ports:
  - '5433:5432'  # Different local port`}
              language="yaml"
              title="Port Configuration"
            />
          </div>

          <div className="rounded-lg border p-6">
            <h4 className="font-semibold mb-2">Corrupted volumes</h4>
            <p className="text-sm text-muted-foreground mb-2">Complete reset of Docker environment:</p>
            <div className="space-y-2">
              <Snippet command="npm run docker:reset" title="Quick Reset" />
              <CodeBlock
                code={`# Manual reset
docker-compose down -v
docker system prune`}
                language="bash"
                title="Manual Reset"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Button asChild>
            <Link href="/docs/deployment">
              Deployment Guide <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/getting-started">
              Getting Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Tags */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {['Docker', 'Development', 'PostgreSQL', 'Redis', 'MailHog', 'pgAdmin', 'Production'].map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}