import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, './src/pages/contacts/kontakt.html'),
        reservations: resolve(__dirname, './src/pages/reservations/rezervace.html'),
      }
    }
  }
})