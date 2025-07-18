// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.', // your project's root directory
  build: {
    outDir: 'dist', // where to output the production build
    emptyOutDir: true, // clean the dist folder before build
  },
  server: {
    port: 5173, // local dev server port (optional)
    open: true, // open browser automatically
  }
})