import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">CONTACT</h3>
            <address className="not-italic text-sm leading-relaxed opacity-90">
              152 Roan Crescent
              <br />
              Corporate Park North
              <br />
              Midrand
              <br />
              Gauteng
              <br />
              South Africa
            </address>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">GET IN TOUCH</h3>
            <div className="space-y-2 text-sm opacity-90">
              <p>+27 (0) 10 140 8800</p>
              <p>info@forminternet.co.za</p>
              <p>careers@forminternet.co.za</p>
            </div>
            <Link
              href="/contact"
              className="mt-4 inline-block border border-primary-foreground px-6 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              DIRECTIONS
            </Link>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold">CERTIFICATIONS</h3>
            <div className="flex flex-wrap items-center gap-6">
              <div className="h-12 w-20 rounded bg-primary-foreground/10" />
              <div className="h-12 w-20 rounded bg-primary-foreground/10" />
              <div className="h-12 w-20 rounded bg-primary-foreground/10" />
              <div className="h-12 w-20 rounded bg-primary-foreground/10" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Form Internet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
