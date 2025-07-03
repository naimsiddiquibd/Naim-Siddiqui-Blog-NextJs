import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Twitter, Linkedin, Github } from "lucide-react"

export const metadata: Metadata = {
  title: "About - Naim Siddiqui",
  description: "Learn more about Naim Siddiqui, my mission, and the team behind the content.",
  openGraph: {
    title: "About - NaimSiddiqui",
    description: "Learn more about Naim Siddiqui, my mission, and the team behind the content.",
  },
}

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Editor-in-Chief",
      bio: "Sarah leads my editorial team with over 10 years of experience in tech journalism.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "sarah@NaimSiddiqui.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Senior Writer",
      bio: "Michael specializes in emerging technologies and has a background in software engineering.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        github: "#",
        email: "michael@NaimSiddiqui.com",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Design Writer",
      bio: "Emily brings design insights and UX expertise to my content strategy.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "emily@NaimSiddiqui.com",
      },
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Naim Siddiqui</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're passionate about sharing insights, stories, and ideas that shape the future of technology, design, and
            innovation. My mission is to create content that inspires and educates my community.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Here, we believe in the power of knowledge sharing. We strive to create high-quality,
                accessible content that helps professionals and enthusiasts stay ahead in their fields.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My team of experienced writers and industry experts work tirelessly to bring you the latest insights,
                trends, and practical advice across technology, design, and business innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Technology</Badge>
                <Badge variant="secondary">Design</Badge>
                <Badge variant="secondary">Innovation</Badge>
                <Badge variant="secondary">Business</Badge>
                <Badge variant="secondary">Startups</Badge>
              </div>
            </div>
            <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden">
              <Image src="https://i.ibb.co/0xPHFRy/The-Future-of-Web-Development-Trends-to-Watch-in-2025.jpg" alt="my mission" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 py-12 bg-muted/30 rounded-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Articles Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Newsletter Subscribers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Running</div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet my Buddy</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The passionate individuals behind Naim Siddiqui who work to bring you quality content every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center gap-2">
                    {member.social.email && (
                      <Button size="sm" variant="outline">
                        <Mail className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button size="sm" variant="outline">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.linkedin && (
                      <Button size="sm" variant="outline">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.github && (
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have a story idea, feedback, or just want to say hello? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
            <Button size="lg" variant="outline">
              <Twitter className="mr-2 h-4 w-4" />
              Follow Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
