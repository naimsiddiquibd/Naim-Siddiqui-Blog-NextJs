-- Run this SQL in your Supabase SQL editor to set up the blog database

-- Create blog_posts table
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

-- Create categories table
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create authors table
CREATE TABLE authors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  social_links JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample categories
INSERT INTO categories (name, slug, description) VALUES
('Technology', 'technology', 'Latest in tech and software development'),
('Design', 'design', 'UI/UX design and creative insights'),
('Innovation', 'innovation', 'Breakthrough ideas and innovations'),
('Business', 'business', 'Business strategy and entrepreneurship');

-- Insert sample authors
INSERT INTO authors (name, email, bio) VALUES
('Sarah Johnson', 'sarah@NaimSiddiqui.com', 'Editor-in-Chief with 10+ years in tech journalism'),
('Michael Chen', 'michael@NaimSiddiqui.com', 'Senior Writer specializing in emerging technologies'),
('Emily Rodriguez', 'emily@NaimSiddiqui.com', 'Design Writer with UX expertise');

-- Insert sample blog posts
INSERT INTO blog_posts (slug, title, excerpt, content, author, read_time, category, tags, featured) VALUES
('future-of-web-development', 
 'The Future of Web Development: Trends to Watch in 2024',
 'Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to serverless architectures.',
 'This is the full content of the article about web development trends...',
 'Sarah Johnson',
 '8 min read',
 'Technology',
 ARRAY['Web Development', 'AI', 'Serverless', 'React', 'Next.js'],
 true);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can read published posts" ON blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Public can read categories" ON categories
  FOR SELECT USING (true);

CREATE POLICY "Public can read authors" ON authors
  FOR SELECT USING (true);
