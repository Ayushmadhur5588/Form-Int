import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactSalesCTA } from "@/components/contact-sales-cta"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Lock, Network } from "lucide-react"

export default function PrivateNetworksPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden bg-primary text-primary-foreground">
        <Image
          src="/secure-private-network-infrastructure-with-encrypt.jpg"
          alt="Private Networks"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary" />
        <div className="container relative mx-auto flex h-full items-center px-4">
          <div>
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">PRIVATE NETWORKS</h1>
            <p className="max-w-2xl text-xl leading-relaxed opacity-90">
              Secure, dedicated connectivity solutions for mission-critical operations and enterprise-grade performance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Enterprise-Grade Private Network Solutions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Our private network solutions provide unparalleled security, reliability, and performance for
              organizations that demand the highest standards of connectivity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Enhanced Security</h3>
              <p className="text-muted-foreground">
                Dedicated infrastructure with advanced encryption and access controls for maximum data protection.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">High Performance</h3>
              <p className="text-muted-foreground">
                Low latency and guaranteed bandwidth for mission-critical applications and real-time operations.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Complete Control</h3>
              <p className="text-muted-foreground">
                Full network management and customization to meet your specific operational requirements.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Network className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Scalable Infrastructure</h3>
              <p className="text-muted-foreground">
                Flexible architecture that grows with your business needs and adapts to changing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
            Ideal for Mission-Critical Operations
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-card shadow-lg">
              <div className="relative h-64">
                <Image src="/industrial-manufacturing-facility-with-iot-sensors.jpg" alt="Manufacturing" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Manufacturing & IoT</h3>
                <p className="text-muted-foreground">
                  Connect industrial equipment, sensors, and automation systems with reliable, low-latency private
                  networks.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card shadow-lg">
              <div className="relative h-64">
                <Image src="/healthcare-facility-with-medical-equipment-and-sec.jpg" alt="Healthcare" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Healthcare</h3>
                <p className="text-muted-foreground">
                  Secure patient data transmission and medical device connectivity with HIPAA-compliant private
                  networks.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card shadow-lg">
              <div className="relative h-64">
                <Image src="/financial-institution-with-secure-data-centers-and.jpg" alt="Financial Services" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">Financial Services</h3>
                <p className="text-muted-foreground">
                  Ultra-secure connectivity for trading platforms, banking systems, and sensitive financial data
                  transmission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">Technical Capabilities</h2>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-3 text-lg font-bold">Network Architecture</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Dedicated Layer 2/Layer 3 connectivity</li>
                  <li>• Point-to-Point and Point-to-Multipoint topologies</li>
                  <li>• Redundant infrastructure for high availability</li>
                  <li>• Custom VLAN configurations</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-3 text-lg font-bold">Performance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Speeds from 10 Mbps to 10 Gbps</li>
                  <li>• Symmetrical bandwidth options</li>
                  <li>• Low latency (&lt;5ms typical)</li>
                  <li>• 99.9% uptime SLA</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-3 text-lg font-bold">Security Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• End-to-end encryption</li>
                  <li>• Isolated network segments</li>
                  <li>• Advanced firewall protection</li>
                  <li>• 24/7 security monitoring</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-3 text-lg font-bold">Management & Support</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Dedicated account management</li>
                  <li>• Real-time network monitoring</li>
                  <li>• Proactive maintenance</li>
                  <li>• 24/7 technical support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Deploy Your Private Network?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Our team of experts will work with you to design and implement a private network solution tailored to your
            specific requirements.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Download Technical Specs
            </Button>
          </div>
        </div>
      </section>

      <ContactSalesCTA />
      <SiteFooter />
    </div>
  )
}
