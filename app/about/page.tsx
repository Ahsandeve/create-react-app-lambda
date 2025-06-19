import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Users, Award, Target, Heart } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Advanced Image Converter | Fast & Secure Image Processing",
  description:
    "Learn about our mission to provide the fastest, most secure image conversion tool. Convert images between formats with privacy-first approach and cutting-edge technology.",
  keywords: "about image converter, image processing company, secure image conversion, privacy-first image tool",
  openGraph: {
    title: "About Advanced Image Converter",
    description: "Fast, secure, and privacy-first image conversion tool",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Advanced Image Converter
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're dedicated to providing the fastest, most secure, and user-friendly image conversion experience. Your
            privacy and data security are our top priorities.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                To democratize image processing by providing powerful, accessible tools that respect user privacy while
                delivering professional-grade results instantly in your browser.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                A world where anyone can process images professionally without compromising privacy, regardless of
                technical expertise or device capabilities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Privacy First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All processing happens locally in your browser. Your images never leave your device, ensuring complete
                privacy.
              </p>
            </Card>

            <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <Zap className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized algorithms and modern web technologies deliver results in seconds, not minutes.
              </p>
            </Card>

            <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">User-Centric</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every feature is designed with real user needs in mind, from professionals to casual users.
              </p>
            </Card>
          </div>
        </div>

        {/* Technology & Innovation */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardHeader className="text-center pb-6">
              <Award className="h-16 w-16 text-white mx-auto mb-4" />
              <CardTitle className="text-3xl font-bold">Technology & Innovation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg mb-6 opacity-90">
                Built with cutting-edge web technologies including WebAssembly, Canvas API, and modern JavaScript
                frameworks to deliver desktop-quality performance in your browser.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  WebAssembly
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Canvas API
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Tailwind CSS
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Commitment */}
        <div className="text-center mb-16">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                We're committed to continuous improvement, regular updates, and maintaining the highest standards of
                security and performance. Your feedback drives our development, and we're always listening.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/#contact-form"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Get In Touch
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Ready to Convert Your Images?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Experience the power of professional image conversion with complete privacy protection.
          </p>
          <Link
            href="/#converter"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-lg shadow-lg hover:shadow-xl"
          >
            Start Converting Now
          </Link>
        </div>
      </div>
    </div>
  )
}
