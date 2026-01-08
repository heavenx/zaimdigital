import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zaimdigital.com"),
  title: {
    default: "ZAIM DIGITAL - Solutions Logicielles Innovantes au Maroc",
    template: "%s | ZAIM DIGITAL",
  },
  description:
    "ZAIM DIGITAL, éditeur de logiciels au Maroc : LABCORP BTP-LIMS pour laboratoires BTP, SMOOTHFIX GMAO, AGRONET ERP agricole. Solutions sur mesure depuis 2021.",
  keywords: [
    "logiciel laboratoire BTP",
    "LIMS Maroc",
    "GMAO Maroc",
    "ERP agricole",
    "logiciel gestion laboratoire",
    "développement logiciel Casablanca",
    "ZAIM DIGITAL",
    "LABCORP BTP",
    "SMOOTHFIX",
    "AGRONET",
    "gestion maritime",
    "Dolibarr Maroc",
  ],
  authors: [{ name: "ZAIM DIGITAL", url: "https://www.zaimdigital.com" }],
  creator: "ZAIM DIGITAL",
  publisher: "ZAIM DIGITAL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://www.zaimdigital.com",
    siteName: "ZAIM DIGITAL",
    title: "ZAIM DIGITAL - Solutions Logicielles Innovantes au Maroc",
    description:
      "Éditeur de logiciels métiers : LABCORP BTP-LIMS, SMOOTHFIX GMAO, AGRONET. Développement sur mesure et intégration CRM au Maroc.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZAIM DIGITAL - Solutions Logicielles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZAIM DIGITAL - Solutions Logicielles Innovantes",
    description:
      "Éditeur de logiciels métiers au Maroc : LABCORP BTP-LIMS, SMOOTHFIX GMAO, AGRONET.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.zaimdigital.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
