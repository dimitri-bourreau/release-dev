const services = [
  'React & Node.js — fullstack',
  'Refactoring & DX',
  'Mentoring & pair programming',
  'Communication & transparence',
  'Architecture hexagonale',
]

export function ServicesPreview() {
  return (
    <section className="border-border border-b p-8">
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
