import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Employee Benefits & HR Insights | Onesto",
  description:
    "Stay updated with the latest insights on employee benefits, HR trends, philanthropic programs, and workplace wellness strategies from Onesto experts.",
  keywords: [
    "employee benefits blog",
    "HR insights",
    "workplace wellness",
    "philanthropic programs",
    "employee engagement",
    "talent retention",
    "corporate social responsibility",
    "HR best practices",
  ],
}

// This would typically come from your PostgreSQL database
const blogPosts: any = [
]

export default function BlogPage() {
  return (
    <section className="container py-12 sm:py-20">
      <div className="container px-4 py-16 md:px-6">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Employee Benefits & HR Insights
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights on employee benefits, workplace wellness, and philanthropic programs
              from our team of experts.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold leading-tight hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
