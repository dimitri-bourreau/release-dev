import { Nav } from '@/components/nav.component'

export default async function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col justify-between p-8 md:p-12 lg:p-16 xl:p-20">
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[-0.02em] leading-[0.9] text-dark-sable mb-8 md:mb-12">
              RELEASE
            </h1>
            <div className="space-y-4 md:space-y-6 max-w-2xl">
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-dark-sable/85">
                Je vous aide à respecter vos délais et améliorer le confort de vos devs 🧘
              </p>
              <p className="text-sm md:text-base text-dark-sable/60 font-light tracking-wide">
                Développement frontend React freelance
              </p>
            </div>
          </div>
        </div>
        <Nav />
      </main>
    </div>
  )
}
