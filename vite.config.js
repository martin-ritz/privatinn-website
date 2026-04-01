import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'src/pages/kontakt/index.html'),
        reservations: resolve(__dirname, 'src/pages/rezervace/index.html'),
        pricing: resolve(__dirname, 'src/pages/cenik/index.html'),
        rooms: resolve(__dirname, 'src/pages/pokoje/index.html'),
        gallery: resolve(__dirname, 'src/pages/galerie/index.html'),
        tips: resolve(__dirname, 'src/pages/tipy/index.html'),
      }
    }
  }
})