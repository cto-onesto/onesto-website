import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap } from "lucide-react"
import { LargeTestimonial } from "@/components/large-testimonial"

export const metadata: Metadata = {
  title: "Onesto & Xero Integration | Seamless Employee Benefits",
  description:
    "Connect Onesto and Xero in seconds to offer your team a world-class employee benefits platform. Automate rewards, recognition, and financial wellness.",
  keywords: [
    "Onesto Xero integration",
    "Xero employee benefits",
    "small business rewards",
    "automate payroll",
    "employee recognition platform",
  ],
}

const features = [
  "Automated Rewards & Recognition",
  "Shop & Build Savings with Cashback",
  "Financial Education Library",
  "Emergency Wage Access",
]

export default function XeroIntegrationPage() {
  return (
    <>
      <section className="container py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              The Ultimate Employee Benefits Platform, Powered by Xero
            </h1>
            <p className="text-lg text-gray-600">
              Combine the power of Onesto with your Xero account to deliver incredible employee benefits that are typically out of reach for small and medium-sized businesses.
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/xero-dashboard.png"
              alt="Onesto and Xero Dashboards"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <LargeTestimonial />

      <section className="container py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <Zap className="h-32 w-32 text-primary" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Seamless Integration in Under 10 Minutes
            </h2>
            <p className="text-lg text-gray-600">
              Connecting Onesto to your Xero account is a breeze. Our automated process means there’s no manual work required. You can be up and running in less than 10 minutes, ready to offer your team the benefits they deserve.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="container py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Transform Your Workplace Culture Today
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Attract and retain top talent by offering a benefits platform that truly makes a difference. Get started with Onesto and Xero.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
