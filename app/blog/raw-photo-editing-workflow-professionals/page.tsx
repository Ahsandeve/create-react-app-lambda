import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Camera, Layers, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "RAW Photo Editing Workflow for Professionals 2024 | Advanced Image Converter",
  description:
    "Master professional RAW photo editing workflows. Learn color grading, exposure correction, batch processing, and export optimization for stunning results.",
  keywords: [
    "RAW photo editing",
    "professional workflow",
    "color grading",
    "Lightroom",
    "Photoshop",
    "photo processing",
  ],
  openGraph: {
    title: "RAW Photo Editing Workflow for Professionals",
    description: "Complete guide to professional RAW photo editing workflows and techniques.",
    type: "article",
  },
}

export default function RAWWorkflowGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              RAW Photo Editing Workflow for Professionals 2024
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>Published on December 8, 2024</span>
              <span className="mx-2">•</span>
              <span>By Emma Thompson</span>
              <span className="mx-2">•</span>
              <span>18 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Master the complete professional RAW photo editing workflow from import to export. Learn advanced
              techniques for color grading, exposure correction, and efficient batch processing.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Camera className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Professional Workflow</h3>
                    <p className="text-gray-700">
                      This guide covers the complete professional RAW editing workflow used by commercial photographers,
                      wedding photographers, and photo studios worldwide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Understanding RAW Format Advantages</h2>
            <p>
              RAW files contain unprocessed sensor data from your camera, providing maximum flexibility for
              post-processing. Unlike JPEGs, RAW images retain all original image information, allowing for
              non-destructive editing with superior quality results.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-green-700">RAW Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✅ 12-16 bit color depth</li>
                    <li>✅ Non-destructive editing</li>
                    <li>✅ Superior dynamic range</li>
                    <li>✅ White balance flexibility</li>
                    <li>✅ Highlight/shadow recovery</li>
                    <li>✅ Professional color grading</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-blue-700">Professional Applications</h3>
                  <ul className="space-y-2 text-sm">
                    <li>📸 Wedding photography</li>
                    <li>🏢 Commercial shoots</li>
                    <li>🎨 Fine art photography</li>
                    <li>📰 Photojournalism</li>
                    <li>🌅 Landscape photography</li>
                    <li>👑 Portrait sessions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Pre-Processing Setup</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">File Organization Strategy</h3>
            <p>
              Efficient file organization is crucial for professional workflows. Establish a consistent folder structure
              that scales with your business:
            </p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`Professional Folder Structure:
📁 2024_Photography
  📁 01_January
    📁 2024-01-15_Smith_Wedding
      📁 01_RAW_Originals
      📁 02_Edited_Finals
      📁 03_Client_Delivery
      📁 04_Social_Media
    📁 2024-01-20_Corporate_Headshots
  📁 02_February
  📁 Templates_Presets
  📁 Backup_Archives`}</code>
                </pre>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Color Management Setup</h3>
            <p>Proper color management ensures consistent results across devices and print:</p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Output Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Color Space</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Bit Depth</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Web/Social</td>
                    <td className="border border-gray-300 px-4 py-2">sRGB</td>
                    <td className="border border-gray-300 px-4 py-2">8-bit</td>
                    <td className="border border-gray-300 px-4 py-2">Online display</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Print (Standard)</td>
                    <td className="border border-gray-300 px-4 py-2">Adobe RGB</td>
                    <td className="border border-gray-300 px-4 py-2">16-bit</td>
                    <td className="border border-gray-300 px-4 py-2">Most prints</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Print (Professional)</td>
                    <td className="border border-gray-300 px-4 py-2">ProPhoto RGB</td>
                    <td className="border border-gray-300 px-4 py-2">16-bit</td>
                    <td className="border border-gray-300 px-4 py-2">Fine art prints</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Archival</td>
                    <td className="border border-gray-300 px-4 py-2">ProPhoto RGB</td>
                    <td className="border border-gray-300 px-4 py-2">16-bit</td>
                    <td className="border border-gray-300 px-4 py-2">Long-term storage</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Import and Initial Processing</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Lightroom Import Workflow</h3>
            <p>Streamline your import process with consistent settings and metadata:</p>

            <Card className="my-6 bg-blue-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Import Settings Checklist:</h4>
                <ul className="space-y-2">
                  <li>✓ Apply copyright and contact information</li>
                  <li>✓ Set consistent file naming convention</li>
                  <li>✓ Create 1:1 previews for critical shots</li>
                  <li>✓ Apply basic lens corrections</li>
                  <li>✓ Set appropriate keywords and collections</li>
                  <li>✓ Enable automatic backup to second location</li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Initial Image Culling</h3>
            <p>Efficient culling saves time and focuses attention on the best images:</p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-red-600">Reject (X)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Out of focus</li>
                    <li>• Poor composition</li>
                    <li>• Technical issues</li>
                    <li>• Duplicates (worse versions)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-yellow-600">Maybe (No rating)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Potentially usable</li>
                    <li>• Alternative angles</li>
                    <li>• Backup shots</li>
                    <li>• Client options</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-green-600">Keepers (1-5 stars)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Sharp and well-composed</li>
                    <li>• Good expressions/moments</li>
                    <li>• Client favorites</li>
                    <li>• Portfolio potential</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Core RAW Processing Techniques</h2>

            <Card className="my-8 bg-orange-50 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Layers className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-orange-800">Processing Order Matters</h3>
                    <p className="text-orange-700">
                      Following the correct processing order ensures optimal image quality and prevents artifacts. Each
                      adjustment builds upon the previous ones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: Basic Panel Adjustments</h3>
            <p>Start with global adjustments to establish the foundation:</p>

            <ol className="list-decimal list-inside space-y-3 mt-4">
              <li>
                <strong>White Balance:</strong> Correct color temperature and tint
              </li>
              <li>
                <strong>Exposure:</strong> Adjust overall brightness (±1-2 stops typical)
              </li>
              <li>
                <strong>Highlights:</strong> Recover blown highlights (-50 to -100)
              </li>
              <li>
                <strong>Shadows:</strong> Lift shadow detail (+30 to +80)
              </li>
              <li>
                <strong>Whites:</strong> Set white point for contrast
              </li>
              <li>
                <strong>Blacks:</strong> Establish black point for depth
              </li>
            </ol>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: Tone Curve Refinement</h3>
            <p>Fine-tune contrast and create mood with targeted curve adjustments:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Common Tone Curve Adjustments:</h4>
                <ul className="space-y-2">
                  <li>
                    <strong>Film Emulation:</strong> Slight S-curve with lifted shadows
                  </li>
                  <li>
                    <strong>Dramatic Look:</strong> Strong S-curve with increased contrast
                  </li>
                  <li>
                    <strong>Soft/Dreamy:</strong> Lifted blacks, compressed highlights
                  </li>
                  <li>
                    <strong>Vintage Film:</strong> Rolled highlights, warm split toning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Step 3: HSL Color Grading</h3>
            <p>Precise color control separates professional work from amateur processing:</p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Color</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Hue Shift</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Saturation</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Luminance</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Orange</td>
                    <td className="border border-gray-300 px-4 py-2">-10 to -20</td>
                    <td className="border border-gray-300 px-4 py-2">-10 to -30</td>
                    <td className="border border-gray-300 px-4 py-2">+10 to +20</td>
                    <td className="border border-gray-300 px-4 py-2">Better skin tones</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Blue</td>
                    <td className="border border-gray-300 px-4 py-2">+5 to +15</td>
                    <td className="border border-gray-300 px-4 py-2">+10 to +25</td>
                    <td className="border border-gray-300 px-4 py-2">0 to -10</td>
                    <td className="border border-gray-300 px-4 py-2">Deeper skies</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Green</td>
                    <td className="border border-gray-300 px-4 py-2">+10 to +20</td>
                    <td className="border border-gray-300 px-4 py-2">-20 to -40</td>
                    <td className="border border-gray-300 px-4 py-2">+10 to +30</td>
                    <td className="border border-gray-300 px-4 py-2">Natural foliage</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Advanced Processing Techniques</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Local Adjustments</h3>
            <p>Selective editing tools allow precise control over specific image areas:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Masking Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Subject/Sky masks:</strong> AI-powered selections
                    </li>
                    <li>
                      • <strong>Color range:</strong> Select by color similarity
                    </li>
                    <li>
                      • <strong>Luminosity masks:</strong> Target specific tones
                    </li>
                    <li>
                      • <strong>Brush adjustments:</strong> Hand-painted selections
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Common Adjustments</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Eye brightening:</strong> Exposure +0.5, clarity +25
                    </li>
                    <li>
                      • <strong>Sky enhancement:</strong> Contrast +20, vibrance +15
                    </li>
                    <li>
                      • <strong>Skin smoothing:</strong> Clarity -25, texture -15
                    </li>
                    <li>
                      • <strong>Background dimming:</strong> Exposure -0.3 to -0.7
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Lens Corrections and Sharpening</h3>
            <p>Technical corrections ensure optimal image quality:</p>

            <Card className="my-6 bg-green-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Essential Corrections:</h4>
                <ul className="space-y-2">
                  <li>
                    ✓ <strong>Lens Profile:</strong> Automatically correct distortion and vignetting
                  </li>
                  <li>
                    ✓ <strong>Chromatic Aberration:</strong> Remove color fringing
                  </li>
                  <li>
                    ✓ <strong>Output Sharpening:</strong> Match to delivery medium
                  </li>
                  <li>
                    ✓ <strong>Noise Reduction:</strong> Balance detail retention vs. noise
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Batch Processing and Presets</h2>

            <Card className="my-8 bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-purple-800">Efficiency Multiplier</h3>
                    <p className="text-purple-700">
                      Professional workflows rely on batch processing and presets to maintain consistency while
                      processing hundreds or thousands of images efficiently.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Creating Signature Presets</h3>
            <p>Develop custom presets that reflect your artistic style:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Preset Development Process:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Process 20-30 diverse images to your preferred style</li>
                  <li>Identify common adjustments across all images</li>
                  <li>Create base preset with shared settings</li>
                  <li>Test on different lighting conditions and subjects</li>
                  <li>Refine and create variations for specific scenarios</li>
                  <li>Document settings and usage guidelines</li>
                </ol>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Sync and Batch Processing</h3>
            <p>Streamline processing of similar images:</p>

            <ul className="space-y-3 mt-4">
              <li>
                <strong>Auto-Sync:</strong> Apply adjustments to all selected images simultaneously
              </li>
              <li>
                <strong>Match Total Exposures:</strong> Normalize exposure across a series
              </li>
              <li>
                <strong>Copy/Paste Settings:</strong> Transfer specific adjustments between images
              </li>
              <li>
                <strong>Previous Import:</strong> Apply last session's settings to new imports
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Export Optimization</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Client Delivery Formats</h3>
            <p>Optimize exports for different client needs and delivery methods:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">High-Resolution Delivery</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Format:</strong> TIFF or high-quality JPEG
                    </li>
                    <li>
                      • <strong>Resolution:</strong> Original camera resolution
                    </li>
                    <li>
                      • <strong>Color Space:</strong> Adobe RGB or sRGB
                    </li>
                    <li>
                      • <strong>Quality:</strong> 95-100% for JPEG
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Web/Social Media</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Format:</strong> JPEG or WebP
                    </li>
                    <li>
                      • <strong>Resolution:</strong> 2048px long edge
                    </li>
                    <li>
                      • <strong>Color Space:</strong> sRGB
                    </li>
                    <li>
                      • <strong>Quality:</strong> 80-90% for web
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Watermarking and Branding</h3>
            <p>Protect your work and maintain brand consistency:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`Watermark Best Practices:
• Position: Lower right corner, 15-20% from edges
• Size: 3-5% of image width
• Opacity: 60-80% for visibility without distraction
• Color: White with black outline for versatility
• Font: Clean, professional typeface
• Include: © Year YourName Photography`}</code>
                </pre>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Quality Control and Delivery</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Final Review Process</h3>
            <p>Systematic quality control ensures consistent professional results:</p>

            <Card className="my-6 bg-blue-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Quality Check List:</h4>
                <ul className="space-y-2">
                  <li>☐ Consistent color grading across the set</li>
                  <li>☐ Proper white balance in all lighting conditions</li>
                  <li>☐ Sharp focus on key subjects</li>
                  <li>☐ Appropriate exposure without clipping</li>
                  <li>☐ Clean backgrounds and distracting elements</li>
                  <li>☐ Consistent crop ratios where applicable</li>
                  <li>☐ Metadata and copyright information embedded</li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibond mt-8 mb-4">Monitor Calibration</h3>
            <p>Accurate color representation requires proper monitor calibration:</p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Setting</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Recommended Value</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">White Point</td>
                    <td className="border border-gray-300 px-4 py-2">6500K (D65)</td>
                    <td className="border border-gray-300 px-4 py-2">Standard daylight</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Brightness</td>
                    <td className="border border-gray-300 px-4 py-2">120 cd/m²</td>
                    <td className="border border-gray-300 px-4 py-2">Print matching</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Gamma</td>
                    <td className="border border-gray-300 px-4 py-2">2.2</td>
                    <td className="border border-gray-300 px-4 py-2">Standard response</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Calibration Frequency</td>
                    <td className="border border-gray-300 px-4 py-2">Monthly</td>
                    <td className="border border-gray-300 px-4 py-2">Consistent accuracy</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg my-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Optimize Your RAW Workflow</h2>
                <p className="mb-6">
                  Process and convert your RAW files with professional-grade tools and export optimization for any
                  output format.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Start Processing
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Should I edit every photo in a shoot?</h3>
                  <p className="text-gray-700">
                    No, professional workflow involves culling first. Edit only the best 10-20% of images, then provide
                    client previews for final selection. This saves time and maintains quality standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    What's the difference between Lightroom and Photoshop for RAW editing?
                  </h3>
                  <p className="text-gray-700">
                    Lightroom excels at RAW processing, batch editing, and photo management. Use Photoshop for complex
                    retouching, compositing, and precise local adjustments that require layers and advanced tools.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    How do I maintain consistent style across different lighting conditions?
                  </h3>
                  <p className="text-gray-700">
                    Create lighting-specific presets (indoor, outdoor, golden hour, etc.) as starting points, then
                    fine-tune individually. Focus on consistent color grading and tone curve shapes rather than
                    identical settings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What export settings should I use for print vs. web?</h3>
                  <p className="text-gray-700">
                    Print: Adobe RGB, 16-bit TIFF or 100% quality JPEG, 300 DPI. Web: sRGB, 8-bit JPEG, 72-96 DPI,
                    2048px long edge, 80-90% quality for balance of size and quality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How often should I backup my RAW files?</h3>
                  <p className="text-gray-700">
                    Follow the 3-2-1 rule: 3 copies of important data, on 2 different media types, with 1 offsite.
                    Backup immediately after import, then regularly to cloud storage or external drives.
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
