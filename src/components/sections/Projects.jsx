// Navegación interna
import { Link } from 'react-router-dom'

// Componentes UI
import Badge from '../ui/Badge'
import Card from '../ui/Card'

// Datos de proyectos
import { projects } from '../../data/projects'

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
            Proyectos destacados
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Esta sección estará preparada para mostrar proyectos reales con descripción,
            tecnologías, repositorio y demo.
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

              {/* Tecnologías */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
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