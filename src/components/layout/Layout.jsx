// Imports de layout
import Navbar from './Navbar'
import Footer from './Footer'

// Estructura general del sitio
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar />

      {/* Contenido principal */}
      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout