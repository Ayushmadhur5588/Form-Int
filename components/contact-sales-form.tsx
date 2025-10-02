"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wifi, Building2, Phone, Globe } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    telephone: "",
    heardAboutUs: "",
    interestedIn: "",
    comments: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const features = [
    {
      title: "Fast Wi-Fi",
      description: "Seamless connectivity with enterprise-grade performance.",
      icon: Wifi,
    },
    {
      title: "Enterprise Solutions",
      description: "Tailored packages to suit your business requirements.",
      icon: Building2,
    },
    {
      title: "Dedicated Support",
      description: "24/7 support to ensure your connectivity never stops.",
      icon: Phone,
    },
    {
      title: "Global Reach",
      description: "Reliable connectivity wherever your business operates.",
      icon: Globe,
    },
  ]

  return (
    <div className="flex h-screen">
      {/* Left Form Section */}
      <div className="w-1/2 p-12 overflow-y-auto">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>

        <div className="space-y-4">
          {/* How did you hear about us? */}
          <Select value={formData.heardAboutUs} onValueChange={(value) => handleChange("heardAboutUs", value)}>
            <SelectTrigger className="border-gray-300 h-12 text-base text-gray-500">
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
          <Select value={formData.interestedIn} onValueChange={(value) => handleChange("interestedIn", value)}>
            <SelectTrigger className="border-gray-300 h-12 text-base text-gray-500">
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
              <SelectItem value="high-capacity">High-capacity on-campus connectivity</SelectItem>
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
            onChange={(e) => handleChange("company", e.target.value)}
            className="border-gray-300 h-12 text-base placeholder:text-gray-500"
          />

          {/* First Name */}
          <Input
            placeholder="First Name *"
            required
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="border-gray-300 h-12 text-base placeholder:text-gray-500"
          />

          {/* Last Name */}
          <Input
            placeholder="Last Name *"
            required
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="border-gray-300 h-12 text-base placeholder:text-gray-500"
          />

          {/* Email */}
          <Input
            type="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="border-gray-300 h-12 text-base placeholder:text-gray-500"
          />

          {/* Phone Number */}
          <Input
            type="tel"
            placeholder="Phone Number (optional)"
            value={formData.telephone}
            onChange={(e) => handleChange("telephone", e.target.value)}
            className="border-gray-300 h-12 text-base placeholder:text-gray-500"
          />

          {/* Message Box */}
          <Textarea
            placeholder="Let us know how we can help?"
            value={formData.comments}
            onChange={(e) => handleChange("comments", e.target.value)}
            className="min-h-[100px] border-gray-300 text-base placeholder:text-gray-500"
          />
        </div>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Submit
        </button>
      </div>

      {/* Right Info Section */}
      <div className="w-1/2 bg-[#193577] p-12 overflow-y-auto">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-white mb-12">Get started with Foam Internet</h2>

          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex gap-4 group cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:underline">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    <span className="text-white text-lg mt-2 inline-block">→</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
