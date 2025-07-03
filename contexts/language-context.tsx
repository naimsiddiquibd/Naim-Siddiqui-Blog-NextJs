"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "bn"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    home: "Home",
    blog: "Blog",
    products: "Products",
    about: "About",
    contact: "Contact",

    // Homepage
    heroTitle: "Insights, Stories & Ideas",
    heroSubtitle:
      "Discover the latest in technology, design, and innovation. Join my community of forward-thinking readers.",
    searchPlaceholder: "Search articles...",
    subscribe: "Subscribe",
    search: "Search",
    featuredArticle: "Featured Article",
    featuredDescription: "My latest and most popular content",
    recentArticles: "Recent Articles",
    recentDescription: "Stay up to date with my latest posts",
    viewAllArticles: "View All Articles",
    readMore: "Read More",

    // Blog
    allArticles: "All Articles",
    blogDescription: "Explore my collection of insights, stories, and ideas on technology, design, and innovation.",
    loadMore: "Load More Articles",

    // Newsletter
    stayInLoop: "Stay in the Loop",
    newsletterDescription:
      "Get the latest articles, insights, and exclusive content delivered straight to your inbox. Join over 10,000 subscribers who trust us for quality content.",
    enterEmail: "Enter your email address",
    noSpam: "No spam, unsubscribe at any time",

    // Footer
    footerDescription:
      "Insights, stories, and ideas on technology, design, and innovation. Join my community of forward-thinking readers.",
    navigation: "Navigation",
    categories: "Categories",
    stayUpdated: "Stay Updated",
    subscribeNewsletter: "Subscribe to my newsletter for the latest articles and insights.",
    allRightsReserved: "All rights reserved.",

    // Contact
    getInTouch: "Get In Touch",
    contactDescription: "Have a question, suggestion, or just want to say hello? We'd love to hear from you.",
    sendMessage: "Send us a message",
    contactFormDescription: "Fill out the form below and we'll get back to you as soon as possible.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessageButton: "Send Message",

    // About
    aboutTitle: "About Naim Siddiqui",
    aboutDescription:
      "We're passionate about sharing insights, stories, and ideas that shape the future of technology, design, and innovation. my mission is to create content that inspires and educates my community.",
    ourMission: "My Mission",
    meetTeam: "Meet my Team",
    teamDescription: "The passionate individuals behind Naim Siddiqui who work to bring you quality content every day.",
  },
  bn: {
    // Navigation
    home: "হোম",
    blog: "ব্লগ",
    products: "প্রোডাক্ট",
    about: "সম্পর্কে",
    contact: "যোগাযোগ",

    // Homepage
    heroTitle: "অন্তর্দৃষ্টি, গল্প এবং ধারণা",
    heroSubtitle: "প্রযুক্তি, ডিজাইন এবং উদ্ভাবনের সর্বশেষ তথ্য আবিষ্কার করুন। আমাদের দূরদর্শী পাঠকদের সম্প্রদায়ে যোগ দিন।",
    searchPlaceholder: "নিবন্ধ খুঁজুন...",
    subscribe: "সাবস্ক্রাইব",
    search: "অনুসন্ধান করুন",
    featuredArticle: "বৈশিষ্ট্যযুক্ত নিবন্ধ",
    featuredDescription: "আমাদের সর্বশেষ এবং সবচেয়ে জনপ্রিয় বিষয়বস্তু",
    recentArticles: "সাম্প্রতিক নিবন্ধ",
    recentDescription: "আমাদের সর্বশেষ পোস্টগুলির সাথে আপডেট থাকুন",
    viewAllArticles: "সব নিবন্ধ দেখুন",
    readMore: "আরও পড়ুন",

    // Blog
    allArticles: "সব নিবন্ধ",
    blogDescription: "প্রযুক্তি, ডিজাইন এবং উদ্ভাবনের উপর আমাদের অন্তর্দৃষ্টি, গল্প এবং ধারণাগুলির সংগ্রহ অন্বেষণ করুন।",
    loadMore: "আরও নিবন্ধ লোড করুন",

    // Newsletter
    stayInLoop: "লুপে থাকুন",
    newsletterDescription:
      "সর্বশেষ নিবন্ধ, অন্তর্দৃষ্টি এবং একচেটিয়া বিষয়বস্তু সরাসরি আপনার ইনবক্সে পান। ১০,০০০+ গ্রাহকদের সাথে যোগ দিন।",
    enterEmail: "আপনার ইমেইল ঠিকানা লিখুন",
    noSpam: "কোন স্প্যাম নেই, যেকোনো সময় আনসাবস্ক্রাইব করুন",

    // Footer
    footerDescription: "প্রযুক্তি, ডিজাইন এবং উদ্ভাবনের উপর অন্তর্দৃষ্টি, গল্প এবং ধারণা। আমাদের দূরদর্শী পাঠকদের সম্প্রদায়ে যোগ দিন।",
    navigation: "নেভিগেশন",
    categories: "বিভাগসমূহ",
    stayUpdated: "আপডেট থাকুন",
    subscribeNewsletter: "সর্বশেষ নিবন্ধ এবং অন্তর্দৃষ্টির জন্য আমাদের নিউজলেটার সাবস্ক্রাইব করুন।",
    allRightsReserved: "সর্বস্বত্ব সংরক্ষিত।",

    // Contact
    getInTouch: "যোগাযোগ করুন",
    contactDescription: "কোন প্রশ্ন, পরামর্শ আছে, নাকি শুধু হ্যালো বলতে চান? আমরা আপনার কাছ থেকে শুনতে চাই।",
    sendMessage: "আমাদের একটি বার্তা পাঠান",
    contactFormDescription: "নিচের ফর্মটি পূরণ করুন এবং আমরা যত তাড়াতাড়ি সম্ভব আপনার কাছে ফিরে আসব।",
    firstName: "নাম",
    lastName: "পদবি",
    email: "ইমেইল",
    subject: "বিষয়",
    message: "বার্তা",
    sendMessageButton: "বার্তা পাঠান",

    // About
    aboutTitle: "মডার্নব্লগ সম্পর্কে",
    aboutDescription:
      "আমরা প্রযুক্তি, ডিজাইন এবং উদ্ভাবনের ভবিষ্যৎ গঠনকারী অন্তর্দৃষ্টি, গল্প এবং ধারণা ভাগাভাগি করতে আগ্রহী। আমাদের লক্ষ্য এমন বিষয়বস্তু তৈরি করা যা আমাদের সম্প্রদায়কে অনুপ্রাণিত এবং শিক্ষিত করে।",
    ourMission: "আমাদের লক্ষ্য",
    meetTeam: "আমাদের দলের সাথে পরিচিত হন",
    teamDescription: "মডার্নব্লগের পিছনে থাকা আবেগপ্রবণ ব্যক্তিরা যারা প্রতিদিন আপনার জন্য মানসম্পন্ন বিষয়বস্তু আনতে কাজ করেন।",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bn")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
