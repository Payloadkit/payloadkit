'use client'

import { useEffect, useState } from 'react'
import Prism from 'prismjs'

// Import basic languages
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-shell-session'

// Import theme CSS - using light theme for better readability
import 'prismjs/themes/prism.css'

interface SyntaxHighlighterProps {
  code: string
  language: string
  className?: string
}

export function SyntaxHighlighter({ code, language, className = '' }: SyntaxHighlighterProps) {
  const [highlightedCode, setHighlightedCode] = useState('')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Map common language aliases
    const languageMap: Record<string, string> = {
      'tsx': 'tsx',
      'typescript': 'typescript',
      'ts': 'typescript',
      'jsx': 'jsx',
      'javascript': 'javascript',
      'js': 'javascript',
      'json': 'json',
      'bash': 'bash',
      'shell': 'bash',
      'sh': 'bash'
    }

    const mappedLanguage = languageMap[language.toLowerCase()] || 'typescript'

    try {
      // Ensure the language is loaded
      if (Prism.languages[mappedLanguage]) {
        const highlighted = Prism.highlight(
          code,
          Prism.languages[mappedLanguage],
          mappedLanguage
        )
        setHighlightedCode(highlighted)
      } else {
        // Fallback to plain text
        setHighlightedCode(code)
      }
    } catch (error) {
      console.warn('Syntax highlighting failed:', error)
      setHighlightedCode(code)
    }
  }, [code, language])

  // Server-side rendering: show plain code
  if (!isClient) {
    return (
      <pre className={`${className} p-4 rounded-lg font-mono text-sm`}>
        <code>{code}</code>
      </pre>
    )
  }

  // Client-side rendering: show highlighted code
  return (
    <pre className={`${className} p-4 rounded-lg font-mono text-sm`}>
      <code
        dangerouslySetInnerHTML={{ __html: highlightedCode || code }}
      />
    </pre>
  )
}

// Simpler version for inline code
interface InlineCodeProps {
  children: string
  language?: string
}

export function InlineCode({ children, language }: InlineCodeProps) {
  if (!language) {
    return <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
  }

  return <SyntaxHighlighter code={children} language={language} className="inline" />
}