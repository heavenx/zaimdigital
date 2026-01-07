
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Search, Server, ShoppingCart, Building2, CheckCircle2, Globe, Code } from "lucide-react";

export default function CreationSiteWeb() {
  const services = [
    { icon: Search, title: "Optimisation SEO", description: "Positionnement optimal sur les moteurs de recherche", color: "from-blue-500 to-blue-600" },
    { icon: Server, title: "Hébergement 100%", description: "Hébergement sécurisé et performant inclus", color: "from-green-500 to-green-600" },
    { icon: ShoppingCart, title: "E-commerce", description: "Boutiques en ligne complètes avec paiement sécurisé", color: "from-purple-500 to-purple-600" },
    { icon: Building2, title: "Sites Institutionnels", description: "Sites corporate professionnels", color: "from-orange-500 to-orange-600" },
  ];

  const processus = [
    { num: "1", title: "Analyse", desc: "Étude approfondie de vos besoins" },
    { num: "2", title: "Étude", desc: "Définition de la stratégie" },
    { num: "3", title: "Design", desc: "Création de maquettes" },
    { num: "4", title: "SEO", desc: "Optimisation pour les moteurs" },
    { num: "5", title: "Implémentation", desc: "Mise en place de la structure" },
    { num: "6", title: "Développement", desc: "Programmation et intégration" },
    { num: "7", title: "Formation", desc: "Formation à l'administration" },
    { num: "8", title: "Support", desc: "Maintenance et support continu" },
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
          <Badge variant="outline" className="border-cyan-500/20 bg-cyan-500/5 text-cyan-600 px-6 py-2 text-sm font-medium backdrop-blur-sm">
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
            Donnez vie à votre présence en ligne avec un site web sur mesure, optimisé pour le référencement et conçu pour convertir vos visiteurs en clients.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4">
            <Button size="lg" className="gap-2 px-8 py-6 text-base bg-cyan-600 hover:bg-cyan-700 shadow-lg" asChild>
              <Link href="/contactez-nous">
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-cyan-500/20 bg-cyan-500/5 text-cyan-600 px-4 py-1.5">Nos Services</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Une offre <span className="text-cyan-600">complète</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
                  <CardContent className="p-8 space-y-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
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

      {/* Processus Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-cyan-500/20 bg-cyan-500/5 text-cyan-600 px-4 py-1.5">Notre Processus</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              8 étapes vers le <span className="text-cyan-600">succès</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processus.map((step, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-600 px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Prêt à lancer votre site web ?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <Button size="lg" variant="secondary" className="gap-2 px-8 py-6" asChild>
            <Link href="/contactez-nous">
              Demander un devis gratuit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
