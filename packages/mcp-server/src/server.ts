import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js'
import path from 'path'
import { fileURLToPath } from 'url'

import { registryTools, handleRegistryTool } from './tools/registry.js'
import { projectTools, handleProjectTool } from './tools/project.js'
import { generatorTools, handleGeneratorTool } from './tools/generator.js'
import type { PayloadKitMCPServerConfig } from './types/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class PayloadKitMCPServer {
  private server: Server
  private config: PayloadKitMCPServerConfig

  constructor(config: PayloadKitMCPServerConfig = {}) {
    this.config = {
      registryPath: config.registryPath || path.resolve(__dirname, '../../../../registry'),
      projectPath: config.projectPath || process.cwd(),
      enableLogging: config.enableLogging ?? false,
      ...config
    }

    this.server = new Server(
      {
        name: 'payloadkit-mcp-server',
        version: '0.1.0'
      },
      {
        capabilities: {
          tools: {}
        }
      }
    )

    this.setupHandlers()
  }

  private setupHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      const allTools = [
        ...registryTools,
        ...projectTools,
        ...generatorTools
      ]

      return { tools: allTools }
    })

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params

      try {
        this.log(`Executing tool: ${name}`, args)

        // Registry tools
        if (registryTools.some(tool => tool.name === name)) {
          const result = await handleRegistryTool(
            name,
            args || {},
            this.config.registryPath!,
            this.config.projectPath!
          )
          this.log(`Tool ${name} completed successfully`)
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(result, null, 2)
              }
            ]
          }
        }

        // Project tools
        if (projectTools.some(tool => tool.name === name)) {
          const result = await handleProjectTool(name, args || {})
          this.log(`Tool ${name} completed successfully`)
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(result, null, 2)
              }
            ]
          }
        }

        // Generator tools
        if (generatorTools.some(tool => tool.name === name)) {
          const result = await handleGeneratorTool(
            name,
            args || {},
            this.config.projectPath!
          )
          this.log(`Tool ${name} completed successfully`)
          return {
            content: [
              {
                type: 'text',
                text: JSON.stringify(result, null, 2)
              }
            ]
          }
        }

        throw new Error(`Unknown tool: ${name}`)

      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        this.log(`Tool ${name} failed:`, errorMessage)

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                error: true,
                message: errorMessage,
                tool: name
              }, null, 2)
            }
          ],
          isError: true
        }
      }
    })
  }

  private log(message: string, data?: any) {
    if (this.config.enableLogging) {
      console.error(`[PayloadKit MCP] ${message}`, data ? JSON.stringify(data, null, 2) : '')
    }
  }

  async start() {
    const transport = new StdioServerTransport()
    await this.server.connect(transport)

    this.log('PayloadKit MCP Server started', {
      registryPath: this.config.registryPath,
      projectPath: this.config.projectPath
    })
  }
}

// CLI entry point
async function main() {
  try {
    const config: PayloadKitMCPServerConfig = {
      enableLogging: process.env.PAYLOADKIT_MCP_DEBUG === 'true'
    }

    // Parse CLI arguments
    const args = process.argv.slice(2)
    for (let i = 0; i < args.length; i++) {
      const arg = args[i]
      const nextArg = args[i + 1]

      switch (arg) {
        case '--registry-path':
          config.registryPath = nextArg
          i++
          break
        case '--project-path':
          config.projectPath = nextArg
          i++
          break
        case '--debug':
          config.enableLogging = true
          break
        case '--help':
          console.log(`
PayloadKit MCP Server

Usage: payloadkit-mcp [options]

Options:
  --registry-path <path>    Path to PayloadKit registry (default: auto-detect)
  --project-path <path>     Path to project directory (default: current directory)
  --debug                   Enable debug logging
  --help                    Show this help message

Environment Variables:
  PAYLOADKIT_MCP_DEBUG      Set to 'true' to enable debug logging

Examples:
  payloadkit-mcp
  payloadkit-mcp --project-path /path/to/project
  payloadkit-mcp --registry-path /custom/registry --debug
          `)
          process.exit(0)
      }
    }

    const server = new PayloadKitMCPServer(config)
    await server.start()

  } catch (error) {
    console.error('Failed to start PayloadKit MCP Server:', error)
    process.exit(1)
  }
}

// Start server if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export { PayloadKitMCPServer }
export default PayloadKitMCPServer