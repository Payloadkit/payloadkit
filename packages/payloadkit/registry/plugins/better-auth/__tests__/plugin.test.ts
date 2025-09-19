import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { Config } from 'payload'
import { betterAuthPlugin } from '../plugin'
import type { BetterAuthPluginConfig } from '../types'

// Mock the collections
vi.mock('../collections/auth-sessions', () => ({
  AuthSessions: {
    slug: 'auth-sessions',
    fields: [{ name: 'userId', type: 'text' }],
  },
}))

vi.mock('../collections/auth-accounts', () => ({
  AuthAccounts: {
    slug: 'auth-accounts',
    fields: [{ name: 'providerId', type: 'text' }],
  },
}))

vi.mock('../collections/auth-verifications', () => ({
  AuthVerifications: {
    slug: 'auth-verifications',
    fields: [{ name: 'identifier', type: 'text' }],
  },
}))

describe('betterAuthPlugin', () => {
  let baseConfig: Config

  beforeEach(() => {
    baseConfig = {
      collections: [
        {
          slug: 'users',
          fields: [
            { name: 'email', type: 'email' },
            { name: 'name', type: 'text' },
          ],
        },
      ],
      admin: {
        user: 'users',
      },
      typescript: {
        outputFile: './payload-types.ts',
      },
      secret: 'test-secret',
    }
  })

  describe('basic plugin functionality', () => {
    it('should return a function when called', () => {
      const plugin = betterAuthPlugin()
      expect(typeof plugin).toBe('function')
    })

    it('should enhance the PayloadCMS config with auth collections', () => {
      const plugin = betterAuthPlugin()
      const enhancedConfig = plugin(baseConfig)

      expect(enhancedConfig.collections).toHaveLength(4) // users + 3 auth collections

      const collectionSlugs = enhancedConfig.collections?.map(col => col.slug)
      expect(collectionSlugs).toContain('auth-sessions')
      expect(collectionSlugs).toContain('auth-accounts')
      expect(collectionSlugs).toContain('auth-verifications')
    })

    it('should enhance the Users collection with auth fields', () => {
      const plugin = betterAuthPlugin()
      const enhancedConfig = plugin(baseConfig)

      const usersCollection = enhancedConfig.collections?.find(col => col.slug === 'users')
      expect(usersCollection).toBeDefined()

      const fieldNames = usersCollection?.fields?.map(field =>
        typeof field === 'object' && 'name' in field ? field.name : null
      ).filter(Boolean)

      expect(fieldNames).toContain('emailVerified')
      expect(fieldNames).toContain('twoFactorEnabled')
      expect(fieldNames).toContain('twoFactorSecret')
      expect(fieldNames).toContain('backupCodes')
      expect(fieldNames).toContain('lastLoginAt')
    })

    it('should add TOTP endpoints when TOTP is enabled', () => {
      const plugin = betterAuthPlugin({ totp: { enabled: true } })
      const enhancedConfig = plugin(baseConfig)

      expect(enhancedConfig.endpoints).toBeDefined()
      expect(enhancedConfig.endpoints).toHaveLength(3)

      const endpointPaths = enhancedConfig.endpoints?.map(endpoint => endpoint.path)
      expect(endpointPaths).toContain('/auth/totp/setup')
      expect(endpointPaths).toContain('/auth/totp/verify')
      expect(endpointPaths).toContain('/auth/totp/disable')
    })

    it('should set up onInit hook for adapter creation', () => {
      const plugin = betterAuthPlugin()
      const enhancedConfig = plugin(baseConfig)

      expect(enhancedConfig.onInit).toBeDefined()
      expect(typeof enhancedConfig.onInit).toBe('function')
    })
  })

  describe('custom configuration', () => {
    it('should use custom collection names when provided', () => {
      const customConfig: BetterAuthPluginConfig = {
        collections: {
          users: 'custom-users',
          sessions: 'custom-sessions',
          accounts: 'custom-accounts',
          verifications: 'custom-verifications',
        },
      }

      const plugin = betterAuthPlugin(customConfig)
      const enhancedConfig = plugin({
        ...baseConfig,
        collections: [
          {
            slug: 'custom-users',
            fields: [{ name: 'email', type: 'email' }],
          },
        ],
      })

      const collectionSlugs = enhancedConfig.collections?.map(col => col.slug)
      expect(collectionSlugs).toContain('custom-sessions')
      expect(collectionSlugs).toContain('custom-accounts')
      expect(collectionSlugs).toContain('custom-verifications')
    })

    it('should add custom user fields when provided', () => {
      const customFields = [
        { name: 'customField1', type: 'text' },
        { name: 'customField2', type: 'number' },
      ]

      const plugin = betterAuthPlugin({ userFields: customFields })
      const enhancedConfig = plugin(baseConfig)

      const usersCollection = enhancedConfig.collections?.find(col => col.slug === 'users')
      const fieldNames = usersCollection?.fields?.map(field =>
        typeof field === 'object' && 'name' in field ? field.name : null
      ).filter(Boolean)

      expect(fieldNames).toContain('customField1')
      expect(fieldNames).toContain('customField2')
    })

    it('should disable TOTP endpoints when TOTP is disabled', () => {
      const plugin = betterAuthPlugin({ totp: { enabled: false } })
      const enhancedConfig = plugin(baseConfig)

      expect(enhancedConfig.endpoints).toHaveLength(0)
    })

    it('should preserve existing config properties', () => {
      const configWithExistingEndpoints = {
        ...baseConfig,
        endpoints: [
          {
            path: '/existing-endpoint',
            method: 'get' as const,
            handler: () => {},
          },
        ],
      }

      const plugin = betterAuthPlugin()
      const enhancedConfig = plugin(configWithExistingEndpoints)

      expect(enhancedConfig.endpoints).toHaveLength(4) // 1 existing + 3 TOTP
      expect(enhancedConfig.endpoints?.[0].path).toBe('/existing-endpoint')
    })
  })

  describe('error handling', () => {
    it('should handle missing users collection gracefully', () => {
      const configWithoutUsers = {
        ...baseConfig,
        collections: [],
      }

      const plugin = betterAuthPlugin()
      const enhancedConfig = plugin(configWithoutUsers)

      // Should still create a users collection with auth fields
      const usersCollection = enhancedConfig.collections?.find(col => col.slug === 'users')
      expect(usersCollection).toBeDefined()
      expect(usersCollection?.fields).toBeDefined()
    })

    it('should handle undefined collections array', () => {
      const configWithoutCollections = {
        ...baseConfig,
        collections: undefined,
      }

      const plugin = betterAuthPlugin()
      expect(() => plugin(configWithoutCollections)).not.toThrow()
    })
  })

  describe('plugin integration', () => {
    it('should work with minimal configuration', () => {
      const plugin = betterAuthPlugin()
      const enhancedConfig = plugin(baseConfig)

      expect(enhancedConfig).toBeDefined()
      expect(enhancedConfig.collections).toBeDefined()
      expect(enhancedConfig.endpoints).toBeDefined()
      expect(enhancedConfig.onInit).toBeDefined()
    })

    it('should work with full configuration', () => {
      const fullConfig: BetterAuthPluginConfig = {
        totp: {
          enabled: true,
          issuer: 'Test App',
          qrCodeSize: 300,
        },
        providers: {
          google: {
            clientId: 'test-google-id',
            clientSecret: 'test-google-secret',
          },
          github: {
            clientId: 'test-github-id',
            clientSecret: 'test-github-secret',
          },
        },
        admin: {
          enabled: true,
          authPath: '/custom-auth',
        },
        userFields: [
          { name: 'profile', type: 'text' },
        ],
      }

      const plugin = betterAuthPlugin(fullConfig)
      expect(() => plugin(baseConfig)).not.toThrow()
    })
  })
})