import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // base for Docker
  base: '/', // For GH-pages base: '/louise-corner/'

  plugins: [
    react(),
    tailwindcss()
  ],
})
