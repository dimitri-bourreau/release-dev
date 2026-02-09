import { type Metadata } from 'next'
import { PageTitle } from '@/components/page-title.component'

export const metadata: Metadata = { title: 'Conditions Générales de Vente' }

const sections = [
  {
    title: 'Introduction',
    content:
      "Les présentes conditions générales de vente s'appliquent à toute prestation de service réalisée par Dimitri Bourreau, développeur freelance, ci-après « le Prestataire ». L'acceptation d'un devis vaut acceptation des présentes conditions. Elles régissent les prestations de développement web.",
  },
  {
    title: 'Article 1 : Objet',
    content:
      'Les prestations incluent le développement web, la création de sites, et les applications web (SaaS, sites corporate, e-commerce, applications web).',
  },
  {
    title: 'Article 2 : Tarifs et facturation',
    content:
      'Deux modes de facturation : forfait (selon devis validé, toute modification nécessite un avenant) ou taux journalier (facturé mensuellement sur la base des heures réelles). Les prix sont exprimés hors taxes. Le Client rembourse les frais documentés (déplacements, repas, etc.).',
  },
  {
    title: 'Article 3 : Modalités de paiement',
    content:
      'Contrats au forfait : acompte de 30% à la signature, solde à la livraison. Contrats au temps passé : facturation mensuelle, paiement sous 15 jours. Mode de paiement accepté : virement bancaire.',
  },
  {
    title: 'Article 4 : Hébergement et outils',
    content:
      "Le Client peut gérer l'hébergement et les outils de manière indépendante. Alternativement, le Prestataire peut les gérer avec une facturation séparée pour l'hébergement, le domaine et les coûts d'outils.",
  },
  {
    title: 'Article 5 : Fourniture des fichiers Client',
    content:
      "Le Client doit fournir tous les éléments nécessaires (textes, polices, images) libres de droits avant le début du développement. Le Prestataire décline toute responsabilité pour les erreurs orthographiques ou violations de droits d'auteur dans le contenu fourni.",
  },
  {
    title: 'Article 6 : Modifications de périmètre',
    content:
      'Les nouveaux développements nécessitent des devis séparés. Les modifications impliquant une durée excessive, des changements de périmètre significatifs ou le traitement de fichiers sources nécessitent des devis supplémentaires.',
  },
  {
    title: 'Article 7 : Délais de livraison',
    content:
      'Les contrats au forfait précisent les délais ; les modifications demandées par le Client prolongent les délais. Les projets au temps passé ont des durées convenues mutuellement, ajustables avec un préavis raisonnable.',
  },
  {
    title: 'Article 8 : Collaboration Client',
    content:
      "Le Client doit fournir les informations nécessaires, répondre rapidement aux demandes et valider les livrables. Les retards dans la fourniture de matériaux ou d'approbations reportent les dates de livraison.",
  },
  {
    title: 'Article 9 : Recette et livraison',
    content:
      "Les mises à jour du code sont publiées sur le système de contrôle de version du Client ou l'environnement de staging. Contrats au forfait : 7 jours ouvrés pour signaler des problèmes ; le silence vaut acceptation. Contrats au temps passé : validation continue selon le processus convenu.",
  },
  {
    title: 'Article 10 : Confidentialité',
    content:
      'Le Prestataire maintient une stricte confidentialité concernant les informations du Client pendant la durée du contrat et 2 ans après sa fin, sauf pour les informations publiquement disponibles ou les connaissances préalables.',
  },
  {
    title: 'Article 11 : Transfert de droits',
    content:
      "Les droits d'utilisation et de modification sont transférés au paiement intégral (sauf indication contraire). Le Prestataire transfère les droits de représentation, d'utilisation, de modification et de traduction tout en conservant les droits moraux et d'attribution. Droits valables dans le monde entier pour la durée du droit d'auteur.",
  },
  {
    title: 'Article 12 : Retard de paiement',
    content:
      "Conformément au Code de commerce : les retards de paiement entraînent des pénalités au taux d'intérêt légal × 3 plus 40 € d'indemnité forfaitaire de recouvrement. Des frais supplémentaires peuvent être réclamés sur justificatif. Le Prestataire peut engager des services de recouvrement et suspendre/annuler les services sans préavis ni remboursement.",
  },
  {
    title: 'Article 13 : Résiliation pour manquement',
    content:
      'Le non-respect des obligations déclenche une mise en demeure de 15 jours par courrier recommandé. Le non-respect entraîne la résiliation du contrat sans indemnité.',
  },
  {
    title: 'Article 14 : Résiliation sans motif',
    content:
      "Chaque partie peut résilier avec un préavis écrit de 2 semaines (email/courrier). Le Prestataire conserve les paiements reçus ; le Client peut utiliser librement les développements livrés conformément à l'Article 11. Les prestations pendant le préavis sont facturées comme convenu.",
  },
  {
    title: 'Article 15 : Force majeure',
    content:
      "Les circonstances imprévisibles et extérieures (catastrophes naturelles, pannes réseau, blocages de transport) suspendent les obligations jusqu'à résolution. La partie affectée doit notifier dans les 5 jours ouvrés ; les parties conviennent ensuite des conditions de poursuite.",
  },
  {
    title: 'Article 16 : Responsabilité',
    content:
      "Le Prestataire est soumis à une obligation de moyens. La responsabilité est limitée aux montants perçus au cours des 12 mois précédents. Le Prestataire n'est pas responsable des dommages indirects (perte de données, manque à gagner, atteinte à l'image). Le Client est seul responsable des sauvegardes et des environnements de production.",
  },
  {
    title: 'Article 17 : Utilisation en portfolio',
    content:
      'Sauf indication contraire, le Prestataire peut afficher publiquement les travaux réalisés de manière indéfinie à des fins de portfolio.',
  },
  {
    title: 'Article 18 : Modification des conditions',
    content:
      "Le Prestataire peut modifier les présentes conditions sans préavis. Les modifications ne s'appliquent pas aux contrats existants sans accord exprès.",
  },
  {
    title: 'Article 19 : Règlement des litiges',
    content:
      'Le contrat est régi par le droit français. Les parties recherchent une résolution amiable ; les litiges non résolus sont portés devant la juridiction compétente.',
  },
]

export default function CGVPage() {
  return (
    <>
      <PageTitle>Conditions Générales de Vente</PageTitle>
      <div className="space-y-6 p-8 md:p-12">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="mb-2 text-sm font-bold uppercase">{s.title}</h2>
            <p className="text-muted text-xs leading-relaxed">{s.content}</p>
          </div>
        ))}
        <p className="text-muted text-xs">
          Dernière mise à jour : janvier 2026
        </p>
      </div>
    </>
  )
}
