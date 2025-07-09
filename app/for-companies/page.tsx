import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, TrendingUp, Shield, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "For Companies - Enterprise Employee Benefits Platform | Onesto",
  description:
    "Transform your workplace culture with Onesto's comprehensive B2B employee benefits and philanthropic platform. Attract top talent and boost engagement.",
  keywords: [
    "enterprise employee benefits",
    "B2B benefits platform",
    "employee engagement solutions",
    "talent retention",
    "corporate social responsibility",
    "workplace culture",
    "HR technology",
    "employee satisfaction",
  ],
}

const companyFeatures = [
  {
    icon: Building2,
    title: "Enterprise-Grade Platform",
    description: "Scalable solution that grows with your organization, from startups to Fortune 500 companies.",
    benefits: ["Unlimited employee accounts", "Custom branding options", "Advanced security features"],
  },
  {
    icon: TrendingUp,
    title: "Talent Attraction & Retention",
    description: "Reduce turnover by 40% with benefits packages that demonstrate your company values.",
    benefits: ["Competitive benefits packages", "Employer branding tools", "Retention analytics"],
  },
  {
    icon: Users,
    title: "Employee Engagement Hub",
    description: "Centralized platform for all benefits, giving, and wellness programs with real-time analytics.",
    benefits: ["Unified dashboard", "Engagement metrics", "Communication tools"],
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Enterprise-level security with full compliance for all regulatory requirements.",
    benefits: ["SOC 2 Type II certified", "GDPR compliant", "Regular security audits"],
  },
]

const companyBenefits = [
  "Reduce HR administrative burden by 60%",
  "Increase employee satisfaction scores",
  "Streamline benefits management",
  "Real-time impact reporting",
  "Custom branding and integration",
  "Dedicated customer success manager",
  "24/7 enterprise support",
  "Advanced analytics and insights",
]

const stats = [
  { number: "40%", label: "Reduction in Employee Turnover" },
  { number: "85%", label: "Employee Satisfaction Increase" },
  { number: "60%", label: "HR Admin Time Saved" },
  { number: "500+", label: "Companies Trust Onesto" },
]

export default function ForCompaniesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pb-32">
        <div className="absolute inset-0 gradient-animate opacity-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl float"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-xl float-reverse"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Enterprise B2B Solution
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Transform Your <span className="text-primary">Workplace Culture</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Attract top talent, boost employee engagement, and create lasting social impact with our integrated
              benefits platform designed for forward-thinking companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary rounded-2xl px-8 py-6">
                <Link href="/contact">
                  Schedule Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-card rounded-2xl px-8 py-6">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card border-0 rounded-3xl text-center hover-lift">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Enterprise-Grade Employee Benefits Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything your organization needs to create an exceptional employee experience and drive business
              results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {companyFeatures.map((feature, index) => (
              <Card key={index} className="glass-card border-0 rounded-3xl hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">Why Companies Choose Onesto</h3>
                <p className="text-lg text-gray-600">
                  Join hundreds of companies that trust Onesto to transform their employee experience.
                </p>
              </div>

              <div className="grid gap-4">
                {companyBenefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white transition-colors duration-200"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary rounded-2xl">
                <Link href="/contact">
                  Schedule Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative glass-card rounded-3xl p-8 backdrop-blur-xl">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center bg-primary/10">
                      <Building2 className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-gray-600 font-medium">Enterprise Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
