import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

export const emailConfig = nodemailerAdapter({
  defaultFromAddress: process.env.SMTP_FROM_ADDRESS || '',
  defaultFromName: process.env.SMTP_FROM_NAME || '',
  transportOptions: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_WITH_SSL === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  },
})