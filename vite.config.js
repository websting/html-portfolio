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
  },
  base: './',  // Tells Vite to generate relative paths for CSS, JS, etc.., in the dist/ folder
              // Base path for all assets and links in Vite when building for production.
})