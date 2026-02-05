export function HeroSection() {
  return (
    <section className="border-border row-span-2 border-r border-b p-10 md:p-16">
      <div className="mb-8 flex items-center gap-2">
        <span className="bg-fg h-2 w-2" />
        <span className="text-xs tracking-widest uppercase">Disponible</span>
      </div>
      <h1 className="mb-4 text-5xl font-bold tracking-tight uppercase md:text-7xl">
        Dimitri Bourreau
      </h1>
      <p className="mb-3 text-base">Développeur fullstack React & Node.js</p>
      <p className="text-muted max-w-md text-sm">
        6 ans d&apos;expérience, +40 missions freelance, 5/5 sur Malt. Je
        m&apos;intègre vite, je livre, je transmets.
      </p>
    </section>
  )
}
