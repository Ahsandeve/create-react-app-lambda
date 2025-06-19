import type { Metadata } from "next"
import { Shield, Eye, Lock, Server, UserCheck, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Advanced Image Converter | Your Privacy is Our Priority",
  description:
    "Learn how we protect your privacy. All image processing happens locally in your browser - we never see, store, or access your images.",
  keywords: "privacy policy, image converter privacy, secure image processing, browser-based conversion",
  openGraph: {
    title: "Privacy Policy - Advanced Image Converter",
    description: "Complete transparency about how we protect your privacy and data",
    type: "website",
  },
}

export default function PrivacyPage() {
  const privacyFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Client-Side Processing",
      description: "All image conversions happen entirely in your browser. Your files never leave your device.",
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "No Image Storage",
      description: "We never store, cache, or retain any of your images on our servers.",
    },
    {
      icon: <Lock className="h-8 w-8 text-purple-600" />,
      title: "Secure Connection",
      description: "All connections use HTTPS encryption to protect your data in transit.",
    },
    {
      icon: <Server className="h-8 w-8 text-orange-600" />,
      title: "No Server Uploads",
      description: "Your images are processed locally - no uploads to external servers required.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl opacity-90">
              Your privacy is our top priority. Learn how we protect your data and images.
            </p>
            <div className="mt-8 text-sm opacity-75">Last updated: {new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>

      {/* Privacy Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How We Protect Your Privacy</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {privacyFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-primary mr-2" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <p>
                    We do not collect any personal information when you use our image converter tool. The tool operates
                    entirely within your browser.
                  </p>

                  <h3 className="text-lg font-semibold">Image Data</h3>
                  <p>
                    Your images are processed locally in your browser using JavaScript. We never receive, store, or have
                    access to your image files.
                  </p>

                  <h3 className="text-lg font-semibold">Usage Analytics</h3>
                  <p>We may collect anonymous usage statistics such as:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Number of conversions performed</li>
                    <li>Popular output formats</li>
                    <li>General usage patterns</li>
                    <li>Technical performance metrics</li>
                  </ul>
                  <p className="text-sm italic">
                    This data is completely anonymous and cannot be linked to individual users.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  How We Protect Your Data
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <h3 className="text-lg font-semibold">Client-Side Processing</h3>
                  <p>
                    All image processing occurs entirely within your web browser using modern JavaScript APIs. Your
                    images never leave your device during the conversion process.
                  </p>

                  <h3 className="text-lg font-semibold">No Server Storage</h3>
                  <p>
                    We do not maintain any servers for image processing or storage. Our service is delivered as a static
                    web application.
                  </p>

                  <h3 className="text-lg font-semibold">Secure Connections</h3>
                  <p>
                    Our website uses HTTPS encryption to ensure all communications between your browser and our servers
                    are secure.
                  </p>

                  <h3 className="text-lg font-semibold">Memory Management</h3>
                  <p>
                    Processed images are automatically cleared from browser memory when you leave the page or close your
                    browser.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <UserCheck className="h-6 w-6 text-primary mr-2" />
                  Your Rights
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Since we don't collect personal data or store your images, you maintain complete control over your
                    information:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong>Right to Privacy:</strong> Your images remain private and are never transmitted to our
                      servers
                    </li>
                    <li>
                      <strong>Right to Control:</strong> You can clear all data by simply refreshing or closing your
                      browser
                    </li>
                    <li>
                      <strong>Right to Access:</strong> All processing happens transparently in your browser
                    </li>
                    <li>
                      <strong>Right to Deletion:</strong> No data is stored, so nothing needs to be deleted
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Cookies and Local Storage</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>We use minimal cookies and local storage for:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Remembering your preferred settings (theme, format preferences)</li>
                    <li>Improving user experience across sessions</li>
                    <li>Anonymous analytics (if you consent)</li>
                  </ul>
                  <p>
                    You can disable cookies in your browser settings without affecting the core functionality of our
                    image converter.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>We may use the following third-party services:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>
                      <strong>Analytics:</strong> For understanding general usage patterns (anonymized data only)
                    </li>
                    <li>
                      <strong>CDN:</strong> For faster content delivery (no personal data transmitted)
                    </li>
                    <li>
                      <strong>Hosting:</strong> Static file hosting services (no backend processing)
                    </li>
                  </ul>
                  <p>These services do not have access to your images or personal information.</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>We may update this privacy policy from time to time. When we do:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>We will update the "Last updated" date at the top of this page</li>
                    <li>We will notify users of significant changes through our website</li>
                    <li>Your continued use of the service constitutes acceptance of the updated policy</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>If you have any questions about this privacy policy or our practices, please contact us:</p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <p>
                      <strong>Email:</strong> privacy@imageconverter.com
                    </p>
                    <p>
                      <strong>Response Time:</strong> Within 48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Your Privacy, Our Promise</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We've built our image converter with privacy by design. Your images never leave your device, ensuring
            complete confidentiality and security.
          </p>
          <a
            href="/#converter"
            className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Try Our Secure Converter
          </a>
        </div>
      </section>
    </div>
  )
}
