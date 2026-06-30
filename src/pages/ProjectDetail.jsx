// Efectos de React
import { useEffect } from 'react'

// Herramientas de React Router
import { Link, useParams } from 'react-router-dom'

// Íconos de tecnologías y herramientas
import {
  SiGit,
  SiJavascript,
  SiNpm,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import { FiCloud, FiFileText } from 'react-icons/fi'
import { TbApi } from 'react-icons/tb'

// Datos de proyectos
import { projects } from '../data/projects'

// Íconos asociados al stack de proyectos
const stackIcons = {
  React: {
    icon: SiReact,
    color: '#61DAFB',
  },
  Vite: {
    icon: SiVite,
    color: '#A855F7',
  },
  'Tailwind CSS': {
    icon: SiTailwindcss,
    color: '#06B6D4',
  },
  'React Router': {
    icon: SiReact,
    color: '#61DAFB',
  },
  'Vercel Functions': {
    icon: FiCloud,
    color: '#38BDF8',
  },
  Nodemailer: {
    icon: FiFileText,
    color: '#F59E0B',
  },
  Git: {
    icon: SiGit,
    color: '#F05032',
  },
  JavaScript: {
    icon: SiJavascript,
    color: '#F7DF1E',
  },
  PostgreSQL: {
    icon: SiPostgresql,
    color: '#4169E1',
  },
  API: {
    icon: TbApi,
    color: '#22C55E',
  },
  npm: {
    icon: SiNpm,
    color: '#CB3837',
  },
}

// Página de detalle de proyecto
function ProjectDetail() {
  const { projectId } = useParams()

  // Lleva la página al inicio al abrir un proyecto
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  // Busca el proyecto según la ruta
  const project = projects.find((item) => item.id === projectId)

  if (!project) {
    return (
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col items-center justify-center px-5 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
        {/* Mensaje de proyecto no encontrado */}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
          Proyecto
        </p>

        <h1 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
          Proyecto no encontrado
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
          La ruta solicitada no coincide con ningún proyecto registrado.
        </p>

        <Link
          to="/"
          className="mt-8 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-cyan-600 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
        >
          Volver al portafolio
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col items-center justify-center px-5 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
      {/* Estado del proyecto */}
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
        {project.status}
      </p>

      {/* Título del proyecto */}
      <h1 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
        {project.title}
      </h1>

      {/* Descripción del proyecto */}
      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
        {project.description}
      </p>

      {/* Stack utilizado */}
      <div className="mt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
          Stack utilizado
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech) => {
            const stackItem = stackIcons[tech]
            const Icon = stackItem?.icon

            return (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {Icon && (
                  <Icon
                    className="h-3.5 w-3.5 shrink-0"
                    style={{ color: stackItem.color }}
                    aria-hidden="true"
                  />
                )}
                {tech}
              </span>
            )
          })}
        </div>
      </div>

      {/* Acción de regreso */}
      <Link
        to="/"
        className="mt-8 rounded-full border border-cyan-500/60 px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:scale-105 hover:bg-cyan-500 hover:text-white dark:border-cyan-400/60 dark:text-cyan-300 dark:hover:bg-cyan-400 dark:hover:text-slate-950"
      >
        Volver al portafolio
      </Link>
    </section>
  )
}

export default ProjectDetail