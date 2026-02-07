import { type Metadata } from 'next'
import Image from 'next/image'
import { PageTitle } from '@/components/page-title.component'

export const metadata: Metadata = { title: 'Dimitri' }

const paragraphs = [
  "Je m'appelle Dimitri. Je suis développeur frontend depuis 2019, basé à Grenoble, au pied des montagnes.",
  "Mon parcours n'est pas linéaire, j'en suis fier et mon histoire décrit bien la personne et le professionnel que je suis aujourd'hui.",
  "Placé à l'Aide Sociale à l'Enfance, j'ai dût construire ma vie brique par brique avec résilience et ténacité.",
  "Au lycée, j'apprenais avec Le Site du Zéro à jouer avec PHP : j'étais certain de devenir dev, et j'avais hâte ! Sauf qu'en allant à Tokyo en 2013 je me suis découvert un amour encore plus brûlant pour l'aviation. Je n'avais pas le bac et mon portefeuille était vide, mais j'ai travaillé très dur pour devenir pilote de ligne. Tout laissait penser que c'était hors de ma portée, mais j'ai ignoré tous les préjugés et les barrières pour parier sur moi-même et ma détermination.",
  "J'ai passé quatre ans à préparer une licence de pilote de ligne. J'ai dû arrêter à cause de ma vue. Cette expérience m'a confirmé mon goût pour la gestion sous stress et la responsabilité à haut risque.",
  "Je me suis reconverti dans le développement web. Depuis, j'ai réalisé plus de 40 missions freelance — banque, startup, investissement, humanitaire. Ce que j'aime : reprendre une codebase existante, comprendre pourquoi elle souffre, et la remettre sur pied. Refactoring, architecture, performance. Rendre le code plus clair pour ceux qui viendront après moi.",
  "J'accorde beaucoup d'importance à la transmission. Pair programming, revues de code et documentation sont des outils porteurs pour n'importe quel projet, et pour n'importe quel dev.",
  "En dehors du code : j'apprends le japonais et la langue des signes, je m'intéresse au bien-être animal, et j'aime la musique.",
]

export default function AProposPage() {
  return (
    <>
      <PageTitle>À propos de Dimitri</PageTitle>
      <div className="grid md:grid-cols-[auto_1fr]">
        <div className="border-border border-r border-b p-8 md:p-12">
          <Image
            src="/dimitri.png"
            alt="Dimitri Bourreau"
            width={280}
            height={280}
            className="border-border border"
          />
        </div>
        <div className="border-border border-b p-8 md:p-12">
          <div className="max-w-prose space-y-4">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="text-sm leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
