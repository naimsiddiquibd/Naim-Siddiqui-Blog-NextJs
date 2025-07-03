export interface BlogPost {
  slug: string
  title: string
  thumbnail: string
  excerpt: string
  content?: string
  author: string
  date: string
  readTime: string
  category: string
  tags?: string[]
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-web-development",
    title: "The Future of App Development: Trends to Watch in 2024",
    thumbnail: "https://i.ibb.co/0xPHFRy/The-Future-of-Web-Development-Trends-to-Watch-in-2025.jpg",
    excerpt:
      "Explore the cutting-edge technologies and methodologies that are shaping the future of app development, from AI integration to serverless architectures.",
    author: "Naim Siddiqui",
    date: "Dec 15, 2023",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Web Development", "AI", "Serverless", "React", "Next.js"],
    featured: true,
  },
  // {
  //   slug: "my-first-blog-post",
  //   title: "My First Blog Post: Getting Started with Modern Blogging",
  //   thumbnail: "https://i.ibb.co/23mhXshz/Building-Design-Systems-That-Scale.png",
  //   excerpt:
  //     "Learn how to create engaging blog content that resonates with your audience and drives meaningful conversations.",
  //   content: `
  //     <h2>Welcome to My Blog!</h2>
  //     <p>This is my first blog post, and I'm excited to share my thoughts with you.</p>
      
  //     <h3>What You'll Find Here</h3>
  //     <ul>
  //       <li>Insights on technology and innovation</li>
  //       <li>Personal experiences and lessons learned</li>
  //       <li>Tips and tutorials for developers</li>
  //       <li>Industry trends and analysis</li>
  //     </ul>
      
  //     <h3>My Writing Philosophy</h3>
  //     <p>I believe in creating content that is:</p>
  //     <ul>
  //       <li><strong>Practical:</strong> Information you can actually use</li>
  //       <li><strong>Honest:</strong> Real experiences, not just theory</li>
  //       <li><strong>Accessible:</strong> Complex topics explained simply</li>
  //     </ul>
      
  //     <blockquote>
  //       <p>"The best way to learn is to teach others what you've learned."</p>
  //     </blockquote>
      
  //     <h3>What's Next?</h3>
  //     <p>In upcoming posts, I'll be covering topics like:</p>
  //     <ul>
  //       <li>Building scalable web applications</li>
  //       <li>Best practices for modern development</li>
  //       <li>Career advice for developers</li>
  //       <li>Tools and technologies I recommend</li>
  //     </ul>
      
  //     <p>Thank you for reading, and I look forward to connecting with you through these posts!</p>
  //   `,
  //   author: "Your Name",
  //   date: "Dec 20, 2023",
  //   readTime: "5 min read",
  //   category: "Personal",
  //   tags: ["Blogging", "Introduction", "Personal"],
  //   featured: false,
  // },
  {
    slug: "design-systems-at-scale",
    title: "Building Design Systems That Scale: Lessons from Industry Leaders",
     thumbnail: "https://i.ibb.co/23mhXshz/Building-Design-Systems-That-Scale.png",
    excerpt:
      "Learn how top companies create and maintain design systems that grow with their organizations while maintaining consistency and efficiency.",
    author: "Naim Siddiqui",
    date: "Dec 12, 2023",
    readTime: "12 min read",
    category: "Design",
    tags: ["Design Systems", "UI/UX", "Scalability", "Component Libraries"],
  },
  {
    slug: "ai-powered-productivity",
    title: "How AI is Revolutionizing Developer Productivity",
     thumbnail: "https://i.ibb.co/ymTY50zC/ai-powered-productivity.png",
    excerpt:
      "Discover the latest AI tools and techniques that are transforming how developers write code, debug applications, and ship products faster.",
    author: "Naim Siddiqui",
    date: "Dec 10, 2023",
    readTime: "10 min read",
    category: "Technology",
    tags: ["AI", "Productivity", "Developer Tools", "Automation"],
  },
  {
    slug: "startup-funding-guide",
    title: "The Complete Guide to Startup Funding in 2024",
    thumbnail: "https://i.ibb.co/6JYJkYfv/startup-funding-guide.png",
    excerpt:
      "Navigate the complex world of startup funding with insights on venture capital, angel investors, and alternative funding sources.",
    author: "Naim Siddiqui",
    date: "Dec 8, 2023",
    readTime: "15 min read",
    category: "Business",
    tags: ["Startups", "Funding", "Venture Capital", "Entrepreneurship"],
  },
  {
    slug: "sustainable-tech-practices",
    title: "Sustainable Technology Practices for Modern Businesses",
    thumbnail: "https://i.ibb.co/DgMCqNNN/Building-Design-Systems-That-Scale-1.png",
    excerpt:
      "Explore how companies are adopting green technology practices to reduce their environmental impact while maintaining competitive advantage.",
    author: "Naim Siddiqui",
    date: "Dec 5, 2023",
    readTime: "9 min read",
    category: "Innovation",
    tags: ["Sustainability", "Green Tech", "Business Strategy", "Environment"],
  },
  {
    slug: "remote-team-collaboration",
    title: "Mastering Remote Team Collaboration in the Digital Age",
    thumbnail: "https://i.ibb.co/35xHQRQZ/Building-Design-Systems-That-Scale-2.png",
    excerpt:
      "Best practices and tools for building high-performing remote teams that deliver exceptional results across time zones and cultures.",
    author: "Naim Siddiqui",
    date: "Dec 3, 2023",
    readTime: "11 min read",
    category: "Business",
    tags: ["Remote Work", "Team Management", "Collaboration", "Digital Tools"],
  },
]
