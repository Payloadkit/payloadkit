import { Command } from 'commander'
import chalk from 'chalk'
import { Registry } from '../utils/registry'
import { Logger } from '../utils/logger'

export const listCommand = new Command()
  .name('list')
  .description('List available components from the registry')
  .option('-t, --type <type>', 'Component type (blocks, components, collections, globals)')
  .option('-c, --category <category>', 'Filter by category')
  .option('-s, --search <query>', 'Search components')
  .action(async (options) => {
    try {
      Logger.header('Available Components')

      const registry = await Registry.getRegistry()

      // List blocks
      if (!options.type || options.type === 'blocks') {
        const blocks = await Registry.listBlocks()
        
        if (blocks.length === 0) {
          Logger.info('No blocks available yet')
          Logger.info('Blocks will be added as the registry grows')
        } else {
          Logger.divider()
          console.log(chalk.bold.blue('📦 Blocks'))
          blocks.forEach(block => {
            console.log(`  ${chalk.cyan(block.name)} - ${block.description || 'No description'}`)
            if (block.category) {
              console.log(chalk.gray(`    Category: ${block.category}`))
            }
          })
        }
      }

      // List components
      if (!options.type || options.type === 'components') {
        const components = await Registry.listComponents()
        
        if (components.length === 0) {
          Logger.info('No components available yet')
        } else {
          Logger.divider()
          console.log(chalk.bold.green('🧩 Components'))
          components.forEach(component => {
            console.log(`  ${chalk.cyan(component.name)} - ${component.description || 'No description'}`)
          })
        }
      }

      // Show usage
      Logger.divider()
      Logger.info('Usage:')
      Logger.code('payloadkit add <component-name>')
      Logger.code('payloadkit add hero-block')

      if (options.search) {
        const results = await Registry.searchBlocks(options.search)
        Logger.divider()
        console.log(chalk.bold.yellow(`🔍 Search results for "${options.search}"`))
        if (results.length === 0) {
          Logger.info('No components found')
        } else {
          results.forEach(block => {
            console.log(`  ${chalk.cyan(block.name)} - ${block.description || 'No description'}`)
          })
        }
      }

    } catch (error) {
      Logger.error(`Failed to list components: ${error}`)
      process.exit(1)
    }
  })