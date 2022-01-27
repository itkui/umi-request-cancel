import { defineConfig } from 'vite'
import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript';

export default defineConfig(({ mode }) => {
  return {
    root: mode === 'development' ? resolve(process.cwd(), 'example') : '',
    server: {
      host: '0.0.0.0',
      port: 8000
    },
    build: {
      target: ["esnext", "es2015"],
      outDir: "lib",
      rollupOptions: {
        plugins: [typescript({
          declarationDir: "lib"
        })]
      },
      lib: {
        entry: resolve(__dirname, 'src'),
        name: 'umi-request-cancel',
        formats: ["umd", "es"],
        fileName: (format) => `umi-request-cancel.${format}.js`
      }
    }
  }
})