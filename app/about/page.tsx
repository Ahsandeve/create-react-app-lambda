import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Advanced Image Converter | Professional Image Processing Tool",
  description:
    "Learn about our mission to provide the best free online image converter. Convert JPG, PNG, WebP, AVIF, and more formats with advanced compression and quality controls.",
  keywords: "about image converter, image processing team, online converter history, image conversion mission",
  openGraph: {
    title: "About Advanced Image Converter - Professional Image Processing",
    description: "Discover our story and mission to make image conversion simple, secure, and accessible for everyone.",
    type: "website",
  },
}

export default function AboutPage() {
  const stats = [
    { label: "Images Converted", value: "10M+", icon: <Zap className="h-6 w-6" /> },
    { label: "Happy Users", value: "500K+", icon: <Users className="h-6 w-6" /> },
    { label: "Formats Supported", value: "15+", icon: <Target className="h-6 w-6" /> },
    { label: "Years of Service", value: "5+", icon: <Award className="h-6 w-6" /> },
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      bio: "Passionate about creating efficient image processing algorithms with 8+ years in web development.",
    },
    {
      name: "Sarah Chen",
      role: "UX Designer",
      bio: "Focused on making complex tools simple and intuitive for users of all skill levels.",
    },
    {
      name: "Mike Rodriguez",
      role: "Performance Engineer",
      bio: "Specializes in optimizing web applications for speed and reliability.",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Advanced Image Converter</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're dedicated to providing the most powerful, secure, and user-friendly image conversion tool on the web.
            Our mission is to make professional-grade image processing accessible to everyone.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4 text-primary">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Advanced Image Converter was born from a simple frustration: existing online image converters were
                either too basic, too slow, or compromised user privacy by uploading files to servers.
              </p>
              <p>
                In 2019, our team of developers and designers came together with a vision to create a tool that would
                process images entirely in the browser, ensuring both speed and privacy while offering
                professional-grade features.
              </p>
              <p>
                Today, we're proud to serve over 500,000 users worldwide, processing millions of images monthly while
                maintaining our core principles of privacy, performance, and simplicity.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Privacy First</Badge>
                  </CardTitle>
                  <CardDescription>
                    All image processing happens in your browser. Your files never leave your device.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Professional Quality</Badge>
                  </CardTitle>
                  <CardDescription>
                    Advanced compression algorithms and quality controls for professional results.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">Always Free</Badge>
                  </CardTitle>
                  <CardDescription>
                    Core features remain free forever, with no hidden costs or limitations.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously improve our algorithms and user experience based on the latest web technologies and user
                feedback.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="text-muted-foreground">
                Our tool works on any device, any browser, and is designed to be usable by everyone regardless of
                technical expertise.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-muted-foreground">
                We're open about how our tool works, what data we collect (spoiler: none), and how we make our service
                sustainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
