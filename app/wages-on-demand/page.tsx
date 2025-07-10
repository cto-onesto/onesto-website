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
                <span>Wages on Demand</span>
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-white">Flexible Wages</span>
              </h1>

              <p className="text-lg text-white max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Early Wage Access or as Onesto refers to it “Flexible Wages” is a voluntary benefit that allows employees to access their earned wages ahead of the regular payday. Companies that use on-demand pay can improve retention, employee engagement, and fill roles faster.
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
                src="/cta-app.png"
                alt="Wages Hero Image"
                className="w-full pb-2 max-w-sm h-auto rounded-lg object-cover"
              />
            </div>


          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-10 lg:py-16">
        <div className="container px-4 md:px-6 pb-8">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How does it work?</h2>

            <div className="mt-12 lg:mt-0 flex flex-col lg:flex-row justify-around items-center gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl font-bold text-gray-900">
                  <span className="text-[#5421A7]">79%</span>
                </div>
                <p className="text-lg text-gray-600">Will switch jobs to get EWA</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl font-bold text-gray-900">
                  <span className="text-[#5421A7]">89%</span>
                </div>
                <p className="text-lg text-gray-600">Will stay longer if offering EWA</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl font-bold text-gray-900">
                  <span className="text-[#5421A7]">95%</span>
                </div>
                <p className="text-lg text-gray-600">Want access to their wages</p>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Onesto's Flexible Wages service empowers employees with immediate access to their earned but unpaid wages, offering a crucial financial safety net. This innovative solution helps reduce financial stress, improve employee retention, and boost overall engagement by providing liquidity when it's needed most, without the burden of loans or interest.
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
              src="https://www.youtube.com/embed/KylV5LeG_XY?si=YMIqBPk9ydtDTEa2"
              title="Wages On Demand Overview"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-accent">9 of 10 employees want EWA</h2>
            <p className="text-gray-300 italic">Reference: Visa’s research on the impact of Earned Wage Access</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Early Wage Access is a benefit to the company but also to the staff who need it. More than half of workers in Australia live paycheck to paycheck. Inevitably, they have unexpected expenses that arise or emergencies to cover. Access to their earned but unpaid wages provides them a safety net in such situations, and helps avoid the need for an expensive short-term loan. Employees who feel financially secure are more satisfied with their jobs and less likely to leave for another opportunity. Early Wage Access benefits employers and employees.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Reduces Financial Stress</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Provides employees with immediate access to funds, helping them manage unexpected expenses without resorting to high-interest loans.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Boosts Employee Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  A highly desired benefit, Flexible Wages increases employee loyalty and reduces turnover, making your company a more attractive employer.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Enhances Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  By alleviating financial worries, employees can focus better on their work, leading to improved concentration and productivity.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Zero Cost to Employer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Onesto fronts the wages, and repayment is handled seamlessly through payroll, ensuring no financial burden or administrative overhead for the employer.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Simple & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Employees can access their funds instantly through a secure platform with a transparent, single transaction fee.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="glass-card border-0 rounded-3xl hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Attracts Top Talent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Offering flexible wages positions your company as a forward-thinking employer, attracting and securing high-quality candidates.
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefits to Employers</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The “Great Resignation” is real and we are all aware of the implications it has for employers on their ability to retain and employ. Companies of all sizes and industries are seeking ways to increase retention and accelerate hiring during a severe and unforeseen labor shortage.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At face value, wages on demand pay may seem like a benefit designed only to better the lives of employees. However, it also provides a unique opportunity for companies to improve their retention rates while making it easier to hire new employees.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Wages on Demand can help employees cover unexpected costs, avoid financial stress, and make ends meet during times of need. In turn, this can lead to increased employee satisfaction and loyalty, both of which are critical for retention. For companies facing the Great Resignation, on-demand pay may be the key to weathering the storm.
            </p>
          </div>
        </div>
      </section>

      {/* The EY Study Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            {/* <Link href="https://www.ey.com/en_au/workforce/wages-on-demand" target="_blank" rel="noopener noreferrer"> */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The EY Study</h2>
            {/* </Link> */}
            <img src="/ey-logo.png" alt="EY Logo" className="h-12 mx-auto" />
            <p className="text-lg text-gray-600 leading-relaxed">
              A study by EY shows that Wages on Demand can help employees better align their income and expenses. The study found that employees who have access to Wages on Demand are more likely to be able to meet their financial obligations, and less likely to miss payments or incur late fees.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              In addition, the study found that Wages on Demand can help employees avoid going into debt, as they are only accessing a portion of their accrued wages, and not borrowing money. Wages on Demand is an emerging trend in the workplace, and the EY study shows that it has the potential to provide significant benefits for employees.
            </p>
          </div>
          <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-16">
            <AnimatedStatistic to={72} text="of individuals experience financial stress at least once a year" />
            <AnimatedStatistic to={56} text="of individuals expenses were due before pay day" />
            <AnimatedStatistic to={76} text="of individuals report major impacts on life and well-being as a result of financial goals" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Empower Your Employees with Financial Flexibility?
            </h2>
            <p className="text-lg text-gray-600">
              Discover how Onesto's Flexible Wages can transform your workplace and support your team.
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
