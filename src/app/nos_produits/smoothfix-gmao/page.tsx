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
  Settings,
  Users,
  BarChart3,
  Package,
  DollarSign,
  FileText,
  CheckCircle2,
  Send,
  Wrench,
  Factory,
  Truck,
  Wind,
  Zap,
  Droplets,
  Building2,
  ShieldCheck,
  Cloud,
  Layers,
  Database,
  UserCog,
  Server,
  FileCheck,
  Rocket,
  Loader2,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

export default function SmoothfixGMAO() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sourcePage: "Page SMOOTHFIX GMAO (/nos_produits/smoothfix-gmao)",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Votre demande de démo a été envoyée avec succès !");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const fonctionnalites = [
    {
      icon: Settings,
      title: "Optimisation de la Maintenance",
      description: "Planifiez, suivez et gérez efficacement vos activités de maintenance, réduisant les temps d'arrêt des équipements et maximisant leur durée de vie.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Communication d'Équipe",
      description: "Facilitez la communication et la collaboration entre les équipes de maintenance et les autres services de l'entreprise.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Suivi des Performances (KPIs)",
      description: "Suivez les indicateurs de performance des équipements et des opérations de maintenance pour prendre des décisions éclairées.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Package,
      title: "Gestion des Stocks",
      description: "Gérez efficacement les stocks de pièces de rechange en suivant les niveaux d'inventaire et en planifiant les commandes.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: DollarSign,
      title: "Contrôle des Coûts",
      description: "Suivez et analysez les coûts de maintenance pour contrôler vos budgets et éviter les dépenses inutiles.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: FileText,
      title: "Traçabilité & Rapports",
      description: "Journaux d'actions complets et suite de rapports et KPIs pour une traçabilité totale des interventions.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const industries = [
    {
      icon: Factory,
      title: "Machines de Production",
      description: "Machines de production et machines-outils"
    },
    {
      icon: Truck,
      title: "Manutention",
      description: "Équipements de manutention (chariots élévateurs, palans)"
    },
    {
      icon: Wind,
      title: "Climatisation",
      description: "Systèmes de contrôle climatique"
    },
    {
      icon: Zap,
      title: "Installations Électriques",
      description: "Installations électriques et transformateurs"
    },
    {
      icon: Droplets,
      title: "Systèmes Hydrauliques",
      description: "Systèmes hydrauliques et pneumatiques"
    },
    {
      icon: Building2,
      title: "Ascenseurs",
      description: "Ascenseurs et escaliers mécaniques"
    },
    {
      icon: ShieldCheck,
      title: "Équipements de Sécurité",
      description: "Équipements et systèmes de sécurité"
    }
  ];

  const deploymentSteps = [
    {
      num: "1",
      icon: UserCog,
      title: "Administration Utilisateurs",
      description: "Configuration de la base utilisateurs avec droits d'accès"
    },
    {
      num: "2",
      icon: Database,
      title: "Base Produits",
      description: "Configuration via import Excel ou création manuelle"
    },
    {
      num: "3",
      icon: Server,
      title: "Configuration DNS",
      description: "Configuration DNS pour transfert sécurisé des données"
    },
    {
      num: "4",
      icon: FileCheck,
      title: "Personnalisation Documents",
      description: "Personnalisation des rapports d'intervention"
    },
    {
      num: "5",
      icon: CheckCircle2,
      title: "Tests & Validation",
      description: "Tests de l'environnement et validation"
    },
    {
      num: "6",
      icon: Rocket,
      title: "Mise en Production",
      description: "Déploiement en production sous FQDN client"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30 px-6 py-24 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-orange-500/10 to-transparent blur-3xl animate-fade-in-slow" />
          <div className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-orange-100/50 to-transparent blur-3xl animate-fade-in-slower" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="mx-auto max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-left">
              {/* Premium Badge */}
              <Badge
                variant="outline"
                className="border-orange-500/20 bg-orange-500/5 text-orange-600 px-6 py-2 text-sm font-medium backdrop-blur-sm hover:bg-orange-500/10 transition-all duration-300"
              >
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                Solution SaaS GMAO
              </Badge>

              {/* Hero Title */}
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                SMOOTHFIX GMAO -{" "}
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Optimisez votre productivité
                </span>
              </h1>

              {/* Hero Description */}
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl font-light">
                Une solution SaaS accessible sur PC et mobile, simple à déployer et à utiliser,
                qui vous aide à gérer vos interventions avec facilité. Réduisez les temps d'arrêt
                de production, augmentez la disponibilité des équipements et améliorez la satisfaction client.
              </p>

              {/* SaaS Features */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Cloud, label: "100% Cloud" },
                  { icon: Layers, label: "Modulaire" },
                  { icon: Settings, label: "Personnalisable" }
                ].map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-medium">
                      <Icon className="h-4 w-4" />
                      <span>{feature.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Button
                  size="lg"
                  className="group gap-2 px-8 py-6 text-base bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/25 hover:shadow-xl hover:shadow-orange-600/30 transition-all duration-300"
                  asChild
                >
                  <Link href="#demo">
                    Demander une démo gratuite
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
                  src="/images/smoothfix-gmao.jpg"
                  alt="SMOOTHFIX GMAO Interface"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">+40%</div>
                    <div className="text-sm text-slate-600">Productivité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Section */}
      <section id="fonctionnalites" className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-orange-500/20 bg-orange-500/5 text-orange-600 px-4 py-1.5">
              Fonctionnalités Principales
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Une solution{" "}
              <span className="text-orange-600">complète et intuitive</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Notre équipe de développeurs a élaboré un logiciel simple d'utilisation, intuitif, 100% en ligne
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fonctionnalites.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
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

      {/* Industries Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-orange-500/20 bg-orange-500/5 text-orange-600 px-4 py-1.5">
              Industries Applicables
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Adapté à vos{" "}
              <span className="text-orange-600">équipements</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              SMOOTHFIX GMAO s'adapte à tous les types d'équipements industriels
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1">
                  <CardContent className="p-6 space-y-3">
                    <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{industry.title}</h3>
                    <p className="text-sm text-slate-600">{industry.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Déploiement Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-orange-500/20 bg-orange-500/5 text-orange-600 px-4 py-1.5">
              Processus de Déploiement
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Déploiement rapide en{" "}
              <span className="text-orange-600">6 étapes</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Une mise en place structurée pour une adoption rapide et efficace
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deploymentSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-xl font-bold">
                        {step.num}
                      </div>
                      <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-4">
                <Badge variant="outline" className="border-orange-500/20 bg-orange-500/5 text-orange-600 px-4 py-1.5">
                  Avantages
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Pourquoi choisir{" "}
                  <span className="text-orange-600">SMOOTHFIX GMAO</span> ?
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  "Déploiement rapide et formation du personnel",
                  "Support technique disponible pour résolution rapide",
                  "Outils de reporting et d'analyse avancés",
                  "Accès cloud depuis n'importe où",
                  "Application entièrement personnalisable et modulaire",
                  "Gestion facile de la base produits",
                  "Gestion des interventions curatives et préventives",
                  "KPIs et rapports complets"
                ].map((benefit, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600 mt-0.5" />
                    <span className="text-lg text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in-right">
              <Card className="border-none shadow-2xl bg-gradient-to-br from-orange-50 to-white overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg">
                      <Wrench className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Maintenance Simplifiée</h3>
                    <p className="text-slate-600">
                      Centralisez toutes vos opérations de maintenance dans une seule plateforme intuitive
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="rounded-xl bg-white p-6 shadow-md text-center">
                      <div className="text-4xl font-bold text-orange-600">-30%</div>
                      <div className="text-sm text-slate-600 mt-2">Temps d'arrêt</div>
                    </div>
                    <div className="rounded-xl bg-white p-6 shadow-md text-center">
                      <div className="text-4xl font-bold text-orange-600">+40%</div>
                      <div className="text-sm text-slate-600 mt-2">Productivité</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex justify-center gap-6">
                      {[
                        { icon: Cloud, label: "SaaS" },
                        { icon: Layers, label: "Modulaire" },
                        { icon: Settings, label: "Configurable" }
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div key={idx} className="flex flex-col items-center gap-1">
                            <Icon className="h-5 w-5 text-orange-600" />
                            <span className="text-xs text-slate-600">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Contact Form */}
      <section id="demo" className="relative px-6 py-32 lg:px-8 bg-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline" className="border-orange-500/20 bg-orange-500/5 text-orange-600 px-4 py-1.5">
              Demander une Démonstration
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Prêt à optimiser votre{" "}
              <span className="text-orange-600">maintenance</span> ?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Demandez une démonstration gratuite et découvrez comment SMOOTHFIX GMAO peut transformer vos opérations
            </p>
          </div>

          <Card className="border-none shadow-2xl bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <p>{statusMessage}</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p>{statusMessage}</p>
                  </div>
                )}

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
                      className="h-12 border-slate-200 focus:border-orange-500 transition-colors"
                      placeholder="Votre nom complet"
                      required
                      disabled={isLoading}
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
                      className="h-12 border-slate-200 focus:border-orange-500 transition-colors"
                      placeholder="Nom de votre entreprise"
                      required
                      disabled={isLoading}
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
                      className="h-12 border-slate-200 focus:border-orange-500 transition-colors"
                      placeholder="votre@email.com"
                      required
                      disabled={isLoading}
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
                      className="h-12 border-slate-200 focus:border-orange-500 transition-colors"
                      placeholder="+212 6XX XXX XXX"
                      disabled={isLoading}
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
                    className="min-h-32 border-slate-200 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Parlez-nous de vos besoins..."
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/25 hover:shadow-xl hover:shadow-orange-600/30 transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Demander une démo gratuite
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
