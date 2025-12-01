import Link from 'next/link'

export const Nav = () => {
  return (
    <nav className="w-full">
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm md:text-base font-light text-dark-sable/70">
        <NavItem href="https://calendly.com/release-dimitri">
          Calendly
        </NavItem>
        <NavItem href="https://www.linkedin.com/in/dimitri-bourreau/">
          LinkedIn
        </NavItem>
        <NavItem href="https://www.malt.fr/profile/dimitribourreau">
          Malt
        </NavItem>
        <NavItem href="https://github.com/dimitri-bourreau">
          GitHub
        </NavItem>
        <NavItem href="https://www.linkedin.com/pulse/quel-d%C3%A9veloppeur-je-suis-liste-de-mes-pr%C3%A9f%C3%A9rences-et-travail-dimitri-8v4ke">
          Quel développeur je suis
        </NavItem>
        <NavItem href="mailto:dimitri@release-dev.com">
          dimitri@release-dev.com
        </NavItem>
      </ul>
    </nav>
  )
}

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const isMailto = href.startsWith('mailto:')
  const isExternal = href.startsWith('http')
  
  if (isMailto) {
    return (
      <li>
        <a
          href={href}
          className="relative inline-block transition-colors duration-200 hover:text-dark-sable group"
        >
          <span className="relative">
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-dark-sable/30 transition-all duration-300 group-hover:w-full" />
          </span>
        </a>
      </li>
    )
  }
  
  if (isExternal) {
    return (
      <li>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block transition-colors duration-200 hover:text-dark-sable group"
        >
          <span className="relative">
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-dark-sable/30 transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>
      </li>
    )
  }
  
  return (
    <li>
      <Link
        href={href}
        className="relative inline-block transition-colors duration-200 hover:text-dark-sable group"
      >
        <span className="relative">
          {children}
          <span className="absolute bottom-0 left-0 w-0 h-px bg-dark-sable/30 transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    </li>
  )
}
