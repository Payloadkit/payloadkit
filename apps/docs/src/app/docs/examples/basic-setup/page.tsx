import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { TutorialSteps } from '@/components/tutorial-steps'
import { CodeBlock } from '@/components/code-tabs'
import { Snippet } from '@/components/snippet'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Basic Setup Example - PayloadKit',
  description: 'Learn how to set up a basic PayloadCMS project with PayloadKit components step by step',
}

export default function BasicSetupPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs/examples">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Examples
          </Link>
        </Button>
      </div>

      {/* Page Description */}
      <PageDescription
        title="Basic Setup"
        description="Learn how to set up a basic PayloadCMS project with PayloadKit components and build your first dynamic website."
        category="examples"
        version="0.1.0"
        difficulty="beginner"
        estimatedTime="15 minutes"
        lastUpdated="January 2025"
      />

      {/* What You'll Build */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What You'll Build</h2>
        <p className="text-muted-foreground">
          In this tutorial, you'll create a simple PayloadCMS website with:
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>Hero Section</strong>
              <p className="text-sm text-muted-foreground">Eye-catching landing page header</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>Call-to-Action</strong>
              <p className="text-sm text-muted-foreground">Conversion-focused sections</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>Pages Collection</strong>
              <p className="text-sm text-muted-foreground">Flexible page builder</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>Admin Interface</strong>
              <p className="text-sm text-muted-foreground">Content management system</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Steps */}
      <TutorialSteps
        title="Step-by-Step Setup"
        steps={[
          {
            title: 'Create Your Project',
            keyword: 'Project',
            description: 'Start by creating a new PayloadKit project with all components pre-configured',
            content: (
              <div className="space-y-4">
                <Snippet
                  command="npx create-payloadkit@latest my-basic-site"
                  title="Create New Project"
                />
                <Alert>
                  <AlertDescription>
                    This creates a complete PayloadCMS setup with Next.js, TypeScript, and TailwindCSS.
                  </AlertDescription>
                </Alert>
              </div>
            )
          },
          {
            title: 'Configure Environment',
            keyword: 'Environment',
            description: 'Set up your database connection and environment variables',
            content: (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">1. Navigate and copy environment file</h4>
                  <CodeBlock
                    code="cd my-basic-site\ncp .env.example .env"
                    language="bash"
                    title="Setup Environment"
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-2">2. Update your .env file</h4>
                  <CodeBlock
                    code="# PayloadCMS\nPAYLOAD_SECRET=your-secret-key-here\nDATABASE_URI=postgresql://username:password@localhost:5432/my_basic_site\n\n# Next.js\nNEXT_PUBLIC_SERVER_URL=http://localhost:3000"
                    language="bash"
                    title="Environment Variables"
                  />
                </div>
              </div>
            )
          },
          {
            title: 'Add Components',
            keyword: 'Components',
            description: 'Add PayloadKit components to build your page structure',
            content: (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">1. Add a Hero Block</h4>
                  <Snippet
                    command="npx payloadkit add hero-block"
                    title="Add Hero Block"
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-2">2. Add a Call-to-Action</h4>
                  <Snippet
                    command="npx payloadkit add call-to-action"
                    title="Add Call-to-Action"
                  />
                </div>
              </div>
            )
          },
          {
            title: 'Register Blocks',
            keyword: 'Configuration',
            description: 'Register the blocks in your PayloadCMS configuration',
            content: (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">1. Update your Pages collection</h4>
                  <CodeBlock
                    code="// src/collections/Pages/index.ts\nimport { HeroBlock } from '@/blocks/hero-block'\nimport { CallToAction } from '@/blocks/call-to-action'\n\nexport const Pages: CollectionConfig = {\n  slug: 'pages',\n  admin: {\n    useAsTitle: 'title',\n  },\n  fields: [\n    {\n      name: 'title',\n      type: 'text',\n      required: true,\n    },\n    {\n      name: 'layout',\n      type: 'blocks',\n      blocks: [\n        HeroBlock,\n        CallToAction,\n      ],\n    },\n  ],\n}"
                    language="typescript"
                    title="Pages Collection"
                  />
                </div>
                <div>
                  <h4 className="font-medium mb-2">2. Create your RenderBlocks component</h4>
                  <CodeBlock
                    code="// src/blocks/RenderBlocks.tsx\nimport { HeroBlock } from './hero-block/Component'\nimport { CallToActionBlock } from './call-to-action/Component'\n\nconst blockComponents = {\n  hero: HeroBlock,\n  cta: CallToActionBlock,\n}\n\ninterface Block {\n  blockType: keyof typeof blockComponents\n}\n\nexport function RenderBlocks({ blocks }: { blocks: Block[] }) {\n  return (\n    <>\n      {blocks?.map((block, i) => {\n        const Component = blockComponents[block.blockType]\n        if (Component) {\n          return <Component key={i} {...block} />\n        }\n        return null\n      })}\n    </>\n  )\n}"
                    language="typescript"
                    title="RenderBlocks Component"
                  />
                </div>
              </div>
            )
          },
          {
            title: 'Create Frontend',
            keyword: 'Frontend',
            description: 'Set up your frontend page template to render the blocks',
            content: (
              <div className="space-y-4">
                <CodeBlock
                  code="// src/app/(frontend)/[...slug]/page.tsx\nimport { RenderBlocks } from '@/blocks/RenderBlocks'\n\nexport default async function Page({ params }) {\n  const page = await fetchPage(params.slug)\n  \n  return (\n    <main>\n      <RenderBlocks blocks={page.layout} />\n    </main>\n  )\n}"
                  language="typescript"
                  title="Page Template"
                />
              </div>
            )
          },
          {
            title: 'Start Development',
            keyword: 'Development',
            description: 'Install dependencies and start your development server',
            content: (
              <div className="space-y-4">
                <CodeBlock
                  code="npm install\nnpm run generate:types\nnpm run dev"
                  language="bash"
                  title="Start Development Server"
                />
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Success!</strong> Your PayloadKit project is now running at{' '}
                    <code className="bg-muted px-1 py-0.5 rounded">http://localhost:3000</code>
                    <br />
                    Admin panel available at{' '}
                    <code className="bg-muted px-1 py-0.5 rounded">http://localhost:3000/admin</code>
                  </AlertDescription>
                </Alert>
              </div>
            )
          }
        ]}
        allowSkip={false}
      />

      <Separator />

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="font-medium mb-2">Customize Your Components</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Modify the copied components to match your design system and branding.
            </p>
            <Button size="sm" variant="outline" asChild>
              <Link href="/docs/components">
                View Components <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-medium mb-2">Add More Blocks</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Expand your site with more PayloadKit components and blocks.
            </p>
            <Button size="sm" variant="outline" asChild>
              <Link href="/docs/cli">
                Learn CLI <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tags */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {['Tutorial', 'Beginner', 'Setup', 'PayloadCMS', 'Next.js', 'Components', 'Blocks'].map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}