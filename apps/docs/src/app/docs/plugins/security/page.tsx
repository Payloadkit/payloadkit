import { Badge } from '@/components/ui/badge'

export default function SecurityPluginsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">Security Plugins</h1>
            <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Registry
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade security plugins for PayloadCMS built with Better Auth and modern standards.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="rounded-lg border p-6 bg-muted/50">
          <h2 className="text-2xl font-semibold mb-4">🔌 Available Security Plugins</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-background rounded-lg p-4 border">
              <h4 className="font-semibold mb-2">🛡️ Better Auth Security</h4>
              <p className="text-sm text-muted-foreground">Complete authentication with 2FA, OAuth, Magic Links, WebAuthn</p>
            </div>
            <div className="bg-background rounded-lg p-4 border">
              <h4 className="font-semibold mb-2">📊 Audit Logging</h4>
              <p className="text-sm text-muted-foreground">Compliance-ready activity tracking for GDPR, SOX, HIPAA</p>
            </div>
            <div className="bg-background rounded-lg p-4 border">
              <h4 className="font-semibold mb-2">🚦 Rate Limiting</h4>
              <p className="text-sm text-muted-foreground">Brute force protection with configurable endpoint rules</p>
            </div>
          </div>
        </div>

        {/* Better Auth Security Plugin */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🛡️ Better Auth Security Plugin</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Installation</h3>
            <div className="bg-muted rounded p-4 text-sm mb-4">
              <code>npx payloadkit add plugin/better-auth-security</code>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Basic Configuration</h3>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// src/payload.config.ts
import { betterAuthSecurityPlugin } from '@payloadkit/registry/plugins/better-auth-security'

export default buildConfig({
  plugins: [
    betterAuthSecurityPlugin({
      // Plugin will auto-configure based on environment variables
      // 2FA is REQUIRED by default in production
    })
  ]
})`}</code>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Features Included</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Email + Password Authentication</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Two-Factor Authentication (TOTP)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>OAuth/Social Login (Auto-detected)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Magic Links</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>WebAuthn/Passkeys</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Email Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Password Reset</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Session Management</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Environment Variables</h3>
            <div className="bg-muted rounded p-4 text-sm font-mono space-y-2">
              <div className="text-green-600"># Required</div>
              <div>BETTER_AUTH_URL=https://yourapp.com</div>
              <div>BETTER_AUTH_SECRET=your-secret-key</div>
              <div className="mt-4 text-green-600"># OAuth Providers (Auto-detected)</div>
              <div>GOOGLE_CLIENT_ID=your-google-client-id</div>
              <div>GOOGLE_CLIENT_SECRET=your-google-client-secret</div>
              <div>GITHUB_CLIENT_ID=your-github-client-id</div>
              <div>GITHUB_CLIENT_SECRET=your-github-client-secret</div>
              <div className="mt-4 text-green-600"># Optional Features</div>
              <div>ENABLE_MAGIC_LINKS=true</div>
              <div>ENABLE_WEBAUTHN=true</div>
              <div>TWOFA_ISSUER="Your App Name"</div>
              <div className="mt-4 text-yellow-600"># Development Only - NEVER in production!</div>
              <div>SKIP_2FA_ENFORCEMENT=true</div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Advanced Configuration</h3>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// Advanced plugin configuration
betterAuthSecurityPlugin({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    minPasswordLength: 12,
    requireUppercase: true,
    requireNumbers: true,
    requireSymbols: true,
  },
  twoFactor: {
    issuer: 'My Company App',
    skipSetupForNewUsers: false, // Force 2FA setup
    backupCodeLength: 10,
  },
  oauth: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }
  },
  magicLink: {
    enabled: true,
    expiresIn: 60 * 5, // 5 minutes
  },
  webAuthn: {
    enabled: true,
    relyingPartyName: 'My Company',
  }
})`}</code>
            </div>
          </div>
        </section>

        {/* Audit Logging Plugin */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">📊 Audit Logging Plugin</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Installation</h3>
            <div className="bg-muted rounded p-4 text-sm mb-4">
              <code>npx payloadkit add plugin/audit-logging</code>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Basic Configuration</h3>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// src/payload.config.ts
import { auditLoggingPlugin } from '@payloadkit/registry/plugins/audit-logging'

export default buildConfig({
  plugins: [
    auditLoggingPlugin({
      collections: ['users', 'pages', 'media'], // Collections to audit
      includeServerActions: true,
      retentionDays: 2555, // 7 years for compliance
    })
  ]
})`}</code>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Compliance Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">📋 GDPR Ready</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Data access logging</div>
                  <div>• User consent tracking</div>
                  <div>• Right to be forgotten logs</div>
                  <div>• Data export tracking</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">📊 SOX Compliance</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Financial data change tracking</div>
                  <div>• User access monitoring</div>
                  <div>• System configuration changes</div>
                  <div>• Approval workflow logs</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">🏥 HIPAA Ready</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Healthcare data access logs</div>
                  <div>• Patient record access tracking</div>
                  <div>• Encryption key usage</div>
                  <div>• Security event monitoring</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">🔐 ISO 27001</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Information security events</div>
                  <div>• Access control logs</div>
                  <div>• Security incident tracking</div>
                  <div>• Risk assessment logs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Logged Events</h3>
            <div className="space-y-3">
              <div className="bg-background rounded p-3 border">
                <h4 className="font-medium mb-2">Authentication Events</h4>
                <div className="text-sm text-muted-foreground">
                  Login attempts, logout, 2FA setup/usage, password changes, failed authentication
                </div>
              </div>
              <div className="bg-background rounded p-3 border">
                <h4 className="font-medium mb-2">Data Operations</h4>
                <div className="text-sm text-muted-foreground">
                  Create, read, update, delete operations on all collections with field-level changes
                </div>
              </div>
              <div className="bg-background rounded p-3 border">
                <h4 className="font-medium mb-2">Administrative Actions</h4>
                <div className="text-sm text-muted-foreground">
                  User role changes, system configuration updates, plugin installations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Limiting Plugin */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🚦 Rate Limiting Plugin</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Installation</h3>
            <div className="bg-muted rounded p-4 text-sm mb-4">
              <code>npx payloadkit add plugin/rate-limiting</code>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Basic Configuration</h3>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// src/payload.config.ts
import { rateLimitingPlugin } from '@payloadkit/registry/plugins/rate-limiting'

export default buildConfig({
  plugins: [
    rateLimitingPlugin({
      // Automatically protects auth endpoints with strict limits
      // Configurable rules for different endpoint types
    })
  ]
})`}</code>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Default Rate Limits</h3>
            <div className="space-y-3">
              <div className="bg-background rounded p-3 border">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Authentication Endpoints</span>
                  <Badge variant="destructive">5 attempts / 15min</Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Login, signup, password reset - strict limits to prevent brute force
                </div>
              </div>
              <div className="bg-background rounded p-3 border">
                <div className="flex justify-between items-center">
                  <span className="font-medium">API Endpoints</span>
                  <Badge variant="secondary">100 requests / hour</Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  General API access with reasonable limits for normal usage
                </div>
              </div>
              <div className="bg-background rounded p-3 border">
                <div className="flex justify-between items-center">
                  <span className="font-medium">File Uploads</span>
                  <Badge variant="secondary">10 uploads / hour</Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Prevent abuse of media upload endpoints
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Custom Rate Limits</h3>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`rateLimitingPlugin({
  rules: [
    {
      path: '/api/auth/signin',
      method: 'POST',
      maxAttempts: 3,
      windowMs: 15 * 60 * 1000, // 15 minutes
      skipSuccessfulRequests: false,
    },
    {
      path: '/api/users',
      method: 'GET',
      maxAttempts: 50,
      windowMs: 60 * 60 * 1000, // 1 hour
      skipIf: (req) => req.user?.role === 'admin',
    },
    {
      path: '/api/media',
      method: 'POST',
      maxAttempts: 5,
      windowMs: 60 * 60 * 1000,
      message: 'Too many file uploads, please try again later',
    }
  ],
  storage: 'redis', // Use Redis for distributed rate limiting
  onLimitReached: (req, res) => {
    console.log(\`Rate limit exceeded for \${req.ip}\`)
    // Custom logging or alerting
  }
})`}</code>
            </div>
          </div>
        </section>

        {/* Plugin Combination */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔧 Using All Security Plugins Together</h2>
          
          <div className="rounded-lg border p-6 bg-green-50 dark:bg-green-950/20">
            <h3 className="text-xl font-semibold mb-4">Complete Security Stack</h3>
            <div className="bg-background rounded p-4 text-sm">
              <code>{`// src/payload.config.ts
import { buildConfig } from 'payload'
import { betterAuthSecurityPlugin } from '@payloadkit/registry/plugins/better-auth-security'
import { auditLoggingPlugin } from '@payloadkit/registry/plugins/audit-logging'
import { rateLimitingPlugin } from '@payloadkit/registry/plugins/rate-limiting'

export default buildConfig({
  plugins: [
    // Complete authentication with 2FA by default
    betterAuthSecurityPlugin({
      twoFactor: { issuer: 'My Company' }
    }),
    
    // Compliance-ready audit logging
    auditLoggingPlugin({
      collections: ['users', 'pages', 'media', 'orders'],
      includeServerActions: true,
      retentionDays: 2555, // 7 years
    }),
    
    // Brute force protection
    rateLimitingPlugin({
      storage: 'redis' // For production scalability
    }),
  ],
  
  // Other PayloadCMS config...
  admin: {
    bundler: webpackBundler(),
    // Authentication pages handled by Better Auth UI
  },
  
  collections: [
    Users, // Enhanced with 2FA fields
    Media, // Protected by rate limiting
    Pages, // Audit logged
  ],
})`}</code>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Enterprise Security by Default</h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              This configuration provides enterprise-grade security suitable for production applications handling sensitive data.
              All plugins work together seamlessly and are included by default in the PayloadKit blank template.
            </p>
          </div>
        </section>

        {/* Registry Information */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">📦 Registry Information</h2>
          
          <div className="rounded-lg border p-6 bg-muted/50">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-background rounded p-4">
                <h4 className="font-semibold mb-2">Better Auth Security</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div><strong>Path:</strong> plugins/better-auth-security</div>
                  <div><strong>Version:</strong> 0.1.0</div>
                  <div><strong>Dependencies:</strong> better-auth, @daveyplate/better-auth-ui</div>
                </div>
              </div>
              <div className="bg-background rounded p-4">
                <h4 className="font-semibold mb-2">Audit Logging</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div><strong>Path:</strong> plugins/audit-logging</div>
                  <div><strong>Version:</strong> 0.1.0</div>
                  <div><strong>Dependencies:</strong> payload</div>
                </div>
              </div>
              <div className="bg-background rounded p-4">
                <h4 className="font-semibold mb-2">Rate Limiting</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div><strong>Path:</strong> plugins/rate-limiting</div>
                  <div><strong>Version:</strong> 0.1.0</div>
                  <div><strong>Dependencies:</strong> express-rate-limit</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔧 Troubleshooting</h2>
          
          <div className="space-y-4">
            <div className="rounded-lg border p-4 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Plugin conflicts</h4>
              <div className="text-red-700 dark:text-red-300 text-sm space-y-2">
                <div><strong>Issue:</strong> Multiple authentication plugins causing conflicts</div>
                <div><strong>Solution:</strong> Use only betterAuthSecurityPlugin, remove any other auth plugins</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Environment variables not loaded</h4>
              <div className="text-yellow-700 dark:text-yellow-300 text-sm space-y-2">
                <div><strong>Check:</strong> .env file exists and is properly formatted</div>
                <div><strong>Check:</strong> Next.js environment variable naming (NEXT_PUBLIC_ prefix for client-side)</div>
                <div><strong>Check:</strong> Restart development server after .env changes</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Rate limiting too restrictive</h4>
              <div className="text-blue-700 dark:text-blue-300 text-sm space-y-2">
                <div><strong>Solution:</strong> Adjust limits in plugin configuration</div>
                <div><strong>Solution:</strong> Add skipIf conditions for admin users</div>
                <div><strong>Solution:</strong> Use Redis storage for better performance in production</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}