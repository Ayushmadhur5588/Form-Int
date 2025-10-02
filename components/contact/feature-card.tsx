import type { LucideIcon } from "lucide-react"

/**
 * Individual feature card component for the contact page
 * Displays an icon, title, description, and arrow indicator
 */
interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex gap-4 group cursor-pointer">
      {/* Icon container with background */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-green-400" />
        </div>
      </div>

      {/* Content section */}
      <div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:underline">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        <span className="text-white text-lg mt-2 inline-block">→</span>
      </div>
    </div>
  )
}
