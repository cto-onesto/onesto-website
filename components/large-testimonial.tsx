"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function LargeTestimonial() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Image
            src="/testimonials/petera2.png"
            alt="Peter"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-6"
          />
          <blockquote className="text-2xl font-semibold text-gray-900 leading-snug">
            “Onesto’s integration with Xero was unbelievably simple. We were up and running in minutes, and the impact on our team was immediate. It’s the most seamless and effective employee benefits platform we’ve ever used.”
          </blockquote>
          <p className="mt-6 text-lg font-medium text-gray-700">Peter</p>
          <p className="text-md text-gray-500">Small Business Owner</p>
        </motion.div>
      </div>
    </section>
  )
}
