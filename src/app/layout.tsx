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
    template: '%s - RELEASE',
    default: 'RELEASE',
  },
  description: 'Développement fullstack React & Node.js freelance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${jetbrains.variable} h-full`} suppressHydrationWarning>
      <body className="bg-bg text-fg font-mono grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
