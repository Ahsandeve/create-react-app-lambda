import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Zap, Shield, Globe, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Advanced Image Converter | Fast, Secure, Free",
  description:
    "Learn about our mission to provide the best free image conversion tool. Convert JPG, PNG, WebP, AVIF, GIF, BMP, TIFF formats with complete privacy and security.",
  keywords:
    "about image converter, free image conversion, online image tool, privacy-focused converter, secure image processing",
  openGraph: {
    title: "About Advanced Image Converter - Your Privacy-First Image Tool",
    description:
      "Discover why millions trust our free image converter for JPG, PNG, WebP, and more formats. 100% browser-based processing ensures your privacy.",
    type: "website",
    url: "https://image-converter.unaux.com/about/",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Advanced Image Converter - Privacy-First Image Tool",
    description: "Learn about our mission to provide secure, fast, and free image conversion for everyone.",
  },
  alternates: {
    canonical: "https://image-converter.unaux.com/about/",
  },
}

export default function AboutPage() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Privacy First",
      description:
        "All processing happens in your browser. Your images never leave your device, ensuring complete privacy and security.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description:
        "Our optimized conversion engine processes images in seconds, supporting batch operations for maximum efficiency.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Universal Access",
      description:
        "Works on any device, any browser, anywhere in the world. No downloads, no installations, no restrictions.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Always Free",
      description:
        "We believe powerful tools should be accessible to everyone. Our service is completely free with no hidden costs.",
    },
  ]

  const stats = [
    { number: "10M+", label: "Images Converted" },
    { number: "500K+", label: "Happy Users" },
    { number: "15+", label: "Supported Formats" },
    { number: "99.9%", label: "Uptime" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">About Our Mission</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're dedicated to providing the world's most secure, fast, and user-friendly image conversion tool. Built
            with privacy in mind, our platform processes everything locally in your browser.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Founded in 2024, Advanced Image Converter was born from a simple frustration: existing image conversion
                tools were either too complex, required downloads, or compromised user privacy by uploading files to
                servers.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We believed there had to be a better way. Using modern web technologies, we created a tool that
                processes images entirely in your browser, ensuring your files never leave your device while delivering
                professional-grade results.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, we're proud to serve millions of users worldwide, from photographers and designers to everyday
                users who simply need to convert an image format. Our commitment remains the same: providing powerful,
                secure, and accessible tools for everyone.
              </p>
            </CardContent>
          </Card>

          {/* Values Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Privacy</h3>
                  <p className="text-gray-600 dark:text-gray-300">Your data stays with you, always.</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
                  <p className="text-gray-600 dark:text-gray-300">Powerful tools for everyone, everywhere.</p>
                </div>
                <div className="text-center">
                  <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-300">Constantly improving and evolving.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
