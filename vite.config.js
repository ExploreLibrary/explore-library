import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // o tu framework correspondiente

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-openlibrary': {
        target: 'https://openlibrary.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-openlibrary/, ''),
      },
    },
  },
})