'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Dimitri', href: '/dimitri' },
  { label: 'Expérience', href: '/experience' },
  { label: 'Projets', href: '/projets' },
  { label: 'Témoignages', href: '/temoignages' },
  { label: 'Blog', href: '/blog' },
  { label: 'Ressources', href: '/ressources' },
  { label: 'Contact', href: '/contact' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="border-border hover:bg-accent hover:text-bg border-r px-4 py-4 text-xs tracking-widest uppercase transition-colors md:hidden"
      >
        {open ? 'Fermer' : 'Menu'}
      </button>
      {open && (
        <nav className="border-border bg-bg absolute left-0 top-full z-50 w-full border-b md:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-border hover:bg-accent hover:text-bg block border-b px-6 py-4 text-xs tracking-wider uppercase transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  )
}
