import rateLimit from 'express-rate-limit'

// General API rate limiting
export const generalRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.GENERAL_RATE_LIMIT || '100'), // 100 requests per window
  message: {
    error: 'Too many requests from this IP',
    retryAfter: '15 minutes',
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    // Skip rate limiting in development if specified
    return process.env.NODE_ENV === 'development' && process.env.SKIP_RATE_LIMITING === 'true'
  },
})

// Strict rate limiting for authentication endpoints
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.AUTH_RATE_LIMIT || '5'), // 5 attempts per window
  message: {
    error: 'Too many authentication attempts',
    retryAfter: '15 minutes',
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    return process.env.NODE_ENV === 'development' && process.env.SKIP_RATE_LIMITING === 'true'
  },
})

// Rate limiting for password reset
export const passwordResetRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: parseInt(process.env.PASSWORD_RESET_RATE_LIMIT || '3'), // 3 attempts per hour
  message: {
    error: 'Too many password reset attempts',
    retryAfter: '1 hour',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// Rate limiting for 2FA verification
export const twoFactorRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.TWOFA_RATE_LIMIT || '10'), // 10 attempts per window
  message: {
    error: 'Too many 2FA verification attempts',
    retryAfter: '15 minutes',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// Rate limiting for file uploads
export const uploadRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: parseInt(process.env.UPLOAD_RATE_LIMIT || '20'), // 20 uploads per hour
  message: {
    error: 'Too many file uploads',
    retryAfter: '1 hour',
  },
  standardHeaders: true,
  legacyHeaders: false,
})