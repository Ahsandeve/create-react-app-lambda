import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Server, Lock, FileText, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Advanced Image Converter | Your Privacy is Our Priority",
  description:
    "Learn how we protect your privacy with local image processing. No data collection, no server uploads, complete privacy protection for your image conversion needs.",
  keywords: "privacy policy, image converter privacy, local processing, no data collection, GDPR compliant",
  openGraph: {
    title: "Privacy Policy - Advanced Image Converter",
    description: "Complete privacy protection with local image processing",
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your privacy is our absolute priority. Learn how we protect your data with our privacy-first approach.
          </p>
          <div className="flex justify-center mt-6">
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
              Last Updated: December 2024
            </div>
          </div>
        </div>

        {/* Privacy Promise */}
        <Card className="mb-12 p-8 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <CardHeader className="text-center pb-6">
            <Shield className="h-16 w-16 text-white mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold">Our Privacy Promise</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg opacity-95 mb-4">
              <strong>Your images never leave your device.</strong> All processing happens locally in your browser,
              ensuring complete privacy and security of your personal data.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Zero Data Collection</h4>
                <p className="text-sm opacity-90">We don't collect, store, or analyze your images</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Local Processing</h4>
                <p className="text-sm opacity-90">Everything happens in your browser</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">No Servers</h4>
                <p className="text-sm opacity-90">Your files never touch our servers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-2xl text-gray-800 dark:text-white">Information We Collect</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Images and Files</h3>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>We DO NOT collect your images.</strong> All image processing happens locally in your browser.
                  Your files are never uploaded to our servers or any third-party services.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Technical Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                We may collect minimal technical information to improve our service:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                <li>Browser type and version (for compatibility)</li>
                <li>Device type (for responsive design)</li>
                <li>General usage statistics (anonymized)</li>
                <li>Error reports (no personal data included)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Optional Account Information</h3>
              <p className="text-gray-600 dark:text-gray-300">
                If you choose to create an account (optional), we collect only your email address and chosen username.
                This is used solely for account management and preferences.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How We Protect Your Privacy */}
        <Card className="mb-8 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-8 w-8 text-green-600" />
              <CardTitle className="text-2xl text-gray-800 dark:text-white">How We Protect Your Privacy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Client-Side Processing</h4>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  All image conversion happens in your browser using JavaScript and WebAssembly. No server communication
                  required.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Secure Memory</h4>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Images are processed in secure browser memory and automatically cleared when you close the tab.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">No Tracking</h4>
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  We don't use cookies for tracking, analytics, or advertising. Only essential functionality cookies.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">HTTPS Encryption</h4>
                <p className="text-sm text-orange-700 dark:text-orange-400">
                  All communication is encrypted with industry-standard SSL/TLS protocols.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card className="mb-8 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-8 w-8 text-orange-600" />
              <CardTitle className="text-2xl text-gray-800 dark:text-white">Third-Party Services</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use minimal third-party services, and none of them have access to your images:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Content Delivery Network (CDN)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Used to deliver our application files faster. No user data is shared.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Error Monitoring</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Helps us identify and fix technical issues. Only error logs, no personal data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8 p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-8 w-8 text-purple-600" />
              <CardTitle className="text-2xl text-gray-800 dark:text-white">Your Rights</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Since we don't collect your personal data or images, you have complete control:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
              <li>
                <strong>Right to Privacy:</strong> Your images never leave your device
              </li>
              <li>
                <strong>Right to Delete:</strong> Simply close your browser - nothing is stored
              </li>
              <li>
                <strong>Right to Access:</strong> No personal data is collected to access
              </li>
              <li>
                <strong>Right to Portability:</strong> Your converted images are yours to keep
              </li>
              <li>
                <strong>Right to Object:</strong> You can stop using our service anytime
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-8 w-8 text-blue-400" />
              <CardTitle className="text-2xl">Questions About Privacy?</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              We're committed to transparency. If you have any questions about our privacy practices, please don't
              hesitate to contact us.
            </p>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm">
                <strong>Email:</strong> privacy@advancedimageconverter.com
                <br />
                <strong>Response Time:</strong> Within 24 hours
                <br />
                <strong>Available:</strong> 24/7 for privacy concerns
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
