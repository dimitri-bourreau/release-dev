const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dimitri-bourreau/' },
  { label: 'Malt', href: 'https://www.malt.fr/profile/dimitribourreau' },
  { label: 'GitHub', href: 'https://github.com/dimitri-bourreau' },
  { label: 'dimitri@release-dev.com', href: 'mailto:dimitri@release-dev.com' },
]

export function Footer() {
  return (
    <footer className="border-border flex flex-wrap items-center border-y">
      {footerLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="border-border hover:bg-fg hover:text-bg cursor-pointer border-r px-4 py-3 text-xs tracking-wider uppercase transition-colors"
        >
          {link.label}
        </a>
      ))}
      <span className="text-muted ml-auto px-4 py-3 text-xs">
        © 2026 RELEASE
      </span>
    </footer>
  )
}
