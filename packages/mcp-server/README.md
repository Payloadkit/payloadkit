# PayloadKit MCP Server

Model Context Protocol server for PayloadKit - enables AI assistants to work with PayloadCMS components and registry.

## Features

### Registry Management
- **List Registry Items** - Browse blocks, collections, components by category
- **Search Registry** - Find components with fuzzy matching
- **Get Item Details** - View component metadata and files
- **View Source Code** - Inspect component implementation
- **Add Components** - Copy registry items to your project

### Project Scaffolding
- **Initialize Projects** - Set up PayloadKit in existing projects
- **Validate Structure** - Check project configuration
- **Create from Templates** - Generate new projects from templates
- **Analyze Dependencies** - Identify missing requirements

### Component Generation
- **Generate Blocks** - Create PayloadCMS blocks with templates
- **Generate Collections** - Create collections with common patterns
- **Generate Components** - Create React components
- **Generate Globals** - Create PayloadCMS globals

## Installation

```bash
# Install in your PayloadKit workspace
cd packages/mcp-server
bun install
bun build

# Or install globally
npm install -g @payloadkit/mcp-server
```

## Usage

### With Claude Code

Add to your Claude Code MCP configuration:

```json
{
  "mcpServers": {
    "payloadkit": {
      "command": "payloadkit-mcp",
      "args": ["--project-path", "/path/to/your/project"]
    }
  }
}
```

### Standalone

```bash
# Start the server
payloadkit-mcp

# With custom paths
payloadkit-mcp --registry-path /custom/registry --project-path /my/project

# With debug logging
payloadkit-mcp --debug
```

## Configuration

### Environment Variables

- `PAYLOADKIT_MCP_DEBUG` - Enable debug logging (true/false)

### CLI Options

- `--registry-path <path>` - Path to PayloadKit registry
- `--project-path <path>` - Path to project directory
- `--debug` - Enable debug logging
- `--help` - Show help message

## Available Tools

### Registry Tools

#### `list_registry_items`
List all available registry items with optional filtering.

```typescript
{
  category?: string,      // Filter by category
  tags?: string[],        // Filter by tags
  type?: 'blocks' | 'collections' | 'components' | 'globals',
  limit?: number          // Max results (default: 20)
}
```

#### `search_registry`
Search registry items by name, description, or tags.

```typescript
{
  query: string,          // Search query
  type?: string,          // Filter by type
  limit?: number          // Max results (default: 10)
}
```

#### `get_item_details`
Get detailed information about a specific registry item.

```typescript
{
  name: string,           // Item name
  type: string            // Item type
}
```

#### `view_item_source`
View source code of a specific file in a registry item.

```typescript
{
  name: string,           // Item name
  type: string,           // Item type
  filename: string        // File to view
}
```

#### `add_registry_item`
Add a registry item to the current project.

```typescript
{
  name: string,           // Item name
  type: string,           // Item type
  targetPath?: string     // Optional target path
}
```

### Project Tools

#### `init_payloadkit_project`
Initialize PayloadKit in an existing project.

```typescript
{
  projectPath: string,    // Project directory
  force?: boolean         // Force reinitialize
}
```

#### `validate_project_structure`
Validate project structure and configuration.

```typescript
{
  projectPath?: string    // Project directory (default: current)
}
```

#### `create_project_from_template`
Create a new project from a template.

```typescript
{
  projectPath: string,    // New project path
  template?: string,      // Template name (default: 'blank')
  packageManager?: string, // Package manager (default: 'bun')
  install?: boolean,      // Install dependencies
  git?: boolean           // Initialize git
}
```

#### `analyze_project_dependencies`
Analyze project dependencies and requirements.

```typescript
{
  projectPath: string     // Project directory
}
```

### Generator Tools

#### `generate_component`
Generate a new PayloadKit component.

```typescript
{
  name: string,           // Component name
  type: 'block' | 'collection' | 'component' | 'global',
  category?: string,      // Component category
  description?: string,   // Component description
  dependencies?: string[], // NPM dependencies
  registryDependencies?: string[] // Registry dependencies
}
```

#### `generate_block`
Generate a PayloadCMS block with advanced options.

```typescript
{
  name: string,           // Block name (kebab-case)
  category?: string,      // Block category
  description?: string,   // Block description
  withIcon?: boolean,     // Include icon field
  layout?: 'simple' | 'columns' | 'grid' // Layout template
}
```

#### `generate_collection`
Generate a PayloadCMS collection.

```typescript
{
  name: string,           // Collection name (PascalCase)
  slug?: string,          // URL slug
  withSlug?: boolean,     // Include slug field
  withTimestamps?: boolean, // Include timestamps
  withStatus?: boolean    // Include status field
}
```

## Examples

### List all blocks
```typescript
await callTool('list_registry_items', {
  type: 'blocks',
  limit: 10
})
```

### Search for hero components
```typescript
await callTool('search_registry', {
  query: 'hero',
  type: 'blocks'
})
```

### Add a hero block to your project
```typescript
await callTool('add_registry_item', {
  name: 'hero-block',
  type: 'blocks'
})
```

### Generate a new blog collection
```typescript
await callTool('generate_collection', {
  name: 'BlogPosts',
  withSlug: true,
  withTimestamps: true
})
```

### Initialize PayloadKit in a project
```typescript
await callTool('init_payloadkit_project', {
  projectPath: '/path/to/project'
})
```

## Development

```bash
# Development mode
bun dev

# Build
bun build

# Type checking
bun typecheck

# Test the server
node dist/server.js --help
```

## Architecture

```
src/
├── server.ts           # Main MCP server
├── types/              # TypeScript types
├── tools/              # MCP tools
│   ├── registry.ts     # Registry management
│   ├── project.ts      # Project operations
│   └── generator.ts    # Component generation
└── index.ts           # Public API
```

## Integration with PayloadKit

The MCP server integrates seamlessly with the PayloadKit ecosystem:

- **Registry Access** - Direct access to the local PayloadKit registry
- **CLI Integration** - Reuses PayloadKit CLI utilities and functions
- **Project Detection** - Automatically detects PayloadKit projects
- **Component Copying** - Uses the same copying logic as the CLI

## License

MIT