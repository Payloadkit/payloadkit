// This file is copied from registry/components/RichText/index.tsx
// DO NOT MODIFY - Will be overwritten on updates

import React from 'react'
import { cn } from '@/lib/utils'

interface RichTextProps {
  data?: any
  className?: string
  enableGutter?: boolean
}

export default function RichText({ data, className, enableGutter = true }: RichTextProps) {
  if (!data) return null

  // Simple implementation - in a real app you'd use Lexical renderer
  const renderContent = () => {
    if (typeof data === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: data }} />
    }
    
    // Basic JSON content rendering
    if (Array.isArray(data?.root?.children)) {
      return data.root.children.map((node: any, index: number) => {
        if (node.type === 'paragraph') {
          return (
            <p key={index} className="mb-4 last:mb-0">
              {node.children?.map((child: any, childIndex: number) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </p>
          )
        }
        return null
      })
    }

    return <div className="prose prose-sm max-w-none dark:prose-invert">
      {JSON.stringify(data, null, 2)}
    </div>
  }

  return (
    <div className={cn(
      'prose prose-sm max-w-none dark:prose-invert',
      enableGutter && 'prose-lg',
      className
    )}>
      {renderContent()}
    </div>
  )
}