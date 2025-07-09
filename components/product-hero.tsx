"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProductHeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function ProductHero({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-black opacity-70"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg font-semibold text-white">{subtitle}</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-lg text-white">
              {description}
            </p>
            <Button size="lg" asChild>
              <a href={buttonLink}>
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
          {/* Image will be added outside this component */}
        </div>
      </div>
    </section>
  )
}
