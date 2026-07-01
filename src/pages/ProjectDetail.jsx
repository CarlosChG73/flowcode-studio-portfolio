// Efectos de React
import { useEffect } from 'react'

// Herramientas de React Router
import { Link, useParams } from 'react-router-dom'

// Íconos de tecnologías, herramientas y acciones
import {
  SiGit,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import {
  FiCheckCircle,
  FiCloud,
  FiExternalLink,
  FiFileText,
  FiGithub,
  FiImage,
} from 'react-icons/fi'
import { TbApi } from 'react-icons/tb'

// Datos de proyectos
import { projects } from '../data/projects'

// Imágenes optimizadas del proyecto Flowcode Studio Portfolio
import portfolioHomeDesktop from '../assets/images/projects/portfolio/portfolio-home-desktop.webp'
import portfolioResponsiveMockup from '../assets/images/projects/portfolio/portfolio-responsive-mockup.webp'
import portfolioLightDarkMode from '../assets/images/projects/portfolio/portfolio-light-dark-mode.webp'
import portfolioContactForm from '../assets/images/projects/portfolio/portfolio-contact-form.webp'
import portfolioImageOptimization from '../assets/images/projects/portfolio/portfolio-image-optimization.webp'

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
  'React Icons': {
    icon: FiImage,
    color: '#22D3EE',
  },
  Sharp: {
    icon: FiImage,
    color: '#84CC16',
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
}

// Navegación interna de la ficha técnica
const projectDetailLinks = [
  { label: 'Resumen', sectionId: 'project-summary' },
  { label: 'Objetivo', sectionId: 'project-objective' },
  { label: 'Evidencia visual', sectionId: 'project-visual-evidence' },
  { label: 'Características', sectionId: 'project-features' },
  { label: 'Decisiones técnicas', sectionId: 'project-decisions' },
  { label: 'Resultado', sectionId: 'project-result' },
  { label: 'Enlaces', sectionId: 'project-links' },
]

// Evidencia visual del proyecto
const portfolioVisualEvidence = [
  {
    id: 'responsive',
    title: 'Diseño responsivo',
    description:
      'Vista adaptada para escritorio y móvil, manteniendo una presentación clara, consistente y profesional.',
    image: portfolioResponsiveMockup,
    alt: 'Mockup responsivo del portafolio Flowcode Studio en escritorio y móvil',
  },
  {
    id: 'theme',
    title: 'Modo claro y oscuro',
    description:
      'Interfaz preparada para alternar entre modo claro y oscuro según la preferencia visual del usuario.',
    image: portfolioLightDarkMode,
    alt: 'Comparación visual del portafolio en modo claro y modo oscuro',
  },
  {
    id: 'contact',
    title: 'Formulario de contacto',
    description:
      'Formulario profesional conectado a backend serverless para el envío seguro de mensajes.',
    image: portfolioContactForm,
    alt: 'Mockup del formulario de contacto del portafolio Flowcode Studio',
  },
  {
    id: 'optimization',
    title: 'Optimización de imágenes',
    description:
      'Optimización de recursos visuales para reducir peso de carga y mejorar el rendimiento del sitio.',
    image: portfolioImageOptimization,
    alt: 'Comparativa visual de optimización de imagen principal en formato WebP',
  },
]

// Página de detalle de proyecto
function ProjectDetail() {
  const { projectId } = useParams()

  // Lleva la página al inicio al abrir un proyecto
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  // Busca el proyecto según la ruta
  const project = projects.find((item) => item.id === projectId)

  // Hace scroll interno considerando la altura del navbar principal
  const handleProjectSectionScroll = (sectionId) => {
    const section = document.getElementById(sectionId)
    const navbar = document.querySelector('header')

    if (!section) return

    const navbarHeight = navbar?.offsetHeight || 80
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight - 16

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    })
  }

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

  const isPortfolioProject = project.id === 'portfolio-react'

  return (
    <section className="px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado del proyecto */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            {project.status}
          </p>

          <h1 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            {project.title}
          </h1>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
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
        </div>

        {/* Imagen principal del proyecto */}
        {isPortfolioProject && (
          <figure className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/60 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20">
            <img
              src={portfolioHomeDesktop}
              alt="Vista principal del proyecto Flowcode Studio Portfolio en escritorio"
              title="Vista principal de Flowcode Studio Portfolio"
              width="1280"
              height="720"
              className="w-full rounded-xl object-cover"
              loading="lazy"
              decoding="async"
            />

            <figcaption className="px-2 py-4 text-center text-sm leading-6 text-slate-600 dark:text-slate-300">
              Vista general del portafolio profesional desarrollado con enfoque
              responsivo, estructura organizada y presentación visual clara.
            </figcaption>
          </figure>
        )}

        {/* Menú interno del proyecto */}
        <nav
          className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/60 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20"
          aria-label="Navegación interna del proyecto"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {projectDetailLinks.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:-translate-y-0.5 hover:border-cyan-500/60 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300"
                onClick={() => handleProjectSectionScroll(link.sectionId)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Contenido técnico del proyecto */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {/* Resumen */}
          <article
            id="project-summary"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 transition-colors sm:p-6 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Resumen
            </p>

            <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
              Descripción del proyecto
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {project.summary}
            </p>
          </article>

          {/* Objetivo */}
          <article
            id="project-objective"
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 transition-colors sm:p-6 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Objetivo
            </p>

            <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
              Propósito del desarrollo
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {project.objective}
            </p>
          </article>
        </div>

        {/* Evidencia visual del proyecto */}
        {isPortfolioProject && (
          <article
            id="project-visual-evidence"
            className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 transition-colors sm:p-6 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Evidencia visual
            </p>

            <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
              Vistas representativas del proyecto
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              Estas vistas muestran partes clave del portafolio: adaptación
              responsiva, soporte de tema visual, formulario de contacto y
              optimización de recursos.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {portfolioVisualEvidence.map((item) => (
                <figure
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-900"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    title={item.title}
                    width="1024"
                    height="768"
                    className="aspect-4/3 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  <figcaption className="p-4">
                    <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>
        )}

        {/* Características principales */}
        <article
          id="project-features"
          className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 transition-colors sm:p-6 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
            Características principales
          </p>

          <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
            Funcionalidades y elementos desarrollados
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900"
              >
                <FiCheckCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400"
                  aria-hidden="true"
                />

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* Decisiones técnicas */}
        <article
          id="project-decisions"
          className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 transition-colors sm:p-6 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
            Decisiones técnicas
          </p>

          <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
            Criterios aplicados durante el desarrollo
          </h2>

          <div className="mt-5 grid gap-3">
            {project.technicalDecisions.map((decision) => (
              <div
                key={decision}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900"
              >
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {decision}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* Resultado */}
        <article
          id="project-result"
          className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 transition-colors sm:p-6 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
            Resultado
          </p>

          <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
            Resultado alcanzado
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {project.result}
          </p>
        </article>

        {/* Enlaces del proyecto */}
        <article
          id="project-links"
          className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-lg shadow-slate-200/60 transition-colors sm:p-6 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
            Enlaces del proyecto
          </p>

          <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
            Demo y repositorio
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Los enlaces públicos estarán disponibles después de publicar el proyecto
            en GitHub y realizar el despliegue final en Vercel.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-cyan-600 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                <FiExternalLink className="h-4 w-4" aria-hidden="true" />
                Ver demo
              </a>
            ) : (
              <span className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-500 dark:border-white/10 dark:text-slate-400">
                Demo pendiente de publicación
              </span>
            )}

            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-500/60 px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:scale-105 hover:bg-cyan-500 hover:text-white dark:border-cyan-400/60 dark:text-cyan-300 dark:hover:bg-cyan-400 dark:hover:text-slate-950"
              >
                <FiGithub className="h-4 w-4" aria-hidden="true" />
                Ver repositorio
              </a>
            ) : (
              <span className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-500 dark:border-white/10 dark:text-slate-400">
                Repositorio pendiente de publicación
              </span>
            )}
          </div>
        </article>

        {/* Acción de regreso */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="rounded-full border border-cyan-500/60 px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:scale-105 hover:bg-cyan-500 hover:text-white dark:border-cyan-400/60 dark:text-cyan-300 dark:hover:bg-cyan-400 dark:hover:text-slate-950"
          >
            Volver al portafolio
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail