/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "vcbghhhmiwrtvriuqoau.supabase.co",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
