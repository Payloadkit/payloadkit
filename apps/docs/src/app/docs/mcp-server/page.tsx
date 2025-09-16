import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Bot, Code, Terminal, Zap } from 'lucide-react'
import { PageDescription } from '@/components/page-description'
import { CodeBlock } from '@/components/code-tabs'
import { Snippet } from '@/components/snippet'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'MCP Server - PayloadKit',
  description: 'Model Context Protocol server for PayloadKit - enables AI assistants to work with PayloadCMS components and registry',
}

export default function MCPServerPage() {
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
        title="MCP Server"
        description="Model Context Protocol server for PayloadKit - enables AI assistants to work with PayloadCMS components and registry"
        badge="AI Integration"
      />

      {/* Introduction */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Introduction</h2>
        <p className="text-muted-foreground">
          The PayloadKit MCP server is a Model Context Protocol server that enables AI assistants
          like Claude Code to work directly with the PayloadKit registry, generate components,
          and manage PayloadCMS projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Registry Management</CardTitle>
              <Code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Browse, search and add components from the registry
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Project Scaffolding</CardTitle>
              <Terminal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Initialize and validate PayloadKit projects
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Component Generation</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Generate blocks, collections and components
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Integration</CardTitle>
              <Bot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Native integration with Claude Code and other AIs
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertDescription>
            The MCP server is included in the PayloadKit monorepo and located in <code>packages/mcp-server</code>
          </AlertDescription>
        </Alert>

        <h3 className="text-xl font-semibold">Build the server</h3>
        <CodeBlock
          code={`# From PayloadKit project root
bun install
bun run --filter='./packages/mcp-server' build

# Or directly in the package
cd packages/mcp-server
bun install
bun run build`}
          language="bash"
          title="Installation"
        />

        <h3 className="text-xl font-semibold">Test the server</h3>
        <CodeBlock
          code={`# Test that the server works
node packages/mcp-server/dist/server.js --help

# With debug enabled
node packages/mcp-server/dist/server.js --debug --registry-path ./registry`}
          language="bash"
          title="Testing"
        />
      </div>

      <Separator />

      {/* Configuration Claude Code */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Claude Code Configuration</h2>
        <p className="text-muted-foreground">
          To use the MCP server with Claude Code, add the following configuration:
        </p>

        <CodeBlock
          code={`{
  "mcpServers": {
    "payloadkit": {
      "command": "node",
      "args": [
        "/path/to/payloadkit/packages/mcp-server/dist/server.js",
        "--registry-path",
        "/path/to/payloadkit/registry",
        "--project-path",
        "."
      ],
      "env": {
        "PAYLOADKIT_MCP_DEBUG": "false"
      }
    }
  }
}`}
          language="json"
          title="Configuration MCP Claude Code"
        />

        <Alert>
          <Bot className="h-4 w-4" />
          <AlertDescription>
            Replace <code>/path/to/payloadkit</code> with the absolute path to your PayloadKit installation.
          </AlertDescription>
        </Alert>
      </div>

      <Separator />

      {/* Available Tools */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Available Tools</h2>

        {/* Registry Tools */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Code className="h-5 w-5" />
            Registry Management
          </h3>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">list_registry_items</CardTitle>
                <CardDescription>List all registry items with optional filtering</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`{
  "category": "hero",           // Filter by category
  "tags": ["cta", "marketing"], // Filter by tags
  "type": "blocks",             // Item type
  "limit": 20                   // Result limit
}`}
                  language="json"
                  title="Parameters"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">search_registry</CardTitle>
                <CardDescription>Advanced search with fuzzy matching</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`{
  "query": "hero",     // Search term
  "type": "blocks",    // Optional type
  "limit": 10         // Result limit
}`}
                  language="json"
                  title="Parameters"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">add_registry_item</CardTitle>
                <CardDescription>Add a registry item to the project</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`{
  "name": "hero-block",        // Item name
  "type": "blocks",           // Item type
  "targetPath": "src/blocks"  // Target path (optional)
}`}
                  language="json"
                  title="Parameters"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Project Tools */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Project Management
          </h3>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">init_payloadkit_project</CardTitle>
                <CardDescription>Initialize PayloadKit in an existing project</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`{
  "projectPath": "/path/to/project", // Project path
  "force": false                     // Force reinitialization
}`}
                  language="json"
                  title="Parameters"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">validate_project_structure</CardTitle>
                <CardDescription>Validate project structure and configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`{
  "projectPath": "/path/to/project" // Project path (optional)
}`}
                  language="json"
                  title="Parameters"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Generator Tools */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Component Generation
          </h3>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">generate_block</CardTitle>
                <CardDescription>Generate a PayloadCMS block with advanced options</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`{
  "name": "custom-hero",        // Block name (kebab-case)
  "category": "hero",          // Block category
  "description": "Hero block", // Description
  "withIcon": true,           // Include icon field
  "layout": "columns"         // Layout template
}`}
                  language="json"
                  title="Parameters"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">generate_collection</CardTitle>
                <CardDescription>Generate a PayloadCMS collection</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`{
  "name": "BlogPosts",         // Collection name (PascalCase)
  "withSlug": true,           // Include slug field
  "withTimestamps": true,     // Include timestamps
  "withStatus": true          // Include draft/published status
}`}
                  language="json"
                  title="Parameters"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Separator />

      {/* Usage Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Usage Examples</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Search for hero components</h3>
            <CodeBlock
              code={`// In Claude Code, you can simply ask:
"Search for all available hero components in the registry"

// The MCP server will automatically execute:
// search_registry({ query: "hero", type: "blocks" })`}
              language="typescript"
              title="Natural search"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Add a block to the project</h3>
            <CodeBlock
              code={`// Natural request:
"Add the hero-block to my project"

// Equivalent to:
// add_registry_item({
//   name: "hero-block",
//   type: "blocks"
// })`}
              language="typescript"
              title="Component addition"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Generate a new collection</h3>
            <CodeBlock
              code={`// Natural request:
"Create a Products collection for e-commerce with slug and status"

// The server automatically generates:
// generate_collection({
//   name: "Products",
//   withSlug: true,
//   withStatus: true
// })`}
              language="typescript"
              title="Collection generation"
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* Configuration Options */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Configuration Options</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Command line arguments</h3>
          <div className="grid gap-3">
            <div className="flex gap-4">
              <Badge variant="outline" className="min-w-fit">--registry-path</Badge>
              <span className="text-sm text-muted-foreground">Path to PayloadKit registry</span>
            </div>
            <div className="flex gap-4">
              <Badge variant="outline" className="min-w-fit">--project-path</Badge>
              <span className="text-sm text-muted-foreground">Path to project directory</span>
            </div>
            <div className="flex gap-4">
              <Badge variant="outline" className="min-w-fit">--debug</Badge>
              <span className="text-sm text-muted-foreground">Enable debug logging</span>
            </div>
            <div className="flex gap-4">
              <Badge variant="outline" className="min-w-fit">--help</Badge>
              <span className="text-sm text-muted-foreground">Show help message</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold">Environment variables</h3>
          <div className="grid gap-3">
            <div className="flex gap-4">
              <Badge variant="outline" className="min-w-fit">PAYLOADKIT_MCP_DEBUG</Badge>
              <span className="text-sm text-muted-foreground">Enable debug logging (true/false)</span>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Architecture */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Architecture</h2>

        <CodeBlock
          code={`packages/mcp-server/
├── src/
│   ├── server.ts           # Main MCP server
│   ├── types/index.ts      # TypeScript types
│   ├── tools/              # MCP tools
│   │   ├── registry.ts     # Registry management
│   │   ├── project.ts      # Project operations
│   │   └── generator.ts    # Component generation
│   └── index.ts           # Public API
├── dist/                  # Compiled files
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md`}
          language="text"
          title="Project Structure"
        />

        <p className="text-muted-foreground">
          The MCP server integrates seamlessly with the PayloadKit ecosystem by reusing
          the same utilities and logic as the CLI, ensuring total consistency.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8">
        <Button variant="outline" asChild>
          <Link href="/docs/cli">
            <ArrowLeft className="mr-2 h-4 w-4" />
            CLI Usage
          </Link>
        </Button>
        <Button asChild>
          <Link href="/docs/examples">
            Examples
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}