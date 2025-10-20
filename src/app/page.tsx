import '@/styles/header.css'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="items-between flex w-full flex-col justify-start p-10">
      <section className="items-between flex h-full w-full justify-center md:items-center">
        <header className="md:-ml-1/3 flex h-3/5 flex-col justify-between md:justify-start">
          <h1 id="header" className="relative text-8xl">
            RELEASE
          </h1>
          <h2 className="ml-30 hidden uppercase md:block">
            Frontend d’excellence : React, Next et Tailwind au service de votre
            projet
          </h2>
          <h2 className="text-center text-2xl md:hidden">
            Frontend d’excellence :
            <br />
            React, Next et Tailwind
            <br />
            au service de votre projet
          </h2>
        </header>
      </section>

      <nav className="left-0">
        <ul className="text-dark-sable flex flex-col gap-2 uppercase underline underline-offset-2">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about-working-with-me">About working with me</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
