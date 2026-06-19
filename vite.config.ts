import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served as the user root page at https://ssalvation0.github.io/, so base is '/'.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    // Dedicated port so we don't collide with other local dev servers.
    port: 5180,
    strictPort: true,
  },
})
