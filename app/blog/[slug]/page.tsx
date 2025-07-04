import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowLeft, Share2, BookmarkPlus, Twitter, Facebook, Linkedin } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { Newsletter } from "@/components/newsletter";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params; // Already fixed in previous response
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - NaimSiddiqui`,
    description: post.excerpt,
    keywords: post.tags?.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: "/placeholder.svg?height=630&width=1200",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/placeholder.svg?height=630&width=1200"],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params; // Await params to resolve the slug
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 pb-12">
        <header className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center text-muted-foreground text-sm">
              <CalendarDays className="mr-1 h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{post.title}</h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-lg">{post.author}</p>
                <p className="text-muted-foreground">Author</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                <BookmarkPlus className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button size="sm" variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 lg:h-[500px] md:w-[56rem] mb-12 rounded-2xl overflow-hidden">
            <Image
              src={post.thumbnail || "/placeholder.svg?height=400&width=800"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              {post.content ||
                `This is the beginning of an amazing article about ${post.title.toLowerCase()}. The content would continue with detailed insights, examples, and valuable information for readers.`}
            </p>

            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>

            <h2>Key Points</h2>
            <ul>
              <li>First important point about the topic</li>
              <li>Second crucial insight</li>
              <li>Third valuable takeaway</li>
              <li>Fourth essential consideration</li>
            </ul>

            <blockquote>
              <p>
                "This is an inspiring quote that relates to the article topic and provides additional value to readers."
              </p>
            </blockquote>

            <h2>Detailed Analysis</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>

            <h2>Conclusion</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
          </div>

          {/* Tags */}
          {post.tags && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Social Share */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <Button size="sm" variant="outline">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button size="sm" variant="outline">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button size="sm" variant="outline">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.slug}
                  className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.thumbnail || "/placeholder.svg?height=400&width=800"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-2">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{relatedPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}