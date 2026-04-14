import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // mirrors "baseUrl": "src" in tsconfig.json
      src: resolve(__dirname, 'src'),
    },
  },
})
