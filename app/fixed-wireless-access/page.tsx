"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactSalesCTA } from "@/components/contact-sales-cta"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Tab = "enterprise" | "broadband" | "specific" | "offnet"

export default function FixedWirelessAccessPage() {
  const [activeTab, setActiveTab] = useState<Tab>("enterprise")

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden bg-primary text-primary-foreground">
        <Image
          src="/modern-city-skyline-with-cx-logo-overlay-and-wirel.jpg"
          alt="Fixed Wireless Access"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary" />
        <div className="container relative mx-auto flex h-full items-center px-4">
          <div>
            <div className="mb-4 text-6xl font-bold opacity-40">CX</div>
            <h1 className="text-5xl font-bold md:text-6xl">FIXED WIRELESS ACCESS (FWA)</h1>
          </div>
        </div>
      </section>

      {/* About Our Technology Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Button variant="default" size="lg" className="mb-8">
              ABOUT OUR TECHNOLOGY
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* CX Enterprise */}
            <div className="group">
              <div className="relative mb-4 h-64 overflow-hidden rounded-lg">
                <Image
                  src="/global-network-connectivity-with-digital-globe-and.jpg"
                  alt="CX Enterprise"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-center text-xl font-bold text-primary">CX ENTERPRISE</h3>
            </div>

            {/* CX Broadband */}
            <div className="group">
              <div className="relative mb-4 h-64 overflow-hidden rounded-lg">
                <Image
                  src="/high-speed-broadband-technology-with-fiber-optics-.jpg"
                  alt="CX Broadband"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-center text-xl font-bold text-primary">CX BROADBAND</h3>
            </div>

            {/* CX Specific */}
            <div className="group">
              <div className="relative mb-4 h-64 overflow-hidden rounded-lg">
                <Image
                  src="/industrial-network-infrastructure-with-workers-and.jpg"
                  alt="CX Specific"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-center text-xl font-bold text-primary">CX SPECIFIC</h3>
            </div>

            {/* CX Offnet */}
            <div className="group">
              <div className="relative mb-4 h-64 overflow-hidden rounded-lg">
                <Image
                  src="/digital-hand-touching-holographic-network-interfac.jpg"
                  alt="CX Offnet"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-center text-xl font-bold text-primary">CX OFFNET</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-primary md:text-4xl">FIXED WIRELESS ACCESS SOLUTIONS</h2>
        </div>
      </section>

      {/* Technical Overview Button */}
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" variant="default">
            CX TECHNICAL OVERVIEW
          </Button>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-4">
            <button
              onClick={() => setActiveTab("enterprise")}
              className={cn(
                "py-4 text-sm font-bold transition-colors md:text-base",
                activeTab === "enterprise"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              )}
            >
              CX ENTERPRISE
            </button>
            <button
              onClick={() => setActiveTab("broadband")}
              className={cn(
                "py-4 text-sm font-bold transition-colors md:text-base",
                activeTab === "broadband"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              )}
            >
              CX BROADBAND
            </button>
            <button
              onClick={() => setActiveTab("specific")}
              className={cn(
                "py-4 text-sm font-bold transition-colors md:text-base",
                activeTab === "specific"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              )}
            >
              CX SPECIFIC
            </button>
            <button
              onClick={() => setActiveTab("offnet")}
              className={cn(
                "py-4 text-sm font-bold transition-colors md:text-base",
                activeTab === "offnet"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              )}
            >
              CX OFFNET
            </button>
          </div>

          {/* Tab Content */}
          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            {/* Sidebar */}
            <div className="rounded-lg bg-muted p-8">
              {activeTab === "enterprise" && (
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">ENTERPRISE</h3>
                  <h3 className="mb-4 text-2xl font-bold text-primary">CONNECTIVITY</h3>
                  <h3 className="text-2xl font-bold text-primary">SOLUTIONS</h3>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    CX FWA Enterprise offers licensed-band wireless connectivity with symmetrical Layer 2 services,
                    delivering reliable multi-site (10–100 Mbps) or dedicated high-capacity (10–1000 Mbps) connections
                    for business-critical applications.
                  </p>
                </div>
              )}
              {activeTab === "broadband" && (
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">BROADBAND</h3>
                  <h3 className="mb-4 text-2xl font-bold text-primary">CONNECTIVITY</h3>
                  <h3 className="text-2xl font-bold text-primary">SOLUTIONS</h3>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    Our range of Broadband solutions deliver flexible, licensed-band wireless connectivity for
                    businesses of all sizes. Broadband (PtMP) ensures reliable internet with VLAN support, Broadband
                    Plus (PtP) delivers high-capacity speeds up to 1 Gbps, and Broadband Lite provides an affordable
                    option for small businesses.
                  </p>
                </div>
              )}
              {activeTab === "specific" && (
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">CUSTOMISED</h3>
                  <h3 className="mb-4 text-2xl font-bold text-primary">CONNECTIVITY</h3>
                  <h3 className="text-2xl font-bold text-primary">SOLUTIONS</h3>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    CX Specific offers customised network configurations to meet unique business requirements.
                    Supporting Point-to-Point (PtP) wireless services, it delivers optimal symmetrical speed options
                    from 10 Mbps to 10 Gbps. Designed to provide connectivity even in the most remote parts of South
                    Africa.
                  </p>
                </div>
              )}
              {activeTab === "offnet" && (
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">FLEXIBLE</h3>
                  <h3 className="mb-4 text-2xl font-bold text-primary">PRIMARY AND BACKUP</h3>
                  <h3 className="text-2xl font-bold text-primary">CONNECTIVITY SOLUTIONS</h3>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    CX Offnet extends Form Internet's reach by harnessing partnerships with leading connectivity
                    providers across South Africa. Designed to deliver both primary and backup solutions, CX Offnet
                    offers businesses a flexible, robust alternative to ensure uninterrupted connectivity, no matter the
                    challenge.
                  </p>
                </div>
              )}
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {activeTab === "enterprise" && (
                <>
                  <div>
                    <h4 className="mb-4 text-2xl font-bold text-primary">ENTERPRISE</h4>
                    <p className="mb-6 leading-relaxed">
                      CX Enterprise is a high-performance, licensed-band wireless Point-to-Multipoint (PtMP) solution
                      that delivers symmetrical Layer 2 services, offering speeds from 10 Mbps to 100 Mbps. With a large
                      MTU size of 2000 bytes, it ensures smooth data transmission, ideal for businesses requiring
                      reliable, high-speed connectivity.
                    </p>
                    <Button variant="outline">DOWNLOAD BROCHURE</Button>
                  </div>

                  <div>
                    <h4 className="mb-4 text-2xl font-bold text-primary">ENTERPRISE PLUS</h4>
                    <p className="mb-6 leading-relaxed">
                      CX Enterprise Plus is an advanced, licensed-band wireless Point-to-Point (PtP) solution offering
                      Layer 2 symmetrical services with speeds from 10 Mbps to 1000 Mbps. Designed for businesses that
                      require dedicated, high-capacity connections, it supports bandwidth-intensive applications with
                      ease.
                    </p>
                    <Button variant="outline">DOWNLOAD BROCHURE</Button>
                  </div>
                </>
              )}

              {activeTab === "broadband" && (
                <>
                  <div>
                    <h4 className="mb-4 text-2xl font-bold text-primary">BROADBAND</h4>
                    <p className="mb-6 leading-relaxed">
                      CX Broadband is a versatile wireless broadband solution built on licensed spectrum and PtMP Layer
                      3 technology. It's perfect for businesses with moderate to high data needs, offering both
                      symmetrical and asymmetrical speed options. The solution ensures reliable internet connectivity
                      with the flexibility of dedicated VLANs.
                    </p>
                    <Button variant="outline">DOWNLOAD BROCHURE</Button>
                  </div>

                  <div>
                    <h4 className="mb-4 text-2xl font-bold text-primary">BROADBAND PLUS</h4>
                    <p className="mb-6 leading-relaxed">
                      CX Broadband Plus is a high-capacity wireless broadband solution designed for businesses with
                      demanding data needs. It operates over licensed spectrum using PtP Layer 3 technology, ensuring
                      stable, interference-free connectivity. With both symmetrical and asymmetrical options, it
                      delivers consistent, reliable speeds ranging from 10 Mbps to 1 Gbps.
                    </p>
                    <Button variant="outline">DOWNLOAD BROCHURE</Button>
                  </div>

                  <div>
                    <h4 className="mb-4 text-2xl font-bold text-primary">BROADBAND LITE</h4>
                    <p className="mb-6 leading-relaxed">
                      CX Broadband Lite provides an affordable wireless broadband option for small businesses. Operating
                      on licensed spectrum with PtMP Layer 3 technology, it offers reliable internet connectivity with
                      asymmetrical speed options, making it an ideal choice for businesses seeking cost-effective
                      connectivity.
                    </p>
                    <Button variant="outline">DOWNLOAD BROCHURE</Button>
                  </div>
                </>
              )}

              {activeTab === "specific" && (
                <div>
                  <p className="mb-6 leading-relaxed">
                    CX Specific offers customised network configurations to meet unique business requirements.
                    Supporting Point-to-Point (PtP) wireless services, it delivers optimal symmetrical speed options
                    from 10 Mbps to 10 Gbps. Designed to provide connectivity even in the most remote parts of South
                    Africa.
                  </p>
                  <Button variant="outline">DOWNLOAD BROCHURE</Button>
                </div>
              )}

              {activeTab === "offnet" && (
                <div>
                  <p className="mb-6 leading-relaxed">
                    CX Offnet extends Form Internet's reach by harnessing partnerships with leading connectivity
                    providers across South Africa. Designed to deliver both primary and backup solutions, CX Offnet
                    offers businesses a flexible, robust alternative to ensure uninterrupted connectivity, no matter the
                    challenge.
                  </p>
                  <Button variant="outline">DOWNLOAD BROCHURE</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactSalesCTA />
      <SiteFooter />
    </div>
  )
}
