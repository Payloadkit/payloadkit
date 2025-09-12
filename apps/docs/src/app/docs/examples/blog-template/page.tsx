import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Calendar, Users, Search } from 'lucide-react'
import Link from 'next/link'

export default function BlogTemplatePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Blog Template</h1>
        <p className="text-xl text-muted-foreground">
          Complete blog setup with posts, categories, SEO optimization, and content management.
        </p>
        <div className="flex gap-2">
          <Badge>Template</Badge>
          <Badge variant="secondary">Intermediate</Badge>
        </div>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            What's Included
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4">
              <Calendar className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Blog Posts</h3>
              <p className="text-sm text-muted-foreground">
                Complete post management with drafts, scheduling, and rich content.
              </p>
            </div>
            
            <div className="rounded-lg border p-4">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Categories</h3>
              <p className="text-sm text-muted-foreground">
                Organize content with nested categories and tags.
              </p>
            </div>
            
            <div className="rounded-lg border p-4">
              <Search className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">SEO Ready</h3>
              <p className="text-sm text-muted-foreground">
                Built-in SEO optimization with meta tags and structured data.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Features Overview
          </h2>
          
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Rich Text Editor</strong>
                <p className="text-sm text-muted-foreground">Lexical editor with media support</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Image Management</strong>
                <p className="text-sm text-muted-foreground">Featured images and media gallery</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Author Profiles</strong>
                <p className="text-sm text-muted-foreground">Multi-author blog support</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Comments System</strong>
                <p className="text-sm text-muted-foreground">Built-in comment management</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>RSS Feed</strong>
                <p className="text-sm text-muted-foreground">Automatic RSS generation</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <strong>Search & Filter</strong>
                <p className="text-sm text-muted-foreground">Full-text search capability</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Quick Start
          </h2>
          
          <p className="text-muted-foreground">
            Create a new blog project with the blog template:
          </p>
          
          <div className="rounded-lg border bg-muted/50 p-6">
            <pre className="bg-background p-3 rounded border">
              <code>npx create-payloadkit@latest my-blog --template blog</code>
            </pre>
          </div>
          
          <div className="rounded-lg border p-6 bg-blue-50 dark:bg-blue-950">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-blue-50 text-xs font-bold">
                i
              </div>
              <div>
                <h3 className="font-medium text-blue-800 dark:text-blue-200">Template Coming Soon</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  The blog template is currently in development. For now, you can create a basic project and add components manually.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Manual Setup
          </h2>
          
          <p className="text-muted-foreground">
            Until the template is ready, here's how to set up a blog manually:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">1. Create a basic project</h3>
              <div className="rounded-lg border bg-muted/50 p-4">
                <pre className="bg-background p-3 rounded border">
                  <code>npx create-payloadkit@latest my-blog</code>
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">2. Add blog components</h3>
              <div className="space-y-2">
                <div className="rounded-lg border bg-muted/50 p-4">
                  <pre className="bg-background p-3 rounded border">
                    <code>npx payloadkit add hero-block</code>
                  </pre>
                </div>
                <div className="rounded-lg border bg-muted/50 p-4">
                  <pre className="bg-background p-3 rounded border">
                    <code>npx payloadkit add call-to-action</code>
                  </pre>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">3. Create Posts collection</h3>
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border text-sm">
{`// src/collections/Posts/index.ts
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
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">4. Add Categories collection</h3>
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border text-sm">
{`// src/collections/Categories/index.ts
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
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Frontend Implementation
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Blog listing page</h3>
              <div className="rounded-lg border bg-muted/50 p-6">
                <pre className="bg-background p-3 rounded border text-sm">
{`// src/app/(frontend)/blog/page.tsx
export default async function BlogPage() {
  const posts = await fetch(\`\${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?limit=10&sort=-publishedAt\`)
    .then(res => res.json())
  
  return (
    <div className="container mx-auto px-4 py-8">
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
                </pre>
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
              <h3 className="font-medium mb-2">Learn PayloadCMS</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Dive deeper into PayloadCMS features and customization.
              </p>
              <Button size="sm" variant="outline" asChild>
                <Link href="https://payloadcms.com/docs" target="_blank">
                  PayloadCMS Docs <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Customize Design</h3>
              <p className="text-sm text-muted-foreground mb-3">
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
      </div>
    </div>
  )
}