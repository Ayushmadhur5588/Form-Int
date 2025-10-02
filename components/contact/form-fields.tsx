"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormFieldsProps {
  formData: {
    email: string
    firstName: string
    lastName: string
    company: string
    telephone: string
    heardAboutUs: string
    interestedIn: string
    comments: string
  }
  onChange: (field: string, value: string) => void
}

export function FormFields({ formData, onChange }: FormFieldsProps) {
  // ✅ Common classes for all form fields
  const formFieldClass =
    "w-full border border-gray-300 h-12 text-base text-gray-500 placeholder:text-gray-500 rounded-md"

  return (
    <div className="space-y-4">
      {/* How did you hear about us? */}
      <Select
        value={formData.heardAboutUs}
        onValueChange={(value) => onChange("heardAboutUs", value)}
      >
        <SelectTrigger className={formFieldClass}>
          <SelectValue placeholder="How did you hear about us?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="google">Google</SelectItem>
          <SelectItem value="friend">Friend / Referral</SelectItem>
          <SelectItem value="social">Social Media</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      {/* I am interested in */}
      <Select
        value={formData.interestedIn}
        onValueChange={(value) => onChange("interestedIn", value)}
      >
        <SelectTrigger className={formFieldClass}>
          <SelectValue placeholder="I am interested in" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="cx-enterprise">CX Enterprise</SelectItem>
          <SelectItem value="cx-enterprise-plus">CX Enterprise Plus</SelectItem>
          <SelectItem value="cx-broadband">CX Broadband</SelectItem>
          <SelectItem value="cx-broadband-plus">CX Broadband Plus</SelectItem>
          <SelectItem value="cx-broadband-lite">CX Broadband Lite</SelectItem>
          <SelectItem value="cx-specific">CX Specific</SelectItem>
          <SelectItem value="cx-offnet">CX Offnet</SelectItem>
          <SelectItem value="private-5g">Private 5G</SelectItem>
          <SelectItem value="high-capacity">
            High-capacity on-campus connectivity
          </SelectItem>
          <SelectItem value="wifi">Wi-Fi</SelectItem>
          <SelectItem value="quote">Need a quote</SelectItem>
          <SelectItem value="site-assessment">Need a site assessment</SelectItem>
          <SelectItem value="media">Media</SelectItem>
        </SelectContent>
      </Select>

      {/* Company */}
      <Input
        placeholder="Company *"
        required
        value={formData.company}
        onChange={(e) => onChange("company", e.target.value)}
        className={formFieldClass}
      />

      {/* First Name */}
      <Input
        placeholder="First Name *"
        required
        value={formData.firstName}
        onChange={(e) => onChange("firstName", e.target.value)}
        className={formFieldClass}
      />

      {/* Last Name */}
      <Input
        placeholder="Last Name *"
        required
        value={formData.lastName}
        onChange={(e) => onChange("lastName", e.target.value)}
        className={formFieldClass}
      />

      {/* Email */}
      <Input
        type="email"
        placeholder="Email *"
        required
        value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
        className={formFieldClass}
      />

      {/* Phone Number */}
      <Input
        type="tel"
        placeholder="Phone Number (optional)"
        value={formData.telephone}
        onChange={(e) => onChange("telephone", e.target.value)}
        className={formFieldClass}
      />

      {/* Message Box */}
      <Textarea
        placeholder="Let us know how we can help?"
        value={formData.comments}
        onChange={(e) => onChange("comments", e.target.value)}
        className="w-full min-h-[100px] border border-gray-300 text-base text-gray-500 placeholder:text-gray-500 rounded-md"
      />
    </div>
  )
}
