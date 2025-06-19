import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Server, UserCheck, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Advanced Image Converter | Your Data, Your Control",
  description:
    "Complete privacy policy for Advanced Image Converter. Learn how we protect your data with client-side processing and zero data collection.",
  keywords: "privacy policy, data protection, image converter privacy, secure image processing, GDPR compliant",
  openGraph: {
    title: "Privacy Policy - Advanced Image Converter",
    description:
      "Your privacy is our priority. Learn about our commitment to data protection and client-side processing.",
    type: "website",
  },
}

export default function PrivacyPage() {
  const privacyFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Client-Side Processing",
      description: "All image processing happens in your browser. Your files never leave your device.",
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Zero Data Collection",
      description: "We don't collect, store, or analyze your personal data or images.",
    },
    {
      icon: <Lock className="h-8 w-8 text-purple-600" />,
      title: "No Registration Required",
      description: "Use our tool without creating accounts or providing personal information.",
    },
    {
      icon: <Server className="h-8 w-8 text-orange-600" />,
      title: "No Server Uploads",
      description: "Your images are never uploaded to our servers or any third-party services.",
    },
    {
      icon: <UserCheck className="h-8 w-8 text-red-600" />,
      title: "GDPR Compliant",
      description: "Fully compliant with European data protection regulations.",
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      title: "Transparent Practices",
      description: "Clear, honest communication about our data handling practices.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Your privacy is our top priority. Learn how we protect your data with our privacy-first approach.
          </p>
          <div className="bg-green-100 dark:bg-green-900/20 rounded-lg p-4 inline-block">
            <p className="text-green-800 dark:text-green-200 font-semibold">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Privacy by Design</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Built from the ground up with privacy as the foundation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold mb-6">1. Information We Collect</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <p className="mb-4">
                We do not collect any personal information from our users. Advanced Image Converter operates entirely
                within your browser without requiring registration, login, or any form of personal data submission.
              </p>

              <h3 className="text-xl font-semibold mb-4">Image Data</h3>
              <p className="mb-4">
                Your images are processed entirely within your browser. We never receive, store, or have access to the
                images you convert. All processing happens locally on your device.
              </p>

              <h3 className="text-xl font-semibold mb-4">Technical Information</h3>
              <p>
                We may collect anonymous, aggregated technical information such as browser type and general usage
                patterns through standard web analytics. This data cannot be used to identify individual users.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">2. How We Use Information</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p className="mb-4">
                Since we don't collect personal data or images, there's no personal information to use. Any anonymous
                technical data we collect is used solely for:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Improving the performance and reliability of our service</li>
                <li>Understanding general usage patterns to enhance user experience</li>
                <li>Identifying and fixing technical issues</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-6">3. Data Storage and Security</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Client-Side Processing</h3>
              <p className="mb-4">
                All image conversion happens in your browser using JavaScript. Your images are processed using HTML5
                Canvas API and Web Workers, ensuring they never leave your device.
              </p>

              <h3 className="text-xl font-semibold mb-4">No Server-Side Storage</h3>
              <p className="mb-4">
                We don't store any images on our servers. When you convert an image, it's processed locally and the
                result is made available for download directly from your browser's memory.
              </p>

              <h3 className="text-xl font-semibold mb-4">Security Measures</h3>
              <p>
                Our website uses HTTPS encryption to protect data in transit. Since we don't store personal data,
                there's no risk of data breaches involving your personal information.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">4. Third-Party Services</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Analytics</h3>
              <p className="mb-4">
                We may use privacy-focused analytics services to understand general usage patterns. These services are
                configured to respect user privacy and don't track individual users.
              </p>

              <h3 className="text-xl font-semibold mb-4">CDN Services</h3>
              <p>
                Our website may be served through Content Delivery Networks (CDNs) to improve performance. These
                services only handle the delivery of our website code, not your images or personal data.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">5. Cookies and Local Storage</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p className="mb-4">We use minimal cookies and local storage for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Remembering your preferred settings (theme, quality preferences)</li>
                <li>Analytics and performance monitoring</li>
                <li>Ensuring the website functions properly</li>
              </ul>
              <p className="mt-4">
                You can disable cookies in your browser settings, though this may affect some functionality.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">6. Your Rights</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p className="mb-4">
                Since we don't collect personal data, traditional data rights (access, rectification, erasure) don't
                apply. However, you maintain complete control over:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Your images - they never leave your device</li>
                <li>Your browser settings and preferences</li>
                <li>Your decision to use our service</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-6">7. Children's Privacy</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p>
                Our service is safe for users of all ages as we don't collect any personal information. However, we
                recommend parental supervision for children under 13 when using any online service.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">8. Changes to This Policy</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page with an
                updated effective date. Continued use of our service constitutes acceptance of any changes.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6">9. Contact Information</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="mb-4">
                If you have any questions about this privacy policy or our practices, please contact us:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Email: privacy@imageconverter.com</li>
                <li>
                  Contact Form:{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
