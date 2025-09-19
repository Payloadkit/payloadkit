import rateLimit from 'express-rate-limit'
import { Config } from 'payload'

interface RateLimitRule {
  windowMs: number
  max: number
  message?: {
    error: string
    retryAfter: string
  }
  standardHeaders?: boolean
  legacyHeaders?: boolean
}

interface RateLimitingOptions {
  /**
   * Enable/disable rate limiting
   */
  enabled?: boolean
  
  /**
   * General API rate limiting
   */
  general?: Partial<RateLimitRule>
  
  /**
   * Authentication endpoints rate limiting
   */
  auth?: Partial<RateLimitRule>
  
  /**
   * Password reset rate limiting
   */
  passwordReset?: Partial<RateLimitRule>
  
  /**
   * Two-factor authentication rate limiting
   */
  twoFactor?: Partial<RateLimitRule>
  
  /**
   * File upload rate limiting
   */
  upload?: Partial<RateLimitRule>
  
  /**
   * Custom rate limits for specific endpoints
   */
  custom?: {
    [endpoint: string]: Partial<RateLimitRule>
  }
  
  /**
   * Skip function to bypass rate limiting in certain conditions
   */
  skip?: (req: any) => boolean
}

/**
 * Rate Limiting Plugin for PayloadCMS
 * 
 * Provides comprehensive rate limiting including:
 * - Brute force protection on authentication
 * - API endpoint protection
 * - File upload limiting
 * - Custom endpoint rules
 * - Development mode overrides
 */
export function rateLimitingPlugin(options: RateLimitingOptions = {}) {
  const defaultSkip = (req: any) => {
    // Skip rate limiting in development if specified
    return process.env.NODE_ENV === 'development' && process.env.SKIP_RATE_LIMITING === 'true'
  }
  
  const skip = options.skip || defaultSkip
  
  // Default rate limiting rules
  const rules = {
    general: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: parseInt(process.env.GENERAL_RATE_LIMIT || '100'), // 100 requests per window
      message: {
        error: 'Too many requests from this IP',
        retryAfter: '15 minutes',
      },
      standardHeaders: true,
      legacyHeaders: false,
      ...options.general,
    },
    
    auth: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: parseInt(process.env.AUTH_RATE_LIMIT || '5'), // 5 attempts per window
      message: {
        error: 'Too many authentication attempts',
        retryAfter: '15 minutes',
      },
      standardHeaders: true,
      legacyHeaders: false,
      ...options.auth,
    },
    
    passwordReset: {
      windowMs: 60 * 60 * 1000, // 1 hour
      max: parseInt(process.env.PASSWORD_RESET_RATE_LIMIT || '3'), // 3 attempts per hour
      message: {
        error: 'Too many password reset attempts',
        retryAfter: '1 hour',
      },
      standardHeaders: true,
      legacyHeaders: false,
      ...options.passwordReset,
    },
    
    twoFactor: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: parseInt(process.env.TWOFA_RATE_LIMIT || '10'), // 10 attempts per window
      message: {
        error: 'Too many 2FA verification attempts',
        retryAfter: '15 minutes',
      },
      standardHeaders: true,
      legacyHeaders: false,
      ...options.twoFactor,
    },
    
    upload: {
      windowMs: 60 * 60 * 1000, // 1 hour
      max: parseInt(process.env.UPLOAD_RATE_LIMIT || '20'), // 20 uploads per hour
      message: {
        error: 'Too many file uploads',
        retryAfter: '1 hour',
      },
      standardHeaders: true,
      legacyHeaders: false,
      ...options.upload,
    },
  }

  return (config: Config): Config => {
    // Skip if disabled
    if (options.enabled === false || process.env.ENABLE_RATE_LIMITING === 'false') {
      return config
    }

    return {
      ...config,
      express: {
        ...config.express,
        middleware: [
          ...(config.express?.middleware || []),
          
          // General API rate limiting
          (app) => {
            app.use('/api', rateLimit({
              ...rules.general,
              skip,
            }))
          },
          
          // Authentication endpoints
          (app) => {
            app.use('/api/auth/login', rateLimit({
              ...rules.auth,
              skip,
            }))
            
            app.use('/api/auth/register', rateLimit({
              ...rules.auth,
              skip,
            }))
            
            app.use('/api/better-auth/sign-in', rateLimit({
              ...rules.auth,
              skip,
            }))
            
            app.use('/api/better-auth/sign-up', rateLimit({
              ...rules.auth,
              skip,
            }))
          },
          
          // Password reset endpoints
          (app) => {
            app.use('/api/auth/forgot-password', rateLimit({
              ...rules.passwordReset,
              skip,
            }))
            
            app.use('/api/better-auth/forget-password', rateLimit({
              ...rules.passwordReset,
              skip,
            }))
          },
          
          // Two-factor authentication endpoints
          (app) => {
            app.use('/api/auth/2fa/*', rateLimit({
              ...rules.twoFactor,
              skip,
            }))
            
            app.use('/api/better-auth/two-factor/*', rateLimit({
              ...rules.twoFactor,
              skip,
            }))
          },
          
          // File upload endpoints
          (app) => {
            app.use('/api/media', rateLimit({
              ...rules.upload,
              skip,
            }))
          },
          
          // Custom endpoint rate limits
          ...(options.custom ? Object.entries(options.custom).map(([endpoint, rule]) => 
            (app: any) => {
              app.use(endpoint, rateLimit({
                ...rule,
                standardHeaders: rule.standardHeaders ?? true,
                legacyHeaders: rule.legacyHeaders ?? false,
                skip,
              }))
            }
          ) : []),
        ],
      },
    }
  }
}

/**
 * Aggressive rate limiting for high-security environments
 * 
 * Much stricter limits for environments requiring maximum protection
 */
export function aggressiveRateLimitingPlugin(options: RateLimitingOptions = {}) {
  return rateLimitingPlugin({
    ...options,
    general: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 50, // Reduced from 100
      ...options.general,
    },
    auth: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 3, // Reduced from 5
      ...options.auth,
    },
    passwordReset: {
      windowMs: 60 * 60 * 1000, // 1 hour
      max: 1, // Reduced from 3
      ...options.passwordReset,
    },
    twoFactor: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // Reduced from 10
      ...options.twoFactor,
    },
    upload: {
      windowMs: 60 * 60 * 1000, // 1 hour
      max: 5, // Reduced from 20
      ...options.upload,
    },
  })
}

export default rateLimitingPlugin