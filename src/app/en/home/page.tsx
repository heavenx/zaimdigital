"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Lightbulb,
  Award,
  Code,
  Database,
  Bot,
  Building2,
  Calendar,
  Send
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic to be implemented
    console.log("Form submitted:", formData);
  };

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

        <div className="mx-auto max-w-7xl w-full animate-fade-in">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Premium Badge */}
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 text-primary px-6 py-2 text-sm font-medium backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 animate-slide-down"
            >
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              Innovation. Performance. Simplicity.
            </Badge>

            {/* Hero Title with Gradient */}
            <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl animate-slide-up">
              Transform your vision{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-gradient">
                into digital reality
              </span>
            </h1>

            {/* Hero Description */}
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-2xl font-light animate-slide-up-delay">
              Since 2021, Zaim Digital develops powerful management software combining web technology and artificial intelligence to meet your business needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row pt-4 animate-slide-up-delay-2">
              <Button
                size="lg"
                className="group gap-2 px-8 py-6 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                asChild
              >
                <Link href="#products">
                  Discover our solutions
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-8 py-6 text-base border-2 hover:bg-slate-50 transition-all duration-300"
                asChild
              >
                <Link href="#contact">
                  Contact us
                  <MessageSquare className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats or Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-12 animate-fade-in-slow">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">2021</div>
                <div className="text-sm text-slate-600">Year founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-600">Completed projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">Client satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-12 w-8 rounded-full border-2 border-slate-300 p-2">
            <div className="h-2 w-2 mx-auto rounded-full bg-slate-400 animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Digital Transformation Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium">
                <Building2 className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                We want to be part of your company's{" "}
                <span className="text-primary">digital transformation</span>
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Our expertise in software development allows us to have a vast library of developments and application creations. At ZAIM DIGITAL, we help businesses stand out online by developing custom strategies to increase their visibility, improve their performance and achieve their business goals.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Rigor</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Precise methodology and attention to detail
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Communication</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Constant and transparent dialogue
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Creativity</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Innovative custom solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Technical Expertise</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Mastery of cutting-edge technologies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="products" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Our Products
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Innovative solutions for your{" "}
              <span className="text-primary">business sector</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Industry-specific software designed to digitize and optimize your processes
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* LABCORP BTP */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <Image
                  src="/images/labcorp-btp.webp"
                  alt="LABCORP BTP"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">LABCORP BTP</h3>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Construction ERP</Badge>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  A complete ERP designed to digitize construction analysis laboratories and concrete plants. It automates test management, reports and quality tracking for optimal traceability and significant time savings.
                </p>
                <Button
                  variant="ghost"
                  className="group/btn w-full gap-2 text-primary hover:bg-primary/5 font-semibold"
                  asChild
                >
                  <Link href="/en/construction-laboratory-labcorp">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* SMOOTHFIX GMAO */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <Image
                  src="/images/smoothfix-gmao.jpg"
                  alt="SMOOTHFIX CMMS"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">SMOOTHFIX CMMS</h3>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">CMMS</Badge>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  A simple and quick-to-deploy CMMS solution, designed for preventive and corrective maintenance. It allows precise tracking of interventions, equipment and costs to improve productivity and operational reliability.
                </p>
                <Button
                  variant="ghost"
                  className="group/btn w-full gap-2 text-primary hover:bg-primary/5 font-semibold"
                  asChild
                >
                  <Link href="/en/gmao-cmms">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AGRONET */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <Image
                  src="/images/agronet.webp"
                  alt="AGRONET"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">AGRONET</h3>
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">AgriTech</Badge>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  An intelligent agricultural management ERP dedicated to organizing inputs, outputs and livestock management. Specially adapted to modern farms, it centralizes data for efficient and sustainable farm operations management.
                </p>
                <Button
                  variant="ghost"
                  className="group/btn w-full gap-2 text-primary hover:bg-primary/5 font-semibold"
                  asChild
                >
                  <Link href="/en/agronet-farm-management">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* MARITIME MANAGEMENT */}
            <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-primary via-blue-600 to-indigo-600 text-white hover:-translate-y-2">
              <div className="relative h-72 w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
                <div className="relative z-10 space-y-4 text-center p-8">
                  <div className="mx-auto h-24 w-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Code className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">MARITIME MANAGEMENT</h3>
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">Maritime ERP</Badge>
                </div>
                <p className="text-white/90 leading-relaxed">
                  A complete ERP dedicated to freight forwarders and maritime sector players. Connected to the BADR system, it optimizes file management, declarations and logistics operations with optimal precision.
                </p>
                <Button
                  variant="secondary"
                  className="group/btn w-full gap-2 font-semibold"
                  asChild
                >
                  <Link href="/en/custom-development">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Our Services
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Complete and{" "}
              <span className="text-primary">personalized support</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              From design to production, we support you every step of the way
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Custom Software Development
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We design custom software solutions adapted to your business needs. From design to production, each application is designed to optimize your processes and support your growth.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                    Discover
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    CRM Deployment (Odoo, Dolibarr)
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We help you integrate and customize high-performance CRMs such as Odoo and Dolibarr. Our experts ensure rapid deployment and custom configuration to improve your customer and sales management.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    Discover
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    AI-Based Process Automation (Make, n8n)
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We harness the potential of artificial intelligence and automation tools like Make and n8n. Result: intelligent workflows that reduce repetitive tasks, increase productivity and connect your tools together.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    Discover
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative px-6 py-24 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              They trusted us
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Leading companies that chose our solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {[
              { src: "/images/clients/LGTP.png", alt: "LGTP" },
              { src: "/images/clients/Mobilize.png", alt: "Mobilize" },
              { src: "/images/clients/logo-teamwill.png", alt: "Teamwill" },
              { src: "/images/clients/Tachnopark.png", alt: "Technopark" },
              { src: "/images/clients/GSS.png", alt: "GSS" },
              { src: "/images/clients/FIM.png", alt: "FIM" },
              { src: "/images/clients/LSTP-removebg-preview.png", alt: "LSTP" },
              { src: "/images/clients/Maroc-Leasing.webp", alt: "Maroc Leasing" },
              { src: "/images/clients/S2M.png", alt: "S2M" },
              { src: "/images/clients/BM.png", alt: "BM" },
              { src: "/images/clients/EasyDmat.webp", alt: "EasyDmat" },
              { src: "/images/clients/Altiluz.webp", alt: "Altiluz" },
              { src: "/images/clients/LMGC.png", alt: "LMGC" },
              { src: "/images/clients/MS.png", alt: "MS" },
            ].map((client, i) => (
              <div
                key={i}
                className="group flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 grayscale hover:grayscale-0"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-6 py-32 lg:px-8 bg-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Contact
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Contact Us
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Contact us to express your needs and see how we can help you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-900">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 border-slate-200 focus:border-primary transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-900">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-12 border-slate-200 focus:border-primary transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-900">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-12 border-slate-200 focus:border-primary transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-900">
                        Phone
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
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    <Send className="h-4 w-4" />
                    Send message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Alternative Contact Option */}
            <div className="space-y-8">
              <Card className="border-none shadow-xl bg-gradient-to-br from-primary to-blue-600 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
                <CardContent className="p-8 relative z-10 space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Schedule an appointment</h3>
                    <p className="text-white/90 leading-relaxed">
                      Schedule a call with our team to discuss your project in detail. We are available Monday to Friday from 9am to 6pm.
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full gap-2 font-semibold"
                    asChild
                  >
                    <Link href="/en/contact-us">
                      Book an appointment
                      <Calendar className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <Card className="border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                        <p className="text-slate-600 text-sm">contact@zaimdigital.ma</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                        <p className="text-slate-600 text-sm">Casablanca, Morocco</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
