// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Separator } from "@/components/ui/separator"
// import {
//   Download,
//   Star,
//   Users,
//   Calendar,
//   ArrowLeft,
//   ExternalLink,
//   Github,
//   Heart,
//   Coffee,
//   DollarSign,
//   Check,
// } from "lucide-react"
// import type { Product } from "@/lib/products-data"
// import { DonationModal } from "@/components/donation-modal"

// interface ProductDetailClientProps {
//   product: Product
// }

// export default function ProductDetailClient({ product }: ProductDetailClientProps) {
//   const [selectedScreenshot, setSelectedScreenshot] = useState(0)
//   const [showDonationModal, setShowDonationModal] = useState(false)

//   return (
//     <div className="min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         {/* Back Button */}
//         <div className="mb-8">
//           <Button variant="ghost" asChild>
//             <Link href="/products">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Products
//             </Link>
//           </Button>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Product Header */}
//             <div className="flex items-start gap-6">
//               <Image
//                 src={product.icon || "/placeholder.svg"}
//                 alt={product.name}
//                 width={80}
//                 height={80}
//                 className="rounded-2xl"
//               />
//               <div className="flex-1">
//                 <div className="flex items-center gap-2 mb-2">
//                   <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
//                   {product.featured && <Badge className="bg-primary">Featured</Badge>}
//                 </div>
//                 <p className="text-xl text-muted-foreground mb-4">{product.tagline}</p>
//                 <div className="flex items-center gap-6 text-sm">
//                   <div className="flex items-center gap-1">
//                     <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                     <span className="font-medium">{product.rating}</span>
//                     <span className="text-muted-foreground">({product.reviews} reviews)</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Users className="h-4 w-4" />
//                     <span>{product.downloads.toLocaleString()} downloads</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Calendar className="h-4 w-4" />
//                     <span>Updated {product.lastUpdated}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Screenshots */}
//             <div className="space-y-4">
//               <h2 className="text-2xl font-semibold">Screenshots</h2>
//               <div className="space-y-4">
//                 <div className="relative aspect-video rounded-lg overflow-hidden">
//                   <Image
//                     src={product.screenshots[selectedScreenshot] || "/placeholder.svg"}
//                     alt={`${product.name} screenshot ${selectedScreenshot + 1}`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="flex gap-2 overflow-x-auto pb-2">
//                   {product.screenshots.map((screenshot, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedScreenshot(index)}
//                       className={`relative flex-shrink-0 w-20 h-12 rounded-md overflow-hidden border-2 transition-colors ${
//                         selectedScreenshot === index ? "border-primary" : "border-muted"
//                       }`}
//                     >
//                       <Image
//                         src={screenshot || "/placeholder.svg"}
//                         alt={`Screenshot ${index + 1}`}
//                         fill
//                         className="object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Tabs */}
//             <Tabs defaultValue="overview" className="w-full">
//               <TabsList className="grid w-full grid-cols-4">
//                 <TabsTrigger value="overview">Overview</TabsTrigger>
//                 <TabsTrigger value="features">Features</TabsTrigger>
//                 <TabsTrigger value="requirements">Requirements</TabsTrigger>
//                 <TabsTrigger value="changelog">Changelog</TabsTrigger>
//               </TabsList>

//               <TabsContent value="overview" className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-4">About {product.name}</h3>
//                   <div
//                     className="prose prose-gray dark:prose-invert max-w-none"
//                     dangerouslySetInnerHTML={{ __html: product.longDescription }}
//                   />
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold mb-4">Tags</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {product.tags.map((tag) => (
//                       <Badge key={tag} variant="secondary">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               </TabsContent>

//               <TabsContent value="features" className="space-y-4">
//                 <h3 className="text-xl font-semibold">Key Features</h3>
//                 <div className="grid gap-3">
//                   {product.features.map((feature, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </TabsContent>

