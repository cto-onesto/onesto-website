"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Gift, Zap, Star, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const personalFeatures = [
  {
    icon: Heart,
    title: "Philanthropic Giving",
    description: "Support causes you're passionate about with employer matching and easy donation tracking.",
    benefits: ["Choose from 500+ verified charities", "Employer matching up to $1,000", "Real-time impact tracking"],
  },
  {
    icon: Gift,
    title: "Flexible Benefits",
    description: "Choose from a wide range of health, wellness, and lifestyle benefits that fit your needs.",
    benefits: ["Comprehensive health coverage", "Wellness programs", "Lifestyle spending accounts"],
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Mobile-first platform with instant access to all your benefits and giving history.",
    benefits: ["Mobile app available", "Real-time notifications", "Easy claims processing"],
  },
  {
    icon: Star,
    title: "Personal Impact",
    description: "See the real-world impact of your contributions and volunteer efforts in your community.",
    benefits: ["Impact dashboard", "Community stories", "Volunteer hour tracking"],
  },
]

const benefits = [
  "Access to 500+ charitable organizations",
  "Employer donation matching up to $1,000",
  "Comprehensive health & wellness benefits",
  "Financial planning and education resources",
  "Volunteer time off tracking",
  "Personal impact dashboard",
  "24/7 customer support",
  "Mobile app with offline access",
]

export default function ForYouClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pb-32">
        <div className="absolute inset-0 gradient-animate opacity-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-xl float-reverse"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 px-4 py-2">
              Personal Benefits Platform
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Benefits That Actually <span className="text-accent">Benefit You</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive benefits, support causes you care about, and take control of your financial wellness
              through your employer's Onesto platform. Make a difference while securing your future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 glow-accent rounded-2xl px-8 py-6">
                <Link href="/contact">
                  Get Started
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

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From health benefits to charitable giving, manage all your workplace benefits in one beautiful,
              easy-to-use platform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {personalFeatures.map((feature, index) => (
              <Card key={index} className="glass-card border-0 rounded-3xl hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
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

      {/* Benefits List Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">What You Get With Onesto</h3>
                <p className="text-lg text-gray-600">
                  Access comprehensive benefits and make a difference through your workplace.
                </p>
              </div>

              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-accent/10">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 glow-accent rounded-2xl">
                <Link href="/contact">
                  Explore Your Benefits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative glass-card rounded-3xl p-8 backdrop-blur-xl">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center bg-accent/10">
                      <Heart className="h-10 w-10 text-accent" />
                    </div>
                    <p className="text-gray-600 font-medium">Personal Benefits Portal</p>
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
