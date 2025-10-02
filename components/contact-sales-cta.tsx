import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function ContactSalesCTA() {
  return (
    <section className="bg-accent py-16 text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Connectivity?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
          Get in touch with our team to discuss your business connectivity needs and discover the perfect solution for
          your organization.
        </p>
        <Link href="/contact-sales">
          <Button size="lg" variant="secondary" className="gap-2">
            <Phone className="h-5 w-5" />
            Contact Sales
          </Button>
        </Link>
      </div>
    </section>
  )
}
