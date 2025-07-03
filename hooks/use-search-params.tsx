"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export function useUrlSearchParams() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const search = searchParams.get("search") || ""
    const category = searchParams.get("category") || "All"

    setSearchQuery(search)
    setSelectedCategory(category)
  }, [searchParams])

  return {
    searchQuery,
    selectedCategory,
    setSearchQuery,
    setSelectedCategory,
  }
}
