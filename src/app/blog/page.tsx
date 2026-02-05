import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Blog' }

const posts = [
  {
    slug: 'quel-developpeur-je-suis',
    title: 'Quel développeur je suis',
    date: '2024-06-15',
    excerpt: "Ce document explore quel développeur je suis, comment je collabore avec les équipes, en détaillant notamment mes préférences de travail.",
  },
  {
    slug: 'refactoring-guide-pratique',
    title: 'Refactoring : guide pratique',
    date: '2024-03-10',
    excerpt: "Comment aborder un refactoring sereinement : par où commencer, quoi mesurer, quand s'arrêter.",
  },
  {
    slug: 'tests-frontend-strategie',
    title: 'Stratégie de tests frontend',
    date: '2024-01-22',
    excerpt: "Jest pour la logique, Playwright pour les parcours critiques. Ma stratégie de tests en détail.",
  },
]

export default function BlogPage() {
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
