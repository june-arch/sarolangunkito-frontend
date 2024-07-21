/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.sarolangunkito.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks']
  }
  
};

export default nextConfig;
