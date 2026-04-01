import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        kontakt: resolve(__dirname, 'kontakt/index.html'),
        cenik: resolve(__dirname, 'cenik/index.html'),
        pokoje: resolve(__dirname, 'pokoje/index.html'),
        galerie: resolve(__dirname, 'galerie/index.html'),
        tipy: resolve(__dirname, 'tipy/index.html'),
        rezervace: resolve(__dirname, 'rezervace/index.html'),
      }
    }
  }
})