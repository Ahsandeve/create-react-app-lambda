import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, AlertTriangle, Scale, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Advanced Image Converter | Usage Guidelines",
  description:
    "Read our terms of service for using the Advanced Image Converter. Free image conversion tool with clear usage guidelines and user responsibilities.",
  keywords:
    "terms of service, usage guidelines, image converter terms, legal agreement, user agreement, service conditions",
  openGraph: {
    title: "Terms of Service - Advanced Image Converter",
    description:
      "Clear and fair terms of service for our free image conversion tool. Understand your rights and responsibilities.",
    type: "website",
    url: "https://image-converter.unaux.com/terms/",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service - Advanced Image Converter",
    description: "Fair and transparent terms for using our free image conversion service.",
  },
  alternates: {
    canonical: "https://image-converter.unaux.com/terms/",
  },
}

export default function TermsPage() {
  const keyPoints = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Free for Everyone",
      description: "Our service is completely free for personal and commercial use with no hidden fees.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Privacy Protected",
      description: "Your images are processed locally in your browser and never uploaded to our servers.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "No Registration",
      description: "Use our tool immediately without creating accounts or providing personal information.",
    },
    {
      icon: <Scale className="h-8 w-8 text-purple-500" />,
      title: "Fair Usage",
      description: "Reasonable usage limits ensure the service remains fast and available for everyone.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Clear, fair, and transparent terms for using our free image conversion service.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyPoints.map((point, index) => (
            <Card key={index} className="text-center h-full">
              <CardHeader>
                <div className="mx-auto mb-4">{point.icon}</div>
                <CardTitle className="text-lg">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Terms */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                By accessing and using Advanced Image Converter ("the Service"), you accept and agree to be bound by the
                terms and provision of this agreement.
              </p>

              <p>
                If you do not agree to abide by the above, please do not use this service. These terms apply to all
                visitors, users, and others who access or use the service.
              </p>

              <h3>Changes to Terms</h3>
              <p>
                We reserve the right to update these terms at any time. Changes will be effective immediately upon
                posting. Your continued use of the service after changes are posted constitutes acceptance of the
                updated terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Use of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <h3>Permitted Use</h3>
              <p>You may use our service for:</p>
              <ul>
                <li>Converting image formats for personal or commercial purposes</li>
                <li>Processing images you own or have permission to modify</li>
                <li>Educational and research purposes</li>
                <li>Integration into your own projects (subject to attribution requirements)</li>
              </ul>

              <h3>Prohibited Use</h3>
              <p>You may not use our service to:</p>
              <ul>
                <li>Process copyrighted images without proper authorization</li>
                <li>Convert illegal, harmful, or offensive content</li>
                <li>Attempt to reverse engineer or compromise the service</li>
                <li>Use automated tools to overload our servers</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>

              <h3>Usage Limits</h3>
              <p>To ensure fair access for all users, we may implement reasonable usage limits including:</p>
              <ul>
                <li>Maximum file size limits (currently 50MB per file)</li>
                <li>Rate limiting for excessive usage</li>
                <li>Temporary restrictions for abuse prevention</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Privacy and Data
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <h3>Your Content</h3>
              <p>
                You retain all rights to images you process through our service. We do not claim ownership of your
                content.
              </p>

              <h3>Data Processing</h3>
              <p>All image processing occurs locally in your browser. We do not:</p>
              <ul>
                <li>Upload your images to our servers</li>
                <li>Store your images in any form</li>
                <li>Access or analyze your image content</li>
                <li>Share your images with third parties</li>
              </ul>

              <h3>Responsibility for Content</h3>
              <p>
                You are solely responsible for the images you process and must ensure you have the right to modify and
                convert them.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                Disclaimers and Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <h3>Service Availability</h3>
              <p>
                We strive to maintain high availability but cannot guarantee uninterrupted service. The service is
                provided "as is" without warranties of any kind.
              </p>

              <h3>Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to:
              </p>
              <ul>
                <li>Loss of data or images</li>
                <li>Business interruption</li>
                <li>Loss of profits or revenue</li>
                <li>Cost of substitute services</li>
              </ul>

              <h3>Technical Limitations</h3>
              <p>Image conversion quality and compatibility may vary based on:</p>
              <ul>
                <li>Browser capabilities and version</li>
                <li>Device performance and memory</li>
                <li>Original image format and quality</li>
                <li>Network connectivity</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                Legal and Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <h3>Governing Law</h3>
              <p>
                These terms shall be governed by and construed in accordance with applicable laws, without regard to
                conflict of law principles.
              </p>

              <h3>Dispute Resolution</h3>
              <p>
                Any disputes arising from the use of this service will be resolved through good faith negotiation. If
                resolution cannot be reached, disputes may be subject to binding arbitration.
              </p>

              <h3>Severability</h3>
              <p>
                If any provision of these terms is found to be unenforceable, the remaining provisions will remain in
                full force and effect.
              </p>

              <h3>Entire Agreement</h3>
              <p>
                These terms constitute the entire agreement between you and Advanced Image Converter regarding the use
                of the service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none dark:prose-invert">
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <ul>
                <li>Email: legal@imageconverter.com</li>
                <li>Website: Contact form on our website</li>
              </ul>

              <p>We will respond to all inquiries within 48 hours during business days.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
