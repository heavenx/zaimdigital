import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Shield, Users, Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "ZAIM DIGITAL - Innovative Software Solutions & Digital Transformation",
  description: "ZAIM DIGITAL: Leader in custom software solutions. Industry-specific ERP (LABCORP BTP, SMOOTHFIX CMMS, AGRONET), web development, and digital transformation.",
};

export default function HomeEN() {
  const products = [
    {
      title: "LABCORP BTP",
      description: "Complete ERP designed to digitalize BTP analysis laboratories and concrete plants. Automates test management, reports and quality tracking.",
      image: "/images/labcorp-btp.webp",
      href: "/en/products/labcorp-btp-laboratory",
      badge: "BTP ERP",
    },
    {
      title: "SMOOTHFIX CMMS",
      description: "Simple and quick-to-deploy CMMS solution for preventive and corrective maintenance. Precise tracking of interventions, equipment and costs.",
      image: "/images/smoothfix-gmao.jpg",
      href: "/en/products/smoothfix-cmms",
      badge: "CMMS",
    },
    {
      title: "AGRONET",
      description: "Smart agricultural management ERP dedicated to organizing inputs, outputs and livestock management. Specially adapted for modern farms.",
      image: "/images/agronet.webp",
      href: "/en/agronet-farm-management",
      badge: "AgriTech",
    },
    {
      title: "Website Creation",
      description: "SEO-optimized professional websites with hosting and maintenance included. From design to launch, we create high-performance, modern sites.",
      image: "/images/creation-site-web.jpg",
      href: "/en/products/website-creation",
      badge: "Web Design",
    },
  ];

  const services = [
    {
      icon: Zap,
      title: "Custom Development",
      description: "Tailor-made applications developed according to your specific business processes and needs.",
      href: "/en/products/custom-development",
    },
    {
      icon: Shield,
      title: "Dolibarr ERP/CRM",
      description: "Deployment and customization of Dolibarr ERP/CRM adapted to your needs.",
      href: "/en/products/dolibarr-integrator",
    },
    {
      icon: Users,
      title: "Support & Training",
      description: "Ongoing support and training for your teams to ensure optimal adoption.",
      href: "/en/contact-us",
    },
  ];

  const clients = [
    "client-logo-1.png", "client-logo-2.png", "client-logo-3.png", "client-logo-4.png",
    "client-logo-5.png", "client-logo-6.png", "client-logo-7.png", "client-logo-8.png",
    "client-logo-9.png", "client-logo-10.png", "client-logo-11.png", "client-logo-12.png",
    "client-logo-13.png", "client-logo-14.png"
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

        <div className="mx-auto max-w-7xl w-full animate-fade-in">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Premium Badge */}
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 text-primary px-6 py-2 text-sm font-medium backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 animate-slide-down"
            >
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              Digital Transformation Expert
            </Badge>

            {/* Hero Title with Gradient */}
            <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl animate-slide-up">
              Innovative Software Solutions for Your{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-gradient">
                Digital Transformation
              </span>
            </h1>

            {/* Hero Description */}
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-2xl font-light animate-slide-up-delay">
              From industry-specific ERP to custom development, we create
              tailored solutions to optimize your business processes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row pt-4 animate-slide-up-delay-2">
              <Button
                size="lg"
                className="gap-2 px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                asChild
              >
                <Link href="/en/contact-us">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-8 py-6 text-base border-2 hover:bg-slate-50 transition-all duration-300"
                asChild
              >
                <Link href="/en/products">
                  Discover Our Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
                Our Expertise
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Partner in Your{" "}
                <span className="text-primary">Digital Transformation</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                ZAIM DIGITAL supports companies in their digital evolution with innovative
                software solutions. Our expertise in industry-specific ERP and custom development
                allows us to meet your most complex challenges.
              </p>
              <div className="space-y-4">
                {[
                  "Deep understanding of your business processes",
                  "Proven expertise in industry-specific ERP",
                  "Personalized support at every step",
                  "Scalable and sustainable solutions",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/en/about">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-fade-in-delay">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "10+", label: "Years Experience" },
                    { value: "50+", label: "Completed Projects" },
                    { value: "98%", label: "Satisfaction Rate" },
                    { value: "24/7", label: "Technical Support" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-4 rounded-2xl bg-slate-50 hover:bg-primary/5 transition-colors">
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Our Products
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Industry <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Business software designed to meet the specific needs of your industry
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 animate-fade-in-delay">
            {products.map((product) => (
              <Card key={product.href} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2">
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {product.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{product.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full gap-2 text-primary hover:bg-primary/5 font-semibold group/btn"
                    asChild
                  >
                    <Link href={product.href}>
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-delay-2">
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/en/products">
                See All Our Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Our Services
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Complete <span className="text-primary">Support</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 animate-fade-in-delay">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="group relative border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -z-10" />
                  <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                    <Button
                      variant="ghost"
                      className="gap-2 text-primary hover:bg-primary/5 font-semibold p-0 group/btn"
                      asChild
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative px-6 py-24 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
              Our Clients
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              They <span className="text-primary">Trust Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center animate-fade-in-delay">
            {clients.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                <Image
                  src={`/images/clients/${logo}`}
                  alt={`Client ${idx + 1}`}
                  width={120}
                  height={60}
                  className="object-contain h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-primary px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/4 h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white animate-fade-in">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Let's Discuss Your Project
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Contact us today to discover how our solutions can transform
                your business and accelerate your growth.
              </p>
              <div className="space-y-4">
                <a href="tel:+212624067491" className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-lg">+212 624 067 491</span>
                </a>
                <a href="mailto:administration@zaimdigital.com" className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-lg">administration@zaimdigital.com</span>
                </a>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-lg">Casablanca, Morocco</span>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-2xl animate-fade-in-delay">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Project subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Describe your project..."
                    />
                  </div>
                  <Button size="lg" className="w-full gap-2">
                    Send Message
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
