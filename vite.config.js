// Imports de configuración
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuración principal de Vite
export default defineConfig({
  plugins: [react(), tailwindcss()],
})