#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/cli.ts
var import_commander4 = require("commander");
var import_chalk3 = __toESM(require("chalk"));
var import_core = require("@payloadkit/core");

// src/commands/add.ts
var import_commander = require("commander");
var import_prompts = __toESM(require("prompts"));

// src/utils/logger.ts
var import_chalk = __toESM(require("chalk"));
var import_ora = __toESM(require("ora"));
var Logger = class {
  static spinner = null;
  static info(message) {
    console.log(import_chalk.default.blue("\u2139"), message);
  }
  static success(message) {
    console.log(import_chalk.default.green("\u2713"), message);
  }
  static warn(message) {
    console.log(import_chalk.default.yellow("\u26A0"), message);
  }
  static error(message) {
    console.log(import_chalk.default.red("\u2717"), message);
  }
  static startSpinner(text) {
    this.spinner = (0, import_ora.default)(text).start();
    return this.spinner;
  }
  static updateSpinner(text) {
    if (this.spinner) {
      this.spinner.text = text;
    }
  }
  static stopSpinner(success2 = true, message) {
    if (this.spinner) {
      if (success2) {
        this.spinner.succeed(message);
      } else {
        this.spinner.fail(message);
      }
      this.spinner = null;
    }
  }
  static step(step, total, message) {
    const prefix = import_chalk.default.cyan(`[${step}/${total}]`);
    console.log(`${prefix} ${message}`);
  }
  static divider() {
    console.log(import_chalk.default.gray("\u2500".repeat(50)));
  }
  static header(title) {
    console.log();
    console.log(import_chalk.default.bold.cyan(title));
    console.log(import_chalk.default.gray("\u2500".repeat(title.length)));
  }
  static code(code) {
    console.log(import_chalk.default.gray(`  ${code}`));
  }
  static list(items) {
    items.forEach((item) => {
      console.log(import_chalk.default.gray("  \u2022"), item);
    });
  }
};
var { info, success, warn, error, startSpinner, stopSpinner } = Logger;

