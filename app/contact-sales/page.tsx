import { FormSection } from "@/components/contact/form-section"
import { FeaturesSection } from "@/components/contact/features-section"

/**
 * Contact Sales Page
 * Two-column layout with form on left and features on right
 * Matches ServiceNow-style contact page design
 */
export default function ContactSalesPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Contact form */}
      <FormSection />

      {/* Right side - Feature cards */}
      <FeaturesSection />
    </div>
  )
}
