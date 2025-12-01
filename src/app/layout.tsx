import { type Metadata } from 'next'
import '@/styles/tailwind.css'
import { BackgroundDots } from '@/components/background-dots.component'

export const metadata: Metadata = {
  title: {
    template: '%s - RELEASE',
    default: 'RELEASE - Sobriété du geste, excellence du résultat',
  },
  description:
    'Sobriété du geste, excellence du résultat — développement frontend React freelance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="font-julius h-full" suppressHydrationWarning>
      <body className="bg-light-sable text-dark-sable min-h-screen">
        <BackgroundDots />
        {children}
      </body>
    </html>
  )
}
