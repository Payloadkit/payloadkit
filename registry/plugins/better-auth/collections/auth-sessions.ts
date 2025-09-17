import type { CollectionConfig } from 'payload'

export const AuthSessions: CollectionConfig = {
  slug: 'auth-sessions',
  labels: {
    singular: 'Auth Session',
    plural: 'Auth Sessions',
  },
  admin: {
    useAsTitle: 'id',
    hidden: ({ user }) => !user?.roles?.includes('admin'),
    defaultColumns: ['id', 'userId', 'expiresAt', 'ipAddress'],
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
        description: 'ID of the user this session belongs to',
      },
    },
    {
      name: 'token',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Unique session token',
      },
    },
    {
      name: 'expiresAt',
      type: 'date',
      required: true,
      index: true,
      admin: {
        description: 'When this session expires',
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      admin: {
        description: 'IP address where the session was created',
      },
    },
    {
      name: 'userAgent',
      type: 'textarea',
      admin: {
        description: 'User agent string of the client',
      },
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        // Automatically set expiration if not provided (24 hours from now)
        if (!data.expiresAt) {
          const expiresAt = new Date()
          expiresAt.setDate(expiresAt.getDate() + 1)
          data.expiresAt = expiresAt
        }
        return data
      },
    ],
  },
}