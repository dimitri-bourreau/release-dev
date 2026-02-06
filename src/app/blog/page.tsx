import { type Metadata } from 'next'
import Link from 'next/link'
import { getBlogPosts } from '@/data/blog'

export const metadata: Metadata = { title: 'Blog' }

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <div className="border-border bg-fg/5 flex items-center justify-between border-b px-8 py-6">
        <h1 className="text-lg font-bold tracking-widest uppercase">Blog</h1>
        <a
          href="/feed.xml"
          rel="noopener noreferrer"
          className="border-border text-muted hover:border-fg hover:text-fg border px-3 py-1.5 text-xs transition-colors"
          title="RSS Feed"
        >
          [RSS]
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border-border hover:bg-fg hover:text-bg group block border-r border-b p-8 transition-colors"
          >
            <time className="text-muted group-hover:text-bg mb-2 block text-xs">
              {post.date}
            </time>
            <h2 className="mb-3 text-sm font-bold uppercase">{post.title}</h2>
            <p className="text-muted group-hover:text-bg text-xs leading-relaxed">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </>
  )
}
