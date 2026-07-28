import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.VITE_BASE_PATH || '/maa-village-3',
  plugins: [react(), tailwindcss()],
})
