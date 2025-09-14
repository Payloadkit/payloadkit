import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import { marked } from 'marked'

export const metadata: Metadata = {
  title: 'Configuration Modulaire | PayloadKit',
  description: 'Configuration PayloadCMS intelligente avec PostgreSQL/MongoDB et support VPS',
}

async function getMarkdownContent() {
  const filePath = join(process.cwd(), '../../docs/MODULAR-CONFIG.md')
  const content = readFileSync(filePath, 'utf8')
  const html = await marked(content)
  return html
}

export default async function ConfigurationPage() {
  const content = await getMarkdownContent()

  return (
    <div
      className="prose prose-slate max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}