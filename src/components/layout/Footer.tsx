"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

export function Footer() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const currentYear = new Date().getFullYear()

  const navigationColumnFR: FooterColumn = {
    title: "Navigation",
    links: [
      { label: "Accueil", href: "/" },
      { label: "À propos", href: "/a-propos/" },
      { label: "Nos Produits", href: "/nos_produits/" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact", href: "/contactez-nous/" },
    ],
  }

  const navigationColumnEN: FooterColumn = {
    title: "Navigation",
    links: [
      { label: "Home", href: "/en/home/" },
      { label: "About", href: "/en/about/" },
      { label: "Products", href: "/nos_produits/" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact", href: "/en/contact-us/" },
    ],
  }

  const productsColumnFR: FooterColumn = {
    title: "Nos Produits",
    links: [
      { label: "LABCORP BTP", href: "/nos_produits/labcorp-laboratoire-btp/" },
      { label: "SMOOTHFIX GMAO", href: "/nos_produits/smoothfix-gmao/" },
      { label: "AGRONET", href: "/agronet-gestion-ferme/" },
      { label: "Gestion Maritime", href: "/nos_produits/developpement-specifique/" },
    ],
  }

  const productsColumnEN: FooterColumn = {
    title: "Our Products",
    links: [
      { label: "LABCORP BTP", href: "/en/construction-laboratory-labcorp/" },
      { label: "SMOOTHFIX GMAO", href: "/en/gmao-cmms/" },
      { label: "AGRONET", href: "/en/agronet-farm-management/" },
      { label: "Maritime Management", href: "/en/custom-development/" },
    ],
  }

  const servicesColumnFR: FooterColumn = {
    title: "Services",
    links: [
      { label: "Développement sur mesure", href: "/nos_produits/developpement-specifique/" },
      { label: "Intégrateur Dolibarr", href: "/nos_produits/integrateur-dolibarr/" },
      { label: "Création site web", href: "/nos_produits/creation_site_web/" },
      { label: "Automatisation IA", href: "/nos_produits/developpement-specifique/" },
    ],
  }

  const servicesColumnEN: FooterColumn = {
    title: "Services",
    links: [
      { label: "Custom Development", href: "/en/custom-development/" },
      { label: "Dolibarr Integrator", href: "/en/dolibarr-integrator-erp-crm/" },
      { label: "Website Creation", href: "/en/website-creation/" },
      { label: "AI Automation", href: "/en/custom-development/" },
    ],
  }

  const navigationColumn = isEnglish ? navigationColumnEN : navigationColumnFR
  const productsColumn = isEnglish ? productsColumnEN : productsColumnFR
  const servicesColumn = isEnglish ? servicesColumnEN : servicesColumnFR

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/zaimdigital",
      icon: Facebook,
      color: "hover:bg-[#1877F2]",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/zaimdigital",
      icon: Linkedin,
      color: "hover:bg-[#0A66C2]",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/zaimdigital",
      icon: Instagram,
      color: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@zaimdigital",
      icon: Youtube,
      color: "hover:bg-[#FF0000]",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-[#111111] text-gray-300 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info Column */}
          <div className="lg:col-span-4">
            <Link href={isEnglish ? "/en/home/" : "/"} className="inline-block mb-8 group">
              <Image
                src="/images/logo.png"
                alt="ZAIM DIGITAL"
                width={280}
                height={90}
                className="h-20 md:h-24 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm mb-6 leading-relaxed text-gray-400 max-w-sm">
              {isEnglish
                ? "ZAIM DIGITAL delivers innovative software solutions to optimize your business operations. Simplicity, performance, and innovation at the heart of our approach."
                : "ZAIM DIGITAL propose des solutions logicielles innovantes pour optimiser la gestion de vos activités professionnelles. Simplicité, performance et innovation au cœur de notre démarche."}
            </p>

            {/* Tagline with gradient */}
            <p className="text-xl font-bold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent mb-8">
              Innovation. Performance. Simplicité
            </p>

            {/* Contact Info with cards */}
            <div className="space-y-4">
              <a
                href="tel:+212624067491"
                className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Téléphone</p>
                  <p className="text-white font-medium group-hover:text-primary transition-colors">+212 624 067 491</p>
                </div>
              </a>
              <a
                href="mailto:administration@zaimdigital.com"
                className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="text-white font-medium group-hover:text-primary transition-colors">administration@zaimdigital.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Adresse</p>
                  <p className="text-white font-medium">Casablanca, Maroc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:pl-12">
            {/* Navigation Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                {navigationColumn.title}
              </h3>
              <ul className="space-y-4">
                {navigationColumn.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                {productsColumn.title}
              </h3>
              <ul className="space-y-4">
                {productsColumn.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                {servicesColumn.title}
              </h3>
              <ul className="space-y-4">
                {servicesColumn.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {currentYear} ZAIM DIGITAL.{" "}
              {isEnglish ? "All rights reserved." : "Tous droits réservés."}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex items-center justify-center size-11 rounded-xl bg-white/5 border border-white/10 ${social.color} transition-all duration-300 group hover:border-transparent hover:scale-110`}
                  >
                    <Icon className="size-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
