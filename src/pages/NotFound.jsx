// Navegación interna
import { Link } from 'react-router-dom'

// Página para rutas no encontradas
function NotFound() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col items-center justify-center px-5 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
      {/* Código de error */}
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
        Error 404
      </p>

      {/* Mensaje principal */}
      <h1 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
        Página no encontrada
      </h1>

      {/* Descripción */}
      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
        La página que intentas abrir no existe o fue movida.
      </p>

      {/* Acción de regreso */}
      <Link
        to="/"
        className="mt-8 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-cyan-600 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
      >
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound