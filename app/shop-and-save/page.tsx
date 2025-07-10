"use client"

import type { Metadata } from "next"
import { ProductHero } from "@/components/product-hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play, Sparkles, ArrowRight } from "lucide-react"

export default function ShopAndSavePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5421A7] to-black opacity-90"></div>

        {/* Use a max-width container and center it */}
        <div className="relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
          {/* Update grid to center items */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <motion.div
                className="inline-flex items-center space-x-2 bg-gray-300 rounded-full px-4 py-2 text-sm font-medium text-[#5421A7]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="h-4 w-4" />
                <span>Cashback on Everyday Spending</span>
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-white">Shop and Save</span>
              </h1>

              <p className="text-lg text-white max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Earn up to 10% cashback when you shop at over 350 partner retailers in Australia and New Zealand. Onesto's 'Shop and Save' feature allows you to save over $100 per month on your everyday spending.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="glass-accent border-accent/30 text-accent hover:text-white hover:bg-accent/10 rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                  >
                    <Link href="/contact">
                      <Play className="mr-2 h-5 w-5" />
                      Schedule a Demo
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 flex justify-center">
              <img
                src="/shop-to-save-hero.png"
                alt="Shop and Save"
                className="h-auto max-w-sm h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6 pb-8">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How does it work?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Onesto's Shop and Save feature revolutionizes everyday spending by allowing employees to earn up to 10% cashback at over 350 partner retailers across Australia and New Zealand. This seamless integration helps users save significantly on their regular purchases, directly boosting their financial well-being and making their salaries go further. It's a powerful tool for both individual savings and overall employee satisfaction.
            </p>
          </div>
          <div className="pt-6 lg:mt-0">
            <img
              src="/ret-list.png"
              alt="List of Retailers"
              className="w-full h-auto rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/xdzVrwmqEsU?si=e-8EihFAti0PkOzV"
              title="Shop and Save Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Why it's useful and what it does section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Build savings on your regular purchases</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Shop and Save offers compelling advantages for both employees looking to maximize their income and employers aiming to enhance their benefits package.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Significant Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Employees can save over $100 per month on everyday spending, directly increasing their disposable income and financial well-being.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Boosts Employee Morale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Providing tangible savings on essential purchases makes employees feel valued and supported, leading to higher morale and satisfaction.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Enhances Retention & Attraction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  A unique and valuable benefit like cashback on shopping makes your company more attractive to new talent and helps retain existing employees.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  The process is simple and integrated within the Onesto app, making it easy for employees to access and utilize their savings.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Wide Retailer Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  With over 350 partner retailers, employees have ample opportunities to save on a wide range of products and services.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">No Hidden Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Transparent cashback system with no complex terms or hidden fees, ensuring a straightforward saving experience.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Help Your Employees Save More?
            </h2>
            <p className="text-lg text-gray-600">
              Discover how Onesto's Shop and Save can enhance your employee benefits package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow-primary rounded-2xl px-8 py-6">
                <Link href="/contact">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}