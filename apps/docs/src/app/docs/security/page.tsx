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
        category="guide"
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
                code={`import { AuthView } from '@payloadkit/registry/components/auth/AuthView'

export default function AuthPage({ params }) {
  return <AuthView pathname={params.authView} />
}`}
                language="typescript"
                title="Simple Auth Setup"
              />
            </div>
          </div>
        </section>

      {/* Two-Factor Authentication */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Two-Factor Authentication</h2>
          <div className="rounded-lg border p-6 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-600 dark:text-red-400 font-semibold">REQUIRED BY DEFAULT</span>
              <Badge variant="destructive">Production</Badge>
            </div>
            <p className="text-red-800 dark:text-red-200">
              2FA is <strong>mandatory</strong> for all users in production. This provides 99.9% protection against account takeover attacks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">📱 TOTP Support</h4>
              <p className="text-sm text-muted-foreground">
                Google Authenticator, Authy, 1Password, Bitwarden
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">🔑 Backup Codes</h4>
              <p className="text-sm text-muted-foreground">
                10 one-time use codes for account recovery
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">⚡ Quick Setup</h4>
              <p className="text-sm text-muted-foreground">
                QR code + manual entry, 30 seconds setup
              </p>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Development Override</h3>
            <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded p-4 border border-yellow-200 dark:border-yellow-800">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-2">
                ⚠️ <strong>Development Only</strong> - Never use in production!
              </p>
              <code className="text-xs">SKIP_2FA_ENFORCEMENT=true</code>
            </div>
          </div>
        </section>

      {/* Authentication Methods */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Authentication Methods</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold mb-2">📧 Email + Password</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• 12+ characters minimum</div>
                  <div>• Mixed case, numbers, symbols</div>
                  <div>• Email verification required</div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold mb-2">🌐 OAuth/Social Login</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Google, GitHub, Discord</div>
                  <div>• Microsoft, Apple, Twitter, LinkedIn</div>
                  <div>• Auto-enabled with credentials</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold mb-2">✨ Magic Links</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Passwordless authentication</div>
                  <div>• Email-based login</div>
                  <div>• 5-minute expiration</div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold mb-2">🔑 WebAuthn/Passkeys</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• TouchID, FaceID, Windows Hello</div>
                  <div>• Hardware security keys</div>
                  <div>• Biometric authentication</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Security Headers & Protection */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Security Headers & Protection</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Automatic Protection</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Security Headers</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Content Security Policy (CSP)</div>
                  <div>• HTTP Strict Transport Security (HSTS)</div>
                  <div>• X-Frame-Options (Clickjacking protection)</div>
                  <div>• X-Content-Type-Options</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Attack Prevention</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Brute force protection</div>
                  <div>• SQL injection detection</div>
                  <div>• XSS attack prevention</div>
                  <div>• Bot/crawler detection</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Compliance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Compliance Ready</h2>
          <p className="text-muted-foreground">
            PayloadKit security features help you meet regulatory requirements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">📋 GDPR Compliance</h4>
              <div className="text-sm text-muted-foreground">
                Complete audit trails, data access logging, privacy controls
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">📊 SOX Compliance</h4>
              <div className="text-sm text-muted-foreground">
                Financial data change tracking, user access monitoring
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">🏥 HIPAA Ready</h4>
              <div className="text-sm text-muted-foreground">
                Healthcare data protection, access controls, audit logs
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">🔐 ISO 27001</h4>
              <div className="text-sm text-muted-foreground">
                Information security management standards
              </div>
            </div>
          </div>
        </section>

      {/* Configuration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Configuration</h2>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Environment Variables</h3>
            <CodeBlock
              code={`# Required
PAYLOAD_SECRET=your-secret
DATABASE_URI=postgresql://user:password@localhost:5432/payloadkit
BETTER_AUTH_URL=https://yourapp.com

# Optional OAuth
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret

# Optional Features
ENABLE_MAGIC_LINKS=true
ENABLE_WEBAUTHN=true`}
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
          <div className="text-center">
            <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              ✅ Enterprise security enabled by default!
            </Badge>
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
    </div>
  )
}