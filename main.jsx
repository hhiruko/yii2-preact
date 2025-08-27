import 'vite/modulepreload-polyfill'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './vite/index.css'
import App from './vite/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

console.log('main loaded')