// Componente UI
import Button from '../ui/Button'

// Assets del Hero
import heroImage from '../../assets/images/hero-flowcode-studio.webp'
import logoImage from '../../assets/logos/logo-ccg.png'

// Componente principal del Hero
function Hero() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/10"
    >
      {/* Imagen de fondo optimizada */}
      <img
        src={heroImage}
        alt="Espacio de trabajo tecnológico con monitores y código"
        title="Imagen de portada de Flowcode Studio"
        width="1600"
        height="900"
        className="absolute inset-0 h-full w-full object-cover object-center"
        decoding="async"
      />

      {/* Capa de contraste */}
      <div className="absolute inset-0 bg-slate-950/35" />

      {/* Degradado para legibilidad */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-slate-950/55 to-slate-950" />

      {/* Contenido principal */}
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-5 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
        {/* Logo principal */}
        <img
          src={logoImage}
          alt="Logo de Flowcode Studio by Carlos Chávez"
          title="Flowcode Studio by Carlos Chávez"
          width="96"
          height="96"
          className="mb-5 h-18 w-18 rounded-full border border-white/20 bg-white/90 object-contain p-3 shadow-lg shadow-black/30 sm:h-24 sm:w-24"
          decoding="async"
        />

        {/* Marca */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300 sm:text-sm">
          Flowcode Studio
        </p>

        {/* Nombre principal */}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Carlos Chávez
        </h1>

        {/* Formación profesional */}
        <p className="mt-4 text-base font-medium text-slate-200 sm:text-lg">
          Ingeniero en Sistemas Computacionales
        </p>

        {/* Áreas de enfoque */}
        <p className="mt-3 text-sm font-semibold text-cyan-200 sm:text-base">
          Desarrollo de software · Soluciones digitales · Soporte tecnológico
        </p>

        {/* Descripción principal */}
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Ingeniero en Sistemas Computacionales orientado al desarrollo de
          software, soporte tecnológico y creación de soluciones digitales
          funcionales, organizadas y adaptables.
        </p>

        {/* Acción principal */}
        <div className="mt-7 flex w-full max-w-xs justify-center">
          <Button href="#sobre-mi" variant="primary">
            Conocer mi perfil
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero