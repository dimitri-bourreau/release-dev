import { type Metadata } from 'next'
import { Suspense } from 'react'
import { getBlogPosts } from '@/data/blog'
import { BlogList } from './blog-list.component'

type Props = { params: Promise<{ locale: string }> }

export const metadata: Metadata = { title: 'Blog' }

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const posts = await getBlogPosts(locale)

  return (
    <>
      <div className="text-accent border-border border-l-tertiary flex items-center justify-between border-b border-l-4 px-8 py-6">
        <h1 className="text-lg font-bold tracking-widest uppercase">Blog</h1>
        <a
          href="/feed.xml"
          rel="noopener noreferrer"
          className="border-border text-fg hover:bg-tertiary hover:text-bg border px-3 py-1.5 text-xs transition-colors"
          title="RSS Feed"
        >
          [RSS]
        </a>
      </div>
      <Suspense>
        <BlogList posts={posts} />
      </Suspense>
    </>
  )
}
