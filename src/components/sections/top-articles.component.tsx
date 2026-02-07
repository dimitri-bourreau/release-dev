import Link from 'next/link'

const topArticles = [
  { title: 'Quel développeur je suis', slug: 'quel-developeur-je-suis' },
  { title: 'Refonte Next.js en 6 mois', slug: 'refonte-next-en-6-mois' },
  { title: 'Rendus React & Fibers', slug: 'architecture-hexagonale-react' },
]

export function TopArticles() {
  return (
    <section className="p-10">
      <h2 className="mb-3 text-xs font-bold tracking-widest uppercase">
        Articles mis en avant
      </h2>
      <div className="flex gap-2">
        {topArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="border-border hover:bg-accent hover:text-bg border px-3 py-2 text-xs transition-colors"
          >
            {article.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
