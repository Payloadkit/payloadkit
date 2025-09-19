import type { Metadata } from 'next'
import React from 'react'
import { draftMode } from 'next/headers'
import { AuthProvider } from '@payloadkit/registry/components/auth/AuthProvider'

export default async function FrontendLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { isEnabled } = await draftMode()

  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}