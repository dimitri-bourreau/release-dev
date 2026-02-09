import { SectionTitle } from '@/components/page-title.component'

const colors = ['border-l-accent', 'border-l-secondary', 'border-l-tertiary']

const testimonials = [
  {
    author: 'Déromba',
    role: 'Développeur backend',
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
    role: 'Développeur frontend',
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

export function TestimonialsSection() {
  return (
    <section className="border-border border-b">
      <SectionTitle>Témoignages</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={t.author}
            className="border-border border-r border-b p-6 md:border-b-0"
          >
            <blockquote
              className={`border-l-2 pl-4 ${colors[i % colors.length]}`}
            >
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
  )
}
