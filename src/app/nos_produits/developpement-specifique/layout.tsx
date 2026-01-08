import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développement Logiciel Sur Mesure | ZAIM DIGITAL Maroc",
  description:
    "Développement de logiciels sur mesure au Maroc : ERP, CRM, applications métiers, automatisation. Solutions personnalisées pour votre entreprise.",
  keywords: [
    "développement logiciel sur mesure",
    "logiciel personnalisé Maroc",
    "développement application Casablanca",
    "ERP sur mesure",
    "CRM personnalisé",
    "automatisation processus",
    "développeur Maroc",
  ],
  openGraph: {
    title: "Développement Logiciel Sur Mesure | ZAIM DIGITAL",
    description:
      "Création de logiciels métiers personnalisés : ERP, CRM, applications web et mobiles. Expertise développement au Maroc.",
    url: "https://www.zaimdigital.com/nos_produits/developpement-specifique",
  },
  alternates: {
    canonical: "https://www.zaimdigital.com/nos_produits/developpement-specifique",
  },
};

export default function DevSpecifiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
