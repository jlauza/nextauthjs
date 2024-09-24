/** @type {import('next').NextConfig} */
const nextConfig = {
  // Define external source maps here e.g. Images from GitHub
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
};

module.exports = nextConfig;
