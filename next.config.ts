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
        // Old spam/hacked pages - redirect to homepage
        {
          source: "/lwnwt/:path*",
          destination: "/",
          permanent: true,
        },
        {
          source: "/rcoqp6k/:path*",
          destination: "/",
          permanent: true,
        },
        {
          source: "/kkx/:path*",
          destination: "/",
          permanent: true,
        },
        // Old page redirects
        {
          source: "/contact",
          destination: "/contactez-nous",
          permanent: true,
        },
        // Old blog posts that may have been deleted from WordPress
        {
          source: "/ameliorer-lefficacite-de-votre-entreprise-au-maroc-grace-a-la-gmao",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/optimiser-la-productivite-de-votre-entreprise-au-maroc-avec-la-gmao-les-meilleures-pratiques-a-suivre",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/les-tests-essentiels-effectues-par-les-laboratoires-btp-au-maroc",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/optimiser-la-qualite-de-la-construction-telechargez-notre-pdf-sur-les-tests-en-laboratoire",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/les-tests-de-laboratoire-essentiels-pour-la-construction-guide-pdf-complet",
          destination: "/blog",
          permanent: true,
        },
        // Old English pages redirects
        {
          source: "/en/website-creation",
          destination: "/nos_produits/creation_site_web",
          permanent: true,
        },
        {
          source: "/en/gmao-cmms",
          destination: "/nos_produits/smoothfix-gmao",
          permanent: true,
        },
        {
          source: "/en/construction-laboratory-labcorp",
          destination: "/nos_produits/labcorp-laboratoire-btp",
          permanent: true,
        },
        {
          source: "/en/custom-development",
          destination: "/nos_produits/developpement-specifique",
          permanent: true,
        },
        {
          source: "/en/contact-us",
          destination: "/contactez-nous",
          permanent: true,
        },
        {
          source: "/en/home",
          destination: "/",
          permanent: true,
        },
        {
          source: "/en/about",
          destination: "/a-propos",
          permanent: true,
        },
        {
          source: "/en",
          destination: "/",
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
        // Old spam/hacked pages - redirect to homepage
        {
          source: "/lwnwt/:path*",
          destination: "/",
          permanent: true,
        },
        {
          source: "/rcoqp6k/:path*",
          destination: "/",
          permanent: true,
        },
        {
          source: "/kkx/:path*",
          destination: "/",
          permanent: true,
        },
        // Old page redirects
        {
          source: "/contact",
          destination: "/contactez-nous",
          permanent: true,
        },
        // Old blog posts that may have been deleted from WordPress
        {
          source: "/ameliorer-lefficacite-de-votre-entreprise-au-maroc-grace-a-la-gmao",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/optimiser-la-productivite-de-votre-entreprise-au-maroc-avec-la-gmao-les-meilleures-pratiques-a-suivre",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/les-tests-essentiels-effectues-par-les-laboratoires-btp-au-maroc",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/optimiser-la-qualite-de-la-construction-telechargez-notre-pdf-sur-les-tests-en-laboratoire",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/les-tests-de-laboratoire-essentiels-pour-la-construction-guide-pdf-complet",
          destination: "/blog",
          permanent: true,
        },
        // Old English pages redirects
        {
          source: "/en/website-creation",
          destination: "/nos_produits/creation_site_web",
          permanent: true,
        },
        {
          source: "/en/gmao-cmms",
          destination: "/nos_produits/smoothfix-gmao",
          permanent: true,
        },
        {
          source: "/en/construction-laboratory-labcorp",
          destination: "/nos_produits/labcorp-laboratoire-btp",
          permanent: true,
        },
        {
          source: "/en/custom-development",
          destination: "/nos_produits/developpement-specifique",
          permanent: true,
        },
        {
          source: "/en/contact-us",
          destination: "/contactez-nous",
          permanent: true,
        },
        {
          source: "/en/home",
          destination: "/",
          permanent: true,
        },
        {
          source: "/en/about",
          destination: "/a-propos",
          permanent: true,
        },
        {
          source: "/en",
          destination: "/",
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
