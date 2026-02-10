import Link from 'next/link'

const externalLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dimitri-bourreau/' },
  { label: 'Malt', href: 'https://www.malt.fr/profile/dimitribourreau' },
  { label: 'GitHub', href: 'https://github.com/dimitri-bourreau' },
  {
    label: 'hello@dimitribourreau.dev',
    href: 'mailto:hello@dimitribourreau.dev',
  },
]

const legalLinks = [
  { label: 'CGV', href: '/cgv' },
  { label: 'Mentions légales', href: '/mentions-legales' },
]

export function Footer() {
  return (
    <footer className="border-border flex flex-col border-y md:flex-row md:items-center">
      <div className="flex flex-col md:flex-row">
        {externalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="border-border hover:bg-accent hover:text-bg border-b px-4 py-3 text-xs tracking-wider uppercase transition-colors md:border-r md:border-b-0"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="text-muted flex flex-wrap items-center justify-center gap-4 px-4 py-3 text-xs md:ml-auto">
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-fg transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <span>© 2026 Dimitri Bourreau</span>
      </div>
    </footer>
  )
}
