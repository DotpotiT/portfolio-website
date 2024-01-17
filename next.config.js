// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "portfolio.dotsoft.buzz",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
