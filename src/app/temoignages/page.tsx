import { type Metadata } from 'next'

export const metadata: Metadata = { title: 'Témoignages' }

const colors = ['border-accent', 'border-secondary', 'border-tertiary']
const bgColors = ['bg-accent/5', 'bg-secondary/5', 'bg-tertiary/5']
const textColors = ['text-accent', 'text-secondary', 'text-tertiary']

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

export default function TemoignagesPage() {
  return (
    <>
      <h1 className="border-border bg-fg/5 border-b px-8 py-6 text-lg font-bold tracking-widest uppercase">
        Témoignages
      </h1>
      <div className="grid gap-6 p-8 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <div
            key={t.author}
            className={`border-l-4 ${colors[i % 3]} ${bgColors[i % 3]} p-8`}
          >
            <p className="mb-6 text-lg leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center text-sm font-bold ${colors[i % 3]} border ${bgColors[i % 3]}`}
              >
                {t.author[0]}
              </div>
              <div>
                <p className={`text-sm font-bold ${textColors[i % 3]}`}>
                  {t.author}
                </p>
                <p className="text-muted text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
