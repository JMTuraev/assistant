/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const env = {
  customKey: 'locahost:300',
}

module.exports = nextConfig, env
