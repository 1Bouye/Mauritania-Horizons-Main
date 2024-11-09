/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
}

module.exports = nextConfig
