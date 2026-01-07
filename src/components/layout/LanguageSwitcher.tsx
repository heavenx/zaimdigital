"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [currentLang, setCurrentLang] = React.useState<"fr" | "en">("fr")

  React.useEffect(() => {
    // Detect current language from pathname
    const isEnglish = pathname.startsWith("/en")
    setCurrentLang(isEnglish ? "en" : "fr")
  }, [pathname])

  const toggleLanguage = () => {
    const newLang = currentLang === "fr" ? "en" : "fr"

    // Map FR to EN routes
    const routeMap: Record<string, string> = {
      "/": "/en/home/",
      "/a-propos/": "/en/about/",
      "/contactez-nous/": "/en/contact-us/",
      "/en/home/": "/",
      "/en/about/": "/a-propos/",
      "/en/contact-us/": "/contactez-nous/",
    }

    // Find matching route or default
    let newPath = routeMap[pathname]

    if (!newPath) {
      // For routes that stay the same (blog, nos_produits)
      if (pathname.startsWith("/blog") || pathname.startsWith("/nos_produits")) {
        newPath = pathname
      } else if (currentLang === "fr") {
        // Switch to English - add /en prefix
        newPath = pathname.startsWith("/en") ? pathname : `/en${pathname}`
      } else {
        // Switch to French - remove /en prefix
        newPath = pathname.replace(/^\/en/, "") || "/"
      }
    }

    router.push(newPath)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 font-medium"
      aria-label={`Switch to ${currentLang === "fr" ? "English" : "French"}`}
    >
      <Globe className="size-4" />
      <span className="uppercase">{currentLang === "fr" ? "EN" : "FR"}</span>
    </Button>
  )
}
