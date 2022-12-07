import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import inlineCssModules from 'vite-plugin-inline-css-modules'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    solidPlugin(),
    inlineCssModules(),
    VitePWA({
      registerType: 'autoUpdate',
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
