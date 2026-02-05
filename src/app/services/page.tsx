import { type Metadata } from 'next'

export const metadata: Metadata = { title: 'Services' }

const services = [
  {
    title: 'Renfort équipe fullstack',
    desc: "Je rejoins votre équipe en tant que développeur fullstack React & Node.js. Opérationnel rapidement, je m'adapte à vos outils, vos process et votre rythme.",
    details: ['React', 'Next.js', 'Node.js', 'Nest.js', 'TypeScript'],
  },
  {
    title: 'Refactoring & DX',
    desc: "J'améliore votre codebase existante : refactoring, performance, outillage, tests. Du code plus clair, plus rapide, plus maintenable.",
    details: ['Refactoring', 'Tests auto', 'Performance', 'CI/CD', 'Tailwind'],
  },
  {
    title: 'Mentoring & pair programming',
    desc: "J'accompagne vos devs juniors et mid : revues de code bienveillantes, pair programming, partage de bonnes pratiques. Le niveau de l'équipe monte naturellement.",
    details: ['Code reviews', 'Pair programming', 'Best practices', 'TypeScript'],
  },
  {
    title: 'Projet from scratch',
    desc: "Je conçois et développe votre application de zéro : architecture, setup, développement, tests, déploiement. Stack moderne, code sobre et durable.",
    details: ['Architecture', 'Next.js', 'Nest.js', 'Playwright', 'Vercel'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <h1 className="border-border bg-fg/5 border-b px-8 py-6 text-lg font-bold tracking-widest uppercase">
        Services
      </h1>
      <div className="grid md:grid-cols-2">
        {services.map((s) => (
          <section key={s.title} className="border-border border-r border-b p-8">
            <h2 className="mb-3 text-sm font-bold uppercase">{s.title}</h2>
            <p className="text-muted mb-4 text-xs leading-relaxed">{s.desc}</p>
            <div className="flex flex-wrap gap-1">
              {s.details.map((d) => (
                <span key={d} className="border-border border px-2 py-0.5 text-xs">
                  {d}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="border-border border-b p-8 text-center">
        <p className="mb-4 text-sm tracking-wider uppercase">Un besoin ? Discutons-en.</p>
        <a
          href="/contact"
          className="bg-fg text-bg hover:bg-bg hover:text-fg border-fg inline-block cursor-pointer border px-8 py-3 text-xs tracking-widest uppercase transition-colors"
        >
          Me contacter
        </a>
      </section>
    </>
  )
}
