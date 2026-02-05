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

const services = [
  'React & Node.js — fullstack',
  'Refactoring & DX',
  'Mentoring & pair programming',
  'Communication & transparence',
]

const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Nest.js',
  'Tailwind CSS',
  'Jest',
  'Playwright',
]

const testimonials = [
  {
    author: 'Déromba Bissari',
    role: 'Ingénieur Logiciels',
    quote:
      "Son ouverture à l'apprentissage et à la discussion est remarquable. Sa curiosité intellectuelle et son désir constant de s'améliorer font de lui un atout précieux pour toute équipe.",
  },
  {
    author: 'Fabrice',
    role: 'CTO — Algoan',
    quote:
      "Dimitri a fait un travail remarquable sur un projet international avec des problématiques diverses. Toujours à l'écoute et très investi. Nous avons continué à travailler ensemble.",
  },
  {
    author: 'Ted',
    role: 'Founder — EXA Labs',
    quote:
      "À l'écoute et investi, Dimitri a su s'intégrer rapidement malgré les nombreux challenges. Sa bonne humeur et son attention en font le profil idéal.",
  },
  {
    author: 'Baptiste',
    role: 'Développeur Front-End',
    quote:
      "Grâce à lui, le nivelage des connaissances au sein d'une équipe se fait naturellement. Ses compétences vont bien au-delà du minimum fonctionnel. Je recommande Dimitri les yeux fermés.",
  },
  {
    author: 'Antony',
    role: 'CTO — Tudigo',
    quote:
      "Super collaboration, échanges fluides et à l'écoute. Je recommande.",
  },
  {
    author: 'Thomas',
    role: 'Founder & CTO — Sigilium',
    quote:
      'Dimitri est extrêmement motivé et compétent, il cherche à aller au fond des sujets. Plusieurs missions réussies, un plaisir de travailler ensemble.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-border flex items-center border-b">
        <span className="border-border border-r px-6 py-4 text-sm font-bold tracking-widest uppercase">
          RELEASE
        </span>
        <nav className="flex">
          {['Accueil', 'Services', 'Projets', 'Blog', 'Contact'].map((item) => (
            <span
              key={item}
              className="border-border hover:bg-fg hover:text-bg cursor-pointer border-r px-5 py-4 text-xs tracking-wider uppercase transition-colors"
            >
              {item}
            </span>
          ))}
        </nav>
      </header>

      <div className="grid md:grid-cols-[2fr_1fr]">
        <section className="border-border row-span-2 border-r border-b p-10 md:p-16">
          <div className="mb-8 flex items-center gap-2">
            <span className="bg-fg h-2 w-2" />
            <span className="text-xs tracking-widest uppercase">
              Disponible
            </span>
          </div>
          <h1 className="mb-4 text-5xl font-bold tracking-tight uppercase md:text-7xl">
            Dimitri Bourreau
          </h1>
          <p className="mb-3 text-base">
            Développeur fullstack React & Node.js
          </p>
          <p className="text-muted max-w-md text-sm">
            6 ans d&apos;expérience, +40 missions freelance, 5/5 sur Malt. Je
            m&apos;intègre vite, je livre, je transmets.
          </p>
        </section>

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

        <section className="border-border border-b p-8">
          <h2 className="mb-4 text-xs font-bold tracking-widest uppercase">
            Stack
          </h2>
          <div className="flex flex-wrap gap-1">
            {stack.map((tech) => (
              <span
                key={tech}
                className="border-border border px-2 py-0.5 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      <section>
        <h2 className="border-border border-b px-8 py-4 text-xs font-bold tracking-widest uppercase">
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

      <section className="border-border border-b">
        <h2 className="border-border border-b px-8 py-4 text-xs font-bold tracking-widest uppercase">
          Témoignages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="border-border border-r border-b p-6 md:border-b-0"
            >
              <blockquote className="border-fg border-l-2 pl-4">
                <p className="mb-2 text-xs leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
                <cite className="text-muted text-xs not-italic">
                  {t.author} — {t.role}
                </cite>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-border flex flex-wrap items-center border-t">
        {['LinkedIn', 'Malt', 'GitHub', 'dimitri@release-dev.com'].map(
          (link) => (
            <span
              key={link}
              className="border-border hover:bg-fg hover:text-bg cursor-pointer border-r px-4 py-3 text-xs tracking-wider uppercase transition-colors"
            >
              {link}
            </span>
          ),
        )}
        <span className="text-muted ml-auto px-4 py-3 text-xs">
          © 2026 RELEASE
        </span>
      </footer>
    </div>
  )
}
