import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  unoptimized: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.bcsdlab.com',
      },
      {
        protocol: 'https',
        hostname: 'static.koreatech.in',
      },
      {
        protocol: 'https',
        hostname: 'avatars.slack-edge.com',
      },
      {
        protocol: 'https',
        hostname: 'ca.slack-edge.com',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
