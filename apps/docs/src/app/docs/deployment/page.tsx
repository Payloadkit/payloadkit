import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import { marked } from 'marked'

export const metadata: Metadata = {
  title: 'Déploiement VPS | PayloadKit',
  description: 'Déployez PayloadCMS sur VPS avec DATABASE_BUILD_URI pour Dokploy, Railway, etc.',
}

async function getMarkdownContent() {
  const filePath = join(process.cwd(), '../../docs/VPS-DEPLOYMENT.md')
  const content = readFileSync(filePath, 'utf8')
  const html = await marked(content)
  return html
}

export default async function DeploymentPage() {
  const content = await getMarkdownContent()

  return (
    <div
      className="prose prose-slate max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}