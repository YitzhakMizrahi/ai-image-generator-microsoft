/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'links.papareact.com',
      'aiimagegeneratormi56fd6f.blob.core.windows.net',
    ],
  },
};

module.exports = nextConfig;
