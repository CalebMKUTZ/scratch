/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEWS_KEY: process.env.NEXT_PUBLIC_NEWS_SEARCH_KEY,
  },
};

module.exports = nextConfig;
