import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intégrateur Dolibarr Maroc | ERP/CRM Open Source - ZAIM DIGITAL",
  description:
    "Intégrateur Dolibarr certifié au Maroc. Déploiement, configuration et personnalisation de l'ERP/CRM open source pour votre entreprise.",
  keywords: [
    "Dolibarr Maroc",
    "intégrateur Dolibarr",
    "ERP open source Maroc",
    "CRM Dolibarr",
    "déploiement Dolibarr",
    "configuration Dolibarr",
    "ERP PME Maroc",
  ],
  openGraph: {
    title: "Intégrateur Dolibarr Maroc | ZAIM DIGITAL",
    description:
      "Expertise Dolibarr au Maroc : installation, configuration, personnalisation et formation sur l'ERP/CRM open source.",
    url: "https://www.zaimdigital.com/nos_produits/integrateur-dolibarr",
  },
  alternates: {
    canonical: "https://www.zaimdigital.com/nos_produits/integrateur-dolibarr",
  },
};

export default function DolibarrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
