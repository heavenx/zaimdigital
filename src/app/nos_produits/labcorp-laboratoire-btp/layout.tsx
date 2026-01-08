import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LABCORP BTP - LIMS | Logiciel Gestion Laboratoire BTP Maroc",
  description:
    "LABCORP BTP-LIMS : logiciel de gestion de laboratoire (LIMS) pour laboratoires BTP, génie civil et centrales à béton. Gestion des essais, traçabilité NM ISO/CEI 17025.",
  keywords: [
    "LIMS BTP",
    "logiciel laboratoire BTP",
    "gestion laboratoire génie civil",
    "LABCORP BTP",
    "logiciel essais matériaux",
    "NM ISO 17025",
    "centrale à béton",
    "laboratoire contrôle qualité",
    "gestion échantillons BTP",
    "logiciel laboratoire Maroc",
  ],
  openGraph: {
    title: "LABCORP BTP - LIMS | Logiciel Laboratoire BTP",
    description:
      "Solution LIMS complète pour laboratoires BTP : gestion des essais, échantillons, rapports et traçabilité conforme NM ISO/CEI 17025.",
    url: "https://www.zaimdigital.com/nos_produits/labcorp-laboratoire-btp",
    images: [
      {
        url: "/images/labcorp-btp.webp",
        width: 1200,
        height: 630,
        alt: "LABCORP BTP - Logiciel de gestion de laboratoire",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zaimdigital.com/nos_produits/labcorp-laboratoire-btp",
  },
};

export default function LabcorpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
