import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, UserCheck, Shield, Loader2 } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { ComponentPreview } from '@/components/component-preview'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { ApiReference } from '@/components/api-reference'
import { PageTags } from '@/components/page-tags'

export const metadata: Metadata = {
  title: 'AuthProvider Component - PayloadKit',
  description: 'Global authentication context provider using Better Auth UI for Next.js applications.',
}

// Demo components for AuthProvider
function AuthProviderDemo() {
  return (
    <div className="space-y-4 w-full max-w-md mx-auto p-6 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
          <UserCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="font-semibold text-lg mb-2">AuthProvider Active</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Authentication context available throughout your app
        </p>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span>Better Auth client configured</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span>Session management active</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span>Authentication hooks available</span>
        </div>
      </div>
    </div>
  )
}

function LoadingStateDemo() {
  return (
    <div className="space-y-4 w-full max-w-md mx-auto p-6 border rounded-lg">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
        <h3 className="font-semibold text-lg mb-2">Loading State</h3>
        <p className="text-sm text-muted-foreground">
          Authentication status being determined
        </p>
      </div>
      <div className="bg-muted/50 p-3 rounded text-sm font-mono">
        <span className="text-muted-foreground">const</span> {`{ isLoading } = useAuth()`}<br/>
        <span className="text-muted-foreground">if</span> (isLoading) <span className="text-muted-foreground">return</span> <span className="text-green-600">&lt;Loading /&gt;</span>
      </div>
    </div>
  )
}

function ProtectedRouteDemo() {
  return (
    <div className="space-y-4 w-full max-w-md mx-auto p-6 border rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 mb-4">
          <Shield className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 className="font-semibold text-lg mb-2">Protected Route</h3>
        <p className="text-sm text-muted-foreground">
          Route protection with automatic redirects
        </p>
      </div>
      <div className="space-y-2 text-xs">
        <div className="bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded">
          ✅ User authenticated → Allow access
        </div>
        <div className="bg-red-100 dark:bg-red-900/30 px-3 py-2 rounded">
          ❌ No user → Redirect to /auth/sign-in
        </div>
      </div>
    </div>
  )
}

const componentCode = `// AuthProvider.tsx - Global authentication context
'use client'

import { AuthProvider as BetterAuthProvider } from '@daveyplate/better-auth-ui'
import { authClient } from './auth-client'

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <BetterAuthProvider
      client={authClient}
      // Configuration options
      options={{
        autoRedirect: true,
        redirectTo: '/dashboard',
        loginRedirectTo: '/auth/sign-in',
        // Enable loading states
        suspense: true,
      }}
    >
      {children}
    </BetterAuthProvider>
  )
}

// Export authentication hooks for convenience
export { useAuth, useSession } from '@daveyplate/better-auth-ui'`

const configCode = `// auth-client.ts - Better Auth client configuration
import { betterAuthClient } from 'better-auth/client'

export const authClient = betterAuthClient({
  // Base URL for authentication endpoints
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'http://localhost:3000',

  // Client-side plugins (must match server configuration)
  plugins: [
    // Add client plugins here
    // Example: twoFactorClient(), oauthClient(), etc.
  ],

  // Additional configuration
  session: {
    cookieName: 'better-auth.session',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
})

export default authClient`

const usageCode = `// app/layout.tsx - Root layout integration
import { AuthProvider } from '@/components/auth/AuthProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

// components/UserProfile.tsx - Using authentication
import { useAuth } from '@/components/auth/AuthProvider'

export function UserProfile() {
  const { user, isLoading, signOut } = useAuth()

  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>
  }

  if (!user) {
    return <div>Please sign in to continue</div>
  }

  return (
    <div className="space-y-4">
      <h2>Welcome, {user.name}!</h2>
      <p className="text-muted-foreground">Email: {user.email}</p>
      <button
        onClick={signOut}
        className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md"
      >
        Sign Out
      </button>
    </div>
  )
}`

