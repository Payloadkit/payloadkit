import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import { marked } from 'marked'

export const metadata: Metadata = {
  title: 'Guide de Démarrage | PayloadKit',
  description: 'Démarrage rapide PayloadKit - de zéro à production en 5 minutes',
}

async function getMarkdownContent() {
  const filePath = join(process.cwd(), '../../docs/GETTING-STARTED.md')
  const content = readFileSync(filePath, 'utf8')
  const html = await marked(content)
  return html
}

export default async function GettingStartedPage() {
  const content = await getMarkdownContent()

  return (
    <div
      className="prose prose-slate max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}