import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - RELEASE',
    default:
      'Dimitri Bourreau - Développeur dévoué au simple et l\'efficace\n',
  },
  description:
    'Je m\'appelle Dimitri, je suis un développeur basé à Grenoble. J\'aide les logiciels à grandir, j\'améliore leurs racines et je conseille les équipes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
