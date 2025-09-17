import type { CollectionConfig } from 'payload'

export const AuthVerifications: CollectionConfig = {
  slug: 'auth-verifications',
  labels: {
    singular: 'Auth Verification',
    plural: 'Auth Verifications',
  },
  admin: {
    useAsTitle: 'identifier',
    hidden: ({ user }) => !user?.roles?.includes('admin'),
    defaultColumns: ['identifier', 'type', 'expiresAt'],
  },
  access: {
    create: ({ req }) => !!req.user,
    read: ({ req }) => req.user?.roles?.includes('admin') || false,
    update: ({ req }) => req.user?.roles?.includes('admin') || false,
    delete: ({ req }) => req.user?.roles?.includes('admin') || false,
  },
  fields: [
    {
      name: 'identifier',
      type: 'text',
      required: true,
      index: true,
      admin: {
        description: 'Email or user ID this verification is for',
      },
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      admin: {
        description: 'Verification token or code',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Email Verification', value: 'email-verification' },
        { label: 'Password Reset', value: 'password-reset' },
        { label: 'TOTP Setup', value: 'totp-setup' },
        { label: 'Two Factor', value: 'two-factor' },
      ],
      admin: {
        description: 'Type of verification',
      },
    },
    {
      name: 'expiresAt',
      type: 'date',
      required: true,
      index: true,
      admin: {
        description: 'When this verification expires',
      },
    },
    {
      name: 'attempts',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 10,
      admin: {
        description: 'Number of attempts made',
      },
    },
    {
      name: 'verified',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Whether this verification has been completed',
      },
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        // Set default expiration if not provided (1 hour for most types, 24 hours for email verification)
        if (!data.expiresAt) {
          const expiresAt = new Date()
          const hours = data.type === 'email-verification' ? 24 : 1
          expiresAt.setHours(expiresAt.getHours() + hours)
          data.expiresAt = expiresAt
        }
        return data
      },
    ],
  },
  indexes: [
    {
      fields: {
        identifier: 1,
        type: 1,
      },
    },
    {
      fields: {
        expiresAt: 1,
      },
    },
  ],
}