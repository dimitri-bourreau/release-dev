import { type Metadata } from 'next'
import { Providers } from '@/app/providers'
import '@/styles/tailwind.css'
import { BackgroundLines } from '@/components/background-lines.component'

export const metadata: Metadata = {
  title: {
    template: '%s - RELEASE',
    default:
      'RELEASE - Sobri&eacute;t&eacute; du geste, excellence du r&eacute;sultat',
  },
  description:
    'Sobri&eacute;t&eacute; du geste, excellence du r&eacute;sultat — d&eacute;veloppement frontend React freelance',
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
