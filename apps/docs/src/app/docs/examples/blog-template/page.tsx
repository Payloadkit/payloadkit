import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, Users, Search } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { CodeBlock } from '@/components/code-tabs'
import { Snippet } from '@/components/snippet'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Blog Template - PayloadKit',
  description: 'Complete blog setup with posts, categories, SEO optimization, and content management using PayloadCMS.',
}

export default function BlogTemplatePage() {
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
        title="Blog Template"
        description="Complete blog setup with posts, categories, SEO optimization, and content management. Build a professional blog with PayloadCMS and Next.js."
        category="examples"
        version="0.4.3"
        difficulty="intermediate"
        estimatedTime="30 minutes"
        lastUpdated="September 2025"
      />

      {/* What's Included */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What's Included</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <strong>Blog Posts</strong>
              <p className="text-sm text-muted-foreground">Complete post management with drafts, scheduling, and rich content</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Users className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>Categories</strong>
              <p className="text-sm text-muted-foreground">Organize content with nested categories and tags</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg border">
            <Search className="h-5 w-5 text-purple-600 mt-0.5" />
            <div>
              <strong>SEO Ready</strong>
              <p className="text-sm text-muted-foreground">Built-in SEO optimization with meta tags and structured data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Features Overview</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>Rich Text Editor</strong>
              <p className="text-sm text-muted-foreground">Lexical editor with media support</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>Image Management</strong>
              <p className="text-sm text-muted-foreground">Featured images and media gallery</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>Author Profiles</strong>
              <p className="text-sm text-muted-foreground">Multi-author blog support</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>Comments System</strong>
              <p className="text-sm text-muted-foreground">Built-in comment management</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>RSS Feed</strong>
              <p className="text-sm text-muted-foreground">Automatic RSS generation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <strong>Search & Filter</strong>
              <p className="text-sm text-muted-foreground">Full-text search capability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Start</h2>

        <p className="text-muted-foreground">
          Create a new blog project with the blog template:
        </p>

        <Snippet
          command="bunx create-payloadkit@latest my-blog --template blog"
          title="Create Blog Project"
        />

        <Alert>
          <AlertDescription>
            <strong>Template Coming Soon:</strong> The blog template is currently in development.
            For now, you can create a basic project and add components manually using the guide below.
          </AlertDescription>
        </Alert>
      </section>

      {/* Manual Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Manual Setup</h2>

        <p className="text-muted-foreground">
          Until the template is ready, here's how to set up a blog manually:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">1. Create a basic project</h3>
            <Snippet
              command="bunx create-payloadkit@latest my-blog"
              title="Create Basic Project"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">2. Add blog components</h3>
            <div className="space-y-3">
              <Snippet
                command="bunx payloadkit@latest add hero-block"
                title="Add Hero Block"
              />
              <Snippet
                command="bunx payloadkit@latest add call-to-action"
                title="Add Call-to-Action"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">3. Create Posts collection</h3>
            <CodeBlock
              code={`// src/collections/Posts/index.ts
export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', 'status'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published Date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}`}
              language="typescript"
              title="Posts Collection Configuration"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">4. Add Categories collection</h3>
            <CodeBlock
              code={`// src/collections/Categories/index.ts
export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}`}
              language="typescript"
              title="Categories Collection Configuration"
            />
          </div>
        </div>
      </section>

      {/* Frontend Implementation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Frontend Implementation</h2>

        <div>
          <h3 className="text-lg font-semibold mb-3">Blog listing page</h3>
          <CodeBlock
            code={`// src/app/(frontend)/blog/page.tsx
export default async function BlogPage() {
  const posts = await fetch(\`\${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?limit=10&sort=-publishedAt\`)
    .then(res => res.json())

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.docs.map((post) => (
          <article key={post.id} className="rounded-lg border p-6">
            {post.featuredImage && (
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <Link href={\`/blog/\${post.slug}\`} className="text-primary hover:underline">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}`}
            language="typescript"
            title="Blog Page Component"
          />
        </div>
      </section>

      <Separator />

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="font-medium mb-2">Learn PayloadCMS</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Dive deeper into PayloadCMS features and customization.
            </p>
            <Button size="sm" variant="outline" asChild>
              <Link href="https://payloadcms.com/docs" target="_blank">
                PayloadCMS Docs <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-medium mb-2">Customize Design</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Modify components and add your own styling.
            </p>
            <Button size="sm" variant="outline" asChild>
              <Link href="/docs/components">
                View Components <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tags */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {['Blog', 'Template', 'PayloadCMS', 'Next.js', 'Content Management', 'SEO'].map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}