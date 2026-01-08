import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Lightbulb,
  Shield,
  Users,
  Code2,
  History,
  ArrowRight,
  Rocket,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Building2
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos de ZAIM DIGITAL - Éditeur de Logiciels au Maroc",
  description:
    "Découvrez ZAIM DIGITAL, éditeur de logiciels métiers depuis 2021. Équipe passionnée spécialisée en développement web, LIMS, GMAO et ERP à Casablanca.",
  keywords: [
    "ZAIM DIGITAL",
    "éditeur logiciels Maroc",
    "développement logiciel Casablanca",
    "entreprise IT Maroc",
    "transformation digitale",
  ],
  openGraph: {
    title: "À propos de ZAIM DIGITAL",
    description: "Éditeur de logiciels métiers depuis 2021 à Casablanca, Maroc.",
    url: "https://www.zaimdigital.com/a-propos",
  },
  alternates: {
    canonical: "https://www.zaimdigital.com/a-propos",
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 px-6 py-24 lg:px-8">
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
              À propos de nous
            </Badge>

            {/* Hero Title with Gradient */}
            <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl animate-slide-up">
              Une équipe passionnée au service de votre{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-gradient">
                transformation digitale
              </span>
            </h1>

            {/* Hero Description */}
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-2xl font-light animate-slide-up-delay">
              Chez ZAIM DIGITAL, nous combinons innovation technologique et expertise métier pour créer des solutions digitales qui transforment votre activité.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium">
                <Target className="h-4 w-4" />
                Notre Mission
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Aider nos clients à{" "}
                <span className="text-primary">réussir</span>{" "}
                grâce à des solutions innovantes
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Notre expertise en développement informatique nous permet de disposer d'une vaste bibliothèque de développements et de créations d'applications. Nous aidons les entreprises à se démarquer en développant des stratégies sur mesure pour améliorer leur performance et atteindre leurs objectifs commerciaux.
              </p>
            </div>

            {/* Mission Benefits Grid */}
            <div className="grid grid-cols-1 gap-6 animate-fade-in-right">
              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-900">Excellence technologique</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Des solutions robustes et performantes conçues avec les meilleures technologies
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-900">Accompagnement personnalisé</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Un partenaire à votre écoute qui comprend vos besoins et vos défis
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-900">Résultats mesurables</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Impact concret sur votre activité avec des KPIs clairs et suivis
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Nos Valeurs
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Les principes qui{" "}
              <span className="text-primary">guident notre travail</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Des valeurs fortes qui définissent notre approche et notre engagement envers nos clients
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Innovation */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Innovation</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous adoptons les dernières technologies pour vous offrir des solutions à la pointe de l'innovation
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Qualité */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Qualité</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous livrons des solutions robustes et testées qui répondent aux plus hauts standards de qualité
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Collaboration */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Collaboration</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous travaillons main dans la main avec nos clients pour garantir leur réussite
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Expertise Technique */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Expertise Technique</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Notre équipe maîtrise les technologies modernes et les meilleures pratiques du développement
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Timeline Cards */}
            <div className="space-y-6 animate-fade-in-left order-2 lg:order-1">
              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <History className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-900">Nos origines</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      ZAIM DIGITAL est née d'un projet initial réussi qui a démontré notre capacité à livrer des solutions de qualité
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-900">Notre évolution</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      L'équipe fondatrice a combiné ses compétences au-delà de ce travail original, créant une agence multidisciplinaire
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-900">Notre équipe</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Un groupe de jeunes professionnels avec une solide expertise technique et commerciale
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Histoire Content */}
            <div className="space-y-6 animate-fade-in-right order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
                <History className="h-4 w-4" />
                Notre Histoire
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                D'un projet réussi à une{" "}
                <span className="text-primary">agence innovante</span>
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  ZAIM DIGITAL est née d'un projet initial réussi. L'équipe fondatrice a combiné ses compétences au-delà de ce travail original, créant l'agence multidisciplinaire.
                </p>
                <p>
                  Nous sommes un groupe de jeunes professionnels avec une solide expertise technique et commerciale dans la construction, particulièrement dans les laboratoires d'analyse BTP et les secteurs industriels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Pourquoi nous choisir
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Des atouts qui font{" "}
              <span className="text-primary">la différence</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Ce qui nous distingue et fait de nous le partenaire idéal pour votre transformation digitale
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardContent className="p-8 space-y-4 text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    Équipe passionnée et expérimentée
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Des experts dévoués à votre réussite avec une expertise reconnue
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardContent className="p-8 space-y-4 text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    Technologies innovantes
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Les outils et frameworks les plus modernes et performants du marché
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardContent className="p-8 space-y-4 text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    Approche collaborative
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Un partenariat transparent basé sur la confiance et l'écoute
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardContent className="p-8 space-y-4 text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    Culture d'entreprise stimulante
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Innovation et créativité au quotidien pour des solutions uniques
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-5xl relative z-10">
          <Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-br from-primary via-blue-600 to-indigo-600 text-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
            <CardContent className="relative z-10 p-12 lg:p-16 text-center space-y-8">
              <div className="mx-auto h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Prêt à démarrer votre projet?
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-white/90 leading-relaxed">
                  Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner dans votre transformation digitale.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    Contactez-nous
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 px-8 py-6 text-base bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-semibold"
                  asChild
                >
                  <Link href="/nos_produits/labcorp-laboratoire-btp">
                    Voir nos réalisations
                    <Sparkles className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
