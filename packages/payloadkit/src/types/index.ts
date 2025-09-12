/**
 * CLI-specific types
 */

export interface CLIOptions {
  force?: boolean
  yes?: boolean
  path?: string
  type?: string
  category?: string
  search?: string
}

export interface AddCommandOptions {
  force?: boolean
  path?: string
}

export interface InitCommandOptions {
  yes?: boolean
}