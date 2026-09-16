import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'node:url'
export default defineConfig({
  plugins: [vue(), tailwindcss(), dts({ tsconfigPath: './tsconfig.json', entryRoot: 'src' })],
  build: {
    lib: {
      entry: {
        index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        headless: fileURLToPath(new URL('./src/headless.ts', import.meta.url)),
        core: fileURLToPath(new URL('./src/core.ts', import.meta.url)),
      },
      formats: ['es'],
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['vue', 'reka-ui', '@internationalized/date'],
      output: { entryFileNames: '[name].js' },
    },
  },
})
