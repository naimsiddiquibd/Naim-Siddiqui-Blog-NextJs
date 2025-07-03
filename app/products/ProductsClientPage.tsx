"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Star, Users, Search, X, ExternalLink, Github } from "lucide-react"
import { products, productCategories } from "@/lib/products-data"
import { useLanguage } from "@/contexts/language-context"

export default function ProductsClientPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      // Category filter
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All")
  }

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "All"
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">my Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover my collection of Chrome extensions and tools designed to enhance your browsing experience and
            boost your productivity.
          </p>
        </div>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden border-2 border-primary/20">
                  <div className="relative">
                    <Image
                      src={product.screenshots[0] || "/placeholder.svg"}
                      alt={product.name}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Image
                        src={product.icon || "/placeholder.svg"}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{product.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-2">{product.tagline}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{product.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            <span>{product.downloads.toLocaleString()}</span>
                          </div>
                          <Badge variant="outline">{product.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{product.description}</CardDescription>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href={`/products/${product.slug}`}>
                          View Details
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={product.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <div className="space-y-6 mb-12">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
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
            {productCategories.map((category) => (
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

          {/* Active Filters & Results Count */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>
                Showing {filteredProducts.length} of {products.length} products
              </span>
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="h-6 px-2 text-xs">
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={product.screenshots[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Image
                      src={product.icon || "/placeholder.svg"}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{product.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-2">{product.tagline}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{product.downloads.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-2">{product.description}</CardDescription>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/products/${product.slug}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={product.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                    {product.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={product.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
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
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery
                  ? `No products match "${searchQuery}". Try adjusting your search terms.`
                  : "No products match your current filters. Try adjusting your selection."}
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
