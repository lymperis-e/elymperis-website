import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'



export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  base: "/", //"/elymperis-website/" ,
  assetsInclude: ['**/*.md']
})
