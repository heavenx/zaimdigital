"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Sparkles,
  Award,
  Calculator,
  BookOpen,
  ShoppingCart,
  Users,
  Shield,
  ClipboardList,
  FileText,
  BarChart3,
  CreditCard,
  CheckCircle2,
  Send,
  Beaker,
  Monitor,
  Smartphone,
  Database,
  FlaskConical,
  TestTube2,
  Layers
} from "lucide-react";
import { useState } from "react";

export default function LabcorpBTP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const defis = [
    {
      icon: Award,
      title: "Préparation aux Certifications",
      description: "Facilitez la préparation de vos certifications avec des processus conformes aux exigences",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calculator,
      title: "Calculs Conformes aux Normes",
      description: "Simplifiez les calculs en conformité avec les normes légales et réglementaires",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BookOpen,
      title: "Veille Réglementaire Continue",
      description: "Suivez en continu les normes et réglementations du secteur BTP",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "Gestion Commandes & Échantillons",
      description: "Gérez efficacement le suivi des commandes et des échantillons",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Coordination des Services",
      description: "Améliorez la coordination entre les différents services de votre laboratoire",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Protection des Données",
      description: "Atténuez les risques de perte et de vol de données sensibles",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const fonctionnalites = [
    {
      icon: ClipboardList,
      title: "Suivi des Projets",
      description: "Gérez tous vos projets BTP depuis une interface centralisée avec suivi en temps réel"
    },
    {
      icon: FileText,
      title: "Gestion Administrative",
      description: "Simplifiez la gestion documentaire et administrative de votre laboratoire"
    },
    {
      icon: FlaskConical,
      title: "Module Feuilles d'Essais",
      description: "Béton, Compactage, Identification - Calculs automatiques conformes aux normes"
    },
    {
      icon: BarChart3,
      title: "Rapports et Synthèses",
      description: "Générez des rapports détaillés et visualisez vos performances en temps réel"
    },
    {
      icon: CreditCard,
      title: "Facturation et Recouvrement",
      description: "Automatisez votre facturation avec suivi des recouvrements intégré"
    }
  ];

  const essais = [
    {
      code: "AG Sol",
      name: "Analyse Granulométrique",
      description: "Méthode par tamisage à sec après lavage",
      color: "bg-blue-500"
    },
    {
      code: "IP",
      name: "Indice de Plasticité",
      description: "Détermination limite de liquidité et de plasticité",
      color: "bg-green-500"
    },
    {
      code: "PROCTOR",
      name: "Essai Proctor",
      description: "Détermination des références de compactage",
      color: "bg-purple-500"
    },
    {
      code: "VBS",
      name: "Valeur au Bleu",
      description: "Détermination de la valeur au bleu de méthylène",
      color: "bg-cyan-500"
    },
    {
      code: "ES",
      name: "Équivalent de Sable",
      description: "Évaluation de l'équivalent de sable",
      color: "bg-orange-500"
    },
    {
      code: "MDE",
      name: "Micro Deval",
      description: "Essai de résistance à l'usure Micro Deval",
      color: "bg-pink-500"
    },
    {
      code: "LOS",
      name: "Los Angeles",
      description: "Essai de résistance à la fragmentation Los Angeles",
      color: "bg-indigo-500"
    }
  ];

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

        <div className="mx-auto max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-left">
              {/* Premium Badge */}
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/5 text-primary px-6 py-2 text-sm font-medium backdrop-blur-sm hover:bg-primary/10 transition-all duration-300"
              >
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                ERP Laboratoire BTP
              </Badge>

              {/* Hero Title */}
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                LABCORP BTP :{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                  Solution digitale complète
                </span>{" "}
                pour laboratoires BTP
              </h1>

              {/* Hero Description */}
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl font-light">
                LABCORP BTP est une solution digitale complète permettant de gérer les essais de laboratoire BTP
                et de faciliter les calculs avec les normes imposées. Simplifiez la gestion de votre laboratoire
                et facilitez la préparation aux certifications.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Button
                  size="lg"
                  className="group gap-2 px-8 py-6 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  asChild
                >
                  <Link href="#demo">
                    Demander une démonstration
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 px-8 py-6 text-base bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300"
                  asChild
                >
                  <Link href="#fonctionnalites">
                    Découvrir les fonctionnalités
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in-right">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/labcorp-btp.webp"
                  alt="LABCORP BTP Interface"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-slate-600">Conformité normes BTP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Défis Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Problèmes Résolus
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Les défis que nous{" "}
              <span className="text-primary">résolvons</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              LABCORP BTP répond aux enjeux majeurs des laboratoires d'analyse BTP
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {defis.map((defi, index) => {
              const Icon = defi.icon;
              return (
                <Card key={index} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
                  <CardContent className="p-8 space-y-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${defi.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{defi.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{defi.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Méthodes d'Essais Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              <Beaker className="h-3.5 w-3.5 mr-2" />
              Méthodes d'Essais
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              7 protocoles d'essais{" "}
              <span className="text-primary">intégrés</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              La plateforme prend en charge les principales méthodes d'essais normalisées du secteur BTP
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {essais.map((essai, index) => (
              <Card key={index} className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-lg ${essai.color} flex items-center justify-center text-white text-sm font-bold`}>
                      {essai.code.substring(0, 2)}
                    </div>
                    <span className="text-lg font-bold text-slate-900">{essai.code}</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800">{essai.name}</h3>
                  <p className="text-sm text-slate-600">{essai.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités Section */}
      <section id="fonctionnalites" className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Modules Principaux
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Une solution{" "}
              <span className="text-primary">complète et intuitive</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Tous les modules dont vous avez besoin pour gérer efficacement votre laboratoire
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fonctionnalites.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7" />
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

      {/* Normes et Conformité Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
                  <Database className="h-3.5 w-3.5 mr-2" />
                  Normes ISO Marocaines
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Conformité et{" "}
                  <span className="text-primary">Standards IMANOR</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Les normes ISO marocaines sont intégrées sous licence IMANOR. Les calculs sont automatisés
                  en conformité avec les normes légales. Une base de données des normes de référence
                  facilement modifiable est incluse.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Normes ISO marocaines sous licence IMANOR",
                  "Calculs automatisés conformes aux normes légales",
                  "Base de données des normes de référence modifiable",
                  "Interface intuitive et personnalisable",
                  "Analyse des résultats en temps réel",
                  "Gestion automatique des échantillons et commandes"
                ].map((benefit, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600 mt-0.5" />
                    <span className="text-lg text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in-right">
              <Card className="border-none shadow-2xl bg-gradient-to-br from-primary/5 to-white overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">Accès Multi-Profils</h3>
                    <p className="text-slate-600">
                      Des profils adaptés à chaque utilisateur de votre laboratoire
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: Users, title: "Administration", desc: "Gestion complète du système" },
                      { icon: Layers, title: "Techniciens de chantier", desc: "Saisie des données terrain" },
                      { icon: TestTube2, title: "Ingénieurs d'analyse", desc: "Analyse et validation des résultats" }
                    ].map((profile, idx) => {
                      const Icon = profile.icon;
                      return (
                        <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{profile.title}</div>
                            <div className="text-sm text-slate-600">{profile.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-center space-y-2">
                      <div className="flex justify-center gap-4">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Monitor className="h-5 w-5" />
                          <span>PC</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <Smartphone className="h-5 w-5" />
                          <span>Mobile</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-500">Disponible sur toutes les plateformes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité Section */}
      <section className="relative px-6 py-24 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="absolute -top-1/2 -right-1/4 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4 text-center text-white place-items-center">
              {[
                { icon: Shield, value: "Sécurisé", label: "Protocoles avancés" },
                { icon: Database, value: "IMANOR", label: "Normes intégrées" },
                { value: "100%", label: "Conformité BTP" },
                { value: "24/7", label: "Support technique" }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="space-y-2 flex flex-col items-center">
                    {Icon && <Icon className="h-8 w-8 mb-2 opacity-80" />}
                    <div className="text-4xl font-bold">{stat.value}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Contact Form */}
      <section id="demo" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Demander une Démonstration
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Prêt à transformer votre{" "}
              <span className="text-primary">laboratoire BTP</span> ?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Contactez-nous pour une démonstration personnalisée et découvrez comment LABCORP BTP peut optimiser vos opérations
            </p>
          </div>

          <Card className="border-none shadow-2xl bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-900">
                      Nom & Prénom
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 border-slate-200 focus:border-primary transition-colors"
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-900">
                      Entreprise
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-12 border-slate-200 focus:border-primary transition-colors"
                      placeholder="Nom de votre laboratoire"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 border-slate-200 focus:border-primary transition-colors"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-900">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12 border-slate-200 focus:border-primary transition-colors"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-900">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-32 border-slate-200 focus:border-primary transition-colors resize-none"
                    placeholder="Parlez-nous de vos besoins..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                  Demander une démonstration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
