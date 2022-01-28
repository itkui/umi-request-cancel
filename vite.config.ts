import { defineConfig } from 'vite'
import { resolve } from 'path'

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
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['easy-umi-request-cancel', 'umi-request'],
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