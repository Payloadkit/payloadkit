import type { CollectionConfig } from 'payload'

export const AuthAccounts: CollectionConfig = {
  slug: 'auth-accounts',
  labels: {
    singular: 'Auth Account',
    plural: 'Auth Accounts',
  },
  admin: {
    useAsTitle: 'providerId',
    hidden: ({ user }) => !user?.roles?.includes('admin'),
    defaultColumns: ['providerId', 'accountId', 'userId'],
  },
  access: {
    create: ({ req }) => !!req.user,
    read: ({ req }) => req.user?.roles?.includes('admin') || false,
    update: ({ req }) => req.user?.roles?.includes('admin') || false,
    delete: ({ req }) => req.user?.roles?.includes('admin') || false,
  },
  fields: [
    {
      name: 'userId',
      type: 'text',
      required: true,
      index: true,
      admin: {
        description: 'ID of the user this account belongs to',
      },
    },
    {
      name: 'accountId',
      type: 'text',
      required: true,
      index: true,
      admin: {
        description: 'Account ID from the OAuth provider',
      },
    },
    {
      name: 'providerId',
      type: 'select',
      required: true,
      index: true,
      options: [
        { label: 'Google', value: 'google' },
        { label: 'GitHub', value: 'github' },
        { label: 'Discord', value: 'discord' },
        { label: 'Email', value: 'email' },
      ],
      admin: {
        description: 'OAuth provider identifier',
      },
    },
    {
      name: 'accessToken',
      type: 'text',
      admin: {
        description: 'OAuth access token (encrypted)',
      },
    },
    {
      name: 'refreshToken',
      type: 'text',
      admin: {
        description: 'OAuth refresh token (encrypted)',
      },
    },
    {
      name: 'expiresAt',
      type: 'date',
      admin: {
        description: 'When the access token expires',
      },
    },
    {
      name: 'scope',
      type: 'text',
      admin: {
        description: 'OAuth scopes granted',
      },
    },
    {
      name: 'tokenType',
      type: 'text',
      defaultValue: 'Bearer',
      admin: {
        description: 'Type of the access token',
      },
    },
  ],
  indexes: [
    {
      fields: {
        providerId: 1,
        accountId: 1,
      },
      options: {
        unique: true,
      },
    },
  ],
}