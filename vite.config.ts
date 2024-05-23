import { defineConfig } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ tsconfigPath: "tsconfig.build.json", exclude: ["**/*.test.*", "**/*.stories.*"] }),
    libInjectCss()
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "vue",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}', {
          ignore: [
            "lib/**/*.d.ts",
            "**/*.test.*",
            "**/*.stories.*"
          ],
        }).map(file => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      )
    },
  }
})
