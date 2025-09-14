import { betterAuthClient } from 'better-auth/client'

export const authClient = betterAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'http://localhost:3000',
  plugins: [
    // Client-side plugins will be added here
    // These should match the server-side configuration
  ],
})