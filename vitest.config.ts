import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from "vite-tsconfig-paths"

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        all: true,  // Include files with 0% coverage in the report.
        provider: 'istanbul', // or 'v8'
        include: ['lib/utils/**/*'],
        // Omit test code from the report (both Storybook and Vitest)
        exclude: ['lib/**/*.stories.{ts,tsx}', 'lib/**/*.test.{ts,tsx}'],
        reporter: ["lcov"],
        reportsDirectory: "coverage/unit",
      },
    },
    plugins: [
      vue(),
      tsconfigPaths(),
    ],
  })
)
