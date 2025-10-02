"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

/**
 * Form fields component containing all input fields for the contact form
 * Handles basic contact info, job details, and preferences
 */
interface FormFieldsProps {
  formData: {
    email: string
    firstName: string
    lastName: string
    company: string
    telephone: string
    jobLevel: string
    department: string
    jobFunction: string
    country: string
    interest: string
    interestedIn: string
    comments: string
  }
  onChange: (field: string, value: string) => void
}

export function FormFields({ formData, onChange }: FormFieldsProps) {
  return (
    <div className="space-y-4">
      {/* Basic contact information */}
      <Input
        type="email"
        placeholder="Business E-mail *"
        required
        value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
        className="border-gray-300 h-12 text-base placeholder:text-gray-500"
      />

      <Input
        placeholder="First Name *"
        required
        value={formData.firstName}
        onChange={(e) => onChange("firstName", e.target.value)}
        className="border-gray-300 h-12 text-base placeholder:text-gray-500"
      />

      <Input
        placeholder="Last Name *"
        required
        value={formData.lastName}
        onChange={(e) => onChange("lastName", e.target.value)}
        className="border-gray-300 h-12 text-base placeholder:text-gray-500"
      />

      <Input
        placeholder="Company *"
        required
        value={formData.company}
        onChange={(e) => onChange("company", e.target.value)}
        className="border-gray-300 h-12 text-base placeholder:text-gray-500"
      />

      <Input
        type="tel"
        placeholder="Telephone *"
        required
        value={formData.telephone}
        onChange={(e) => onChange("telephone", e.target.value)}
        className="border-gray-300 h-12 text-base placeholder:text-gray-500"
      />

      {/* Job-related dropdown fields */}
      <Select required value={formData.jobLevel} onValueChange={(value) => onChange("jobLevel", value)}>
        <SelectTrigger className="border-gray-300 h-12 text-base text-gray-500">
          <SelectValue placeholder="Job Level *" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="executive">Executive</SelectItem>
          <SelectItem value="director">Director</SelectItem>
          <SelectItem value="manager">Manager</SelectItem>
          <SelectItem value="individual">Individual Contributor</SelectItem>
        </SelectContent>
      </Select>

      <Select required value={formData.department} onValueChange={(value) => onChange("department", value)}>
        <SelectTrigger className="border-gray-300 h-12 text-base text-gray-500">
          <SelectValue placeholder="Department *" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="it">IT</SelectItem>
          <SelectItem value="operations">Operations</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
          <SelectItem value="finance">Finance</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      <Select required value={formData.jobFunction} onValueChange={(value) => onChange("jobFunction", value)}>
        <SelectTrigger className="border-gray-300 h-12 text-base text-gray-500">
          <SelectValue placeholder="Job Function *" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="network">Network Administration</SelectItem>
          <SelectItem value="security">Security</SelectItem>
          <SelectItem value="infrastructure">Infrastructure</SelectItem>
          <SelectItem value="management">Management</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      <Select required value={formData.country} onValueChange={(value) => onChange("country", value)}>
        <SelectTrigger className="border-gray-300 h-12 text-base text-gray-500">
          <SelectValue placeholder="Country *" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
          <SelectItem value="in">India</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      {/* User preferences and interests */}
      <Select required value={formData.interest} onValueChange={(value) => onChange("interest", value)}>
        <SelectTrigger className="border-gray-300 h-12 text-base text-gray-500">
          <SelectValue placeholder="I would like to *" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="demo">Request a demo</SelectItem>
          <SelectItem value="quote">Get a quote</SelectItem>
          <SelectItem value="consultation">Schedule a consultation</SelectItem>
          <SelectItem value="information">Get more information</SelectItem>
        </SelectContent>
      </Select>

      <Select required value={formData.interestedIn} onValueChange={(value) => onChange("interestedIn", value)}>
        <SelectTrigger className="border-gray-300 h-12 text-base text-gray-500">
          <SelectValue placeholder="I am interested in *" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="fwa">Fixed Wireless Access</SelectItem>
          <SelectItem value="private">Private Networks</SelectItem>
          <SelectItem value="both">Both Solutions</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      {/* Optional comments field */}
      <Textarea
        placeholder="Additional Comments (Optional)"
        value={formData.comments}
        onChange={(e) => onChange("comments", e.target.value)}
        className="min-h-[100px] border-gray-300 text-base placeholder:text-gray-500"
      />
    </div>
  )
}
