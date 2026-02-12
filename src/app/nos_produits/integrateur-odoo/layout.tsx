import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intégrateur Odoo Maroc | Partenaire Officiel ERP/CRM - ZAIM DIGITAL",
  description:
    "Partenaire Officiel Odoo au Maroc. Intégration, déploiement et personnalisation d'Odoo ERP/CRM pour PME et grandes entreprises. Expertise certifiée à Casablanca.",
  keywords: [
    "intégrateur Odoo Maroc",
    "partenaire Odoo Maroc",
    "Odoo ERP Maroc",
    "Odoo CRM Maroc",
    "déploiement Odoo Casablanca",
    "intégration Odoo",
    "Odoo partenaire officiel",
    "ERP Maroc",
    "CRM Maroc",
    "Odoo PME Maroc",
    "Odoo comptabilité Maroc",
    "Odoo gestion commerciale",
    "Odoo ressources humaines",
    "Odoo inventaire",
    "Odoo facturation Maroc",
  ],
  openGraph: {
    title: "Intégrateur Odoo Maroc | Partenaire Officiel - ZAIM DIGITAL",
    description:
      "Partenaire Officiel Odoo au Maroc : intégration, personnalisation et formation ERP/CRM pour optimiser votre gestion d'entreprise.",
    url: "https://www.zaimdigital.com/nos_produits/integrateur-odoo",
  },
  alternates: {
    canonical: "https://www.zaimdigital.com/nos_produits/integrateur-odoo",
  },
};

export default function OdooLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
