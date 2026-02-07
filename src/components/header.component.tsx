import Link from 'next/link'
import { MobileNav } from './mobile-nav.component'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Dimitri', href: '/dimitri' },
  { label: 'Expérience', href: '/experience' },
  { label: 'Projets', href: '/projets' },
  { label: 'Blog', href: '/blog' },
  { label: 'Ressources', href: '/ressources' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  return (
    <header className="border-border relative flex items-center border-y">
      <Link
        href="/"
        className="border-border border-r px-6 py-4 text-sm font-bold tracking-widest uppercase"
      >
        DIMITRI BOURREAU
      </Link>
      <MobileNav />
      <nav className="hidden overflow-hidden md:flex">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border-border hover:bg-accent hover:text-bg cursor-pointer border-r px-3 py-4 text-xs tracking-wider uppercase transition-colors lg:px-5"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
