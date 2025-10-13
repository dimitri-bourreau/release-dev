import { type Metadata } from 'next'
import { Providers } from '@/app/providers'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - RELEASE',
    default: 'RELEASE - State of the art React',
  },
  description:
    'State of the art React, Next, Tailwind and CSS for your project',
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
          <div className="flex w-full">{children}</div>
        </Providers>
      </body>
    </html>
  )
}