// src/utils/registry.ts
var Registry = class {
  static cache = null;
  static CACHE_TTL = 5 * 60 * 1e3;
  // 5 minutes
  /**
   * Fetch the registry data
   */
  static async getRegistry() {
    if (this.cache) {
      return this.cache;
    }
    try {
      Logger.startSpinner("Fetching registry...");
      const mockRegistry = {
        version: "0.0.1",
        blocks: {},
        collections: {},
        globals: {},
        components: {}
      };
      this.cache = mockRegistry;
      Logger.stopSpinner(true, "Registry loaded");
      return mockRegistry;
    } catch (error2) {
      Logger.stopSpinner(false, "Failed to fetch registry");
      throw new Error(`Failed to fetch registry: ${error2}`);
    }
  }
  /**
   * Get a specific block
   */
  static async getBlock(name) {
    const registry = await this.getRegistry();
    return registry.blocks[name] || null;
  }
  /**
   * Get a specific component
   */
  static async getComponent(name) {
    const registry = await this.getRegistry();
    return registry.components[name] || null;
  }
  /**
   * List all available blocks
   */
  static async listBlocks() {
    const registry = await this.getRegistry();
    return Object.values(registry.blocks);
  }
  /**
   * List all available components
   */
  static async listComponents() {
    const registry = await this.getRegistry();
    return Object.values(registry.components);
  }
  /**
   * Search blocks by category or name
   */
  static async searchBlocks(query) {
    const blocks = await this.listBlocks();
    const lowerQuery = query.toLowerCase();
    return blocks.filter(
      (block) => block.name.toLowerCase().includes(lowerQuery) || block.description?.toLowerCase().includes(lowerQuery) || block.category?.toLowerCase().includes(lowerQuery) || block.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  }
  /**
   * Clear cache
   */
  static clearCache() {
    this.cache = null;
  }
};

// src/utils/project.ts
var import_path2 = __toESM(require("path"));

// src/utils/file-operations.ts
var import_fs_extra = __toESM(require("fs-extra"));
var import_path = __toESM(require("path"));
var import_fast_glob = require("fast-glob");
var FileOperations = class {
  /**
   * Check if a file or directory exists
   */
  static async exists(filePath) {
    try {
      await import_fs_extra.default.access(filePath);
      return true;
    } catch {
      return false;
    }
  }
  /**
   * Copy a file from source to destination
   */
  static async copyFile(src, dest, overwrite = false) {
    if (!overwrite && await this.exists(dest)) {
      Logger.warn(`File already exists: ${dest}`);
      return;
    }
    await import_fs_extra.default.ensureDir(import_path.default.dirname(dest));
    await import_fs_extra.default.copy(src, dest, { overwrite });
    Logger.success(`Copied: ${import_path.default.basename(dest)}`);
  }
  /**
   * Copy multiple files with glob pattern
   */
  static async copyFiles(pattern, sourceDir, destDir, overwrite = false) {
    const files = await (0, import_fast_glob.glob)(pattern, { cwd: sourceDir });
    const copiedFiles = [];
    for (const file of files) {
      const srcPath = import_path.default.join(sourceDir, file);
      const destPath = import_path.default.join(destDir, file);
      if (!overwrite && await this.exists(destPath)) {
        Logger.warn(`Skipping existing file: ${file}`);
        continue;
      }
      await this.copyFile(srcPath, destPath, overwrite);
      copiedFiles.push(file);
    }
    return copiedFiles;
  }
  /**
   * Read and parse a JSON file
   */
  static async readJson(filePath) {
    try {
      const content = await import_fs_extra.default.readFile(filePath, "utf-8");
      return JSON.parse(content);
    } catch {
      return null;
    }
  }
  /**
   * Write data to a JSON file
   */
  static async writeJson(filePath, data, pretty = true) {
    await import_fs_extra.default.ensureDir(import_path.default.dirname(filePath));
    const content = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
    await import_fs_extra.default.writeFile(filePath, content, "utf-8");
  }
  /**
   * Read a text file
   */
  static async readFile(filePath) {
    try {
      return await import_fs_extra.default.readFile(filePath, "utf-8");
    } catch {
      return null;
    }
  }
  /**
   * Write content to a file
   */
  static async writeFile(filePath, content) {
    await import_fs_extra.default.ensureDir(import_path.default.dirname(filePath));
    await import_fs_extra.default.writeFile(filePath, content, "utf-8");
  }
  /**
   * Find files matching a pattern
   */
  static async findFiles(pattern, cwd) {
    return (0, import_fast_glob.glob)(pattern, { cwd });
  }
  /**
   * Get directory contents
   */
  static async readDir(dirPath) {
    try {
      return await import_fs_extra.default.readdir(dirPath);
    } catch {
      return [];
    }
  }
  /**
   * Remove a file or directory
   */
  static async remove(filePath) {
    if (await this.exists(filePath)) {
      await import_fs_extra.default.remove(filePath);
      Logger.success(`Removed: ${import_path.default.basename(filePath)}`);
    }
  }
  /**
   * Process template files (replace variables)
   */
  static async processTemplate(templatePath, outputPath, variables) {
    let content = await this.readFile(templatePath);
    if (!content) {
      throw new Error(`Could not read template: ${templatePath}`);
    }
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`{{${key}}}`, "g");
      content = content.replace(regex, value);
    }
    await this.writeFile(outputPath, content);
  }
  /**
   * Process multiple template files
   */
  static async processTemplates(templateDir, outputDir, variables) {
    const files = await this.findFiles("**/*", templateDir);
    for (const file of files) {
      const templatePath = import_path.default.join(templateDir, file);
      const outputPath = import_path.default.join(outputDir, file.replace(".template", ""));
      const stats = await import_fs_extra.default.stat(templatePath);
      if (stats.isFile()) {
        if (file.endsWith(".template")) {
          await this.processTemplate(templatePath, outputPath, variables);
        } else {
          await this.copyFile(templatePath, outputPath);
        }
      }
    }
  }
};

