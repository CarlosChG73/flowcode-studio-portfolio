// Componente reutilizable de botón/enlace
function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  // Estilos base
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-cyan-500 dark:focus-visible:outline-cyan-300'

  // Variantes visuales
  const variants = {
    primary:
      'bg-cyan-500 text-white hover:scale-105 hover:bg-cyan-600 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200',
    secondary:
      'border border-slate-300 bg-white/70 text-slate-900 hover:scale-105 hover:border-cyan-500 hover:text-cyan-700 dark:border-white/20 dark:bg-white/5 dark:text-white dark:backdrop-blur dark:hover:border-cyan-300 dark:hover:text-cyan-200',
    ghost:
      'border border-slate-200 text-slate-700 hover:border-cyan-500 hover:text-cyan-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300',
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`

  // Si recibe href, se renderiza como enlace
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    )
  }

  // Si no recibe href, se renderiza como botón
  return (
    <button type={type} className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

export default Button