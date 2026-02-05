import { type Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import '@/styles/tailwind.css'

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: {
    template: '%s - RELEASE',
    default: 'RELEASE',
  },
  description:
    'Développement frontend React freelance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${jetbrains.variable} h-full`} suppressHydrationWarning>
      <body className="bg-bg text-fg font-mono min-h-screen">
        {children}
      </body>
    </html>
  )
}
