"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Zap, BarChart, Shield, Users, HelpCircle, ArrowRight, Gift, Handshake, PiggyBank, CreditCard, ShoppingBag, TrendingUp, Clock, Eye, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" },
};

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`py-24 sm:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
};

const ForCharitiesPage = () => {
  return (
    <div className="bg-transparent text-gray-800">
      {/* Hero Section */}
      <Section className="bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Empower Your Cause with <span className="text-primary">One Philanthropic</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-3xl mx-auto text-xl text-gray-600"
          >
            Discover how 'One' helps philanthropic organizations effortlessly increase donations, reduce fees, and earn cashback, maximizing every contribution for greater impact.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center gap-x-6"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">Partner with Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 transition-all duration-300">
              <Link href="#how-it-works">Explore Features <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* What We Provide Section */}
      <Section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900">
            What <span className="text-primary">One Philanthropic</span> Delivers
          </motion.h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Innovative tools designed to simplify giving and amplify your impact.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="flex justify-center mb-6">
                <Handshake className="h-16 w-16 text-primary animate-pulse" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Intuitive Member App</h3>
              <p className="text-gray-700">A seamless mobile application empowering your community to build personal savings and contribute to your cause simultaneously, effortlessly.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="bg-transparent p-8 rounded-lg border border-gray-200 flex flex-col items-center text-center"
            >
              <div className="flex justify-center mb-6">
                <BarChart className="h-16 w-16 text-primary animate-pulse" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Transparent Donation Dashboard</h3>
              <p className="text-gray-700">Gain real-time insights into your fundraising progress with a comprehensive dashboard, showcasing donation distributions and overall impact.</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Our Mission Section */}
      <Section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-base font-semibold leading-7 text-primary">Our Core Purpose</h2>
              <p className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                Our Mission: <span className="text-primary">Impact Without Burden</span>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 leading-relaxed">
                To significantly boost donations for philanthropic organizations without adding financial strain or time commitment for your dedicated donors. We believe in making giving effortless and impactful.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8 md:mt-0 relative">
              <Image
                src="/appreciate.svg" // Placeholder image for mission
                alt="Our Mission - Impact Without Burden"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-lg text-sm shadow-md"
              >
                <Handshake className="inline-block h-4 w-4 mr-2" /> Empowering Philanthropy
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* How One Philanthropic Works Section */}
      <div id="how-it-works" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-primary">The Mechanics of Giving</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    How <span className="text-primary">One Philanthropic</span> Transforms Support
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    The One app fosters a powerful partnership between your Non-Profit Organization and its entire community: members, benefactors, volunteers, and the families you serve.
                </p>
            </div>
        </div>
        
        {/* Feature 1: Effortless Contributions */}
        <Section className="py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Effortless Contributions for Busy Lives</h3>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            In today's fast-paced world, traditional fundraising methods often demand significant time and effort, leading to donor fatigue. The One app revolutionizes this by enabling your community to contribute without extra time or financial sacrifice, moving beyond outdated raffles and fetes.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="mt-8 md:mt-0 relative">
                        <Image
                            src="/cta-app.png" // Placeholder image
                            alt="People engaging with the One app"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                          className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-lg text-sm shadow-md"
                        >
                          <Zap className="inline-block h-4 w-4 mr-2" /> Simplified Giving
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Section>

        {/* Feature 2: Contribute Substantially */}
        <Section className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div variants={itemVariants} className="mt-8 md:mt-0 md:order-last">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Contribute Substantially, Without Sacrifice</h3>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            The One app redefines charitable giving. It empowers your members to make significant contributions to your cause without having to dedicate precious spare time or money they cannot afford to lose. True impact, made easy.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="relative">
                        <Image
                            src="/individual-hero.png" // Placeholder image
                            alt="One app interface showing contributions"
                            width={600}
                            height={400}
                            className="rounded-xl transform hover:scale-105 transition-transform duration-500"
                        />
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                          className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-lg text-sm shadow-md"
                        >
                          <DollarSign className="inline-block h-4 w-4 mr-2" /> Maximize Impact
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Section>
      </div>

      {/* Saving and Donating Naturally Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900">
              Saving & Donating <span className="text-primary">Naturally</span> with One Philanthropic
            </motion.h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Turn everyday spending into powerful support for your cause.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-10 w-10 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Shop & Save</h3>
              </div>
              <p className="text-gray-700">Your NFP Community Members simply use One to shop at over 300 essential retailers & restaurants, just as they normally would.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="flex items-center mb-4">
                <PiggyBank className="h-10 w-10 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Automatic Donations</h3>
              </div>
              <p className="text-gray-700">Members accrue savings of up to 9% with every purchase, and a generous 1% of the purchase price is automatically donated to your NFP's account.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="flex items-center mb-4">
                <TrendingUp className="h-10 w-10 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Visible Progress</h3>
              </div>
              <p className="text-gray-700">A dynamic thermometer within your organization's dashboard visually tracks how much has been raised, fostering collective excitement and engagement.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="flex items-center mb-4">
                <Clock className="h-10 w-10 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Continuous Funding</h3>
              </div>
              <p className="text-gray-700">Funds accumulate consistently throughout the year, providing a stable and predictable revenue stream, unlike intermittent fundraising events.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="flex items-center mb-4">
                <Users className="h-10 w-10 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Zero Burden on Volunteers</h3>
              </div>
              <p className="text-gray-700">Fundraising becomes truly effortless, requiring no additional time or financial sacrifice from your invaluable benefactors and volunteers.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="bg-transparent p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center"
            >
              <div className="flex items-center mb-4">
                <Eye className="h-10 w-10 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Witness the Transformation</h3>
              </div>
              <p className="text-gray-700">Members directly observe how their small, consistent savings translate into significant, positive change for your community.</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Tailored Automated Giftcards Section */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="bg-transparent rounded-2xl p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center bg-primary-light text-primary rounded-full p-3 mb-6 shadow-md">
                    <CreditCard className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">Instant Impact: <span className="text-primary">Automated Gift Cards</span> for Those in Need</h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  With the One Dashboard, your NFP staff can effortlessly deliver digital gift cards directly to recipients via email or their app. It's a fast, secure, and impactful way to provide immediate support.
                </p>
                <p className="mt-4 text-lg text-gray-600 font-semibold">
                  Plus, your NFP earns up to <span className="text-primary">10% cashback</span> from every gift card purchase, further boosting your funds!
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="mt-8 md:mt-0 relative">
                <Image
                  src="/donations-view.webp" // Placeholder image
                  alt="Digital gift cards being sent and received"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Solve Fundraising Section */}
      <Section>
        <div className="container mx-auto px-6 text-center">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900">
            Revolutionize Your Fundraising with <span className="text-primary">Onesto's Philanthropic Benefits</span>
          </motion.h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Experience a new era of charitable giving that's simple, sustainable, and impactful.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-12 w-12 text-primary animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Donate Effortlessly</h3>
              <p className="text-gray-700">Empower your community to contribute without traditional fundraising burdens.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="flex justify-center mb-6">
                <PiggyBank className="h-12 w-12 text-primary animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Save Naturally</h3>
              <p className="text-gray-700">Integrate giving into everyday spending, making contributions a natural part of life.</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
              className="bg-transparent p-8 rounded-lg border border-gray-200 flex flex-col items-center text-center"
            >
              <div className="flex justify-center mb-6">
                <Shield className="h-12 w-12 text-primary animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Hidden Costs</h3>
              <p className="text-gray-700">Transparent and straightforward, ensuring more of every donation goes directly to your cause.</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <div className="container mx-auto px-6 text-center py-16">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Ready to Amplify Your Impact?
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 max-w-2xl mx-auto text-xl opacity-90">
            Discover how Onesto's Philanthropic benefits can transform your fundraising efforts and empower your mission.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ForCharitiesPage;