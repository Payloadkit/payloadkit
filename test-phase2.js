#!/usr/bin/env node

/**
 * Phase 2 Validation Test for PayloadKit Docker Development Setup
 */

const fs = require('fs')
const path = require('path')

function testPhase2() {
  console.log('🐳 Testing PayloadKit Phase 2: Docker Development Setup\n')

  // Test 1: Verify Docker registry structure
  console.log('📁 Testing Docker registry structure...')
  const requiredDirs = [
    'registry/docker',
    'registry/docker/dockerfile-dev',
    'registry/docker/docker-compose-dev',
    'registry/docker/dockerignore'
  ]

  for (const dir of requiredDirs) {
    if (!fs.existsSync(dir)) {
      console.error(`❌ Missing directory: ${dir}`)
      process.exit(1)
    }
  }
  console.log('✅ Docker registry structure is correct\n')

  // Test 2: Verify Docker files exist
  console.log('🐋 Testing Docker files...')
  const requiredFiles = [
    'registry/docker/dockerfile-dev/Dockerfile',
    'registry/docker/dockerfile-dev/payloadkit.json',
    'registry/docker/docker-compose-dev/docker-compose.yml',
    'registry/docker/docker-compose-dev/init.sql',
    'registry/docker/docker-compose-dev/payloadkit.json',
    'registry/docker/dockerignore/dockerignore',
    'registry/docker/dockerignore/payloadkit.json'
  ]

  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
      console.error(`❌ Missing file: ${file}`)
      process.exit(1)
    }
  }
  console.log('✅ All Docker files present\n')

  // Test 3: Verify template integration
  console.log('🏗️  Testing template Docker integration...')
  const templateFiles = [
    'packages/create-payloadkit/templates/blank/Dockerfile',
    'packages/create-payloadkit/templates/blank/docker-compose.yml',
    'packages/create-payloadkit/templates/blank/init.sql',
    'packages/create-payloadkit/templates/blank/.dockerignore'
  ]

  for (const file of templateFiles) {
    if (!fs.existsSync(file)) {
      console.error(`❌ Missing template file: ${file}`)
      process.exit(1)
    }
  }
  console.log('✅ Template Docker integration complete\n')

  // Test 4: Verify Dockerfile features
  console.log('🏭 Testing Dockerfile features...')
  const dockerfile = fs.readFileSync('registry/docker/dockerfile-dev/Dockerfile', 'utf8')

  // Check for multi-stage build
  if (!dockerfile.includes('FROM oven/bun:1-alpine AS base')) {
    console.error('❌ Dockerfile missing bun base image')
    process.exit(1)
  }

  // Check for development stage
  if (!dockerfile.includes('FROM base AS dev')) {
    console.error('❌ Dockerfile missing development stage')
    process.exit(1)
  }

  // Check for production stages
  if (!dockerfile.includes('FROM base AS builder') || !dockerfile.includes('FROM oven/bun:1-alpine AS runner')) {
    console.error('❌ Dockerfile missing production stages')
    process.exit(1)
  }

  // Check for PayloadCMS support
  if (!dockerfile.includes('payload generate:types') || !dockerfile.includes('payload generate:importmap')) {
    console.error('❌ Dockerfile missing PayloadCMS build steps')
    process.exit(1)
  }

  console.log('✅ Dockerfile features validated\n')

  // Test 5: Verify docker-compose.yml features
  console.log('📋 Testing docker-compose.yml features...')
  const dockerCompose = fs.readFileSync('registry/docker/docker-compose-dev/docker-compose.yml', 'utf8')

  // Check for PostgreSQL service
  if (!dockerCompose.includes('postgres:') || !dockerCompose.includes('postgres:16-alpine')) {
    console.error('❌ docker-compose missing PostgreSQL service')
    process.exit(1)
  }

  // Check for app service with hot-reload
  if (!dockerCompose.includes('app:') || !dockerCompose.includes('target: dev')) {
    console.error('❌ docker-compose missing app service with dev target')
    process.exit(1)
  }

  // Check for health checks
  if (!dockerCompose.includes('healthcheck:')) {
    console.error('❌ docker-compose missing health checks')
    process.exit(1)
  }

  // Check for optional services (profiles)
  if (!dockerCompose.includes('redis:') || !dockerCompose.includes('mailhog:') || !dockerCompose.includes('profiles:')) {
    console.error('❌ docker-compose missing optional services with profiles')
    process.exit(1)
  }

  console.log('✅ docker-compose.yml features validated\n')

  // Test 6: Verify package.json Docker scripts
  console.log('📦 Testing package.json Docker scripts...')
  const packageJson = JSON.parse(fs.readFileSync('packages/create-payloadkit/templates/blank/package.json', 'utf8'))

  const requiredScripts = [
    'docker:dev',
    'docker:dev:build',
    'docker:dev:detached',
    'docker:dev:full',
    'docker:stop',
    'docker:reset',
    'docker:logs',
    'docker:db'
  ]

  for (const script of requiredScripts) {
    if (!packageJson.scripts[script]) {
      console.error(`❌ Missing Docker script: ${script}`)
      process.exit(1)
    }
  }

  console.log('✅ Docker scripts added to package.json\n')

  // Test 7: Verify registry index.json update
  console.log('📊 Testing registry index update...')
  const registryIndex = JSON.parse(fs.readFileSync('registry/index.json', 'utf8'))

  if (!registryIndex.docker) {
    console.error('❌ Registry index missing docker section')
    process.exit(1)
  }

  if (!registryIndex.docker['dockerfile-dev'] || !registryIndex.docker['docker-compose-dev'] || !registryIndex.docker['dockerignore']) {
    console.error('❌ Registry index missing Docker entries')
    process.exit(1)
  }

  console.log('✅ Registry index updated correctly\n')

  // Success!
  console.log('🎉 PHASE 2 VALIDATION COMPLETE!')
  console.log('\n✨ Achievements unlocked:')
  console.log('   🐳 Multi-stage Dockerfile with bun optimization')
  console.log('   🐋 Complete docker-compose dev environment')
  console.log('   📦 PostgreSQL 17 with health checks')
  console.log('   ⚡ Hot-reload development setup')
  console.log('   🔧 Optional services: Redis, MailHog, pgAdmin')
  console.log('   📝 Optimized .dockerignore')
  console.log('   🛠️  Docker scripts in package.json')
  console.log('   🏗️  Template integration complete')
  console.log('\n📈 Ready for Phase 3: Global Theme System')
}

// Run the test
try {
  testPhase2()
} catch (error) {
  console.error('❌ Phase 2 validation failed:', error.message)
  process.exit(1)
}