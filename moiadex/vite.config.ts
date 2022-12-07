import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import inlineCssModules from 'vite-plugin-inline-css-modules'

export default defineConfig({
  plugins: [solidPlugin(), inlineCssModules()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
