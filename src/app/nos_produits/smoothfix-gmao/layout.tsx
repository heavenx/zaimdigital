import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMOOTHFIX GMAO | Logiciel Maintenance Assistée par Ordinateur",
  description:
    "SMOOTHFIX GMAO : solution de gestion de maintenance assistée par ordinateur. Maintenance préventive, corrective, suivi équipements et planification des interventions.",
  keywords: [
    "GMAO Maroc",
    "logiciel maintenance",
    "gestion maintenance assistée ordinateur",
    "SMOOTHFIX",
    "maintenance préventive",
    "maintenance corrective",
    "suivi équipements",
    "planification interventions",
    "gestion pièces détachées",
  ],
  openGraph: {
    title: "SMOOTHFIX GMAO | Logiciel de Maintenance",
    description:
      "Solution GMAO complète pour la gestion de maintenance : planification, suivi des équipements, gestion des interventions et analyse des coûts.",
    url: "https://www.zaimdigital.com/nos_produits/smoothfix-gmao",
    images: [
      {
        url: "/images/smoothfix-gmao.jpg",
        width: 1200,
        height: 630,
        alt: "SMOOTHFIX GMAO - Logiciel de maintenance",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zaimdigital.com/nos_produits/smoothfix-gmao",
  },
};

export default function SmoothfixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
