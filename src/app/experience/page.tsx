import { type Metadata } from 'next'
import Link from 'next/link'
import { SectionTitle } from '@/components/page-title.component'

export const metadata: Metadata = { title: 'Expérience' }

const stats = [
  { value: '6', label: "ans d'expérience" },
  { value: '40+', label: 'missions freelance' },
  { value: '5/5', label: 'sur Malt' },
  { value: '11', label: 'clients' },
]

type CaseStudy = {
  slug: string
  title: string
}

type Experience = {
  company: string
  period: string
  highlight: string
  caseStudies?: CaseStudy[]
}

const experiences: Experience[] = [
  {
    company: 'VISEO',
    period: '2025',
    highlight:
      'Architecture hexagonale pour une application React en environnement bancaire. Documentation technique adoptée comme référence interne.',
  },
  {
    company: 'Tudigo',
    period: '2023-2024',
    highlight:
      'Architecture hexagonale et monorepo NX pour moderniser le site. Pair programming et revues de code.',
  },
  {
    company: 'Artelia',
    period: '2022-2023',
    highlight:
      "Refactoring complet d'une application React, performances x10. Mentorat d'un développeur junior vers le freelancing.",
    caseStudies: [
      {
        slug: 'refonte-next-en-6-mois',
        title: 'Refonte Next.js en 6 mois',
      },
      {
        slug: 'comment-j-ai-divise-par-10-les-temps-de-chargement-d-une-app-next',
        title: 'Temps de chargement divisés par 10',
      },
    ],
  },
  {
    company: 'EXA Market',
    period: '2022',
    highlight:
      'POC en React et Tailwind pour un chat décentralisé avec le protocole Matrix. Collaboration open source.',
  },
  {
    company: 'EU4UA.org',
    period: '2022',
    highlight:
      "Contribution bénévole : conception technique d'une application React pour un projet humanitaire.",
  },
  {
    company: 'Sigilium',
    period: '2021-2022',
    highlight:
      'Add-in Microsoft Outlook avec signatures HTML et authentification SSO Azure.',
  },
  {
    company: 'Scality',
    period: '2021-2022',
    highlight:
      'Migration Node.js 10 → 16, remplacement des méthodes obsolètes pour améliorer les performances.',
  },
  {
    company: 'CIDJ',
    period: '2020-2022',
    highlight:
      "Maintenance et amélioration d'une application AngularJS, stabilité serveur Linux.",
  },
  {
    company: 'Algoan',
    period: '2020-2021',
    highlight:
      'Microservices backend et chatbot en Nest.js pour un grand groupe bancaire. Mission prolongée.',
  },
  {
    company: 'NL Europe',
    period: '2019-2020',
    highlight:
      "Refonte complète du design et des interfaces d'un site web d'influence européenne.",
  },
]

const skills = {
  'front-end': ['React.js', 'Next.js', 'AngularJS', 'TailwindCSS', 'Figma'],
  'back-end': ['Node.js', 'NestJS', 'API REST'],
  devops: ['GitLab', 'Microsoft Azure'],
  méthodologies: ['TDD', 'Refactoring', 'Architecture hexagonale'],
}

export default function ExperiencePage() {
  return (
    <>
      <section className="border-border border-b">
        <div className="flex items-center justify-between">
          <SectionTitle className="border-b-0">Expérience</SectionTitle>
          <a
            href="/cv-dimitri-bourreau.pdf"
            download
            className="border-border hover:bg-accent hover:text-bg mr-8 border px-4 py-2 text-xs font-medium transition-colors"
          >
            Télécharger le CV
          </a>
        </div>
        <div className="border-border border-b" />
        <div className="flex flex-wrap">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`border-border w-1/2 p-6 md:w-1/4 md:p-8 ${index === 0 || index === 2 ? 'border-r' : ''} ${index === 1 ? 'md:border-r' : ''}`}
            >
              <p className="text-accent text-3xl font-bold md:text-4xl">
                {stat.value}
              </p>
              <p className="text-muted mt-1 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-border border-b">
        <SectionTitle>Parcours</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="border-border flex flex-col gap-3 border-r border-b p-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-muted w-20 shrink-0 text-xs">
                  {exp.period}
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-bold uppercase">{exp.company}</h3>
                  <p className="text-muted text-xs">{exp.highlight}</p>
                </div>
              </div>
              {exp.caseStudies && exp.caseStudies.length > 0 && (
                <div className="border-border mt-2 border-t pt-3">
                  <p className="text-muted mb-2 text-[10px] font-bold tracking-wider uppercase">
                    Études de cas
                  </p>
                  <div className="flex flex-col gap-1">
                    {exp.caseStudies.map((caseStudy) => (
                      <Link
                        key={caseStudy.slug}
                        href={`/blog/${caseStudy.slug}`}
                        className="text-accent text-xs hover:underline"
                      >
                        → {caseStudy.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Compétences</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="border-border border-r border-b p-8">
              <h3 className="mb-3 text-sm font-bold uppercase">{category}</h3>
              <div className="flex flex-wrap gap-1">
                {items.map((item) => (
                  <span
                    key={item}
                    className="border-border border px-2 py-0.5 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
