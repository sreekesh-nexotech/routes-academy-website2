import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'routesacademy.b-cdn.net',
            },
        ],
    },
};



export default nextConfig;
