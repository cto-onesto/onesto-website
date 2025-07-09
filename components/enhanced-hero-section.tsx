"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function EnhancedHeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-24 lg:pt-32">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-animate opacity-10"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center space-x-2 glass-primary rounded-full px-4 py-2 text-sm font-medium text-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="h-4 w-4" />
                <span>Transform Your Workplace Today</span>
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <motion.span
                  className="text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Benefits
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  To{" "}
                </motion.span>
                <motion.span
                  className="text-accent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Support Your People
                </motion.span>
              </h1>

              <motion.p
                className="text-lg text-gray-600 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Transform your <span className="text-[#5421A7] font-bold">employee, member or volunteer </span> experience to attract and retain talent to delivery productive and healthy
                teams.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 glow-primary rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Link href="/contact">
                    Contact
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass-accent border-accent/30 text-accent hover:bg-accent/10 rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                >
                  <Link href="/how-it-works">
                    <Play className="mr-2 h-5 w-5" />
                    See How It Works
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="https://play.google.com/store/apps/details?id=com.onesto&pli=1" className="inline-block rounded-2xl p-2 hover-lift">
                  <Image
                    src="gplay.png"
                    alt="Download on Google Play Store"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="https://apps.apple.com/au/app/onesto/id1582583482" className="inline-block rounded-2xl p-2 hover-lift">
                  <Image
                    src="appstore.png"
                    alt="Download on App Store"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glowing background effects */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />

              <motion.div
                className="absolute -inset-4 bg-accent/30 rounded-full blur-2xl"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />

              <Image
                src="hero.png"
                alt="Onesto platform dashboard showing employee benefits and philanthropic programs interface with real-time analytics and engagement metrics"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
                priority
              />

              {/* Floating UI elements */}
              <motion.div
                className="absolute -top-8 -right-8 sm:-top-4 sm:-right-4 z-20 glass-primary rounded-2xl p-4 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">Automated Rewards</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 sm:-bottom-4 sm:-left-4 z-20 glass-accent rounded-2xl p-4 shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-accent">Improved Retention</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
