import type { Metadata } from "next"
import { HubspotContactForm } from "@/components/hubspot-contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Get Started with Employee Benefits | Onesto",
  description:
    "Contact Onesto to learn how our employee benefits and philanthropic platform can transform your workplace. Schedule a demo or speak with our experts today.",
  keywords: [
    "contact Onesto",
    "employee benefits consultation",
    "schedule demo",
    "HR solutions contact",
    "workplace benefits inquiry",
    "philanthropic programs consultation",
  ],
}

export default function ContactPage() {
  return (
    <section className="container py-12 sm:py-20">
      <div className="container px-4 py-16 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Get Started with Onesto</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your employee experience? Contact our team to learn how Onesto can help you attract top
              talent and make a positive social impact.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Contact Information</CardTitle>
                  <CardDescription>Get in touch with our team of experts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">aussupport@onesto.co</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>


                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Office</h3>
                      <p className="text-gray-600">
                        60 Toorak Rd
                        <br />
                        Suite 1
                        <br />
                        South Yarra VIC 3141
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-primary/80 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Schedule a Demo</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    See Onesto in action with a personalized demonstration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-primary-foreground/90">
                    <li>• 30-minute personalized demo</li>
                    <li>• See how Onesto fits your company</li>
                    <li>• Q&A with our experts</li>
                    <li>• Custom pricing discussion</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <HubspotContactForm />
          </div>
        </div>

      </div>
    </section>
  )
}
