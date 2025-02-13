import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/cerbasol/", // Correspond au nom du dépôt GitHub
  build: {
    outDir: "dist",
  },
});
