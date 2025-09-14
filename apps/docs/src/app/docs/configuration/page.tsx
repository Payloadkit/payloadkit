import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export const metadata: Metadata = {
  title: 'Configuration Modulaire | PayloadKit',
  description: 'Configuration PayloadCMS intelligente avec PostgreSQL/MongoDB et support VPS',
}

async function getMarkdownContent() {
  const filePath = join(process.cwd(), 'docs/MODULAR-CONFIG.md')
  const content = readFileSync(filePath, 'utf8')
  return content
}

export default async function ConfigurationPage() {
  const content = await getMarkdownContent()

  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <MDXRemote source={content} />
    </div>
  )
}