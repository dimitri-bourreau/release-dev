import { Nav } from '@/components/nav.component'
import '@/styles/header.css'

export default async function Home() {
  return (
    <div className="items-between flex w-full flex-col justify-start p-10">
      <section className="items-between flex h-full w-full justify-center md:items-center">
        <header className="md:-ml-1/3 flex h-3/5 flex-col justify-between md:justify-start">
          <h1 id="header" className="relative text-8xl">
            RELEASE
          </h1>
          <h2 className="ml-30 hidden uppercase md:block">
            Sobriété du geste, excellence du résultat — développement frontend
            React freelance
          </h2>
          <h2 className="text-center text-xl md:hidden">
            Sobriété du geste,
            <br />
            excellence du résultat,
            <br />
            développement frontend React freelance
          </h2>
        </header>
      </section>

      <Nav />
    </div>
  )
}
