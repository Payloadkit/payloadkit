import { standardSecurityMiddleware } from '@payloadkit/registry/config/security/middleware'

// Use PayloadKit's pre-configured security middleware
export const middleware = standardSecurityMiddleware

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}