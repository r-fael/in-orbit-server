import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'
export default defineConfig({
  out: './.migrations',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  migrations: {
    prefix: 'supabase',
  },
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
