const differentiators = [
  {
    title: 'Architecture hexagonale',
    desc: "J'applique les principes de l'architecture hexagonale côté frontend : ports, adapters, découplage strict entre UI et logique métier.",
    color: 'border-l-accent',
  },
  {
    title: 'Legacy & refactoring',
    desc: 'Je prends plaisir à moderniser des codebases vieillissantes. Migration progressive, zéro régression, résultats mesurables.',
    color: 'border-l-secondary',
  },
  {
    title: 'Mentorat',
    desc: 'Accompagner les développeurs juniors et confirmés fait partie de mon quotidien. Revues de code bienveillantes, pair programming, montée en compétences.',
    color: 'border-l-tertiary',
  },
  {
    title: 'Documentation',
    desc: 'Je rédige une documentation technique claire et accessible. ADR, guides, onboarding : chaque décision est tracée et partagée.',
    color: 'border-l-accent',
  },
]

export function ApproachSection() {
  return (
    <section>
      <h2 className="border-border bg-fg/5 border-b border-l-4 border-l-secondary px-8 py-4 text-xs font-bold tracking-widest uppercase">
        Ce qui me différencie
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {differentiators.map((a) => (
          <div key={a.title} className={`border-border border-r border-b border-l-4 ${a.color} p-6`}>
            <h3 className="mb-2 text-sm font-bold uppercase">{a.title}</h3>
            <p className="text-muted text-xs leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
