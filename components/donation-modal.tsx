"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, Heart, CreditCard, Bitcoin, Copy, Check, ExternalLink } from "lucide-react"

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
}

export function DonationModal({ isOpen, onClose, productName }: DonationModalProps) {
  const [selectedAmount, setSelectedAmount] = useState(5)
  const [customAmount, setCustomAmount] = useState("")
  const [message, setMessage] = useState("")
  const [copiedAddress, setCopiedAddress] = useState("")

  const predefinedAmounts = [3, 5, 10, 25, 50]

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAddress(type)
    setTimeout(() => setCopiedAddress(""), 2000)
  }

  const handlePayPalDonation = () => {
    const amount = customAmount || selectedAmount
    // Replace with your actual PayPal donation link
    const paypalUrl = `https://www.paypal.com/donate?amount=${amount}&currency_code=USD&business=your-email@example.com`
    window.open(paypalUrl, "_blank")
  }

  const handleStripeDonation = () => {
    const amount = customAmount || selectedAmount
    // Replace with your actual Stripe payment link
    const stripeUrl = `https://buy.stripe.com/your-payment-link?amount=${amount * 100}` // Stripe uses cents
    window.open(stripeUrl, "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Heart className="h-6 w-6 text-pink-500" />
            Support {productName}
          </DialogTitle>
          <DialogDescription>
            Your support helps keep this extension free and actively maintained. Choose your preferred donation method
            below.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="quick" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="quick">Quick Donation</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="other">Other Ways</TabsTrigger>
          </TabsList>

          <TabsContent value="quick" className="space-y-6">
            {/* Amount Selection */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Choose Amount</Label>
              <div className="grid grid-cols-5 gap-2">
                {predefinedAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount("")
                    }}
                    className="h-12"
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
              <div className="space-y-2">
                <Label htmlFor="custom-amount">Custom Amount ($)</Label>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(0)
                  }}
                  min="1"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Leave a message of support..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Payment Method</Label>
              <div className="grid gap-3">
                <Button onClick={handlePayPalDonation} className="w-full h-12 bg-blue-600 hover:bg-blue-700">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Donate via PayPal - ${customAmount || selectedAmount}
                </Button>
                <Button onClick={handleStripeDonation} variant="outline" className="w-full h-12">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Donate via Stripe - ${customAmount || selectedAmount}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="crypto" className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Send cryptocurrency donations to the addresses below. Click to copy the address.
              </p>

              <div className="grid gap-4">
                <Card
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => copyToClipboard("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", "bitcoin")}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Bitcoin className="h-5 w-5 text-orange-500" />
                      Bitcoin (BTC)
                      {copiedAddress === "bitcoin" ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <code className="text-xs bg-muted p-2 rounded block break-all">
                      1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                    </code>
                  </CardContent>
                </Card>

                <Card
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => copyToClipboard("0x742d35Cc6634C0532925a3b8D4C9db96590b5c8e", "ethereum")}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <div className="w-5 h-5 bg-blue-600 rounded-full" />
                      Ethereum (ETH)
                      {copiedAddress === "ethereum" ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <code className="text-xs bg-muted p-2 rounded block break-all">
                      0x742d35Cc6634C0532925a3b8D4C9db96590b5c8e
                    </code>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="other" className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Other Ways to Support</h3>

              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Coffee className="h-5 w-5" />
                      Buy Me a Coffee
                    </CardTitle>
                    <CardDescription>Support through Buy Me a Coffee platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <a href="https://buymeacoffee.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Buy Me a Coffee
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      GitHub Sponsors
                    </CardTitle>
                    <CardDescription>Sponsor through GitHub's platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a href="https://github.com/sponsors/yourusername" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Become a GitHub Sponsor
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Free Ways to Help</CardTitle>
                    <CardDescription>Support without spending money</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="text-sm space-y-1">
                      <li>• Rate the extension on Chrome Web Store</li>
                      <li>• Share with friends and colleagues</li>
                      <li>• Report bugs and suggest features</li>
                      <li>• Follow on social media</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground text-center">
            All donations are voluntary and help support the continued development of free extensions. Thank you for
            your support! ❤️
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
