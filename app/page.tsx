import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { HeroV2 } from "@/components/redesign/hero-v2"
import { Ticker } from "@/components/redesign/ticker"
import { TrustStrip } from "@/components/redesign/trust-strip"
import { VillageEnterprise } from "@/components/redesign/village-enterprise"
import { ProblemMission } from "@/components/redesign/problem-mission"
import { ProductsTabs } from "@/components/redesign/products-tabs"
import { WatchVideos } from "@/components/redesign/watch-videos"
import { Calculators } from "@/components/redesign/calculators"
import { Impact } from "@/components/redesign/impact"
import { FaqSection } from "@/components/redesign/faq-section"
import { AudienceToggle } from "@/components/audience-toggle"
import { XeroSection } from "@/components/xero-section"
import { CTASection } from "@/components/cta-section"

const ClientLogoCarousel = dynamic(() => import("@/components/client-logo-carousel").then(mod => mod.ClientLogoCarousel), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(mod => mod.TestimonialsSection), { ssr: false });

export const metadata: Metadata = {
  title: "Employee Benefits & Philanthropic Benefits Platform | Onesto",
  description:
    "Transform your employee experience to attract and retain talent with Onesto's comprehensive benefits platform. Support philanthropic causes while overcoming donor fatigue and volunteer fatigue.",
  keywords: [
    "employee benefits platform",
    "philanthropic benefits",
    "employee engagement solutions",
    "talent retention strategies",
    "corporate social responsibility platform",
    "workplace wellness programs",
    "charitable giving platform",
    "employee satisfaction tools",
  ],
  openGraph: {
    title: "Employee Benefits & Philanthropic Benefits Platform | Onesto",
    description:
      "Transform your employee experience to attract and retain talent with comprehensive benefits and philanthropic programs.",
    type: "website",
    url: "https://onesto.co",
  },
}

const clientLogos = [
  "aad.png",
  "abs.png",
  "allstarkids.png",
  "arzo.png",
  "autobarn.png",
  "autopro.png",
  "bapcor.png",
  "baxtersmtq.png",
  "burson.png",
  "cgh.png",
  "connections.png",
  "emali.webp",
  "fortress.png",
  "gradi.jpg",
  "hillstreet.jpg",
  "jelliscraig.jpg",
  "kidsoft.png",
  "knotwood.png",
  "lucas.png",
  "marketplacefresh.png",
  "midas.png",
  "minimax.png",
  "movieorld.png",
  "ol.png",
  "precision.png",
  "rsyltc.png",
  "stannards.png",
  "strintauto.png",
  "teds.png",
  "theircare.png",
  "topgolf.png",
  "truckline.png",
  "uniting.png",
  "vcinemas.png",
  "vrl.png",
  "wano.png",
  "wetnwild.png",
]

export default function HomePage() {
  return (
    <div className="rd">
      <HeroV2 />
      <Ticker />
      <TrustStrip />
      <VillageEnterprise />
      <ProblemMission />
      <AudienceToggle />
      <ProductsTabs />
      <WatchVideos />
      <Calculators />
      <div className="rd-light bg-gray-50 text-gray-900">
        <XeroSection />
        <ClientLogoCarousel logos={clientLogos} />
        <TestimonialsSection />
      </div>
      <Impact />
      <FaqSection />
      <div id="demo">
        <CTASection />
      </div>
    </div>
  )
}
