import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import { marked } from 'marked'

export const metadata: Metadata = {
  title: 'Changelog | PayloadKit',
  description: 'Historique des versions et modifications de PayloadKit - Framework PayloadCMS',
}

async function getMarkdownContent() {
  const filePath = join(process.cwd(), '../../CHANGELOG.md')
  const content = readFileSync(filePath, 'utf8')
  const html = await marked(content)
  return html
}

export default async function ChangelogPage() {
  const content = await getMarkdownContent()

  return (
    <div
      className="prose prose-slate max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}