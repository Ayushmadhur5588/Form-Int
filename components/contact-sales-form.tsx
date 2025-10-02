"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Brain, Bell, Users, MapPin, Repeat, Monitor, Code, Handshake } from "lucide-react"

interface ContactSalesFormProps {
  open: boolean 
  onOpenChange: (open: boolean) => void
}

export function ContactSalesForm({ open, onOpenChange }: ContactSalesFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    telephone: "",
    jobLevel: "",
    department: "",
    jobFunction: "",
    country: "",
    interest: "",
    interestedIn: "",
    comments: "",
    createAccount: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    onOpenChange(false)
  }

  const features = [
    {
      icon: Brain,
      title: "Put AI to work",
      description: "Empower everyone with generative AI and accelerate productivity across the enterprise.",
    },
    {
      icon: Bell,
      title: "Find support",
      description: "Get always-on access to technical support, self-help, and your Form Internet instances.",
    },
    {
      icon: Users,
      title: "Collaborate with community",
      description: "Tap into 300k+ users for the latest Form Internet insights and best practices.",
    },
    {
      icon: MapPin,
      title: "Locate an office",
      description: "We have experts in key regions around the world, all ready to support your digital journey.",
    },
    {
      icon: Repeat,
      title: "Explore Form Internet Impact",
      description: "Get tailored support and strategic guidance to integrate solutions and accelerate value.",
    },
    {
      icon: Monitor,
      title: "Experience a demo",
      description: "See how the Form Internet Platform can streamline and unite your organization.",
    },
    {
      icon: Code,
      title: "Start developing",
      description: "Experience what it's like to build apps on the Form Internet Platform with a free account.",
    },
    {
      icon: Handshake,
      title: "Succeed with our partners",
      description: "Whatever your business challenge, our ecosystem of partners will help drive results.",
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[1400px] w-[95vw] h-[90vh] p-0 gap-0 overflow-hidden">
        <div className="flex h-full">
          <div className="w-1/2 bg-white p-12 overflow-y-auto">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Talk with a sales expert</h2>
              <p className="text-base text-gray-600 mb-8">Log in now to connect with an expert</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Business E-mail *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-gray-300 h-12 text-base placeholder:text-gray-500"
                />

                <Input
                  placeholder="First Name *"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="border-gray-300 h-12 text-base placeholder:text-gray-500"
                />

                <Input
                  placeholder="Last Name *"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="border-gray-300 h-12 text-base placeholder:text-gray-500"
                />

                <Input
                  placeholder="Company *"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="border-gray-300 h-12 text-base placeholder:text-gray-500"
                />

                <Input
                  type="tel"
                  placeholder="Telephone *"
                  required
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="border-gray-300 h-12 text-base placeholder:text-gray-500"
                />

                <Select
                  required
                  value={formData.jobLevel}
                  onValueChange={(value) => setFormData({ ...formData, jobLevel: value })}
                >
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

                <Select
                  required
                  value={formData.department}
                  onValueChange={(value) => setFormData({ ...formData, department: value })}
                >
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

                <Select
                  required
                  value={formData.jobFunction}
                  onValueChange={(value) => setFormData({ ...formData, jobFunction: value })}
                >
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

                <Select
                  required
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                >
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

                <Select
                  required
                  value={formData.interest}
                  onValueChange={(value) => setFormData({ ...formData, interest: value })}
                >
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

                <Select
                  required
                  value={formData.interestedIn}
                  onValueChange={(value) => setFormData({ ...formData, interestedIn: value })}
                >
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

                <Textarea
                  placeholder="Additional Comments (Optional)"
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="min-h-[100px] border-gray-300 text-base placeholder:text-gray-500"
                />

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox
                    id="createAccount"
                    checked={formData.createAccount}
                    onCheckedChange={(checked) => setFormData({ ...formData, createAccount: checked as boolean })}
                    className="mt-1"
                  />
                  <label htmlFor="createAccount" className="text-sm text-gray-700 leading-tight cursor-pointer">
                    Create an account for instant downloads and other premium resources
                  </label>
                </div>

                <p className="text-sm text-gray-700 pt-2">
                  By submitting this form, I confirm that I have read and agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Statement
                  </a>
                  .
                </p>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold h-14 text-lg mt-6"
                >
                  Contact Sales
                </Button>

                <p className="text-sm text-red-600 flex items-start gap-2 pt-2">
                  <span className="text-lg">⚠</span>
                  Form fields with an asterisk (*) are required.
                </p>
              </form>
            </div>
          </div>

          <div className="w-1/2 bg-[#1a3a52] p-12 overflow-y-auto">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-white mb-12">Get started with Form Internet</h2>

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
      </DialogContent>
    </Dialog>
  )
}
