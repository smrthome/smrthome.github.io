const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'damnedcat-studio.imgix.net'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: 'imgix',
    path: 'https://damnedcat.studio',
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = withMarkdoc()(nextConfig)
