"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Shield, Eye, Lock, Server, Trash2, UserCheck } from "lucide-react"

export default function PrivacyPageClient() {
  const privacyPoints = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Local Processing Only",
      description: "All image conversion happens in your browser. Your files never leave your device.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Zero Data Collection",
      description: "We don't collect, store, or analyze your images or personal data.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "No Server Uploads",
      description: "Images are processed entirely client-side. No server communication required.",
    },
    {
      icon: <Trash2 className="h-8 w-8" />,
      title: "Automatic Cleanup",
      description: "Temporary files are automatically cleared when you close your browser.",
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "No Registration",
      description: "Use our tool without creating accounts or providing personal information.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "GDPR Compliant",
      description: "Our privacy-first approach ensures full compliance with data protection laws.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your privacy is our top priority. Learn how we protect your data with our privacy-first approach to image
            conversion.
          </p>
          <div className="mt-6 text-sm text-muted-foreground">Last updated: January 1, 2024</div>
        </motion.div>

        {/* Privacy Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {privacyPoints.map((point, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <div className="text-primary mb-3">{point.icon}</div>
                <CardTitle className="text-lg">{point.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-base">{point.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Detailed Privacy Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none space-y-8"
        >
          <Card className="p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl">How We Protect Your Privacy</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4">1. Information We Don't Collect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike many online services, we don't collect any personal information or image data. Our tool
                  operates entirely in your browser using client-side processing, which means:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>We never see or access your images</li>
                  <li>No personal data is required or collected</li>
                  <li>No tracking cookies or analytics on image data</li>
                  <li>No account creation or registration needed</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">2. How Our Tool Works</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Advanced Image Converter uses modern web technologies to process images directly in your browser.
                  Here's what happens when you use our tool:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>Images are loaded into your browser's memory only</li>
                  <li>Processing happens using HTML5 Canvas and WebAssembly</li>
                  <li>Converted images are generated locally</li>
                  <li>All data is cleared when you close the browser tab</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">3. Technical Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect minimal technical data to improve our service, but this never includes your images or
                  personal information:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>Basic browser information (user agent, screen resolution)</li>
                  <li>General usage statistics (page views, feature usage)</li>
                  <li>Error logs for debugging (without personal data)</li>
                  <li>Performance metrics to optimize the tool</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">4. Third-Party Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use some third-party services for basic functionality:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>CDN services for faster loading (no personal data shared)</li>
                  <li>Analytics for general traffic patterns (anonymous data only)</li>
                  <li>No advertising networks or tracking pixels</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">5. Data Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Since we don't collect or store your data, traditional data breaches are impossible. However, we still
                  maintain security best practices:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>HTTPS encryption for all website communications</li>
                  <li>Regular security audits of our codebase</li>
                  <li>Secure hosting infrastructure</li>
                  <li>No server-side image processing or storage</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">6. Your Rights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Since we don't collect personal data, most traditional data rights don't apply. However, you have
                  complete control over your experience:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>Use the tool without providing any personal information</li>
                  <li>Clear browser data to remove any temporary files</li>
                  <li>Contact us with any privacy concerns</li>
                  <li>Request information about our privacy practices</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">7. Contact Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this privacy policy or our practices, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm">
                    Email: privacy@advancedimageconverter.com
                    <br />
                    Subject: Privacy Policy Inquiry
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">8. Policy Updates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy occasionally to reflect changes in our practices or legal
                  requirements. Any changes will be posted on this page with an updated date. Since we don't collect
                  contact information, we recommend checking this page periodically for updates.
                </p>
              </section>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-purple-600/10 border-primary/20">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl">Questions About Privacy?</CardTitle>
              <CardDescription className="text-lg">
                We're committed to transparency and would be happy to address any concerns
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-6">
                Our privacy-first approach means you can use our tool with complete confidence. Your images stay on your
                device, always.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:privacy@advancedimageconverter.com" className="inline-block">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Contact Privacy Team
                  </button>
                </a>
                <a href="/#converter" className="inline-block">
                  <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                    Try Our Secure Tool
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
