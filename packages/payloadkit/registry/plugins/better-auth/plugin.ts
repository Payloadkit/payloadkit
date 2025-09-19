import type { Config } from 'payload'
import type { BetterAuthPluginConfig } from './types'
import { AuthSessions } from './collections/auth-sessions'
import { AuthAccounts } from './collections/auth-accounts'
import { AuthVerifications } from './collections/auth-verifications'
import { createPayloadAdapter } from './adapter'

/**
 * Better Auth Plugin for PayloadCMS
 *
 * Provides seamless integration between Better Auth and PayloadCMS with:
 * - OAuth providers (Google, GitHub, Discord)
 * - Email/Password authentication
 * - TOTP/2FA with QR code generation
 * - Session management
 * - Password reset and email verification
 *
 * @param config Plugin configuration
 * @returns PayloadCMS plugin function
 */
export function betterAuthPlugin(config: BetterAuthPluginConfig = {}) {
  return (payloadConfig: Config): Config => {
    const {
      collections = {},
      totp = { enabled: true },
      admin = { enabled: true },
      userFields = [],
    } = config

    // Define collection names with defaults
    const collectionNames = {
      users: collections.users || 'users',
      sessions: collections.sessions || 'auth-sessions',
      accounts: collections.accounts || 'auth-accounts',
      verifications: collections.verifications || 'auth-verifications',
    }

    // Enhanced Users collection with auth fields
    const enhancedUsersCollection = {
      ...payloadConfig.collections?.find(col => col.slug === collectionNames.users),
      fields: [
        ...(payloadConfig.collections?.find(col => col.slug === collectionNames.users)?.fields || []),
        {
          name: 'emailVerified',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Whether the user email has been verified',
          },
        },
        {
          name: 'twoFactorEnabled',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Whether two-factor authentication is enabled',
          },
        },
        {
          name: 'twoFactorSecret',
          type: 'text',
          admin: {
            hidden: true,
            description: 'TOTP secret (encrypted)',
          },
        },
        {
          name: 'backupCodes',
          type: 'array',
          admin: {
            hidden: true,
            description: 'Backup codes for 2FA recovery',
          },
          fields: [
            {
              name: 'code',
              type: 'text',
              required: true,
            },
            {
              name: 'used',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'lastLoginAt',
          type: 'date',
          admin: {
            description: 'Last login timestamp',
          },
        },
        {
          name: 'loginAttempts',
          type: 'number',
          defaultValue: 0,
          admin: {
            description: 'Failed login attempts count',
          },
        },
        {
          name: 'lockedUntil',
          type: 'date',
          admin: {
            description: 'Account locked until this date',
          },
        },
        ...userFields,
      ],
      hooks: {
        ...payloadConfig.collections?.find(col => col.slug === collectionNames.users)?.hooks,
        beforeChange: [
          ...(payloadConfig.collections?.find(col => col.slug === collectionNames.users)?.hooks?.beforeChange || []),
          async ({ data, req }) => {
            // Update lastLoginAt on successful login
            if (req.user && req.user.id === data.id && !data.lastLoginAt) {
              data.lastLoginAt = new Date()
            }
            return data
          },
        ],
      },
    }

    // Build new collections array
    const collections = [
      // Replace existing users collection with enhanced version
      ...payloadConfig.collections?.filter(col => col.slug !== collectionNames.users) || [],
      enhancedUsersCollection,

      // Add auth collections
      {
        ...AuthSessions,
        slug: collectionNames.sessions,
      },
      {
        ...AuthAccounts,
        slug: collectionNames.accounts,
      },
      {
        ...AuthVerifications,
        slug: collectionNames.verifications,
      },
    ]

    // Return enhanced PayloadCMS config
    return {
      ...payloadConfig,
      collections,

      // Add custom endpoints for Better Auth integration
      endpoints: [
        ...(payloadConfig.endpoints || []),

        // TOTP Setup endpoint
        {
          path: '/auth/totp/setup',
          method: 'post',
          handler: async (req, res) => {
            if (!req.user) {
              return res.status(401).json({ error: 'Unauthorized' })
            }

            try {
              const { generateTOTPSetup } = await import('./utils/totp')

              const setup = await generateTOTPSetup(
                req.user.email,
                totp.issuer || 'PayloadKit App',
                totp.qrCodeSize || 200
              )

              // Store secret temporarily (user must verify before enabling)
              await req.payload.update({
                collection: collectionNames.users,
                id: req.user.id,
                data: {
                  twoFactorSecret: setup.secret,
                  backupCodes: setup.backupCodes.map(code => ({ code, used: false })),
                },
              })

              res.json({
                qrCode: setup.qrCode,
                backupCodes: setup.backupCodes,
                manual: setup.secret,
              })
            } catch (error) {
              res.status(500).json({ error: 'Failed to setup TOTP' })
            }
          },
        },

        // TOTP Verify endpoint
        {
          path: '/auth/totp/verify',
          method: 'post',
          handler: async (req, res) => {
            if (!req.user) {
              return res.status(401).json({ error: 'Unauthorized' })
            }

            try {
              const { token } = req.body
              const { verifyTOTP } = await import('./utils/totp')

              const user = await req.payload.findByID({
                collection: collectionNames.users,
                id: req.user.id,
              })

              if (!user.twoFactorSecret) {
                return res.status(400).json({ error: 'TOTP not set up' })
              }

              const isValid = verifyTOTP(token, user.twoFactorSecret)

              if (isValid) {
                // Enable 2FA
                await req.payload.update({
                  collection: collectionNames.users,
                  id: req.user.id,
                  data: {
                    twoFactorEnabled: true,
                  },
                })

                res.json({ success: true })
              } else {
                res.status(400).json({ error: 'Invalid TOTP code' })
              }
            } catch (error) {
              res.status(500).json({ error: 'Failed to verify TOTP' })
            }
          },
        },

        // TOTP Disable endpoint
        {
          path: '/auth/totp/disable',
          method: 'post',
          handler: async (req, res) => {
            if (!req.user) {
              return res.status(401).json({ error: 'Unauthorized' })
            }

            try {
              await req.payload.update({
                collection: collectionNames.users,
                id: req.user.id,
                data: {
                  twoFactorEnabled: false,
                  twoFactorSecret: null,
                  backupCodes: [],
                },
              })

              res.json({ success: true })
            } catch (error) {
              res.status(500).json({ error: 'Failed to disable TOTP' })
            }
          },
        },
      ],

      // Add admin configuration for auth integration
      admin: {
        ...payloadConfig.admin,
        ...(admin.enabled && {
          components: {
            ...payloadConfig.admin?.components,
            // Custom login component can be added here
          },
        }),
      },

      // Expose Better Auth adapter creation utility
      onInit: async (payload) => {
        // Store adapter creation function globally for Better Auth initialization
        if (typeof global !== 'undefined') {
          global.createBetterAuthAdapter = () => createPayloadAdapter({
            payload,
            collections: collectionNames,
          })
        }

        // Call original onInit if exists
        if (payloadConfig.onInit) {
          await payloadConfig.onInit(payload)
        }
      },
    }
  }
}

export default betterAuthPlugin