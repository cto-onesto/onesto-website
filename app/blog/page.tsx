'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import blogPosts from '@/lib/blog-posts.json';

export default function BlogPage() {
  console.log("POST", blogPosts[0])
  return (
    <section className="container py-12 sm:py-20">
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <div className="container px-4 py-12 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                From the Onesto Blog
              </h1>
              <p className="mt-3 text-lg text-muted-foreground sm:mt-4">
                Insights and stories from the team building the future of work.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * post.id }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-56 w-full object-cover"
                      />
                      <div className="p-6">
                        <p className="text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                        <h2 className="mt-2 text-xl font-semibold">
                          {post.title}
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center">
                          <p className="text-sm font-medium text-primary">
                            Read more
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}