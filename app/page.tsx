import type { Metadata } from "next"
import ClientHomePage from "./ClientHomePage"

export const metadata: Metadata = {
  title: "Naim Siddiqui - Insights, Stories & Ideas",
  description:
    "Discover the latest insights, stories, and ideas on technology, design, and innovation. Join my community of forward-thinking readers.",
  keywords: "blog, technology, design, innovation, insights, stories",
  authors: [{ name: "NaimSiddiqui Team" }],
  openGraph: {
    title: "NaimSiddiqui - Insights, Stories & Ideas",
    description: "Discover the latest insights, stories, and ideas on technology, design, and innovation.",
    type: "website",
    url: "https://NaimSiddiqui.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NaimSiddiqui",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NaimSiddiqui - Insights, Stories & Ideas",
    description: "Discover the latest insights, stories, and ideas on technology, design, and innovation.",
    images: ["/og-image.jpg"],
  },
}

export default function HomePage() {
  return <ClientHomePage />
}
