// Sección Sobre mí
function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 border-t border-slate-200 px-5 py-14 transition-colors sm:px-6 sm:py-16 lg:py-20 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado de sección */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Sobre mí
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            Perfil profesional orientado a soluciones digitales
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
            Integro formación técnica, organización y documentación para desarrollar
            soluciones digitales funcionales, claras y adaptables.
          </p>
        </div>

        {/* Tarjeta descriptiva principal */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 transition-colors sm:p-8 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
              Soy Ingeniero en Sistemas Computacionales, egresado de la Universidad
              Virtual del Estado de Guanajuato (UVEG), con formación en desarrollo
              de software, sistemas computacionales, bases de datos, redes y
              tecnologías de información.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
              Mi enfoque combina desarrollo de software, soporte tecnológico y
              organización de soluciones digitales, con atención a la funcionalidad,
              la claridad, la documentación y la mejora continua.
            </p>
          </div>

          {/* Puntos clave */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60 dark:border-white/10 dark:bg-slate-900 dark:hover:border-cyan-400/60">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                Desarrollo de software
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Construcción de soluciones digitales organizadas, funcionales y adaptables.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60 dark:border-white/10 dark:bg-slate-900 dark:hover:border-cyan-400/60">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                Soporte tecnológico
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Diagnóstico, seguimiento, documentación y comunicación clara.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60 dark:border-white/10 dark:bg-slate-900 dark:hover:border-cyan-400/60">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                Plataformas digitales
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Organización de contenidos, entornos digitales y procesos tecnológicos.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About