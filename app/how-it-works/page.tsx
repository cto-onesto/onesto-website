import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Settings, BarChart3, Heart, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How It Works - Onesto Employee Benefits Platform Process | Onesto",
  description:
    "Learn how Onesto's employee benefits platform works. Simple setup, powerful features, and measurable results for your organization.",
  keywords: [
    "how Onesto works",
    "employee benefits setup",
    "platform implementation",
    "benefits administration process",
    "employee engagement process",
    "philanthropic program setup",
  ],
}

const steps = [
  {
    number: "01",
    title: "Setup & Onboarding",
    description: "Quick 30-day implementation with dedicated support team",
    icon: Settings,
    details: [
      "Initial consultation and needs assessment",
      "Custom platform configuration",
      "Employee data migration and setup",
      "Integration with existing HR systems",
      "Custom branding and personalization",
    ],
  },
  {
    number: "02",
    title: "Employee Engagement",
    description: "Launch platform with comprehensive training and support",
    icon: Users,
    details: [
      "Employee onboarding and training sessions",
      "Mobile app rollout and adoption",
      "Benefits enrollment and selection",
      "Philanthropic program introduction",
      "Ongoing engagement campaigns",
    ],
  },
  {
    number: "03",
    title: "Impact & Analytics",
    description: "Monitor engagement and measure real-world impact",
    icon: BarChart3,
    details: [
      "Real-time engagement dashboards",
      "Benefits utilization tracking",
      "Charitable impact measurement",
      "Employee satisfaction surveys",
      "ROI reporting and insights",
    ],
  },
  {
    number: "04",
    title: "Continuous Growth",
    description: "Ongoing optimization and program expansion",
    icon: Heart,
    details: [
      "Regular program reviews and updates",
      "New feature rollouts and enhancements",
      "Expanded charitable partnerships",
      "Advanced analytics and reporting",
      "Strategic planning and consultation",
    ],
  },
]

const timeline = [
  { phase: "Week 1-2", activity: "Platform Setup & Configuration" },
  { phase: "Week 3-4", activity: "Employee Onboarding & Training" },
  { phase: "Month 2", activity: "Full Platform Launch & Adoption" },
  { phase: "Month 3+", activity: "Optimization & Growth" },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pb-32">
        <div className="absolute inset-0 gradient-animate opacity-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl float-reverse"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Implementation Process
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              How <span className="text-primary">Onesto</span> Works
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From setup to success, we guide you through every step of transforming your employee benefits and
              engagement programs. Simple implementation, powerful results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary rounded-2xl px-8 py-6">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-card rounded-2xl px-8 py-6">
                <Link href="#process">View Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple 4-Step Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven implementation process ensures smooth deployment and maximum employee adoption.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-24 bg-gradient-to-b from-primary to-accent opacity-30 hidden lg:block"></div>
                )}

                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent mb-2">
                          Step {step.number}
                        </Badge>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>

                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Card className="glass-card border-0 rounded-3xl">
                      <CardContent className="p-8">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center bg-primary/10">
                              <step.icon className="h-10 w-10 text-primary" />
                            </div>
                            <p className="text-gray-600 font-medium">Step {step.number} Visualization</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Implementation Timeline</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get up and running quickly with our streamlined implementation process.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <Card key={index} className="glass-card border-0 rounded-3xl hover-lift">
                <CardHeader className="text-center pb-4">
                  <Badge className="bg-primary/10 text-primary mb-2 w-fit mx-auto">{item.phase}</Badge>
                  <CardTitle className="text-lg font-semibold text-gray-900">{item.activity}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600">
              Join hundreds of companies that have successfully transformed their employee experience with Onesto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary rounded-2xl px-8 py-6">
                <Link href="/contact">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-card rounded-2xl px-8 py-6">
                <Link href="/product">View Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
