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
  .option('-y, --yes', 'Skip confirmation prompts')
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
      const global = await Registry.getGlobal(componentName)
      const collection = await Registry.getCollection(componentName)
      const plugin = await Registry.getPlugin(componentName)

      if (!block && !component && !global && !collection && !plugin) {
        Logger.error(`Component "${componentName}" not found`)
        Logger.info('Available components:')

        const blocks = await Registry.listBlocks()
        const components = await Registry.listComponents()
        const globals = await Registry.listGlobals()
        const collections = await Registry.listCollections()
        const plugins = await Registry.listPlugins()

        blocks.forEach(b => Logger.info(`  ${b.name} (block)`))
        components.forEach(c => Logger.info(`  ${c.name} (component)`))
        globals.forEach(g => Logger.info(`  ${g.name} (global)`))
        collections.forEach(c => Logger.info(`  ${c.name} (collection)`))
        plugins.forEach(p => Logger.info(`  ${p.name} (plugin)`))

        process.exit(1)
      }

      const targetComponent = block || component || global || collection || plugin
      const componentType = block ? 'blocks' :
                           component ? 'components' :
                           global ? 'globals' :
                           collection ? 'collections' : 'plugins'

      // Use the original component name from registry (preserves case)
      const actualComponentName = targetComponent?.name || componentName

      // Check if component already exists
      const exists = await Project.componentExists(actualComponentName, componentType)

      if (exists && !options.force && !options.yes) {
        const response = await prompts({
          type: 'confirm',
          name: 'overwrite',
          message: `${actualComponentName} already exists. Overwrite?`,
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

      const componentPath = path.join(installPath, actualComponentName)

      const componentTypeLabel = componentType.slice(0, -1) // Remove 's' from plural
      Logger.startSpinner(`Installing ${actualComponentName} (${componentTypeLabel})...`)

      try {
        // Check if the component exists in local registry
        let sourcePath: string = ''
        let componentExists = false

        if (componentType === 'blocks') {
          componentExists = await Registry.blockExists(actualComponentName)
          sourcePath = Registry.getBlockSourcePath(actualComponentName)
        } else if (componentType === 'components') {
          sourcePath = Registry.getComponentSourcePath(actualComponentName)
          componentExists = await FileOperations.exists(sourcePath)
        } else if (componentType === 'globals') {
          sourcePath = Registry.getGlobalSourcePath(actualComponentName)
          componentExists = await FileOperations.exists(sourcePath)
        } else if (componentType === 'collections') {
          sourcePath = Registry.getCollectionSourcePath(actualComponentName)
          componentExists = await FileOperations.exists(sourcePath)
        } else if (componentType === 'plugins') {
          sourcePath = Registry.getPluginSourcePath(actualComponentName)
          componentExists = await FileOperations.exists(sourcePath)
        }

        if (componentExists) {
          // Copy real component files from registry

          // Copy all files from the component directory
          const files = await FileOperations.findFiles('**/*', sourcePath)
          Logger.updateSpinner(`Copying ${files.length} files...`)

          for (const file of files) {
            const srcFile = path.join(sourcePath, file)
            const destFile = path.join(componentPath, file)

            // Skip the payloadkit.json metadata file
            if (file === 'payloadkit.json') continue

            await FileOperations.copyFile(srcFile, destFile, options.force)
          }

          // Special handling for plugins
          if (componentType === 'plugins' && plugin) {
            Logger.updateSpinner('Plugin copied successfully')

            // Show plugin-specific instructions
            Logger.info(`Plugin ${actualComponentName} installed successfully!`)
            Logger.info('Next steps:')
            Logger.info('1. Install required dependencies:')
            if ((plugin as any).dependencies && (plugin as any).dependencies.length > 0) {
              Logger.code(`bun add ${(plugin as any).dependencies.join(' ')}`)
            }
            if ((plugin as any).devDependencies && (plugin as any).devDependencies.length > 0) {
              Logger.code(`bun add -D ${(plugin as any).devDependencies.join(' ')}`)
            }
            Logger.info('2. Add the plugin to your payload.config.ts:')
            Logger.code(`import { ${componentName}Plugin } from './src/plugins/${componentName}'`)
            Logger.code(`plugins: [${componentName}Plugin({ /* config */ })]`)

            if ((plugin as any).features && (plugin as any).features.length > 0) {
              Logger.info('3. Features included:')
              ;(plugin as any).features.forEach((feature: string) => Logger.info(`   - ${feature}`))
            }
          }

          // Create installation metadata
          if (targetComponent) {
            await FileOperations.writeJson(
              path.join(componentPath, '.payloadkit.json'),
              {
                name: targetComponent.name,
                description: targetComponent.description,
                installedAt: new Date().toISOString(),
                version: targetComponent.version || '0.0.1',
                source: 'registry'
              }
            )
          }
        } else {
          // Fallback: create placeholder
          await FileOperations.writeFile(
            path.join(componentPath, 'index.ts'), 
            `// ${actualComponentName} component\n// This component is not yet available in the registry\n\nexport default function ${actualComponentName}() {\n  return null\n}\n`
          )
          
          Logger.warn(`Component files not found in registry, created placeholder`)
        }
      } catch (copyError) {
        Logger.warn(`Failed to copy component files: ${copyError}`)
        // Create fallback placeholder
        await FileOperations.writeFile(
          path.join(componentPath, 'index.ts'), 
          `// ${actualComponentName} component\n// Error copying files: ${copyError}\n\nexport default function ${actualComponentName}() {\n  return null\n}\n`
        )
      }

      Logger.stopSpinner(true, `${actualComponentName} (${componentTypeLabel}) installed successfully!`)

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