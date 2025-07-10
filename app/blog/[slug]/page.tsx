import { notFound } from 'next/navigation';
import Image from 'next/image';
import blogPosts from '@/lib/blog-posts.json';
import BlogPostContent from '@/components/blog-post-content';
import BlogPostLayout from '@/components/blog-post-layout';
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return notFound();
    }

    return (
        <section className="container py-12 sm:py-20">
            <div className="flex flex-col min-h-screen">
                <main className="flex-1">
                    <div className="container px-4 py-12 md:px-6">
                        <BlogPostLayout>
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={1200} // Add appropriate width
                                height={675} // Add appropriate height
                                className="h-96 w-full object-cover rounded-lg shadow-lg"
                            />
                            <div className="mt-8">
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                    {post.title}
                                </h1>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    {new Date(post.date).toLocaleDateString()} &middot; {post.readTime}
                                </p>
                            </div>
                            <BlogPostContent content={post.content} />
                        </BlogPostLayout>
                    </div>
                </main>
            </div>
        </section>
    );
}