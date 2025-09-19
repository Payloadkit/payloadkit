import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { Config, Payload } from 'payload'
import { betterAuthPlugin } from '../plugin'
import { createPayloadAdapter } from '../adapter'
import type { BetterAuthPluginConfig } from '../types'

// Mock dependencies
vi.mock('../utils/totp', () => ({
  generateTOTPSetup: vi.fn().mockResolvedValue({
    secret: 'mocked-secret',
    qrCode: 'data:image/png;base64,mocked-qr',
    backupCodes: ['ABCD1234', 'EFGH5678'],
  }),
  verifyTOTP: vi.fn().mockReturnValue(true),
}))

describe('Better Auth Plugin Integration', () => {
  let mockPayload: Payload
  let baseConfig: Config

  beforeEach(() => {
    mockPayload = {
      create: vi.fn(),
      find: vi.fn(),
      findByID: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    } as any

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

    // Clear global state
    if (typeof global !== 'undefined') {
      delete (global as any).createBetterAuthAdapter
    }
  })

  describe('full plugin integration', () => {
    it('should enhance PayloadCMS config with complete auth setup', () => {
      const config: BetterAuthPluginConfig = {
        totp: { enabled: true, issuer: 'Test App' },
        providers: {
          google: {
            clientId: 'google-client-id',
            clientSecret: 'google-client-secret',
          },
        },
      }

      const plugin = betterAuthPlugin(config)
      const enhancedConfig = plugin(baseConfig)

      // Verify collections
      expect(enhancedConfig.collections).toHaveLength(4)
      const collectionSlugs = enhancedConfig.collections?.map(col => col.slug)
      expect(collectionSlugs).toEqual(['users', 'auth-sessions', 'auth-accounts', 'auth-verifications'])

      // Verify enhanced users collection
      const usersCollection = enhancedConfig.collections?.find(col => col.slug === 'users')
      const userFieldNames = usersCollection?.fields?.map(field =>
        typeof field === 'object' && 'name' in field ? field.name : null
      ).filter(Boolean)

      expect(userFieldNames).toContain('emailVerified')
      expect(userFieldNames).toContain('twoFactorEnabled')
      expect(userFieldNames).toContain('twoFactorSecret')

      // Verify endpoints
      expect(enhancedConfig.endpoints).toHaveLength(3)
      const endpointPaths = enhancedConfig.endpoints?.map(endpoint => endpoint.path)
      expect(endpointPaths).toContain('/auth/totp/setup')
      expect(endpointPaths).toContain('/auth/totp/verify')
      expect(endpointPaths).toContain('/auth/totp/disable')

      // Verify onInit
      expect(enhancedConfig.onInit).toBeDefined()
    })

    it('should handle real-world configuration scenarios', () => {
      const productionConfig: BetterAuthPluginConfig = {
        collections: {
          users: 'customers',
          sessions: 'user-sessions',
          accounts: 'oauth-accounts',
          verifications: 'email-verifications',
        },
        totp: {
          enabled: true,
          issuer: 'My Production App',
          qrCodeSize: 256,
        },
        providers: {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID || 'test-google-id',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'test-google-secret',
          },
          github: {
            clientId: process.env.GITHUB_CLIENT_ID || 'test-github-id',
            clientSecret: process.env.GITHUB_CLIENT_SECRET || 'test-github-secret',
          },
        },
        userFields: [
          { name: 'firstName', type: 'text' },
          { name: 'lastName', type: 'text' },
          { name: 'phone', type: 'text' },
        ],
        admin: {
          enabled: true,
          authPath: '/admin/auth',
        },
      }

      const customBaseConfig = {
        ...baseConfig,
        collections: [
          {
            slug: 'customers',
            fields: [
              { name: 'email', type: 'email' },
              { name: 'companyName', type: 'text' },
            ],
          },
        ],
      }

      const plugin = betterAuthPlugin(productionConfig)
      const enhancedConfig = plugin(customBaseConfig)

      // Verify custom collection names
      const collectionSlugs = enhancedConfig.collections?.map(col => col.slug)
      expect(collectionSlugs).toContain('user-sessions')
      expect(collectionSlugs).toContain('oauth-accounts')
      expect(collectionSlugs).toContain('email-verifications')

      // Verify custom user fields
      const customersCollection = enhancedConfig.collections?.find(col => col.slug === 'customers')
      const fieldNames = customersCollection?.fields?.map(field =>
        typeof field === 'object' && 'name' in field ? field.name : null
      ).filter(Boolean)

      expect(fieldNames).toContain('firstName')
      expect(fieldNames).toContain('lastName')
      expect(fieldNames).toContain('phone')
    })
  })

  describe('PayloadCMS adapter integration', () => {
    it('should create adapter after plugin initialization', async () => {
      const plugin = betterAuthPlugin()
      const enhancedConfig = plugin(baseConfig)

      // Simulate PayloadCMS initialization
      if (enhancedConfig.onInit) {
        await enhancedConfig.onInit(mockPayload)
      }

      // Verify adapter creation function is available
      expect(global.createBetterAuthAdapter).toBeDefined()

      // Test adapter creation
      const adapter = global.createBetterAuthAdapter()
      expect(adapter).toBeDefined()
      expect(typeof adapter.createUser).toBe('function')
      expect(typeof adapter.createSession).toBe('function')
    })

    it('should handle adapter operations with custom collections', async () => {
      const customConfig: BetterAuthPluginConfig = {
        collections: {
          users: 'members',
          sessions: 'login-sessions',
          accounts: 'social-accounts',
          verifications: 'tokens',
        },
      }

      const plugin = betterAuthPlugin(customConfig)
      const enhancedConfig = plugin(baseConfig)

      if (enhancedConfig.onInit) {
        await enhancedConfig.onInit(mockPayload)
      }

      const adapter = global.createBetterAuthAdapter()

      // Mock successful user creation
      const mockUser = {
        id: 'user-1',
        email: 'test@example.com',
        name: 'Test User',
        emailVerified: false,
      }
      vi.mocked(mockPayload.create).mockResolvedValue(mockUser)

      const result = await adapter.createUser({
        email: 'test@example.com',
        name: 'Test User',
        emailVerified: false,
      })

      expect(mockPayload.create).toHaveBeenCalledWith({
        collection: 'members', // Custom collection name
        data: {
          email: 'test@example.com',
          name: 'Test User',
          emailVerified: false,
          twoFactorEnabled: false,
        },
      })
      expect(result).toEqual(mockUser)
    })
  })

  describe('TOTP endpoint integration', () => {
    let enhancedConfig: Config

    beforeEach(() => {
      const plugin = betterAuthPlugin({ totp: { enabled: true } })
      enhancedConfig = plugin(baseConfig)
    })

    it('should handle TOTP setup endpoint', async () => {
      const setupEndpoint = enhancedConfig.endpoints?.find(
        endpoint => endpoint.path === '/auth/totp/setup'
      )
      expect(setupEndpoint).toBeDefined()

      // Mock request and response
      const mockReq = {
        user: { id: 'user-1', email: 'test@example.com' },
        payload: mockPayload,
      }
      const mockRes = {
        status: vi.fn().mockReturnThis(),
        json: vi.fn(),
      }

      vi.mocked(mockPayload.update).mockResolvedValue({
        id: 'user-1',
        twoFactorSecret: 'mocked-secret',
        backupCodes: [{ code: 'ABCD1234', used: false }],
      })

      if (setupEndpoint?.handler) {
        await setupEndpoint.handler(mockReq as any, mockRes as any)
      }

      expect(mockRes.json).toHaveBeenCalledWith({
        qrCode: 'data:image/png;base64,mocked-qr',
        backupCodes: ['ABCD1234', 'EFGH5678'],
        manual: 'mocked-secret',
      })
    })

    it('should handle TOTP verify endpoint', async () => {
      const verifyEndpoint = enhancedConfig.endpoints?.find(
        endpoint => endpoint.path === '/auth/totp/verify'
      )
      expect(verifyEndpoint).toBeDefined()

      const mockReq = {
        user: { id: 'user-1', email: 'test@example.com' },
        body: { token: '123456' },
        payload: mockPayload,
      }
      const mockRes = {
        status: vi.fn().mockReturnThis(),
        json: vi.fn(),
      }

      vi.mocked(mockPayload.findByID).mockResolvedValue({
        id: 'user-1',
        twoFactorSecret: 'test-secret',
      })
      vi.mocked(mockPayload.update).mockResolvedValue({
        id: 'user-1',
        twoFactorEnabled: true,
      })

      if (verifyEndpoint?.handler) {
        await verifyEndpoint.handler(mockReq as any, mockRes as any)
      }

      expect(mockRes.json).toHaveBeenCalledWith({ success: true })
      expect(mockPayload.update).toHaveBeenCalledWith({
        collection: 'users',
        id: 'user-1',
        data: { twoFactorEnabled: true },
      })
    })

    it('should handle unauthorized requests', async () => {
      const setupEndpoint = enhancedConfig.endpoints?.find(
        endpoint => endpoint.path === '/auth/totp/setup'
      )

      const mockReq = { user: null }
      const mockRes = {
        status: vi.fn().mockReturnThis(),
        json: vi.fn(),
      }

      if (setupEndpoint?.handler) {
        await setupEndpoint.handler(mockReq as any, mockRes as any)
      }

      expect(mockRes.status).toHaveBeenCalledWith(401)
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Unauthorized' })
    })
  })

  describe('compatibility and edge cases', () => {
    it('should work with existing PayloadCMS config properties', () => {
      const complexBaseConfig = {
        ...baseConfig,
        collections: [
          {
            slug: 'users',
            fields: [{ name: 'email', type: 'email' }],
            hooks: {
              beforeChange: [vi.fn()],
            },
          },
          {
            slug: 'posts',
            fields: [{ name: 'title', type: 'text' }],
          },
        ],
        endpoints: [
          {
            path: '/api/custom',
            method: 'get' as const,
            handler: vi.fn(),
          },
        ],
        admin: {
          user: 'users',
          meta: {
            titleSuffix: ' - Custom Admin',
          },
        },
      }

      const plugin = betterAuthPlugin()
      const enhancedConfig = plugin(complexBaseConfig)

      // Should preserve existing collections
      expect(enhancedConfig.collections?.find(col => col.slug === 'posts')).toBeDefined()

      // Should preserve existing endpoints
      expect(enhancedConfig.endpoints?.find(endpoint => endpoint.path === '/api/custom')).toBeDefined()

      // Should preserve existing admin config
      expect(enhancedConfig.admin?.meta?.titleSuffix).toBe(' - Custom Admin')

      // Should preserve existing hooks
      const usersCollection = enhancedConfig.collections?.find(col => col.slug === 'users')
      expect(usersCollection?.hooks?.beforeChange).toHaveLength(2) // existing + plugin hook
    })

    it('should handle minimal configuration gracefully', () => {
      const minimalConfig: Config = {
        secret: 'test-secret',
        typescript: {
          outputFile: './payload-types.ts',
        },
      }

      const plugin = betterAuthPlugin()
      expect(() => plugin(minimalConfig)).not.toThrow()

      const enhancedConfig = plugin(minimalConfig)
      expect(enhancedConfig.collections).toBeDefined()
      expect(enhancedConfig.collections).toHaveLength(4)
    })

    it('should handle disabled TOTP configuration', () => {
      const plugin = betterAuthPlugin({ totp: { enabled: false } })
      const enhancedConfig = plugin(baseConfig)

      expect(enhancedConfig.endpoints).toHaveLength(0)
    })
  })
})