import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous | ZAIM DIGITAL - Casablanca, Maroc",
  description:
    "Contactez ZAIM DIGITAL pour vos projets de développement logiciel, LIMS, GMAO ou ERP. Nous sommes basés au Technopark Casablanca. Devis gratuit.",
  keywords: [
    "contact ZAIM DIGITAL",
    "devis logiciel Maroc",
    "développement logiciel Casablanca",
    "Technopark Casablanca",
    "agence digitale Maroc",
  ],
  openGraph: {
    title: "Contactez ZAIM DIGITAL",
    description:
      "Prenez contact avec notre équipe pour discuter de votre projet digital. Technopark Casablanca, Maroc.",
    url: "https://www.zaimdigital.com/contactez-nous",
  },
  alternates: {
    canonical: "https://www.zaimdigital.com/contactez-nous",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
