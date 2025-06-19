import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, AlertTriangle, Scale, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Advanced Image Converter | Usage Terms",
  description:
    "Read our terms of service for using the Advanced Image Converter. Fair usage policies, limitations, and user responsibilities.",
  keywords: "terms of service, usage terms, image converter terms, user agreement, service conditions",
  openGraph: {
    title: "Terms of Service - Advanced Image Converter",
    description: "Terms and conditions for using our free image conversion service.",
    type: "website",
  },
}

export default function TermsPage() {
  const lastUpdated = "December 2024"

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before using our image conversion service.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: {lastUpdated}</p>
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Free to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Our core image conversion service is completely free with no hidden charges.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <CardTitle>No Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Use our service without creating accounts or providing personal information.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Terms */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                By accessing and using Advanced Image Converter ("the Service"), you accept and agree to be bound by the
                terms and provision of this agreement.
              </p>
              <p>If you do not agree to abide by the above, please do not use this service.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Advanced Image Converter provides a free, browser-based image conversion service that allows users to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Convert images between various formats (JPG, PNG, WebP, AVIF, etc.)</li>
                <li>Adjust image quality and compression settings</li>
                <li>Resize images to specific dimensions</li>
                <li>Process multiple images simultaneously</li>
                <li>Download converted images individually or as ZIP files</li>
              </ul>
              <p>All processing occurs locally in your web browser without uploading files to our servers.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acceptable Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT
                to use the Service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process images that violate copyright, trademark, or other intellectual property rights</li>
                <li>To convert images containing illegal, harmful, threatening, abusive, or objectionable content</li>
                <li>To attempt to reverse engineer, decompile, or extract the source code of the Service</li>
                <li>
                  To use automated tools to access the Service in a way that could damage or overload our infrastructure
                </li>
                <li>To redistribute or resell the Service without explicit permission</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>As a user of the Service, you are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensuring you have the right to process and convert any images you use with our Service</li>
                <li>Complying with all applicable laws and regulations in your jurisdiction</li>
                <li>Using the Service in a reasonable manner that doesn't interfere with other users</li>
                <li>Keeping your browser and device secure when using the Service</li>
                <li>Understanding that all processing happens locally on your device</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Limitations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>While we strive to provide reliable service, please be aware of these limitations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>File Size:</strong> Maximum file size is 50MB per image
                </li>
                <li>
                  <strong>Browser Compatibility:</strong> Requires a modern web browser with JavaScript enabled
                </li>
                <li>
                  <strong>Processing Power:</strong> Performance depends on your device's capabilities
                </li>
                <li>
                  <strong>Format Support:</strong> Limited to supported image formats as listed on our website
                </li>
                <li>
                  <strong>Availability:</strong> Service may be temporarily unavailable for maintenance
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Disclaimers and Limitations of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Service "As Is":</strong> The Service is provided on an "as is" and "as available" basis without
                any warranties of any kind.
              </p>
              <p>
                <strong>No Warranties:</strong> We make no warranties, expressed or implied, regarding the Service's
                reliability, accuracy, or fitness for a particular purpose.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> In no event shall Advanced Image Converter be liable for any
                indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of
                profits, data, use, goodwill, or other intangible losses.
              </p>
              <p>
                <strong>Data Loss:</strong> We are not responsible for any loss of images or data that may occur during
                the conversion process.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive
                property of Advanced Image Converter and its licensors.
              </p>
              <p>
                You retain all rights to images you process using our Service. We do not claim any ownership or rights
                to your images.
              </p>
              <p>
                The Service is protected by copyright, trademark, and other laws. You may not reproduce, distribute, or
                create derivative works without explicit permission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy and Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Your privacy is important to us. Our Service is designed with privacy by design:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>No images are uploaded to our servers</li>
                <li>All processing happens locally in your browser</li>
                <li>We don't collect personal information or track usage</li>
                <li>See our Privacy Policy for complete details</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modifications to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing to access or
                use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will cease immediately. Since no account is required,
                termination simply means blocking access from your IP address if necessary.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which our service
                operates, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Through our contact form on this website</li>
                <li>Email: legal@imageconverter.com</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Agreement Notice */}
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">Agreement Acknowledgment</h2>
          <p className="text-blue-700 dark:text-blue-300">
            By using Advanced Image Converter, you acknowledge that you have read, understood, and agree to be bound by
            these Terms of Service. If you do not agree to these terms, please discontinue use of the Service
            immediately.
          </p>
        </div>
      </div>
    </div>
  )
}
