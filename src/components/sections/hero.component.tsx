import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="flex flex-col justify-center p-8 md:p-10">
      <div className="mb-8 flex items-center gap-2">
        <span className="bg-accent h-2 w-2" />
        <span className="text-xs tracking-widest uppercase">Disponible</span>
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight uppercase md:text-5xl">
        Dimitri Bourreau
      </h1>
      <p className="text-accent mb-3 text-base font-bold">
        Développeur frontend React & Next.js
      </p>
      <p className="text-muted max-w-md text-sm">
        6 ans d&apos;expérience, +40 missions freelance, 5/5 sur Malt. Je
        m&apos;intègre vite, je livre, je transmets.
      </p>
      <p className="text-muted mt-6 text-xs">Télétravail · Grenoble · Lyon</p>
      <Link
        href="/contact"
        className="bg-accent text-bg hover:bg-fg mt-8 inline-block px-6 py-3 text-sm font-bold tracking-wider uppercase transition-colors"
      >
        Discutons de votre projet
      </Link>
    </section>
  )
}
