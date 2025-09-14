import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export const metadata: Metadata = {
  title: 'Docker Development Setup | PayloadKit',
  description: 'Environnement de développement Docker complet avec PostgreSQL, Redis et MailHog',
}

async function getMarkdownContent() {
  const filePath = join(process.cwd(), 'docs/DOCKER-SETUP.md')
  const content = readFileSync(filePath, 'utf8')
  return content
}

export default async function DockerPage() {
  const content = await getMarkdownContent()

  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <MDXRemote source={content} />
    </div>
  )
}