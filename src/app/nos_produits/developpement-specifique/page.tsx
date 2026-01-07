import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Search, Palette, Zap, Code, TestTube, HeadphonesIcon, CheckCircle2, Laptop, Smartphone, Globe, Database, Shield, Rocket, Users, Target, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Développement Spécifique | ZAIM DIGITAL - Solutions Sur Mesure",
  description: "Nous avons une équipe d'experts en développement logiciel qui vous aideront à créer des applications et des logiciels sur mesure adaptés à vos besoins.",
};

export default function DeveloppementSpecifique() {
  const phases = [
    { icon: Search, title: "Analyse Approfondie", desc: "Compréhension approfondie de vos besoins, objectifs métier et défis uniques. Collecte d'informations complète et création d'une feuille de route." },
    { icon: Palette, title: "Conception Personnalisée", desc: "Collaboration avec nos experts design pour produire des maquettes et prototypes reflétant votre vision avec une expérience utilisateur intuitive." },
    { icon: Zap, title: "Développement Agile", desc: "Méthodologie agile garantissant des mises à jour régulières sur l'avancement et des ajustements flexibles tout au long du développement." },
    { icon: Code, title: "Programmation Experte", desc: "Développeurs expérimentés maîtrisant plusieurs langages de programmation pour créer des solutions robustes et évolutives." },
    { icon: TestTube, title: "Tests Rigoureux", desc: "Tests complets couvrant la fonctionnalité, la sécurité et les performances avant la livraison finale." },
    { icon: HeadphonesIcon, title: "Support Continu", desc: "Support continu pour résoudre les problèmes, implémenter les mises à jour et faire évoluer vos applications." },
  ];

  const technologies = [
    { icon: Globe, title: "Applications Web", desc: "React, Next.js, Vue.js, Angular" },
    { icon: Smartphone, title: "Applications Mobiles", desc: "React Native, Flutter, iOS, Android" },
    { icon: Database, title: "Backend & API", desc: "Node.js, Python, PHP, .NET" },
    { icon: Laptop, title: "Applications Desktop", desc: "Electron, .NET, Java" },
  ];

  const benefits = [
    "Solution 100% adaptée à vos processus métier",
    "Propriété totale du code source",
    "Évolutivité et scalabilité garanties",
    "Intégration avec vos systèmes existants",
    "Interface utilisateur personnalisée",
    "Support et maintenance dédiés",
    "Documentation technique complète",
    "Formation de vos équipes incluse",
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl animate-fade-in-slow" />
          <div className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-indigo-100/50 to-transparent blur-3xl animate-fade-in-slower" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-6 py-2">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                Solutions Sur Mesure
              </Badge>

              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Développement Spécifique{" "}
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  pour Réaliser Vos Idées Uniques
                </span>
              </h1>

              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl font-light">
                Chez ZAIM DIGITAL, nous comprenons que chaque entreprise a des besoins uniques. Notre équipe d'experts en développement logiciel transforme vos idées en applications fonctionnelles, conçues pour atteindre vos objectifs métier spécifiques.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Button size="lg" className="gap-2 px-8 py-6 bg-purple-600 hover:bg-purple-700 shadow-lg" asChild>
                  <Link href="/contactez-nous">
                    Démarrer votre projet
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" className="gap-2 px-8 py-6 bg-slate-900 text-white hover:bg-slate-800" asChild>
                  <Link href="#processus">
                    Notre processus
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-delay">
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-none shadow-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6">
                  <div className="space-y-2">
                    <Rocket className="h-8 w-8 mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-white/90 text-sm">Sur mesure</div>
                  </div>
                </Card>
                <Card className="border-none shadow-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-6">
                  <div className="space-y-2">
                    <Users className="h-8 w-8 mb-2" />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-white/90 text-sm">Projets livrés</div>
                  </div>
                </Card>
                <Card className="border-none shadow-xl bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6">
                  <div className="space-y-2">
                    <Target className="h-8 w-8 mb-2" />
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-white/90 text-sm">Satisfaction</div>
                  </div>
                </Card>
                <Card className="border-none shadow-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6">
                  <div className="space-y-2">
                    <Shield className="h-8 w-8 mb-2" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-white/90 text-sm">Support</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-4 py-1.5">
                <Lightbulb className="h-3.5 w-3.5 mr-2" />
                Pourquoi Nous Choisir
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                La technologie au service de la{" "}
                <span className="text-purple-600">croissance de votre entreprise</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Notre équipe de développement dédiée se distingue par sa capacité à innover et son expertise technique.
                Nous avons fait nos preuves dans la livraison de projets complexes tout en maintenant une approche
                centrée sur le client.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Que vous ayez besoin d'une application web, mobile ou desktop, nous maîtrisons les technologies
                modernes pour créer des solutions robustes, sécurisées et évolutives.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3 items-start p-4 rounded-xl bg-slate-50 hover:bg-purple-50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-purple-600 mt-0.5" />
                  <span className="text-lg text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-4 py-1.5">
              Technologies
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Expertise <span className="text-purple-600">multi-plateforme</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Nous maîtrisons un large éventail de technologies pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <Card key={idx} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
                  <CardContent className="p-8 space-y-4 text-center">
                    <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{tech.title}</h3>
                    <p className="text-slate-600">{tech.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processus" className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-600 px-4 py-1.5">
              Notre Processus
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              6 étapes vers le <span className="text-purple-600">succès</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Une méthodologie éprouvée pour transformer vos idées en solutions performantes
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <Card key={idx} className="group relative border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{phase.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-600 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/4 h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Lancez-vous dans une nouvelle aventure excitante
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Prêt à donner vie à votre projet ? Contactez-nous pour discuter de vos besoins spécifiques
            et découvrir comment nous pouvons transformer vos idées en solutions performantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="gap-2 px-8 py-6 shadow-lg" asChild>
              <Link href="/contactez-nous">
                Démarrer votre projet
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8 py-6 border-2 border-white bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-900" asChild>
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
