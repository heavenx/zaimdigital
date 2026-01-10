import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Lightbulb,
  Award,
  Code,
  Database,
  Bot,
  Building2,
  Calendar,
  Clock
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { getPosts, formatDate, stripHtml, getReadingTime } from "@/lib/wordpress";

export default async function Home() {
  const { posts } = await getPosts(6);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 px-6 py-24 lg:px-8">
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
              Innovation. Performance. Simplicité.
            </Badge>

            {/* Hero Title with Gradient */}
            <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl animate-slide-up">
              Transformez votre gestion métier{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-gradient">
                avec des logiciels spécialisés
              </span>
            </h1>

            {/* Hero Description */}
            <p className="max-w-4xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-2xl font-light animate-slide-up-delay">
              Zaim Digital est éditeur et distributeur de solutions logicielles depuis 2021, dont LabCorp BTP – LIMS, dédiées au BTP, aux laboratoires, à la maintenance et à l'agriculture. Nos logiciels de gestion allient technologies web, intelligence artificielle et expertise métier pour s'adapter précisément aux exigences de votre activité.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row pt-4 animate-slide-up-delay-2">
              <Button
                size="lg"
                className="group gap-2 px-8 py-6 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                asChild
              >
                <Link href="#produits">
                  Découvrir nos solutions
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 px-8 py-6 text-base bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300"
                asChild
              >
                <Link href="#contact">
                  Nous contacter
                  <MessageSquare className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats or Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-12 animate-fade-in-slow">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">2021</div>
                <div className="text-sm text-slate-600">Année de création</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-12 w-8 rounded-full border-2 border-slate-300 p-2">
            <div className="h-2 w-2 mx-auto rounded-full bg-slate-400 animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Transformation Numérique Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium">
                <Building2 className="h-4 w-4" />
                Notre Mission
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Nous voulons faire partie de la{" "}
                <span className="text-primary">transformation numérique</span>{" "}
                de votre entreprise
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                ZAIM DIGITAL accompagne les entreprises dans leur digitalisation en concevant des solutions logicielles performantes et adaptées aux métiers les plus exigeants. Spécialisés notamment dans les laboratoires de génie civil et de contrôle des matériaux, nous développons des outils fiables qui répondent aux enjeux opérationnels, réglementaires et de performance.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Rigueur</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Méthodologie précise et attention aux détails
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Communication</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Dialogue constant et transparent
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Créativité</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Solutions innovantes sur mesure
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Expertise Technique</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Maîtrise des technologies de pointe
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Produits Section */}
      <section id="produits" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Nos Produits
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Solutions innovantes pour votre{" "}
              <span className="text-primary">secteur d'activité</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Des logiciels métiers conçus pour digitaliser et optimiser vos processus
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* LABCORP BTP - LIMS */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 p-0 gap-0">
              <div className="relative h-72 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/images/labcorp-btp.webp"
                  alt="LABCORP BTP - LIMS"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">LABCORP BTP – LIMS</h3>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">LIMS BTP</Badge>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  LabCorp BTP – LIMS est un logiciel de gestion de laboratoire (LIMS) dédié aux laboratoires d'analyses BTP, centres d'essais et centrales à béton. Il permet la gestion complète des essais matériaux, des échantillons, des rapports d'analyse, du suivi qualité et de la traçabilité réglementaire.
                </p>
                <Button
                  variant="ghost"
                  className="group/btn gap-2 text-primary hover:text-primary bg-primary/5 hover:bg-primary/15 font-semibold"
                  asChild
                >
                  <Link href="/nos_produits/labcorp-laboratoire-btp/">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* SMOOTHFIX GMAO */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 p-0 gap-0">
              <div className="relative h-72 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/images/smoothfix-gmao.jpg"
                  alt="SMOOTHFIX GMAO"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">SMOOTHFIX GMAO</h3>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">GMAO</Badge>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  SmoothFix GMAO est une solution de gestion de maintenance assistée par ordinateur conçue pour la maintenance préventive et corrective. Elle assure le suivi des équipements, la planification des interventions, la gestion des pièces et l'analyse des coûts de maintenance.
                </p>
                <Button
                  variant="ghost"
                  className="group/btn gap-2 text-primary hover:text-primary bg-primary/5 hover:bg-primary/15 font-semibold"
                  asChild
                >
                  <Link href="/nos_produits/smoothfix-gmao/">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AGRONET */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 p-0 gap-0">
              <div className="relative h-72 w-full overflow-hidden bg-slate-200">
                <Image
                  src="/images/agronet.webp"
                  alt="AGRONET"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">AGRONET</h3>
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">ERP Agricole</Badge>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Agronet est un logiciel de gestion agricole (ERP agricole) destiné aux exploitations agricoles et élevages modernes. Il centralise la gestion des entrées et sorties, le suivi d'élevage, les données de production et les indicateurs clés pour un pilotage agricole précis et rentable.
                </p>
                <Button
                  variant="ghost"
                  className="group/btn gap-2 text-primary hover:text-primary bg-primary/5 hover:bg-primary/15 font-semibold"
                  asChild
                >
                  <Link href="/agronet-gestion-ferme/">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* GESTION MARITIME */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-primary via-blue-600 to-indigo-600 text-white hover:-translate-y-2 p-0 gap-0">
              <div className="relative h-72 w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
                <div className="relative z-10 space-y-4 text-center p-8">
                  <div className="mx-auto h-24 w-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Code className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">GESTION MARITIME</h3>
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">ERP Maritime</Badge>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Notre ERP Maritime est une solution dédiée aux transitaires, commissionnaires et acteurs du transport maritime. Connecté au système BADR, il permet la gestion des dossiers, des déclarations douanières, du suivi logistique avec fiabilité et conformité réglementaire.
                </p>
                <Button
                  variant="secondary"
                  className="group/btn gap-2 font-semibold"
                  asChild
                >
                  <Link href="/nos_produits/developpement-specifique/">
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos Services Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Nos Services
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Un accompagnement{" "}
              <span className="text-primary">complet et personnalisé</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              De la conception à la mise en production, nous vous accompagnons à chaque étape
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Développement sur mesure de logiciels
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous concevons des solutions logicielles personnalisées adaptées à vos besoins métiers. De la conception à la mise en production, chaque application est pensée pour optimiser vos processus et accompagner votre croissance.
                  </p>
                </div>
                <Link href="/nos_produits/developpement-specifique" className="pt-4 block">
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                    Découvrir
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Déploiement de CRM (Odoo, Dolibarr)
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous vous aidons à intégrer et personnaliser des CRM performants tels qu'Odoo et Dolibarr. Nos experts assurent un déploiement rapide et une configuration sur mesure pour améliorer votre gestion client et commerciale.
                  </p>
                </div>
                <Link href="/nos_produits/integrateur-dolibarr" className="pt-4 block">
                  <span className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    Découvrir
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Automatisation des processus basée sur l'IA (Make, n8n)
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous exploitons le potentiel de l'intelligence artificielle et des outils d'automatisation comme Make et n8n. Résultat : des workflows intelligents qui réduisent les tâches répétitives, augmentent la productivité et connectent vos outils entre eux.
                  </p>
                </div>
                <Link href="/nos_produits/developpement-specifique" className="pt-4 block">
                  <span className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    Découvrir
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative px-6 py-24 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ils nous ont fait confiance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Des entreprises leaders qui ont choisi nos solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {[
              { src: "/images/clients/LMGC.png", alt: "LMGC", href: null },
              { src: "/images/clients/LGTP.png", alt: "LGTP", href: null },
              { src: "/images/clients/LSTP-removebg-preview.png", alt: "LSTP", href: null },
              { src: "/images/clients/MS.png", alt: "LCMS", href: null },
              { src: "/images/clients/Mobilize.png", alt: "Mobilize", href: "https://mobilize-fs.ma/" },
              { src: "/images/clients/Maroc-Leasing.webp", alt: "Maroc Leasing", href: "https://www.marocleasing.ma/" },
              { src: "/images/clients/Tachnopark.png", alt: "Technopark", href: "https://www.technopark.ma/" },
              { src: "/images/clients/FIM.png", alt: "Groupe LFE", href: "https://www.group-lfe.com/" },
              { src: "/images/clients/GSS.png", alt: "Global Sea Services", href: "https://globalseaservices.net/" },
              { src: "/images/clients/S2M.png", alt: "S2M Equipment", href: "https://www.s2m-equipment.fr/" },
              { src: "/images/clients/BM.png", alt: "BM Accounting", href: "https://www.bmaccounting.be/" },
              { src: "/images/clients/Altiluz.webp", alt: "Altiluz Consulting", href: "https://www.altiluzconsulting.com/" },
              { src: "/images/clients/EasyDmat.webp", alt: "EasyDmat", href: "https://www.easydmat.com/" },
            ].map((client, i) => {
              const content = (
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              );

              return client.href ? (
                <a
                  key={i}
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 grayscale hover:grayscale-0"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={i}
                  className="group flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 grayscale hover:grayscale-0"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Témoignages
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Ce que nos <span className="text-primary">clients</span> disent
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Découvrez les retours d'expérience de nos clients qui utilisent nos solutions au quotidien
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Témoignage 1 */}
            <Card className="border-none shadow-xl bg-white p-0 overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    MK
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Mr Mohamed El Kortbi</h4>
                    <p className="text-slate-600">Gérant Associé</p>
                    <p className="text-primary font-medium">Laboratoire des Matériaux et Génie Civil</p>
                  </div>
                </div>
                <blockquote className="text-slate-600 leading-relaxed italic border-l-4 border-primary pl-4">
                  "Nous avons cru au logiciel LABCORP pour construire notre système d'information du laboratoire car nous avons fait confiance à une jeune équipe entrepreneuse qui est depuis notre première réunion à l'écoute de notre demande et a su transformer nos attentes en livrables facilitant nos processus conformément à notre système qualité accrédité NM ISO/CEI 17025. L'application est ergonomique, facile à déployer à tous les niveaux du laboratoire permettant un travail collaboratif sans accumuler les retards et dysfonctionnements."
                </blockquote>
                <Link
                  href="https://www.linkedin.com/in/kortbi/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Voir sur LinkedIn
                </Link>
              </CardContent>
            </Card>

            {/* Témoignage 2 */}
            <Card className="border-none shadow-xl bg-white p-0 overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    OB
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Mr Othman Bensator</h4>
                    <p className="text-slate-600">Directeur Associé</p>
                    <p className="text-primary font-medium">Laboratoire des Matériaux et Génie Civil</p>
                  </div>
                </div>
                <blockquote className="text-slate-600 leading-relaxed italic border-l-4 border-green-500 pl-4">
                  "La solution LABCORP BTP – LIMS est une application dont les bénéfices sont inéluctablement favorables en terme de suivi, reporting, contrôle, financier. Nous sommes à ce jour satisfaits de l'objectif de la voir appliquée à toutes les disciplines. À ce jour, dans le béton, elle nous a résolu beaucoup de problèmes liés à la gestion prélèvement, de leurs réceptions au laboratoire, de la gestion du traitement et de l'envoi au client des rapports d'essais à temps."
                </blockquote>
                <Link
                  href="https://www.linkedin.com/in/othman-bensator-a8364425/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Voir sur LinkedIn
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Derniers Articles Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Blog
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Derniers <span className="text-primary">articles</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Restez informé des dernières tendances en développement logiciel et digitalisation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
              const categories = post._embedded?.["wp:term"]?.[0] || [];
              const excerpt = stripHtml(post.excerpt.rendered);
              const readingTime = getReadingTime(post.content.rendered);

              return (
                <Card
                  key={post.id}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      {featuredImage ? (
                        <Image
                          src={featuredImage.source_url}
                          alt={featuredImage.alt_text || post.title.rendered}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary to-blue-600">
                          <span className="text-4xl font-bold text-white/50">
                            {post.title.rendered.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>

                  <CardContent className="p-6 space-y-4">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                      {categories.slice(0, 2).map((cat) => (
                        <Badge
                          key={cat.id}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                        >
                          {cat.name}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.slug}`}>
                      <h3
                        className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </Link>

                    {/* Excerpt */}
                    <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed">
                      {excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{readingTime} min</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/blog">
                Voir tous les articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Contact
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Nous Contacter
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Contactez-nous pour exprimer vos besoins et voir comment nous pouvons vous aider
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="p-8">
                <ContactForm sourcePage="Page d'accueil (/)" />
              </CardContent>
            </Card>

            {/* Alternative Contact Option */}
            <div className="space-y-8">
              <Card className="border-none shadow-xl bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
                <CardContent className="p-8 relative z-10 space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Fixer un rendez-vous</h3>
                    <p className="text-white/90 leading-relaxed">
                      Planifiez un appel avec notre équipe pour discuter de votre projet en détail. Nous sommes disponibles du lundi au vendredi de 9h à 18h.
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full gap-2 font-semibold"
                    asChild
                  >
                    <a href="https://calendly.com/karim-amguir/30min" target="_blank" rel="noopener noreferrer">
                      Prendre rendez-vous
                      <Calendar className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <Card className="border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                        <p className="text-slate-600 text-sm">contact@zaimdigital.ma</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Adresse</h4>
                        <p className="text-slate-600 text-sm">Siege Social : Bureau N°451 Technopark Casablanca</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
