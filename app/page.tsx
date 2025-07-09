import type { Metadata } from "next"
import Link from "next/link"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { AudienceToggle } from "@/components/audience-toggle"
import { TestimonialsSection } from "@/components/testimonials-section"
import { XeroSection } from "@/components/xero-section"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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

export default function HomePage() {
  return (
    <>
      <EnhancedHeroSection />
      <AudienceToggle />

      <section className="py-24 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Shop and Save
              </h2>
              <p className="text-lg text-gray-600">
                Earn up to 10% cashback when you shop at over 350 partner retailers in Australia and New Zealand.
                Onesto's "Shop and Save" feature allows you to save over $100 per month on your everyday spending.
              </p>
              <Button size="lg" asChild>
                <Link href="/shop-and-save">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/xdzVrwmqEsU?si=e-8EihFAti0PkOzV"
                title="Shop and Save with Onesto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-40 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/KylV5LeG_XY?si=YMIqBPk9ydtDTEa2"
                title="Flexible Wages with Onesto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Flexible Wages
              </h2>
              <p className="text-lg text-gray-600">
                Onesto's "Flexible Wages" or "Wages on Demand" service provides employees with early access to their earned wages. This benefit aims to improve employee retention and engagement by offering a financial safety net for unexpected expenses.
              </p>
              <Button size="lg" asChild>
                <Link href="/wages-on-demand">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Learn
              </h2>
              <p className="text-lg text-gray-600">
                Onesto's "Learn" platform focuses on improving employee financial well-being through bite-sized courses on financial literacy and wellness. The platform addresses the negative impact of financial stress on employees' health and work performance.
              </p>
              <Button size="lg" asChild>
                <Link href="/learn">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/EXuYFYCFAbA?si=JH-GqYwDLlVnCOJo"
                title="Learn with Onesto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/i_CVfxme9iU?si=Xxc2RCPCnuaCYw8d"
                title="Rewards & Recognition with Onesto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Rewards & Recognition
              </h2>
              <p className="text-lg text-gray-600">
                Onesto's "Rewards & Recognition" platform digitizes the process of creating and distributing employee awards. This saves administrative time and resources by eliminating the need for manual purchasing and postage.
              </p>
              <Button size="lg" asChild>
                <Link href="/rewards-and-recognition">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <XeroSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
