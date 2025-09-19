import type { Metadata } from 'next'
import React from 'react'
import { draftMode } from 'next/headers'
import { AuthProvider } from '@/components/AuthProvider'

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