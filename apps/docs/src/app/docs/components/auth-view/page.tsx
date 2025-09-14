import { Badge } from '@/components/ui/badge'

export default function AuthViewPage() {
  return (
    <div className="py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">AuthView</h1>
            <Badge variant="outline">Better Auth UI</Badge>
            <Badge variant="default">Registry Component</Badge>
          </div>
          <p className="text-xl text-muted-foreground">
            Pre-built authentication pages using Better Auth UI with PayloadKit branding and shadcn/ui styling.
          </p>
        </div>

        {/* Overview */}
        <div className="rounded-lg border p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <h2 className="text-2xl font-semibold mb-4">✨ Beautiful Auth Pages Out-of-the-Box</h2>
          <p className="text-muted-foreground mb-4">
            AuthView provides beautiful, responsive authentication pages without writing any custom components. 
            Just point to a route and get a fully functional auth page with 2FA, OAuth, and more.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-background rounded p-4">
              <h4 className="font-semibold mb-2">🎨 What's Included</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Sign-in, Sign-up, Reset password</div>
                <div>• Email verification pages</div>
                <div>• OAuth callback handling</div>
                <div>• 2FA setup and verification</div>
              </div>
            </div>
            <div className="bg-background rounded p-4">
              <h4 className="font-semibold mb-2">⚡ Features</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• shadcn/ui components</div>
                <div>• Dark/light mode support</div>
                <div>• Mobile-first responsive</div>
                <div>• PayloadKit branding</div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">📦 Installation</h2>
          <div className="rounded-lg border p-6">
            <p className="text-muted-foreground mb-4">
              AuthView is included automatically when you create a PayloadKit project with the blank template.
            </p>
            <div className="bg-muted rounded p-4 text-sm">
              <code>
                npx create-payloadkit my-app --template blank
                <br />
                <span className="text-muted-foreground"># Auth pages ready at /auth/sign-in!</span>
              </code>
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔧 Usage</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Dynamic Catch-All Route</h3>
            <p className="text-muted-foreground mb-4">
              Create a single catch-all route that handles all authentication pages automatically.
            </p>
            <div className="bg-muted rounded p-4 text-sm">
              <code>{`// src/app/auth/[...authView]/page.tsx
import { AuthView } from '@payloadkit/registry/components/auth/AuthView'

interface AuthPageProps {
  params: {
    authView: string
  }
}

export default function AuthPage({ params }: AuthPageProps) {
  const { authView } = params
  
  return <AuthView pathname={authView} />
}

// Optional: Pre-generate common auth pages
export async function generateStaticParams() {
  return [
    { authView: 'sign-in' },
    { authView: 'sign-up' },
    { authView: 'reset-password' },
    { authView: 'verify-email' },
    { authView: 'callback' },
  ]
}`}</code>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Available Pages</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <code className="text-sm bg-muted px-2 py-1 rounded">/auth/sign-in</code>
                  <Badge variant="outline" className="text-xs">Login</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-sm bg-muted px-2 py-1 rounded">/auth/sign-up</code>
                  <Badge variant="outline" className="text-xs">Register</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-sm bg-muted px-2 py-1 rounded">/auth/reset-password</code>
                  <Badge variant="outline" className="text-xs">Reset</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-sm bg-muted px-2 py-1 rounded">/auth/verify-email</code>
                  <Badge variant="outline" className="text-xs">Verify</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-sm bg-muted px-2 py-1 rounded">/auth/callback</code>
                  <Badge variant="outline" className="text-xs">OAuth</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-sm bg-muted px-2 py-1 rounded">/auth/sign-out</code>
                  <Badge variant="outline" className="text-xs">Logout</Badge>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Direct Usage</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Use AuthView directly in any page or component.
              </p>
              <div className="bg-muted rounded p-4 text-sm">
                <code>{`// Direct pathname usage
<AuthView pathname="sign-in" />

// Direct view specification  
<AuthView view="SIGN_UP" />

// With custom styling
<AuthView 
  pathname="reset-password"
  className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50"
  showPoweredBy={false}
/>`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Props */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🛠️ Props</h2>
          
          <div className="rounded-lg border overflow-hidden">
            <div className="bg-muted px-6 py-3 border-b">
              <h3 className="font-semibold">AuthView Props</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="pb-4 border-b">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded">pathname</code>
                    <Badge variant="outline" className="text-xs">string</Badge>
                    <Badge variant="outline" className="text-xs">optional</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The authentication view to render. Common values: 'sign-in', 'sign-up', 'reset-password', 'verify-email', 'callback', 'sign-out'.
                  </p>
                </div>
                
                <div className="pb-4 border-b">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded">view</code>
                    <Badge variant="outline" className="text-xs">string</Badge>
                    <Badge variant="outline" className="text-xs">optional</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Directly specify the view type. Options: 'SIGN_IN', 'SIGN_UP', 'RESET_PASSWORD', 'VERIFY_EMAIL', etc. Takes precedence over pathname.
                  </p>
                </div>
                
                <div className="pb-4 border-b">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded">className</code>
                    <Badge variant="outline" className="text-xs">string</Badge>
                    <Badge variant="outline" className="text-xs">optional</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Additional CSS classes to apply to the main container.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-sm bg-muted px-2 py-1 rounded">showPoweredBy</code>
                    <Badge variant="outline" className="text-xs">boolean</Badge>
                    <Badge variant="outline" className="text-xs">optional</Badge>
                    <Badge variant="default" className="text-xs">default: true</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Show/hide the "Secured by PayloadKit powered by Better Auth" footer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">📝 Examples</h2>
          
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Basic Sign-In Page</h3>
              <div className="bg-muted rounded p-4 text-sm mb-4">
                <code>{`// app/auth/sign-in/page.tsx
import { AuthView } from '@payloadkit/registry/components/auth/AuthView'

export default function SignInPage() {
  return <AuthView pathname="sign-in" />
}

// Features automatically included:
// • Email + password form
// • OAuth buttons (if configured)
// • "Forgot password?" link
// • 2FA verification (after login)
// • Form validation
// • Loading states`}</code>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Custom Styled Auth Page</h3>
              <div className="bg-muted rounded p-4 text-sm mb-4">
                <code>{`// Custom background and no branding
export default function CustomSignIn() {
  return (
    <AuthView 
      pathname="sign-in"
      className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
      showPoweredBy={false}
    />
  )
}

// CSS for additional customization
// globals.css
.auth-container {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
}`}</code>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Embedded Auth View</h3>
              <div className="bg-muted rounded p-4 text-sm mb-4">
                <code>{`// Embed auth in a modal or sidebar
import { AuthView } from '@payloadkit/registry/components/auth/AuthView'

function AuthModal({ isOpen, onClose }) {
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <button onClick={onClose} className="float-right">×</button>
        <AuthView 
          pathname="sign-in" 
          className="p-0" // Remove default padding
          showPoweredBy={false}
        />
      </div>
    </div>
  )
}`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🎨 Customization</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">CSS Variables</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Better Auth UI uses shadcn/ui components. Customize through CSS variables.
              </p>
              <div className="bg-muted rounded p-4 text-sm">
                <code>{`/* globals.css */
:root {
  --primary: 220 100% 50%;        /* Button color */
  --primary-foreground: 0 0% 100%; /* Button text */
  --card: 0 0% 100%;               /* Form background */
  --border: 220 13% 91%;           /* Input borders */
  --input: 220 13% 91%;            /* Input background */
  --muted: 220 14% 96%;            /* Subtle backgrounds */
}

/* Custom auth page styling */
.auth-view-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}`}</code>
              </div>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Component Overrides</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For advanced customization, copy the AuthView component and modify it.
              </p>
              <div className="bg-muted rounded p-4 text-sm">
                <code>{`// Copy from registry and customize
npx payloadkit add auth/AuthView

// Then modify:
// components/auth/CustomAuthView.tsx
import { AuthView as BetterAuthView } from '@daveyplate/better-auth-ui'

export function CustomAuthView({ pathname, ...props }) {
  return (
    <div className="custom-auth-wrapper">
      <div className="custom-logo">
        <img src="/my-logo.png" alt="My App" />
      </div>
      <BetterAuthView pathname={pathname} />
      <div className="custom-footer">
        <p>© 2024 My Company</p>
      </div>
    </div>
  )
}`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* OAuth Integration */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🌐 OAuth Integration</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Automatic OAuth Buttons</h3>
            <p className="text-muted-foreground mb-4">
              OAuth buttons appear automatically when you configure providers in your environment variables.
            </p>
            
            <div className="bg-muted rounded p-4 text-sm mb-4">
              <code>{`# .env - Add any OAuth credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

GITHUB_CLIENT_ID=your-github-client-id  
GITHUB_CLIENT_SECRET=your-github-client-secret

DISCORD_CLIENT_ID=your-discord-client-id
DISCORD_CLIENT_SECRET=your-discord-client-secret

# OAuth buttons appear automatically in AuthView!`}</code>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 rounded p-4 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">✨ Supported OAuth Providers</h4>
              <div className="text-sm text-blue-700 dark:text-blue-300 grid grid-cols-2 gap-2">
                <div>• Google</div>
                <div>• GitHub</div>
                <div>• Discord</div>
                <div>• Microsoft</div>
                <div>• Apple</div>
                <div>• Twitter/X</div>
                <div>• LinkedIn</div>
                <div>• Custom OIDC</div>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Factor Authentication */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🛡️ Two-Factor Authentication</h2>
          
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">Automatic 2FA Flow</h3>
            <p className="text-muted-foreground mb-4">
              AuthView handles the complete 2FA setup and verification flow automatically.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-950/20 rounded p-4 border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ 2FA Setup Flow</h4>
                <div className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <div>1. User signs in with email/password</div>
                  <div>2. Automatic redirect to 2FA setup</div>
                  <div>3. QR code + manual entry option</div>
                  <div>4. Verify TOTP code</div>
                  <div>5. Download backup codes</div>
                  <div>6. Complete - access granted</div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 rounded p-4 border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🔑 2FA Login Flow</h4>
                <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <div>1. User signs in with email/password</div>
                  <div>2. 2FA verification prompt</div>
                  <div>3. Enter TOTP code or backup code</div>
                  <div>4. Access granted</div>
                  <div></div>
                  <div className="text-muted-foreground">Streamlined for returning users</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🚀 Advanced Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">🔗 Magic Links</h4>
              <div className="text-sm text-muted-foreground space-y-2">
                <div>• Passwordless authentication</div>
                <div>• Email-based login links</div>
                <div>• 5-minute expiration</div>
                <div>• Enabled with <code>ENABLE_MAGIC_LINKS=true</code></div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">🔑 WebAuthn/Passkeys</h4>
              <div className="text-sm text-muted-foreground space-y-2">
                <div>• TouchID, FaceID, Windows Hello</div>
                <div>• Hardware security keys</div>
                <div>• Cross-platform sync</div>
                <div>• Enabled with <code>ENABLE_WEBAUTHN=true</code></div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">👤 Username Auth</h4>
              <div className="text-sm text-muted-foreground space-y-2">
                <div>• Username + password option</div>
                <div>• Alternative to email</div>
                <div>• Customizable validation</div>
                <div>• Enabled with <code>ENABLE_USERNAME_AUTH=true</code></div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">📧 Email Verification</h4>
              <div className="text-sm text-muted-foreground space-y-2">
                <div>• Required by default</div>
                <div>• Automatic verification flow</div>
                <div>• Resend verification option</div>
                <div>• Custom email templates</div>
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
                  <div><strong>Name:</strong> AuthView</div>
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
                  <div>• react</div>
                  <div>• clsx</div>
                  <div>• tailwind-merge</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-background rounded border">
              <h4 className="font-semibold mb-2">Registry Path</h4>
              <code className="text-sm">@payloadkit/registry/components/auth/AuthView</code>
            </div>
          </div>
        </section>

        {/* Related Components */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">🔗 Related Components</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">🔒 AuthProvider</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Global authentication context - required for AuthView
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">
                @payloadkit/registry/components/auth/AuthProvider
              </code>
            </div>
            
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold mb-2">🛡️ SecurityDashboard</h4>
              <p className="text-sm text-muted-foreground mb-2">
                User security settings and account management
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