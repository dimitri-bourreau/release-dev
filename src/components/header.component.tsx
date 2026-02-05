import Link from 'next/link'
import { MobileNav } from './mobile-nav.component'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Expérience', href: '/experience' },
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
        RELEASE
      </Link>
      <MobileNav />
      <nav className="hidden md:flex">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border-border hover:bg-fg hover:text-bg cursor-pointer border-r px-5 py-4 text-xs tracking-wider uppercase transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
