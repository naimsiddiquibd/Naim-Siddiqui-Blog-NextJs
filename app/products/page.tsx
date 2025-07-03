import type { Metadata } from "next"
import ProductsClientPage from "./ProductsClientPage"

export const metadata: Metadata = {
  title: "Products - NaimSiddiqui",
  description: "Discover my collection of Chrome extensions and tools designed to enhance your browsing experience.",
  openGraph: {
    title: "Products - NaimSiddiqui",
    description: "Discover my collection of Chrome extensions and tools designed to enhance your browsing experience.",
  },
}

export default function ProductsPage() {
  return <ProductsClientPage />
}
