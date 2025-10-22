import Link from 'next/link'
import { ReactNode } from 'react'

export const Nav = () => {
  return (
    <nav className="navigation left-0">
      <ul className="text-dark-sable flex flex-col gap-2 uppercase">
        <NavListLi>
          <Link href="https://www.linkedin.com/in/dimitri-bourreau/">
            LinkedIn
          </Link>
        </NavListLi>
        <NavListLi>
          <Link href="https://github.com/dimitri-bourreau">GitHub</Link>
        </NavListLi>
        <NavListLi>
          <Link href="https://www.linkedin.com/in/dimitri-bourreau/recent-activity/articles/">
            Ma conception d'un frontend excellent
          </Link>
        </NavListLi>
        <NavListLi>
          <a href="mailto:dimitri@release-dev.com">dimitri@release-dev.com</a>
        </NavListLi>
      </ul>
    </nav>
  )
}

const NavListLi = ({ children }: { children: ReactNode }) => {
  return (
    <li className="hover:border-l-dark-sable/40 border-0 border-l-4 border-transparent pl-2 transition-all">
      {children}
    </li>
  )
}
