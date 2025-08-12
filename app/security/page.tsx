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
      <main className="isolate">
        <div className="relative isolate -z-10">
          <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
            <svg
              viewBox="0 0 801 1036"
              aria-hidden="true"
              className="w-[50.0625rem]"
            >
              <path
                fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
                fillOpacity=".3"
                d="m282.279 843.371 32.285 192.28-313.215-210.722 192.28-32.286 121.442-32.286-192.28 32.286-32.285-192.28 313.215 210.722-192.28 32.286Z"
              />
              <defs>
                <linearGradient
                  id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
                  x1="508.179"
                  x2="-28.67"
                  y1="255.321"
                  y2="92a.371"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Security is in our DNA
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    At Onesto, security isn't just a feature; it's fundamental to everything we do. We are committed to protecting your data with enterprise-grade security measures, ensuring privacy, integrity, and availability at all times. Our robust security framework is designed to meet the highest industry standards and regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Security Commitments
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-20">
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">ISO 27001 Certified</h3>
                <p className="mt-2 text-base text-gray-600">
                  Onesto is ISO 27001 certified, demonstrating our adherence to the highest international standards for information security management. This certification validates our comprehensive approach to managing sensitive company and customer information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Top-Tier Security Practices</h3>
                <p className="mt-2 text-base text-gray-600">
                  We implement industry-leading security practices across all layers of our infrastructure and application. This includes regular security audits, vulnerability assessments, and penetration testing to proactively identify and mitigate potential risks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">End-to-End Encryption</h3>
                <p className="mt-2 text-base text-gray-600">
                  All data, both in transit and at rest, is protected with full end-to-end encryption. We utilize robust encryption protocols to ensure that your sensitive information remains confidential and secure from unauthorized access.
                </p>
              </div>
            </div>
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Australian Privacy Act Compliance</h3>
                <p className="mt-2 text-base text-gray-600">
                  Onesto strictly adheres to the principles and requirements of the Australian Privacy Act. We are committed to transparently managing personal information, ensuring privacy, and upholding your rights regarding data handling.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Best Practices in Software Development</h3>
                <p className="mt-2 text-base text-gray-600">
                  Our development team follows secure software development lifecycle (SSDLC) best practices. Security is integrated into every phase, from design and coding to testing and deployment, minimizing vulnerabilities and ensuring a resilient platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-24 mb-20">
          <h2 className="text-3xl font-bold mb-4">Have questions about our security?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our team is ready to provide you with the documentation and answers you need to feel confident in our platform.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </main>
    </>
  )
}
