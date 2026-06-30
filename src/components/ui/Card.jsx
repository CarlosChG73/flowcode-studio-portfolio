// Componente reutilizable de tarjeta
function Card({ children, className = '', as: Tag = 'article', ...props }) {
  return (
    <Tag
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20 dark:hover:border-cyan-400/60 dark:hover:bg-white/6 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Card