import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";
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
  ClipboardList,
  Cog,
  DatabaseZap,
  ChevronDown,
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
    "Expert Odoo reconnu au Maroc",
    "Expertise approfondie sur toutes les versions d'Odoo",
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
            Expert Intégrateur Odoo
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl max-w-5xl mx-auto">
            Intégrateur Odoo{" "}
            <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              ERP / CRM au Maroc
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-600 sm:text-xl font-light">
            ZAIM DIGITAL, <strong>votre expert intégrateur Odoo au Maroc</strong>, vous accompagne dans l&apos;intégration et le déploiement d&apos;Odoo ERP/CRM. De la comptabilité à la gestion commerciale, en passant par les ressources humaines et la production, nous personnalisons Odoo pour répondre précisément aux besoins de votre entreprise.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
              "Expert Intégrateur Odoo",
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

      {/* Notre Expertise Odoo Section */}
      <section className="relative px-6 py-24 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-4 py-1.5">
                <Award className="h-3.5 w-3.5 mr-2" />
                Notre Expertise
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Pourquoi choisir{" "}
                <span className="text-purple-600">ZAIM DIGITAL pour Odoo</span> ?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Forte de son expérience en intégration Odoo au Maroc, l&apos;équipe ZAIM DIGITAL maîtrise l&apos;ensemble des modules ERP/CRM et vous garantit un déploiement conforme aux meilleures pratiques. Notre connaissance approfondie de l&apos;écosystème Odoo nous permet de vous offrir un accompagnement de qualité supérieure.
              </p>
              <div className="space-y-3">
                {[
                  "Maîtrise complète de l'écosystème Odoo",
                  "Consultants expérimentés en intégration ERP",
                  "Méthodologie de déploiement éprouvée",
                  "Veille continue sur les nouvelles fonctionnalités",
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
                <h3 className="text-2xl font-bold">Expert Intégrateur Odoo</h3>
                <p className="text-white/90">
                  Spécialiste du déploiement d&apos;Odoo ERP/CRM au Maroc
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

      {/* Processus d'intégration Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-4 py-1.5">
              Notre Méthodologie
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Comment se déroule l&apos;intégration <span className="text-purple-600">Odoo</span> ?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Un processus structuré en 4 étapes pour garantir le succès de votre projet ERP Odoo au Maroc
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                icon: ClipboardList,
                title: "Audit & Analyse des besoins",
                description: "Nous analysons vos processus métiers existants, identifions vos besoins fonctionnels et définissons le périmètre du projet d'intégration Odoo adapté à votre entreprise au Maroc.",
              },
              {
                step: "02",
                icon: Cog,
                title: "Configuration & Personnalisation",
                description: "Paramétrage des modules Odoo (comptabilité, CRM, stocks, RH), développement de modules sur mesure et personnalisation de l'interface selon vos spécificités métier.",
              },
              {
                step: "03",
                icon: DatabaseZap,
                title: "Migration & Déploiement",
                description: "Migration sécurisée de vos données depuis votre ancien système, tests approfondis et mise en production de votre instance Odoo cloud ou on-premise.",
              },
              {
                step: "04",
                icon: GraduationCap,
                title: "Formation & Support continu",
                description: "Formation complète de vos équipes en français, documentation personnalisée et support technique réactif pour assurer l'adoption et la pérennité de votre ERP Odoo.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative group">
                  <div className="absolute -top-4 -left-2 text-6xl font-black text-purple-100 group-hover:text-purple-200 transition-colors duration-300">
                    {item.step}
                  </div>
                  <Card className="relative border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 h-full">
                    <CardContent className="p-8 space-y-4 pt-10">
                      <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SEO Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-4 py-1.5">
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Questions fréquentes sur <span className="text-purple-600">Odoo</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Tout ce que vous devez savoir sur l&apos;intégration d&apos;Odoo ERP/CRM au Maroc
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Qu'est-ce qu'Odoo ERP et pourquoi le choisir pour mon entreprise au Maroc ?",
                answer: "Odoo est un progiciel de gestion intégré (ERP) open source proposant plus de 80 applications professionnelles : CRM, comptabilité, gestion des stocks, ressources humaines, e-commerce, fabrication et bien plus. C'est l'ERP le plus déployé dans le monde avec plus de 12 millions d'utilisateurs. Au Maroc, Odoo est particulièrement adapté car il prend en charge la comptabilité conforme aux normes marocaines, la facturation en MAD et la gestion multi-langues (français, arabe).",
              },
              {
                question: "Combien coûte l'intégration d'Odoo au Maroc ?",
                answer: "Le coût d'intégration d'Odoo varie selon la taille de votre entreprise, le nombre de modules requis et le niveau de personnalisation. Odoo Community est gratuit (open source), tandis qu'Odoo Enterprise est proposé sous licence par utilisateur. Les coûts d'intégration incluent le paramétrage, la personnalisation, la migration des données et la formation. Contactez-nous pour obtenir un devis personnalisé adapté à votre budget.",
              },
              {
                question: "Quelle est la différence entre Odoo Community et Odoo Enterprise ?",
                answer: "Odoo Community est la version open source et gratuite avec les fonctionnalités de base (CRM, ventes, inventaire, comptabilité). Odoo Enterprise ajoute des fonctionnalités avancées : studio (personnalisation sans code), signature électronique, hébergement cloud Odoo.sh, support officiel, application mobile et des modules premium comme la fabrication avancée (MRP), la qualité et la planification. Grâce à notre expertise approfondie d'Odoo, nous vous conseillons la version la mieux adaptée à vos besoins.",
              },
              {
                question: "Pourquoi choisir ZAIM DIGITAL comme intégrateur Odoo au Maroc ?",
                answer: "ZAIM DIGITAL dispose d'une équipe expérimentée en intégration Odoo, d'une connaissance approfondie des processus métiers marocains et d'une méthodologie de déploiement éprouvée. Nous assurons une intégration conforme aux meilleures pratiques, des mises à jour maîtrisées et un support réactif en français et en arabe pour votre entreprise.",
              },
              {
                question: "Odoo est-il adapté aux PME marocaines ?",
                answer: "Odoo est parfaitement adapté aux PME marocaines. Sa modularité permet de démarrer avec les modules essentiels (comptabilité, facturation, CRM) et d'ajouter progressivement d'autres fonctionnalités au fur et à mesure de la croissance de l'entreprise. La conformité aux normes comptables marocaines, le support en français et les coûts maîtrisés en font un choix idéal pour les PME au Maroc.",
              },
              {
                question: "Combien de temps prend le déploiement d'Odoo ?",
                answer: "La durée de déploiement d'Odoo dépend de la complexité du projet. Pour une PME avec des besoins standards (comptabilité, CRM, stocks), le déploiement prend généralement entre 4 et 8 semaines. Pour des projets plus complexes impliquant des développements sur mesure, la migration de données volumineuses ou de multiples sites, comptez entre 2 et 6 mois. Notre méthodologie agile permet des livraisons progressives pour que vous puissiez utiliser Odoo rapidement.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-semibold text-slate-900 list-none">
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-purple-600 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form Section */}
      <section id="demo" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-violet-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-4 py-1.5">
                  <Award className="h-3.5 w-3.5 mr-2" />
                  Démonstration Gratuite
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Demandez votre <span className="text-purple-600">démo Odoo</span> gratuite
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Découvrez comment Odoo ERP/CRM peut transformer la gestion de votre entreprise au Maroc. Notre équipe certifiée vous présente les modules adaptés à votre activité lors d&apos;une démonstration personnalisée et sans engagement.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Démonstration personnalisée selon votre secteur",
                  "Estimation budgétaire transparente",
                  "Conseils d'experts certifiés Odoo",
                  "Sans engagement ni obligation",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-purple-600" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <DemoRequestForm sourcePage="Intégrateur Odoo (/nos_produits/integrateur-odoo)" accentColor="primary" />
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="relative px-6 py-16 lg:px-8 bg-white">
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
            Contactez votre expert intégrateur Odoo au Maroc pour une démonstration gratuite et un devis personnalisé
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" variant="secondary" className="gap-2 px-8 py-6" asChild>
              <Link href="#demo">
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
