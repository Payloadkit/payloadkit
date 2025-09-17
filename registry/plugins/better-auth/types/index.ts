import type { Config } from 'payload'
import type { BetterAuthOptions } from 'better-auth'
import type { PayloadAdapter } from '@better-auth/adapter-payload'

export interface BetterAuthPluginConfig {
  /**
   * Better Auth configuration options
   */
  betterAuth?: Partial<BetterAuthOptions>

  /**
   * Custom collection names for auth-related collections
   */
  collections?: {
    users?: string
    sessions?: string
    accounts?: string
    verifications?: string
  }

  /**
   * TOTP/2FA configuration
   */
  totp?: {
    enabled?: boolean
    issuer?: string
    qrCodeSize?: number
  }

  /**
   * OAuth providers configuration
   */
  providers?: {
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
  }

  /**
   * Admin panel integration settings
   */
  admin?: {
    enabled?: boolean
    authPath?: string
    loginPath?: string
  }

  /**
   * Custom user fields to add to the Users collection
   */
  userFields?: any[]

  /**
   * Custom hooks for auth events
   */
  hooks?: {
    beforeLogin?: (args: any) => Promise<any> | any
    afterLogin?: (args: any) => Promise<any> | any
    beforeRegister?: (args: any) => Promise<any> | any
    afterRegister?: (args: any) => Promise<any> | any
  }
}

export interface BetterAuthPlugin {
  (config?: BetterAuthPluginConfig): (payloadConfig: Config) => Config
}

export interface AuthUser {
  id: string
  email: string
  name?: string
  image?: string
  emailVerified?: boolean
  createdAt: Date
  updatedAt: Date
  twoFactorEnabled?: boolean
}

export interface AuthSession {
  id: string
  userId: string
  expiresAt: Date
  token: string
  ipAddress?: string
  userAgent?: string
}

export interface AuthAccount {
  id: string
  userId: string
  accountId: string
  providerId: string
  accessToken?: string
  refreshToken?: string
  expiresAt?: Date
}

export interface AuthVerification {
  id: string
  identifier: string
  value: string
  expiresAt: Date
  type: 'email-verification' | 'password-reset' | 'totp-setup'
}

export interface TOTPSetup {
  secret: string
  qrCode: string
  backupCodes: string[]
}

export interface PluginOptions extends BetterAuthPluginConfig {}