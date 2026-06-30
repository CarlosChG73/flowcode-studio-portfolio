// Componente UI
import Card from '../ui/Card'

// Datos de tecnologías
import { skills } from '../../data/skills'

// Sección de tecnologías
function Skills() {
  return (
    <section
      id="tecnologias"
      className="scroll-mt-24 border-t border-slate-200 px-5 py-14 transition-colors sm:px-6 sm:py-16 lg:py-20 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado de sección */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Tecnologías
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
            Tecnologías que manejo
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Stack principal para construir interfaces web modernas, responsivas y organizadas.
          </p>
        </div>

        {/* Grid de tecnologías */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <Card key={skill.id} className="text-center">
              {/* Nombre de tecnología */}
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                {skill.name}
              </h3>

              {/* Descripción */}
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills