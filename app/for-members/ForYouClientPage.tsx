"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShoppingCart, Banknote, Send } from "lucide-react"
import Link from "next/link"
import { SignupForm } from "@/components/signup-form"
import Image from "next/image"

const howItWorksSteps = [
  {
    icon: ShoppingCart,
    title: "Shop & Earn Cashback",
    description: "Get real cashback on your everyday spending at over 80 top Australian retailers and 100+ major restaurants.",
  },
  {
    icon: Banknote,
    title: "Top-Up Your Account",
    description: "Easily add funds to your shopping and savings account using PayID. A single $5 fee gives you full access.",
  },
  {
    icon: Send,
    title: "Send Discounted Gift Cards",
    description: "Surprise friends and family with the perfect gift. Buy and send gift cards for any occasion, all with an exclusive discount.",
  },
]

export default function ForYouClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 px-4 py-2 rounded-full font-semibold">
              One Member Benefits
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Unlock Exclusive Savings & <span className="text-accent">Reward Yourself</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For just $5 per month, get cashback from 80+ top Australian retailers. On average, our members save enough for a full tank of petrol every few months. Top up with PayID and start saving today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#signup">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Getting started with One Member Benefits is as easy as one, two, three.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <Card key={index} className="bg-white border-0 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center p-6">
                <CardHeader className="pb-4">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{step.title}</CardTitle>
                  <p className="text-gray-600 leading-relaxed pt-2">{step.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gifting Section */}
      <section className="py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">The Perfect Gift, Every Time</h3>
                <p className="text-lg text-gray-600">
                    Celebrate special moments with the gift of choice. Send a discounted gift card to friends and family for birthdays, holidays, or just because. They can shop at their favorite stores, and you save money.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-4 font-semibold">
                    <Link href="#signup">
                        Send a Gift Card
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
            <div className="relative flex items-center justify-center">
                <Image src="/member-shop.png" alt="Gift Card Dashboard" width={250} height={100} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Retailers Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
              <div className="text-center space-y-4 mb-12">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Shop At All Your Favourite Stores
                  </h2>
                  <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                      We've partnered with over 80 of Australia's top retailers.
                  </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <Image src="/ret-list.png" alt="Featured Retailers" width={1000} height={400} className="rounded-2xl" />
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section id="signup" className="py-20 lg:py-24 bg-accent text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
            <SignupForm />
          </div>
        </div>
      </section>
    </div>
  )
}
