import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Database, Shield, Camera } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Image Metadata & EXIF Data Management Guide 2024 | Advanced Image Converter",
  description:
    "Master image metadata and EXIF data management. Learn to view, edit, remove, and preserve important photo information for privacy and organization.",
  keywords: [
    "EXIF data",
    "image metadata",
    "photo information",
    "privacy protection",
    "GPS data removal",
    "camera settings",
  ],
  openGraph: {
    title: "Image Metadata & EXIF Data Management Guide",
    description: "Complete guide to managing image metadata and EXIF data for privacy and organization.",
    type: "article",
  },
}

export default function ImageMetadataGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Image Metadata & EXIF Data Management Guide 2024
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>Published on December 3, 2024</span>
              <span className="mx-2">•</span>
              <span>By Lisa Chen</span>
              <span className="mx-2">•</span>
              <span>13 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Image metadata contains valuable information about your photos, but it can also pose privacy risks. Learn
              how to view, edit, and manage EXIF data effectively.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-l-4 border-l-teal-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Database className="w-6 h-6 text-teal-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What is Image Metadata?</h3>
                    <p className="text-gray-700">
                      Image metadata is data about data - information embedded within image files that describes camera
                      settings, location, timestamps, and technical details about how the photo was captured.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Understanding EXIF Data</h2>
            <p>
              EXIF (Exchangeable Image File Format) is the most common type of metadata found in digital photos. It's
              automatically created by cameras and smartphones when you take a picture, storing technical and
              descriptive information.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Types of EXIF Data</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-blue-700">Technical Data</h4>
                  <ul className="space-y-2 text-sm">
                    <li>📷 Camera make and model</li>
                    <li>🔧 Camera settings (ISO, aperture, shutter speed)</li>
                    <li>📏 Image dimensions and resolution</li>
                    <li>🎨 Color space and bit depth</li>
                    <li>🔍 Focal length and lens information</li>
                    <li>⚡ Flash settings</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-green-700">Descriptive Data</h4>
                  <ul className="space-y-2 text-sm">
                    <li>📅 Date and time taken</li>
                    <li>📍 GPS coordinates (if enabled)</li>
                    <li>👤 Author/photographer name</li>
                    <li>📝 Image description and keywords</li>
                    <li>©️ Copyright information</li>
                    <li>⭐ Rating and color labels</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Privacy Concerns with Metadata</h2>

            <Card className="my-8 bg-red-50 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-red-800">Privacy Risks</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• GPS coordinates can reveal your home address</li>
                      <li>• Timestamps show when and where photos were taken</li>
                      <li>• Camera information can be used for device fingerprinting</li>
                      <li>• Personal information may be embedded in custom fields</li>
                      <li>• Social media platforms may not strip all metadata</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Common Privacy Scenarios</h3>
            <ul className="space-y-3">
              <li>
                <strong>Social Media Sharing:</strong> Photos shared online may reveal location and personal information
              </li>
              <li>
                <strong>Real Estate Listings:</strong> Property photos can expose exact addresses through GPS data
              </li>
              <li>
                <strong>Online Marketplaces:</strong> Product photos may contain unwanted personal information
              </li>
              <li>
                <strong>Professional Photography:</strong> Client photos may need metadata removal for privacy
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Viewing Image Metadata</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Built-in Operating System Tools</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Windows</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Right-click on image file</li>
                    <li>Select "Properties"</li>
                    <li>Click "Details" tab</li>
                    <li>View all available metadata</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">macOS</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Right-click on image file</li>
                    <li>Select "Get Info"</li>
                    <li>Expand "More Info" section</li>
                    <li>View EXIF data details</li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Professional Metadata Viewers</h3>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Tool</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Platform</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Features</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">ExifTool</td>
                    <td className="border border-gray-300 px-4 py-2">Cross-platform</td>
                    <td className="border border-gray-300 px-4 py-2">Command-line, comprehensive</td>
                    <td className="border border-gray-300 px-4 py-2">Free</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Adobe Bridge</td>
                    <td className="border border-gray-300 px-4 py-2">Windows/Mac</td>
                    <td className="border border-gray-300 px-4 py-2">Professional editing, batch</td>
                    <td className="border border-gray-300 px-4 py-2">Subscription</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Photo Mechanic</td>
                    <td className="border border-gray-300 px-4 py-2">Windows/Mac</td>
                    <td className="border border-gray-300 px-4 py-2">Fast viewing, editing</td>
                    <td className="border border-gray-300 px-4 py-2">$150</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">IrfanView</td>
                    <td className="border border-gray-300 px-4 py-2">Windows</td>
                    <td className="border border-gray-300 px-4 py-2">Lightweight, plugins</td>
                    <td className="border border-gray-300 px-4 py-2">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Editing and Managing Metadata</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Adding Useful Metadata</h3>
            <p>Properly managed metadata can improve photo organization and searchability:</p>

            <Card className="my-6 bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Best Practices for Adding Metadata:</h4>
                <ul className="space-y-2">
                  <li>✓ Add descriptive keywords for easy searching</li>
                  <li>✓ Include copyright and contact information</li>
                  <li>✓ Use consistent naming conventions</li>
                  <li>✓ Add location information (when appropriate)</li>
                  <li>✓ Include technical notes for reference</li>
                  <li>✓ Set up metadata templates for efficiency</li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Batch Metadata Operations</h3>
            <p>For large photo collections, batch processing saves significant time:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Batch Adding</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Apply copyright to entire collection</li>
                    <li>• Add event or location keywords</li>
                    <li>• Set consistent author information</li>
                    <li>• Apply rating or color labels</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Batch Removal</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Strip GPS data for privacy</li>
                    <li>• Remove camera serial numbers</li>
                    <li>• Clear personal information</li>
                    <li>• Standardize technical data</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Removing Metadata for Privacy</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Quick Removal Methods</h3>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Windows Quick Method:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Right-click image → Properties → Details</li>
                  <li>Click "Remove Properties and Personal Information"</li>
                  <li>Choose "Remove the following properties"</li>
                  <li>Select metadata to remove</li>
                  <li>Click OK to apply changes</li>
                </ol>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Advanced Removal Tools</h3>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">ExifCleaner</h4>
                  <p className="text-sm text-gray-600 mb-2">Free, drag-and-drop tool</p>
                  <ul className="text-xs space-y-1">
                    <li>• Cross-platform</li>
                    <li>• Batch processing</li>
                    <li>• Preserves image quality</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">EXIF Purge</h4>
                  <p className="text-sm text-gray-600 mb-2">Online metadata remover</p>
                  <ul className="text-xs space-y-1">
                    <li>• No software installation</li>
                    <li>• Multiple format support</li>
                    <li>• Privacy-focused</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">ImageOptim</h4>
                  <p className="text-sm text-gray-600 mb-2">Mac optimization tool</p>
                  <ul className="text-xs space-y-1">
                    <li>• Removes metadata</li>
                    <li>• Optimizes file size</li>
                    <li>• Batch processing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Metadata in Different File Formats</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Format-Specific Considerations</h3>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Format</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Metadata Support</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Common Use</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Privacy Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">JPEG</td>
                    <td className="border border-gray-300 px-4 py-2">Full EXIF support</td>
                    <td className="border border-gray-300 px-4 py-2">Photos, web images</td>
                    <td className="border border-gray-300 px-4 py-2">Most vulnerable to privacy leaks</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">PNG</td>
                    <td className="border border-gray-300 px-4 py-2">Limited metadata</td>
                    <td className="border border-gray-300 px-4 py-2">Graphics, screenshots</td>
                    <td className="border border-gray-300 px-4 py-2">Generally safer for privacy</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">TIFF</td>
                    <td className="border border-gray-300 px-4 py-2">Extensive metadata</td>
                    <td className="border border-gray-300 px-4 py-2">Professional photography</td>
                    <td className="border border-gray-300 px-4 py-2">Can contain detailed information</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">WebP</td>
                    <td className="border border-gray-300 px-4 py-2">Basic EXIF support</td>
                    <td className="border border-gray-300 px-4 py-2">Web optimization</td>
                    <td className="border border-gray-300 px-4 py-2">Often strips metadata automatically</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Professional Metadata Workflows</h2>

            <Card className="my-8 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Camera className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-800">Professional Best Practices</h3>
                    <p className="text-blue-700">
                      Professional photographers and organizations need systematic approaches to metadata management for
                      efficiency, consistency, and legal compliance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Metadata Templates</h3>
            <p>Create standardized templates for different types of shoots:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Template Examples:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">Wedding Photography:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Copyright: [Photographer Name]</li>
                      <li>• Keywords: wedding, [couple names]</li>
                      <li>• Event: [Wedding date and venue]</li>
                      <li>• Contact: [Business information]</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Stock Photography:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Title: Descriptive image title</li>
                      <li>• Keywords: Relevant search terms</li>
                      <li>• Model releases: [If applicable]</li>
                      <li>• Usage rights: [License information]</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Automated Metadata Management</h3>
            <p>Use software automation to streamline metadata workflows:</p>

            <ul className="space-y-3 mt-4">
              <li>
                <strong>Import Presets:</strong> Automatically apply metadata during image import
              </li>
              <li>
                <strong>Keyword Hierarchies:</strong> Create structured keyword systems for consistency
              </li>
              <li>
                <strong>Batch Processing:</strong> Apply changes to hundreds of images simultaneously
              </li>
              <li>
                <strong>Export Profiles:</strong> Different metadata for different output purposes
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Legal and Compliance Considerations</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Copyright and Ownership</h3>
            <p>Metadata plays a crucial role in establishing and protecting image rights:</p>

            <Card className="my-6 bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Legal Metadata Fields:</h4>
                <ul className="space-y-2">
                  <li>
                    • <strong>Copyright:</strong> Establishes ownership and rights
                  </li>
                  <li>
                    • <strong>Creator:</strong> Identifies the photographer or artist
                  </li>
                  <li>
                    • <strong>Rights Usage:</strong> Specifies how image can be used
                  </li>
                  <li>
                    • <strong>Contact Information:</strong> Enables licensing inquiries
                  </li>
                  <li>
                    • <strong>Creation Date:</strong> Important for copyright duration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">GDPR and Privacy Compliance</h3>
            <p>Organizations must consider privacy regulations when handling image metadata:</p>

            <ul className="space-y-3 mt-4">
              <li>
                <strong>Data Minimization:</strong> Only collect necessary metadata
              </li>
              <li>
                <strong>Consent:</strong> Obtain permission for location and personal data
              </li>
              <li>
                <strong>Right to Erasure:</strong> Ability to remove personal information
              </li>
              <li>
                <strong>Data Portability:</strong> Provide metadata in accessible formats
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Future of Image Metadata</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Emerging Technologies</h3>
            <p>New developments are changing how we create and manage image metadata:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">AI-Generated Metadata</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Automatic keyword generation</li>
                    <li>• Object and scene recognition</li>
                    <li>• Facial recognition and tagging</li>
                    <li>• Content-based descriptions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Blockchain Integration</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Immutable ownership records</li>
                    <li>• Provenance tracking</li>
                    <li>• Smart contract licensing</li>
                    <li>• Decentralized metadata storage</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-8 rounded-lg my-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Manage Your Image Metadata</h2>
                <p className="mb-6">
                  Use our advanced tools to view, edit, and remove image metadata while preserving image quality and
                  protecting your privacy.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Start Managing Metadata
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Does removing metadata affect image quality?</h3>
                  <p className="text-gray-700">
                    No, removing metadata does not affect the actual image data or visual quality. Metadata is stored
                    separately from the pixel information, so removal only reduces file size slightly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can I recover deleted metadata?</h3>
                  <p className="text-gray-700">
                    Once metadata is permanently removed from an image file, it cannot be recovered. Always keep backup
                    copies of original files if you need to preserve metadata.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Do social media platforms remove metadata?</h3>
                  <p className="text-gray-700">
                    Most major platforms (Facebook, Instagram, Twitter) strip EXIF data during upload for privacy and
                    performance reasons, but it's best to remove sensitive metadata before uploading.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How can I add metadata to images without it?</h3>
                  <p className="text-gray-700">
                    Use photo editing software like Adobe Lightroom, Bridge, or free tools like digiKam to add metadata.
                    You can also use command-line tools like ExifTool for batch operations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What metadata should I always remove before sharing?</h3>
                  <p className="text-gray-700">
                    Always remove GPS coordinates, camera serial numbers, and personal information. Consider removing
                    timestamps and camera details depending on your privacy needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
