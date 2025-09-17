import { Badge } from '@/components/ui/badge'

export default function AuthenticationPage() {
  return (
    <div className="py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">Registry-Based Authentication</h1>
            <Badge variant="outline">Better Auth UI</Badge>
          </div>
          <p className="text-xl text-muted-foreground">
            Modern authentication powered by Better Auth with PayloadKit Registry components.
          </p>
        </div>

        {/* Overview */}
        <div className="rounded-lg border p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
          <h2 className="text-2xl font-semibold mb-4">🏗️ Registry-First Approach</h2>
          <p className="text-muted-foreground mb-4">
            PayloadKit uses a registry-based architecture where authentication components are maintained by the community and updated automatically.
          </p>
          <div className="bg-background rounded-lg p-4">
            <code className="text-sm">
              {`import { betterAuthSecurityPlugin } from '@payloadkit/registry/plugins/better-auth-security'
import { AuthProvider } from '@payloadkit/registry/components/auth/AuthProvider'  
import { AuthView } from '@payloadkit/registry/components/auth/AuthView'

// Enterprise security in 3 lines!
export default buildConfig({
  plugins: [betterAuthSecurityPlugin()]
})`}
            </code>
          </div>
        </div>

        {/* Better Auth UI Integration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">✨ Better Auth UI Pages</h2>
          <p className="text-muted-foreground">
            Beautiful, pre-built authentication pages with shadcn/ui styling - no custom components needed!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">🎨 Available Pages</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <code className="text-sm bg-muted px-2 py-1 rounded">/auth/sign-in</code>
                  <Badge variant="outline" className="text-xs">Login</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-sm bg-muted px-2 py-1 rounded">/auth/sign-up</code>
                  <Badge variant="outline" className="text-xs">Registration</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-sm bg-muted px-2 py-1 rounded">/auth/reset-password</code>
                  <Badge variant="outline" className="text-xs">Password Reset</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-sm bg-muted px-2 py-1 rounded">/auth/verify-email</code>
                  <Badge variant="outline" className="text-xs">Email Verification</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-sm bg-muted px-2 py-1 rounded">/auth/callback</code>
                  <Badge variant="outline" className="text-xs">OAuth Callback</Badge>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">⚡ Dynamic Routing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Single catch-all route handles all authentication pages automatically.
              </p>
              <div className="bg-muted rounded p-4 text-sm">
                <code>{`// src/app/auth/[...authView]/page.tsx
import { AuthView } from '@payloadkit/registry/components/auth/AuthView'

export default function AuthPage({ params }) {
  const { authView } = params
  return <AuthView pathname={authView} />
}

// Automatically generates:
// /auth/sign-in, /auth/sign-up, etc.`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* AuthProvider Setup */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔧 AuthProvider Setup</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Global Authentication Context</h3>
            <p className="text-muted-foreground mb-4">
              Wrap your app with AuthProvider to enable authentication across all pages.
            </p>
            
            <div className="bg-muted rounded p-4 mb-4">
              <code className="text-sm">{`// src/app/layout.tsx
import { AuthProvider } from '@payloadkit/registry/components/auth/AuthProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}`}</code>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 rounded p-4 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">What AuthProvider Provides</h4>
              <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <div>• Better Auth client configuration</div>
                <div>• Next.js navigation integration</div>
                <div>• Session state management</div>
                <div>• Automatic session refresh</div>
                <div>• Link component integration</div>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication Methods */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔐 Authentication Methods</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">📧 Email + Password</h4>
                  <Badge variant="default">Default</Badge>
                </div>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div><strong>Strong Requirements:</strong></div>
                  <div>• 12+ characters minimum</div>
                  <div>• Mixed case, numbers, symbols required</div>
                  <div>• Email verification mandatory</div>
                  <div>• Password strength indicator</div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">🛡️ Two-Factor Authentication</h4>
                  <Badge variant="destructive">Required</Badge>
                </div>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div><strong>TOTP Support:</strong></div>
                  <div>• Google Authenticator, Authy</div>
                  <div>• 1Password, Bitwarden</div>
                  <div>• QR code + manual entry</div>
                  <div>• 10 backup codes generated</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">🌐 OAuth/Social Login</h4>
                  <Badge variant="outline">Auto-enabled</Badge>
                </div>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div><strong>Supported Providers:</strong></div>
                  <div>• Google, GitHub, Discord</div>
                  <div>• Microsoft, Apple, Twitter, LinkedIn</div>
                  <div>• Auto-enabled with ENV credentials</div>
                  <div>• Seamless Better Auth UI integration</div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">✨ Advanced Methods</h4>
                  <Badge variant="outline">Optional</Badge>
                </div>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div><strong>Modern Authentication:</strong></div>
                  <div>• Magic Links (passwordless)</div>
                  <div>• WebAuthn/Passkeys</div>
                  <div>• Username + Password</div>
                  <div>• Hardware security keys</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plugin Configuration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">⚙️ Plugin Configuration</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">betterAuthSecurityPlugin Options</h3>
            
            <div className="space-y-4">
              <div className="bg-muted rounded p-4">
                <h4 className="font-medium mb-2">Basic Configuration (Secure by Default)</h4>
                <code className="text-sm">{`// src/payload.config.ts
import { betterAuthSecurityPlugin } from '@payloadkit/registry/plugins/better-auth-security'

export default buildConfig({
  plugins: [
    betterAuthSecurityPlugin(), // All security enabled!
  ]
})`}</code>
              </div>

              <div className="bg-muted rounded p-4">
                <h4 className="font-medium mb-2">Custom Configuration</h4>
                <code className="text-sm">{`// Advanced configuration
betterAuthSecurityPlugin({
  twoFactor: {
    issuer: 'My Company',
    skipSetupForNewUsers: false, // Force 2FA
  },
  oauth: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }
  },
  advanced: {
    magicLinks: { enabled: true },
    webauthn: { 
      enabled: true,
      rpName: 'My App' 
    }
  }
})`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Environment Configuration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🌍 Environment Configuration</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-3">Required Variables</h4>
              <div className="bg-muted rounded p-3 text-sm font-mono space-y-1">
                <div>PAYLOAD_SECRET=xxx</div>
                <div>DATABASE_URI=xxx</div>
                <div>BETTER_AUTH_URL=xxx</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-3">OAuth Auto-Detection</h4>
              <div className="bg-muted rounded p-3 text-sm font-mono space-y-1">
                <div className="text-green-600"># Add to enable Google OAuth</div>
                <div>GOOGLE_CLIENT_ID=xxx</div>
                <div>GOOGLE_CLIENT_SECRET=xxx</div>
                <div className="text-muted-foreground"># Automatically enabled!</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Feature Toggles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Advanced Features</h4>
                <div className="bg-muted rounded p-3 text-sm font-mono space-y-1">
                  <div>ENABLE_MAGIC_LINKS=true</div>
                  <div>ENABLE_WEBAUTHN=true</div>
                  <div>ENABLE_USERNAME_AUTH=true</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Development Overrides</h4>
                <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded p-3 text-sm font-mono space-y-1 border border-yellow-200 dark:border-yellow-800">
                  <div className="text-yellow-600"># ⚠️ DEV ONLY</div>
                  <div>SKIP_2FA_ENFORCEMENT=true</div>
                  <div>SKIP_RATE_LIMITING=true</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Using Authentication in Your App */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔗 Using Authentication in Your App</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Client-Side Hooks</h3>
              <div className="bg-muted rounded p-4 text-sm">
                <code>{`import { useAuth } from '@daveyplate/better-auth-ui'

function UserProfile() {
  const { user, signOut, isLoading } = useAuth()
  
  if (isLoading) return <div>Loading...</div>
  if (!user) return <div>Please sign in</div>
  
  return (
    <div>
      <p>Welcome, {user.email}!</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}`}</code>
              </div>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Server-Side Access</h3>
              <div className="bg-muted rounded p-4 text-sm">
                <code>{`// In PayloadCMS hooks
export const Users: CollectionConfig = {
  slug: 'users',
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        // req.user contains authenticated user
        console.log('User:', req.user)
        return data
      }
    ]
  }
}`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🎨 Customization</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Styling Auth Pages</h3>
            <p className="text-muted-foreground mb-4">
              Better Auth UI uses shadcn/ui components - customize through your CSS variables.
            </p>
            
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// globals.css - Customize auth page styling
:root {
  --primary: 220 100% 50%;        /* Primary button color */
  --primary-foreground: 0 0% 100%; /* Primary button text */
  --card: 0 0% 100%;               /* Auth card background */
  --border: 220 13% 91%;           /* Input borders */
}

/* Custom auth page layout */
.auth-container {
  background: linear-gradient(to bottom, #f8fafc, #e2e8f0);
}

/* Custom button styling */
.auth-button {
  border-radius: 0.5rem;
  font-weight: 600;
}`}</code>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Custom AuthView Options</h3>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// Custom branding and options
<AuthView 
  pathname="sign-in"
  className="custom-auth-container"
  showPoweredBy={false}  // Hide "Powered by Better Auth"
/>

// Direct view specification
<AuthView view="SIGN_UP" />

// Custom container styling
<AuthView 
  pathname="reset-password"
  className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50"
/>`}</code>
            </div>
          </div>
        </section>

        {/* Migration from Custom Auth */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔄 Migration Guide</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">From Custom Auth Components</h3>
            <p className="text-muted-foreground mb-4">
              Migrating from custom authentication? PayloadKit Registry makes it simple.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2 text-red-600">❌ Before (Custom)</h4>
                <div className="bg-red-50 dark:bg-red-950/20 rounded p-3 text-sm border border-red-200 dark:border-red-800">
                  <code>{`// Multiple custom files needed
src/components/SignIn.tsx        # 200+ lines
src/components/SignUp.tsx        # 180+ lines  
src/components/ResetPassword.tsx # 150+ lines
src/lib/auth-config.ts          # 100+ lines
src/hooks/useAuth.ts            # 80+ lines
// + styling, validation, etc.`}</code>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 text-green-600">✅ After (Registry)</h4>
                <div className="bg-green-50 dark:bg-green-950/20 rounded p-3 text-sm border border-green-200 dark:border-green-800">
                  <code>{`// Single import, all features included
import { AuthView } from '@payloadkit/registry/components/auth/AuthView'

// All auth pages in one component!
<AuthView pathname={params.authView} />

// Benefits:
// • Community maintained
// • Automatic updates  
// • Better Auth UI styling
// • Enterprise security`}</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🚀 Getting Started</h2>
          <div className="rounded-lg border p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Create PayloadKit project</h3>
                <code className="bg-background px-3 py-2 rounded text-sm">
                  bunx create-payloadkit my-app --template blank
                </code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Configure authentication</h3>
                <code className="bg-background px-3 py-2 rounded text-sm">
                  # Edit .env with your database and auth URLs
                </code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Start building</h3>
                <code className="bg-background px-3 py-2 rounded text-sm">
                  npm run dev
                </code>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                🎉 Authentication pages ready at /auth/sign-in!
              </Badge>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}