"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, ArrowRight, Search, SearchIcon } from "lucide-react"
import { Newsletter } from "@/components/newsletter"
import { blogPosts } from "@/lib/blog-data"
import { useLanguage } from "@/contexts/language-context"

export default function ClientHomePage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1, 4)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {t("heroTitle").split(" ").slice(0, 2).join(" ")} &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("heroTitle").split(" ").slice(-1)[0]}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t("heroSubtitle")}</p>
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder={t("searchPlaceholder")}
                  className="pl-10 h-12 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                <SearchIcon className="mr-2 h-4 w-4" />
                {t("search")}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("featuredArticle")}</h2>
          <p className="text-muted-foreground text-lg">{t("featuredDescription")}</p>
        </div>

        <Card className="overflow-hidden border-0 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-full">
              <Image
                src={featuredPost.thumbnail || "/placeholder.svg?height=400&width=800"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {featuredPost.category}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="mr-1 h-4 w-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">{featuredPost.title}</h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{featuredPost.author}</p>
                    <p className="text-sm text-muted-foreground">Author</p>
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("recentArticles")}</h2>
            <p className="text-muted-foreground text-lg">{t("recentDescription")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={post.thumbnail || "/placeholder.svg?height=400&width=800"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                {t("viewAllArticles")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}
