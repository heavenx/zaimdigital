import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création Site Web | Développement Web Maroc - ZAIM DIGITAL",
  description:
    "Création de sites web professionnels au Maroc : sites vitrine, e-commerce, applications web. Design moderne, SEO optimisé et performance garantie.",
  keywords: [
    "création site web Maroc",
    "développement web Casablanca",
    "site vitrine Maroc",
    "e-commerce Maroc",
    "agence web Maroc",
    "création site internet",
    "développeur web Maroc",
  ],
  openGraph: {
    title: "Création Site Web Professionnel | ZAIM DIGITAL",
    description:
      "Création de sites web modernes et performants au Maroc. Sites vitrine, e-commerce, applications web sur mesure.",
    url: "https://www.zaimdigital.com/nos_produits/creation_site_web",
  },
  alternates: {
    canonical: "https://www.zaimdigital.com/nos_produits/creation_site_web",
  },
};

export default function CreationSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
