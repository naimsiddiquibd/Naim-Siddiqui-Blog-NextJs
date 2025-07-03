"use client"
import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, Search, X } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { useLanguage } from "@/contexts/language-context"

export default function BlogClientPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTag, setSelectedTag] = useState("")

  // Get unique categories and tags
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(blogPosts.map((post) => post.category))]
    return cats
  }, [])

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    blogPosts.forEach((post) => {
      post.tags?.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filter posts based on search query, category, and tags
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      // Category filter
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

      // Tag filter
      const matchesTag = selectedTag === "" || post.tags?.includes(selectedTag)

      return matchesSearch && matchesCategory && matchesTag
    })
  }, [searchQuery, selectedCategory, selectedTag])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All")
    setSelectedTag("")
  }

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "All" || selectedTag !== ""

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("allArticles")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("blogDescription")}</p>
        </div>

        {/* Search and Filter */}
        <div className="space-y-6 mb-12">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={t("searchPlaceholder")}
              className="pl-10 h-12 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Tag Filters */}
          {allTags.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-center text-muted-foreground">Filter by tags:</p>
              <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={tag === selectedTag ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Active Filters & Results Count */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>
                Showing {filteredPosts.length} of {blogPosts.length} articles
              </span>
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="h-6 px-2 text-xs">
                  Clear filters
                </Button>
              )}
            </div>

            {/* Active filter indicators */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <Badge variant="secondary" className="text-xs">
                    Search: "{searchQuery}"
                    <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
                  </Badge>
                )}
                {selectedCategory !== "All" && (
                  <Badge variant="secondary" className="text-xs">
                    Category: {selectedCategory}
                    <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("All")} />
                  </Badge>
                )}
                {selectedTag && (
                  <Badge variant="secondary" className="text-xs">
                    Tag: {selectedTag}
                    <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => setSelectedTag("")} />
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.slug}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image src={post.thumbnail || "/placeholder.svg?height=400&width=800"}  alt={post.title} fill className="object-cover" />
                  {post.featured && <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs cursor-pointer hover:bg-muted"
                            onClick={() => setSelectedTag(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}

                    {/* Author and Date */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <CalendarDays className="mr-1 h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery
                  ? `No articles match "${searchQuery}". Try adjusting your search terms.`
                  : "No articles match your current filters. Try adjusting your selection."}
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          </div>
        )}

        {/* Load More (if you want pagination) */}
        {filteredPosts.length > 0 && filteredPosts.length >= 9 && (
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              {t("loadMore")}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
