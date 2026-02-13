import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Globe, Database, Settings, Sparkles, LucideIcon } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Produits | ZAIM DIGITAL - Solutions Logicielles Innovantes",
  description:
    "Découvrez nos solutions logicielles sur mesure : LABCORP BTP, SMOOTHFIX GMAO, AGRONET, création de sites web et développement spécifique.",
  alternates: {
    canonical: "https://www.zaimdigital.com/nos_produits",
  },
  openGraph: {
    title: "Nos Produits | ZAIM DIGITAL",
    description:
      "Solutions logicielles métiers : LABCORP BTP, SMOOTHFIX GMAO, AGRONET et développement sur mesure.",
    url: "https://www.zaimdigital.com/nos_produits",
  },
};

interface Product {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  href: string;
  badge: string;
  badgeColor: string;
  gradient?: string;
}

export default function NosProduits() {
  const products: Product[] = [
    {
      title: "LABCORP BTP",
      description: "Un ERP complet conçu pour digitaliser les laboratoires d'analyse BTP et les centrales à béton. Il automatise la gestion des essais, des rapports et du suivi qualité pour offrir une traçabilité optimale et un gain de temps considérable.",
      image: "/images/labcorp-btp.webp",
      href: "/nos_produits/labcorp-laboratoire-btp",
      badge: "ERP BTP",
      badgeColor: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      title: "SMOOTHFIX GMAO",
      description: "Une solution GMAO simple et rapide à déployer, pensée pour la maintenance préventive et curative. Elle permet un suivi précis des interventions, des équipements et des coûts afin d'améliorer la productivité et la fiabilité des opérations.",
      image: "/images/smoothfix-gmao.jpg",
      href: "/nos_produits/smoothfix-gmao",
      badge: "GMAO",
      badgeColor: "bg-green-100 text-green-700 hover:bg-green-200",
    },
    {
      title: "AGRONET",
      description: "Un ERP de gestion agricole intelligent dédié à l'organisation des entrées, sorties et à la gestion d'élevage. Spécialement adapté aux fermes modernes, il centralise les données pour un pilotage efficace et durable des activités agricoles.",
      image: "/images/agronet.webp",
      href: "/agronet-gestion-ferme",
      badge: "AgriTech",
      badgeColor: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
    },
    {
      title: "Création de Sites Web",
      description: "Sites web professionnels optimisés SEO avec hébergement et maintenance inclus. Du design à la mise en ligne, nous créons des sites performants et modernes adaptés à vos besoins.",
      icon: Globe,
      href: "/nos_produits/creation_site_web",
      badge: "Web Design",
      badgeColor: "bg-blue-100 text-blue-700 hover:bg-blue-200",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Intégrateur Dolibarr",
      description: "Déploiement et personnalisation de Dolibarr ERP/CRM adapté à vos besoins. Solution complète pour gérer votre entreprise : comptabilité, commercial, CRM, stocks et plus encore.",
      icon: Database,
      href: "/nos_produits/integrateur-dolibarr",
      badge: "ERP/CRM",
      badgeColor: "bg-green-100 text-green-700 hover:bg-green-200",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Intégrateur Odoo",
      description: "Expert intégrateur Odoo au Maroc. Intégration, déploiement et personnalisation d'Odoo ERP/CRM pour PME et grandes entreprises. Équipe expérimentée à Casablanca.",
      icon: Settings,
      href: "/nos_produits/integrateur-odoo",
      badge: "ERP/CRM",
      badgeColor: "bg-purple-100 text-purple-700 hover:bg-purple-200",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      title: "Développement Spécifique",
      description: "Solutions logicielles sur mesure développées selon vos besoins spécifiques. De l'analyse à la mise en production, nous créons des applications performantes et évolutives.",
      icon: Code,
      href: "/nos_produits/developpement-specifique",
      badge: "Sur Mesure",
      badgeColor: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 px-6 py-24 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl animate-fade-in-slow" />
          <div className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-100/50 to-transparent blur-3xl animate-fade-in-slower" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl w-full animate-fade-in">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Premium Badge */}
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 text-primary px-6 py-2 text-sm font-medium backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 animate-slide-down"
            >
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              Nos Produits
            </Badge>

            {/* Hero Title with Gradient */}
            <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl animate-slide-up">
              Solutions innovantes pour votre{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-gradient">
                secteur d'activité
              </span>
            </h1>

            {/* Hero Description */}
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-2xl font-light animate-slide-up-delay">
              Des logiciels métiers conçus pour digitaliser et optimiser vos processus. De l'ERP sectoriel au développement personnalisé, nous transformons vos défis en opportunités.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.href} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
                  {product.image ? (
                    <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ) : Icon ? (
                    <div className={`relative flex h-72 w-full items-center justify-center bg-gradient-to-br ${product.gradient}`}>
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
                      <Icon className="relative z-10 h-24 w-24 text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  ) : null}
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-slate-900">{product.title}</h3>
                      <Badge className={product.badgeColor}>{product.badge}</Badge>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {product.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="group/btn gap-2 text-primary hover:bg-primary/10 hover:text-primary font-semibold px-0"
                      asChild
                    >
                      <Link href={product.href}>
                        En savoir plus
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-primary px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/4 h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Besoin d'une solution personnalisée ?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Contactez-nous pour discuter de votre projet et découvrir comment nos solutions
              peuvent s'adapter à vos besoins spécifiques.
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/contactez-nous">
                  Demander une démonstration
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
