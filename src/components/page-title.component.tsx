type Props = {
  children: React.ReactNode
  className?: string
}

export function PageTitle({ children, className = '' }: Props) {
  return (
    <h1
      className={`text-accent border-border border-l-accent border-b border-l-4 px-8 py-6 text-lg font-bold tracking-widest uppercase ${className}`}
    >
      {children}
    </h1>
  )
}

export function SectionTitle({ children, className = '' }: Props) {
  return (
    <h2
      className={`text-accent border-border border-l-accent border-b border-l-4 px-8 py-4 text-xs font-bold tracking-widest uppercase ${className}`}
    >
      {children}
    </h2>
  )
}
