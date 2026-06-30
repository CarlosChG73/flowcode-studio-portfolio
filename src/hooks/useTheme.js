// Estado y efectos de React
import { useEffect, useState } from 'react'

// Hook para manejar modo claro/oscuro
function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Lee tema guardado o usa oscuro por defecto
    return localStorage.getItem('theme') || 'dark'
  })

  // Aplica el tema al documento
  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  // Cambia entre modo claro y oscuro
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return {
    theme,
    toggleTheme,
  }
}

export default useTheme