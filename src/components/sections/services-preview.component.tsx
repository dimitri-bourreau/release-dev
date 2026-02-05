const services = [
  'React & Node.js — fullstack',
  'Refactoring & DX',
  'Mentoring & pair programming',
  'Communication & transparence',
]

export function ServicesPreview() {
  return (
    <section className="border-border border-b p-8">
      <h2 className="mb-4 text-xs font-bold tracking-widest uppercase">
        Services
      </h2>
      <ul className="space-y-2">
        {services.map((s) => (
          <li key={s} className="flex items-center gap-2 text-sm">
            <span className="bg-fg h-1.5 w-1.5" />
            {s}
          </li>
        ))}
      </ul>
    </section>
  )
}
