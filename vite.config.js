import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        cors: {
            origin: 'http://localhost:8080'
        }
    },
    build: {
        outDir: 'web/dist',
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
          input: 'main.jsx',
        },
    },
})
