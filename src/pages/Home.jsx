// Secciones principales
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'

// Página principal del portafolio
function Home() {
  return (
    <>
      {/* Sección inicial */}
      <Hero />

      {/* Sección sobre mí */}
      <About />

      {/* Sección de proyectos */}
      <Projects />

      {/* Sección de tecnologías */}
      <Skills />

      {/* Sección de experiencia */}
      <Experience />

      {/* Sección de contacto */}
      <Contact />
    </>
  )
}

export default Home