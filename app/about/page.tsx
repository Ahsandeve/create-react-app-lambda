import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Users, Award, Target, Heart } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Advanced Image Converter | Fast & Secure Image Processing",
  description:
    "Learn about our mission to provide the fastest, most secure image conversion tool. Convert JPG, PNG, WebP, AVIF, and more formats with complete privacy protection.",
  keywords:
    "about image converter, secure image processing, privacy-focused converter, image conversion tool, fast image converter",
  openGraph: {
    title: "About Advanced Image Converter - Privacy-First Image Processing",
    description:
      "Discover our commitment to fast, secure, and privacy-focused image conversion. No uploads, no data collection, just powerful image processing.",
    type: "website",
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Privacy First",
      description:
        "Your images never leave your device. All processing happens locally in your browser, ensuring complete privacy and security.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Lightning Fast",
      description:
        "Advanced algorithms and optimized processing deliver results in seconds, not minutes. Experience the fastest image conversion available.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "User Focused",
      description:
        "Built by developers for creators, photographers, and professionals who need reliable, efficient image processing tools.",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Quality Guaranteed",
      description:
        "Maintain image quality while reducing file sizes. Our advanced compression algorithms preserve visual fidelity.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Purpose Built",
      description:
        "Every feature is designed with purpose. No bloatware, no unnecessary complexity - just powerful image conversion.",
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      title: "Community Driven",
      description:
        "Continuously improved based on user feedback and real-world usage patterns from our growing community.",
    },
  ]

  const stats = [
    { number: "500K+", label: "Images Converted" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime" },
    { number: "0", label: "Data Collected" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Advanced Image Converter
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            We're on a mission to provide the world's fastest, most secure, and privacy-focused image conversion tool.
            Built for creators, by creators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#converter">
              <Button size="lg" className="rounded-full px-8">
                Try Our Tool
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Born from frustration with slow, privacy-invasive image conversion tools, Advanced Image Converter was
              created to solve real problems faced by photographers, designers, and content creators daily.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Problem We Solved</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Traditional image converters required uploading your files to unknown servers, waited minutes for
                processing, and often compressed images beyond recognition. We knew there had to be a better way.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
              <p className="text-gray-600 dark:text-gray-300">
                By leveraging modern browser capabilities and advanced compression algorithms, we built a tool that
                processes images instantly on your device. No uploads, no waiting, no privacy concerns.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  100% client-side processing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  No file size limits
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Supports 8+ image formats
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Advanced quality controls
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Batch processing capabilities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of creators who trust Advanced Image Converter for their daily image processing needs.
          </p>
          <Link href="/#converter">
            <Button size="lg" className="rounded-full px-8">
              Start Converting Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
