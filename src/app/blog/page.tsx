import { type Metadata } from 'next'
import Link from 'next/link'
import { getBlogPosts } from '@/data/blog'

export const metadata: Metadata = { title: 'Blog' }

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <h1 className="border-border bg-fg/5 border-b px-8 py-6 text-lg font-bold tracking-widest uppercase">
        Blog
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border-border hover:bg-fg hover:text-bg group block border-r border-b p-8 transition-colors"
          >
            <time className="text-muted group-hover:text-bg mb-2 block text-xs">{post.date}</time>
            <h2 className="mb-3 text-sm font-bold uppercase">{post.title}</h2>
            <p className="text-muted group-hover:text-bg text-xs leading-relaxed">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
