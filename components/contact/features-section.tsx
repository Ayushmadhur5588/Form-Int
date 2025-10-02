import { Brain, Bell, Users, MapPin, Repeat, Monitor, Code, Handshake } from "lucide-react"
import { FeatureCard } from "./feature-card"

/**
 * Right side features section of the contact page
 * Displays all available features and services
 */
export function FeaturesSection() {
  // Feature data with icons, titles, and descriptions
  const features = [
    {
      icon: Brain,
      title: "Put AI to work",
      description: "Empower everyone with generative AI and accelerate productivity across the enterprise.",
    },
    {
      icon: Bell,
      title: "Find support",
      description: "Get always-on access to technical support, self-help, and your Foam Internet instances.",
    },
    {
      icon: Users,
      title: "Collaborate with community",
      description: "Tap into 300k+ users for the latest Foam Internet insights and best practices.",
    },
    {
      icon: MapPin,
      title: "Locate an office",
      description: "We have experts in key regions around the world, all ready to support your digital journey.",
    },
    {
      icon: Repeat,
      title: "Explore Foam Internet Impact",
      description: "Get tailored support and strategic guidance to integrate solutions and accelerate value.",
    },
    {
      icon: Monitor,
      title: "Experience a demo",
      description: "See how the Foam Internet Platform can streamline and unite your organization.",
    },
    {
      icon: Code,
      title: "Start developing",
      description: "Experience what it's like to build apps on the Foam Internet Platform with a free account.",
    },
    {
      icon: Handshake,
      title: "Succeed with our partners",
      description: "Whatever your business challenge, our ecosystem of partners will help drive results.",
    },
  ]

  return (
    <div className="w-1/2 bg-[#193577] p-12 overflow-y-auto">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Get started with Foam Internet</h2>

        {/* Feature cards list */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </div>
  )
}
