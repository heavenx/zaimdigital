import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  ShoppingCart,
  BarChart3,
  Users,
  Package,
  FileText,
  Settings,
  CheckCircle2,
  Building2,
  Briefcase,
  UserCheck,
  Globe,
  Wrench,
  GraduationCap,
  HeadphonesIcon,
  Calculator,
  Truck,
  Factory,
  Award,
} from "lucide-react";

export default function IntegrateurOdoo() {
  const modules = [
    { icon: ShoppingCart, title: "Ventes & CRM", description: "Gestion des leads, opportunités, devis et commandes clients avec pipeline commercial complet", color: "from-purple-500 to-purple-600" },
    { icon: Calculator, title: "Comptabilité & Finance", description: "Comptabilité conforme aux normes marocaines, facturation, notes de frais et rapports financiers", color: "from-blue-500 to-blue-600" },
    { icon: Package, title: "Inventaire & Stock", description: "Gestion multi-entrepôts, traçabilité, réapprovisionnement automatique et gestion des lots", color: "from-orange-500 to-orange-600" },
    { icon: Factory, title: "Fabrication (MRP)", description: "Planification de production, nomenclatures, ordres de fabrication et contrôle qualité", color: "from-green-500 to-green-600" },
    { icon: Users, title: "Ressources Humaines", description: "Gestion des employés, congés, présences, recrutement et évaluations de performance", color: "from-pink-500 to-pink-600" },
    { icon: Truck, title: "Achats & Logistique", description: "Gestion des fournisseurs, bons de commande, réception et contrôle des achats", color: "from-indigo-500 to-indigo-600" },
    { icon: BarChart3, title: "Gestion de Projets", description: "Planification, suivi des tâches, feuilles de temps et tableaux de bord de performance", color: "from-teal-500 to-teal-600" },
    { icon: Globe, title: "Site Web & E-commerce", description: "Création de site web et boutique en ligne intégrée avec gestion des paiements", color: "from-rose-500 to-rose-600" },
    { icon: FileText, title: "Documents & Signature", description: "Gestion électronique des documents, signature numérique et workflows d'approbation", color: "from-amber-500 to-amber-600" },
  ];

  const services = [
    { icon: Settings, title: "Intégration & Déploiement", description: "Installation, configuration et mise en production d'Odoo adaptée à votre infrastructure" },
    { icon: Wrench, title: "Personnalisation & Développement", description: "Modules sur mesure, adaptations fonctionnelles et intégrations avec vos systèmes existants" },
    { icon: GraduationCap, title: "Formation & Accompagnement", description: "Formation complète de vos équipes et accompagnement au changement pour une adoption réussie" },
    { icon: HeadphonesIcon, title: "Support & Maintenance", description: "Assistance technique réactive, mises à jour régulières et optimisation continue de votre instance" },
  ];

  const targetAudience = [
    { icon: UserCheck, title: "Startup", description: "Démarrez avec un ERP évolutif" },
    { icon: Briefcase, title: "PME", description: "Optimisez vos processus métiers" },
    { icon: Building2, title: "ETI", description: "Centralisez votre gestion" },
    { icon: Factory, title: "Industrie", description: "Pilotez votre production" },
    { icon: ShoppingCart, title: "Commerce", description: "Gérez ventes et stocks" },
  ];

  const advantages = [
    "Partenaire Officiel Odoo au Maroc",
    "Expertise certifiée sur toutes les versions d'Odoo",
    "Équipe locale basée à Casablanca",
    "Personnalisation complète selon vos besoins",
    "Conformité aux normes comptables marocaines",
    "Support technique réactif en français et arabe",
    "Plus de 50 projets ERP déployés avec succès",
    "Formation complète de vos équipes incluse",
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl animate-fade-in-slow" />
          <div className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-violet-100/50 to-transparent blur-3xl animate-fade-in-slower" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl w-full text-center space-y-8 animate-fade-in">
          <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-6 py-2">
            <Award className="h-3.5 w-3.5 mr-2" />
            Partenaire Officiel Odoo
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl max-w-5xl mx-auto">
            Intégrateur Odoo{" "}
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              ERP / CRM au Maroc
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-600 sm:text-xl font-light">
            ZAIM DIGITAL, <strong>Partenaire Officiel Odoo au Maroc</strong>, vous accompagne dans l&apos;intégration et le déploiement d&apos;Odoo ERP/CRM. De la comptabilité à la gestion commerciale, en passant par les ressources humaines et la production, nous personnalisons Odoo pour répondre précisément aux besoins de votre entreprise.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
              "Partenaire Officiel Odoo",
              "Expertise locale à Casablanca",
              "Support dédié en français",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4">
            <Button size="lg" className="gap-2 px-8 py-6 bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/25" asChild>
              <Link href="/contactez-nous">
                Demander une démonstration gratuite
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8 py-6" asChild>
              <Link href="#modules">
                Découvrir les modules
                <Sparkles className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partenaire Officiel Section */}
      <section className="relative px-6 py-24 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-4 py-1.5">
                <Award className="h-3.5 w-3.5 mr-2" />
                Certification Officielle
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Pourquoi choisir un{" "}
                <span className="text-purple-600">Partenaire Officiel Odoo</span> ?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                En tant que Partenaire Officiel Odoo pour le Maroc, ZAIM DIGITAL bénéficie d&apos;un accès privilégié aux ressources Odoo, aux formations certifiées et au support technique direct de l&apos;éditeur. Cela nous permet de vous garantir une intégration aux standards les plus élevés et un accompagnement de qualité supérieure.
              </p>
              <div className="space-y-3">
                {[
                  "Accès direct au support technique Odoo",
                  "Consultants certifiés par Odoo S.A.",
                  "Méthodologie de déploiement éprouvée",
                  "Accès anticipé aux nouvelles fonctionnalités",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-600" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-none shadow-2xl bg-gradient-to-br from-purple-600 to-violet-600 overflow-hidden">
              <CardContent className="p-8 text-white text-center space-y-6">
                <div className="mx-auto h-20 w-20 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">Partenaire Officiel Odoo</h3>
                <p className="text-white/90">
                  Intégrateur certifié pour le déploiement d&apos;Odoo ERP/CRM au Maroc
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-xl bg-white/10 p-4 text-center">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm text-white/80">Projets ERP</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm text-white/80">Satisfaction</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="w-full gap-2" asChild>
                  <Link href="/contactez-nous">
                    Contactez-nous
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="relative px-6 py-24 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-4 py-1.5">
              Pour Qui ?
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Odoo s&apos;adapte à <span className="text-purple-600">votre secteur</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Quelle que soit la taille de votre entreprise, Odoo propose des solutions modulaires et évolutives
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {targetAudience.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <Card key={idx} className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 text-center">
                  <CardContent className="p-6 space-y-3">
                    <div className="mx-auto h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{audience.title}</h3>
                    <p className="text-sm text-slate-600">{audience.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-4 py-1.5">
              Modules Odoo
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Un ERP <span className="text-purple-600">modulaire et complet</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Odoo offre plus de 80 applications intégrées. Voici les modules les plus déployés au Maroc
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <Card key={idx} className="group relative border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
                  <CardContent className="p-8 space-y-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{module.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{module.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-4 py-1.5">
              Nos Services
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Un accompagnement <span className="text-purple-600">de A à Z</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              De l&apos;analyse de vos besoins à la mise en production, nous assurons chaque étape de votre projet Odoo
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Pourquoi choisir <span className="text-purple-600">ZAIM DIGITAL</span> pour Odoo ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-purple-600 mt-0.5" />
                <span className="text-lg text-slate-700">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="relative px-6 py-16 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Découvrez nos autres solutions
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/nos_produits/labcorp-laboratoire-btp" className="group p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">LABCORP BTP - LIMS</h3>
              <p className="text-sm text-slate-600 mt-1">Logiciel de gestion de laboratoire BTP</p>
            </Link>
            <Link href="/nos_produits/smoothfix-gmao" className="group p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">SMOOTHFIX GMAO</h3>
              <p className="text-sm text-slate-600 mt-1">Solution de maintenance assistée par ordinateur</p>
            </Link>
            <Link href="/nos_produits/integrateur-dolibarr" className="group p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Intégrateur Dolibarr</h3>
              <p className="text-sm text-slate-600 mt-1">ERP/CRM open source pour entreprises</p>
            </Link>
            <Link href="/nos_produits/agronet-gestion-ferme" className="group p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">AGRONET</h3>
              <p className="text-sm text-slate-600 mt-1">ERP agricole pour exploitations modernes</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-purple-600 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Prêt à déployer Odoo dans votre entreprise ?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Contactez votre Partenaire Officiel Odoo au Maroc pour une démonstration gratuite et un devis personnalisé
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" variant="secondary" className="gap-2 px-8 py-6" asChild>
              <Link href="/contactez-nous">
                Demander une démonstration gratuite
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
