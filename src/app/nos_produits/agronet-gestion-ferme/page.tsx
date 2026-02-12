import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Users, Package, DollarSign, Boxes, Wallet, MapPin, TrendingUp, Smartphone, CheckCircle2, Sprout, HelpCircle } from "lucide-react";

export const metadata = {
  title: "AGRONET - Application de Gestion de Ferme | ZAIM DIGITAL",
  description: "AGRONET est l'outil idéal pour les agriculteurs qui cherchent à améliorer leur productivité. Solution intégrée mobile et web pour optimiser toutes vos opérations agricoles.",
};

export default function AgronetGestionFerme() {
  const features = [
    {
      icon: Users,
      num: "1",
      title: "Gestion du personnel simplifiée",
      desc: "Suivez les heures de travail, attribuez des avances et optimisez les plannings de votre équipe agricole en toute simplicité.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Package,
      num: "2",
      title: "Inventaire et mouvement de stock",
      desc: "Gérez votre inventaire en temps réel. Enregistrez les entrées et sorties de stock avec un historique détaillé des mouvements.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      num: "3",
      title: "Gestion des charges",
      desc: "Suivez et catégorisez tous vos coûts agricoles pour une analyse financière détaillée et une meilleure maîtrise de vos dépenses.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Boxes,
      num: "4",
      title: "Contrôle total sur les stocks",
      desc: "Surveillez votre inventaire en permanence et assurez-vous que vos cultures et ressources restent à un niveau optimal.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Wallet,
      num: "5",
      title: "Gestion financière avancée",
      desc: "Contrôlez vos coûts, suivez vos ventes et calculez vos bénéfices par parcelle pour une vision claire de votre rentabilité.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: MapPin,
      num: "6",
      title: "Gestion des parcelles intelligente",
      desc: "Tableau de bord intuitif pour des décisions stratégiques utilisant les données météo en temps réel et l'historique des cultures.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      num: "7",
      title: "Calcul des bénéfices par parcelle",
      desc: "Analysez les coûts par zone cultivée pour maximiser vos retours sur investissement et optimiser votre exploitation.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Smartphone,
      num: "8",
      title: "Application mobile et web",
      desc: "Accédez à toutes les fonctionnalités où que vous soyez : au champ, au bureau ou en déplacement, sur tous vos appareils.",
      color: "from-teal-500 to-teal-600"
    },
  ];

  const faqs = [
    {
      question: "AGRONET est-il disponible sur mobile et web ?",
      answer: "Oui, AGRONET est accessible sur tous vos appareils. Utilisez l'application mobile sur le terrain et la version web au bureau pour une gestion complète de votre exploitation."
    },
    {
      question: "Comment fonctionne le calcul des bénéfices par parcelle ?",
      answer: "AGRONET analyse automatiquement tous les coûts associés à chaque parcelle (main d'œuvre, intrants, charges) et les compare aux revenus générés pour calculer la rentabilité exacte de chaque zone."
    },
    {
      question: "L'application est-elle facile à utiliser ?",
      answer: "Absolument ! AGRONET a été conçu avec une interface intuitive pensée pour les agriculteurs. Une formation de prise en main est incluse dans nos offres."
    },
    {
      question: "Comment suivre le travail de mon personnel ?",
      answer: "Le module de gestion du personnel vous permet de suivre les heures de travail, d'attribuer des tâches, de gérer les avances sur salaire et d'optimiser les plannings."
    },
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/30 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-green-500/10 to-transparent blur-3xl animate-fade-in-slow" />
          <div className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-lime-100/50 to-transparent blur-3xl animate-fade-in-slower" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <Badge variant="outline" className="border-green-500/20 bg-green-500/5 text-green-600 px-6 py-2">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                Application de Gestion de Ferme
              </Badge>

              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                AGRONET :{" "}
                <span className="bg-gradient-to-r from-green-600 via-lime-600 to-green-600 bg-clip-text text-transparent">
                  Gestion de Ferme Intelligente
                </span>
              </h1>

              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl font-light">
                AGRONET est l'outil idéal pour les agriculteurs qui cherchent à améliorer leur productivité et leur efficacité. Notre plateforme offre une solution intégrée mobile et web pour optimiser tous les aspects de vos opérations agricoles.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Button size="lg" className="gap-2 px-8 py-6 bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/25" asChild>
                  <Link href="/contactez-nous">
                    Demander une démonstration
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" className="gap-2 px-8 py-6 bg-slate-900 text-white hover:bg-slate-800" asChild>
                  <Link href="#fonctionnalites">
                    Voir les fonctionnalités
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/agronet.webp"
                  alt="AGRONET - Application de Gestion de Ferme"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                    <Sprout className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-slate-600">Mobile & Web</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AGRONET Section */}
      <section className="relative px-6 py-24 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="border-green-500/20 bg-green-500/5 text-green-600 px-4 py-1.5 mb-6">
            Pourquoi AGRONET ?
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
            Simplifiez la gestion quotidienne de votre <span className="text-green-600">exploitation agricole</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            L'application simplifie la gestion quotidienne de votre ferme en regroupant toutes les fonctionnalités essentielles sur une seule plateforme. Prenez des décisions éclairées pour maximiser votre productivité, que vous soyez au champ, au bureau ou en déplacement.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalites" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-green-500/20 bg-green-500/5 text-green-600 px-4 py-1.5">
              8 Forces Clés
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Une solution <span className="text-green-600">complète</span> pour votre ferme
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Découvrez toutes les fonctionnalités qui font d'AGRONET l'outil indispensable des agriculteurs modernes
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="group relative border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
                  <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-lime-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {feature.num}
                  </div>
                  <CardContent className="p-6 pt-8 space-y-3">
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="border-green-500/20 bg-green-500/5 text-green-600 px-4 py-1.5">
                Avantages
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Transformez votre <span className="text-green-600">exploitation</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Essayer AGRONET, c'est adopter l'excellence agricole. Découvrez comment notre solution transforme les fermes et rejoignez l'agriculture de demain.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Suivi en temps réel de vos activités",
                  "Optimisation de la rentabilité",
                  "Réduction du gaspillage",
                  "Meilleure traçabilité des cultures",
                  "Décisions basées sur les données",
                  "Gain de temps administratif",
                  "Planification optimale des tâches",
                  "Conformité aux normes agricoles"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-none shadow-xl bg-gradient-to-br from-green-500 to-green-600 text-white p-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">+40%</div>
                  <div className="text-white/90">Gain de productivité</div>
                </div>
              </Card>
              <Card className="border-none shadow-xl bg-gradient-to-br from-lime-500 to-lime-600 text-white p-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">-30%</div>
                  <div className="text-white/90">Temps administratif</div>
                </div>
              </Card>
              <Card className="border-none shadow-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-white/90">Traçabilité</div>
                </div>
              </Card>
              <Card className="border-none shadow-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">24/7</div>
                  <div className="text-white/90">Accès mobile</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-green-500/20 bg-green-500/5 text-green-600 px-4 py-1.5">
              <HelpCircle className="h-3.5 w-3.5 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Questions <span className="text-green-600">fréquentes</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-lime-600 to-green-600 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/4 h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10 space-y-8">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Essayer AGRONET, c'est adopter l'excellence agricole
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Découvrez comment AGRONET transforme les fermes et rejoignez l'agriculture de demain. Demandez une démonstration personnalisée gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="gap-2 px-8 py-6 shadow-lg" asChild>
              <Link href="/contactez-nous">
                Demander une démonstration
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8 py-6 border-2 border-white bg-white text-slate-900 hover:bg-white/90" asChild>
              <Link href="tel:+212624067491">
                Appeler maintenant
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
