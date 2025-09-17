import { betterAuth } from 'better-auth'
import { twoFactor, bearer } from 'better-auth/plugins'
import type { BetterAuthPluginConfig } from './types'

/**
 * Creates a Better Auth instance configured for PayloadCMS integration
 * with TOTP/2FA enabled by default
 */
export function createBetterAuth(config: BetterAuthPluginConfig = {}) {
  const {
    betterAuth: betterAuthConfig = {},
    providers = {},
    totp = { enabled: true },
  } = config

  // Get PayloadCMS adapter from global (set by plugin)
  const adapter = typeof global !== 'undefined' && global.createBetterAuthAdapter
    ? global.createBetterAuthAdapter()
    : undefined

  if (!adapter) {
    throw new Error('PayloadCMS adapter not available. Make sure the Better Auth plugin is properly configured.')
  }

  return betterAuth({
    database: adapter,

    // Base URL configuration
    baseURL: process.env.BETTER_AUTH_URL || process.env.NEXTAUTH_URL || 'http://localhost:3000',

    // Secret for JWT signing
    secret: process.env.BETTER_AUTH_SECRET || process.env.NEXTAUTH_SECRET,

    // Session configuration
    session: {
      expiresIn: 60 * 60 * 24 * 7, // 7 days
      updateAge: 60 * 60 * 24, // 1 day
      cookieCache: {
        enabled: true,
        maxAge: 60 * 5, // 5 minutes
      },
    },

    // User configuration
    user: {
      additionalFields: {
        emailVerified: {
          type: 'boolean',
          defaultValue: false,
        },
        twoFactorEnabled: {
          type: 'boolean',
          defaultValue: false,
        },
      },
    },

    // Email and password provider
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: true,
      sendResetPassword: async ({ user, url }) => {
        // TODO: Implement email sending
        console.log(`Password reset URL for ${user.email}: ${url}`)
      },
      sendVerificationEmail: async ({ user, url }) => {
        // TODO: Implement email sending
        console.log(`Email verification URL for ${user.email}: ${url}`)
      },
    },

    // Social providers
    socialProviders: {
      ...(providers.google && {
        google: {
          clientId: providers.google.clientId,
          clientSecret: providers.google.clientSecret,
        },
      }),
      ...(providers.github && {
        github: {
          clientId: providers.github.clientId,
          clientSecret: providers.github.clientSecret,
        },
      }),
      ...(providers.discord && {
        discord: {
          clientId: providers.discord.clientId,
          clientSecret: providers.discord.clientSecret,
        },
      }),
    },

    // Plugins
    plugins: [
      // Bearer token support for API access
      bearer(),

      // Two-factor authentication with TOTP
      ...(totp.enabled ? [
        twoFactor({
          issuer: totp.issuer || 'PayloadKit App',
          totpOptions: {
            period: 30,
            digits: 6,
            algorithm: 'SHA256',
          },
          backupCodes: {
            enabled: true,
            length: 8,
            count: 8,
          },
        })
      ] : []),
    ],

    // Rate limiting
    rateLimit: {
      window: 60 * 1000, // 1 minute
      max: 100, // 100 requests per minute
    },

    // Advanced security
    advanced: {
      crossSubDomainCookies: {
        enabled: false,
      },
      useSecureCookies: process.env.NODE_ENV === 'production',
      generateId: () => {
        // Use crypto.randomUUID() for better security
        return crypto.randomUUID()
      },
    },

    // Custom logger
    logger: {
      level: process.env.NODE_ENV === 'development' ? 'debug' : 'warn',
      disabled: process.env.BETTER_AUTH_DISABLE_LOGS === 'true',
    },

    // Merge any additional Better Auth configuration
    ...betterAuthConfig,
  })
}

/**
 * Better Auth client instance
 * Use this in your application to handle authentication
 */
export const auth = createBetterAuth()

/**
 * Better Auth types for TypeScript
 */
export type Auth = typeof auth
export type Session = Auth['$Infer']['Session']
export type User = Auth['$Infer']['User']

/**
 * Helper function to get session in server components
 */
export async function getSession(request: Request) {
  return auth.api.getSession({ headers: request.headers })
}

/**
 * Helper function to require authentication
 */
export async function requireAuth(request: Request) {
  const session = await getSession(request)
  if (!session) {
    throw new Error('Authentication required')
  }
  return session
}