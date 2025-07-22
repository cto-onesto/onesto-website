"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Users, TrendingUp, Heart, Shield, Gift, ArrowRight, CheckCircle, Star, Zap, Handshake, ShoppingCart, Banknote } from "lucide-react"

type Audience = "companies" | "individuals" | "charities"

const companyContent = {
  title: "Transform Your Workplace Culture",
  subtitle: "Comprehensive B2B Solutions for Modern Employers",
  description:
    "Attract top talent, boost employee engagement, and create lasting social impact with our integrated benefits platform designed for forward-thinking companies.",
  features: [
    {
      icon: Building2,
      title: "Enterprise-Grade Platform",
      description: "Scalable solution that grows with your organization, from startups to Fortune 500 companies.",
    },
    {
      icon: TrendingUp,
      title: "Talent Attraction & Retention",
      description: "Reduce turnover by 40% with benefits packages that demonstrate your company values.",
    },
    {
      icon: Users,
      title: "Employee Engagement Hub",
      description: "Centralized platform for all benefits, giving, and wellness programs with real-time analytics.",
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-level security with full compliance for all regulatory requirements.",
    },
  ],
  benefits: [
    "Reduce HR administrative burden by 60%",
    "Increase employee satisfaction scores",
    "Streamline benefits management",
    "Real-time impact reporting",
    "Custom branding and integration",
    "Dedicated customer success manager",
  ],
  cta: "Schedule Enterprise Demo",
}

const individualContent = {
  title: "Unlock Exclusive Savings & Rewards",
  subtitle: "One Member Benefits",
  description:
    "For just $6 per month, get cashback from 80+ top Australian retailers. On average, our members save enough for a full tank of petrol every few months. Top up with PayID and start saving today.",
  features: [
    {
      icon: ShoppingCart,
      title: "Cashback on Shopping",
      description: "Earn cashback at over 80+ top retailers and 100+ major restaurants across Australia.",
    },
    {
      icon: Gift,
      title: "Discounted Gift Cards",
      description: "Send gift cards to friends and family for any occasion, all with an exclusive member discount.",
    },
    {
      icon: Banknote,
      title: "Easy Top-Ups",
      description: "Conveniently top up your shopping and savings account anytime using PayID.",
    },
    {
      icon: Star,
      title: "Real Savings",
      description: "On average, members save enough for a full tank of petrol every few months.",
    },
  ],
  benefits: [
    "Access to 80+ top retailers",
    "Over 100 major restaurants",
    "Send discounted gift cards",
    "Simple $6 monthly membership",
    "Easy account top-ups with PayID",
    "Start saving immediately",
  ],
  cta: "Get Started Now",
}

const charityContent = {
  title: "Amplify Your Mission",
  subtitle: "Fundraising & Engagement Tools for Non-Profits",
  description:
    "Connect with a network of passionate donors and corporate partners. Our platform helps you streamline fundraising, manage campaigns, and showcase your impact.",
  features: [
    {
      icon: Handshake,
      title: "Corporate Partnerships",
      description: "Connect with companies looking to support causes like yours.",
    },
    {
      icon: Gift,
      title: "Effortless Donations",
      description: "Receive donations seamlessly through our platform with low transaction fees.",
    },
    {
      icon: TrendingUp,
      title: "Campaign Analytics",
      description: "Track your fundraising progress and donor engagement with powerful analytics.",
    },
    {
      icon: Star,
      title: "Showcase Your Impact",
      description: "Share stories and updates with your supporters to keep them engaged.",
    },
  ],
  benefits: [
    "Access a new network of corporate donors",
    "Simplify your donation process",
    "Increase recurring donations",
    "Gain insights into donor behavior",
    "Promote your events and campaigns",
    "Dedicated support for non-profits",
  ],
  cta: "Learn More About Partnering",
}

const contentMap = {
  companies: companyContent,
  individuals: individualContent,
  charities: charityContent,
}

