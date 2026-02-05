const services = [
  'React & Node.js — fullstack',
  'Refactoring & DX',
  'Mentoring & pair programming',
  'Communication & transparence',
]

const stack = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Nest.js', 'Tailwind CSS', 'Jest', 'Playwright',
]

const projects = [
  { name: 'Plateforme SaaS B2B', client: 'FinTech', tags: ['React', 'Next.js', 'TypeScript'] },
  { name: 'Dashboard analytics', client: 'E-commerce', tags: ['React', 'Tailwind', 'D3'] },
  { name: 'App mobile hybride', client: 'Santé', tags: ['React Native', 'TypeScript'] },
]

const testimonials = [
  {
    author: 'Déromba Bissari',
    role: 'Ingénieur Logiciels',
    quote:
      'Son ouverture à l\'apprentissage et à la discussion est remarquable. Sa curiosité intellectuelle et son désir constant de s\'améliorer font de lui un atout précieux pour toute équipe.',
  },
  {
    author: 'Fabrice',
    role: 'CTO — Algoan',
    quote:
      'Dimitri a fait un travail remarquable sur un projet international avec des problématiques diverses. Toujours à l\'écoute et très investi. Nous avons continué à travailler ensemble.',
  },
  {
    author: 'Ted',
    role: 'Founder — EXA Labs',
    quote:
      'À l\'écoute et investi, Dimitri a su s\'intégrer rapidement malgré les nombreux challenges. Sa bonne humeur et son attention en font le profil idéal.',
  },
  {
    author: 'Baptiste',
    role: 'Développeur Front-End',
    quote:
      'Grâce à lui, le nivelage des connaissances au sein d\'une équipe se fait naturellement. Ses compétences vont bien au-delà du minimum fonctionnel. Je recommande Dimitri les yeux fermés.',
  },
  {
    author: 'Antony',
    role: 'CTO — Tudigo',
    quote: 'Super collaboration, échanges fluides et à l\'écoute. Je recommande.',
  },
  {
    author: 'Thomas',
    role: 'Founder & CTO — Sigilium',
    quote: 'Dimitri est extrêmement motivé et compétent, il cherche à aller au fond des sujets. Plusieurs missions réussies, un plaisir de travailler ensemble.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="flex items-center border-b border-border">
        <span className="border-r border-border px-6 py-4 text-sm font-bold uppercase tracking-widest">
          RELEASE
        </span>
        <nav className="flex">
          {['Accueil', 'Services', 'Projets', 'Blog', 'Contact'].map((item) => (
            <span
              key={item}
              className="cursor-pointer border-r border-border px-5 py-4 text-xs uppercase tracking-wider transition-colors hover:bg-fg hover:text-bg"
            >
              {item}
            </span>
          ))}
        </nav>
      </header>

      <div className="grid md:grid-cols-[2fr_1fr]">
        <section className="row-span-2 border-b border-r border-border p-10 md:p-16">
          <div className="mb-8 flex items-center gap-2">
            <span className="h-2 w-2 bg-fg" />
            <span className="text-xs uppercase tracking-widest">Disponible</span>
          </div>
          <h1 className="mb-4 text-5xl font-bold uppercase tracking-tight md:text-7xl">
            Dimitri Bourreau
          </h1>
          <p className="mb-3 text-base">Développeur fullstack React & Node.js</p>
          <p className="max-w-md text-sm text-muted">
            +40 missions freelance, 5/5 sur Malt. Je m&apos;intègre vite, je livre, je transmets.
          </p>
        </section>

        <section className="border-b border-border p-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest">Services</h2>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 bg-fg" />
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b border-border p-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest">Stack</h2>
          <div className="flex flex-wrap gap-1">
            {stack.map((tech) => (
              <span key={tech} className="border border-border px-2 py-0.5 text-xs">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="grid md:grid-cols-3">
        {projects.map((p) => (
          <section key={p.name} className="border-b border-r border-border p-8">
            <h3 className="mb-1 text-sm font-bold uppercase">{p.name}</h3>
            <p className="mb-3 text-xs text-muted">{p.client}</p>
            <div className="flex flex-wrap gap-1">
              {p.tags.map((tag) => (
                <span key={tag} className="border border-border px-2 py-0.5 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="border-b border-border">
        <h2 className="border-b border-border px-8 py-4 text-xs font-bold uppercase tracking-widest">
          Témoignages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="border-b border-r border-border p-6 md:border-b-0">
              <blockquote className="border-l-2 border-fg pl-4">
                <p className="mb-2 text-xs leading-relaxed">&quot;{t.quote}&quot;</p>
                <cite className="text-xs text-muted not-italic">
                  {t.author} — {t.role}
                </cite>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      <footer className="flex flex-wrap items-center border-t border-border">
        {['LinkedIn', 'Malt', 'GitHub', 'dimitri@release-dev.com'].map((link) => (
          <span
            key={link}
            className="cursor-pointer border-r border-border px-4 py-3 text-xs uppercase tracking-wider transition-colors hover:bg-fg hover:text-bg"
          >
            {link}
          </span>
        ))}
        <span className="ml-auto px-4 py-3 text-xs text-muted">© 2026 RELEASE</span>
      </footer>
    </div>
  )
}
