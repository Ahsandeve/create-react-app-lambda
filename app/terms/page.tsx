import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, AlertTriangle, Scale, Globe, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Advanced Image Converter | Usage Terms & Conditions",
  description:
    "Read our terms of service for using the Advanced Image Converter. Fair usage policies, user responsibilities, and service limitations explained clearly.",
  keywords: "terms of service, usage terms, image converter terms, service conditions, user agreement",
  openGraph: {
    title: "Terms of Service - Advanced Image Converter",
    description: "Clear and fair terms for using our image conversion service",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Clear, fair, and transparent terms for using our image conversion service.
          </p>
          <div className="flex justify-center mt-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              Effective Date: December 2024
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-2xl text-gray-800 dark:text-white">Introduction</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to Advanced Image Converter ("we," "our," or "us"). These Terms of Service ("Terms") govern your
              use of our image conversion service and website. By using our service, you agree to these terms in full.
              If you disagree with any part of these terms, please do not use our service.
            </p>
          </CardContent>
        </Card>

        {/* Service Description */}
        <Card className="mb-8 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-8 w-8 text-green-600" />
              <CardTitle className="text-2xl text-gray-800 dark:text-white">Service Description</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Advanced Image Converter is a free, browser-based image conversion service that allows you to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
              <li>Convert images between various formats (JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, HEIC, SVG)</li>
              <li>Adjust image quality and compression settings</li>
              <li>Process multiple images simultaneously</li>
              <li>Resize and optimize images</li>
              <li>Download converted images individually or in batches</li>
            </ul>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <p className="text-green-800 dark:text-green-300">
                <strong>Privacy First:</strong> All processing happens locally in your browser. Your images never leave
                your device or touch our servers.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Acceptable Use */}
        <Card className="mb-8 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-2xl text-gray-800 dark:text-white">Acceptable Use Policy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">You may use our service to:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                <li>Convert your own images or images you have legal rights to process</li>
                <li>Process images for personal, educational, or commercial purposes</li>
                <li>Convert images in compliance with applicable laws and regulations</li>
                <li>Use the service for legitimate image processing needs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                You may NOT use our service to:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-red-600 dark:text-red-400 ml-4">
                <li>Process copyrighted images without proper authorization</li>
                <li>Convert illegal, harmful, or offensive content</li>
                <li>Attempt to reverse engineer or exploit our service</li>
                <li>Use automated scripts to overload our infrastructure</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on others' intellectual property rights</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="mb-8 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-purple-600" />
              <CardTitle className="text-2xl text-gray-800 dark:text-white">User Responsibilities</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">By using our service, you agree to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Legal Compliance</h4>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Ensure all images you process comply with applicable laws and don't infringe on others' rights.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Content Ownership</h4>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Only process images you own or have explicit permission to modify and convert.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Fair Usage</h4>
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  Use our service reasonably and don't attempt to overwhelm our infrastructure.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Account Security</h4>
                <p className="text-sm text-orange-700 dark:text-orange-400">
                  If you create an account, keep your credentials secure and notify us of any breaches.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Limitations */}
        <Card className="mb-8 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-orange-600" />
              <CardTitle className="text-2xl text-gray-800 dark:text-white">Service Limitations</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              While we strive to provide excellent service, please be aware of these limitations:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">File Size Limits</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Maximum file size is 50MB per image to ensure optimal performance.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Browser Compatibility</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Service requires modern browsers with JavaScript enabled.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Format Support</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Some advanced features may not be available for all formats.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Service Availability</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  While we aim for 99.9% uptime, occasional maintenance may be required.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-indigo-600" />
              <CardTitle className="text-2xl text-gray-800 dark:text-white">Intellectual Property</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Our Rights</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                We retain all rights to our service, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                <li>Service design, code, and algorithms</li>
                <li>Trademarks, logos, and branding</li>
                <li>Documentation and user guides</li>
                <li>Service improvements and updates</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Your Rights</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You retain all rights to your original images and any converted images you create using our service. We
                claim no ownership over your content.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card className="mb-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <CardTitle className="text-2xl text-gray-800 dark:text-white">Important Disclaimers</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our service is provided "as is" without warranties of any kind. While we strive for accuracy and
              reliability:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>We cannot guarantee perfect conversion results for all images</li>
              <li>Users are responsible for backing up important files</li>
              <li>We are not liable for any loss or damage to your images</li>
              <li>Service availability may vary due to technical issues</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact & Changes */}
        <Card className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-8 w-8 text-blue-400" />
              <CardTitle className="text-2xl">Updates & Contact</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Changes to Terms</h3>
              <p className="text-gray-300 text-sm mb-4">
                We may update these terms occasionally. We'll notify users of significant changes via our website or
                email (if you have an account).
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Contact Information</h4>
              <p className="text-sm text-gray-300">
                <strong>Email:</strong> legal@advancedimageconverter.com
                <br />
                <strong>Response Time:</strong> Within 48 hours
                <br />
                <strong>For urgent matters:</strong> Use "URGENT" in subject line
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
