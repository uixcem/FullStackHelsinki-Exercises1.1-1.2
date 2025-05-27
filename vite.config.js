import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FullStackHelsinki-Exercises1.1-1.2/',
  plugins: [react()],
})
