import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createPayloadAdapter } from '../adapter'
import type { Payload } from 'payload'
import type { AuthUser, AuthSession, AuthAccount, AuthVerification } from '../types'

// Mock Payload instance
const createMockPayload = (): Payload => ({
  create: vi.fn(),
  find: vi.fn(),
  findByID: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
} as any)

describe('createPayloadAdapter', () => {
  let mockPayload: Payload
  let adapter: ReturnType<typeof createPayloadAdapter>

  beforeEach(() => {
    mockPayload = createMockPayload()
    adapter = createPayloadAdapter({ payload: mockPayload })
  })

  describe('user operations', () => {
    const testUser: Omit<AuthUser, 'id' | 'createdAt' | 'updatedAt'> = {
      email: 'test@example.com',
      name: 'Test User',
      emailVerified: false,
    }

    it('should create a user', async () => {
      const createdUser = { id: '1', ...testUser, createdAt: new Date(), updatedAt: new Date() }
      vi.mocked(mockPayload.create).mockResolvedValue(createdUser)

      const result = await adapter.createUser(testUser)

      expect(mockPayload.create).toHaveBeenCalledWith({
        collection: 'users',
        data: {
          ...testUser,
          twoFactorEnabled: false,
        },
      })
      expect(result).toEqual(createdUser)
    })

    it('should get user by email', async () => {
      const existingUser = { id: '1', ...testUser, createdAt: new Date(), updatedAt: new Date() }
      vi.mocked(mockPayload.find).mockResolvedValue({ docs: [existingUser] } as any)

      const result = await adapter.getUserByEmail('test@example.com')

      expect(mockPayload.find).toHaveBeenCalledWith({
        collection: 'users',
        where: {
          email: {
            equals: 'test@example.com',
          },
        },
        limit: 1,
      })
      expect(result).toEqual(existingUser)
    })

    it('should return null when user not found by email', async () => {
      vi.mocked(mockPayload.find).mockResolvedValue({ docs: [] } as any)

      const result = await adapter.getUserByEmail('nonexistent@example.com')

      expect(result).toBeNull()
    })

    it('should get user by ID', async () => {
      const existingUser = { id: '1', ...testUser, createdAt: new Date(), updatedAt: new Date() }
      vi.mocked(mockPayload.findByID).mockResolvedValue(existingUser)

      const result = await adapter.getUserById('1')

      expect(mockPayload.findByID).toHaveBeenCalledWith({
        collection: 'users',
        id: '1',
      })
      expect(result).toEqual(existingUser)
    })

    it('should update a user', async () => {
      const updatedUser = { id: '1', ...testUser, name: 'Updated Name', createdAt: new Date(), updatedAt: new Date() }
      vi.mocked(mockPayload.update).mockResolvedValue(updatedUser)

      const result = await adapter.updateUser('1', { name: 'Updated Name' })

      expect(mockPayload.update).toHaveBeenCalledWith({
        collection: 'users',
        id: '1',
        data: { name: 'Updated Name' },
      })
      expect(result).toEqual(updatedUser)
    })

    it('should delete a user', async () => {
      vi.mocked(mockPayload.delete).mockResolvedValue({} as any)

      const result = await adapter.deleteUser('1')

      expect(mockPayload.delete).toHaveBeenCalledWith({
        collection: 'users',
        id: '1',
      })
      expect(result).toBe(true)
    })
  })

  describe('session operations', () => {
    const testSession: Omit<AuthSession, 'id'> = {
      userId: 'user-1',
      token: 'session-token-123',
      expiresAt: new Date(Date.now() + 86400000), // 24 hours
    }

    it('should create a session', async () => {
      const createdSession = { id: 'session-1', ...testSession }
      vi.mocked(mockPayload.create).mockResolvedValue(createdSession)

      const result = await adapter.createSession(testSession)

      expect(mockPayload.create).toHaveBeenCalledWith({
        collection: 'auth-sessions',
        data: testSession,
      })
      expect(result).toEqual(createdSession)
    })

    it('should get session by token', async () => {
      const existingSession = { id: 'session-1', ...testSession }
      vi.mocked(mockPayload.find).mockResolvedValue({ docs: [existingSession] } as any)

      const result = await adapter.getSessionByToken('session-token-123')

      expect(mockPayload.find).toHaveBeenCalledWith({
        collection: 'auth-sessions',
        where: {
          token: {
            equals: 'session-token-123',
          },
        },
        limit: 1,
      })
      expect(result).toEqual(existingSession)
    })

    it('should update a session', async () => {
      const updatedSession = { id: 'session-1', ...testSession, expiresAt: new Date() }
      vi.mocked(mockPayload.update).mockResolvedValue(updatedSession)

      const newExpiresAt = new Date()
      const result = await adapter.updateSession('session-1', { expiresAt: newExpiresAt })

      expect(mockPayload.update).toHaveBeenCalledWith({
        collection: 'auth-sessions',
        id: 'session-1',
        data: { expiresAt: newExpiresAt },
      })
      expect(result).toEqual(updatedSession)
    })

    it('should delete expired sessions', async () => {
      vi.mocked(mockPayload.delete).mockResolvedValue({ docs: [{}, {}] } as any)

      const result = await adapter.deleteExpiredSessions()

      expect(mockPayload.delete).toHaveBeenCalledWith({
        collection: 'auth-sessions',
        where: {
          expiresAt: {
            less_than: expect.any(Date),
          },
        },
      })
      expect(result).toBe(2)
    })
  })

  describe('account operations', () => {
    const testAccount: Omit<AuthAccount, 'id'> = {
      userId: 'user-1',
      accountId: 'google-123',
      providerId: 'google',
      accessToken: 'access-token-123',
    }

    it('should create an account', async () => {
      const createdAccount = { id: 'account-1', ...testAccount }
      vi.mocked(mockPayload.create).mockResolvedValue(createdAccount)

      const result = await adapter.createAccount(testAccount)

      expect(mockPayload.create).toHaveBeenCalledWith({
        collection: 'auth-accounts',
        data: testAccount,
      })
      expect(result).toEqual(createdAccount)
    })

    it('should get account by provider account ID', async () => {
      const existingAccount = { id: 'account-1', ...testAccount }
      vi.mocked(mockPayload.find).mockResolvedValue({ docs: [existingAccount] } as any)

      const result = await adapter.getAccountByProviderAccountId('google', 'google-123')

      expect(mockPayload.find).toHaveBeenCalledWith({
        collection: 'auth-accounts',
        where: {
          and: [
            {
              providerId: {
                equals: 'google',
              },
            },
            {
              accountId: {
                equals: 'google-123',
              },
            },
          ],
        },
        limit: 1,
      })
      expect(result).toEqual(existingAccount)
    })

    it('should get accounts by user ID', async () => {
      const userAccounts = [
        { id: 'account-1', ...testAccount },
        { id: 'account-2', ...testAccount, providerId: 'github' },
      ]
      vi.mocked(mockPayload.find).mockResolvedValue({ docs: userAccounts } as any)

      const result = await adapter.getAccountsByUserId('user-1')

      expect(mockPayload.find).toHaveBeenCalledWith({
        collection: 'auth-accounts',
        where: {
          userId: {
            equals: 'user-1',
          },
        },
      })
      expect(result).toEqual(userAccounts)
    })
  })

  describe('verification operations', () => {
    const testVerification: Omit<AuthVerification, 'id'> = {
      identifier: 'test@example.com',
      value: 'verification-token-123',
      type: 'email-verification',
      expiresAt: new Date(Date.now() + 3600000), // 1 hour
    }

    it('should create a verification', async () => {
      const createdVerification = { id: 'verification-1', ...testVerification }
      vi.mocked(mockPayload.create).mockResolvedValue(createdVerification)

      const result = await adapter.createVerification(testVerification)

      expect(mockPayload.create).toHaveBeenCalledWith({
        collection: 'auth-verifications',
        data: testVerification,
      })
      expect(result).toEqual(createdVerification)
    })

    it('should get verification by identifier', async () => {
      const existingVerification = { id: 'verification-1', ...testVerification }
      vi.mocked(mockPayload.find).mockResolvedValue({ docs: [existingVerification] } as any)

      const result = await adapter.getVerificationByIdentifier('test@example.com')

      expect(mockPayload.find).toHaveBeenCalledWith({
        collection: 'auth-verifications',
        where: {
          identifier: {
            equals: 'test@example.com',
          },
        },
        limit: 1,
      })
      expect(result).toEqual(existingVerification)
    })

    it('should delete expired verifications', async () => {
      vi.mocked(mockPayload.delete).mockResolvedValue({ docs: [{}] } as any)

      const result = await adapter.deleteExpiredVerifications()

      expect(mockPayload.delete).toHaveBeenCalledWith({
        collection: 'auth-verifications',
        where: {
          expiresAt: {
            less_than: expect.any(Date),
          },
        },
      })
      expect(result).toBe(1)
    })
  })

  describe('custom collection names', () => {
    it('should use custom collection names when provided', async () => {
      const customAdapter = createPayloadAdapter({
        payload: mockPayload,
        collections: {
          users: 'custom-users',
          sessions: 'custom-sessions',
          accounts: 'custom-accounts',
          verifications: 'custom-verifications',
        },
      })

      const testUser = { email: 'test@example.com', name: 'Test User', emailVerified: false }
      vi.mocked(mockPayload.create).mockResolvedValue({ id: '1', ...testUser } as any)

      await customAdapter.createUser(testUser)

      expect(mockPayload.create).toHaveBeenCalledWith({
        collection: 'custom-users',
        data: {
          ...testUser,
          twoFactorEnabled: false,
        },
      })
    })
  })

  describe('error handling', () => {
    it('should handle create errors gracefully', async () => {
      vi.mocked(mockPayload.create).mockRejectedValue(new Error('Database error'))

      await expect(adapter.createUser({
        email: 'test@example.com',
        name: 'Test User',
        emailVerified: false,
      })).rejects.toThrow('Failed to create user: Error: Database error')
    })

    it('should handle find errors gracefully', async () => {
      vi.mocked(mockPayload.find).mockRejectedValue(new Error('Database error'))

      await expect(adapter.getUserByEmail('test@example.com'))
        .rejects.toThrow('Failed to get user by email: Error: Database error')
    })

    it('should handle update errors gracefully', async () => {
      vi.mocked(mockPayload.update).mockRejectedValue(new Error('Database error'))

      await expect(adapter.updateUser('1', { name: 'Updated Name' }))
        .rejects.toThrow('Failed to update user: Error: Database error')
    })
  })
})