// src/utils/project.ts
var Project = class {
  /**
   * Check if current directory is a PayloadCMS project
   */
  static async isPayloadProject(cwd = process.cwd()) {
    const packageJsonPath = import_path2.default.join(cwd, "package.json");
    const packageJson = await FileOperations.readJson(packageJsonPath);
    if (!packageJson) {
      return false;
    }
    const deps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    };
    return "payload" in deps;
  }
  /**
   * Check if current directory has PayloadKit components
   */
  static async hasPayloadKitComponents(cwd = process.cwd()) {
    const payloadKitConfigPath = import_path2.default.join(cwd, "payloadkit.json");
    return FileOperations.exists(payloadKitConfigPath);
  }
  /**
   * Get project info
   */
  static async getProjectInfo(cwd = process.cwd()) {
    const packageJsonPath = import_path2.default.join(cwd, "package.json");
    const packageJson = await FileOperations.readJson(packageJsonPath);
    const isPayloadProject = await this.isPayloadProject(cwd);
    const hasPayloadKit = await this.hasPayloadKitComponents(cwd);
    return {
      isPayloadProject,
      hasPayloadKit,
      projectName: packageJson?.name,
      payloadVersion: packageJson?.dependencies?.payload || packageJson?.devDependencies?.payload
    };
  }
  /**
   * Initialize PayloadKit in a project
   */
  static async initializePayloadKit(cwd = process.cwd()) {
    const configPath = import_path2.default.join(cwd, "payloadkit.json");
    if (await FileOperations.exists(configPath)) {
      Logger.warn("PayloadKit already initialized");
      return;
    }
    const config = {
      version: "0.0.1",
      components: {
        path: "src/components",
        alias: "@/components"
      },
      blocks: {
        path: "src/blocks",
        alias: "@/blocks"
      },
      collections: {
        path: "src/collections",
        alias: "@/collections"
      },
      globals: {
        path: "src/globals",
        alias: "@/globals"
      },
      registryUrl: "https://registry.payloadkit.dev"
    };
    await FileOperations.writeJson(configPath, config);
    Logger.success("PayloadKit initialized");
  }
  /**
   * Get PayloadKit configuration
   */
  static async getPayloadKitConfig(cwd = process.cwd()) {
    const configPath = import_path2.default.join(cwd, "payloadkit.json");
    return FileOperations.readJson(configPath);
  }
  /**
   * Resolve component path
   */
  static async resolveComponentPath(componentType, cwd = process.cwd()) {
    const config = await this.getPayloadKitConfig(cwd);
    if (config && config[componentType]?.path) {
      return import_path2.default.join(cwd, config[componentType].path);
    }
    const defaults = {
      blocks: "src/blocks",
      components: "src/components",
      collections: "src/collections",
      globals: "src/globals"
    };
    return import_path2.default.join(cwd, defaults[componentType]);
  }
  /**
   * Check if component already exists
   */
  static async componentExists(name, type, cwd = process.cwd()) {
    const componentPath = await this.resolveComponentPath(type, cwd);
    const fullPath = import_path2.default.join(componentPath, name);
    return FileOperations.exists(fullPath);
  }
};

// src/commands/add.ts
var import_path3 = __toESM(require("path"));
var addCommand = new import_commander.Command().name("add").description("Add a component to your project").argument("<name>", "Component name to add").option("-f, --force", "Overwrite existing components").option("-p, --path <path>", "Custom installation path").action(async (componentName, options) => {
  try {
    Logger.header(`Adding ${componentName}`);
    const projectInfo = await Project.getProjectInfo();
    if (!projectInfo.isPayloadProject) {
      Logger.error("This is not a PayloadCMS project");
      Logger.info("Run this command in a PayloadCMS project directory");
      process.exit(1);
    }
    if (!projectInfo.hasPayloadKit) {
      Logger.info("PayloadKit not initialized, initializing...");
      await Project.initializePayloadKit();
    }
    const block = await Registry.getBlock(componentName);
    const component = await Registry.getComponent(componentName);
    if (!block && !component) {
      Logger.error(`Component "${componentName}" not found`);
      Logger.info("Available components:");
      const blocks = await Registry.listBlocks();
      const components = await Registry.listComponents();
      blocks.forEach((b) => Logger.info(`  ${b.name} (block)`));
      components.forEach((c) => Logger.info(`  ${c.name} (component)`));
      process.exit(1);
    }
    const targetComponent = block || component;
    const componentType = block ? "blocks" : "components";
    const exists = await Project.componentExists(componentName, componentType);
    if (exists && !options.force) {
      const response = await (0, import_prompts.default)({
        type: "confirm",
        name: "overwrite",
        message: `${componentName} already exists. Overwrite?`,
        initial: false
      });
      if (!response.overwrite) {
        Logger.info("Installation cancelled");
        return;
      }
    }
    const installPath = options.path ? import_path3.default.resolve(options.path) : await Project.resolveComponentPath(componentType);
    const componentPath = import_path3.default.join(installPath, componentName);
    Logger.startSpinner(`Installing ${componentName}...`);
    await FileOperations.writeFile(
      import_path3.default.join(componentPath, "index.ts"),
      `// ${componentName} component
// This is a placeholder - real component will be implemented

export default function ${componentName}() {
  return null
}
`
    );
    if (targetComponent) {
      await FileOperations.writeJson(
        import_path3.default.join(componentPath, "payloadkit.json"),
        {
          name: targetComponent.name,
          description: targetComponent.description,
          installedAt: (/* @__PURE__ */ new Date()).toISOString(),
          version: "0.0.1"
        }
      );
    }
    Logger.stopSpinner(true, `${componentName} installed successfully!`);
    Logger.divider();
    Logger.success("Component added to your project");
    Logger.info("Location:");
    Logger.code(componentPath);
    Logger.info("You can now import and use this component in your project.");
  } catch (error2) {
    Logger.stopSpinner(false);
    Logger.error(`Failed to add component: ${error2}`);
    process.exit(1);
  }
});

