"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Lock, Server, Building } from "lucide-react"

const pillars = [
  {
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    title: "Compliance",
    description:
      "Onesto is ISO 27001 certified and has maintained this certification since our inception. We adhere to the Australian Privacy Act and are committed to the highest standards of data protection.",
  },
  {
    icon: <Lock className="h-12 w-12 text-primary" />,
    title: "Application Security",
    description:
      "Our application is built with security at its core. We regularly perform penetration testing and vulnerability scans to ensure your data is always protected.",
  },
  {
    icon: <Server className="h-12 w-12 text-primary" />,
    title: "Infrastructure Security",
    description:
      "We leverage secure cloud infrastructure to protect your data. Our systems are monitored 24/7, and we have robust incident response and disaster recovery plans in place.",
  },
  {
    icon: <Building className="h-12 w-12 text-primary" />,
    title: "Corporate Security",
    description:
      "We have strict internal security policies and procedures. All employees undergo background checks and receive regular security training to ensure a secure environment.",
  },
]

export function SecurityPillars() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {pillars.map((pillar, index) => (
        <motion.div
          key={pillar.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="p-8 border rounded-lg text-center"
        >
          <div className="flex justify-center mb-6">{pillar.icon}</div>
          <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
          <p className="text-gray-600">{pillar.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
