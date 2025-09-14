import { JobsConfig, PayloadRequest } from 'payload'

/**
 * Jobs configuration for PayloadKit
 * Handles background tasks and scheduled jobs
 */
export const jobsConfig: JobsConfig = {
  access: {
    run: ({ req }: { req: PayloadRequest }): boolean => {
      // Allow logged in users to execute jobs (default behavior)
      if (req.user) return true

      // For automated systems (like Vercel Cron), check for secret
      const authHeader = req.headers.get('authorization')
      const cronSecret = process.env.CRON_SECRET || process.env.PAYLOAD_SECRET

      if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
        return true
      }

      return false
    },
  },
  tasks: [],
}

/**
 * Extended jobs configuration
 * Add custom tasks as needed for your project
 */
export function createJobsConfig(customTasks: any[] = []) {
  return {
    ...jobsConfig,
    tasks: [
      ...jobsConfig.tasks,
      ...customTasks,
    ],
  }
}