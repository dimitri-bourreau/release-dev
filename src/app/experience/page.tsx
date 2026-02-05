import { type Metadata } from 'next'

export const metadata: Metadata = { title: 'Expérience' }

type Experience = {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  tags: string[]
}

const experiences: Experience[] = [
  {
    role: 'Ingénieur logiciel',
    company: 'VISEO',
    location: 'Grenoble · Sur site',
    period: 'janv. 2025 – juil. 2025',
    bullets: [
      "Conception d'une architecture hexagonale pour une application React, centralisant le suivi de documents sensibles dans un environnement bancaire complexe.",
      "Rédaction d'une documentation technique exhaustive, adoptée comme référence interne, facilitant la transition et la collaboration entre équipes.",
      "Amélioration de la dynamique d'équipe et de la collaboration grâce à une approche technique fédératrice.",
    ],
    tags: ['React.js', 'TypeScript', 'GitLab', 'Jest', 'Architecture hexagonale'],
  },
  {
    role: 'Développeur front-end freelance',
    company: 'Tudigo',
    location: 'Bordeaux · Sur site',
    period: 'oct. 2023 – janv. 2024',
    bullets: [
      "Mise en place d'une architecture hexagonale et d'un monorepo NX pour moderniser le site, améliorant la maintenabilité et la performance.",
      'Partage de connaissances via des sessions de pair programming et des revues de code, renforçant la qualité du code et la collaboration inter-équipes.',
    ],
    tags: ['React.js', 'TypeScript', 'NX', 'Jest', 'Architecture hexagonale'],
  },
  {
    role: 'Développeur front-end freelance, architecte logiciel',
    company: 'Artelia',
    location: 'Télétravail',
    period: 'juil. 2022 – sept. 2023',
    bullets: [
      "Refactoring complet d'une application React, multipliant les performances par 10 grâce à une architecture hexagonale et des tests unitaires.",
      "Mentorat d'un développeur junior, facilitant son évolution vers le freelancing, et documentation des processus pour l'équipe.",
      'Collaboration avec les équipes pour intégrer des améliorations backend après le succès du refactoring front.',
    ],
    tags: ['React.js', 'TypeScript', 'Storybook', 'Jest', 'React Query'],
  },
  {
    role: 'Développeur front-end freelance',
    company: 'EXA Market',
    location: '',
    period: 'mars 2022 – juil. 2022',
    bullets: [
      "Développement d'un POC en React et Tailwind pour un chat décentralisé, validant la faisabilité technique avec le protocole Matrix.",
      "Collaboration avec la communauté open source pour intégrer un SDK Matrix, renforçant l'innovation dans un environnement startup.",
    ],
    tags: ['React.js', 'TailwindCSS', 'Matrix', 'TypeScript', 'Architecture hexagonale'],
  },
  {
    role: 'Développeur front-end freelance',
    company: 'EU4UA.org',
    location: '',
    period: 'mars 2022 – avr. 2022',
    bullets: [
      "Contribution bénévole à la conception technique d'une application React pour un projet humanitaire, posant des bases solides pour un développement autonome.",
      "Leadership technique dans un contexte urgent, structurant le projet pour une application évolutive et maintenable.",
    ],
    tags: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Figma'],
  },
  {
    role: 'Développeur front-end freelance',
    company: 'Sigilium',
    location: '',
    period: 'oct. 2021 – févr. 2022',
    bullets: [
      "Développement rapide d'un add-in pour Microsoft Outlook, intégrant des signatures HTML avec authentification SSO pour améliorer la personnalisation des emails.",
    ],
    tags: ['TypeScript', 'Node.js', 'Microsoft Azure', 'React.js', 'HTML5'],
  },
  {
    role: 'Développeur back-end freelance',
    company: 'Scality',
    location: '',
    period: 'nov. 2021 – janv. 2022',
    bullets: [
      'Mise à jour de projets Node.js de la version 10 à 16, remplaçant les méthodes obsolètes pour améliorer les performances des applications.',
    ],
    tags: ['Node.js', 'TypeScript', 'TDD', 'JavaScript', 'Refactoring'],
  },
  {
    role: 'Développeur Full Stack freelance',
    company: 'CIDJ',
    location: '',
    period: 'déc. 2020 – janv. 2022',
    bullets: [
      "Maintenance et amélioration d'une application AngularJS, optimisant l'expérience utilisateur et assurant la stabilité sur un serveur Linux.",
    ],
    tags: ['AngularJS', 'TypeScript', 'Node.js', 'HTML5', 'CSS3'],
  },
  {
    role: 'Développeur back-end freelance',
    company: 'Algoan',
    location: '',
    period: 'nov. 2020 – oct. 2021',
    bullets: [
      "Développement de microservices backend et d'un chatbot en Nest.js pour un grand groupe bancaire, respectant des contraintes réglementaires strictes.",
      'Apprentissage rapide de Nest.js, livrant des solutions fiables et maintenables, ce qui a conduit à une prolongation de mission.',
    ],
    tags: ['NestJS', 'Node.js', 'TypeScript', 'API REST', 'Jest'],
  },
  {
    role: 'Développeur front-end freelance',
    company: 'Sigilium',
    location: '',
    period: 'nov. 2020 – déc. 2020',
    bullets: [
      "Développement d'un add-in pour Microsoft Outlook, facilitant l'intégration et la synchronisation des signatures HTML via Microsoft Azure.",
    ],
    tags: ['TypeScript', 'Node.js', 'Microsoft Azure', 'React.js', 'HTML5'],
  },
  {
    role: 'Développeur front-end freelance',
    company: 'NL Europe',
    location: '',
    period: 'oct. 2019 – mai 2020',
    bullets: [
      "Refonte complète du design et des interfaces d'un site web d'influence européenne, améliorant l'expérience utilisateur et la fonctionnalité du système.",
    ],
    tags: ['React.js', 'TypeScript', 'Adobe XD', 'HTML5', 'CSS3'],
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
      <h1 className="border-border bg-fg/5 border-b px-8 py-6 text-lg font-bold tracking-widest uppercase">
        Expérience
      </h1>

      <section>
        <h2 className="border-border bg-fg/5 border-b px-8 py-4 text-xs font-bold tracking-widest uppercase">
          Parcours
        </h2>
        <div>
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.period}`} className="border-border border-b p-8">
              <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-sm font-bold uppercase">{exp.role}</h3>
                <span className="text-muted text-xs">
                  {exp.company}
                  {exp.location ? ` · ${exp.location}` : ''}
                  {' | '}
                  {exp.period}
                </span>
              </div>
              <ul className="text-muted mb-4 space-y-1 text-xs leading-relaxed">
                {exp.bullets.map((b) => (
                  <li key={b}>— {b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1">
                {exp.tags.map((t) => (
                  <span key={t} className="border-border border px-2 py-0.5 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="border-border bg-fg/5 border-b px-8 py-4 text-xs font-bold tracking-widest uppercase">
          Compétences
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="border-border border-r border-b p-8">
              <h3 className="mb-3 text-sm font-bold uppercase">{category}</h3>
              <div className="flex flex-wrap gap-1">
                {items.map((item) => (
                  <span key={item} className="border-border border px-2 py-0.5 text-xs">
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
