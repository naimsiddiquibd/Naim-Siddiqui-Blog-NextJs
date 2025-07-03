// Example script to create a blog post with Supabase
// Run this with: npm run create-post

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // Use service role for admin operations
)

interface CreatePostData {
  title: string
  excerpt: string
  content: string
  author: string
  category: string
  tags: string[]
  featured?: boolean
}

export async function createBlogPost(postData: CreatePostData) {
  // Generate slug from title
  const slug = postData.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()

  // Estimate read time
  const wordsPerMinute = 200
  const wordCount = postData.content.split(/\s+/).length
  const readTime = `${Math.ceil(wordCount / wordsPerMinute)} min read`

  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .insert([
        {
          slug,
          title: postData.title,
          excerpt: postData.excerpt,
          content: postData.content,
          author: postData.author,
          read_time: readTime,
          category: postData.category,
          tags: postData.tags,
          featured: postData.featured || false,
          published: true,
        },
      ])
      .select()

    if (error) throw error

    console.log("✅ Blog post created successfully:", data[0])
    return data[0]
  } catch (error) {
    console.error("❌ Error creating blog post:", error)
    throw error
  }
}

// Example usage:
async function main() {
  const newPost: CreatePostData = {
    title: "Getting Started with Next.js 14",
    excerpt:
      "Learn the fundamentals of Next.js 14 and build your first full-stack application with the latest features.",
    content: `
      <h2>Introduction to Next.js 14</h2>
      <p>Next.js 14 brings exciting new features and improvements that make building React applications even better.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>App Router with improved performance</li>
        <li>Server Components by default</li>
        <li>Enhanced Image optimization</li>
        <li>Improved TypeScript support</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To create a new Next.js 14 project, run:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new project with all the latest features and best practices.</p>
    `,
    author: "John Developer",
    category: "Technology",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
    featured: true,
  }

  try {
    await createBlogPost(newPost)
  } catch (error) {
    process.exit(1)
  }
}

// Uncomment to run
// main()
