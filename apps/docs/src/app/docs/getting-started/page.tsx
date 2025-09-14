import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export const metadata: Metadata = {
  title: 'Guide de Démarrage | PayloadKit',
  description: 'Démarrage rapide PayloadKit - de zéro à production en 5 minutes',
}

async function getMarkdownContent() {
  const filePath = join(process.cwd(), '../../docs/GETTING-STARTED.md')
  const content = readFileSync(filePath, 'utf8')
  return content
}

export default async function GettingStartedPage() {
  const content = await getMarkdownContent()

  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <MDXRemote source={content} />
    </div>
  )
}