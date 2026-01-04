import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  reactCompiler: true,

  images: {
    deviceSizes: [640, 768, 1024, 1280, 1440, 1600, 1920],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'image.bcsdlab.com' },
      { protocol: 'https', hostname: 'static.koreatech.in' },
      { protocol: 'https', hostname: 'avatars.slack-edge.com' },
      { protocol: 'https', hostname: 'ca.slack-edge.com' },
    ],
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