//               <TabsContent value="requirements" className="space-y-4">
//                 <h3 className="text-xl font-semibold">System Requirements</h3>
//                 <div className="grid gap-3">
//                   {product.requirements.map((requirement, index) => (
//                     <div key={index} className="flex items-start gap-3">
//                       <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
//                       <span>{requirement}</span>
//                     </div>
//                   ))}
//                 </div>
//               </TabsContent>

//               <TabsContent value="changelog" className="space-y-6">
//                 <h3 className="text-xl font-semibold">Version History</h3>
//                 {product.changelog ? (
//                   <div className="space-y-6">
//                     {product.changelog.map((version, index) => (
//                       <div key={index} className="border-l-2 border-muted pl-6">
//                         <div className="flex items-center gap-2 mb-2">
//                           <h4 className="font-semibold">Version {version.version}</h4>
//                           <Badge variant="outline">{version.date}</Badge>
//                         </div>
//                         <ul className="space-y-1 text-muted-foreground">
//                           {version.changes.map((change, changeIndex) => (
//                             <li key={changeIndex} className="flex items-start gap-2">
//                               <span className="text-primary">•</span>
//                               <span>{change}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-muted-foreground">No changelog available.</p>
//                 )}
//               </TabsContent>
//             </Tabs>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Download Card */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Download className="h-5 w-5" />
//                   Download
//                 </CardTitle>
//                 <CardDescription>Free to use, no registration required</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="space-y-2">
//                   <Button asChild className="w-full" size="lg">
//                     <a href={product.downloadUrl} target="_blank" rel="noopener noreferrer">
//                       <Download className="mr-2 h-4 w-4" />
//                       Install Extension
//                     </a>
//                   </Button>

//                   {product.chromeStoreUrl && (
//                     <Button asChild variant="outline" className="w-full">
//                       <a href={product.chromeStoreUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="mr-2 h-4 w-4" />
//                         Chrome Web Store
//                       </a>
//                     </Button>
//                   )}

//                   {product.githubUrl && (
//                     <Button asChild variant="outline" className="w-full">
//                       <a href={product.githubUrl} target="_blank" rel="noopener noreferrer">
//                         <Github className="mr-2 h-4 w-4" />
//                         View Source Code
//                       </a>
//                     </Button>
//                   )}
//                 </div>

//                 <Separator />

//                 <div className="text-center space-y-2">
//                   <p className="text-sm text-muted-foreground">Enjoying this extension?</p>
//                   <Button
//                     onClick={() => setShowDonationModal(true)}
//                     variant="outline"
//                     className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 dark:border-pink-800 dark:text-pink-400 dark:hover:bg-pink-950"
//                   >
//                     <Heart className="mr-2 h-4 w-4" />
//                     Support Development
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Product Info */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Product Information</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4 text-sm">
//                   <div>
//                     <p className="text-muted-foreground">Version</p>
//                     <p className="font-medium">{product.version}</p>
//                   </div>
//                   <div>
//                     <p className="text-muted-foreground">Category</p>
//                     <p className="font-medium">{product.category}</p>
//                   </div>
//                   <div>
//                     <p className="text-muted-foreground">Downloads</p>
//                     <p className="font-medium">{product.downloads.toLocaleString()}</p>
//                   </div>
//                   <div>
//                     <p className="text-muted-foreground">Rating</p>
//                     <div className="flex items-center gap-1">
//                       <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                       <span className="font-medium">{product.rating}</span>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Support Card */}
//             <Card className="border-blue-200 dark:border-blue-800">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
//                   <Coffee className="h-5 w-5" />
//                   Support the Developer
//                 </CardTitle>
//                 <CardDescription>Help keep this extension free and actively maintained</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   If you find this extension useful, consider supporting its development. Your contribution helps cover
//                   hosting costs and motivates continued improvements.
//                 </p>
//                 <Button
//                   onClick={() => setShowDonationModal(true)}
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
//                 >
//                   <DollarSign className="mr-2 h-4 w-4" />
//                   Make a Donation
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>

