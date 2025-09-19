import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft, Code, Rocket, Layers } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { Snippet } from '@/components/snippet'
import { CodeBlock } from '@/components/code-tabs'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Examples - PayloadKit',
  description: 'Real-world examples and templates to get you started with PayloadKit',
}

const examples = [
  {
    title: "Basic Setup",
    description: "Learn how to set up a basic PayloadCMS project with PayloadKit components",
    href: "/docs/examples/basic-setup",
    icon: Rocket,
    features: ["Project initialization", "First component", "Basic configuration"]
  },
  {
    title: "Blog Template", 
    description: "Complete blog setup with posts, categories, and SEO optimization",
    href: "/docs/examples/blog-template",
    icon: Layers,
    features: ["Blog structure", "Content management", "SEO setup"]
  }
]

export default function ExamplesPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Documentation
          </Link>
        </Button>
      </div>

      {/* Page Description */}
      <PageDescription
        title="Examples"
        description="Real-world examples and templates to get you started with PayloadKit quickly."
        category="guides"
        version="0.4.3"
        difficulty="beginner"
        estimatedTime="5 minutes"
        lastUpdated="September 2025"
      />

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Getting Started</h2>
          
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {examples.map((example) => {
              const Icon = example.icon
              return (
                <div key={example.title} className="rounded-lg border p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold">{example.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{example.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">What you'll learn:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {example.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <Button asChild>
                      <Link href={example.href}>
                        View Example <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Quick Start
          </h2>
          
          <p className="text-muted-foreground">
            The fastest way to get started is to create a new project with one of our templates:
          </p>
          
          <div className="rounded-lg border bg-muted/50 p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Create a new project</h3>
                <Snippet
                  command="bunx create-payloadkit@latest my-app"
                  title="Create PayloadKit Project"
                />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Choose a template</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4 space-y-2">
                    <CodeBlock
                      code="--template basic"
                      language="bash"
                    />
                    <p className="text-sm text-muted-foreground">Minimal setup with core components</p>
                  </div>
                  <div className="rounded-lg border p-4 space-y-2">
                    <CodeBlock
                      code="--template blog"
                      language="bash"
                    />
                    <p className="text-sm text-muted-foreground">Blog template with posts and categories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Community Examples
          </h2>
          
          <div className="rounded-lg border p-6 text-center">
            <Code className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">More Examples Coming Soon</h3>
            <p className="text-muted-foreground mb-4">
              We're working on more examples and templates. Check back soon or contribute your own!
            </p>
            <Button variant="outline" asChild>
              <Link href="https://github.com/payloadkit/payloadkit" target="_blank">
                Contribute on GitHub <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <Separator />

        {/* Available Templates */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Available Templates</h2>
          <p className="text-muted-foreground">
            Choose from our growing collection of templates designed for different use cases.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Rocket className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Blank Template</h3>
              </div>
              <p className="text-muted-foreground">
                Minimal setup with essential collections and components. Perfect starting point for any project.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium">Includes:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Users, Media, Pages collections
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    PostgreSQL database configuration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    shadcn/ui components
                  </li>
                </ul>
              </div>
              <Snippet
                command="bunx create-payloadkit my-app --template blank"
                title="Create Blank Template"
              />
            </div>

            <div className="rounded-lg border p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Layers className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Blog Template</h3>
                  <span className="text-sm text-muted-foreground">(Coming Soon)</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Complete blog setup with posts, categories, authors, and SEO optimization.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium">Will include:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Posts and Categories collections
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Author system and bio pages
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    SEO and social sharing
                  </li>
                </ul>
              </div>
              <Button variant="outline" disabled>
                Coming Soon
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Button variant="outline" asChild>
            <Link href="/docs/getting-started">
              Getting Started Guide
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/configuration">
              Configuration Guide
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/deployment">
              Deployment Guide
            </Link>
          </Button>
        </div>
      </section>

      {/* Tags */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {['Examples', 'Templates', 'Getting Started', 'Blank Template', 'Blog Template', 'Quick Start'].map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}