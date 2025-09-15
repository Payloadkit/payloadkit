import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { Snippet } from '@/components/snippet'
import { CodeBlock } from '@/components/code-tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Security - PayloadKit',
  description: 'Enterprise-grade security by default using Better Auth and registry-based components',
}

export default function SecurityPage() {
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
        title="Security"
        description="PayloadKit provides enterprise-grade security by default using Better Auth and registry-based components."
        category="guides"
        version="0.1.0"
        difficulty="intermediate"
        estimatedTime="10 minutes"
        lastUpdated="January 2025"
      />

      {/* Quick Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Security Out of the Box</h2>
        <div className="rounded-lg border p-6 bg-muted/50">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="font-medium">Two-Factor Authentication (2FA)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="font-medium">Better Auth UI Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="font-medium">OAuth/Social Login</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="font-medium">WebAuthn/Passkeys</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="font-medium">Audit Logging</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="font-medium">Rate Limiting</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="font-medium">Security Headers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="font-medium">GDPR/SOX/HIPAA Ready</span>
              </div>
            </div>
          </div>
          <Snippet
            command="npx create-payloadkit my-app --template blank"
            title="Enterprise security enabled by default!"
          />
        </div>
      </section>

      {/* Registry-Based Architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Registry-Based Security</h2>
          <p className="text-muted-foreground">
            All security features come from PayloadKit Registry - maintained by security experts, updated automatically.
          </p>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Core Security Plugins</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 space-y-2">
                <h4 className="font-medium">better-auth-security</h4>
                <p className="text-sm text-muted-foreground">
                  Complete authentication with 2FA, OAuth, Magic Links, WebAuthn
                </p>
                <CodeBlock
                  code="betterAuthSecurityPlugin()"
                  language="typescript"
                />
              </div>
              <div className="border-l-4 border-green-500 pl-4 space-y-2">
                <h4 className="font-medium">audit-logging</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive activity tracking for compliance (GDPR, SOX, HIPAA)
                </p>
                <CodeBlock
                  code="auditLoggingPlugin()"
                  language="typescript"
                />
              </div>
              <div className="border-l-4 border-red-500 pl-4 space-y-2">
                <h4 className="font-medium">rate-limiting</h4>
                <p className="text-sm text-muted-foreground">
                  Brute force protection with configurable endpoint rules
                </p>
                <CodeBlock
                  code="rateLimitingPlugin()"
                  language="typescript"
                />
              </div>
            </div>
          </div>
        </section>

      {/* Better Auth Integration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Better Auth UI</h2>
          <p className="text-muted-foreground">
            Pre-built, beautiful authentication pages using Better Auth with shadcn/ui styling.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">🎨 Pre-built Pages</h3>
              <div className="space-y-2 text-sm">
                <div><code className="bg-muted px-2 py-1 rounded">/auth/sign-in</code></div>
                <div><code className="bg-muted px-2 py-1 rounded">/auth/sign-up</code></div>
                <div><code className="bg-muted px-2 py-1 rounded">/auth/reset-password</code></div>
                <div><code className="bg-muted px-2 py-1 rounded">/auth/verify-email</code></div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">🔧 Simple Setup</h3>
              <CodeBlock
                code="import { AuthView } from '@payloadkit/registry/components/auth/AuthView'\n\nexport default function AuthPage({ params }) {\n  return <AuthView pathname={params.authView} />\n}"
                language="typescript"
                title="Simple Auth Setup"
              />
            </div>
          </div>
        </section>

      {/* Configuration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Configuration</h2>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Environment Variables</h3>
            <CodeBlock
              code="# Required\nPAYLOAD_SECRET=your-secret\nDATABASE_URI=postgresql://user:password@localhost:5432/payloadkit\nBETTER_AUTH_URL=https://yourapp.com\n\n# Optional OAuth\nGOOGLE_CLIENT_ID=your-client-id\nGOOGLE_CLIENT_SECRET=your-client-secret\n\n# Optional Features\nENABLE_MAGIC_LINKS=true\nENABLE_WEBAUTHN=true"
              language="bash"
              title="Environment Variables"
            />
          </div>
        </section>

      {/* Getting Started */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Get Started</h2>
          <div className="rounded-lg border p-6 bg-blue-50 dark:bg-blue-950/20">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Create your secure PayloadCMS app</h3>
                <Snippet
                  command="npx create-payloadkit my-app --template blank"
                  title="Create Project"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Configure environment</h3>
                <Snippet
                  command="cp .env.example .env && nano .env"
                  title="Setup Environment"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Start development</h3>
                <Snippet
                  command="npm run dev"
                  title="Start Development Server"
                />
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Next Steps */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" asChild>
              <Link href="/docs/getting-started">
                Getting Started
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/configuration">
                Configuration Guide
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/deployment">
                Deployment Guide
              </Link>
            </Button>
          </div>
        </section>

        {/* Tags */}
        <div className="border-t pt-6">
          <div className="flex flex-wrap gap-2">
            {['Security', 'Authentication', '2FA', 'OAuth', 'Better Auth', 'Compliance', 'GDPR', 'Enterprise'].map(tag => (
              <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
    </div>
  )
}