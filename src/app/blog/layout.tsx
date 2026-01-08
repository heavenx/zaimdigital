import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Actualités et Conseils IT - ZAIM DIGITAL",
  description:
    "Blog ZAIM DIGITAL : articles sur le développement logiciel, LIMS, GMAO, ERP, transformation digitale et actualités tech au Maroc.",
  keywords: [
    "blog IT Maroc",
    "actualités développement logiciel",
    "articles LIMS",
    "conseils GMAO",
    "transformation digitale Maroc",
    "tech Maroc",
  ],
  openGraph: {
    title: "Blog ZAIM DIGITAL | Actualités IT",
    description:
      "Découvrez nos articles sur le développement logiciel, la transformation digitale et les tendances tech.",
    url: "https://www.zaimdigital.com/blog",
  },
  alternates: {
    canonical: "https://www.zaimdigital.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