export function AudienceToggle() {
  const [activeAudience, setActiveAudience] = useState<Audience>("companies")
  const content = contentMap[activeAudience]
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/for-companies") {
      setActiveAudience("companies")
    } else if (pathname === "/for-members") {
      setActiveAudience("individuals")
    } else if (pathname === "/for-charities") {
      setActiveAudience("charities")
    }
  }, [pathname])

  const handleAudienceChange = (audience: Audience) => {
    setActiveAudience(audience)
  }

  return (
    <section id="product" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Toggle Switch */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-full p-2 backdrop-blur-xl">
            <div className="flex relative">

              <button
                onClick={() => handleAudienceChange("companies")}
                className={`relative z-10 px-8 py-3 rounded-full transition-colors duration-200 ${activeAudience === "companies" ? "font-bold text-primary" : "font-medium text-gray-600 hover:text-primary"
                  }`}
              >
                For Companies
              </button>
              <button
                onClick={() => handleAudienceChange("individuals")}
                className={`relative z-10 px-8 py-3 rounded-full transition-colors duration-200 ${activeAudience === "individuals" ? "font-bold text-primary" : "font-medium text-gray-600 hover:text-primary"
                  }`}
              >
                For You
              </button>
              <button
                onClick={() => handleAudienceChange("charities")}
                className={`relative z-10 px-8 py-3 rounded-full transition-colors duration-200 ${activeAudience === "charities" ? "font-bold text-primary" : "font-medium text-gray-600 hover:text-primary"
                  }`}
              >
                For Charities
              </button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeAudience}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-16"
          >
            {/* Header Section */}
            <div className="text-center space-y-6">
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Badge
                  variant="secondary"
                  className={`mb-4 px-4 py-2 text-sm font-medium ${activeAudience === "companies"
                    ? "bg-primary/10 text-primary border-primary/20"
                    : activeAudience === "individuals"
                      ? "bg-accent/10 text-accent border-accent/20"
                      : "bg-green-500/10 text-green-500 border-green-500/20"
                    }`}
                >
                  {content.subtitle}
                </Badge>
              </motion.div>

              <motion.h2
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {content.title}
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {content.description}
              </motion.p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {content.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="glass-card border-0 rounded-3xl hover-lift group cursor-pointer h-full">
                    <CardContent className="p-8 text-center space-y-4">
                      <motion.div
                        className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${activeAudience === "companies"
                          ? "bg-primary/10 group-hover:bg-primary/20"
                          : activeAudience === "individuals"
                            ? "bg-accent/10 group-hover:bg-accent/20"
                            : "bg-green-500/10 group-hover:bg-green-500/20"
                          } transition-colors duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <feature.icon
                          className={`h-8 w-8 ${activeAudience === "companies"
                            ? "text-primary"
                            : activeAudience === "individuals"
                              ? "text-accent"
                              : "text-green-500"
                            }`}
                        />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Benefits Section */}
            <motion.div
              className="grid gap-12 lg:grid-cols-2 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {activeAudience === "companies"
                      ? "Why Companies Choose Onesto"
                      : activeAudience === "individuals"
                        ? "What You Get With Onesto"
                        : "Partner with Onesto"}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {activeAudience === "companies"
                      ? "Join hundreds of companies that trust Onesto to transform their employee experience."
                      : activeAudience === "individuals"
                        ? "Access comprehensive benefits and make a difference through your workplace."
                        : "Join our network of non-profits and connect with corporate partners."}
                  </p>
                </div>

                <div className="grid gap-4">
                  {content.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${activeAudience === "companies"
                          ? "bg-primary/10"
                          : activeAudience === "individuals"
                            ? "bg-accent/10"
                            : "bg-green-500/10"
                          }`}
                      >
                        <CheckCircle
                          className={`h-4 w-4 ${activeAudience === "companies"
                            ? "text-primary"
                            : activeAudience === "individuals"
                              ? "text-accent"
                              : "text-green-500"
                            }`}
                        />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className={`${activeAudience === "companies"
                      ? "bg-primary hover:bg-primary/90 glow-primary"
                      : activeAudience === "individuals"
                        ? "bg-accent hover:bg-accent/90 glow-accent"
                        : "bg-green-500 hover:bg-green-500/90 glow-green"
                      } text-white rounded-2xl px-8 py-6 text-lg font-semibold shadow-xl`}
                    onClick={() => {
                      switch (activeAudience) {
                        case "companies":
                          router.push("/for-companies")
                          break
                        case "individuals":
                          router.push("/for-members")
                          break
                        case "charities":
                          router.push("/for-charities")
                          break
                        default:
                          break
                      }
                    }}
                  >
                    {content.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="relative">
                  <div
                    className={`absolute -inset-4 rounded-3xl blur-2xl ${activeAudience === "companies"
                      ? "bg-primary/20"
                      : activeAudience === "individuals"
                        ? "bg-accent/20"
                        : "bg-green-500/20"
                      }`}
                  ></div>
                  <div className="relative rounded-3xl p-20">
                    <div className="aspect-video rounded-2xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="mt-12 lg:mt-0 flex justify-center">
                          <img
                            src={
                              activeAudience === "companies"
                                ? "/onesto-ewa.webp"
                                : activeAudience === "individuals"
                                  ? "/shop-onesto.webp"
                                  : "/donations-view.webp"
                            }
                            alt={`${content.title} preview`}
                            className="h-auto w-half rounded-2xl shadow-2xl fade-corners"
                          />
                          {/* <img
                        src="/shop-to-save-hero.png"
                        alt="Shop and Save"
                        className="w-half max-w-sm h-half rounded-lg object-cover"
                      /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
