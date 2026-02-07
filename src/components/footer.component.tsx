import Link from 'next/link'

const externalLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dimitri-bourreau/' },
  { label: 'Malt', href: 'https://www.malt.fr/profile/dimitribourreau' },
  { label: 'GitHub', href: 'https://github.com/dimitri-bourreau' },
  { label: 'dimitri@release-dev.com', href: 'mailto:dimitri@release-dev.com' },
]

const legalLinks = [
  { label: 'CGV', href: '/cgv' },
  { label: 'Mentions légales', href: '/mentions-legales' },
]

export function Footer() {
  return (
    <footer className="border-border flex flex-wrap items-center border-y">
      {externalLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="border-border hover:bg-accent hover:text-bg cursor-pointer border-r px-4 py-3 text-xs tracking-wider uppercase transition-colors"
        >
          {link.label}
        </a>
      ))}
      <span className="text-muted ml-auto flex items-center gap-4 px-4 py-3 text-xs">
        {legalLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-fg transition-colors">
            {link.label}
          </Link>
        ))}
        <span>© 2026 Dimitri Bourreau</span>
      </span>
    </footer>
  )
}
