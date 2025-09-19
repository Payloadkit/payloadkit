import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Eye, User, Lock, Mail, Shield } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { ComponentPreview } from '@/components/component-preview'
import { Snippet } from '@/components/snippet'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { ApiReference } from '@/components/api-reference'
import { PageTags } from '@/components/page-tags'

export const metadata: Metadata = {
  title: 'AuthView Component - PayloadKit',
  description: 'Pre-built authentication pages using Better Auth UI with PayloadKit branding and shadcn/ui styling.',
}

// Demo components for AuthView
function SignInViewDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-6 border rounded-lg bg-gradient-to-b from-background to-muted/50">
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <User className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Sign In</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Enter your credentials to access your account
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
              <span className="text-sm text-muted-foreground">user@example.com</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
              <span className="text-sm text-muted-foreground">••••••••</span>
            </div>
          </div>

          <Button className="w-full">Sign In</Button>

          <div className="text-center">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function SignUpViewDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-6 border rounded-lg bg-gradient-to-b from-background to-green-50 dark:to-green-950/20">
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
            <User className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-semibold">Create Account</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Join us today and get started
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
              <span className="text-sm text-muted-foreground">John Doe</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
              <span className="text-sm text-muted-foreground">john@example.com</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
              <span className="text-sm text-muted-foreground">••••••••</span>
            </div>
          </div>

          <Button className="w-full">Create Account</Button>

          <div className="text-center">
            <span className="text-sm text-muted-foreground">
              Already have an account? <a href="#" className="text-primary hover:underline">Sign in</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function PasswordResetDemo() {
  return (
    <div className="w-full max-w-sm mx-auto p-6 border rounded-lg bg-gradient-to-b from-background to-amber-50 dark:to-amber-950/20">
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 mb-4">
            <Mail className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <h2 className="text-2xl font-semibold">Reset Password</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Enter your email to receive reset instructions
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
              <span className="text-sm text-muted-foreground">user@example.com</span>
            </div>
          </div>

          <Button className="w-full">Send Reset Link</Button>

          <div className="text-center">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Back to sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const componentCode = `// AuthView.tsx - Pre-built authentication pages
'use client'

import { AuthView as BetterAuthView } from '@daveyplate/better-auth-ui'
import { cn } from '@/lib/utils'

interface AuthViewProps {
  pathname?: string
  view?: string
  className?: string
  showPoweredBy?: boolean
}

export function AuthView({
  pathname,
  view,
  className,
  showPoweredBy = true
}: AuthViewProps) {
  return (
    <div className={cn(
      'min-h-screen flex items-center justify-center p-4',
      'bg-gradient-to-br from-background to-muted/50',
      className
    )}>
      <div className="w-full max-w-md">
        <BetterAuthView
          pathname={pathname}
          view={view}
          // PayloadKit theming
          theme={{
            colorScheme: 'auto',
            radius: 'md',
            primaryColor: 'hsl(var(--primary))'
          }}
        />

        {showPoweredBy && (
          <div className="text-center mt-8 text-xs text-muted-foreground">
            Secured by PayloadKit powered by{' '}
            <a
              href="https://better-auth.com"
              className="font-medium hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Better Auth
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default AuthView`

const configCode = `// [...authView]/page.tsx - Dynamic catch-all route
import { AuthView } from '@/components/auth/AuthView'

interface AuthPageProps {
  params: {
    authView: string[]
  }
}

export default function AuthPage({ params }: AuthPageProps) {
  const pathname = params.authView?.join('/') || 'sign-in'

  return <AuthView pathname={pathname} />
}

// Generate static params for common auth pages
export async function generateStaticParams() {
  return [
    { authView: ['sign-in'] },
    { authView: ['sign-up'] },
    { authView: ['reset-password'] },
    { authView: ['verify-email'] },
    { authView: ['callback'] },
    { authView: ['sign-out'] }
  ]
}`

const usageCode = `// Direct usage in any page
import { AuthView } from '@/components/auth/AuthView'

// Sign-in page
export default function SignInPage() {
  return <AuthView pathname="sign-in" />
}

// Custom styled auth page
export default function CustomAuthPage() {
  return (
    <AuthView
      pathname="sign-up"
      className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600"
      showPoweredBy={false}
    />
  )
}

// Embedded in modal or component
function AuthModal({ isOpen, view, onClose }: AuthModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-md">
        <AuthView
          view={view}
          className="p-0 bg-transparent"
          showPoweredBy={false}
        />
        <button onClick={onClose} className="mt-4 text-sm text-muted-foreground">
          Close
        </button>
      </div>
    </div>
  )
}`

export default function AuthViewPage() {
  const steps = [
    {
      title: 'Install AuthView',
      keyword: 'Install',
      description: 'Add the pre-built authentication pages to your project',
      content: (
        <Snippet command="bunx payloadkit@latest add AuthView">
          Install AuthView component with Better Auth UI integration. Includes all authentication pages and styling.
        </Snippet>
      )
    },
    {
      title: 'Create Catch-All Route',
      keyword: 'Route Setup',
      description: 'Set up dynamic routing for all auth pages',
      content: (
        <CodeBlock
          code={`// app/auth/[...authView]/page.tsx
import { AuthView } from '@/components/auth/AuthView'

export default function AuthPage({ params }) {
  const pathname = params.authView?.join('/') || 'sign-in'
  return <AuthView pathname={pathname} />
}`}
          language="tsx"
        />
      )
    },
    {
      title: 'Configure Better Auth Server',
      keyword: 'Server Setup',
      description: 'Ensure your Better Auth server is configured',
      content: (
        <CodeBlock
          code={`// lib/auth.ts - Better Auth server configuration
import { betterAuth } from 'better-auth'

export const auth = betterAuth({
  database: {
    provider: "postgres", // or your database
    url: process.env.DATABASE_URL
  },
  plugins: [
    // Add server plugins here
  ]
})

// Export the handler for API routes
export const { handler } = auth`}
          language="typescript"
        />
      )
    },
    {
      title: 'Test Authentication Pages',
      keyword: 'Testing',
      description: 'Visit your authentication pages to test the setup',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Available authentication pages:</p>
          <ul className="text-sm space-y-2">
            <li>• <code>/auth/sign-in</code> - User login</li>
            <li>• <code>/auth/sign-up</code> - Account registration</li>
            <li>• <code>/auth/reset-password</code> - Password reset</li>
            <li>• <code>/auth/verify-email</code> - Email verification</li>
            <li>• <code>/auth/callback</code> - OAuth callback</li>
          </ul>
        </div>
      )
    }
  ]

  const apiProps = [
    {
      name: 'pathname',
      type: 'string',
      description: 'The authentication view to render (e.g., "sign-in", "sign-up", "reset-password")',
      required: false,
      example: 'pathname="sign-in"'
    },
    {
      name: 'view',
      type: 'string',
      description: 'Direct view specification, takes precedence over pathname',
      required: false,
      example: 'view="SIGN_UP"'
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes for the container element',
      required: false,
      example: 'className="min-h-screen bg-blue-50"'
    },
    {
      name: 'showPoweredBy',
      type: 'boolean',
      description: 'Show/hide the "Powered by" footer',
      required: false,
      defaultValue: 'true'
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
        title="AuthView"
        description="Pre-built authentication pages using Better Auth UI with PayloadKit branding and shadcn/ui styling."
        category="components"
        version="0.4.3"
        payloadVersion="3.0+"
        difficulty="beginner"
        estimatedTime="5 minutes"
        lastUpdated="September 2025"
      />

      {/* Component Preview */}
      <ComponentPreview
        name="Authentication Pages"
        description="Ready-to-use authentication pages with beautiful styling and complete functionality"
        variants={[
          {
            name: 'Sign In',
            description: 'User login page with email and password fields',
            component: <SignInViewDemo />
          },
          {
            name: 'Sign Up',
            description: 'Account registration with form validation',
            component: <SignUpViewDemo />
          },
          {
            name: 'Password Reset',
            description: 'Password reset request with email input',
            component: <PasswordResetDemo />
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
        title="AuthView Props"
        description="Configuration options for the AuthView component"
        props={apiProps}
      />

      {/* Available Views */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">Available Authentication Views</div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Core Pages</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• <code>sign-in</code> - User login</li>
              <li>• <code>sign-up</code> - Account registration</li>
              <li>• <code>sign-out</code> - User logout</li>
              <li>• <code>reset-password</code> - Password reset request</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Verification & Security</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• <code>verify-email</code> - Email verification</li>
              <li>• <code>two-factor</code> - 2FA setup/verification</li>
              <li>• <code>callback</code> - OAuth callback handling</li>
              <li>• <code>error</code> - Error page</li>
            </ul>
          </div>
        </div>
      </div>

      {/* OAuth Integration */}
      <div className="space-y-4">
        <div className="text-lg font-semibold">OAuth Integration</div>
        <CodeBlock
          code={`# Add OAuth providers to your environment
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

DISCORD_CLIENT_ID=your-discord-client-id
DISCORD_CLIENT_SECRET=your-discord-client-secret

# OAuth buttons appear automatically in AuthView!`}
          language="bash"
          title="Environment Configuration"
        />
      </div>

      {/* Tags */}
      <PageTags
        category="components"
        dependencies={['@daveyplate/better-auth-ui', 'better-auth', 'react', 'clsx', 'tailwind-merge']}
        tags={['authentication', 'auth-pages', 'better-auth', 'oauth', '2fa', 'login', 'signup', 'forms']}
      />
    </div>
  )
}