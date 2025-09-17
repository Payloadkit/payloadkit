import type { Adapter } from '@better-auth/adapter-payload'
import type { Payload } from 'payload'
import type { AuthUser, AuthSession, AuthAccount, AuthVerification } from './types'

export interface PayloadAdapterConfig {
  payload: Payload
  collections?: {
    users?: string
    sessions?: string
    accounts?: string
    verifications?: string
  }
}

/**
 * PayloadCMS adapter for Better Auth
 * Compatible with PayloadCMS 3.55.1+ and Better Auth 1.3.4+
 */
export function createPayloadAdapter(config: PayloadAdapterConfig): Adapter {
  const { payload } = config
  const collections = {
    users: 'users',
    sessions: 'auth-sessions',
    accounts: 'auth-accounts',
    verifications: 'auth-verifications',
    ...config.collections,
  }

  return {
    async createUser(user: Omit<AuthUser, 'id' | 'createdAt' | 'updatedAt'>) {
      try {
        const result = await payload.create({
          collection: collections.users,
          data: {
            ...user,
            twoFactorEnabled: user.twoFactorEnabled ?? false,
          },
        })
        return result as AuthUser
      } catch (error) {
        throw new Error(`Failed to create user: ${error}`)
      }
    },

    async getUserByEmail(email: string) {
      try {
        const result = await payload.find({
          collection: collections.users,
          where: {
            email: {
              equals: email,
            },
          },
          limit: 1,
        })
        return result.docs[0] as AuthUser | null
      } catch (error) {
        throw new Error(`Failed to get user by email: ${error}`)
      }
    },

    async getUserById(id: string) {
      try {
        const result = await payload.findByID({
          collection: collections.users,
          id,
        })
        return result as AuthUser
      } catch (error) {
        throw new Error(`Failed to get user by ID: ${error}`)
      }
    },

    async updateUser(id: string, data: Partial<AuthUser>) {
      try {
        const result = await payload.update({
          collection: collections.users,
          id,
          data,
        })
        return result as AuthUser
      } catch (error) {
        throw new Error(`Failed to update user: ${error}`)
      }
    },

    async deleteUser(id: string) {
      try {
        await payload.delete({
          collection: collections.users,
          id,
        })
        return true
      } catch (error) {
        throw new Error(`Failed to delete user: ${error}`)
      }
    },

    async createSession(session: Omit<AuthSession, 'id'>) {
      try {
        const result = await payload.create({
          collection: collections.sessions,
          data: session,
        })
        return result as AuthSession
      } catch (error) {
        throw new Error(`Failed to create session: ${error}`)
      }
    },

    async getSessionByToken(token: string) {
      try {
        const result = await payload.find({
          collection: collections.sessions,
          where: {
            token: {
              equals: token,
            },
          },
          limit: 1,
        })
        return result.docs[0] as AuthSession | null
      } catch (error) {
        throw new Error(`Failed to get session by token: ${error}`)
      }
    },

    async updateSession(id: string, data: Partial<AuthSession>) {
      try {
        const result = await payload.update({
          collection: collections.sessions,
          id,
          data,
        })
        return result as AuthSession
      } catch (error) {
        throw new Error(`Failed to update session: ${error}`)
      }
    },

    async deleteSession(id: string) {
      try {
        await payload.delete({
          collection: collections.sessions,
          id,
        })
        return true
      } catch (error) {
        throw new Error(`Failed to delete session: ${error}`)
      }
    },

    async deleteExpiredSessions() {
      try {
        const result = await payload.delete({
          collection: collections.sessions,
          where: {
            expiresAt: {
              less_than: new Date(),
            },
          },
        })
        return result.docs?.length || 0
      } catch (error) {
        throw new Error(`Failed to delete expired sessions: ${error}`)
      }
    },

    async createAccount(account: Omit<AuthAccount, 'id'>) {
      try {
        const result = await payload.create({
          collection: collections.accounts,
          data: account,
        })
        return result as AuthAccount
      } catch (error) {
        throw new Error(`Failed to create account: ${error}`)
      }
    },

    async getAccountByProviderAccountId(providerId: string, accountId: string) {
      try {
        const result = await payload.find({
          collection: collections.accounts,
          where: {
            and: [
              {
                providerId: {
                  equals: providerId,
                },
              },
              {
                accountId: {
                  equals: accountId,
                },
              },
            ],
          },
          limit: 1,
        })
        return result.docs[0] as AuthAccount | null
      } catch (error) {
        throw new Error(`Failed to get account by provider account ID: ${error}`)
      }
    },

    async getAccountsByUserId(userId: string) {
      try {
        const result = await payload.find({
          collection: collections.accounts,
          where: {
            userId: {
              equals: userId,
            },
          },
        })
        return result.docs as AuthAccount[]
      } catch (error) {
        throw new Error(`Failed to get accounts by user ID: ${error}`)
      }
    },

    async updateAccount(id: string, data: Partial<AuthAccount>) {
      try {
        const result = await payload.update({
          collection: collections.accounts,
          id,
          data,
        })
        return result as AuthAccount
      } catch (error) {
        throw new Error(`Failed to update account: ${error}`)
      }
    },

    async deleteAccount(id: string) {
      try {
        await payload.delete({
          collection: collections.accounts,
          id,
        })
        return true
      } catch (error) {
        throw new Error(`Failed to delete account: ${error}`)
      }
    },

    async createVerification(verification: Omit<AuthVerification, 'id'>) {
      try {
        const result = await payload.create({
          collection: collections.verifications,
          data: verification,
        })
        return result as AuthVerification
      } catch (error) {
        throw new Error(`Failed to create verification: ${error}`)
      }
    },

    async getVerificationByIdentifier(identifier: string) {
      try {
        const result = await payload.find({
          collection: collections.verifications,
          where: {
            identifier: {
              equals: identifier,
            },
          },
          limit: 1,
        })
        return result.docs[0] as AuthVerification | null
      } catch (error) {
        throw new Error(`Failed to get verification by identifier: ${error}`)
      }
    },

    async deleteVerification(id: string) {
      try {
        await payload.delete({
          collection: collections.verifications,
          id,
        })
        return true
      } catch (error) {
        throw new Error(`Failed to delete verification: ${error}`)
      }
    },

    async deleteExpiredVerifications() {
      try {
        const result = await payload.delete({
          collection: collections.verifications,
          where: {
            expiresAt: {
              less_than: new Date(),
            },
          },
        })
        return result.docs?.length || 0
      } catch (error) {
        throw new Error(`Failed to delete expired verifications: ${error}`)
      }
    },
  }
}