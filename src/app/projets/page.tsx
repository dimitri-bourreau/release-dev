import { type Metadata } from 'next'
import Image from 'next/image'
import { PageTitle } from '@/components/page-title.component'

export const metadata: Metadata = { title: 'Projets' }

type Project = {
  name: string
  description: string
  url: string
  github: string
  image: string
  stack: string[]
}

const projects: Project[] = [
  {
    name: 'Bon vent',
    description:
      "Application de suivi de prospection pour freelances et chercheurs d'emploi.",
    url: 'https://bon-vent.vercel.app',
    github: 'https://github.com/dimitri-bourreau/bon-vent',
    image: '/projets/bon-vent.png',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'TanStack Query',
      'IndexedDB',
    ],
  },
  {
    name: 'Accrosignes',
    description:
      "Site d'une association grenobloise dédiée à l'enseignement de la langue des signes française et aux rencontres entre sourds et entendants.",
    url: 'https://www.accrosignes.org',
    github: 'https://github.com/dimitri-bourreau/accrosignes',
    image: '/projets/accrosignes.png',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Firebase', 'TipTap'],
  },
  {
    name: 'Relix',
    description:
      'Version optimisée et plus rapide du dictionnaire de langue des signes Elix.',
    url: 'https://relix-inky.vercel.app',
    github: 'https://github.com/dimitri-bourreau/relix',
    image: '/projets/relix.png',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Animaux abattus en France',
    description:
      "Visualisation interactive des statistiques d'abattage animal en France pour sensibiliser à l'ampleur du nombre d'animaux abattus.",
    url: 'https://animaux-abbatus-en-france.vercel.app/',
    github: 'https://github.com/dimitri-bourreau/animaux-abbatus-en-france',
    image: '/projets/animaux-abattus.png',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Starrymusic',
    description:
      'Site fan centralisant les musiques et paroles du groupe Starrysky, organisées par albums.',
    url: 'https://www.starrymusic.fr',
    github: 'https://github.com/dimitri-bourreau/starrymusic',
    image: '/projets/starrymusic.png',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Supabase',
      'TanStack Query',
    ],
  },
  {
    name: 'Cosy songs',
    description:
      'Toutes les musiques citées dans le podcast Cosy Corner, rassemblées au même endroit.',
    url: 'https://cosy-songs.vercel.app/',
    github: 'https://github.com/dimitri-bourreau/cosy-songs',
    image: '/projets/cosy-songs.png',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'validcq',
    description:
      'Package NPM pour valider les numéros de sécurité sociale français (NIR/NIRPP).',
    url: 'https://www.npmjs.com/package/validcq',
    github: 'https://github.com/dimitri-bourreau/validcq',
    image: '/projets/validcq.png',
    stack: ['JavaScript', 'Mocha', 'Chai'],
  },
]

export default function ProjetsPage() {
  return (
    <>
      <PageTitle>Projets personnels</PageTitle>
      <div className="grid md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border-border flex flex-row border-r border-b"
          >
            <div className="border-border flex w-2/5 items-center border-r p-4">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={170}
                className="border-border aspect-video w-full border object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="mb-2 text-sm font-bold uppercase">
                {project.name}
              </h2>
              <p className="text-muted mb-3 text-xs leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-muted/20 text-muted px-2 py-0.5 text-[10px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-4">
                <a
                  href={project.url}
                  rel="noopener noreferrer"
                  className="hover:bg-accent hover:text-bg border-border border px-4 py-2 text-xs font-medium transition-colors"
                >
                  Voir le site
                </a>
                <a
                  href={project.github}
                  rel="noopener noreferrer"
                  className="hover:bg-accent hover:text-bg border-border border px-4 py-2 text-xs font-medium transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
