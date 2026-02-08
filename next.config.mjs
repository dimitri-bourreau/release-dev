import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  devIndicators: false,
}

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['rehype-highlight'],
  },
})

export default withMDX(nextConfig)
