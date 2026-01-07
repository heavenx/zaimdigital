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
  Send
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

  const challenges = [
    {
      icon: Award,
      title: "Certification and Compliance",
      description: "Comply with construction standards and certifications with automated processes",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calculator,
      title: "Complex Calculations",
      description: "Automate technical calculations and reduce human errors",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BookOpen,
      title: "Regulatory Watch",
      description: "Stay up to date with the latest industry standards and regulations",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "Order Management",
      description: "Track your orders and supplies in real time",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "Optimize collaboration between laboratory and field",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Protect your sensitive data with a secure system",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const features = [
    {
      icon: ClipboardList,
      title: "Construction Project Tracking",
      description: "Manage all your projects from a centralized interface with real-time tracking"
    },
    {
      icon: FileText,
      title: "Administrative Management",
      description: "Simplify document and administrative management of your laboratory"
    },
    {
      icon: Award,
      title: "Automated Test Sheets",
      description: "Create and manage your test sheets with automatic calculations compliant with standards"
    },
    {
      icon: BarChart3,
      title: "Reports and Statistics",
      description: "Generate detailed reports and visualize your performance in real time"
    },
    {
      icon: CreditCard,
      title: "Integrated Billing",
      description: "Automate your billing with connection to accounting systems"
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
                Professional Construction ERP
              </Badge>

              {/* Hero Title */}
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                LABCORP BTP:{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                  Simplify the management
                </span>{" "}
                of your construction analysis laboratory
              </h1>

              {/* Hero Description */}
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl font-light">
                A complete ERP designed to digitize construction analysis laboratories and concrete plants.
                Automate your processes, save time and ensure optimal traceability.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Button
                  size="lg"
                  className="group gap-2 px-8 py-6 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  asChild
                >
                  <Link href="#demo">
                    Request a demonstration
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 px-8 py-6 text-base border-2 hover:bg-slate-50 transition-all duration-300"
                  asChild
                >
                  <Link href="#features">
                    Discover features
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
                    <div className="text-sm text-slate-600">Construction standards compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Industry Challenges
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              The challenges you{" "}
              <span className="text-primary">are facing</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              LABCORP BTP addresses the major issues of construction analysis laboratories
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <Card key={index} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
                  <CardContent className="p-8 space-y-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${challenge.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{challenge.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Main Features
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              A{" "}
              <span className="text-primary">complete and intuitive</span> solution
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              All the features you need to efficiently manage your laboratory
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
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

      {/* CTA Section - Contact Form */}
      <section id="demo" className="relative px-6 py-32 lg:px-8 bg-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl" />

        <div className="mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Request a Demonstration
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Ready to transform your{" "}
              <span className="text-primary">construction laboratory</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Contact us for a personalized demonstration and discover how LABCORP BTP can optimize your operations
            </p>
          </div>

          <Card className="border-none shadow-2xl bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-12 border-slate-200 focus:border-primary transition-colors"
                      placeholder="Your laboratory name"
                      required
                    />
                  </div>
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
                    placeholder="Tell us about your needs..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                  Request a demonstration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
