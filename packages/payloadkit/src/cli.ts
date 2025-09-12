#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'
import { PAYLOADKIT_VERSION } from '@payloadkit/core'
import { addCommand } from './commands/add'
import { initCommand } from './commands/init'
import { listCommand } from './commands/list'

const program = new Command()

program
  .name('payloadkit')
  .description('CLI for PayloadKit - Build websites faster with PayloadCMS')
  .version(PAYLOADKIT_VERSION)

// ASCII Art Logo
console.log(chalk.cyan(`
 ╔═══════════════════════════════════════╗
 ║                                       ║
 ║   ██████╗  █████╗ ██╗   ██╗██╗        ║
 ║   ██╔══██╗██╔══██╗╚██╗ ██╔╝██║        ║
 ║   ██████╔╝███████║ ╚████╔╝ ██║        ║
 ║   ██╔═══╝ ██╔══██║  ╚██╔╝  ██║        ║
 ║   ██║     ██║  ██║   ██║   ███████╗   ║
 ║   ╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚══════╝   ║
 ║                                       ║
 ║            PayloadKit v${PAYLOADKIT_VERSION}            ║
 ║   Open source framework for PayloadCMS ║
 ║                                       ║
 ╚═══════════════════════════════════════╝
`))

// Commands
program.addCommand(addCommand)
program.addCommand(initCommand)
program.addCommand(listCommand)

// Parse arguments
program.parse()