/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
    ],
  },
  env: {
    SERVER_API: process.env.SERVER_API,
  },
};

module.exports = nextConfig;
