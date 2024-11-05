import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/plugins/react-apm-git/resource/my-app/dist/",
  // build:{
  //   assetsDir: "./assets",
  //   outDir: "dist2"
  // }

})
