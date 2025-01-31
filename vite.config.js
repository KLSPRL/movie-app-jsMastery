import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   host: "192.168.178.106",
  //   fs: {
  //     strict: false
  //   }
  // },
  plugins: [react(), tailwindcss()],
})
