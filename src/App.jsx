// Manejo de rutas
import { Route, Routes } from 'react-router-dom'

// Layout principal
import Layout from './components/layout/Layout'

// Páginas
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

// Componente principal de la aplicación
function App() {
  return (
    <Layout>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Página temporal de proyectos */}
        <Route path="/proyectos/:projectId" element={<ProjectDetail />} />

        {/* Página para rutas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App