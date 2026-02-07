import { type Metadata } from 'next'
import { SectionTitle } from '@/components/page-title.component'

export const metadata: Metadata = { title: 'Ressources' }

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
    title: 'BastiUi',
    url: 'https://www.youtube.com/@BastiUi',
    desc: 'UI et veille.',
  },
  {
    title: 'CodeAesthetic',
    url: 'https://www.youtube.com/@CodeAesthetic',
    desc: 'Vulgarisation excellente et graphique.',
  },
  {
    title: 'CodeTV',
    url: 'https://www.youtube.com/@codetv-dev',
    desc: 'Podcasts & émissions pour devs',
  },
  {
    title: 'cultrepo',
    url: 'https://www.youtube.com/@cultrepo',
    desc: 'Documentaires sur des projets open source.',
  },
  {
    title: 'Delba',
    url: 'https://www.youtube.com/@Delba',
    desc: 'Vulgarations autour de Next.js',
  },
  {
    title: 'Deus Ex Silicium',
    url: 'https://www.youtube.com/@dexsilicium',
    desc: 'Vulgarisation hardware excellente.',
  },
  {
    title: 'NetflixEngineering',
    url: 'https://www.youtube.com/@NetflixEngineering',
    desc: "Talks d'ingénieurs chez Netflix.",
  },
  {
    title: 'Theo - t3.gg',
    url: 'https://www.youtube.com/@t3dotgg',
    desc: 'Veille technique de qualité.',
  },
  {
    title: 'yrougy',
    url: 'https://www.youtube.com/@yrougy',
    desc: "Veille autour de l'infra.",
  },
]

const books = [
  {
    title: 'Coder proprement',
    url: 'https://amzn.eu/d/022zSEqr',
    desc: 'Robert C. Martin.',
  },
  {
    title: 'Pourquoi nous dormons',
    url: 'https://www.amazon.fr/dp/B07GQBSSZF',
    desc: 'Matthew Walker.',
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
    title: 'The Software Craftsman',
    url: 'https://amzn.eu/d/0ceOdvMT',
    desc: 'Professionalism, Pragmatism, Pride.',
  },
  {
    title: "You Don't Know JS",
    url: 'https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md',
    desc: '1st edition — Kyle Simpson.',
  },
  {
    title: "You Don't Know JS Yet",
    url: 'https://github.com/getify/You-Dont-Know-JS',
    desc: '2nd edition — Kyle Simpson.',
  },
]

type Item = { title: string; url: string; desc: string }

function Section({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="border-border border-b">
      <SectionTitle>{title}</SectionTitle>
      <div className="-mt-px grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border hover:bg-accent hover:text-bg group -mb-px -mr-px block cursor-pointer border-r border-b p-8 transition-colors"
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

export default function RessourcesPage() {
  return (
    <>
      <Section title="Cours en ligne" items={courses} />
      <Section title="Vidéos" items={videos} />
      <Section title="Livres" items={books} />
    </>
  )
}
