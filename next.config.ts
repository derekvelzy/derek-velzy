import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aywnqw1wyioophsr.public.blob.vercel-storage.com', // update this to match *your* hostname
      },
    ],
  },
};

export default nextConfig;
