import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Server, Cookie, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Advanced Image Converter | Your Data Protection",
  description:
    "Learn how Advanced Image Converter protects your privacy. All image processing happens locally in your browser - no uploads, no data collection, complete privacy.",
  keywords:
    "privacy policy, data protection, secure image conversion, no upload image converter, browser-based processing, GDPR compliant",
  openGraph: {
    title: "Privacy Policy - Advanced Image Converter",
    description:
      "Your privacy is our priority. Learn how we protect your data with local browser processing and zero data collection.",
    type: "website",
    url: "https://image-converter.unaux.com/privacy/",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Advanced Image Converter",
    description: "Complete privacy protection with local browser processing. No uploads, no data collection.",
  },
  alternates: {
    canonical: "https://image-converter.unaux.com/privacy/",
  },
}

export default function PrivacyPage() {
  const privacyFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Local Processing",
      description: "All image conversion happens directly in your browser. Your files never leave your device.",
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-500" />,
      title: "No Data Collection",
      description: "We don't collect, store, or analyze your personal data or images in any way.",
    },
    {
      icon: <Lock className="h-8 w-8 text-purple-500" />,
      title: "Secure Connection",
      description: "All communications are encrypted with industry-standard SSL/TLS protocols.",
    },
    {
      icon: <Server className="h-8 w-8 text-orange-500" />,
      title: "No Server Storage",
      description: "Your images are never uploaded to our servers or stored anywhere online.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy is our top priority. Learn how we protect your data and ensure complete confidentiality.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Privacy Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {privacyFeatures.map((feature, index) => (
            <Card key={index} className="text-center h-full">
              <CardHeader>
                <div className="mx-auto mb-4">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Privacy Policy */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-6 w-6 text-primary" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <h3>Personal Information</h3>
              <p>
                We do not collect any personal information from users of our image conversion tool. The service operates
                entirely within your browser without requiring registration, login, or any form of personal data
                submission.
              </p>

              <h3>Image Data</h3>
              <p>
                Your images are processed locally in your browser using JavaScript. We never receive, store, or have
                access to your image files. All conversion operations happen on your device.
              </p>

              <h3>Usage Analytics</h3>
              <p>We may collect anonymous, aggregated usage statistics such as:</p>
              <ul>
                <li>Number of conversions performed (without file details)</li>
                <li>Popular conversion formats</li>
                <li>General geographic regions (country level only)</li>
                <li>Browser and device types for compatibility purposes</li>
              </ul>
              <p>This data is completely anonymous and cannot be linked to individual users.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                How We Protect Your Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <h3>Local Processing</h3>
              <p>
                Our image converter uses advanced web technologies to process images entirely within your browser. This
                means:
              </p>
              <ul>
                <li>Your images never leave your device</li>
                <li>No uploads to external servers</li>
                <li>No temporary storage on our systems</li>
                <li>Complete control over your data</li>
              </ul>

              <h3>Secure Connections</h3>
              <p>
                All communications between your browser and our website are encrypted using HTTPS/SSL protocols,
                ensuring that any data transmitted is secure.
              </p>

              <h3>No Third-Party Access</h3>
              <p>
                Since we don't collect or store your images, there's no risk of third-party access to your files through
                our service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-6 w-6 text-primary" />
                Cookies and Local Storage
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <h3>Essential Cookies</h3>
              <p>We use minimal cookies and local storage for:</p>
              <ul>
                <li>Remembering your preferred settings (theme, quality preferences)</li>
                <li>Maintaining tool functionality across sessions</li>
                <li>Ensuring optimal performance</li>
              </ul>

              <h3>Analytics Cookies</h3>
              <p>
                We may use anonymous analytics cookies to understand how our tool is used and improve the user
                experience. These cookies do not collect personal information.
              </p>

              <h3>Managing Cookies</h3>
              <p>
                You can control cookie settings through your browser preferences. Disabling cookies may affect some
                functionality but will not prevent image conversion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <h3>Data Control</h3>
              <p>
                Since we don't collect personal data or store your images, you maintain complete control over your
                information at all times.
              </p>

              <h3>Browser Controls</h3>
              <p>You can:</p>
              <ul>
                <li>Clear your browser's local storage and cookies at any time</li>
                <li>Use private/incognito browsing mode</li>
                <li>Disable JavaScript (though this will prevent the tool from working)</li>
                <li>Use browser extensions to block analytics</li>
              </ul>

              <h3>Contact Us</h3>
              <p>
                If you have questions about this privacy policy or our practices, please contact us at
                privacy@imageconverter.com.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or for legal
                reasons. We will notify users of any significant changes by updating the "Last updated" date at the top
                of this policy.
              </p>

              <p>
                We encourage you to review this policy periodically to stay informed about how we protect your privacy.
              </p>

              <h3>Compliance</h3>
              <p>This privacy policy is designed to comply with:</p>
              <ul>
                <li>General Data Protection Regulation (GDPR)</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>Other applicable privacy laws and regulations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
