import fs from 'fs-extra'
import path from 'path'
import { glob } from 'fast-glob'
import { Logger } from './logger'

/**
 * File operations utilities
 */
export class FileOperations {
  
  /**
   * Check if a file or directory exists
   */
  static async exists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath)
      return true
    } catch {
      return false
    }
  }

  /**
   * Copy a file from source to destination
   */
  static async copyFile(src: string, dest: string, overwrite = false): Promise<void> {
    if (!overwrite && await this.exists(dest)) {
      Logger.warn(`File already exists: ${dest}`)
      return
    }

    await fs.ensureDir(path.dirname(dest))
    await fs.copy(src, dest, { overwrite })
    Logger.success(`Copied: ${path.basename(dest)}`)
  }

  /**
   * Copy multiple files with glob pattern
   */
  static async copyFiles(pattern: string, sourceDir: string, destDir: string, overwrite = false): Promise<string[]> {
    const files = await glob(pattern, { cwd: sourceDir })
    const copiedFiles: string[] = []

    for (const file of files) {
      const srcPath = path.join(sourceDir, file)
      const destPath = path.join(destDir, file)
      
      if (!overwrite && await this.exists(destPath)) {
        Logger.warn(`Skipping existing file: ${file}`)
        continue
      }

      await this.copyFile(srcPath, destPath, overwrite)
      copiedFiles.push(file)
    }

    return copiedFiles
  }

  /**
   * Read and parse a JSON file
   */
  static async readJson<T>(filePath: string): Promise<T | null> {
    try {
      const content = await fs.readFile(filePath, 'utf-8')
      return JSON.parse(content) as T
    } catch {
      return null
    }
  }

  /**
   * Write data to a JSON file
   */
  static async writeJson(filePath: string, data: any, pretty = true): Promise<void> {
    await fs.ensureDir(path.dirname(filePath))
    const content = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data)
    await fs.writeFile(filePath, content, 'utf-8')
  }

  /**
   * Read a text file
   */
  static async readFile(filePath: string): Promise<string | null> {
    try {
      return await fs.readFile(filePath, 'utf-8')
    } catch {
      return null
    }
  }

  /**
   * Write content to a file
   */
  static async writeFile(filePath: string, content: string): Promise<void> {
    await fs.ensureDir(path.dirname(filePath))
    await fs.writeFile(filePath, content, 'utf-8')
  }

  /**
   * Find files matching a pattern
   */
  static async findFiles(pattern: string, cwd?: string): Promise<string[]> {
    return glob(pattern, { cwd })
  }

  /**
   * Get directory contents
   */
  static async readDir(dirPath: string): Promise<string[]> {
    try {
      return await fs.readdir(dirPath)
    } catch {
      return []
    }
  }

  /**
   * Remove a file or directory
   */
  static async remove(filePath: string): Promise<void> {
    if (await this.exists(filePath)) {
      await fs.remove(filePath)
      Logger.success(`Removed: ${path.basename(filePath)}`)
    }
  }

  /**
   * Process template files (replace variables)
   */
  static async processTemplate(
    templatePath: string, 
    outputPath: string, 
    variables: Record<string, string>
  ): Promise<void> {
    let content = await this.readFile(templatePath)
    if (!content) {
      throw new Error(`Could not read template: ${templatePath}`)
    }

    // Replace variables in the format {{variableName}}
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`{{${key}}}`, 'g')
      content = content.replace(regex, value)
    }

    await this.writeFile(outputPath, content)
  }

  /**
   * Process multiple template files
   */
  static async processTemplates(
    templateDir: string,
    outputDir: string,
    variables: Record<string, string>
  ): Promise<void> {
    const files = await this.findFiles('**/*', templateDir)
    
    for (const file of files) {
      const templatePath = path.join(templateDir, file)
      const outputPath = path.join(outputDir, file.replace('.template', ''))
      
      const stats = await fs.stat(templatePath)
      if (stats.isFile()) {
        if (file.endsWith('.template')) {
          await this.processTemplate(templatePath, outputPath, variables)
        } else {
          await this.copyFile(templatePath, outputPath)
        }
      }
    }
  }
}