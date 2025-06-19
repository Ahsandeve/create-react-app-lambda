import type { Metadata } from "next"
import { Scale, FileText, AlertTriangle, CheckCircle, Users, Gavel } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Advanced Image Converter | Usage Guidelines",
  description:
    "Read our terms of service for using the Advanced Image Converter. Learn about usage rights, limitations, and guidelines.",
  keywords: "terms of service, image converter terms, usage agreement, service conditions",
  openGraph: {
    title: "Terms of Service - Advanced Image Converter",
    description: "Usage terms and conditions for our image conversion service",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl opacity-90">
              Please read these terms carefully before using our image conversion service.
            </p>
            <div className="mt-8 text-sm opacity-75">Last updated: {new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Scale className="h-6 w-6 text-primary mr-2" />
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    By accessing and using our Advanced Image Converter service, you accept and agree to be bound by the
                    terms and provision of this agreement.
                  </p>
                  <p>If you do not agree to abide by the above, please do not use this service.</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-primary mr-2" />
                  Description of Service
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Our Advanced Image Converter is a web-based tool that allows users to convert images between various
                    formats including:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>JPG/JPEG to PNG, WebP, GIF, BMP, TIFF, AVIF</li>
                    <li>PNG to JPG, WebP, GIF, BMP, TIFF, AVIF</li>
                    <li>WebP to JPG, PNG, GIF, BMP, TIFF</li>
                    <li>And various other format combinations</li>
                  </ul>
                  <p>The service operates entirely within your web browser using client-side processing technology.</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Permitted Uses
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>You may use our service for:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Personal image conversion needs</li>
                    <li>Professional and commercial image processing</li>
                    <li>Educational and research purposes</li>
                    <li>Converting images you own or have permission to process</li>
                    <li>Batch processing of your image collections</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                  Prohibited Uses
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>You must not use our service for:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Processing copyrighted images without proper authorization</li>
                    <li>Converting images containing illegal, harmful, or offensive content</li>
                    <li>Attempting to reverse engineer or replicate our conversion algorithms</li>
                    <li>Using automated scripts to overload our service</li>
                    <li>Circumventing any security measures we have in place</li>
                    <li>Processing images for malicious purposes</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  User Responsibilities
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <h3 className="text-lg font-semibold">Content Ownership</h3>
                  <p>
                    You are solely responsible for ensuring that you have the right to process any images you upload to
                    our service. This includes:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Owning the images or having explicit permission to process them</li>
                    <li>Ensuring images do not violate any copyright or intellectual property rights</li>
                    <li>Complying with all applicable laws and regulations</li>
                  </ul>

                  <h3 className="text-lg font-semibold">Technical Requirements</h3>
                  <p>To use our service effectively, you should:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Use a modern web browser with JavaScript enabled</li>
                    <li>Have sufficient device memory for processing large images</li>
                    <li>Maintain a stable internet connection for accessing the service</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    We strive to maintain high service availability but cannot guarantee uninterrupted access. The
                    service may be temporarily unavailable due to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Scheduled maintenance and updates</li>
                    <li>Technical issues or server problems</li>
                    <li>Network connectivity issues</li>
                    <li>Force majeure events</li>
                  </ul>
                  <p>We will make reasonable efforts to notify users of planned downtime when possible.</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <h3 className="text-lg font-semibold">Our Rights</h3>
                  <p>
                    The Advanced Image Converter service, including its design, code, algorithms, and documentation, is
                    our intellectual property and is protected by copyright and other laws.
                  </p>

                  <h3 className="text-lg font-semibold">Your Content</h3>
                  <p>
                    You retain all rights to images you process through our service. We do not claim any ownership over
                    your images or converted files.
                  </p>

                  <h3 className="text-lg font-semibold">Processing Technology</h3>
                  <p>
                    Since all processing occurs in your browser, the actual conversion is performed by your device using
                    our client-side algorithms.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Disclaimers and Limitations</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <h3 className="text-lg font-semibold">Service Provided "As Is"</h3>
                  <p>
                    Our service is provided on an "as is" basis without warranties of any kind, either express or
                    implied.
                  </p>

                  <h3 className="text-lg font-semibold">Quality and Accuracy</h3>
                  <p>While we strive for high-quality conversions, we cannot guarantee:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Perfect conversion quality for all image types</li>
                    <li>Compatibility with all image formats or variations</li>
                    <li>Preservation of all metadata in converted images</li>
                  </ul>

                  <h3 className="text-lg font-semibold">Limitation of Liability</h3>
                  <p>
                    We shall not be liable for any direct, indirect, incidental, or consequential damages arising from
                    your use of the service.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Gavel className="h-6 w-6 text-purple-600 mr-2" />
                  Governing Law
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    These terms shall be governed by and construed in accordance with applicable laws. Any disputes
                    arising from these terms or use of the service shall be resolved through appropriate legal channels.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>We reserve the right to modify these terms at any time. When we make changes:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>We will update the "Last updated" date</li>
                    <li>Significant changes will be highlighted on our website</li>
                    <li>Continued use of the service constitutes acceptance of updated terms</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>If you have questions about these terms, please contact us:</p>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p>
                      <strong>Email:</strong> legal@imageconverter.com
                    </p>
                    <p>
                      <strong>Subject Line:</strong> Terms of Service Inquiry
                    </p>
                    <p>
                      <strong>Response Time:</strong> Within 5 business days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Converting?</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Now that you understand our terms, try our secure and powerful image conversion tool.
          </p>
          <a
            href="/#converter"
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Converting Images
          </a>
        </div>
      </section>
    </div>
  )
}
