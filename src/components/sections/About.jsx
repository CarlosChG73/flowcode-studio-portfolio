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
            Desarrollo soluciones web modernas y responsivas
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
            Esta sección tendrá una descripción profesional breve sobre mi perfil,
            mi forma de trabajo y el tipo de soluciones que puedo construir.
          </p>
        </div>

        {/* Tarjeta descriptiva principal */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 transition-colors sm:p-8 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
              Soy desarrollador de software en formación continua, enfocado en crear
              interfaces web limpias, responsivas y funcionales. Este portafolio está
              diseñado para mostrar proyectos, habilidades técnicas y una forma de
              trabajo organizada.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
              Actualmente trabajo con tecnologías como HTML, CSS, JavaScript, React,
              Vite y Tailwind CSS. Mi objetivo es construir soluciones digitales claras,
              mantenibles y adaptadas a diferentes dispositivos.
            </p>
          </div>

          {/* Puntos clave */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60 dark:border-white/10 dark:bg-slate-900 dark:hover:border-cyan-400/60">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                Responsive
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Diseño adaptable para móvil, tablet y escritorio.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60 dark:border-white/10 dark:bg-slate-900 dark:hover:border-cyan-400/60">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                Código limpio
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Componentes claros, reutilizables y organizados.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60 dark:border-white/10 dark:bg-slate-900 dark:hover:border-cyan-400/60">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                Aprendizaje
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Mejora continua mediante proyectos prácticos.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About