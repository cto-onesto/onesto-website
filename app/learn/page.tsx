"use client"

import type { Metadata } from "next"
import { ProductHero } from "@/components/product-hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play, Sparkles, ArrowRight, UploadCloud } from "lucide-react"

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
                <span>Financial Wellbeing</span>
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-white">Learn</span>
              </h1>

              <p className="text-lg text-white max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Onesto’s Learning platform offers courses on financial literacy and employee wellness broken down into bite-sized pieces.
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
                src="/lms-hero.png"
                alt="Learn Platform Hero Image"
                className="w-auto h-auto max-w-sm rounded-lg object-cover"
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
              Onesto's Learn platform is dedicated to enhancing employee financial well-being through accessible, bite-sized courses. It addresses the critical impact of financial stress on health and productivity, offering practical knowledge and tools to improve financial literacy and confidence. By empowering employees with better money management skills, Learn contributes to a healthier, more focused, and engaged workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/EXuYFYCFAbA?si=JH-GqYwDLlVnCOJo"
              title="Learn Overview"
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Learn is Useful & What it Does</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Learn platform offers significant advantages for both employees seeking financial stability and employers aiming to cultivate a resilient workforce.
            </p>
            <p>
              Onesto's Learn platform helps your team move towards financial control.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Empowers Employees Financially</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Provides accessible education on budgeting, saving, and investing, helping employees make informed financial decisions and reduce stress.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Boosts Productivity & Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  By alleviating financial worries, employees can concentrate better on their work, leading to increased productivity and engagement.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Enhances Employee Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Demonstrates a commitment to employee well-being, making your company a more attractive and supportive workplace, thus improving retention.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Flexible & Accessible Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Bite-sized courses available anytime, anywhere, ensuring employees can learn at their own pace and convenience.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Customizable Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Ability to include tailored courses for specific user groups, industries, or disciplines, making the learning highly relevant.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Reduces Absenteeism</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Addressing financial stress can lead to improved physical and mental health, reducing stress-related absenteeism and presenteeism.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bring Your Own Content Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-8 lg:grid-cols-2 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <UploadCloud className="w-32 h-32 text-primary" />
              </motion.div>
            </div>
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bring Your Own Content</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We allow employers to bring their own content that may be used as part of onboarding, training, or sharing company policy related training/courses.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Empower Your Employees with Financial Knowledge?
            </h2>
            <p className="text-lg text-gray-600">
              Discover how Onesto's Learn platform can transform your workplace and support your team's financial well-being.
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