export default function AuthProviderPage() {
  const steps = [
    {
      title: 'Install AuthProvider',
      keyword: 'Install',
      description: 'Add the authentication provider to your project',
      content: (
        <Snippet command="payloadkit add auth-provider">
          Install AuthProvider component with Better Auth UI integration. This includes the provider and authentication client configuration.
        </Snippet>
      )
    },
    {
      title: 'Configure Environment',
      keyword: 'Environment',
      description: 'Set up required environment variables',
      content: (
        <CodeBlock
          code={`# .env.local
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Required for Better Auth server
BETTER_AUTH_SECRET=your-secret-key
DATABASE_URL=your-database-url`}
          language="bash"
        />
      )
    },
    {
      title: 'Wrap Application',
      keyword: 'Integration',
      description: 'Add AuthProvider to your root layout',
      content: (
        <CodeBlock
          code={`import { AuthProvider } from '@/components/auth/AuthProvider'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}`}
          language="tsx"
        />
      )
    },
    {
      title: 'Use Authentication',
      keyword: 'Usage',
      description: 'Start using authentication in your components',
      content: (
        <CodeBlock
          code={`import { useAuth } from '@/components/auth/AuthProvider'

function MyComponent() {
  const { user, isLoading } = useAuth()

  if (isLoading) return <div>Loading...</div>

  return user ? (
    <div>Welcome {user.name}!</div>
  ) : (
    <div>Please sign in</div>
  )
}`}
          language="tsx"
        />
      )
    }
  ]

  const apiProps = [
    {
      name: 'children',
      type: 'React.ReactNode',
      description: 'The application components to wrap with authentication context',
      required: true
    },
    {
      name: 'client',
      type: 'BetterAuthClient',
      description: 'Better Auth client instance (automatically configured)',
      required: false,
      defaultValue: 'authClient'
    },
    {
      name: 'options',
      type: 'AuthProviderOptions',
      description: 'Configuration options for the authentication provider',
      required: false
    }
  ]

  const hookProps = [
    {
      name: 'user',
      type: 'User | null',
      description: 'Current authenticated user object, null if not signed in'
    },
    {
      name: 'isLoading',
      type: 'boolean',
      description: 'Boolean indicating if authentication state is being determined'
    },
    {
      name: 'session',
      type: 'Session | null',
      description: 'Current user session with tokens and metadata'
    },
    {
      name: 'signOut',
      type: '() => Promise<void>',
      description: 'Function to sign out the current user'
    },
    {
      name: 'refresh',
      type: '() => Promise<void>',
      description: 'Function to refresh the current session'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs/components">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Components
          </Link>
        </Button>
      </div>

      {/* Page Description */}
      <PageDescription
        title="AuthProvider"
        description="Global authentication context provider using Better Auth UI for Next.js applications."
        category="components"
        version="0.1.0"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="3 minutes"
        lastUpdated="January 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="AuthProvider States"
        description="Interactive demonstration of different authentication states and functionality"
        variants={[
          {
            name: 'Active Provider',
            description: 'AuthProvider successfully configured and active',
            component: <AuthProviderDemo />
          },
          {
            name: 'Loading State',
            description: 'Authentication status being determined',
            component: <LoadingStateDemo />
          },
          {
            name: 'Protected Route',
            description: 'Route protection with automatic redirects',
            component: <ProtectedRouteDemo />
          }
        ]}
        code={{
          component: componentCode,
          config: configCode,
          usage: usageCode
        }}
        responsive
        interactive
      />

      {/* Tutorial Steps */}
      <TutorialSteps
        title="Installation & Setup"
        steps={steps}
        allowSkip
      />

      {/* API Reference */}
      <ApiReference
        title="AuthProvider Props"
        description="Configuration options for the AuthProvider component"
        props={apiProps}
      />

      {/* Hook API */}
      <ApiReference
        title="useAuth Hook"
        description="Authentication hook provided by AuthProvider for accessing user state"
        props={hookProps}
      />

      {/* Type Definitions */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Type Definitions</div>
        <CodeBlock
          code={`interface User {
  id: string
  email: string
  name?: string
  image?: string
  emailVerified: boolean
  twoFactorEnabled: boolean
  role?: string
  createdAt: Date
  updatedAt: Date
}

interface Session {
  id: string
  userId: string
  expiresAt: Date
  token: string
  ipAddress?: string
  userAgent?: string
}

interface AuthProviderOptions {
  autoRedirect?: boolean
  redirectTo?: string
  loginRedirectTo?: string
  suspense?: boolean
  onSignIn?: (user: User) => void
  onSignOut?: () => void
  onError?: (error: Error) => void
}`}
          language="typescript"
        />
      </div>

      {/* Tags */}
      <PageTags
        category="components"
        dependencies={['@daveyplate/better-auth-ui', 'better-auth', 'next', 'react']}
        tags={['authentication', 'context', 'provider', 'better-auth', 'session-management', 'hooks']}
      />
    </div>
  )
}