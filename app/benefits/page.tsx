import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Shield, Gift, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Employee Benefits & Philanthropic Programs | Onesto",
  description:
    "Comprehensive employee benefits including health, wellness, financial security, and philanthropic giving programs. Transform your workplace with Onesto.",
  keywords: [
    "employee benefits",
    "health benefits",
    "wellness programs",
    "philanthropic benefits",
    "charitable giving",
    "financial wellness",
    "workplace benefits",
    "employee perks",
  ],
}

const benefitCategories = [
  {
    icon: Shield,
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness programs for your physical and mental wellbeing.",
    color: "primary",
    benefits: [
      "Medical, dental, and vision insurance",
      "Mental health support and counseling",
      "Fitness and wellness programs",
      "Preventive care and health screenings",
      "Telemedicine services",
      "Employee assistance programs",
    ],
  },
  {
    icon: Heart,
    title: "Philanthropic Giving",
    description: "Make a difference in your community through employer-supported charitable giving programs.",
    color: "accent",
    benefits: [
      "Donation matching up to $1,000 annually",
      "Access to 500+ verified charities",
      "Volunteer time off programs",
      "Team volunteering opportunities",
      "Impact tracking and reporting",
      "Cause-based team building events",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Wellness",
    description: "Build your financial future with comprehensive planning and investment tools.",
    color: "primary",
    benefits: [
      "401(k) retirement plans with matching",
      "Financial planning consultations",
      "Investment education resources",
      "Emergency savings programs",
      "Student loan assistance",
      "Financial wellness workshops",
    ],
  },
  {
    icon: Gift,
    title: "Lifestyle Benefits",
    description: "Flexible perks and benefits that adapt to your personal needs and preferences.",
    color: "accent",
    benefits: [
      "Flexible spending accounts",
      "Commuter benefits and parking",
      "Professional development stipends",
      "Technology and home office allowances",
      "Childcare assistance programs",
      "Pet insurance options",
    ],
  },
]

const additionalBenefits = [
  "Flexible work arrangements",
  "Unlimited PTO policies",
  "Professional development opportunities",
  "Tuition reimbursement programs",
  "Life and disability insurance",
  "Legal assistance services",
  "Identity theft protection",
  "Employee discount programs",
]

export default function BenefitsPage() {
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
              Comprehensive Benefits Package
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Employee Benefits & <span className="text-accent">Philanthropic Programs</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive benefits that support your health, wealth, and values. From traditional benefits to
              innovative philanthropic programs, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary rounded-2xl px-8 py-6">
                <Link href="/contact">
                  Explore Benefits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-card rounded-2xl px-8 py-6">
                <Link href="#categories">View Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Categories */}
      <section id="categories" className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Complete Benefits Coverage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive benefits platform covers every aspect of your wellbeing, from health and finances to
              community impact and personal growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {benefitCategories.map((category, index) => (
              <Card key={index} className="glass-card border-0 rounded-3xl hover-lift">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        category.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                      }`}
                    >
                      <category.icon
                        className={`h-6 w-6 ${category.color === "primary" ? "text-primary" : "text-accent"}`}
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle
                          className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                            category.color === "primary" ? "text-primary" : "text-accent"
                          }`}
                        />
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

      {/* Additional Benefits */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">Even More Benefits</h3>
                <p className="text-lg text-gray-600">
                  Beyond our core categories, we offer additional perks and benefits to support every aspect of your
                  life.
                </p>
              </div>

              <div className="grid gap-3">
                {additionalBenefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary rounded-2xl">
                  <Link href="/for-you">
                    Personal Benefits
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="glass-card rounded-2xl">
                  <Link href="/for-companies">Enterprise Solutions</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative glass-card rounded-3xl p-8 backdrop-blur-xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Benefits at a Glance</h4>
                    <p className="text-gray-600">Everything you need in one platform</p>
                  </div>

                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-3 bg-primary/5 rounded-xl">
                      <span className="font-medium text-gray-900">Health Coverage</span>
                      <Badge className="bg-primary/10 text-primary">100%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent/5 rounded-xl">
                      <span className="font-medium text-gray-900">Charitable Matching</span>
                      <Badge className="bg-accent/10 text-accent">$1,000</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-primary/5 rounded-xl">
                      <span className="font-medium text-gray-900">401(k) Match</span>
                      <Badge className="bg-primary/10 text-primary">6%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent/5 rounded-xl">
                      <span className="font-medium text-gray-900">PTO</span>
                      <Badge className="bg-accent/10 text-accent">Unlimited</Badge>
                    </div>
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
