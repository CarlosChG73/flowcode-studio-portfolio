// Navegación interna
import { Link } from 'react-router-dom'

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

// Componentes UI
import Badge from '../ui/Badge'
import Card from '../ui/Card'

// Datos de proyectos
import { projects } from '../../data/projects'

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

// Sección de proyectos
function Projects() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-24 border-t border-slate-200 px-5 py-14 transition-colors sm:px-6 sm:py-16 lg:py-20 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado de sección */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Proyectos
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
            Proyectos y soluciones desarrolladas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Proyectos orientados a aplicar fundamentos de desarrollo de software,
            estructura de componentes, diseño responsivo, integración de funcionalidades
            y documentación técnica.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              {/* Estado del proyecto */}
              <Badge>{project.status}</Badge>

              {/* Información principal */}
              <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              {/* Stack utilizado */}
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                  Stack utilizado
                </p>

                <div className="flex flex-wrap gap-2">
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

              {/* Enlace a página de proyecto */}
              <Link
                to={project.path}
                className="mt-6 inline-flex text-sm font-semibold text-cyan-700 transition hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300"
              >
                Ver proyecto →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects