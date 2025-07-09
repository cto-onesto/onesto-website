"use client"

import type { Metadata } from "next"
import { ProductHero } from "@/components/product-hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { motion, animate } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play, Sparkles, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

function AnimatedStatistic({ to, text }: { to: number; text: string }) {
  const countRef = useRef<HTMLSpanElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const countNode = countRef.current
    const progressNode = progressRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(0, to, {
            duration: 2,
            onUpdate(latest) {
              if (countNode) {
                countNode.textContent = `${Math.round(latest)}%`
              }
              if (progressNode) {
                progressNode.style.width = `${latest}%`
              }
            },
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (countNode) {
      observer.observe(countNode)
    }

    return () => observer.disconnect()
  }, [to])

  return (
    <div className="flex flex-col items-center text-center w-full max-w-xs">
      <div className="text-5xl font-bold text-gray-900">
        <span ref={countRef} className="text-[#5421A7]">0%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div ref={progressRef} className="bg-[#5421A7] h-2.5 rounded-full" style={{ width: '0%' }}></div>
      </div>
      <p className="text-lg text-gray-600 mt-2">{text}</p>
    </div>
  )
}

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
                <span>Employee Recognition</span>
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-white">Rewards & Recognition</span>
              </h1>

              <p className="text-lg text-white max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Onesto's 'Rewards & Recognition' platform digitizes the process of creating and distributing employee awards. This saves administrative time and resources by eliminating the need for manual purchasing and postage.
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
            <div className="relative mt-12 lg:mt-0 flex justify-center">
              <img
                src="Girl-holding-phone-in-apron.png"
                alt="Rewards Hero Image"
                className="h-full pb-2 w-auto rounded-lg object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
            </div>


          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-10 lg:py-16">
        <div className="container px-4 md:px-6 pb-8">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How does it work?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Onesto's Rewards & Recognition platform streamlines the entire process of employee appreciation, from creating custom awards to seamless distribution. It eliminates manual administrative tasks, saving time and resources for HR teams. By offering a diverse range of customizable awards, including monetary, internal, and gift cards redeemable at over 80 major retailers, the platform empowers companies to foster a culture of recognition, boost morale, and enhance employee loyalty.
            </p>

            <div className="pt-6 lg:mt-0">
              <img
                src="award-flow.png"
                alt="Rewards Creation Flow"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/i_CVfxme9iU?si=Xxc2RCPCnuaCYw8d"
              title="Rewards & Recognition Overview"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-accent">Allow regional, store or line managers to send instant awards to their teams</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Awards can be monetary awards, internally redeemable items, or gift cards. These can be set up at Head Office and are instantly available to managers who have been granted access to the platform. All awards dispensed are logged into reports on who dispensed and received awards, when they were created, and if they have been redeemed.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Boosts Employee Morale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Recognizing and rewarding employees for their contributions significantly increases job satisfaction and overall morale.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Simplifies Administration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Digitizes the entire awards process, eliminating manual tasks, reducing administrative burden, and saving valuable HR time and resources.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Enhances Talent Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  A strong recognition program makes employees feel valued, leading to increased loyalty and reduced turnover rates.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Customizable & Flexible</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Offers a wide range of customizable award types (monetary, internal, gift cards) and branding options to fit any company culture.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Wide Redemption Options</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Recipients can redeem awards at over 80 major retailers, providing flexibility and real value.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Fosters Positive Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Regular recognition builds a positive and appreciative workplace culture, encouraging continued high performance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits to Employers Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Awards distributed and redeemed digitally</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            All awards sent through the Rewards & Recognition platform are digital, removing the need for manual purchasing and postage.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
             The monetary and administrative savings, amount to tens of thousands of dollars a year in large organisations. Further, the environmental benefits of reduced resource use is a key to the CSR benefits of the platform.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              And recipients can choose to redeem awards at any of  the 80+ major retailers within Onesto’s retail partners.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Elevate Your Employee Recognition Program?
            </h2>
            <p className="text-lg text-gray-600">
             Discover how Onesto's Rewards & Recognition platform can transform your workplace culture.
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
