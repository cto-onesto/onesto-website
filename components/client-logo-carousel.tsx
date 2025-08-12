"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

interface ClientLogoCarouselProps {
  logos: string[]
}

export function ClientLogoCarousel({ logos }: ClientLogoCarouselProps) {
  const [isHovered, setIsHovered] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (carouselRef.current && !isHovered) {
          carouselRef.current.scrollLeft += 1 // Adjust scroll speed as needed
          if (
            carouselRef.current.scrollLeft >=
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth
          ) {
            carouselRef.current.scrollLeft = 0 // Loop back to start
          }
        }
      }, 10) // Scroll every 10ms for smooth animation, effectively 1px every 10ms
    }

    startScrolling()

    return () => clearInterval(scrollInterval)
  }, [isHovered])

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
          Businesses Trust Onesto
        </h2>
        <p className="text-center text-lg text-gray-600 mt-4 mb-12">
          Used by employers big, small, and enterprises.
        </p>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide space-x-8 py-8 items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ scrollBehavior: "smooth" }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-40 h-20 relative">
              <Image
                src={`/logos/${logo}`}
                alt={logo.split(".")[0].replace(/-/g, " ") + " logo"}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
          {/* Duplicate logos to create a seamless loop effect */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 w-40 h-20 relative">
              <Image
                src={`/logos/${logo}`}
                alt={logo.split(".")[0].replace(/-/g, " ") + " logo"}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}