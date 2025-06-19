import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Server, Cookie, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Advanced Image Converter | Your Privacy Matters",
  description:
    "Read our comprehensive privacy policy. We process images locally in your browser and never collect or store your personal data or images.",
  keywords: "privacy policy, data protection, image converter privacy, no data collection, browser processing",
  openGraph: {
    title: "Privacy Policy - Advanced Image Converter",
    description: "Your privacy is our priority. Learn how we protect your data and images.",
    type: "website",
  },
}

export default function PrivacyPage() {
  const lastUpdated = "December 2024"

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy is our top priority. This policy explains how we protect your data.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: {lastUpdated}</p>
        </div>

        {/* Privacy Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <CardTitle>No Data Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                We don't collect, store, or process any personal information or images on our servers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Lock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Local Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                All image conversions happen directly in your browser using client-side technology.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Eye className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <CardTitle>No Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                We don't use analytics, tracking pixels, or any form of user behavior monitoring.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Policy */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Information We Don't Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Advanced Image Converter is designed with privacy by design principles. We explicitly do NOT collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information (names, email addresses, phone numbers)</li>
                <li>Images or files you upload or convert</li>
                <li>IP addresses or location data</li>
                <li>Browser fingerprints or device information</li>
                <li>Usage patterns or conversion history</li>
                <li>Cookies for tracking purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                How Our Tool Works
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our image converter operates entirely within your web browser using modern JavaScript APIs:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Images are processed using HTML5 Canvas and File APIs</li>
                <li>No files are uploaded to our servers at any point</li>
                <li>Converted images are generated locally on your device</li>
                <li>All processing happens in your browser's memory</li>
                <li>Files are automatically cleared when you close the browser tab</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5" />
                Cookies and Local Storage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We use minimal local storage only for essential functionality:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Theme Preference:</strong> Stores your dark/light mode choice
                </li>
                <li>
                  <strong>Settings:</strong> Remembers your quality and format preferences
                </li>
                <li>
                  <strong>No Tracking Cookies:</strong> We don't use any analytics or advertising cookies
                </li>
              </ul>
              <p>You can clear this data anytime through your browser settings without affecting functionality.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our website is completely self-contained and doesn't integrate with third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>No Google Analytics or similar tracking services</li>
                <li>No social media widgets or sharing buttons</li>
                <li>No external fonts or CDN resources that could track users</li>
                <li>No advertising networks or affiliate tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Since we don't collect or store any data, traditional data security concerns don't apply. However:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Our website is served over HTTPS for secure communication</li>
                <li>All code runs locally in your browser's secure sandbox</li>
                <li>We regularly update our codebase to address any security vulnerabilities</li>
                <li>No server-side processing means no server-side security risks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Since we don't collect personal data, traditional data rights don't apply, but you have:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Complete Control:</strong> All processing happens on your device
                </li>
                <li>
                  <strong>No Data Requests Needed:</strong> We have no data to provide or delete
                </li>
                <li>
                  <strong>Transparency:</strong> Our privacy practices are clearly documented
                </li>
                <li>
                  <strong>Choice:</strong> Use our tool without any data sharing requirements
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may update this privacy policy to reflect changes in our practices or for legal reasons. Any changes
                will be posted on this page with an updated "Last modified" date.
              </p>
              <p>
                Since we don't collect contact information, we cannot notify users directly of changes. We recommend
                checking this page periodically if you have concerns about privacy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                If you have questions about this privacy policy or our privacy practices, you can contact us through:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Our contact form on this website</li>
                <li>Email: privacy@imageconverter.com</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Please note that we can only respond to general privacy questions, as we don't have access to any
                personal data or usage information.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Summary */}
        <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h2 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">Privacy Summary</h2>
          <p className="text-green-700 dark:text-green-300">
            <strong>Bottom line:</strong> We've built our image converter to be completely private by design. Your
            images never leave your device, we don't collect any personal information, and we don't track your usage.
            You can use our tool with complete confidence in your privacy.
          </p>
        </div>
      </div>
    </div>
  )
}
