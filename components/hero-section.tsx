import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="text-accent">Employee Benefits</span> &{" "}
                <span className="text-accent">Philanthropic Benefits</span> To{" "}
                <span className="text-primary">Support Your People</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Transform your employee experience to attract and retain talent to delivery productive and healthy
                employees and revolutionise your fund-raising efforts whilst overcoming donor fatigue & volunteer
                fatigue.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">
                  Contact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white border-accent"
              >
                <Link href="/how-it-works">
                  <Play className="mr-2 h-4 w-4" />
                  See How It Works
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#" className="inline-block">
                <Image
                  src="/placeholder.svg?height=60&width=180"
                  alt="Download on Google Play Store"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="#" className="inline-block">
                <Image
                  src="/placeholder.svg?height=60&width=180"
                  alt="Download on App Store"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-4">
                <Image
                  src="/images/hero-dashboard.png"
                  alt="Onesto platform dashboard showing employee benefits and philanthropic programs interface"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
