import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RegistroProvider } from './contexts/RegistroContext';
import './index.css'


createRoot(document.getElementById('root')).render(
  <RegistroProvider>
    <App />
  </RegistroProvider>
)
