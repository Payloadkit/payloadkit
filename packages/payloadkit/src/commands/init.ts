import { Command } from 'commander'
import prompts from 'prompts'
import { Project } from '../utils/project'
import { Logger } from '../utils/logger'

export const initCommand = new Command()
  .name('init')
  .description('Initialize PayloadKit in your project')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .action(async (options) => {
    try {
      Logger.header('Initialize PayloadKit')

      // Check if it's a Payload project
      const projectInfo = await Project.getProjectInfo()
      
      if (!projectInfo.isPayloadProject) {
        Logger.error('This is not a PayloadCMS project')
        Logger.info('Make sure you have "payload" in your dependencies')
        process.exit(1)
      }

      if (projectInfo.hasPayloadKit) {
        Logger.warn('PayloadKit is already initialized in this project')
        return
      }

      Logger.info(`Project: ${projectInfo.projectName}`)
      Logger.info(`Payload version: ${projectInfo.payloadVersion}`)

      let proceed = true

      if (!options.yes) {
        const response = await prompts({
          type: 'confirm',
          name: 'proceed',
          message: 'Initialize PayloadKit in this project?',
          initial: true
        })
        proceed = response.proceed
      }

      if (!proceed) {
        Logger.info('Initialization cancelled')
        return
      }

      // Initialize PayloadKit
      await Project.initializePayloadKit()

      Logger.divider()
      Logger.success('PayloadKit initialized successfully!')
      Logger.info('You can now use:')
      Logger.code('payloadkit add <component>')
      Logger.code('payloadkit list')

    } catch (error) {
      Logger.error(`Initialization failed: ${error}`)
      process.exit(1)
    }
  })