import { Command } from 'commander'
import prompts from 'prompts'
import { Registry } from '../utils/registry'
import { Project } from '../utils/project'
import { FileOperations } from '../utils/file-operations'
import { Logger } from '../utils/logger'
import path from 'path'

export const addCommand = new Command()
  .name('add')
  .description('Add a component to your project')
  .argument('<name>', 'Component name to add')
  .option('-f, --force', 'Overwrite existing components')
  .option('-p, --path <path>', 'Custom installation path')
  .action(async (componentName: string, options) => {
    try {
      Logger.header(`Adding ${componentName}`)

      // Check if it's a Payload project
      const projectInfo = await Project.getProjectInfo()
      
      if (!projectInfo.isPayloadProject) {
        Logger.error('This is not a PayloadCMS project')
        Logger.info('Run this command in a PayloadCMS project directory')
        process.exit(1)
      }

      // Initialize PayloadKit if needed
      if (!projectInfo.hasPayloadKit) {
        Logger.info('PayloadKit not initialized, initializing...')
        await Project.initializePayloadKit()
      }

      // Try to find the component in different types
      const block = await Registry.getBlock(componentName)
      const component = await Registry.getComponent(componentName)

      if (!block && !component) {
        Logger.error(`Component "${componentName}" not found`)
        Logger.info('Available components:')
        
        const blocks = await Registry.listBlocks()
        const components = await Registry.listComponents()
        
        blocks.forEach(b => Logger.info(`  ${b.name} (block)`))
        components.forEach(c => Logger.info(`  ${c.name} (component)`))
        
        process.exit(1)
      }

      const targetComponent = block || component
      const componentType = block ? 'blocks' : 'components'

      // Check if component already exists
      const exists = await Project.componentExists(componentName, componentType)
      
      if (exists && !options.force) {
        const response = await prompts({
          type: 'confirm',
          name: 'overwrite',
          message: `${componentName} already exists. Overwrite?`,
          initial: false
        })

        if (!response.overwrite) {
          Logger.info('Installation cancelled')
          return
        }
      }

      // Determine installation path
      const installPath = options.path 
        ? path.resolve(options.path)
        : await Project.resolveComponentPath(componentType)

      const componentPath = path.join(installPath, componentName)

      Logger.startSpinner(`Installing ${componentName}...`)

      // For now, create a placeholder since we don't have real components yet
      await FileOperations.writeFile(
        path.join(componentPath, 'index.ts'), 
        `// ${componentName} component\n// This is a placeholder - real component will be implemented\n\nexport default function ${componentName}() {\n  return null\n}\n`
      )

      if (targetComponent) {
        // Create component info file
        await FileOperations.writeJson(
          path.join(componentPath, 'payloadkit.json'),
          {
            name: targetComponent.name,
            description: targetComponent.description,
            installedAt: new Date().toISOString(),
            version: '0.0.1'
          }
        )
      }

      Logger.stopSpinner(true, `${componentName} installed successfully!`)

      // Show next steps
      Logger.divider()
      Logger.success('Component added to your project')
      Logger.info('Location:')
      Logger.code(componentPath)
      Logger.info('You can now import and use this component in your project.')

    } catch (error) {
      Logger.stopSpinner(false)
      Logger.error(`Failed to add component: ${error}`)
      process.exit(1)
    }
  })