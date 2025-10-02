"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold tracking-tight text-primary">FORM INTERNET</div>
              <div className="grid grid-cols-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-1 w-1 rounded-full bg-primary" />
                ))}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            <Link
              href="/"
              className="px-6 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              HOME
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 bg-primary px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                SOLUTIONS
                <ChevronDown className="h-4 w-4" />
              </button>
              {solutionsOpen && (
                <div className="absolute left-0 top-full w-80 border border-border bg-white shadow-lg">
                  <div className="p-6">
                    <h3 className="mb-4 border-b border-border pb-2 text-lg font-bold text-primary">SOLUTIONS</h3>
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        VIEW ALL
                      </Link>
                      <Link
                        href="/fixed-wireless-access"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        FIXED WIRELESS ACCESS (FWA)
                      </Link>
                      <Link
                        href="/private-networks"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        PRIVATE NETWORKS
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <button className="flex items-center gap-1 px-6 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                ABOUT
                <ChevronDown className="h-4 w-4" />
              </button>
              {aboutOpen && (
                <div className="absolute left-0 top-full w-64 border border-border bg-white shadow-lg">
                  <div className="p-6">
                    <h3 className="mb-4 border-b border-border pb-2 text-lg font-bold text-primary">ABOUT</h3>
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/about"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        COMPANY
                      </Link>
                      <Link
                        href="/about/team"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        TEAM
                      </Link>
                      <Link
                        href="/about/technology"
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        TECHNOLOGY
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/news"
              className="px-6 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              NEWS
            </Link>
            <Link
              href="/coverage"
              className="px-6 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              COVERAGE
            </Link>
            <Link
              href="/careers"
              className="px-6 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              CAREERS
            </Link>
            <Link
              href="/contact"
              className="px-6 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              LET'S CONNECT
            </Link>
          </nav>

          {/* Contact Sales CTA - Desktop */}
          <Link href="/contact-sales">
            <Button className="hidden md:flex" size="sm">
              Contact Sales
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/fixed-wireless-access"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                FIXED WIRELESS ACCESS
              </Link>
              <Link
                href="/private-networks"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                PRIVATE NETWORKS
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/news"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                NEWS
              </Link>
              <Link
                href="/coverage"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                COVERAGE
              </Link>
              <Link
                href="/careers"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                CAREERS
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                LET'S CONNECT
              </Link>
              <Link href="/contact-sales" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full" size="sm">
                  Contact Sales
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
