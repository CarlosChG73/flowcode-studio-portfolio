// Componente reutilizable de etiqueta
function Badge({ children, className = '', ...props }) {
  return (
    <span
      className={`inline-flex rounded-full border border-cyan-500/40 px-3 py-1 text-xs font-medium text-cyan-700 dark:border-cyan-400/40 dark:text-cyan-300 ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge