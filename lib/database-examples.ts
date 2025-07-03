// This file shows examples of different database integrations
// Currently, the blog uses static data, but here are examples for different databases:

// 1. MONGODB EXAMPLE (using Mongoose)
/*
import mongoose from 'mongoose'

const BlogPostSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  readTime: { type: String, required: true },
  category: { type: String, required: true },
  tags: [String],
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: true }
})

export const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema)

// Usage:
export async function getBlogPosts() {
  await mongoose.connect(process.env.MONGODB_URI!)
  return await BlogPost.find({ published: true }).sort({ date: -1 })
}
*/

// 2. POSTGRESQL EXAMPLE (using Prisma)
/*
// prisma/schema.prisma
model BlogPost {
  id        String   @id @default(cuid())
  slug      String   @unique
  title     String
  excerpt   String
  content   String
  author    String
  date      DateTime @default(now())
  readTime  String
  category  String
  tags      String[]
  featured  Boolean  @default(false)
  published Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Usage:
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getBlogPosts() {
  return await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { date: 'desc' }
  })
}
*/

// 3. SUPABASE EXAMPLE
/*
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// SQL to create table:
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read_time TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[],
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

// Usage:
export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('date', { ascending: false })
  
  if (error) throw error
  return data
}
*/

// 4. CURRENT IMPLEMENTATION (Static Data)
// The current blog uses static data from lib/blog-data.ts
// This is perfect for:
// - Static sites with infrequent updates
// - Fast loading times
// - No database costs
// - Easy deployment

export const DATABASE_INFO = {
  current: "Static Data (No Database)",
  recommended: {
    small: "Supabase (PostgreSQL) - Free tier available",
    medium: "MongoDB Atlas - Good for flexible schemas",
    large: "PostgreSQL with Prisma - Best for complex queries",
    enterprise: "PostgreSQL/MySQL with custom ORM",
  },
  features: {
    static: "Fast, free, simple - good for blogs with infrequent updates",
    supabase: "Real-time, auth, storage, free tier - great for full-stack apps",
    mongodb: "Flexible schema, good for content-heavy sites",
    postgresql: "ACID compliance, complex queries, best for large applications",
  },
}
