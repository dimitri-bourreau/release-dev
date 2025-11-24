import { Nav } from '@/components/nav.component'
import '@/styles/header.css'

export default async function Home() {
  return (
    <div className="items-between flex w-full flex-col justify-start p-10">
      <section className="items-between flex h-full w-full justify-center md:items-center">
        <header className="md:-ml-1/3 flex h-3/5 flex-col justify-between md:justify-start items-center md:items-start">
          <h1 id="header" className="relative text-8xl">
            RELEASE
          </h1>
          <h2 className="text-xl ml-30 hidden uppercase md:block">
            Refactoring et archi hexa : je vous aide à respecter vos délais et améliorer le confort de vos devs 🧘 <br />
            <span className="text-sm">D&eacute;veloppement frontend React freelance</span>
          </h2>
          <h2 className="text-center text-2xl md:hidden">
            Refactoring et archi hexa :
            <br />
             je vous aide à respecter vos délais et améliorer le confort de vos devs 🧘
            <br />
            <span className="text-sm">D&eacute;veloppement frontend React freelance</span>
          </h2>
        </header>
      </section>

      <Nav />
    </div>
  )
}
