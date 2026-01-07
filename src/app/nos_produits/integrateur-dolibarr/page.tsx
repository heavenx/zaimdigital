
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Calculator, FileText, Users, Package, FileSignature, Anchor, Settings, CheckCircle2, Ship, Truck, FileCheck, Receipt, Building2, Briefcase, UserCheck } from "lucide-react";

export const metadata = {
  title: "Intégrateur Dolibarr ERP/CRM | ZAIM DIGITAL - Solution Open Source",
  description: "En tant qu'intégrateur Dolibarr expérimenté, nous vous offrons des solutions sur mesure pour optimiser la gestion de votre entreprise. ERP/CRM complet et personnalisable.",
};

export default function IntegrateurDolibarr() {
  const features = [
    { icon: Calculator, title: "Gestion Comptable & Financière", description: "Comptabilité complète, gestion des devis et facturation", color: "from-green-500 to-green-600" },
    { icon: FileText, title: "Propositions Commerciales", description: "Gestion des opérations comptables et financières complète", color: "from-blue-500 to-blue-600" },
    { icon: Users, title: "CRM - Relation Client", description: "Suivez vos leads et clients, surveillez vos performances marketing et ventes", color: "from-purple-500 to-purple-600" },
    { icon: Package, title: "Gestion des Stocks", description: "Suivez les mouvements de stock avec support multi-entrepôt", color: "from-orange-500 to-orange-600" },
    { icon: FileSignature, title: "Gestion de Contrats", description: "Gestion des mouvements de stock avec support multi-entrepôt", color: "from-pink-500 to-pink-600" },
    { icon: Anchor, title: "Gestion Maritime", description: "Module CRM spécialisé pour transitaires et logisticiens", color: "from-indigo-500 to-indigo-600", isNew: true },
  ];

  const maritimeFeatures = [
    { icon: Settings, title: "Automatisation", description: "Personnalisation et automatisation des transactions pour gagner du temps" },
    { icon: Users, title: "Collaboration", description: "Simplification de la collaboration entre les équipes" },
    { icon: Receipt, title: "Facturation", description: "Synchronisation automatique des factures avec la comptabilité" },
    { icon: FileCheck, title: "Rapports", description: "Rapports détaillés automatisés avec distinctions fiscales" },
    { icon: Truck, title: "Recouvrement", description: "Automatisation complète des recouvrements consignataires" },
  ];

  const targetAudience = [
    { icon: UserCheck, title: "Auto-entrepreneur", description: "Solution simple pour démarrer" },
    { icon: Briefcase, title: "Indépendant", description: "Gestion complète et autonome" },
    { icon: Users, title: "Association", description: "Outils adaptés aux associations" },
    { icon: Building2, title: "TPE / PME", description: "Solution évolutive pour croître" },
    { icon: Ship, title: "Grand Compte", description: "Personnalisation avancée" },
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/30 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-green-500/10 to-transparent blur-3xl animate-fade-in-slow" />
          <div className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-emerald-100/50 to-transparent blur-3xl animate-fade-in-slower" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl w-full text-center space-y-8 animate-fade-in">
          <Badge variant="outline" className="border-green-500/20 bg-green-500/5 text-green-600 px-6 py-2">
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            Intégrateur Certifié Dolibarr
          </Badge>

          <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl">
            <Settings className="h-12 w-12 text-white" />
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl max-w-4xl mx-auto">
            Intégrateur Dolibarr{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
              ERP - CRM
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-600 sm:text-xl font-light">
            Dolibarr est un ERP (Enterprise Resource Planning) puissant qui va au-delà d'un simple logiciel de gestion.
            Que vous soyez auto-entrepreneur, indépendant, association, TPE, PME ou grand compte, nous adaptons
            Dolibarr à vos besoins spécifiques.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
              "Aucune compétence technique requise",
              "Aide et assistance incluses",
              "Services d'intégration Dolibarr"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="gap-2 px-8 py-6 bg-green-600 hover:bg-green-700 shadow-lg" asChild>
            <Link href="/contactez-nous">
              Demander une démonstration
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="relative px-6 py-24 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline" className="border-green-500/20 bg-green-500/5 text-green-600 px-4 py-1.5">
              Pour Qui ?
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Adapté à <span className="text-green-600">toutes les tailles</span> d'entreprise
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {targetAudience.map((audience, idx) => {
              const Icon = audience.icon;
              return (
                <Card key={idx} className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 text-center">
                  <CardContent className="p-6 space-y-3">
                    <div className="mx-auto h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300">
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

      {/* Features Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-green-500/20 bg-green-500/5 text-green-600 px-4 py-1.5">Fonctionnalités</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Une solution <span className="text-green-600">complète</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="group relative border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
                  {feature.isNew && (
                    <div className="absolute right-4 top-4 z-10">
                      <Badge className="bg-green-600">Nouveau</Badge>
                    </div>
                  )}
                  <CardContent className="p-8 space-y-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Maritime Module Section - NEW */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-indigo-600">
                  <Ship className="h-3.5 w-3.5 mr-2" />
                  Nouveau Module
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Module{" "}
                  <span className="text-indigo-600">Gestion Maritime</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Un module CRM spécialisé pour les transitaires et professionnels de la logistique maritime.
                  Automatisez vos processus et gagnez en efficacité.
                </p>
              </div>

              <div className="space-y-4">
                {maritimeFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-indigo-50/50 hover:bg-indigo-50 transition-colors">
                      <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <Card className="border-none shadow-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 overflow-hidden">
                <CardContent className="p-8 text-white">
                  <div className="text-center space-y-6">
                    <div className="mx-auto h-20 w-20 rounded-2xl bg-white/20 flex items-center justify-center">
                      <Ship className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold">Gestion Maritime CRM</h3>
                    <p className="text-white/90">
                      Solution complète pour transitaires et logisticiens
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="rounded-xl bg-white/10 p-4 text-center">
                        <div className="text-3xl font-bold">100%</div>
                        <div className="text-sm text-white/80">Automatisé</div>
                      </div>
                      <div className="rounded-xl bg-white/10 p-4 text-center">
                        <div className="text-3xl font-bold">-50%</div>
                        <div className="text-sm text-white/80">Temps admin</div>
                      </div>
                    </div>

                    <Button size="lg" variant="secondary" className="w-full gap-2" asChild>
                      <Link href="/contactez-nous">
                        En savoir plus
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Pourquoi choisir <span className="text-green-600">Dolibarr</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Solution open-source fiable et éprouvée",
              "Personnalisation complète selon vos besoins",
              "Modules adaptés à votre secteur",
              "Interface intuitive et facile",
              "Formation complète de vos équipes",
              "Support technique dédié",
              "Mises à jour régulières",
              "Coûts maîtrisés sans licence"
            ].map((adv, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600 mt-0.5" />
                <span className="text-lg text-slate-700">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-green-600 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Prêt à déployer Dolibarr ?
          </h2>
          <p className="text-lg text-white/90">
            Contactez-nous pour une démonstration personnalisée
          </p>
          <Button size="lg" variant="secondary" className="gap-2 px-8 py-6" asChild>
            <Link href="/contactez-nous">
              Demander une démonstration
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
