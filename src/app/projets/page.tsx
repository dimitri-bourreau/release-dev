import { type Metadata } from 'next'

export const metadata: Metadata = { title: 'Projets' }

type Project = {
  name: string
  description: string
  url: string
  github: string
}

const projects: Project[] = [
  {
    name: 'Accrosignes',
    description:
      "Site vitrine d'une association grenobloise dédiée à l'enseignement de la langue des signes française et aux rencontres entre sourds et entendants.",
    url: 'https://www.accrosignes.org',
    github: 'https://github.com/dimitri-bourreau/accrosignes',
  },
  {
    name: 'Relix',
    description:
      'Version optimisée et plus rapide du dictionnaire de langue des signes Elix.',
    url: 'https://relix-inky.vercel.app',
    github: 'https://github.com/dimitri-bourreau/relix',
  },
  {
    name: 'Animaux abattus en France',
    description:
      "Visualisation interactive des statistiques d'abattage animal en France pour sensibiliser à l'ampleur du nombre d'animaux abattus.",
    url: 'https://animaux-abbatus-en-france.vercel.app/',
    github: 'https://github.com/dimitri-bourreau/animaux-abbatus-en-france',
  },
  {
    name: 'Canards',
    description:
      "Jeu de gestion minimaliste où l'on restaure un écosystème lacustre en se concentrant sur le bien-être animal et la biodiversité réalisé en vibe coding.",
    url: 'https://canards.vercel.app/',
    github: 'https://github.com/dimitri-bourreau/canards',
  },
  {
    name: 'Starrymusic',
    description:
      'Site fan centralisant les musiques et paroles du groupe Starrysky, organisées par albums.',
    url: 'https://www.starrymusic.fr',
    github: 'https://github.com/dimitri-bourreau/starrymusic',
  },
  {
    name: 'Cosy songs',
    description:
      'Toutes les musiques citées dans le podcast Cosy Corner, rassemblées au même endroit.',
    url: 'https://cosy-songs.vercel.app/',
    github: 'https://github.com/dimitri-bourreau/cosy-songs',
  },
  {
    name: 'validcq',
    description:
      'Package NPM pour valider les numéros de sécurité sociale français (NIR/NIRPP).',
    url: 'https://www.npmjs.com/package/validcq',
    github: 'https://github.com/dimitri-bourreau/validcq',
  },
]

export default function ProjetsPage() {
  return (
    <>
      <h1 className="border-border bg-fg/5 border-b px-8 py-6 text-lg font-bold tracking-widest uppercase">
        Projets personnels
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border-border flex flex-col border-r border-b p-8"
          >
            <h2 className="mb-2 text-sm font-bold uppercase">{project.name}</h2>
            <p className="text-muted mb-4 text-xs leading-relaxed">
              {project.description}
            </p>
            <div className="mt-auto flex gap-4">
              <a
                href={project.url}
                rel="noopener noreferrer"
                className="hover:bg-fg hover:text-bg border-border border px-4 py-2 text-xs font-medium transition-colors"
              >
                Voir le site
              </a>
              <a
                href={project.github}
                rel="noopener noreferrer"
                className="hover:bg-fg hover:text-bg border-border border px-4 py-2 text-xs font-medium transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
