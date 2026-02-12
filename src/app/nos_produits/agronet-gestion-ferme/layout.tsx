import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGRONET | ERP Agricole - Logiciel Gestion Exploitation Agricole",
  description:
    "AGRONET : logiciel ERP agricole pour exploitations et élevages. Gestion des entrées/sorties, suivi d'élevage, données de production et indicateurs de performance.",
  keywords: [
    "ERP agricole Maroc",
    "logiciel gestion agricole",
    "AGRONET",
    "gestion exploitation agricole",
    "logiciel élevage",
    "suivi production agricole",
    "gestion ferme",
    "agriculture digitale",
    "logiciel fermier",
  ],
  openGraph: {
    title: "AGRONET | ERP Agricole",
    description:
      "Solution ERP agricole pour la gestion complète des exploitations agricoles et élevages modernes.",
    url: "https://www.zaimdigital.com/agronet-gestion-ferme",
    images: [
      {
        url: "/images/agronet.webp",
        width: 1200,
        height: 630,
        alt: "AGRONET - ERP Agricole",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zaimdigital.com/agronet-gestion-ferme",
  },
};

export default function AgronetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
