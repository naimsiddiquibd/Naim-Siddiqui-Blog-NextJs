"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { PlusCircle, Eye, Code, FileText } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

export default function AdminPage() {
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    tags: [],
    featured: false,
  })

  const [newTag, setNewTag] = useState("")
  const [generatedSlug, setGeneratedSlug] = useState("")
  const [generatedCode, setGeneratedCode] = useState("")

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    return `${minutes} min read`
  }

  const generateBlogPostCode = () => {
    const slug = generateSlug(formData.title || "")
    const readTime = estimateReadTime(formData.content || "")
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })

    const newPost: BlogPost = {
      slug,
      title: formData.title || "",
      excerpt: formData.excerpt || "",
      content: formData.content || "",
      author: formData.author || "",
      date: currentDate,
      readTime,
      category: formData.category || "",
      tags: formData.tags || [],
      featured: formData.featured || false,
    }

    const codeString = `  {
    slug: "${newPost.slug}",
    title: "${newPost.title}",
    excerpt: "${newPost.excerpt}",
    content: \`${newPost.content}\`,
    author: "${newPost.author}",
    date: "${newPost.date}",
    readTime: "${newPost.readTime}",
    category: "${newPost.category}",
    tags: [${newPost.tags?.map((tag) => `"${tag}"`).join(", ")}],
    featured: ${newPost.featured},
  },`

    setGeneratedSlug(slug)
    setGeneratedCode(codeString)
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags?.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((tag) => tag !== tagToRemove) || [],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    generateBlogPostCode()
  }

  return (
    <div className="min-h-screen py-12 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Blog Post Creator</h1>
          <p className="text-muted-foreground">
            Create a new blog post and generate the code to add to your blog data file.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlusCircle className="h-5 w-5" />
                New Blog Post
              </CardTitle>
              <CardDescription>Fill out the form below to create your blog post</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter your blog post title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt *</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Write a brief description of your post (2-3 sentences)"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                    placeholder="Write your full blog post content here. You can use HTML tags for formatting."
                    rows={10}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    Tip: Use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;blockquote&gt; for formatting
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="author">Author *</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Design">Design</SelectItem>
                        <SelectItem value="Innovation">Innovation</SelectItem>
                        <SelectItem value="Business">Business</SelectItem>
                        <SelectItem value="Personal">Personal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tags</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag} variant="outline">
                      Add
                    </Button>
                  </div>
                  {formData.tags && formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                          {tag} ×
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, featured: !!checked }))}
                  />
                  <Label htmlFor="featured">Featured Post</Label>
                </div>

                <Button type="submit" className="w-full">
                  <Code className="mr-2 h-4 w-4" />
                  Generate Blog Post Code
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Preview & Code */}
          <div className="space-y-6">
            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                {formData.title ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{formData.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{formData.excerpt}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{formData.author}</span>
                        {formData.category && (
                          <>
                            <span>•</span>
                            <Badge variant="outline" className="text-xs">
                              {formData.category}
                            </Badge>
                          </>
                        )}
                        {formData.featured && (
                          <>
                            <span>•</span>
                            <Badge variant="default" className="text-xs">
                              Featured
                            </Badge>
                          </>
                        )}
                      </div>
                    </div>
                    {formData.tags && formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {formData.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {generatedSlug && (
                      <div className="text-xs text-muted-foreground">
                        <strong>URL:</strong> /blog/{generatedSlug}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Fill out the form to see a preview</p>
                )}
              </CardContent>
            </Card>

            {/* Generated Code */}
            {generatedCode && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Generated Code
                  </CardTitle>
                  <CardDescription>
                    Copy this code and add it to your <code>lib/blog-data.ts</code> file in the blogPosts array
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{generatedCode}</code>
                    </pre>
                    <Button
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => navigator.clipboard.writeText(generatedCode)}
                    >
                      Copy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>How to Add Your Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Method 1: Static Data (Current Setup)</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Generate your blog post code using the form above</li>
                <li>Copy the generated code</li>
                <li>
                  Open <code>lib/blog-data.ts</code> in your code editor
                </li>
                <li>
                  Add the copied code to the <code>blogPosts</code> array (at the beginning for newest first)
                </li>
                <li>Save the file and your post will appear on the blog</li>
              </ol>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">Method 2: Database Integration</h4>
              <p className="text-sm text-muted-foreground mb-2">
                For dynamic content management, consider integrating with a database:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong>Supabase:</strong> Easy setup, real-time updates, free tier
                </li>
                <li>
                  <strong>MongoDB:</strong> Flexible schema, good for content
                </li>
                <li>
                  <strong>PostgreSQL:</strong> Robust, ACID compliant
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
