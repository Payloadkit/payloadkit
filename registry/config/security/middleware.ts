import { NextRequest, NextResponse } from 'next/server'

export interface SecurityConfig {
  /**
   * Content Security Policy configuration
   */
  csp?: {
    enabled?: boolean
    directives?: {
      [key: string]: string[]
    }
  }
  
  /**
   * HTTP Strict Transport Security
   */
  hsts?: {
    enabled?: boolean
    maxAge?: number
    includeSubDomains?: boolean
    preload?: boolean
  }
  
  /**
   * Frame options
   */
  frameOptions?: 'DENY' | 'SAMEORIGIN' | 'ALLOW-FROM'
  
  /**
   * HTTPS enforcement
   */
  httpsRedirect?: {
    enabled?: boolean
    permanent?: boolean
  }
  
  /**
   * CORS configuration
   */
  cors?: {
    origin?: string | string[]
    methods?: string[]
    allowedHeaders?: string[]
    maxAge?: number
  }
  
  /**
   * IP access control
   */
  ipAccessControl?: {
    whitelist?: string[]
    blacklist?: string[]
  }
  
  /**
   * Suspicious activity detection
   */
  suspiciousActivityDetection?: {
    enabled?: boolean
    patterns?: RegExp[]
  }
}

/**
 * Security Middleware for PayloadKit Applications
 * 
 * Provides comprehensive security headers and protection including:
 * - Content Security Policy (CSP)
 * - HTTP Strict Transport Security (HSTS)
 * - X-Frame-Options, X-Content-Type-Options
 * - HTTPS enforcement
 * - CORS configuration
 * - IP access control
 * - Suspicious activity detection
 */
export function createSecurityMiddleware(config: SecurityConfig = {}) {
  // Default security configuration
  const defaultConfig: SecurityConfig = {
    csp: {
      enabled: true,
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // PayloadCMS needs unsafe-eval
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
      },
    },
    
    hsts: {
      enabled: true,
      maxAge: 31536000, // 1 year
      includeSubDomains: true,
      preload: true,
    },
    
    frameOptions: 'DENY',
    
    httpsRedirect: {
      enabled: process.env.NODE_ENV === 'production',
      permanent: true,
    },
    
    cors: {
      origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      maxAge: 86400,
    },
    
    ipAccessControl: {
      whitelist: process.env.IP_WHITELIST?.split(',') || [],
      blacklist: process.env.IP_BLACKLIST?.split(',') || [],
    },
    
    suspiciousActivityDetection: {
      enabled: true,
      patterns: [
        /bot|crawl|spider|scan/i,
        /wget|curl/i,
        /php|asp|jsp/i, // File extension scanning
        /\.\./,         // Directory traversal
        /<script/i,     // XSS attempts
        /union.*select/i, // SQL injection
      ],
    },
  }
  
  // Merge configurations
  const mergedConfig = {
    ...defaultConfig,
    ...config,
    csp: { ...defaultConfig.csp, ...config.csp },
    hsts: { ...defaultConfig.hsts, ...config.hsts },
    httpsRedirect: { ...defaultConfig.httpsRedirect, ...config.httpsRedirect },
    cors: { ...defaultConfig.cors, ...config.cors },
    ipAccessControl: { ...defaultConfig.ipAccessControl, ...config.ipAccessControl },
    suspiciousActivityDetection: { ...defaultConfig.suspiciousActivityDetection, ...config.suspiciousActivityDetection },
  }

  return function securityMiddleware(request: NextRequest) {
    const response = NextResponse.next()
    const clientIP = getClientIP(request)
    
    // IP Access Control
    if (!isIPAllowed(clientIP, mergedConfig.ipAccessControl!)) {
      return new NextResponse('Access Denied', { status: 403 })
    }
    
    // Suspicious Activity Detection
    if (mergedConfig.suspiciousActivityDetection?.enabled && 
        detectSuspiciousActivity(request, mergedConfig.suspiciousActivityDetection.patterns!)) {
      return new NextResponse('Suspicious Activity Detected', { status: 403 })
    }
    
    // HTTPS redirect in production
    if (mergedConfig.httpsRedirect?.enabled && 
        request.headers.get('x-forwarded-proto') !== 'https') {
      const redirectUrl = `https://${request.headers.get('host')}${request.nextUrl.pathname}${request.nextUrl.search}`
      return NextResponse.redirect(redirectUrl, mergedConfig.httpsRedirect.permanent ? 301 : 302)
    }

    // Security Headers
    setSecurityHeaders(response, mergedConfig)
    
    // CORS headers for API routes
    if (request.nextUrl.pathname.startsWith('/api/')) {
      setCorsHeaders(response, mergedConfig.cors!)
    }

    return response
  }
}

