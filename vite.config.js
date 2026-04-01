import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'src/pages/contacts/kontakt.html'),
        reservations: resolve(__dirname, 'src/pages/reservations/rezervace.html'),
        pricing: resolve(__dirname, 'src/pages/pricing/cenik.html'),
        rooms: resolve(__dirname, 'src/pages/rooms/pokoje.html'),
        gallery: resolve(__dirname, 'src/pages/gallery/galerie.html'),
        tips: resolve(__dirname, 'src/pages/tips/tipy.html'),
      }
    }
  }
})