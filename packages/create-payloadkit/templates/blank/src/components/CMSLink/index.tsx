// This file is copied from registry/components/CMSLink/index.tsx
// DO NOT MODIFY - Will be overwritten on updates

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CMSLinkProps {
  type?: 'reference' | 'custom'
  url?: string
  label?: string
  newTab?: boolean
  reference?: {
    relationTo: string
    value: any
  }
  appearance?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  children?: React.ReactNode
}

export const CMSLink: React.FC<CMSLinkProps> = ({
  type = 'custom',
  url,
  label,
  newTab = false,
  reference,
  appearance = 'default',
  size = 'default',
  className,
  children,
}) => {
  let href = url || ''

  // Handle reference links
  if (type === 'reference' && reference?.value) {
    if (reference.relationTo === 'pages') {
      href = `/${reference.value.slug}`
    } else {
      href = `/${reference.relationTo}/${reference.value.slug || reference.value.id}`
    }
  }

  const content = children || label

  // External link
  if (href?.startsWith('http') || newTab) {
    return (
      <Button
        asChild
        variant={appearance as any}
        size={size}
        className={className}
      >
        <a
          href={href}
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      </Button>
    )
  }

  // Internal link
  return (
    <Button
      asChild
      variant={appearance as any}
      size={size}
      className={className}
    >
      <Link href={href || '/'}>
        {content}
      </Link>
    </Button>
  )
}