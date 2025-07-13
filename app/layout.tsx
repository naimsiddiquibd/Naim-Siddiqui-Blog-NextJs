import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://naimsiddiqui.tech"),
  title: {
    default: "NaimSiddiqui - Insights, Stories & Ideas",
    template: "%s | NaimSiddiqui",
  },
  description:
    "Discover the latest insights, stories, and ideas on technology, design, and innovation. Join my community of forward-thinking readers.",
    icons: {
    icon: "/favicon.svg",
  },
  keywords: ["blog", "technology", "design", "innovation", "insights", "stories"],
  authors: [{ name: "NaimSiddiqui Team" }],
  creator: "NaimSiddiqui",
  publisher: "NaimSiddiqui",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://NaimSiddiqui.com",
    siteName: "NaimSiddiqui",
    title: "NaimSiddiqui - Insights, Stories & Ideas",
    description: "Discover the latest insights, stories, and ideas on technology, design, and innovation.",
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
    creator: "@NaimSiddiqui",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://NaimSiddiqui.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "NaimSiddiqui",
              description: "Discover the latest insights, stories, and ideas on technology, design, and innovation.",
              url: "https://NaimSiddiqui.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://NaimSiddiqui.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
