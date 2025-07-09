import type { Metadata } from "next"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { AudienceToggle } from "@/components/audience-toggle"

import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Philanthropic Solutions for Charities | Onesto",
  description:
    "Partner with Onesto to streamline donations, connect with corporate sponsors, and amplify your impact. Overcome donor fatigue and reach a wider audience of supporters.",
  keywords: [
    "charity fundraising platform",
    "nonprofit fundraising solutions",
    "corporate sponsorship for charities",
    "donor management software",
    "volunteer recruitment platform",
    "online donation platform",
    "charitable giving solutions",
    "nonprofit technology",
  ],
  openGraph: {
    title: "Philanthropic Solutions for Charities | Onesto",
    description:
      "Partner with Onesto to streamline donations, connect with corporate sponsors, and amplify your impact.",
    type: "website",
    url: "https://onesto.co/for-charities",
  },
}

export default function ForCharitiesPage() {
  return (
    <>
      <EnhancedHeroSection />
      <AudienceToggle />
      
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
