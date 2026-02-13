"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Testimonial {
  initials: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  gradient: string;
  borderColor: string;
  link?: {
    type: "linkedin" | "website";
    href: string;
    label: string;
  };
}

const testimonials: Testimonial[] = [
  {
    initials: "MK",
    name: "Mr Mohamed El Kortbi",
    role: "Gerant Associe",
    company: "Laboratoire des Materiaux et Genie Civil",
    quote:
      "Nous avons cru au logiciel LABCORP pour construire notre systeme d\u2019information du laboratoire car nous avons fait confiance a une jeune equipe entrepreneuse qui est depuis notre premiere reunion a l\u2019ecoute de notre demande et a su transformer nos attentes en livrables facilitant nos processus conformement a notre systeme qualite accredite NM ISO/CEI 17025. L\u2019application est ergonomique, facile a deployer a tous les niveaux du laboratoire permettant un travail collaboratif sans accumuler les retards et dysfonctionnements.",
    gradient: "from-primary to-blue-600",
    borderColor: "border-primary",
    link: {
      type: "linkedin",
      href: "https://www.linkedin.com/in/kortbi/",
      label: "Voir sur LinkedIn",
    },
  },
  {
    initials: "OB",
    name: "Mr Othman Bensator",
    role: "Directeur Associe",
    company: "Laboratoire des Materiaux et Genie Civil",
    quote:
      "La solution LABCORP BTP \u2013 LIMS est une application dont les benefices sont ineluctablement favorables en terme de suivi, reporting, controle, financier. Nous sommes a ce jour satisfaits de l\u2019objectif de la voir appliquee a toutes les disciplines. A ce jour, dans le beton, elle nous a resolu beaucoup de problemes lies a la gestion prelevement, de leurs receptions au laboratoire, de la gestion du traitement et de l\u2019envoi au client des rapports d\u2019essais a temps.",
    gradient: "from-green-500 to-emerald-600",
    borderColor: "border-green-500",
    link: {
      type: "linkedin",
      href: "https://www.linkedin.com/in/othman-bensator-a8364425/",
      label: "Voir sur LinkedIn",
    },
  },
  {
    initials: "AZ",
    name: "Mr A. ZITOUNI",
    role: "Gerant du LGTP",
    company: "Laboratoire LGTP",
    quote:
      "Le LGTP exprime sa pleine satisfaction quant au deploiement du projet LABCORP \u2013 LIMS, realise en etroite collaboration avec ZAIM DIGITAL. Cette cooperation s\u2019est distinguee par un haut niveau de professionnalisme, une comprehension fine des exigences metier du laboratoire et une capacite d\u2019adaptation aux specificites operationnelles du LGTP. La mise en \u0153uvre de cette solution constitue une avancee significative dans la digitalisation de nos processus, le renforcement de la tracabilite et l\u2019amelioration continue de la performance et de la qualite de nos services.",
    gradient: "from-indigo-500 to-violet-600",
    borderColor: "border-indigo-500",
    link: {
      type: "linkedin",
      href: "https://www.linkedin.com/in/abdelilah-zitouni-7711b71b",
      label: "Voir sur LinkedIn",
    },
  },
  {
    initials: "CL",
    name: "Cyrille Lefevre",
    role: "Directeur",
    company: "Group LFE",
    quote:
      "SmoothFix GMAO est devenu un outil essentiel a notre activite quotidienne, tant pour nos equipes techniques que pour le personnel administratif, ainsi que pour nos clients. Grace a cette solution, nous avons pu centraliser l\u2019ensemble de nos interventions et informations liees a notre activite de maintenance. Le recent developpement de la saisie automatique des commandes commence egalement a prendre une place importante dans nos processus. En definitive, l\u2019outil concu par l\u2019equipe ZAIM DIGITAL en etroite collaboration avec nous est desormais indissociable de notre fonctionnement au quotidien.",
    gradient: "from-sky-500 to-blue-600",
    borderColor: "border-sky-500",
    link: {
      type: "website",
      href: "https://www.group-lfe.com",
      label: "Voir le site",
    },
  },
  {
    initials: "ZL",
    name: "Zouhair Lahmimsi",
    role: "Directeur",
    company: "Laboratoire LSR",
    quote:
      "LABCORP BTP \u2013 LIMS a considerablement ameliore le suivi des activites du laboratoire, tout en optimisant le temps operationnel et la gestion financiere. Aujourd\u2019hui, la generation des rapports clients se fait en un seul clic sur un bouton intuitif, avec la garantie d\u2019informations fiables et conformes aux normes IMANOR. L\u2019application est ergonomique, facile a deployer et parfaitement adaptee a nos besoins metier, et nous recommandons vivement cette solution ainsi que le professionnalisme de l\u2019equipe Zaim Digital.",
    gradient: "from-amber-500 to-orange-600",
    borderColor: "border-amber-500",
  },
  {
    initials: "EE",
    name: "Mr Essabiri EL MOSTAFA",
    role: "Directeur General",
    company: "Global Sea Services",
    quote:
      "En tant que transitaire maritime, l\u2019utilisation de l\u2019ERP de Zaim Digital nous a permis de digitaliser l\u2019ensemble de nos processus metiers en toute securite, notamment sur les calculs et la gestion des operations. L\u2019equipe est tres rigoureuse, professionnelle et techniquement pointue. Aujourd\u2019hui, je constate une reelle amelioration de la performance et de la qualite de nos services. Je suis tres reconnaissant des avancees realisees grace a l\u2019engagement et au serieux de Zaim Digital.",
    gradient: "from-orange-500 to-amber-600",
    borderColor: "border-orange-500",
    link: {
      type: "website",
      href: "https://globalseaservices.net/contact/",
      label: "Voir le site",
    },
  },
  {
    initials: "AM",
    name: "Adrien Maurel",
    role: "Chairman of M&Son Group",
    company: "M&Son Group",
    quote:
      "Outre ses competences professionnelles averees, Karim se distingue par des qualites manageriales remarquables. Sa constance, entendue comme une posture stable, coherente et lineaire dans le temps, se conjugue a une loyaute a toute epreuve, fondee sur une fiabilite et une confiance durables. Il excelle tant sur le plan relationnel que technique et fait preuve d\u2019un engagement et d\u2019une motivation exemplaires dans la conduite des equipes.",
    gradient: "from-rose-500 to-red-600",
    borderColor: "border-rose-500",
    link: {
      type: "linkedin",
      href: "https://www.linkedin.com/in/adrien-maurel",
      label: "Voir sur LinkedIn",
    },
  },
  {
    initials: "CJ",
    name: "Claudia Jimenez",
    role: "Fondatrice - CEO",
    company: "Altiluz Consulting & SkillUp Lab Academie",
    quote:
      "Zaim Digital, une equipe et un travail de qualite. Ce qui est promis est livre, avec qualite, rigueur et un suivi attentif. Une equipe a l\u2019ecoute, qui cherche a comprendre avant de proposer. Je recommande sans hesitation.",
    gradient: "from-pink-500 to-fuchsia-600",
    borderColor: "border-pink-500",
    link: {
      type: "linkedin",
      href: "https://www.linkedin.com/in/claudia-jimenez-74444820/",
      label: "Voir sur LinkedIn",
    },
  },
  {
    initials: "HL",
    name: "Mr Hamid Labriki",
    role: "Directeur General",
    company: "Kounhany",
    quote:
      "De notre cote, nous avons particulierement apprecie le professionnalisme de Zaim Digital, la rapidite d\u2019execution, ainsi que la qualite des echanges tout au long de la prestation. Vous avez toujours ete a l\u2019ecoute du besoin client, disponible et reactif, avec une reelle capacite a comprendre les enjeux metiers et a proposer des solutions adaptees. C\u2019est une collaboration fluide et efficace, que nous recommandons sans hesitation.",
    gradient: "from-teal-500 to-cyan-600",
    borderColor: "border-teal-500",
    link: {
      type: "website",
      href: "https://www.kounhany.com/",
      label: "Voir le site",
    },
  },
];

const LinkedInIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Content */}
      <div className="grid gap-8 md:grid-cols-2 min-h-[420px]">
        {visibleTestimonials.map((t) => (
          <Card
            key={t.name}
            className="border-none shadow-xl bg-white p-0 overflow-hidden animate-fade-in"
          >
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className={`h-16 w-16 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {t.name}
                  </h4>
                  <p className="text-slate-600">{t.role}</p>
                  <p className="text-primary font-medium">{t.company}</p>
                </div>
              </div>
              <blockquote
                className={`text-slate-600 leading-relaxed italic border-l-4 ${t.borderColor} pl-4 line-clamp-6`}
              >
                &quot;{t.quote}&quot;
              </blockquote>
              {t.link && (
                <>
                  {t.link.type === "linkedin" ? (
                    <Link
                      href={t.link.href}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                    >
                      <LinkedInIcon />
                      {t.link.label}
                    </Link>
                  ) : (
                    <a
                      href={t.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                    >
                      <ArrowRight className="h-4 w-4" />
                      {t.link.label}
                    </a>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        {/* Prev Button */}
        <button
          onClick={goToPrev}
          className="h-10 w-10 rounded-full border border-slate-200 bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary hover:shadow-lg transition-all duration-300"
          aria-label="Temoignage precedent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 h-3 bg-primary"
                  : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="h-10 w-10 rounded-full border border-slate-200 bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary hover:shadow-lg transition-all duration-300"
          aria-label="Temoignage suivant"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Counter */}
      <p className="text-center text-sm text-slate-500 mt-3">
        {currentIndex + 1} / {totalPages}
      </p>
    </div>
  );
}
