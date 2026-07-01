// Componente UI
import Card from '../ui/Card'

// Datos de formación
import { experience } from '../../data/experience'

// Sección de formación académica y perfil profesional
function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-24 border-t border-slate-200 px-5 py-14 transition-colors sm:px-6 sm:py-16 lg:py-20 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado de sección */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Formación
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
            Formación académica y desarrollo profesional
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Formación universitaria en sistemas computacionales y desarrollo
            profesional orientado a la creación de soluciones digitales.
          </p>
        </div>

        {/* Lista de formación */}
        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
          {experience.map((item) => (
            <Card key={item.id} className="sm:p-6">
              {/* Categoría */}
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                {item.period}
              </p>

              {/* Título */}
              <h3 className="mt-4 text-center text-xl font-semibold text-slate-950 dark:text-white">
                {item.title}
              </h3>

              {/* Descripción */}
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience