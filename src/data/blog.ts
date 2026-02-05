import fs from 'fs'
import path from 'path'

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
}

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog')

export async function getBlogPosts(): Promise<BlogPost[]> {
  const slugs = fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

  const posts: BlogPost[] = []

  for (const slug of slugs) {
    const filePath = path.join(CONTENT_DIR, slug, 'meta.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    const meta = JSON.parse(raw) as Omit<BlogPost, 'slug'>
    posts.push({ slug, ...meta })
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}
