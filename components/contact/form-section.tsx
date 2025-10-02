"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FormFields } from "./form-fields"

export function FormSection() {
  const [formData, setFormData] = useState({
    heardAboutUs: "",
    interestedIn: "",
    company: "",
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    comments: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleFieldChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    setSubmitSuccess(false)
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (result.success) {
        setSubmitSuccess(true)
        setFormData({
          heardAboutUs: "",
          interestedIn: "",
          company: "",
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          comments: "",
        })
      } else {
        setSubmitError(result.message || "Failed to submit form")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-1/2 bg-white p-12 overflow-y-auto">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Talk with a sales expert</h1>
        <p className="text-base text-gray-600 mb-8">Log in now to connect with an expert</p>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-semibold flex items-center gap-2">
              <span className="text-xl">✓</span>
              Form Submitted Successfully!
            </p>
            <p className="text-green-700 text-sm mt-1">
              Thank you for your interest. Our sales team will contact you shortly.
            </p>
          </div>
        )}

        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-semibold flex items-center gap-2">
              <span className="text-xl">✕</span>
              {submitError}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormFields formData={formData} onChange={handleFieldChange} />

          <p className="text-sm text-gray-700 pt-2">
            By submitting this form, I confirm that I have read and agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Statement
            </a>
            .
          </p>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold h-14 text-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Contact Sales"}
          </Button>

          <p className="text-sm text-red-600 flex items-start gap-2 pt-2">
            <span className="text-lg">⚠</span>
            Form fields with an asterisk (*) are required.
          </p>
        </form>
      </div>
    </div>
  )
}
