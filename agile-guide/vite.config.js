import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite sets the BASE_URL environment variable from this value.
  base: "/agile-guide/",
})
