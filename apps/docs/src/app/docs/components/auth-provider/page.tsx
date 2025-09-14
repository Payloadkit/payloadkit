import { Badge } from '@/components/ui/badge'

export default function AuthProviderPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">AuthProvider</h1>
            <Badge variant="outline">Better Auth UI</Badge>
            <Badge variant="default">Registry Component</Badge>
          </div>
          <p className="text-xl text-muted-foreground">
            Global authentication context provider using Better Auth UI for Next.js applications.
          </p>
        </div>

        {/* Overview */}
        <div className="rounded-lg border p-6 bg-blue-50 dark:bg-blue-950/20">
          <h2 className="text-2xl font-semibold mb-4">🎯 Purpose</h2>
          <p className="text-muted-foreground">
            AuthProvider is a registry component that wraps your entire Next.js application with Better Auth UI context,
            enabling authentication functionality across all pages and components.
          </p>
        </div>

        {/* Installation */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">📦 Installation</h2>
          <div className="rounded-lg border p-6">
            <p className="text-muted-foreground mb-4">
              AuthProvider is included automatically when you create a PayloadKit project with the blank template.
            </p>
            <div className="bg-muted rounded p-4 text-sm">
              <code>
                npx create-payloadkit my-app --template blank
                <br />
                <span className="text-muted-foreground"># AuthProvider already configured!</span>
              </code>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔧 Usage</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Basic Setup (Root Layout)</h3>
            <div className="bg-muted rounded p-4 text-sm mb-4">
              <code>{`// src/app/layout.tsx
import { AuthProvider } from '@payloadkit/registry/components/auth/AuthProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
            <div className="bg-green-50 dark:bg-green-950/20 rounded p-4 border border-green-200 dark:border-green-800">
              <p className="text-green-800 dark:text-green-200 text-sm">
                ✅ <strong>That's it!</strong> All authentication functionality is now available throughout your app.
              </p>
            </div>
          </div>
        </section>

        {/* What It Provides */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibuted">⚡ What AuthProvider Provides</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">🔗 Better Auth Client</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Pre-configured Better Auth client</div>
                <div>• Automatic server sync</div>
                <div>• Plugin integration</div>
                <div>• Type-safe API calls</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">🧭 Next.js Navigation</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• <code>useRouter</code> integration</div>
                <div>• Automatic redirects</div>
                <div>• Navigation after auth</div>
                <div>• Link component support</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">👤 Session Management</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Real-time session state</div>
                <div>• Automatic session refresh</div>
                <div>• Token management</div>
                <div>• Logout handling</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">🎣 Authentication Hooks</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• <code>useAuth()</code> hook</div>
                <div>• <code>useSession()</code> hook</div>
                <div>• Loading states</div>
                <div>• Error handling</div>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">⚙️ Configuration</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Environment Variables</h3>
            <div className="bg-muted rounded p-4 text-sm font-mono mb-4">
              <div className="text-green-600"># Required for AuthProvider</div>
              <div>NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000</div>
              <div className="mt-2 text-muted-foreground"># Used by auth-client.ts</div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded p-4 border border-yellow-200 dark:border-yellow-800">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                📝 <strong>Note:</strong> The <code>NEXT_PUBLIC_</code> prefix is required for client-side access in Next.js.
              </p>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Custom Client Configuration</h3>
            <p className="text-muted-foreground mb-4">
              Need to customize the Better Auth client? Modify the auth-client.ts file in the registry component.
            </p>
            
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// registry/components/auth/AuthProvider/auth-client.ts
import { betterAuthClient } from 'better-auth/client'

export const authClient = betterAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'http://localhost:3000',
  plugins: [
    // Add client-side plugins here
    // Must match server-side configuration
  ],
})`}</code>
            </div>
          </div>
        </section>

        {/* Using Authentication */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🎣 Using Authentication</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">useAuth Hook</h3>
              <div className="bg-muted rounded p-4 text-sm mb-4">
                <code>{`import { useAuth } from '@daveyplate/better-auth-ui'

function UserProfile() {
  const { 
    user,        // Current user object
    isLoading,   // Loading state
    signOut,     // Sign out function
    session      // Current session
  } = useAuth()

  if (isLoading) return <div>Loading...</div>
  if (!user) return <div>Please sign in</div>

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={signOut}>
        Sign out
      </button>
    </div>
  )
}`}</code>
              </div>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Protected Routes</h3>
              <div className="bg-muted rounded p-4 text-sm mb-4">
                <code>{`// components/ProtectedRoute.tsx
import { useAuth } from '@daveyplate/better-auth-ui'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function ProtectedRoute({ children }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/sign-in')
    }
  }, [user, isLoading, router])

  if (isLoading) return <div>Loading...</div>
  if (!user) return null

  return <>{children}</>
}`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Usage */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🚀 Advanced Usage</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Custom AuthProvider Wrapper</h3>
            <p className="text-muted-foreground mb-4">
              Need to add additional providers or configuration? Create a custom wrapper.
            </p>
            
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// components/providers/AllProviders.tsx
import { AuthProvider } from '@payloadkit/registry/components/auth/AuthProvider'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

export function AllProviders({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        {children}
        <Toaster position="top-right" />
      </AuthProvider>
    </ThemeProvider>
  )
}

// src/app/layout.tsx
import { AllProviders } from '@/components/providers/AllProviders'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AllProviders>
          {children}
        </AllProviders>
      </body>
    </html>
  )
}`}</code>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Server-Side Authentication</h3>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// Server components and API routes
// PayloadCMS provides server-side auth through req.user

// In PayloadCMS hooks
export const Users: CollectionConfig = {
  slug: 'users',
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        // Server-side authenticated user
        console.log('Authenticated user:', req.user)
        
        // Check permissions
        if (!req.user) {
          throw new Error('Authentication required')
        }
        
        return data
      }
    ]
  },
  access: {
    read: ({ req }) => {
      // Use PayloadCMS access control
      return req.user ? true : false
    }
  }
}`}</code>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔧 Troubleshooting</h2>
          
          <div className="space-y-4">
            <div className="rounded-lg border p-4 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ AuthProvider not working</h4>
              <div className="text-red-700 dark:text-red-300 text-sm space-y-2">
                <div><strong>Check:</strong></div>
                <div>• <code>NEXT_PUBLIC_BETTER_AUTH_URL</code> is set correctly</div>
                <div>• AuthProvider wraps your entire app in layout.tsx</div>
                <div>• Better Auth server is running</div>
                <div>• No conflicting auth providers</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Hydration errors</h4>
              <div className="text-yellow-700 dark:text-yellow-300 text-sm space-y-2">
                <div><strong>Solution:</strong></div>
                <div>• Use loading states properly: <code>if (isLoading) return &lt;Loading /&gt;</code></div>
                <div>• Don't render user data until <code>!isLoading</code></div>
                <div>• Use <code>suppressHydrationWarning</code> on html tag if needed</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Session not persisting</h4>
              <div className="text-blue-700 dark:text-blue-300 text-sm space-y-2">
                <div><strong>Check:</strong></div>
                <div>• Cookies are enabled in browser</div>
                <div>• Same domain for client and server</div>
                <div>• HTTPS in production</div>
                <div>• Session configuration in Better Auth server</div>
              </div>
            </div>
          </div>
        </section>

        {/* Registry Info */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">📦 Registry Information</h2>
          
          <div className="rounded-lg border p-6 bg-muted/50">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Component Details</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div><strong>Name:</strong> AuthProvider</div>
                  <div><strong>Version:</strong> 0.1.0</div>
                  <div><strong>Type:</strong> Component</div>
                  <div><strong>Category:</strong> Authentication</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dependencies</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• @daveyplate/better-auth-ui</div>
                  <div>• better-auth</div>
                  <div>• next</div>
                  <div>• react</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-background rounded border">
              <h4 className="font-semibold mb-2">Registry Path</h4>
              <code className="text-sm">@payloadkit/registry/components/auth/AuthProvider</code>
            </div>
          </div>
        </section>

        {/* Related Components */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔗 Related Components</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">📄 AuthView</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Pre-built authentication pages using Better Auth UI
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                @payloadkit/registry/components/auth/AuthView
              </code>
            </div>
            
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">🔐 SecurityDashboard</h4>
              <p className="text-sm text-muted-foreground mb-2">
                User security settings and 2FA management
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                @payloadkit/registry/components/auth/SecurityDashboard
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}