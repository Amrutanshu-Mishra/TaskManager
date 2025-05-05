import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//added this while importing tailwind css
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  //in the plugins had to add tailwindcss() to get tailwindcss
  plugins: [react(),tailwindcss()],
})
