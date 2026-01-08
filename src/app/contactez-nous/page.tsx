"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
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
          sourcePage: "Page Contact (/contactez-nous)",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Votre message a été envoyé avec succès !");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: ""
        });
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

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 px-6 py-24 lg:px-8">
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
              Contact
            </Badge>

            {/* Hero Title */}
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl animate-slide-up">
              Besoin d'aide?
            </h1>

            {/* Hero Subtitle */}
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl animate-slide-up-delay">
              Envoyez votre demande!
            </h2>

            {/* Hero Description */}
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl font-light animate-slide-up-delay-2">
              Vous avez une idée de projet? Besoin d'aide? Envoyez votre demande et planifions notre premier café!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
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

                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-900">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 border-slate-200 focus:border-primary transition-colors"
                      placeholder="Votre nom"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-900">
                      Raison Sociale
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-12 border-slate-200 focus:border-primary transition-colors"
                      placeholder="Nom de votre entreprise"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900">
                      Email *
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
                      className="h-12 border-slate-200 focus:border-primary transition-colors"
                      placeholder="+212 6XX XXX XXX"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-900">
                      Commentaires *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-32 border-slate-200 focus:border-primary transition-colors resize-none"
                      placeholder="Décrivez-nous votre projet..."
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
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
                        Envoyer
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Calendly Card */}
              <Card className="border-none shadow-xl bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
                <CardContent className="p-8 relative z-10 space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Préférez-vous un rendez-vous?</h3>
                    <p className="text-white/90 leading-relaxed">
                      Planifiez un appel avec notre équipe pour discuter de votre projet en détail.
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full gap-2 font-semibold"
                    asChild
                  >
                    <Link href="#calendly">
                      Fixer un rendez-vous sur Calendly
                      <Calendar className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info Cards */}
              <div className="grid gap-4">
                <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Téléphone</h4>
                        <a
                          href="tel:+212624067491"
                          className="text-slate-600 hover:text-primary transition-colors"
                        >
                          +(212) 624 067 491
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                        <a
                          href="mailto:administration@zaimdigital.com"
                          className="text-slate-600 hover:text-green-600 transition-colors"
                        >
                          administration@zaimdigital.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Adresse</h4>
                        <p className="text-slate-600">Casablanca, Maroc</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media Card */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-slate-50 to-blue-50/50">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Suivez-nous</h3>
                    <p className="text-slate-600 text-sm">
                      Restez connectés avec nous sur les réseaux sociaux
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="#facebook"
                      className="group h-12 w-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    </Link>

                    <Link
                      href="#linkedin"
                      className="group h-12 w-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-blue-700 group-hover:scale-110 transition-transform" />
                    </Link>

                    <Link
                      href="#instagram"
                      className="group h-12 w-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-pink-600 group-hover:scale-110 transition-transform" />
                    </Link>

                    <Link
                      href="#youtube"
                      className="group h-12 w-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5 text-red-600 group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
