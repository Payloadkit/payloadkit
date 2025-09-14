import { Metadata } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export const metadata: Metadata = {
  title: 'Déploiement VPS | PayloadKit',
  description: 'Déployez PayloadCMS sur VPS avec DATABASE_BUILD_URI pour Dokploy, Railway, etc.',
}

async function getMarkdownContent() {
  const filePath = join(process.cwd(), 'docs/VPS-DEPLOYMENT.md')
  const content = readFileSync(filePath, 'utf8')
  return content
}

export default async function DeploymentPage() {
  const content = await getMarkdownContent()

  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <MDXRemote source={content} />
    </div>
  )
}