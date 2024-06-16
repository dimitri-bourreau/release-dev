import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Ressources',
  description: "Logiciels que j&apos;utilise, livres et vidéos que je recommande",
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Logiciels que j&apos;utilise, livres et vidéos que je recommande"
      intro="On m&apos;a souvent demandé quels outils j&apos;utilisai pour améliorer ma productivité, mieux communiquer ou sinon étendre mes connaissances. En voici une liste, en constante évolution."
    >
      <div className="space-y-20">
        <ToolsSection title="Logiciels">
          <Tool title="WebStorm">
            Un IDE riche en fonctionnalités avec une interface complète et des raccourcis clavier personnalisés qui réchauffent mon coeur de développeur. VSCode et VIM ne me manquent pas, malgré leurs qualités et leur gratuité.
          </Tool>
          <Tool title="Tyme">
            Une app qui suit mon temps de travail. Je peux catégoriser mes tâches, créer des PDF récapitulatifs. L&apos;interface propose des statistiques bien renseignées et imagées. Je propose rarement à mes clients un résumé de mes heures travaillées, cependant pour un usage personnel c&apos;est excellent. J&apos;essaie d&apos;y renseigner chaque tâche réalisée, pour facilement présenter mes journées en daily, ou pour retracer mon chemin lors d&apos;un debug fastidieux.
          </Tool>
          <Tool title="Bear">
            J&apos;ai aimé Standard Notes ou Inkdrop, finalement j&apos;ai adopté Bear. J&apos;adore l&apos;interface, très simple. C&apos;est une application native, et ça, c&apos;est bien !
          </Tool>
        </ToolsSection>
        <ToolsSection title="Apprendre, en ligne">
          <Tool title="frontendmasters.com">
            Des cours présentés par des développeurs expérimentés à San Francisco, durant 4h et plus, dédiés aux technologies front mais aussi back depuis peu. C&apos;est un site excellent que je visite régulièrement.
          </Tool>
          <Tool title="executeprogram.com">
            Ne paie pas de mine, et pourtant ! JS, TS et un peu plus, enseigné simplement et ludiquement. On s&apos;enfonce jusqu&apos;à des concepts complexes, et on apprend on consolide nos connaissances aisément, sans grands efforts.
          </Tool>
          <Tool title="codewars.com">
            Ma ressource préférée concernant des katas. Simple d&apos;utilisation, il y a une grosse communauté, en complétant des katas on peut ensuite lire le code des autres utilisateurs. J&apos;adore.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Apprendre, en lisant">
          <Tool title="The Software Craftsman, Sandro Mancuso">
            Je conseille ce livre à tous les développeurs qui ne l&apos;ont pas lu. Chacun aura son opinion, la mienne est très favorable. C&apos;est toujours agréable de revenir de temps en temps sur les passages surlignés. Une collection de bons conseils pour développer sa carrière de développeur dans la bonne direction.
          </Tool>
          <Tool title="Extreme Programming, Kent Beck">
            Beaucoup d&apos;éléments sont partagés avec The Software Craftsman. Cependant, ce livre vaut le détour. &quot;Extreme&quot; fait un peu peur, mais je ne lis rien d&apos;extrême. Je pense que c&apos;est une excellente lecture pour un développeur junior, et une grande source d&apos;inspiration pour les autres développeurs.
          </Tool>
          <Tool title="Coder proprement, Robert C. Martin">
            Est-ce qu&apos;on peut dire que ce livre est culte ? J&apos;ai un avis nuancé sur tout ce qu&apos;il propose, mais il y a beaucoup de bon à prendre !
          </Tool>
          <Tool title="Refactoring, Martin Fowler">
            J&apos;en ai adoré la lecture. Moi qui adore ranger et faire le ménage, le refactoring m&apos;est une tâche très douce. Et ce livre est un bon tuteur !
          </Tool>
          <Tool title="You Don&apos;t Know JS, Kyle Simpson">
            Je suis amoureux de cette série de livres plongeant dans la technique de JavaScript. C&apos;est un livre collaboratif, disponible gratuitement sur GitHub. La seconde édition est en cours d&apos;écriture, la première édition est complète et vaut le détour.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
