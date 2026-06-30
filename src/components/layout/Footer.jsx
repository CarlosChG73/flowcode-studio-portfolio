// Asset del footer
import logoImage from '../../assets/logos/logo-ccg.png'

// Enlaces rápidos del footer
const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Áreas técnicas', href: '#tecnologias' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

// Componente de pie de página
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-7 transition-colors sm:px-6 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        {/* Contenido superior */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Marca */}
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Logo de Flowcode Studio by Carlos Chávez"
              title="Flowcode Studio by Carlos Chávez"
              width="40"
              height="40"
              loading="lazy"
              decoding="async"
              className="h-10 w-10 rounded-full border border-cyan-500/30 bg-white object-contain p-2 dark:border-cyan-400/30"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
                Flowcode Studio
              </p>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Desarrollo de software, soluciones digitales y soporte tecnológico.
              </p>
            </div>
          </div>

          {/* Navegación rápida */}
          <nav aria-label="Enlaces rápidos del footer">
            <ul className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition hover:text-cyan-600 dark:hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Línea inferior */}
        <div className="mt-6 flex flex-col items-center gap-2 border-t border-slate-200 pt-5 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left dark:border-white/10">
          <p>© 2026 Flowcode Studio by Carlos Chávez.</p>
          <p>React · Vite · Tailwind CSS · Backend serverless</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer