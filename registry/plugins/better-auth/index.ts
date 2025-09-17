/**
 * @payloadkit/better-auth - Better Auth integration plugin for PayloadCMS
 *
 * A comprehensive authentication plugin that integrates Better Auth with PayloadCMS,
 * providing OAuth providers, email/password auth, TOTP/2FA, and session management.
 *
 * Features:
 * - OAuth providers (Google, GitHub, Discord)
 * - Email/Password authentication with verification
 * - TOTP/2FA with QR code generation
 * - Session management with device tracking
 * - Password reset and email verification
 * - Admin panel integration
 * - Standalone usage support
 *
 * @version 0.1.0
 * @author PayloadKit
 * @license MIT
 */

// Main plugin export
export { betterAuthPlugin as default, betterAuthPlugin } from './plugin'

// Type exports
export type {
  BetterAuthPluginConfig,
  BetterAuthPlugin,
  AuthUser,
  AuthSession,
  AuthAccount,
  AuthVerification,
  TOTPSetup,
  PluginOptions,
} from './types'

// Collection exports
export {
  AuthSessions,
  AuthAccounts,
  AuthVerifications,
} from './collections'

// Utility exports
export {
  generateTOTPSetup,
  verifyTOTP,
  isValidBackupCode,
  generateBackupCodes,
  createPayloadAdapter,
  type TOTPSetupResult,
  type PayloadAdapterConfig,
} from './utils'

// Adapter export
export { createPayloadAdapter } from './adapter'

/**
 * Quick setup example:
 *
 * ```typescript
 * import { betterAuthPlugin } from '@payloadkit/better-auth'
 *
 * export default buildConfig({
 *   plugins: [
 *     betterAuthPlugin({
 *       providers: {
 *         google: {
 *           clientId: process.env.GOOGLE_CLIENT_ID!,
 *           clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
 *         },
 *       },
 *       totp: {
 *         enabled: true,
 *         issuer: 'My App',
 *       },
 *     }),
 *   ],
 *   // ... rest of config
 * })
 * ```
 */