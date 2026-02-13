"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ArrowRight, ChevronDown, Beaker, Wrench, Sprout, Globe, Database, Code, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  hasMegaMenu?: boolean
}

interface Product {
  icon: React.ElementType
  title: string
  description: string
  href: string
  badge?: string
  badgeColor?: string
}

const productsFR: Product[] = [
  {
    icon: Beaker,
    title: "LABCORP BTP – LIMS",
    description: "Logiciel de gestion de laboratoire BTP",
    href: "/nos_produits/labcorp-laboratoire-btp",
    badge: "LIMS",
    badgeColor: "bg-blue-100 text-blue-700"
  },
  {
    icon: Wrench,
    title: "SMOOTHFIX GMAO",
    description: "Solution GMAO de maintenance",
    href: "/nos_produits/smoothfix-gmao",
    badge: "GMAO",
    badgeColor: "bg-orange-100 text-orange-700"
  },
  {
    icon: Sprout,
    title: "AGRONET",
    description: "Gestion de ferme intelligente",
    href: "/agronet-gestion-ferme",
    badge: "AgriTech",
    badgeColor: "bg-green-100 text-green-700"
  },
  {
    icon: Globe,
    title: "Création Site Web",
    description: "Sites professionnels optimisés SEO",
    href: "/nos_produits/creation_site_web",
    badge: "Web",
    badgeColor: "bg-cyan-100 text-cyan-700"
  },
  {
    icon: Database,
    title: "Intégrateur Dolibarr",
    description: "Déploiement ERP/CRM Dolibarr",
    href: "/nos_produits/integrateur-dolibarr",
    badge: "ERP/CRM",
    badgeColor: "bg-emerald-100 text-emerald-700"
  },
  {
    icon: Settings,
    title: "Intégrateur Odoo",
    description: "Intégration Odoo ERP/CRM au Maroc",
    href: "/nos_produits/integrateur-odoo",
    badge: "ERP/CRM",
    badgeColor: "bg-purple-100 text-purple-700"
  },
  {
    icon: Code,
    title: "Développement Spécifique",
    description: "Solutions sur mesure",
    href: "/nos_produits/developpement-specifique",
    badge: "Custom",
    badgeColor: "bg-violet-100 text-violet-700"
  }
]

const navigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Nos Produits", href: "/nos_produits/", hasMegaMenu: true },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contactez-nous/" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false)
  const megaMenuRef = React.useRef<HTMLDivElement>(null)
  const megaMenuTriggerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle click outside for mega menu
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        megaMenuTriggerRef.current &&
        !megaMenuTriggerRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100"
          : "bg-white/95 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/images/logo.png"
              alt="ZAIM DIGITAL"
              width={200}
              height={60}
              priority
              className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              item.hasMegaMenu ? (
                <div
                  key={item.href}
                  ref={megaMenuTriggerRef}
                  className="relative"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <button
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full flex items-center gap-1",
                      isActive(item.href)
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isMegaMenuOpen && "rotate-180"
                    )} />
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                    )}
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div
                    ref={megaMenuRef}
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300",
                      isMegaMenuOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    )}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-[700px]">
                      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                        <h3 className="text-lg font-bold text-slate-900">
                          Nos Produits
                        </h3>
                        <Link
                          href="/nos_produits/"
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                          onClick={() => setIsMegaMenuOpen(false)}
                        >
                          Voir tout
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {productsFR.map((product) => {
                          const Icon = product.icon
                          return (
                            <Link
                              key={product.href}
                              href={product.href}
                              onClick={() => setIsMegaMenuOpen(false)}
                              className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300"
                            >
                              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <Icon className="h-6 w-6" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">
                                    {product.title}
                                  </h4>
                                  {product.badge && (
                                    <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", product.badgeColor)}>
                                      {product.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-slate-600 line-clamp-1">
                                  {product.description}
                                </p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contactez-nous/">
              <Button className="group bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                Démarrer
                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle menu" className="rounded-full">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-0 shadow-2xl overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/images/logo.png"
                    alt="ZAIM DIGITAL"
                    width={160}
                    height={50}
                    className="h-12 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    item.hasMegaMenu ? (
                      <div key={item.href} className="space-y-1">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 block",
                            isActive(item.href)
                              ? "text-primary bg-primary/10"
                              : "text-gray-700 hover:text-primary hover:bg-gray-50"
                          )}
                        >
                          {item.label}
                        </Link>
                        {/* Mobile Products Sub-menu */}
                        <div className="pl-4 space-y-1">
                          {productsFR.map((product) => {
                            const Icon = product.icon
                            return (
                              <Link
                                key={product.href}
                                href={product.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
                              >
                                <Icon className="h-4 w-4" />
                                {product.title}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                          isActive(item.href)
                            ? "text-primary bg-primary/10"
                            : "text-gray-700 hover:text-primary hover:bg-gray-50"
                        )}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </nav>

                <Separator className="bg-gray-100" />

                {/* Mobile CTA */}
                <div className="px-4">
                  <Link href="/contactez-nous/" onClick={() => setIsOpen(false)}>
                    <Button className="w-full group bg-primary hover:bg-primary/90 text-white rounded-xl py-6 shadow-lg shadow-primary/25">
                      Démarrer un projet
                      <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
