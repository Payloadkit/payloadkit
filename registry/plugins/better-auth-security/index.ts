import { payloadBetterAuth } from '@payload-auth/better-auth-plugin'
import { twoFactor, admin } from 'better-auth/plugins'

interface SecurityPluginOptions {
  /**
   * Two-factor authentication configuration
   */
  twoFactor?: {
    enabled?: boolean
    issuer?: string
    skipSetupForNewUsers?: boolean
  }
  
  /**
   * OAuth providers configuration
   */
  oauth?: {
    google?: {
      clientId: string
      clientSecret: string
    }
    github?: {
      clientId: string
      clientSecret: string
    }
    discord?: {
      clientId: string
      clientSecret: string
    }
    microsoft?: {
      clientId: string
      clientSecret: string
    }
    apple?: {
      clientId: string
      clientSecret: string
    }
    twitter?: {
      clientId: string
      clientSecret: string
    }
    linkedin?: {
      clientId: string
      clientSecret: string
    }
  }
  
  /**
   * Advanced authentication features
   */
  advanced?: {
    magicLinks?: {
      enabled: boolean
      expiresIn?: number
      sendMagicLink?: (params: { email: string; url: string; token: string }) => Promise<void>
    }
    webauthn?: {
      enabled: boolean
      rpName?: string
      rpID?: string
      origin?: string
    }
    username?: {
      enabled: boolean
    }
  }
  
  /**
   * Basic authentication settings
   */
  basic?: {
    emailAndPassword?: {
      enabled?: boolean
      requireEmailVerification?: boolean
      minPasswordLength?: number
      requireUppercase?: boolean
      requireNumbers?: boolean
      requireSymbols?: boolean
    }
    session?: {
      expiresIn?: number
      updateAge?: number
    }
    trustedOrigins?: string[]
  }
}

/**
 * Better Auth Security Plugin for PayloadCMS
 * 
 * Provides enterprise-grade authentication with:
 * - Two-Factor Authentication (required by default)
 * - OAuth/Social Login support
 * - Magic Links (passwordless)
 * - WebAuthn/Passkeys
 * - Strong password requirements
 * - Session management
 */
export function betterAuthSecurityPlugin(options: SecurityPluginOptions = {}) {
  // Default configuration with security-first approach
  const config = {
    // Strong email/password requirements by default
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: true,
      minPasswordLength: 12,
      requireUppercase: true,
      requireNumbers: true,
      requireSymbols: true,
      ...options.basic?.emailAndPassword,
    },
    
    // Secure session management
    session: {
      expiresIn: 60 * 60 * 24 * 7, // 7 days
      updateAge: 60 * 60 * 24,     // Refresh daily
      ...options.basic?.session,
    },
    
    // Trusted origins
    trustedOrigins: options.basic?.trustedOrigins || 
      (process.env.TRUSTED_ORIGINS?.split(',')) || 
      ['http://localhost:3000'],
    
    plugins: [
      // 2FA is ALWAYS enabled by default for security
      twoFactor({
        issuer: options.twoFactor?.issuer || process.env.TWOFA_ISSUER || 'PayloadKit App',
        skipSetupForNewUsers: options.twoFactor?.skipSetupForNewUsers ?? 
          (process.env.NODE_ENV === 'development' && process.env.SKIP_2FA_ENFORCEMENT === 'true' ? true : false),
        ...options.twoFactor,
      }),
      
      // Admin plugin for Better Auth UI
      admin({
        baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
      }),
      
      // OAuth providers (automatically enabled when credentials provided)
      ...(getEnabledOAuthProviders(options.oauth)),
      
      // Advanced features (enabled via options)
      ...(getAdvancedFeatures(options.advanced)),
    ],
  }

  return payloadBetterAuth({
    betterAuthOptions: config,
  })
}

// Helper function to get enabled OAuth providers
function getEnabledOAuthProviders(oauth: SecurityPluginOptions['oauth'] = {}) {
  const providers = []
  
  // Auto-detect from environment variables or use provided config
  const oauthConfigs = {
    google: oauth.google || (process.env.GOOGLE_CLIENT_ID ? {
      providerId: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    } : null),
    
    github: oauth.github || (process.env.GITHUB_CLIENT_ID ? {
      providerId: 'github',
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    } : null),
    
    discord: oauth.discord || (process.env.DISCORD_CLIENT_ID ? {
      providerId: 'discord',
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    } : null),
    
    microsoft: oauth.microsoft || (process.env.MICROSOFT_CLIENT_ID ? {
      providerId: 'microsoft',
      clientId: process.env.MICROSOFT_CLIENT_ID!,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
    } : null),
    
    apple: oauth.apple || (process.env.APPLE_CLIENT_ID ? {
      providerId: 'apple',
      clientId: process.env.APPLE_CLIENT_ID!,
      clientSecret: process.env.APPLE_CLIENT_SECRET!,
    } : null),
    
    twitter: oauth.twitter || (process.env.TWITTER_CLIENT_ID ? {
      providerId: 'twitter',
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    } : null),
    
    linkedin: oauth.linkedin || (process.env.LINKEDIN_CLIENT_ID ? {
      providerId: 'linkedin',
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    } : null),
  }
  
  Object.values(oauthConfigs).forEach(config => {
    if (config) providers.push(config)
  })
  
  return providers
}

// Helper function to get advanced authentication features
function getAdvancedFeatures(advanced: SecurityPluginOptions['advanced'] = {}) {
  const features = []
  
  // Magic Links
  if (advanced.magicLinks?.enabled || process.env.ENABLE_MAGIC_LINKS === 'true') {
    const { magicLink } = require('better-auth/plugins')
    features.push(magicLink({
      expiresIn: advanced.magicLinks?.expiresIn || 60 * 5, // 5 minutes
      sendMagicLink: advanced.magicLinks?.sendMagicLink || defaultSendMagicLink,
    }))
  }
  
  // WebAuthn/Passkeys
  if (advanced.webauthn?.enabled || process.env.ENABLE_WEBAUTHN === 'true') {
    const { passkey } = require('better-auth/plugins')
    features.push(passkey({
      rpName: advanced.webauthn?.rpName || process.env.WEBAUTHN_RP_NAME || 'PayloadKit App',
      rpID: advanced.webauthn?.rpID || process.env.WEBAUTHN_RP_ID || getDomainFromUrl(process.env.BETTER_AUTH_URL || 'localhost'),
      origin: advanced.webauthn?.origin || process.env.BETTER_AUTH_URL || 'http://localhost:3000',
    }))
  }
  
  // Username authentication
  if (advanced.username?.enabled || process.env.ENABLE_USERNAME_AUTH === 'true') {
    const { username } = require('better-auth/plugins')
    features.push(username())
  }
  
  return features
}

// Default magic link sender (logs in development, throws in production)
async function defaultSendMagicLink({ email, url, token }: { email: string; url: string; token: string }) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`🪄 Magic link for ${email}: ${url}`)
    return
  }
  
  throw new Error('Magic links enabled but no sendMagicLink function provided. Please configure an email service.')
}

// Helper to extract domain from URL
function getDomainFromUrl(url: string): string {
  try {
    return new URL(url).hostname
  } catch {
    return 'localhost'
  }
}

export default betterAuthSecurityPlugin