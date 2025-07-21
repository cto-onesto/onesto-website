"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Zap, BarChart, Shield, Users, HelpCircle, ArrowRight, Gift } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

const faqs = [
  {
    question: "How does Onesto improve employee retention?",
    answer:
      "Onesto provides tangible benefits like Wages on Demand and financial education that reduce financial stress—a major reason employees leave. By showing you care for their financial wellbeing, you build loyalty and create a more stable, engaged workforce.",
  },
  {
    question: "Is Onesto difficult to set up?",
    answer:
      "Not at all. Onesto is designed for seamless integration with your existing payroll and HR systems. Our team provides full support during the quick setup process, ensuring a smooth rollout with minimal effort required from your side.",
  },
  {
    question: "What kind of ROI can we expect?",
    answer:
      "Companies using Onesto report significant ROI through reduced employee turnover, lower recruitment costs, and increased productivity. Financially stable employees are more focused and motivated, directly impacting your bottom line.",
  },
  {
      question: "How does Onesto's platform benefit our company's brand?",
      answer:
        "Offering a leading financial wellness platform like Onesto positions your brand as a modern, caring employer. This enhances your reputation, helps attract top talent, and makes your company a more desirable place to work.",
    },
];

const ForCompaniesPage = () => {
  return (
    <div className="bg-transparent text-gray-800">
      {/* Hero Section */}
      <Section className="bg-transparent">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900"
          >
            Empower Your Team.
            <br />
            <span className="text-primary">Elevate Your Business.</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"
          >
            Onesto is the financial wellness platform that gives your employees the tools they need to thrive, fueling productivity and loyalty that drives your business forward.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center gap-x-6"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#benefits">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Video Section */}
      <Section>
        <div className="container mx-auto px-6">
          <motion.div
            variants={itemVariants}
            className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-900"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/klnkxn2rsPM?si=HJ8jw4x17JSQ__TD"
              title="Onesto for Companies"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </Section>

      {/* Re-worked Benefits Section */}
      <div id="benefits" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-primary">The Onesto Advantage</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    The All-in-One Platform to Win at Work
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Onesto is more than a benefit; it's a business strategy. Attract the best talent, keep them longer, and unlock their full potential.
                </p>
            </div>
        </div>
        
        {/* Feature 1: Retention */}
        <Section className="py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-gray-900">Drastically Improve Employee Retention</h3>
                        <p className="mt-4 text-lg text-gray-600">
                            Financial stress is a leading cause of employee turnover. Onesto provides instant access to earned wages, savings tools, and financial education that empowers your team to take control of their finances. The result? A more loyal, stable, and engaged workforce.
                        </p>
                        <Button asChild size="lg" variant="link" className="px-0 mt-4">
                            <Link href="/contact">Request a Demo <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </motion.div>
                    <motion.div variants={itemVariants} className="mt-8 md:mt-0">
                        <Image
                            src="/appreciate.svg"
                            alt="Happy employee"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </Section>

        {/* Feature 2: Recruitment */}
        <Section className="py-16 sm:py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants} className="mt-8 md:mt-0 md:order-last">
                        <h3 className="text-2xl font-bold text-gray-900">Become the Employer of Choice</h3>
                        <p className="mt-4 text-lg text-gray-600">
                            In a competitive job market, top talent expects more. Offering a comprehensive financial wellness benefit like Onesto sets you apart. Show candidates you're a modern, caring employer who invests in their team's long-term wellbeing and attract the best people.
                        </p>
                         <Button asChild size="lg" variant="link" className="px-0 mt-4">
                            <Link href="/contact">Attract Top Talent <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Image
                            src="/pers-zation.svg"
                            alt="Onesto app on a phone"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </Section>

        {/* Feature 3: Productivity */}
        <Section className="py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-gray-900">Boost Productivity & Engagement</h3>
                        <p className="mt-4 text-lg text-gray-600">
                            A financially stressed employee can lose nearly a full day of productivity per week. By alleviating that burden, Onesto helps your team stay focused, present, and motivated at work. Unlock the full potential of your workforce.
                        </p>
                         <Button asChild size="lg" variant="link" className="px-0 mt-4">
                            <Link href="/contact">See the Impact <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </motion.div>
                    <motion.div variants={itemVariants} className="mt-8 md:mt-0">
                        <Image
                            src="/productive.svg"
                            alt="Productive team"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </Section>
      </div>

      {/* How It Works Section */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">Simple to Launch, Powerful to Have</motion.h2>
            <motion.p variants={itemVariants} className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Getting started with Onesto is a seamless experience.
            </motion.p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" aria-hidden="true"></div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { title: "1. Quick Setup", text: "We connect with your existing payroll system in minutes. No complex integration needed." },
                { title: "2. Easy Onboarding", text: "Your team gets access to the Onesto app with a simple, guided sign-up process." },
                { title: "3. Instant Access", text: "Employees can immediately use features like Wages on Demand, savings tools, and more." },
                { title: "4. Actionable Insights", text: "You receive anonymized data on workforce financial health to inform your HR strategy." },
              ].map((step, i) => (
                <motion.div key={i} variants={itemVariants} className={`flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:text-right'}`}>
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                    {step.title.split('.')[0]}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Rewards and Recognition Section */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="bg-transparent rounded-2xl p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center bg-primary-light text-primary rounded-full p-2 mb-4">
                    <Gift className="h-6 w-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Rewards and Recognition</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Employees who receive recognition are 5x more likely to be engaged at work and 45% less likely to leave. Show your team appreciation that resonates—with the click of a button. Onesto makes recognition easy, fast and meaningful.
                </p>
                <p className="mt-2 text-sm text-gray-500 italic">Source: Gallup, 2024</p>
              </motion.div>
              <motion.div variants={itemVariants} className="mt-8 md:mt-0">
                <Image
                  src="/award-flow.png"
                  alt="Rewards and Recognition flow"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</motion.h2>
            <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600">
              Have questions? We have answers.
            </motion.p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants}>
                <details className="group bg-transparent p-6 rounded-lg cursor-pointer">
                  <summary className="flex justify-between items-center font-semibold text-lg">
                    {faq.question}
                    <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-gray-700">
                    {faq.answer}
                  </p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="container mx-auto px-6">
          <div className="bg-[#2b0f58] text-white rounded-2xl p-12 text-center">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">Ready to See the Difference?</motion.h2>
            <motion.p variants={itemVariants} className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
              Schedule a free, no-obligation demo to see how Onesto can transform your workplace.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/contact">Book a Demo Today</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ForCompaniesPage;
