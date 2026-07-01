// Componente UI
import Card from '../ui/Card'

// Datos de áreas técnicas y herramientas
import { skills } from '../../data/skills'

// Sección de áreas técnicas y herramientas
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
            Áreas técnicas
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
            Áreas técnicas y herramientas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Conocimientos y herramientas aplicadas al desarrollo de interfaces,
            organización de proyectos, consumo de APIs y gestión de datos.
          </p>
        </div>

        {/* Grid de áreas técnicas */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.id} className="flex flex-col">
              {/* Nombre del área técnica */}
              <h3 className="text-center text-lg font-semibold text-slate-950 dark:text-white">
                {skill.name}
              </h3>

              {/* Descripción del área técnica */}
              <p className="mt-3 text-center text-sm leading-6 text-slate-600 dark:text-slate-300">
                {skill.description}
              </p>

              {/* Herramientas del área */}
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                {skill.tools.map((tool) => {
                  const Icon = tool.icon

                  return (
                    <div
                      key={tool.id}
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-500/60 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-400/60"
                    >
                      <Icon
                        className="h-4 w-4 shrink-0"
                        style={{ color: tool.color }}
                        aria-hidden="true"
                      />
                      <span>{tool.name}</span>
                    </div>
                  )
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills