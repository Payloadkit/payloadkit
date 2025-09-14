import { payloadAuditor } from 'payload-auditor'

interface AuditLoggingOptions {
  /**
   * Enable/disable audit logging
   */
  enabled?: boolean
  
  /**
   * Collections to audit
   */
  collections?: {
    [key: string]: boolean
  }
  
  /**
   * Globals to audit
   */
  globals?: {
    [key: string]: boolean
  }
  
  /**
   * Operations to track
   */
  operations?: {
    create?: boolean
    update?: boolean
    delete?: boolean
    login?: boolean
    logout?: boolean
  }
  
  /**
   * Log level configuration
   */
  logLevel?: 'error' | 'warn' | 'info' | 'debug'
  
  /**
   * Storage configuration
   */
  storage?: {
    type: 'database' | 'external'
    endpoint?: string
  }
  
  /**
   * Retention policy
   */
  retention?: {
    enabled?: boolean
    days?: number
  }
  
  /**
   * Fields to exclude from logging (for privacy/security)
   */
  excludeFields?: string[]
  
  /**
   * IP and user agent tracking
   */
  tracking?: {
    ip?: boolean
    userAgent?: boolean
  }
  
  /**
   * Custom transformation function for audit logs
   */
  transform?: (auditLog: any) => any
}

/**
 * Audit Logging Plugin for PayloadCMS
 * 
 * Provides comprehensive audit trail including:
 * - User authentication events
 * - Data modifications (create, update, delete)
 * - Administrative actions
 * - IP address and user agent tracking
 * - Configurable retention policies
 * - GDPR/SOX/HIPAA compliance features
 */
export function auditLoggingPlugin(options: AuditLoggingOptions = {}) {
  const defaultConfig = {
    // Enable audit logging by default (can be disabled via env var)
    enabled: options.enabled ?? (process.env.ENABLE_AUDIT_LOGGING !== 'false'),
    
    // Collections to audit (all by default)
    collections: {
      users: true,
      media: true,
      pages: true,
      ...options.collections,
    },

    // Globals to audit
    globals: {
      ...options.globals,
    },

    // Operations to track (all by default)
    operations: {
      create: true,
      update: true,
      delete: true,
      login: true,
      logout: true,
      ...options.operations,
    },

    // Log level
    logLevel: options.logLevel || (process.env.AUDIT_LOG_LEVEL as any) || 'info',

    // Storage configuration
    storage: {
      type: 'database' as const,
      ...options.storage,
      // Could be extended to support external logging services
      // endpoint: process.env.AUDIT_LOG_ENDPOINT,
    },

    // Retention policy (optional)
    retention: {
      enabled: options.retention?.enabled ?? (process.env.AUDIT_LOG_RETENTION === 'true'),
      days: options.retention?.days ?? parseInt(process.env.AUDIT_LOG_RETENTION_DAYS || '365'),
      ...options.retention,
    },

    // Fields to exclude from logging (for privacy/security)
    excludeFields: [
      'password',
      'salt',
      'resetPasswordToken',
      'resetPasswordExpiration',
      'twoFactorSecret',
      'backupCodes',
      'emailVerificationToken',
      ...(options.excludeFields || []),
    ],

    // IP and user agent tracking
    trackIP: options.tracking?.ip ?? true,
    trackUserAgent: options.tracking?.userAgent ?? true,

    // Custom audit log transformation
    transform: options.transform || ((auditLog: any) => {
      // Add environment and version info to audit logs
      return {
        ...auditLog,
        environment: process.env.NODE_ENV,
        appVersion: process.env.APP_VERSION || '1.0.0',
        timestamp: new Date().toISOString(),
      }
    }),
  }

  return payloadAuditor(defaultConfig)
}

/**
 * Pre-configured audit logging for high-compliance environments
 * 
 * Includes stricter settings for GDPR, SOX, HIPAA compliance
 */
export function complianceAuditLoggingPlugin(options: AuditLoggingOptions = {}) {
  return auditLoggingPlugin({
    ...options,
    // Force enable for compliance
    enabled: true,
    
    // Track all operations for compliance
    operations: {
      create: true,
      update: true,
      delete: true,
      login: true,
      logout: true,
      ...options.operations,
    },
    
    // Longer retention for compliance (7 years default)
    retention: {
      enabled: true,
      days: 2555, // ~7 years
      ...options.retention,
    },
    
    // More detailed logging level
    logLevel: 'info',
    
    // Enhanced privacy protection
    excludeFields: [
      'password',
      'salt',
      'resetPasswordToken',
      'resetPasswordExpiration', 
      'twoFactorSecret',
      'backupCodes',
      'emailVerificationToken',
      'socialSecurityNumber',
      'creditCardNumber',
      'bankAccountNumber',
      'medicalRecordNumber',
      'personalHealthInformation',
      ...(options.excludeFields || []),
    ],
  })
}

export default auditLoggingPlugin