// src/commands/init.ts
var import_commander2 = require("commander");
var import_prompts2 = __toESM(require("prompts"));
var initCommand = new import_commander2.Command().name("init").description("Initialize PayloadKit in your project").option("-y, --yes", "Skip prompts and use defaults").action(async (options) => {
  try {
    Logger.header("Initialize PayloadKit");
    const projectInfo = await Project.getProjectInfo();
    if (!projectInfo.isPayloadProject) {
      Logger.error("This is not a PayloadCMS project");
      Logger.info('Make sure you have "payload" in your dependencies');
      process.exit(1);
    }
    if (projectInfo.hasPayloadKit) {
      Logger.warn("PayloadKit is already initialized in this project");
      return;
    }
    Logger.info(`Project: ${projectInfo.projectName}`);
    Logger.info(`Payload version: ${projectInfo.payloadVersion}`);
    let proceed = true;
    if (!options.yes) {
      const response = await (0, import_prompts2.default)({
        type: "confirm",
        name: "proceed",
        message: "Initialize PayloadKit in this project?",
        initial: true
      });
      proceed = response.proceed;
    }
    if (!proceed) {
      Logger.info("Initialization cancelled");
      return;
    }
    await Project.initializePayloadKit();
    Logger.divider();
    Logger.success("PayloadKit initialized successfully!");
    Logger.info("You can now use:");
    Logger.code("payloadkit add <component>");
    Logger.code("payloadkit list");
  } catch (error2) {
    Logger.error(`Initialization failed: ${error2}`);
    process.exit(1);
  }
});

// src/commands/list.ts
var import_commander3 = require("commander");
var import_chalk2 = __toESM(require("chalk"));
var listCommand = new import_commander3.Command().name("list").description("List available components from the registry").option("-t, --type <type>", "Component type (blocks, components, collections, globals)").option("-c, --category <category>", "Filter by category").option("-s, --search <query>", "Search components").action(async (options) => {
  try {
    Logger.header("Available Components");
    const registry = await Registry.getRegistry();
    if (!options.type || options.type === "blocks") {
      const blocks = await Registry.listBlocks();
      if (blocks.length === 0) {
        Logger.info("No blocks available yet");
        Logger.info("Blocks will be added as the registry grows");
      } else {
        Logger.divider();
        console.log(import_chalk2.default.bold.blue("\u{1F4E6} Blocks"));
        blocks.forEach((block) => {
          console.log(`  ${import_chalk2.default.cyan(block.name)} - ${block.description || "No description"}`);
          if (block.category) {
            console.log(import_chalk2.default.gray(`    Category: ${block.category}`));
          }
        });
      }
    }
    if (!options.type || options.type === "components") {
      const components = await Registry.listComponents();
      if (components.length === 0) {
        Logger.info("No components available yet");
      } else {
        Logger.divider();
        console.log(import_chalk2.default.bold.green("\u{1F9E9} Components"));
        components.forEach((component) => {
          console.log(`  ${import_chalk2.default.cyan(component.name)} - ${component.description || "No description"}`);
        });
      }
    }
    Logger.divider();
    Logger.info("Usage:");
    Logger.code("payloadkit add <component-name>");
    Logger.code("payloadkit add hero-block");
    if (options.search) {
      const results = await Registry.searchBlocks(options.search);
      Logger.divider();
      console.log(import_chalk2.default.bold.yellow(`\u{1F50D} Search results for "${options.search}"`));
      if (results.length === 0) {
        Logger.info("No components found");
      } else {
        results.forEach((block) => {
          console.log(`  ${import_chalk2.default.cyan(block.name)} - ${block.description || "No description"}`);
        });
      }
    }
  } catch (error2) {
    Logger.error(`Failed to list components: ${error2}`);
    process.exit(1);
  }
});

// src/cli.ts
var program = new import_commander4.Command();
program.name("payloadkit").description("CLI for PayloadKit - Build websites faster with PayloadCMS").version(import_core.PAYLOADKIT_VERSION);
console.log(import_chalk3.default.cyan(`
 \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
 \u2551                                       \u2551
 \u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557        \u2551
 \u2551   \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2588\u2588\u2557 \u2588\u2588\u2554\u255D\u2588\u2588\u2551        \u2551
 \u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2551        \u2551
 \u2551   \u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255A\u2588\u2588\u2554\u255D  \u2588\u2588\u2551        \u2551
 \u2551   \u2588\u2588\u2551     \u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2551
 \u2551   \u255A\u2550\u255D     \u255A\u2550\u255D  \u255A\u2550\u255D   \u255A\u2550\u255D   \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D   \u2551
 \u2551                                       \u2551
 \u2551            PayloadKit v${import_core.PAYLOADKIT_VERSION}            \u2551
 \u2551   Open source framework for PayloadCMS \u2551
 \u2551                                       \u2551
 \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D
`));
program.addCommand(addCommand);
program.addCommand(initCommand);
program.addCommand(listCommand);
program.parse();
//# sourceMappingURL=cli.js.map