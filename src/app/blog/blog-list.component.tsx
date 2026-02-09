'use client'

import Link from 'next/link'
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'
import { type BlogPost } from '@/data/blog'

type BlogListProps = {
  posts: BlogPost[]
}

export const BlogList = ({ posts }: BlogListProps) => {
  const [selectedTags, setSelectedTags] = useQueryState(
    'tags',
    parseAsArrayOf(parseAsString).withDefault([]),
  )

  const allTags = [...new Set(posts.flatMap((post) => post.tags))].sort()

  const filteredPosts =
    selectedTags.length === 0
      ? posts
      : posts.filter((post) =>
          selectedTags.some((tag) => post.tags.includes(tag)),
        )

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  return (
    <>
      <div className="border-border flex flex-wrap gap-2 border-b px-8 py-4">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`border-border cursor-pointer border px-3 py-1 text-xs transition-colors ${
              selectedTags.includes(tag)
                ? 'bg-accent text-bg'
                : 'text-muted hover:text-fg'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border-border hover:bg-accent hover:text-bg group block border-r border-b p-8 transition-colors"
          >
            <time className="text-muted group-hover:text-bg mb-2 block text-xs">
              {post.date}
            </time>
            <h2 className="mb-3 text-sm font-bold uppercase">{post.title}</h2>
            <p className="text-muted group-hover:text-bg mb-3 text-xs leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted/20 text-muted group-hover:bg-bg/20 group-hover:text-bg px-2 py-0.5 text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
