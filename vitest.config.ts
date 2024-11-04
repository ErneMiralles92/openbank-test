/// <reference types="vitest/config" />
import { defineConfig, mergeConfig } from 'vite'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      clearMocks: true,
      environment: 'jsdom',
      include: ['**/*.spec.{ts,tsx}'],
      setupFiles: ['./vitest/setup.ts'],
    },
  })
)
