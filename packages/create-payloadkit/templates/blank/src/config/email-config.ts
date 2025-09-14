import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

/**
 * Smart email configuration for PayloadKit
 * Auto-detects environment and configures appropriate transport
 */
function createEmailTransport() {
  // For development, use console transport (no actual emails sent)
  if (process.env.NODE_ENV === 'development') {
    return {
      transportOptions: {
        host: 'localhost',
        port: 1025,
        secure: false,
      },
      fromName: 'PayloadKit Dev',
      fromAddress: 'noreply@payloadkit.dev',
    }
  }

  // Production email configuration
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT || '587'
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const fromAddress = process.env.FROM_ADDRESS || 'noreply@yourdomain.com'
  const fromName = process.env.FROM_NAME || 'PayloadKit'

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn('Email configuration incomplete. Emails will be logged to console.')
    return undefined
  }

  return {
    transportOptions: {
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    },
    fromName,
    fromAddress,
  }
}

/**
 * Email configuration for PayloadKit
 * Supports development console transport and production SMTP
 */
export const emailConfig = (() => {
  const transportConfig = createEmailTransport()

  if (!transportConfig) {
    return undefined
  }

  return nodemailerAdapter(transportConfig)
})()

/**
 * Create custom email configuration
 */
export function createEmailConfig(customConfig?: any) {
  if (customConfig) {
    return nodemailerAdapter(customConfig)
  }

  return emailConfig
}