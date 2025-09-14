'use client'

import React from 'react'
import { AuthUIProvider } from '@daveyplate/better-auth-ui'
import { authClient } from './auth-client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()

  return (
    <AuthUIProvider
      authClient={authClient}
      navigate={router.push}
      replace={router.replace}
      onSessionChange={() => router.refresh()}
      Link={Link}
    >
      {children}
    </AuthUIProvider>
  )
}