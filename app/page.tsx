import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactSalesCTA } from "@/components/contact-sales-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden bg-primary text-primary-foreground">
        <Image
          src="/futuristic-cityscape-at-night-with-network-connect.jpg"
          alt="Network connectivity visualization"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
        <div className="container relative mx-auto flex h-full items-center px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">EXPLORE OUR SOLUTIONS</h1>
            <p className="text-xl leading-relaxed opacity-90 md:text-2xl">
              Power your business with our high-performance connectivity solutions, from{" "}
              <strong>Fixed Wireless Access</strong> for reliable business connectivity to{" "}
              <strong>Private Networks</strong> for secure, mission-critical operations.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Fixed Wireless Access Card */}
          <Link
            href="/fixed-wireless-access"
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
          >
            <div className="relative h-[400px]">
              <Image
                src="/modern-city-skyline-with-wireless-network-towers-a.jpg"
                alt="Fixed Wireless Access"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="mb-4 text-6xl font-bold opacity-20">CX</div>
                  <h2 className="mb-2 text-4xl font-bold">FIXED</h2>
                  <h2 className="text-4xl font-bold">WIRELESS ACCESS</h2>
                </div>
              </div>
            </div>
          </Link>

          {/* Private Networks Card */}
          <Link
            href="/private-networks"
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
          >
            <div className="relative h-[400px]">
              <Image
                src="/secure-network-infrastructure-with-digital-connect.jpg"
                alt="Private Networks"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <h2 className="mb-2 text-4xl font-bold">PRIVATE</h2>
                  <h2 className="text-4xl font-bold">NETWORKS</h2>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <ContactSalesCTA />
      <SiteFooter />
    </div>
  )
}
