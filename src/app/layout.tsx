import { type Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import '@/styles/tailwind.css'
import { Header } from '@/components/header.component'
import { Footer } from '@/components/footer.component'

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Dimitri Bourreau',
    default: 'Dimitri Bourreau',
  },
  description: 'Développeur frontend React & Next.js freelance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${jetbrains.variable} h-full overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-fg grid min-h-screen max-w-[100vw] grid-rows-[auto_1fr_auto] overflow-x-hidden font-mono">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
