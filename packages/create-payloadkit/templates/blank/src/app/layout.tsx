import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PayloadKit App',
  description: 'Built with PayloadKit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}