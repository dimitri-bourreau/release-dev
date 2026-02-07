const services = [
  { label: 'Refactoring & DX', color: 'bg-secondary' },
  { label: 'Mentoring & pair programming', color: 'bg-tertiary' },
  { label: 'Communication & documentation', color: 'bg-secondary' },
  { label: 'Architecture hexagonale', color: 'bg-tertiary' },
]

export function ServicesPreview() {
  return (
    <section className="px-10">
      <ul className="space-y-2">
        {services.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-sm">
            <span className={`${s.color} h-1.5 w-1.5`} />
            {s.label}
          </li>
        ))}
      </ul>
    </section>
  )
}
