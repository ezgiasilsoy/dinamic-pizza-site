import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
      theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        quattrocento: ['Quattrocento', 'serif'],
        satisfy: ['Satisfy', 'cursive'],
      },
    },
  },
})
