import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog - NaimSiddiqui",
  description: "Browse all my articles on technology, design, and innovation. Find insights and stories that matter.",
  openGraph: {
    title: "Blog - NaimSiddiqui",
    description: "Browse all my articles on technology, design, and innovation.",
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
