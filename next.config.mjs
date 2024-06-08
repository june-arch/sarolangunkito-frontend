/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};

export default nextConfig;
