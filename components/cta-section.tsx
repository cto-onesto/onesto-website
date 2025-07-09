"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-primary to-primary/80">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your Employee Experience?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of companies that are already using Onesto to attract top talent, increase employee
            engagement, and make a positive social impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