// Helper functions
function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    request.headers.get('x-client-ip') ||
    request.ip ||
    'unknown'
  )
}

function isIPAllowed(ip: string, config: Required<SecurityConfig>['ipAccessControl']): boolean {
  const { whitelist, blacklist } = config
  
  // If whitelist exists, only allow whitelisted IPs
  if (whitelist.length > 0 && !whitelist.includes(ip)) {
    return false
  }
  
  // Block blacklisted IPs
  if (blacklist.includes(ip)) {
    return false
  }
  
  return true
}

function detectSuspiciousActivity(request: NextRequest, patterns: RegExp[]): boolean {
  const userAgent = request.headers.get('user-agent') || ''
  const path = request.nextUrl.pathname
  const query = request.nextUrl.search
  
  // Check user agent, path, and query parameters for suspicious patterns
  const targets = [userAgent, path, query]
  
  return patterns.some(pattern => 
    targets.some(target => pattern.test(target))
  )
}

function setSecurityHeaders(response: NextResponse, config: SecurityConfig) {
  // Content Security Policy
  if (config.csp?.enabled && config.csp.directives) {
    const cspValue = Object.entries(config.csp.directives)
      .map(([directive, values]) => `${directive} ${values.join(' ')}`)
      .join('; ')
    response.headers.set('Content-Security-Policy', cspValue)
  }
  
  // HTTP Strict Transport Security
  if (config.hsts?.enabled) {
    const hstsValue = [
      `max-age=${config.hsts.maxAge}`,
      config.hsts.includeSubDomains ? 'includeSubDomains' : '',
      config.hsts.preload ? 'preload' : '',
    ].filter(Boolean).join('; ')
    response.headers.set('Strict-Transport-Security', hstsValue)
  }
  
  // Other security headers
  response.headers.set('X-Frame-Options', config.frameOptions || 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self), payment=(self)')
}

function setCorsHeaders(response: NextResponse, corsConfig: Required<SecurityConfig>['cors']) {
  const origin = Array.isArray(corsConfig.origin) 
    ? corsConfig.origin.join(', ') 
    : corsConfig.origin || '*'
    
  response.headers.set('Access-Control-Allow-Origin', origin)
  response.headers.set('Access-Control-Allow-Methods', corsConfig.methods?.join(', ') || 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', corsConfig.allowedHeaders?.join(', ') || 'Content-Type, Authorization')
  response.headers.set('Access-Control-Max-Age', corsConfig.maxAge?.toString() || '86400')
}

// Pre-configured security middleware for common use cases
export const standardSecurityMiddleware = createSecurityMiddleware()

export const strictSecurityMiddleware = createSecurityMiddleware({
  csp: {
    enabled: true,
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'"],
      scriptSrc: ["'self'"], // Remove unsafe-eval and unsafe-inline for stricter security
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  frameOptions: 'DENY',
  suspiciousActivityDetection: {
    enabled: true,
    patterns: [
      /bot|crawl|spider|scan|hack|exploit/i,
      /wget|curl|python-requests/i,
      /php|asp|jsp|cgi/i,
      /\.\./,
      /<script|javascript:/i,
      /union.*select|drop.*table|insert.*into/i,
      /\b(eval|exec|system|shell_exec)\b/i,
    ],
  },
})

export default createSecurityMiddleware