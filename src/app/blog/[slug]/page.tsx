import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPosts } from '@/data/blog'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const posts = await getBlogPosts()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return { title: post.title }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const posts = await getBlogPosts()
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const { default: Content } = await import(`@/content/blog/${slug}/page.mdx`)

  return (
    <>
      <header className="text-accent border-border border-l-accent border-b border-l-4 px-8 py-6">
        <h1 className="text-lg font-bold tracking-widest uppercase">
          {post.title}
        </h1>
        <time className="text-muted mt-1 block text-xs">{post.date}</time>
      </header>
      <div className="blog-gradient relative flex justify-center overflow-x-hidden">
        <article className="bg-bg prose prose-sm prose-pre:text-base w-full max-w-prose p-8 md:p-12">
          <Content />
        </article>
      </div>
    </>
  )
}
