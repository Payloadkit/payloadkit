import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import { marked } from 'marked'

export const metadata: Metadata = {
  title: 'Docker Development Setup | PayloadKit',
  description: 'Complete Docker development environment with PostgreSQL, Redis, and MailHog',
}

async function getMarkdownContent() {
  const filePath = join(process.cwd(), '../../docs/DOCKER-SETUP.md')
  const content = readFileSync(filePath, 'utf8')
  const html = await marked(content)
  return html
}

export default async function DockerPage() {
  const content = await getMarkdownContent()

  return (
    <div
      className="prose prose-slate max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}