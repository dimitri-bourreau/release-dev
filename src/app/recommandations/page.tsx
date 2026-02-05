import { type Metadata } from 'next'

export const metadata: Metadata = { title: 'Recommandations' }

const courses = [
  {
    title: 'Frontend Masters',
    url: 'https://frontendmasters.com',
    desc: 'Des cours que je recommande vivement, grande qualité.',
  },
  {
    title: 'Execute Program',
    url: 'https://www.executeprogram.com',
    desc: "Excellente façon d'apprendre TypeScript, fun et qualitatif.",
  },
  {
    title: 'Three.js Journey',
    url: 'https://threejs-journey.com',
    desc: 'Excellents cours pour apprendre Three.js.',
  },
]

const videos = [
  {
    title: 'Theo - t3.gg',
    url: 'https://www.youtube.com/@t3dotgg',
    desc: 'Veille technique de qualité.',
  },
]

const books = [
  {
    title: 'The Software Craftsman',
    url: 'https://amzn.eu/d/0ceOdvMT',
    desc: 'Professionalism, Pragmatism, Pride.',
  },
  {
    title: 'Slack',
    url: 'https://amzn.eu/d/00hYRaZR',
    desc: 'Getting Past Burnout, Busywork, and the Myth of Total Efficiency.',
  },
  {
    title: 'The Laws of Simplicity',
    url: 'https://amzn.eu/d/0aHotSAa',
    desc: 'John Maeda.',
  },
  {
    title: 'The Pragmatic Programmer',
    url: 'https://amzn.eu/d/0gG0YxwC',
    desc: 'Your Journey to Mastery.',
  },
  {
    title: 'Pourquoi nous dormons',
    url: 'https://www.amazon.fr/dp/B07GQBSSZF',
    desc: 'Matthew Walker.',
  },
  {
    title: 'Coder proprement',
    url: 'https://amzn.eu/d/022zSEqr',
    desc: 'Robert C. Martin.',
  },
  {
    title: "You Don't Know JS Yet",
    url: 'https://github.com/getify/You-Dont-Know-JS',
    desc: '2nd edition — Kyle Simpson.',
  },
  {
    title: "You Don't Know JS",
    url: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md',
    desc: '1st edition — Kyle Simpson.',
  },
]

type Item = { title: string; url: string; desc: string }

function Section({ title, items }: { title: string; items: Item[] }) {
  return (
    <section>
      <h2 className="border-border bg-fg/5 border-b px-8 py-4 text-xs font-bold tracking-widest uppercase">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border hover:bg-fg hover:text-bg group block cursor-pointer border-b border-r p-8 transition-colors"
          >
            <h3 className="mb-2 text-sm font-bold uppercase">{item.title}</h3>
            <p className="text-muted group-hover:text-bg text-xs leading-relaxed">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default function RecommandationsPage() {
  return (
    <>
      <h1 className="border-border bg-fg/5 border-b px-8 py-6 text-lg font-bold tracking-widest uppercase">
        Recommandations
      </h1>
      <Section title="Cours en ligne" items={courses} />
      <Section title="Vidéos" items={videos} />
      <Section title="Livres" items={books} />
    </>
  )
}
