import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Integrations - Seamlessly Connect Your Tools | Onesto",
  description:
    "Onesto integrates with your existing payroll, HR, and other systems. Connect with Xero, Keypay, SAP, and more. We offer SFTP and custom API solutions for any setup.",
  keywords: [
    "Onesto integrations",
    "payroll integration",
    "HR software integration",
    "Xero integration",
    "Keypay integration",
    "SAP integration",
    "custom API",
    "SFTP integration",
  ],
}

const payrolls = [
  { name: "Xero", logo: "/integrations/xero.png" },
  { name: "Keypay", logo: "/integrations/keypay.svg" },
  { name: "Ascender", logo: "/integrations/ascender.png" },
  { name: "SAP", logo: "/integrations/sap.svg" },
  { name: "MYOB", logo: "/integrations/myob.png" },
  { name: "ADP", logo: "/integrations/adp.svg" },
  { name: "Payroll Metrics", logo: "/integrations/payroll-metrics.png" },
  { name: "UKG", logo: "/integrations/ukg.png" },
  { name: "Access Micropay", logo: "/integrations/micropay.png" },
  { name: "Employment Hero", logo: "/integrations/employment-hero.png" },
  { name: "Deputy", logo: "/integrations/deputy.svg" },
  { name: "Workforce Software", logo: "/integrations/workforce-software.webp" },
  { name: "TANDA", logo: "/integrations/tanda.png" },
  { name: "Ready Pay (HR3)", logo: "/integrations/ready-pay.png" },
]

export default function IntegrationsPage() {
  return (
    <section className="container py-18 sm:py-24">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Seamless Integrations for Any System
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Onesto connects with your existing tools to automate workflows and streamline your employee benefits program.
          Whether you have a large or small team, we have an integration solution for you.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Payroll Integrations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {payrolls.map((payroll) => (
            <div key={payroll.name} className="flex flex-col items-center justify-center space-y-2">
              <Image src={payroll.logo} alt={payroll.name} width={120} height={60} className="object-contain" />
              <p className="text-sm font-medium text-gray-700">{payroll.name}</p>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-lg font-bold text-gray-500">..and more</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">SFTP and Custom Integrations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Secure File Transfer Protocol (SFTP)</h3>
            <p className="text-gray-600 mb-4">
              For businesses that prefer a traditional approach, we offer SFTP integration. Securely transfer data
              between your systems and Onesto with ease. Our team will work with you to set up a seamless and automated
              data transfer process.
            </p>
            <Button asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
          <div className="p-8 border rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Custom Automated API Integrations</h3>
            <p className="text-gray-600 mb-4">
              Have a unique system or a complex workflow? Our team can build custom API integrations to connect Onesto
              with any of your existing tools. We specialize in creating elaborate automations that save you time and
              reduce administrative overhead.
            </p>
            <Button asChild>
              <Link href="/contact">Request a Custom Integration</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-32">
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
                  <Link href="https://onesto.co/en/knowledge/employer-services">
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
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Ready to connect your tools?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Let us show you how Onesto can integrate with your existing systems to create a seamless employee benefits
          experience.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  )
}