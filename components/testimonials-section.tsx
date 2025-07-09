"use client"

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import React from "react"

const testimonials = [
  {
    name: "Michael Abela",
    role: "CEO",
    company: "TheirCare",
    content:
      "A controlled trial of our employees was conducted over a 12-month period; those who didn’t embrace the Onesto solution turned over at a rate of 20%, those who used it at least once turned over at a rate of 12% and those employees that used the Onesto app >20 times turned over at a rate of 5%. This reduction in turnover amounted to hundreds of thousands of dollars in cost savings associated with job ads, interviews, training, and uniforms, and this is before we calculate the cost of lost productivity and the potential for decline in customer satisfaction.",
    rating: 5,
    imageUrl: "testimonials/michael.png",
  },
  {
    name: "Ali Sherhan",
    role: "CEO",
    company: "Emali Childcare",
    content:
      "Employees are leaving the childcare sector in droves because of a tight labour market and competitive salaries. Onesto has played a key part for Emali in being able to attract and retain the right talent. Our high levels of employee activation proved to us that Onesto is a valuable and important employee benefit.",
    rating: 5,
    imageUrl: "testimonials/ali.png",
  },
  {
    name: "Clark Kirby",
    role: "CEO",
    company: "Village Roadshow",
    content:
      "Onesto has been the single best employee benefit introduced at Village Roadshow of all times. We attribute its success and high levels of engagement as our employees appreciate the flexibility and instant cashback benefits it offers. From our most recent survey, 89% of our employees stated that Onesto helped reduce their financial stress, this is a very important accomplishment particularly in an environment where the cost-of-living crisis is placing undue pressure on our employees.",
    rating: 5,
    imageUrl: "testimonials/clark.png",
  },
  {
    name: "Peter Angelini",
    role: "CEO",
    company: "Stannards",
    content:
      "By offering Onesto to differentiate our offering versus our competitors, it has helped Stannards receive a constant stream of high calibre graduates and employees. Our employees are highly educated and financially responsible and Onesto has enabled them to save naturally without sacrifice.",
    rating: 5,
    imageUrl: "testimonials/peter.png",
  },
  {
    name: "Glenn McDermott",
    role: "EVP Manager",
    company: "Bapcor",
    content:
      "Having benefits that our diverse workforce will enjoy is very a real challenge. With Onesto we tick that box. Saving on everyday purchases that are the essentials of lives helps our team to drive their dollar further and ‘get paid’ to purchase the essentials",
    rating: 5,
    imageUrl: "testimonials/glenn.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how companies are transforming their employee experience and social impact with Onesto.
          </p>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full border-4 border-white shadow-md"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardContent className="p-0 flex-grow">
                    <CardDescription className="text-gray-700 leading-relaxed">
                      {testimonial.content}
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
