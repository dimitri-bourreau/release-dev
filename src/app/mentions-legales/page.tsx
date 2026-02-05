import { type Metadata } from 'next'

export const metadata: Metadata = { title: 'Mentions légales' }

const sections = [
  {
    title: '1. Éditeur du site',
    content: `
      Le site release-dev.com est édité par :
        Raison sociale : RELEASE
        Forme juridique : EURL (Entreprise Unipersonnelle à Responsabilité Limitée)
        SIRET : 98278670900013
        Email : dimitri@release-dev.com
      `,
  },
  {
    title: '2. Directeur de la publication',
    content: 'Dimitri Bourreau.',
  },
  {
    title: '3. Hébergement',
    content:
      'Vercel Inc.\n440 N Barranca Ave #4133, Covina, CA 91723, États-Unis\nSite : vercel.com',
  },
  {
    title: '4. Enregistrement du domaine',
    content:
      'Namecheap, Inc.\n4600 E Washington Street, Suite 300, Phoenix, AZ 85034, États-Unis\nSite : namecheap.com',
  },
  {
    title: '5. Propriété intellectuelle',
    content:
      "L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, icônes, etc.) sont protégés par les lois applicables en matière de propriété intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site sans autorisation écrite préalable est interdite.",
  },
  {
    title: '6. Limitation de responsabilité',
    content:
      "L'éditeur s'efforce de fournir des informations exactes mais ne saurait être tenu responsable des omissions ou inexactitudes. Les utilisateurs sont seuls responsables de l'usage qu'ils font du contenu du site.",
  },
  {
    title: '7. Liens hypertextes',
    content:
      "L'éditeur ne contrôle pas les sites externes et décline toute responsabilité quant à leur contenu.",
  },
  {
    title: '8. Droit applicable',
    content:
      'Le droit français régit les présentes mentions ; les tribunaux français sont seuls compétents.',
  },
]

export default function MentionsLegalesPage() {
  return (
    <>
      <h1 className="border-border bg-fg/5 border-b px-8 py-6 text-lg font-bold tracking-widest uppercase">
        Mentions légales
      </h1>
      <div className="space-y-6 p-8 md:p-12">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="mb-2 text-sm font-bold uppercase">{s.title}</h2>
            <p className="text-muted text-xs leading-relaxed whitespace-pre-line">
              {s.content}
            </p>
          </div>
        ))}
        <p className="text-muted text-xs">
          Dernière mise à jour : janvier 2026
        </p>
      </div>
    </>
  )
}
