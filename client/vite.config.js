import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts:true,
    proxy:' https://a867d01bd8cd.ngrok-free.app '
  }
})
