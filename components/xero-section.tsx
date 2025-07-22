import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function XeroSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <Image
              src="/xero.png"
              alt="Xero Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Offer The Ultimate Employee Benefits Application With Onesto And
              Xero
            </h2>
            <p className="text-lg text-gray-600">
              Click the “XERO App Store” button and have Onesto setup with your
              Xero Account
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="https://apps.xero.com/au/search/app/onesto#overview">
                  Xero App Store
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/faqs">
                  Knowledge Base
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://www.xero.com/au/?xtid=x30onesto#section-id-getStarted">
                  Try Xero for Free
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/xero-dashboard.png"
              alt="Xero Dashboard"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