//       {/* Donation Modal */}
//       <DonationModal
//         isOpen={showDonationModal}
//         onClose={() => setShowDonationModal(false)}
//         productName={product.name}
//       />
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Download,
  Star,
  Users,
  Calendar,
  ArrowLeft,
  ExternalLink,
  Github,
  Heart,
  Coffee,
  DollarSign,
  Check,
} from "lucide-react"
import type { Product } from "@/lib/products-data"
import { DonationModal } from "@/components/donation-modal"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedScreenshot, setSelectedScreenshot] = useState(0)
  const [showDonationModal, setShowDonationModal] = useState(false)
  const [showChromeStoreAlert, setShowChromeStoreAlert] = useState(false)

  const handleChromeStoreClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowChromeStoreAlert(true)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Header */}
            <div className="flex items-start gap-6">
              <Image
                src={product.icon || "/placeholder.svg"}
                alt={product.name}
                width={80}
                height={80}
                className="rounded-2xl"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
                  {product.featured && <Badge className="bg-primary">Featured</Badge>}
                </div>
                <p className="text-xl text-muted-foreground mb-4">{product.tagline}</p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{product.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Updated {product.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Screenshots</h2>
              <div className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={product.screenshots[selectedScreenshot] || "/placeholder.svg"}
                    alt={`${product.name} screenshot ${selectedScreenshot + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedScreenshot(index)}
                      className={`relative flex-shrink-0 w-20 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                        selectedScreenshot === index ? "border-primary" : "border-muted"
                      }`}
                    >
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="changelog">Changelog</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">About {product.name}</h3>
                  <div
                    className="prose prose-gray dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.longDescription }}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="space-y-4">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <div className="grid gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="requirements" className="space-y-4">
                <h3 className="text-xl font-semibold">System Requirements</h3>
                <div className="grid gap-3">
                  {product.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{requirement}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="changelog" className="space-y-6">
                <h3 className="text-xl font-semibold">Version History</h3>
                {product.changelog ? (
                  <div className="space-y-6">
                    {product.changelog.map((version, index) => (
                      <div key={index} className="border-l-2 border-muted pl-6">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">Version {version.version}</h4>
                          <Badge variant="outline">{version.date}</Badge>
                        </div>
                        <ul className="space-y-1 text-muted-foreground">
                          {version.changes.map((change, changeIndex) => (
                            <li key={changeIndex} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{change}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No changelog available.</p>
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download
                </CardTitle>
                <CardDescription>Free to use, no registration required</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Button asChild className="w-full" size="lg">
                    <a href={product.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Install Extension
                    </a>
                  </Button>

                  {product.chromeStoreUrl && (
                    <Button 
                      onClick={handleChromeStoreClick}
                      variant="outline" 
                      className="w-full"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Chrome Web Store
                    </Button>
                  )}

                  {product.githubUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <a href={product.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>

                <Separator />

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">Enjoying this extension?</p>
                  <Button
                    onClick={() => setShowDonationModal(true)}
                    variant="outline"
                    className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 dark:border-pink-800 dark:text-pink-400 dark:hover:bg-pink-950"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Support Development
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product Info */}
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Version</p>
                    <p className="font-medium">{product.version}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Category</p>
                    <p className="font-medium">{product.category}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Downloads</p>
                    <p className="font-medium">{product.downloads.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Rating</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Coffee className="h-5 w-5" />
                  Support the Developer
                </CardTitle>
                <CardDescription>Help keep this extension free and actively maintained</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you find this extension useful, consider supporting its development. Your contribution helps cover
                  hosting costs and motivates continued improvements.
                </p>
                <Button
                  onClick={() => setShowDonationModal(true)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Make a Donation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal
        isOpen={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        productName={product.name}
      />

      {/* Chrome Store Alert Dialog */}
      <AlertDialog open={showChromeStoreAlert} onOpenChange={setShowChromeStoreAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Extension Not Available in Chrome Web Store</AlertDialogTitle>
            <AlertDialogDescription>
              This extension is not yet available in the Chrome Web Store. Please download and install it manually using
              the "Install Extension" button above.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Got it</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}