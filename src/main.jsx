import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'




// Dynamic import for web vitals to reduce initial bundle size
// if (typeof window !== 'undefined' && import.meta.env.PROD) {
//   import('./reportWebVitals.js').then(({ reportWebVitals }) => {
//     // Only report web vitals in production and when actually needed
//     reportWebVitals();
//   }).catch(() => {
//     // Silently fail if web vitals can't be loaded
//   });
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
