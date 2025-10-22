import { type Metadata } from 'next'
import { Providers } from '@/app/providers'
import '@/styles/tailwind.css'
import { BackgroundLines } from '@/components/background-lines.component'

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
    <html lang="en" className="font-julius h-full" suppressHydrationWarning>
      <body className="bg-light-sable dark:bg-light-sable flex h-full text-black">
        <Providers>
          <div className="flex w-full">
            <BackgroundLines />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
