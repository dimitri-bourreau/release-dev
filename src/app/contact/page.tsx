import { type Metadata } from 'next'
import { ContactForm } from '@/components/contact-form.component'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <div className="border-border grid border-b md:grid-cols-[1fr_1fr]">
      <section className="border-border border-r p-8 md:p-12">
        <h1 className="mb-4 text-2xl font-bold tracking-tight uppercase md:text-4xl">
          Discutons de votre projet
        </h1>
        <ContactForm />
      </section>

      <section className="flex flex-col">
        <a
          href="https://calendly.com/release-dimitri"
          className="border-border hover:bg-fg hover:text-bg group flex-1 cursor-pointer border-b p-8 transition-colors"
        >
          <h2 className="mb-2 text-sm font-bold uppercase">
            Réserver un appel
          </h2>
          <p className="text-muted group-hover:text-bg text-xs leading-relaxed">
            Prenez un créneau de 30 min pour discuter de votre projet.
          </p>
        </a>
        <a
          href="mailto:dimitri@release-dev.com"
          className="border-border hover:bg-fg hover:text-bg group flex-1 cursor-pointer border-b p-8 transition-colors"
        >
          <h2 className="mb-2 text-sm font-bold uppercase">
            dimitri@release-dev.com
          </h2>
          <p className="text-muted group-hover:text-bg text-xs leading-relaxed">
            Pour les demandes écrites ou les devis.
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/dimitri-bourreau/"
          className="border-border hover:bg-fg hover:text-bg group flex-1 cursor-pointer border-b p-8 transition-colors"
        >
          <h2 className="mb-2 text-sm font-bold uppercase">LinkedIn</h2>
          <p className="text-muted group-hover:text-bg text-xs leading-relaxed">
            Parcours, recommandations et actualités.
          </p>
        </a>
        <a
          href="https://www.malt.fr/profile/dimitribourreau"
          className="border-border hover:bg-fg hover:text-bg group flex-1 cursor-pointer p-8 transition-colors"
        >
          <h2 className="mb-2 text-sm font-bold uppercase">Malt</h2>
          <p className="text-muted group-hover:text-bg text-xs leading-relaxed">
            +40 missions, noté 5/5.
          </p>
        </a>
      </section>
    </div>
  )
}
