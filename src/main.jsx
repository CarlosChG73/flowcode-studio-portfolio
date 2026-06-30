// Punto de entrada de React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Estilos globales
import './index.css'

// Componente principal
import App from './App.jsx'

// Render principal de la aplicación
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)