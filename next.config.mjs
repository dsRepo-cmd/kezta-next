/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ["error"],
    },
  },
  poweredByHeader: false,
};

export default nextConfig;
