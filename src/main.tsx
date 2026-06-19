import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted fonts (variable, weight axis). Same-origin + bundled = no
// render-blocking Google Fonts request. Browser fetches only the subsets it needs.
import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/space-grotesk/wght.css'
import '@fontsource-variable/jetbrains-mono/wght.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
