import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Rocket, Layers } from 'lucide-react'
import Link from 'next/link'

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
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Examples</h1>
        <p className="text-xl text-muted-foreground">
          Real-world examples and templates to get you started with PayloadKit.
        </p>
      </div>

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
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Create a new project</h3>
                <pre className="bg-background p-3 rounded border">
                  <code>npx create-payloadkit@latest my-app</code>
                </pre>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Choose a template</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="bg-background p-3 rounded border">
                    <code className="text-sm">--template basic</code>
                    <p className="text-xs text-muted-foreground mt-1">Minimal setup</p>
                  </div>
                  <div className="bg-background p-3 rounded border">
                    <code className="text-sm">--template blog</code>
                    <p className="text-xs text-muted-foreground mt-1">Blog with posts</p>
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
              <Link href="https://github.com/j-corral/payloadkit" target="_blank">
                Contribute on GitHub <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}