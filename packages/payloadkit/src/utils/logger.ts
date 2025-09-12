import chalk from 'chalk'
import ora, { type Ora } from 'ora'

export class Logger {
  private static spinner: Ora | null = null

  static info(message: string) {
    console.log(chalk.blue('ℹ'), message)
  }

  static success(message: string) {
    console.log(chalk.green('✓'), message)
  }

  static warn(message: string) {
    console.log(chalk.yellow('⚠'), message)
  }

  static error(message: string) {
    console.log(chalk.red('✗'), message)
  }

  static startSpinner(text: string): Ora {
    this.spinner = ora(text).start()
    return this.spinner
  }

  static updateSpinner(text: string) {
    if (this.spinner) {
      this.spinner.text = text
    }
  }

  static stopSpinner(success = true, message?: string) {
    if (this.spinner) {
      if (success) {
        this.spinner.succeed(message)
      } else {
        this.spinner.fail(message)
      }
      this.spinner = null
    }
  }

  static step(step: number, total: number, message: string) {
    const prefix = chalk.cyan(`[${step}/${total}]`)
    console.log(`${prefix} ${message}`)
  }

  static divider() {
    console.log(chalk.gray('─'.repeat(50)))
  }

  static header(title: string) {
    console.log()
    console.log(chalk.bold.cyan(title))
    console.log(chalk.gray('─'.repeat(title.length)))
  }

  static code(code: string) {
    console.log(chalk.gray(`  ${code}`))
  }

  static list(items: string[]) {
    items.forEach(item => {
      console.log(chalk.gray('  •'), item)
    })
  }
}

// Convenience exports
export const { info, success, warn, error, startSpinner, stopSpinner } = Logger