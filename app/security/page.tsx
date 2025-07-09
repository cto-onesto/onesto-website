import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SecurityPillars } from "@/components/security-pillars"

export const metadata: Metadata = {
  title: "Security | Onesto",
  description:
    "Learn about Onesto's enterprise-grade security. We are ISO 27001 certified and adhere to the Australian Privacy Act to protect your data.",
  keywords: [
    "Onesto security",
    "ISO 27001",
    "data protection",
    "enterprise security",
    "Australian Privacy Act",
  ],
}

export default function SecurityPage() {
  return (
    <>
      <section className="mt-20 mb-10 container py-12 sm:py-20">
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Security is in our DNA
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Onesto is built with enterprise-grade security from the ground up. We are ISO 27001 certified and committed to protecting the data of our clients and their employees.
          </p>
        </div>

        <SecurityPillars />

        <div className="text-center mt-24">
          <h2 className="text-3xl font-bold mb-4">Have questions about our security?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our team is ready to provide you with the documentation and answers you need to feel confident in our platform.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
