const approach = [
  {
    title: 'Revues de code',
    desc: 'Partager la connaissance, garantir que chaque merge améliore le projet. Commentaires bienveillants, non-bloquants explicites, zéro égo.',
  },
  {
    title: 'Conception',
    desc: 'Petits commits clairs, interface séparée de la logique métier, TypeScript strict, tests auto, documentation accessible à tous.',
  },
  {
    title: 'Communication',
    desc: "Directe et factuelle. Je signale les blocages vite, je ne sais pas tout et je l'assume. La réussite de l'équipe prime.",
  },
  {
    title: 'Planification',
    desc: 'Suivi du temps, bilans quotidiens, concentration protégée. Chaque fin de journée : résumé + propositions pour le lendemain.',
  },
]

export function ApproachSection() {
  return (
    <section>
      <h2 className="border-border bg-fg/5 border-b px-8 py-4 text-xs font-bold tracking-widest uppercase">
        Comment je travaille
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {approach.map((a) => (
          <div key={a.title} className="border-border border-r border-b p-6">
            <h3 className="mb-2 text-sm font-bold uppercase">{a.title}</h3>
            <p className="text-muted text-xs leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
