import 'vite/modulepreload-polyfill'
import { createInertiaApp } from '@inertiajs/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './vite/index.css'
import App from './vite/App.jsx'

createInertiaApp({
    id: 'root',
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<StrictMode><App {...props} /></StrictMode>)
    },
})