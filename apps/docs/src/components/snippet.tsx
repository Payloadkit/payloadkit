'use client'

import { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SnippetProps {
  command: string
  language?: 'bash' | 'shell' | 'cmd' | 'powershell'
  title?: string
  className?: string
  children?: React.ReactNode
}

export function Snippet({
  command,
  language = 'bash',
  title,
  className,
  children
}: SnippetProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy command:', err)
    }
  }

  return (
    <div className={cn('group relative', className)}>
      {title && (
        <h4 className="font-semibold mb-2 text-sm text-muted-foreground">
          {title}
        </h4>
      )}

      {children && (
        <div className="mb-3 text-sm text-muted-foreground">
          {children}
        </div>
      )}

      <div className="relative overflow-hidden rounded-lg border bg-muted/30">
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Terminal className="h-3 w-3" />
            <span className="font-mono text-xs uppercase">{language}</span>
          </div>

          <Button
            size="sm"
            variant="ghost"
            className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-600" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>

        <div className="p-4">
          <pre className="text-sm font-mono text-foreground" suppressHydrationWarning>
            <code className={`language-${language}`} suppressHydrationWarning>
              {command}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

// Multi-command snippet
interface MultiSnippetProps {
  commands: Array<{
    command: string
    language?: string
    description?: string
  }>
  title?: string
  className?: string
}

export function MultiSnippet({ commands, title, className }: MultiSnippetProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {title && (
        <h4 className="font-semibold text-sm text-muted-foreground">
          {title}
        </h4>
      )}

      {commands.map((cmd, index) => (
        <Snippet
          key={index}
          command={cmd.command}
          language={cmd.language as any}
        >
          {cmd.description}
        </Snippet>
      ))}
    </div>
  )
}