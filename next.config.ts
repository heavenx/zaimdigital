import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "update.zaimdigital.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.gravatar.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
