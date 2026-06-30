// Componente UI
import Card from '../ui/Card'

// Datos de experiencia
import { experience } from '../../data/experience'

// Sección de experiencia y formación
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
            Experiencia
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
            Experiencia y formación
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Una visión breve de mi formación, enfoque profesional y proyectos en desarrollo.
          </p>
        </div>

        {/* Lista de experiencia */}
        <div className="grid gap-5 lg:grid-cols-3">
          {experience.map((item) => (
            <Card key={item.id} className="sm:p-6">
              {/* Periodo o categoría */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                {item.period}
              </p>

              {/* Título */}
              <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">
                {item.title}
              </h3>

              {/* Descripción */}
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
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