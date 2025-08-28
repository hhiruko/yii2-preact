import {defineConfig, loadEnv} from 'vite'
import preact from '@preact/preset-vite';

// https://vite.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');
    const backendUrl = env.BACKEND_URL;

    return {
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
                origin: backendUrl
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
    }
})
