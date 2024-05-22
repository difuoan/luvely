import { defineConfig } from 'vitest/config'
import vue from "@vitejs/plugin-vue"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
    test: {
        coverage: {
            all: true,  // Include files with 0% coverage in the report.
            provider: 'istanbul', // or 'v8'
            include: ['lib/**/*'],
            // Omit test code from the report (both Storybook and Vitest)
            exclude: ['lib/**/*.stories.{ts,tsx}', 'lib/**/*.test.{ts,tsx}'],
            reporter: ["text", "text-summary", "json", "json-summary"],
            reportsDirectory: "coverage/unit",
        },
    },
    plugins: [
        vue(),
        tsconfigPaths(),
    ],
})
