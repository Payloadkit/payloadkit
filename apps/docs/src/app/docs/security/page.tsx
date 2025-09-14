import { Badge } from '@/components/ui/badge'

export default function SecurityPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">Enterprise Security</h1>
            <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Default
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">
            PayloadKit provides enterprise-grade security by default using Better Auth and registry-based components.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="rounded-lg border p-6 bg-muted/50">
          <h2 className="text-2xl font-semibold mb-4">🚀 Security Out of the Box</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
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
          <div className="bg-background rounded-lg p-4">
            <code className="text-sm">
              npx create-payloadkit my-app --template blank
              <br />
              <span className="text-muted-foreground"># Enterprise security enabled by default!</span>
            </code>
          </div>
        </div>

        {/* Registry-Based Architecture */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🏗️ Registry-Based Security</h2>
          <p className="text-muted-foreground">
            All security features come from PayloadKit Registry - maintained by security experts, updated automatically.
          </p>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Core Security Plugins</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium">better-auth-security</h4>
                <p className="text-sm text-muted-foreground">
                  Complete authentication with 2FA, OAuth, Magic Links, WebAuthn
                </p>
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  betterAuthSecurityPlugin()
                </code>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium">audit-logging</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive activity tracking for compliance (GDPR, SOX, HIPAA)
                </p>
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  auditLoggingPlugin()
                </code>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-medium">rate-limiting</h4>
                <p className="text-sm text-muted-foreground">
                  Brute force protection with configurable endpoint rules
                </p>
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  rateLimitingPlugin()
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Better Auth Integration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">✨ Better Auth UI</h2>
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
              <div className="bg-muted rounded p-4 text-sm">
                <code>{`import { AuthView } from '@payloadkit/registry/components/auth/AuthView'

export default function AuthPage({ params }) {
  return <AuthView pathname={params.authView} />
}`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Factor Authentication */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🛡️ Two-Factor Authentication</h2>
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
          <h2 className="text-3xl font-semibold">🔐 Authentication Methods</h2>
          
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
          <h2 className="text-3xl font-semibold">🔒 Security Headers & Protection</h2>
          
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
          <h2 className="text-3xl font-semibold">🏢 Compliance Ready</h2>
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
          <h2 className="text-3xl font-semibold">⚙️ Configuration</h2>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Environment Variables</h3>
            <div className="bg-muted rounded p-4 text-sm font-mono space-y-2">
              <div className="text-green-600"># Required</div>
              <div>PAYLOAD_SECRET=your-secret</div>
              <div>DATABASE_URI=postgresql://...</div>
              <div>BETTER_AUTH_URL=https://yourapp.com</div>
              <div className="mt-4 text-green-600"># Optional OAuth</div>
              <div>GOOGLE_CLIENT_ID=your-client-id</div>
              <div>GOOGLE_CLIENT_SECRET=your-client-secret</div>
              <div className="mt-4 text-green-600"># Optional Features</div>
              <div>ENABLE_MAGIC_LINKS=true</div>
              <div>ENABLE_WEBAUTHN=true</div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🚀 Get Started</h2>
          <div className="rounded-lg border p-6 bg-blue-50 dark:bg-blue-950/20">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Create your secure PayloadCMS app</h3>
                <code className="bg-background px-3 py-2 rounded">
                  npx create-payloadkit my-app --template blank
                </code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Configure environment</h3>
                <code className="bg-background px-3 py-2 rounded">
                  cp .env.example .env && nano .env
                </code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Start development</h3>
                <code className="bg-background px-3 py-2 rounded">
                  npm run dev
                </code>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              ✅ Enterprise security enabled by default!
            </Badge>
          </div>
        </section>
      </div>
    </div>
  )
}