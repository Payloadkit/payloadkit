import React from 'react'

export default function PayloadLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

// Disable static optimization for payload admin
export const dynamic = 'force-dynamic'