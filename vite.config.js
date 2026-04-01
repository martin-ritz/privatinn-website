import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'src/pages/contacts/index.html'),
        reservations: resolve(__dirname, 'src/pages/reservations/index.html'),
        pricing: resolve(__dirname, 'src/pages/pricing/index.html'),
        rooms: resolve(__dirname, 'src/pages/rooms/index.html'),
        gallery: resolve(__dirname, 'src/pages/gallery/index.html'),
        tips: resolve(__dirname, 'src/pages/tips/index.html'),
      }
    }
  }
})