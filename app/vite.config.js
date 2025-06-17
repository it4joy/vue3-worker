import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9000
  },
  resolve: {
    alias: {
      '@': path.resolve( __dirname, 'src' )
    }
  }
})
