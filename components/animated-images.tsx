"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  { src: "/hero.png", alt: "Onesto App" },
  { src: "/cta-app.png", alt: "Onesto App" },
  { src: "/Girl-holding-phone-in-apron.png", alt: "Onesto App" },
  { src: "/wages-hero-lady.png", alt: "Onesto App" },
  { src: "/shop-to-save-hero.png", alt: "Onesto App" },
]

export function AnimatedImages() {
  return (
    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-20, 20] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
      >
        <div className="relative">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            width={176}
            height={264}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [20, -20] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
      >
        <div className="relative">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            width={176}
            height={264}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="relative">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            width={176}
            height={264}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-20, 20] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-44 flex-none space-y-8 pt-32 sm:pt-0"
      >
        <div className="relative">
          <Image
            src={images[3].src}
            alt={images[3].alt}
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            width={176}
            height={264}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="relative">
          <Image
            src={images[4].src}
            alt={images[4].alt}
            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            width={176}
            height={264}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </motion.div>
    </div>
  )
}
