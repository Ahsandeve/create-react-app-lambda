import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Shield, AlertTriangle, Scale, Globe } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service - Advanced Image Converter | Usage Terms & Conditions",
  description:
    "Terms of service for Advanced Image Converter. Understand your rights and responsibilities when using our free image conversion tool.",
  keywords: "terms of service, terms of use, image converter terms, legal terms, user agreement",
  openGraph: {
    title: "Terms of Service - Advanced Image Converter",
    description:
      "Read our terms of service to understand your rights and responsibilities when using our image conversion tool.",
    type: "website",
  },
}

export default function TermsPage() {
  const termsSummary = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Free to Use",
      description: "Our service is completely free with no hidden costs or subscription fees.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "No Registration",
      description: "Use our tool without creating accounts or providing personal information.",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Privacy Protected",
      description: "Your images are processed locally and never uploaded to our servers.",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-600" />,
      title: "Use Responsibly",
      description: "Follow our guidelines for acceptable use and respect intellectual property.",
    },
    {
      icon: <Scale className="h-8 w-8 text-red-600" />,
      title: "Legal Compliance",
      description: "Ensure your use complies with all applicable laws and regulations.",
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Global Access",
      description: "Available worldwide with respect for local laws and regulations.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Simple, fair terms for using our image conversion service. Your rights and responsibilities explained
            clearly.
          </p>
          <div className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-4 inline-block">
            <p className="text-blue-800 dark:text-blue-200 font-semibold">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Summary */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Terms at a Glance</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Quick overview of our terms and what they mean for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {termsSummary.map((term, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{term.icon}</div>
                  <CardTitle className="text-xl">{term.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{term.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p className="mb-4">
                By accessing and using Advanced Image Converter, you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
              <p>
                These terms apply to all users of the service, including but not limited to individuals, businesses, and
                organizations.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">2. Description of Service</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p className="mb-4">
                Advanced Image Converter is a free, web-based tool that allows users to convert images between different
                formats (JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, and HEIC) using client-side processing.
              </p>
              <p className="mb-4">Our service includes features such as:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Image format conversion</li>
                <li>Quality and compression control</li>
                <li>Batch processing capabilities</li>
                <li>Image resizing functionality</li>
                <li>Local processing without server uploads</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-6">3. User Responsibilities</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Acceptable Use</h3>
              <p className="mb-4">
                You agree to use our service only for lawful purposes and in accordance with these terms. You must not:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Process images that violate copyright or intellectual property rights</li>
                <li>Attempt to reverse engineer or compromise the service</li>
                <li>Use automated tools to access the service excessively</li>
                <li>Process images containing illegal, harmful, or offensive content</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Content Responsibility</h3>
              <p>
                You are solely responsible for the images you process using our service. Ensure you have the necessary
                rights and permissions for any content you convert.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">4. Intellectual Property</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Your Content</h3>
              <p className="mb-4">
                You retain all rights to the images you process using our service. We do not claim ownership of your
                content and do not store or access your images.
              </p>

              <h3 className="text-xl font-semibold mb-4">Our Service</h3>
              <p>
                The Advanced Image Converter service, including its design, code, and functionality, is protected by
                intellectual property laws. You may not copy, modify, or distribute our service without permission.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">5. Privacy and Data Protection</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p className="mb-4">Your privacy is important to us. Our service is designed with privacy by default:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>All image processing happens in your browser</li>
                <li>No images are uploaded to our servers</li>
                <li>We don't collect personal information</li>
                <li>No registration or accounts required</li>
              </ul>
              <p className="mt-4">
                For complete details, please read our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">6. Service Availability</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p className="mb-4">
                We strive to provide reliable service but cannot guarantee 100% uptime. The service may be temporarily
                unavailable due to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintenance and updates</li>
                <li>Technical issues beyond our control</li>
                <li>Internet connectivity problems</li>
                <li>Browser compatibility issues</li>
              </ul>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue the service at any time without notice.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">7. Limitation of Liability</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p className="mb-4">
                Our service is provided "as is" without warranties of any kind. We are not liable for:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Loss of data or images</li>
                <li>Damages resulting from service interruptions</li>
                <li>Issues with converted image quality</li>
                <li>Browser compatibility problems</li>
                <li>Indirect or consequential damages</li>
              </ul>
              <p className="mt-4">
                Your use of the service is at your own risk. Always keep backups of important images.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">8. Indemnification</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p>
                You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use
                of the service, including but not limited to copyright infringement claims related to images you
                process.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">9. Governing Law</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p>
                These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be
                resolved through appropriate legal channels.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">10. Changes to Terms</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p>
                We may update these terms from time to time. Changes will be posted on this page with an updated
                effective date. Continued use of our service constitutes acceptance of any changes.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">11. Contact Information</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="mb-4">If you have any questions about these terms, please contact us:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Email: legal@imageconverter.com</li>
                <li>
                  Contact Form:{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
