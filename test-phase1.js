#!/usr/bin/env node

/**
 * Phase 1 Validation Test for PayloadKit Modular Configuration
 */

const fs = require('fs')
const path = require('path')

function testPhase1() {
  console.log('🚀 Testing PayloadKit Phase 1: Modular Configuration\n')

  // Test 1: Verify registry structure
  console.log('📁 Testing registry structure...')
  const requiredDirs = [
    'registry/config',
    'registry/config/db-config',
    'registry/config/collections-config',
    'registry/config/plugins-config',
    'registry/config/globals-config',
    'registry/config/jobs-config',
    'registry/config/email-config'
  ]

  for (const dir of requiredDirs) {
    if (!fs.existsSync(dir)) {
      console.error(`❌ Missing directory: ${dir}`)
      process.exit(1)
    }
  }
  console.log('✅ Registry structure is correct\n')

  // Test 2: Verify config files exist
  console.log('📄 Testing config files...')
  const requiredFiles = [
    'registry/config/db-config/index.ts',
    'registry/config/db-config/postgres.ts',
    'registry/config/db-config/mongodb.ts',
    'registry/config/db-config/payloadkit.json',
    'registry/config/collections-config/index.ts',
    'registry/config/plugins-config/index.ts',
    'registry/config/globals-config/index.ts',
    'registry/config/jobs-config/index.ts',
    'registry/config/email-config/index.ts',
    'registry/config/index.ts'
  ]

  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
      console.error(`❌ Missing file: ${file}`)
      process.exit(1)
    }
  }
  console.log('✅ All config files present\n')

  // Test 3: Verify template integration
  console.log('🏗️  Testing template integration...')
  const templateFiles = [
    'packages/create-payloadkit/templates/blank/src/config/index.ts',
    'packages/create-payloadkit/templates/blank/src/config/db-config/index.ts',
    'packages/create-payloadkit/templates/blank/src/config/db-config/postgres.ts',
    'packages/create-payloadkit/templates/blank/src/config/db-config/mongodb.ts',
    'packages/create-payloadkit/templates/blank/src/payload.config.ts'
  ]

  for (const file of templateFiles) {
    if (!fs.existsSync(file)) {
      console.error(`❌ Missing template file: ${file}`)
      process.exit(1)
    }
  }
  console.log('✅ Template integration complete\n')

  // Test 4: Verify database config features
  console.log('🗄️  Testing database config features...')
  const postgresConfig = fs.readFileSync('registry/config/db-config/postgres.ts', 'utf8')
  const mongoConfig = fs.readFileSync('registry/config/db-config/mongodb.ts', 'utf8')

  // Check for DATABASE_BUILD_URI support
  if (!postgresConfig.includes('DATABASE_BUILD_URI')) {
    console.error('❌ PostgreSQL config missing DATABASE_BUILD_URI support')
    process.exit(1)
  }

  if (!mongoConfig.includes('MONGODB_BUILD_URI')) {
    console.error('❌ MongoDB config missing MONGODB_BUILD_URI support')
    process.exit(1)
  }

  // Check for Vercel detection
  if (!postgresConfig.includes('VERCEL')) {
    console.error('❌ PostgreSQL config missing Vercel detection')
    process.exit(1)
  }

  if (!mongoConfig.includes('VERCEL')) {
    console.error('❌ MongoDB config missing Vercel detection')
    process.exit(1)
  }

  console.log('✅ Database config features validated\n')

  // Test 5: Verify registry index.json update
  console.log('📋 Testing registry index...')
  const registryIndex = JSON.parse(fs.readFileSync('registry/index.json', 'utf8'))

  if (!registryIndex.config) {
    console.error('❌ Registry index missing config section')
    process.exit(1)
  }

  if (!registryIndex.config['db-config']) {
    console.error('❌ Registry index missing db-config entry')
    process.exit(1)
  }

  console.log('✅ Registry index updated correctly\n')

  // Test 6: Verify template payload.config.ts uses modular config
  console.log('⚙️  Testing template payload.config.ts...')
  const payloadConfig = fs.readFileSync('packages/create-payloadkit/templates/blank/src/payload.config.ts', 'utf8')

  if (!payloadConfig.includes('from \'./config\'')) {
    console.error('❌ Template payload.config.ts not using modular config')
    process.exit(1)
  }

  if (!payloadConfig.includes('dbConfig') || !payloadConfig.includes('collectionsConfig')) {
    console.error('❌ Template payload.config.ts missing modular imports')
    process.exit(1)
  }

  console.log('✅ Template payload.config.ts using modular configuration\n')

  // Success!
  console.log('🎉 PHASE 1 VALIDATION COMPLETE!')
  console.log('\n✨ Achievements unlocked:')
  console.log('   🗄️  Smart database config (PostgreSQL default, MongoDB optional)')
  console.log('   🚀 DATABASE_BUILD_URI support for VPS deployments')
  console.log('   ☁️  Auto-detection Vercel vs VPS environments')
  console.log('   📦 Modular configuration architecture')
  console.log('   🏗️  Template integration complete')
  console.log('\n📈 Ready for Phase 2: Docker Development Setup')
}

// Run the test
try {
  testPhase1()
} catch (error) {
  console.error('❌ Phase 1 validation failed:', error.message)
  process.exit(1)
}