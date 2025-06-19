import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Database, Shield, MapPin } from "lucide-react"
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
    description:
      "Complete guide to managing image metadata and EXIF data for privacy, organization, and professional workflows.",
    type: "article",
  },
}

export default function MetadataEXIFGuide() {
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
              Understand and manage image metadata and EXIF data effectively. Learn to protect privacy, organize photos,
              and leverage technical information for better photography workflows.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-l-4 border-l-teal-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Database className="w-6 h-6 text-teal-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What is Metadata?</h3>
                    <p className="text-gray-700">
                      Image metadata is "data about data" - information embedded in image files that describes camera
                      settings, location, timestamps, and other technical details about how the photo was captured.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Understanding Image Metadata Types</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">EXIF (Exchangeable Image File Format)</h3>
            <p>
              EXIF data contains technical information about how a photo was taken, automatically recorded by digital
              cameras and smartphones:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-blue-700">Camera Settings</h4>
                  <ul className="space-y-2 text-sm">
                    <li>📷 Camera make and model</li>
                    <li>🔍 Lens information</li>
                    <li>⚡ Shutter speed</li>
                    <li>🕳️ Aperture (f-stop)</li>
                    <li>📊 ISO sensitivity</li>
                    <li>🎯 Focus mode and points</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-green-700">Technical Data</h4>
                  <ul className="space-y-2 text-sm">
                    <li>📅 Date and time taken</li>
                    <li>📐 Image dimensions</li>
                    <li>🎨 Color space</li>
                    <li>💾 File size and format</li>
                    <li>🔄 Orientation</li>
                    <li>⚙️ Software used</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">GPS and Location Data</h3>
            <p>Modern smartphones and GPS-enabled cameras embed precise location information:</p>

            <Card className="my-6 bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-yellow-800">Location Information Includes:</h4>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• Latitude and longitude coordinates</li>
                      <li>• Altitude above sea level</li>
                      <li>• Direction camera was facing</li>
                      <li>• GPS timestamp</li>
                      <li>• Location accuracy information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">IPTC and XMP Metadata</h3>
            <p>Professional metadata standards for organizing and describing images:</p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Metadata Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Common Fields</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">IPTC</td>
                    <td className="border border-gray-300 px-4 py-2">Editorial and copyright info</td>
                    <td className="border border-gray-300 px-4 py-2">Title, caption, keywords, copyright</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">XMP</td>
                    <td className="border border-gray-300 px-4 py-2">Extensible metadata platform</td>
                    <td className="border border-gray-300 px-4 py-2">Ratings, labels, editing history</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Dublin Core</td>
                    <td className="border border-gray-300 px-4 py-2">Standard descriptive elements</td>
                    <td className="border border-gray-300 px-4 py-2">Creator, subject, description</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Privacy and Security Concerns</h2>

            <Card className="my-8 bg-red-50 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-red-800">Privacy Risks</h3>
                    <p className="text-red-700 mb-3">
                      Sharing photos with embedded metadata can reveal sensitive information about your location,
                      equipment, and personal habits.
                    </p>
                    <ul className="space-y-2 text-red-700">
                      <li>• Home and work locations from GPS data</li>
                      <li>• Daily routines and travel patterns</li>
                      <li>• Expensive camera equipment ownership</li>
                      <li>• Personal information in custom fields</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Common Privacy Scenarios</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-red-600">High Risk Situations</h4>
                  <ul className="space-y-2 text-sm">
                    <li>🏠 Photos taken at home</li>
                    <li>👶 Children's photos with location</li>
                    <li>💼 Workplace or business locations</li>
                    <li>🎉 Private events and gatherings</li>
                    <li>💰 Photos showing valuable items</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-green-600">Lower Risk Situations</h4>
                  <ul className="space-y-2 text-sm">
                    <li>🏛️ Public landmarks and attractions</li>
                    <li>🌅 Landscape photography</li>
                    <li>🎨 Artistic and abstract images</li>
                    <li>📸 Professional portfolio work</li>
                    <li>🛍️ Product photography</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Viewing and Reading Metadata</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Built-in Operating System Tools</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Windows</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Right-click image file</li>
                    <li>Select "Properties"</li>
                    <li>Click "Details" tab</li>
                    <li>View EXIF and other metadata</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">macOS</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Select image in Finder</li>
                    <li>Press Cmd+I or Get Info</li>
                    <li>Expand "More Info" section</li>
                    <li>View detailed metadata</li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Professional Metadata Tools</h3>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">ExifTool</h4>
                  <p className="text-sm text-gray-600 mb-2">Command-line application</p>
                  <ul className="text-xs space-y-1">
                    <li>• Most comprehensive tool</li>
                    <li>• Supports 100+ formats</li>
                    <li>• Batch processing</li>
                    <li>• Free and cross-platform</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Adobe Bridge</h4>
                  <p className="text-sm text-gray-600 mb-2">Professional asset manager</p>
                  <ul className="text-xs space-y-1">
                    <li>• Visual metadata panel</li>
                    <li>• Batch editing capabilities</li>
                    <li>• Integration with Adobe CC</li>
                    <li>• Template-based workflows</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Photo Mechanic</h4>
                  <p className="text-sm text-gray-600 mb-2">Professional photo management</p>
                  <ul className="text-xs space-y-1">
                    <li>• Fast metadata editing</li>
                    <li>• IPTC template system</li>
                    <li>• Keyword management</li>
                    <li>• Used by photojournalists</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Editing and Managing Metadata</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Adding Professional Metadata</h3>
            <p>Properly tagged images are easier to organize, search, and license:</p>

            <Card className="my-6 bg-blue-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Essential Professional Fields:</h4>
                <ul className="space-y-2">
                  <li>
                    <strong>Copyright:</strong> © 2024 Your Name. All rights reserved.
                  </li>
                  <li>
                    <strong>Creator:</strong> Your full name or business name
                  </li>
                  <li>
                    <strong>Contact Info:</strong> Email and website
                  </li>
                  <li>
                    <strong>Keywords:</strong> Relevant, searchable terms
                  </li>
                  <li>
                    <strong>Caption:</strong> Descriptive text about the image
                  </li>
                  <li>
                    <strong>Usage Rights:</strong> Licensing and usage terms
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Batch Metadata Operations</h3>
            <p>Efficiently manage metadata across multiple images:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">ExifTool Batch Commands:</h4>
                <pre className="text-sm overflow-x-auto bg-black text-green-400 p-4 rounded">
                  <code>{`# Add copyright to all JPEG files
exiftool -overwrite_original -Copyright="© 2024 Your Name" *.jpg

# Remove GPS data from all images
exiftool -gps:all= -overwrite_original *.jpg

# Add keywords to multiple files
exiftool -Keywords+="landscape,nature,sunset" *.jpg

# Copy metadata from one file to others
exiftool -TagsFromFile source.jpg -all:all target*.jpg`}</code>
                </pre>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Removing Metadata for Privacy</h2>

            <Card className="my-8 bg-orange-50 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-orange-800">When to Strip Metadata</h3>
                    <p className="text-orange-700">
                      Remove metadata before sharing images on social media, selling online, or any situation where
                      privacy is a concern.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Quick Removal Methods</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Online Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Pros:</strong> No software installation
                    </li>
                    <li>
                      • <strong>Pros:</strong> User-friendly interface
                    </li>
                    <li>
                      • <strong>Cons:</strong> Upload privacy concerns
                    </li>
                    <li>
                      • <strong>Cons:</strong> Limited batch processing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Desktop Software</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Pros:</strong> Complete privacy control
                    </li>
                    <li>
                      • <strong>Pros:</strong> Batch processing
                    </li>
                    <li>
                      • <strong>Cons:</strong> Software installation required
                    </li>
                    <li>
                      • <strong>Cons:</strong> Learning curve
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Selective Metadata Removal</h3>
            <p>Sometimes you want to remove only specific metadata while preserving other information:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Common Selective Removal Scenarios:</h4>
                <ul className="space-y-2">
                  <li>
                    <strong>Remove GPS only:</strong> Keep camera settings, remove location
                  </li>
                  <li>
                    <strong>Remove personal info:</strong> Keep technical data, remove creator info
                  </li>
                  <li>
                    <strong>Remove timestamps:</strong> Keep everything except date/time
                  </li>
                  <li>
                    <strong>Remove camera info:</strong> Hide equipment details, keep other data
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Professional Workflow Integration</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Photography Business Workflows</h3>
            <p>Integrate metadata management into your professional photography workflow:</p>

            <Card className="my-6 bg-green-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Workflow Steps:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <strong>Import:</strong> Apply copyright and contact info templates
                  </li>
                  <li>
                    <strong>Organize:</strong> Add keywords, ratings, and collections
                  </li>
                  <li>
                    <strong>Edit:</strong> Preserve original metadata in RAW files
                  </li>
                  <li>
                    <strong>Export:</strong> Apply appropriate metadata for delivery format
                  </li>
                  <li>
                    <strong>Archive:</strong> Maintain full metadata in master files
                  </li>
                  <li>
                    <strong>Deliver:</strong> Strip sensitive data from client copies
                  </li>
                </ol>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Stock Photography Optimization</h3>
            <p>Proper metadata is crucial for stock photography success:</p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Platform</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Keyword Limit</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Required Fields</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Special Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Shutterstock</td>
                    <td className="border border-gray-300 px-4 py-2">50 keywords</td>
                    <td className="border border-gray-300 px-4 py-2">Title, description</td>
                    <td className="border border-gray-300 px-4 py-2">Model releases for people</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Getty Images</td>
                    <td className="border border-gray-300 px-4 py-2">30 keywords</td>
                    <td className="border border-gray-300 px-4 py-2">Caption, keywords</td>
                    <td className="border border-gray-300 px-4 py-2">Editorial vs commercial tags</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Adobe Stock</td>
                    <td className="border border-gray-300 px-4 py-2">49 keywords</td>
                    <td className="border border-gray-300 px-4 py-2">Title, keywords</td>
                    <td className="border border-gray-300 px-4 py-2">Category selection</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Technical Implementation</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Metadata Standards and Formats</h3>
            <p>Understanding metadata standards helps in choosing the right approach:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Embedded Metadata</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Stored within image file</li>
                    <li>• Travels with the image</li>
                    <li>• Supported by most formats</li>
                    <li>• Can increase file size</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Sidecar Files</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Separate .xmp files</li>
                    <li>• Preserves original image</li>
                    <li>• Used by Lightroom/Bridge</li>
                    <li>• Requires file management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Automation and Scripting</h3>
            <p>Automate repetitive metadata tasks with scripts and workflows:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Python Script Example:</h4>
                <pre className="text-sm overflow-x-auto bg-black text-green-400 p-4 rounded">
                  <code>{`from PIL import Image
from PIL.ExifTags import TAGS
import os

def extract_metadata(image_path):
    """Extract and display image metadata"""
    image = Image.open(image_path)
    exifdata = image.getexif()
    
    for tag_id in exifdata:
        tag = TAGS.get(tag_id, tag_id)
        data = exifdata.get(tag_id)
        print(f"{tag}: {data}")

# Process all images in directory
for filename in os.listdir("./images"):
    if filename.lower().endswith(('.jpg', '.jpeg')):
        extract_metadata(f"./images/{filename}")`}</code>
                </pre>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Best Practices and Recommendations</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Metadata Management Strategy</h3>

            <Card className="my-6 bg-blue-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Professional Best Practices:</h4>
                <ul className="space-y-2">
                  <li>
                    ✓ <strong>Consistent templates:</strong> Use metadata templates for efficiency
                  </li>
                  <li>
                    ✓ <strong>Backup originals:</strong> Always preserve original files with full metadata
                  </li>
                  <li>
                    ✓ <strong>Privacy by default:</strong> Strip metadata for public sharing
                  </li>
                  <li>
                    ✓ <strong>Regular audits:</strong> Periodically review and clean metadata
                  </li>
                  <li>
                    ✓ <strong>Documentation:</strong> Maintain records of metadata workflows
                  </li>
                  <li>
                    ✓ <strong>Tool standardization:</strong> Use consistent tools across team
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Platform-Specific Considerations</h3>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Platform</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Metadata Handling</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Privacy Level</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Facebook</td>
                    <td className="border border-gray-300 px-4 py-2">Strips most metadata</td>
                    <td className="border border-gray-300 px-4 py-2">Good</td>
                    <td className="border border-gray-300 px-4 py-2">Safe to upload with metadata</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Instagram</td>
                    <td className="border border-gray-300 px-4 py-2">Removes EXIF data</td>
                    <td className="border border-gray-300 px-4 py-2">Good</td>
                    <td className="border border-gray-300 px-4 py-2">Platform handles removal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Twitter</td>
                    <td className="border border-gray-300 px-4 py-2">Strips GPS, keeps some EXIF</td>
                    <td className="border border-gray-300 px-4 py-2">Moderate</td>
                    <td className="border border-gray-300 px-4 py-2">Pre-strip for full privacy</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Email</td>
                    <td className="border border-gray-300 px-4 py-2">Preserves all metadata</td>
                    <td className="border border-gray-300 px-4 py-2">Poor</td>
                    <td className="border border-gray-300 px-4 py-2">Always strip before sending</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-8 rounded-lg my-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Manage Your Image Metadata</h2>
                <p className="mb-6">
                  Process your images with advanced metadata management tools. View, edit, or remove EXIF data while
                  preserving image quality.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Process Images Now
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Does removing metadata affect image quality?</h3>
                  <p className="text-gray-700">
                    No, removing metadata doesn't affect the actual image pixels or visual quality. It only removes the
                    embedded information about the photo.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can I recover metadata after it's been removed?</h3>
                  <p className="text-gray-700">
                    Once metadata is permanently removed from a file, it cannot be recovered. Always keep backup copies
                    of original files with full metadata intact.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Do all image formats support metadata?</h3>
                  <p className="text-gray-700">
                    Most common formats (JPEG, TIFF, RAW) support extensive metadata. PNG has limited support, while GIF
                    supports very little metadata information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How do I add copyright information to my photos?</h3>
                  <p className="text-gray-700">
                    Use photo management software like Lightroom, Bridge, or ExifTool to add copyright information to
                    the IPTC metadata fields. Set up templates for consistent application.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Should I remove metadata from all shared photos?</h3>
                  <p className="text-gray-700">
                    It depends on the context. Remove metadata for personal photos shared publicly, but keep it for
                    professional work where attribution and technical information add value.
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
