import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-0 shadow-xl">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Get the latest articles, insights, and exclusive content delivered straight to your inbox. Join over
              10,000 subscribers who trust us for quality content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input type="email" placeholder="Enter your email address" className="flex-1 h-12 text-lg" />
              <Button size="lg" className="h-12 px-8">
                Subscribe
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No spam, unsubscribe at any time</span>
            </div>

            <div className="mt-8 pt-6 border-t border-muted">
              <p className="text-sm text-muted-foreground">
                Join readers from companies like Google, Apple, Microsoft, and more.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
