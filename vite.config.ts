import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Set base URL depending on mode
  base: mode === 'production' ? 'https://atem-lives.b-cdn.net/' : '/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  define: {
    'process.env': process.env
  }
}));
