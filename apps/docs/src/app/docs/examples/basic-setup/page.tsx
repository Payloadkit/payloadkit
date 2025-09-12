import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function BasicSetupPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Basic Setup</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to set up a basic PayloadCMS project with PayloadKit components.
        </p>
        <div className="flex gap-2">
          <Badge>Tutorial</Badge>
          <Badge variant="secondary">Beginner</Badge>
        </div>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            What You'll Build
          </h2>
          
          <p className="text-muted-foreground">
            In this tutorial, you'll create a simple PayloadCMS website with:
          </p>
          
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Hero Section</strong>
                <p className="text-sm text-muted-foreground">Eye-catching landing page header</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Call-to-Action</strong>
                <p className="text-sm text-muted-foreground">Conversion-focused sections</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Pages Collection</strong>
                <p className="text-sm text-muted-foreground">Flexible page builder</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Admin Interface</strong>
                <p className="text-sm text-muted-foreground">Content management system</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Step 1: Create Your Project
          </h2>
          
          <p className="text-muted-foreground">
            Start by creating a new PayloadKit project:
          </p>
          
          <div className="rounded-lg border bg-muted/50 p-6">
            <pre className="bg-background p-3 rounded border">
              <code>npx create-payloadkit@latest my-basic-site</code>
            </pre>
          </div>
          
          <p className="text-sm text-muted-foreground">
            This will create a new directory with a complete PayloadCMS setup including Next.js, TypeScript, and TailwindCSS.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Step 2: Configure Your Environment
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Set up your database</h3>
              <p className="text-muted-foreground mb-2">
                Copy the environment file and configure your PostgreSQL database:
              </p>
              <div className="rounded-lg border bg-muted/50 p-4">
                <pre className="bg-background p-3 rounded border text-sm">
{`cd my-basic-site
cp .env.example .env`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">2. Update your .env file</h3>
              <div className="rounded-lg border bg-muted/50 p-4">
                <pre className="bg-background p-3 rounded border text-sm">
{`# PayloadCMS
PAYLOAD_SECRET=your-secret-key-here
DATABASE_URI=postgresql://username:password@localhost:5432/my_basic_site

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Step 3: Add Your First Components
          </h2>
          
          <p className="text-muted-foreground">
            Add PayloadKit components to your project:
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Add a Hero Block</h3>
              <div className="rounded-lg border bg-muted/50 p-4">
                <pre className="bg-background p-3 rounded border">
                  <code>npx payloadkit add hero-block</code>
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">2. Add a Call-to-Action</h3>
              <div className="rounded-lg border bg-muted/50 p-4">
                <pre className="bg-background p-3 rounded border">
                  <code>npx payloadkit add call-to-action</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Step 4: Register Your Blocks
          </h2>
          
          <p className="text-muted-foreground">
            Register the blocks in your PayloadCMS configuration:
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Update your Pages collection</h3>
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border text-sm">
{`// src/collections/Pages/index.ts
import { HeroBlock } from '@/blocks/hero-block'
import { CallToAction } from '@/blocks/call-to-action'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        CallToAction,
      ],
    },
  ],
}`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">2. Create your RenderBlocks component</h3>
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border text-sm">
{`// src/blocks/RenderBlocks.tsx
import { HeroBlock } from './hero-block/Component'
import { CallToActionBlock } from './call-to-action/Component'

const blockComponents = {
  hero: HeroBlock,
  cta: CallToActionBlock,
}

interface Block {
  blockType: keyof typeof blockComponents
}

export function RenderBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks?.map((block, i) => {
        const Component = blockComponents[block.blockType]
        if (Component) {
          return <Component key={i} {...block} />
        }
        return null
      })}
    </>
  )
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Step 5: Create Your Frontend
          </h2>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Update your page template</h3>
            <div className="rounded-lg border bg-muted/50 p-6">
              <pre className="bg-background p-3 rounded border text-sm">
{`// src/app/(frontend)/[...slug]/page.tsx
import { RenderBlocks } from '@/blocks/RenderBlocks'

export default async function Page({ params }) {
  const page = await fetchPage(params.slug)
  
  return (
    <main>
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}`}
              </pre>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Step 6: Start Development
          </h2>
          
          <p className="text-muted-foreground">
            Install dependencies and start your development server:
          </p>
          
          <div className="rounded-lg border bg-muted/50 p-6">
            <pre className="bg-background p-3 rounded border">
{`npm install
npm run generate:types
npm run dev`}
            </pre>
          </div>
          
          <div className="rounded-lg border p-6 bg-green-50 dark:bg-green-950">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-green-800 dark:text-green-200">Success!</h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Your PayloadKit project is now running at{' '}
                  <code className="bg-green-100 dark:bg-green-900 px-1 rounded">http://localhost:3000</code>
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                  Admin panel available at{' '}
                  <code className="bg-green-100 dark:bg-green-900 px-1 rounded">http://localhost:3000/admin</code>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Next Steps
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Customize Your Components</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Modify the copied components to match your design system.
              </p>
              <Button size="sm" variant="outline" asChild>
                <Link href="/docs/components">
                  View Components <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Add More Blocks</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Expand your site with more PayloadKit components.
              </p>
              <Button size="sm" variant="outline" asChild>
                <Link href="/docs/cli">
                  Learn CLI <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}