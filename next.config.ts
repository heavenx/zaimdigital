import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Fetch blog posts from WordPress to create redirects
    try {
      const res = await fetch(
        "https://update.zaimdigital.com/wp-json/wp/v2/posts?per_page=100&_fields=slug"
      );
      const posts = await res.json();

      // Redirect old blog URLs (at root) to new /blog/ path
      const blogRedirects = posts.map((post: { slug: string }) => ({
        source: `/${post.slug}`,
        destination: `/blog/${post.slug}`,
        permanent: true,
      }));

      return [
        ...blogRedirects,
        // Old WordPress category/tag/author URLs
        {
          source: "/category/:slug",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/tag/:slug",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/author/:slug",
          destination: "/blog",
          permanent: true,
        },
      ];
    } catch {
      // Fallback if WordPress is unreachable
      return [
        {
          source: "/category/:slug",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/tag/:slug",
          destination: "/blog",
          permanent: true,
        },
      ];
    }
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
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
