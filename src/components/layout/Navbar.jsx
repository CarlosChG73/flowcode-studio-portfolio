// Estado de React
import { useState } from 'react'

// Hook de tema
import useTheme from '../../hooks/useTheme'

// Enlaces principales de navegación
const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
]

// Componente de navegación principal
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // Abre o cierra el menú móvil
  const handleToggleMenu = () => {
    setIsOpen((currentState) => !currentState)
  }

  // Cierra el menú móvil al seleccionar una opción
  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  const isDarkMode = theme === 'dark'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/95">
      <nav className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex min-h-20 items-center justify-between">
          {/* Marca principal */}
          <a
            href="#inicio"
            className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600 transition hover:text-cyan-500 sm:text-sm dark:text-cyan-400 dark:hover:text-cyan-300"
            onClick={handleCloseMenu}
          >
            Flowcode Studio
          </a>

          {/* Menú de escritorio */}
          <ul className="hidden items-center gap-6 text-sm text-slate-600 lg:flex dark:text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="transition hover:text-cyan-600 dark:hover:text-cyan-400"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Acciones del navbar */}
          <div className="flex items-center gap-3">
            {/* Switch claro / oscuro */}
            <button
              type="button"
              className="relative flex h-10 w-28 items-center rounded-full border border-slate-200 bg-slate-100 p-1 shadow-sm transition duration-300 hover:border-cyan-500 focus-visible:outline-cyan-500 dark:border-white/10 dark:bg-slate-800 dark:hover:border-cyan-400/60 dark:focus-visible:outline-cyan-300"
              aria-label={
                isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
              }
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              onClick={toggleTheme}
            >
              {/* Indicador activo */}
              <span
                className={`absolute top-1 h-8 w-13 rounded-full bg-white shadow-md ring-1 ring-slate-200 transition-transform duration-300 ease-out dark:bg-slate-950 dark:ring-white/10 ${
                  isDarkMode ? 'translate-x-13' : 'translate-x-0'
                }`}
                aria-hidden="true"
              />

              {/* Opción claro */}
              <span
                className={`relative z-10 flex flex-1 items-center justify-center text-[11px] font-semibold transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-400' : 'text-cyan-700'
                }`}
              >
                Claro
              </span>

              {/* Opción oscuro */}
              <span
                className={`relative z-10 flex flex-1 items-center justify-center text-[11px] font-semibold transition-colors duration-300 ${
                  isDarkMode ? 'text-cyan-300' : 'text-slate-400'
                }`}
              >
                Oscuro
              </span>
            </button>

            {/* Botón hamburguesa móvil */}
            <button
              type="button"
              className="relative z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-cyan-500 bg-transparent text-2xl leading-none text-slate-900 transition hover:bg-cyan-500 hover:text-white lg:hidden dark:border-cyan-400/70 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={handleToggleMenu}
            >
              <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        <div
          id="mobile-menu"
          className={`lg:hidden ${
            isOpen
              ? 'block border-t border-slate-200 pb-5 pt-4 dark:border-white/10'
              : 'hidden'
          }`}
        >
          <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 transition hover:bg-slate-100 hover:text-cyan-600 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                  onClick={handleCloseMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar