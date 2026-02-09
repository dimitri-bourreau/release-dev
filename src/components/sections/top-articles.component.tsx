import Link from 'next/link'

const topArticles = [
  {
    title: "Architecture hexagonale en frontend : retour d'expérience",
    slug: 'architecture-hexagonale-retour-d-experience',
  },
  {
    title:
      "Refonte Next.js en 6 mois : archi hexa, React Query, et surtout l'humain !",
    slug: 'refonte-next-en-6-mois',
  },
  {
    title:
      "Comment j'ai divisé par 10 les temps de chargement d'une application Next.js",
    slug: 'comment-j-ai-divise-par-10-les-temps-de-chargement-d-une-app-next',
  },
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
