import { defineConfig } from 'vite'
import preact from '@preact/preset-vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [preact()],
    resolve: {
        alias: {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
            'react-dom/client': 'preact/compat'
        },
    },
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
