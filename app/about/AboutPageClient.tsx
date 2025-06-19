"use client"

import { Shield, Zap, Award, CheckCircle, Globe } from "lucide-react"

export default function AboutPageClient() {
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
      description: "Optimized algorithms deliver instant results, even for large batches of high-resolution images.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Universal Access",
      description: "Works on any device, anywhere. No downloads, no installations, no limitations.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Professional Quality",
      description: "Advanced compression algorithms maintain maximum quality while optimizing file sizes.",
    },
  ]

  const milestones = [
    { year: "2023", title: "Project Launch", description: "Started with a vision to simplify image conversion" },
    { year: "2024", title: "Advanced Features", description: "Added batch processing and quality optimization" },
    { year: "2024", title: "Security Focus", description: "Implemented client-side processing for maximum privacy" },
    { year: "2024", title: "Performance Boost", description: "Optimized for speed and reliability" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">About Our Mission</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We believe that image conversion should be simple, secure, and accessible to everyone. Our tool represents
              years of development focused on creating the most user-friendly and powerful image processing experience
              possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-3 shadow-md">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Images Converted</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-3 shadow-md">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Supported Formats</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-3 shadow-md">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Privacy Protected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Built for Creators, By Creators</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We started this project because we were frustrated with existing image conversion tools. They were
                  either too complicated, required software downloads, or didn't respect user privacy.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our team of developers and designers came together with a simple goal: create the most intuitive,
                  powerful, and secure image converter that works entirely in your browser.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">No uploads, complete privacy</span>
                </div>
                <div className="flex items-center gap-2 text-primary mt-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Professional-grade results</span>
                </div>
                <div className="flex items-center gap-2 text-primary mt-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Works on any device</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <h4 className="text-xl font-semibold mb-4">Why We're Different</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Client-side processing for maximum security
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Advanced compression algorithms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Batch processing capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">Responsive design for all devices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-primary"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg ml-12 md:ml-0">
                      <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Convert Your Images?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of users who trust our converter for their image processing needs.
          </p>
          <a
            href="/#converter"
            className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Converting Now
          </a>
        </div>
      </section>
    </div>
  )
}
