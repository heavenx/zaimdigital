import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Search,
  Server,
  ShoppingCart,
  Building2,
  CheckCircle2,
  Globe,
  Code,
  Palette,
  Smartphone,
  Zap,
  Shield,
  Clock,
  Users,
  BarChart3,
  Headphones,
  Layers,
  Target,
  Rocket,
  Award,
  MessageSquare,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de Sites Web Professionnels | ZAIM DIGITAL",
  description:
    "Création de sites web sur mesure au Maroc : sites vitrine, e-commerce, landing pages, applications web. Design moderne, SEO optimisé, hébergement inclus.",
};

export default function CreationSiteWeb() {
  const typesDesSites = [
    {
      icon: Target,
      title: "Landing Pages",
      description:
        "Pages d'atterrissage optimisées pour la conversion, parfaites pour vos campagnes marketing et la génération de leads.",
      features: ["Conversion optimisée", "A/B Testing", "Chargement rapide"],
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Building2,
      title: "Sites Vitrine",
      description:
        "Présentez votre entreprise avec élégance. Un site professionnel qui reflète votre image de marque et inspire confiance.",
      features: ["Design sur mesure", "Responsive", "SEO intégré"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description:
        "Boutiques en ligne complètes avec gestion des stocks, paiement sécurisé et tableau de bord de ventes intuitif.",
      features: [
        "Paiement CMI/Stripe",
        "Gestion des stocks",
        "Multi-devises",
      ],
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Layers,
      title: "Portails Web",
      description:
        "Plateformes complexes avec espace membre, gestion de contenu avancée et fonctionnalités sur mesure.",
      features: ["Espace membre", "Multi-utilisateurs", "API intégrées"],
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Code,
      title: "Applications Web",
      description:
        "Applications métier sur mesure : CRM, ERP, outils de gestion, tableaux de bord interactifs et plus encore.",
      features: ["Sur mesure", "Cloud native", "Scalable"],
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: Globe,
      title: "Sites Multilingues",
      description:
        "Sites web internationaux avec gestion multilingue complète pour toucher une audience mondiale.",
      features: ["Multi-langues", "SEO international", "RTL Support"],
      color: "from-cyan-500 to-teal-600",
    },
  ];

  const services = [
    {
      icon: Search,
      title: "Optimisation SEO",
      description:
        "Référencement naturel optimisé dès la conception : structure sémantique, vitesse de chargement, balises meta, et stratégie de mots-clés pour un meilleur positionnement sur Google.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Server,
      title: "Hébergement Premium",
      description:
        "Hébergement haute performance sur serveurs sécurisés avec certificat SSL, sauvegardes automatiques quotidiennes et CDN pour une disponibilité 99.9%.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Smartphone,
      title: "Design Responsive",
      description:
        "Sites parfaitement adaptés à tous les écrans : mobile, tablette et desktop. Une expérience utilisateur optimale quel que soit l'appareil.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Performance Optimale",
      description:
        "Sites ultra-rapides avec optimisation des images, lazy loading, minification du code et cache intelligent pour des temps de chargement inférieurs à 3 secondes.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const technologies = [
    { name: "Next.js", category: "Framework" },
    { name: "React", category: "Frontend" },
    { name: "WordPress", category: "CMS" },
    { name: "WooCommerce", category: "E-commerce" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Supabase", category: "Backend" },
    { name: "Vercel", category: "Hosting" },
    { name: "Cloudflare", category: "CDN" },
    { name: "Stripe", category: "Paiement" },
  ];

  const processus = [
    {
      num: "01",
      title: "Découverte",
      desc: "Analyse approfondie de vos besoins, objectifs et cible. Étude de la concurrence et définition du cahier des charges.",
      icon: MessageSquare,
    },
    {
      num: "02",
      title: "Stratégie",
      desc: "Définition de l'arborescence, wireframes et stratégie de contenu. Planification du projet avec jalons clairs.",
      icon: Target,
    },
    {
      num: "03",
      title: "Design",
      desc: "Création de maquettes UI/UX modernes et attrayantes. Itérations jusqu'à validation complète du design.",
      icon: Palette,
    },
    {
      num: "04",
      title: "Développement",
      desc: "Programmation avec les dernières technologies web. Tests de qualité et optimisation des performances.",
      icon: Code,
    },
    {
      num: "05",
      title: "SEO & Contenu",
      desc: "Optimisation pour les moteurs de recherche, intégration du contenu et configuration des analytics.",
      icon: Search,
    },
    {
      num: "06",
      title: "Tests & QA",
      desc: "Tests complets sur tous les navigateurs et appareils. Vérification de la sécurité et des performances.",
      icon: Shield,
    },
    {
      num: "07",
      title: "Lancement",
      desc: "Mise en production, configuration DNS et surveillance du bon fonctionnement. Votre site est en ligne !",
      icon: Rocket,
    },
    {
      num: "08",
      title: "Support",
      desc: "Formation à l'administration du site, documentation complète et support technique continu.",
      icon: Headphones,
    },
  ];

  const avantages = [
    {
      icon: Award,
      title: "Expertise reconnue",
      desc: "Plus de 50 sites web livrés avec succès depuis 2021",
    },
    {
      icon: Clock,
      title: "Délais respectés",
      desc: "Livraison dans les temps avec une méthodologie agile",
    },
    {
      icon: Users,
      title: "Accompagnement",
      desc: "Un interlocuteur dédié tout au long du projet",
    },
    {
      icon: BarChart3,
      title: "ROI mesurable",
      desc: "Sites conçus pour générer des résultats concrets",
    },
  ];

  const faqs = [
    {
      question: "Combien coûte la création d'un site web ?",
      answer:
        "Le prix varie selon la complexité du projet. Un site vitrine démarre à partir de 8 000 MAD, tandis qu'un e-commerce ou une application web personnalisée nécessite un devis sur mesure. Contactez-nous pour une estimation gratuite.",
    },
    {
      question: "Quel est le délai de réalisation ?",
      answer:
        "Un site vitrine simple peut être livré en 2-3 semaines. Un site e-commerce prend généralement 4-6 semaines. Les projets plus complexes sont planifiés selon un calendrier établi ensemble.",
    },
    {
      question: "Le site sera-t-il optimisé pour mobile ?",
      answer:
        "Absolument ! Tous nos sites sont conçus en 'mobile-first' et s'adaptent parfaitement à tous les écrans. C'est essentiel pour le SEO et l'expérience utilisateur.",
    },
    {
      question: "Proposez-vous la maintenance du site ?",
      answer:
        "Oui, nous proposons des contrats de maintenance incluant mises à jour, sauvegardes, surveillance de sécurité et support technique. Votre site reste toujours performant et sécurisé.",
    },
    {
      question: "Puis-je modifier le contenu moi-même ?",
      answer:
        "Bien sûr ! Nous intégrons un système de gestion de contenu (CMS) intuitif et vous formons à son utilisation. Vous serez autonome pour les modifications courantes.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl animate-fade-in-slow" />
          <div className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-100/50 to-transparent blur-3xl animate-fade-in-slower" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl w-full text-center space-y-8 animate-fade-in">
          <Badge
            variant="outline"
            className="border-cyan-500/20 bg-cyan-500/5 text-cyan-600 px-6 py-2 text-sm font-medium backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            Création de Sites Web
          </Badge>

          <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">
            <Globe className="h-12 w-12 text-white" />
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl max-w-4xl mx-auto">
            Création de Sites Web{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Professionnels
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-600 sm:text-xl font-light">
            Transformez votre présence en ligne avec un site web sur mesure.
            Design moderne, performance optimale, SEO intégré et hébergement
            premium pour propulser votre activité sur le web.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4">
            <Button
              size="lg"
              className="gap-2 px-8 py-6 text-base bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-500/25"
              asChild
            >
              <Link href="/contactez-nous">
                Demander un devis gratuit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-8 py-6 text-base"
              asChild
            >
              <Link href="#types">
                Voir nos offres
                <Layers className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">50+</div>
              <div className="text-sm text-slate-600">Sites livrés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-sm text-slate-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">99.9%</div>
              <div className="text-sm text-slate-600">Uptime garanti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">24/7</div>
              <div className="text-sm text-slate-600">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de Sites Section */}
      <section
        id="types"
        className="relative px-6 py-32 lg:px-8 bg-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge
              variant="outline"
              className="border-cyan-500/20 bg-cyan-500/5 text-cyan-600 px-4 py-1.5"
            >
              Types de Sites
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Une solution pour chaque{" "}
              <span className="text-cyan-600">besoin</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Du simple site vitrine à l'application web complexe, nous
              développons la solution idéale pour votre activité
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {typesDesSites.map((type, idx) => {
              const Icon = type.icon;
              return (
                <Card
                  key={idx}
                  className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8 space-y-5">
                    <div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {type.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {type.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((feature, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="relative px-6 py-24 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="border-cyan-500/20 bg-cyan-500/5 text-cyan-600 px-4 py-1.5"
              >
                Pourquoi ZAIM DIGITAL
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Un partenaire de confiance pour votre{" "}
                <span className="text-cyan-600">présence digitale</span>
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Depuis 2021, nous accompagnons les entreprises marocaines et
                internationales dans leur transformation digitale. Notre
                approche combine créativité, expertise technique et
                compréhension de vos enjeux métiers pour créer des sites web qui
                génèrent des résultats.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {avantages.map((avantage, idx) => {
                  const Icon = avantage.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {avantage.title}
                        </h3>
                        <p className="text-sm text-slate-600">{avantage.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Technologies maîtrisées
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-cyan-300 transition-all duration-300"
                  >
                    <Code className="h-4 w-4 text-cyan-600" />
                    <span className="font-medium text-slate-700">
                      {tech.name}
                    </span>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-slate-100 text-slate-500"
                    >
                      {tech.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge
              variant="outline"
              className="border-cyan-500/20 bg-cyan-500/5 text-cyan-600 px-4 py-1.5"
            >
              Nos Services
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Tout ce qu'il faut pour{" "}
              <span className="text-cyan-600">réussir en ligne</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={idx}
                  className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8 space-y-4">
                    <div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processus Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge
              variant="outline"
              className="border-cyan-500/20 bg-cyan-500/5 text-cyan-600 px-4 py-1.5"
            >
              Notre Processus
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              8 étapes vers le <span className="text-cyan-600">succès</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Une méthodologie éprouvée pour garantir la réussite de votre projet
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processus.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Card
                  key={idx}
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                        {step.num}
                      </div>
                      <Icon className="h-6 w-6 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <Badge
              variant="outline"
              className="border-cyan-500/20 bg-cyan-500/5 text-cyan-600 px-4 py-1.5"
            >
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Questions <span className="text-cyan-600">fréquentes</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card
                key={idx}
                className="border-slate-200 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-9">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-600 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Prêt à lancer votre site web ?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet. Devis
            gratuit et sans engagement. Réponse sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 px-8 py-6"
              asChild
            >
              <Link href="/contactez-nous">
                Demander un devis gratuit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-8 py-6 border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="tel:+212600000000">
                <Headphones className="h-5 w-5" />
                Nous appeler
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
