'use client'

import React from 'react'
import { AuthView as BetterAuthView } from '@daveyplate/better-auth-ui'
import { cn } from '@/lib/utils'

interface AuthViewProps {
  /**
   * The authentication view to render
   * Can be a pathname like 'sign-in', 'sign-up', 'reset-password', etc.
   */
  pathname?: string
  
  /**
   * Directly specify the view type
   * Options: 'SIGN_IN', 'SIGN_UP', 'RESET_PASSWORD', 'VERIFY_EMAIL', etc.
   */
  view?: string
  
  /**
   * Additional CSS classes
   */
  className?: string
  
  /**
   * Show/hide the "Powered by better-auth" footer
   */
  showPoweredBy?: boolean
}

export function AuthView({ 
  pathname, 
  view, 
  className,
  showPoweredBy = true 
}: AuthViewProps) {
  // Determine the view path - pathname takes precedence over view
  const viewPath = pathname || view

  return (
    <main className={cn(
      "container flex grow flex-col items-center justify-center gap-3 self-center p-4 md:p-6",
      className
    )}>
      {pathname ? (
        <BetterAuthView pathname={pathname} />
      ) : view ? (
        <BetterAuthView view={view} />
      ) : (
        <BetterAuthView pathname="sign-in" />
      )}

      {showPoweredBy && (
        <p className={cn(
          "text-muted-foreground text-xs",
          // Hide footer for callback and sign-out views
          ["callback", "sign-out"].includes(viewPath || '') && "hidden"
        )}>
          Secured by{" "}
          <a 
            className="text-primary underline hover:text-primary/80" 
            href="https://payloadkit.dev" 
            target="_blank" 
            rel="noreferrer"
          >
            PayloadKit
          </a>
          {" "}powered by{" "}
          <a 
            className="text-primary underline hover:text-primary/80" 
            href="https://better-auth.com" 
            target="_blank" 
            rel="noreferrer"
          >
            Better Auth
          </a>
        </p>
      )}
    </main>
  )
}