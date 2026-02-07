import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  devIndicators: false,
}

const withMDX = createMDX()

export default withMDX(nextConfig)
