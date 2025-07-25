import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Présentation',
  description:
    'Dimitri Bourreau, développeur VISEO',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Dimitri Bourreau, développeur front-end
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Aussi loin que je me souvienne j&apos;ai toujours aimé les
              nouvelles technologies. J&apos;ai cassé mon premier Windows 98 à
              10 ans, et j&apos;ai fait mes premiers sites moches au CDI du
              collège, avec l&apos;aide du site du zéro.
            </p>
            <p>
              J&apos;ai fait un détour par les avions, en me formant au métier
              de pilote de ligne. Mais avant de pouvoir en faire mon métier, je
              suis devenu inapte au vol. Des rêves réalisés et des nuages
              caressés, j&apos;ai atterri vers ma première passion : le code.
            </p>
            <p>
              J&apos;ai suivi une formation d&apos;un an avec Openclassrooms,
              puis j&apos;ai passé quelques mois en auto-formation à temps
              plein. 5 ans plus tard, j&apos;ai aidé une dizaine
              d&apos;entreprises à améliorer leurs applications, je cumule sur
              Malt 40 missions avec une note de 5/5 pour 31 avis.
            </p>
            <p>
              J&apos;ai créé ma société RELEASE en référence au groupe de
              musique Starrysky et leur musique RE:LEASE. Cette musique dure 20
              minutes, elle frappe par sa qualité et son originalité. Ce groupe
              Starrysky existe depuis des années, ils ont une passion brûlante
              pour le bien-faire et l&apos;originalité. Je veux inspirer la même
              passion et ténacité !
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/dimitri-bourreau"
              icon={GitHubIcon}
              className="mt-4"
            >
              GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/dimitri-bourreau/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              dimitri@release-dev.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
