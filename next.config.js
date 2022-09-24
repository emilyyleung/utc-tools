/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/utc-tools',
  assetPrefix: '/utc-tools',
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
};

module.exports = nextConfig;
