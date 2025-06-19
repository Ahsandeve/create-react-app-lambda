import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Smartphone, Camera, Zap, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Mobile Photography: From RAW to Web-Ready Images | Complete Guide 2024",
  description:
    "Master mobile photography workflows. Learn how to process RAW photos from smartphones, optimize for web delivery, and create stunning images on mobile devices.",
  keywords:
    "mobile photography, smartphone RAW, mobile photo editing, RAW processing, mobile workflow, smartphone photography, photo optimization, mobile image editing",
  openGraph: {
    title: "Mobile Photography: From RAW to Web-Ready Images | Complete Guide 2024",
    description:
      "Master mobile photography workflows. Learn how to process RAW photos from smartphones, optimize for web delivery, and create stunning images on mobile devices.",
    type: "article",
    publishedTime: "2024-01-25T10:00:00.000Z",
    authors: ["Advanced Image Converter Team"],
  },
}

export default function MobilePhotographyGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>January 25, 2024</span>
              <span>•</span>
              <span>18 min read</span>
              <span>•</span>
              <span>By Advanced Image Converter Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Mobile Photography: From RAW to Web-Ready Images
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlock the full potential of smartphone photography. Learn professional workflows for processing RAW
              images, optimizing for web delivery, and creating stunning visuals entirely on mobile devices.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Mobile photography workflow from RAW to web-ready"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>The Mobile Photography Revolution</h2>
            <p>
              Mobile photography has evolved from simple snapshots to professional-quality imaging. Modern smartphones
              capture RAW files with incredible detail, offering photographers unprecedented creative control. However,
              the journey from RAW capture to web-ready images requires understanding, skill, and the right workflow.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
              <div className="flex items-start">
                <Smartphone className="w-6 h-6 text-purple-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Mobile Photography Stats</h3>
                  <p className="text-purple-800">
                    Over 90% of photos are now taken on smartphones, and modern devices can capture 12-bit RAW files
                    with dynamic range comparable to entry-level DSLRs.
                  </p>
                </div>
              </div>
            </div>

            <h2>Understanding Mobile RAW Photography</h2>

            <h3>What is Mobile RAW?</h3>
            <p>
              Mobile RAW files contain unprocessed sensor data from your smartphone's camera. Unlike JPEG files, which
              are processed and compressed in-camera, RAW files preserve all the original image information, giving you
              maximum flexibility in post-processing.
            </p>

            <h3>Benefits of Shooting RAW on Mobile</h3>
            <ul>
              <li>
                <strong>Greater Dynamic Range:</strong> Recover details in highlights and shadows
              </li>
              <li>
                <strong>Better Color Grading:</strong> More accurate and flexible color adjustments
              </li>
              <li>
                <strong>Non-Destructive Editing:</strong> Make changes without degrading image quality
              </li>
              <li>
                <strong>Professional Control:</strong> Fine-tune exposure, white balance, and more
              </li>
              <li>
                <strong>Future-Proofing:</strong> Re-edit images as software improves
              </li>
            </ul>

            <h3>Mobile RAW Formats</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <Camera className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold mb-2">DNG (Digital Negative)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Adobe's open standard</li>
                    <li>• Widely supported</li>
                    <li>• Used by most Android phones</li>
                    <li>• Compatible with desktop software</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <ImageIcon className="w-8 h-8 text-gray-600 mb-4" />
                  <h4 className="font-semibold mb-2">Proprietary Formats</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Apple ProRAW (.HEIF)</li>
                    <li>• Samsung .SRW files</li>
                    <li>• Huawei .HWI files</li>
                    <li>• May require specific software</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>Mobile RAW Capture Techniques</h2>

            <h3>Camera Settings for RAW</h3>
            <p>Optimizing your camera settings is crucial for getting the best RAW files:</p>
            <ul>
              <li>
                <strong>Enable RAW Mode:</strong> Usually found in camera settings or pro mode
              </li>
              <li>
                <strong>Manual Focus:</strong> Ensure critical areas are sharp
              </li>
              <li>
                <strong>Exposure Control:</strong> Slightly underexpose to preserve highlights
              </li>
              <li>
                <strong>ISO Management:</strong> Keep ISO as low as possible for best quality
              </li>
              <li>
                <strong>White Balance:</strong> Set to daylight or manual for consistency
              </li>
            </ul>

            <h3>Composition for RAW Processing</h3>
            <p>When shooting RAW, consider how you'll process the image later:</p>
            <ul>
              <li>
                <strong>Leave Room for Cropping:</strong> Shoot slightly wider than needed
              </li>
              <li>
                <strong>Capture Full Dynamic Range:</strong> Don't clip highlights or shadows
              </li>
              <li>
                <strong>Consider Color Grading:</strong> Neutral lighting works best for flexibility
              </li>
              <li>
                <strong>Focus on Fundamentals:</strong> Good composition is still essential
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <div className="flex items-start">
                <Zap className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Tip</h3>
                  <p className="text-blue-800">
                    Use your phone's histogram if available. Aim to expose to the right (ETTR) without clipping
                    highlights. You can always bring down exposure in post-processing.
                  </p>
                </div>
              </div>
            </div>

            <h2>Mobile RAW Processing Apps</h2>

            <h3>Professional Mobile Apps</h3>

            <h4>Adobe Lightroom Mobile</h4>
            <p>The mobile version of the industry-standard RAW processor offers powerful editing capabilities:</p>
            <ul>
              <li>Full RAW processing capabilities</li>
              <li>Professional-grade adjustment tools</li>
              <li>Preset and profile support</li>
              <li>Cloud synchronization with desktop</li>
              <li>Advanced masking and local adjustments</li>
            </ul>

            <h4>Snapseed (Google)</h4>
            <p>Google's free photo editor with excellent RAW support:</p>
            <ul>
              <li>Intuitive gesture-based interface</li>
              <li>Powerful selective adjustments</li>
              <li>Professional filters and effects</li>
              <li>Non-destructive editing</li>
              <li>Export in multiple formats</li>
            </ul>

            <h4>VSCO</h4>
            <p>Popular among mobile photographers for its film-inspired presets:</p>
            <ul>
              <li>High-quality film emulation presets</li>
              <li>Advanced editing tools</li>
              <li>RAW processing capabilities</li>
              <li>Social sharing features</li>
              <li>Video editing support</li>
            </ul>

            <h4>RNI Films</h4>
            <p>Specialized in authentic film emulation:</p>
            <ul>
              <li>Accurate film stock emulations</li>
              <li>Advanced color grading tools</li>
              <li>Grain and texture controls</li>
              <li>Professional workflow features</li>
            </ul>

            <h3>Platform-Specific Options</h3>

            <h4>iOS Apps</h4>
            <ul>
              <li>
                <strong>Darkroom:</strong> Powerful RAW editor with batch processing
              </li>
              <li>
                <strong>Pixelmator Photo:</strong> AI-powered editing with RAW support
              </li>
              <li>
                <strong>Affinity Photo:</strong> Desktop-class editing on mobile
              </li>
              <li>
                <strong>ProCamera:</strong> Advanced camera app with built-in RAW processing
              </li>
            </ul>

            <h4>Android Apps</h4>
            <ul>
              <li>
                <strong>Photo Mate R3:</strong> Comprehensive RAW editor
              </li>
              <li>
                <strong>PolaRoid:</strong> Film-inspired RAW processing
              </li>
              <li>
                <strong>Open Camera:</strong> Open-source camera with RAW support
              </li>
              <li>
                <strong>Camera FV-5:</strong> Professional camera app with RAW capabilities
              </li>
            </ul>

            <h2>Mobile RAW Processing Workflow</h2>

            <h3>Step 1: Import and Organization</h3>
            <p>Organize your RAW files for efficient processing:</p>
            <ul>
              <li>Import RAW files into your chosen editing app</li>
              <li>Create collections or albums for different shoots</li>
              <li>Add keywords and ratings for easy searching</li>
              <li>Back up original files to cloud storage</li>
            </ul>

            <h3>Step 2: Basic Adjustments</h3>
            <p>Start with fundamental corrections:</p>
            <ol>
              <li>
                <strong>Exposure:</strong> Correct overall brightness
              </li>
              <li>
                <strong>Highlights/Shadows:</strong> Recover detail in extreme tones
              </li>
              <li>
                <strong>White Balance:</strong> Correct color temperature
              </li>
              <li>
                <strong>Contrast:</strong> Adjust overall contrast
              </li>
              <li>
                <strong>Clarity/Texture:</strong> Enhance mid-tone contrast
              </li>
            </ol>

            <h3>Step 3: Color Grading</h3>
            <p>Develop your unique color style:</p>
            <ul>
              <li>
                <strong>HSL Adjustments:</strong> Fine-tune individual colors
              </li>
              <li>
                <strong>Color Grading:</strong> Add color tints to highlights, midtones, shadows
              </li>
              <li>
                <strong>Calibration:</strong> Adjust camera color profile
              </li>
              <li>
                <strong>Split Toning:</strong> Add complementary colors to highlights and shadows
              </li>
            </ul>

            <h3>Step 4: Local Adjustments</h3>
            <p>Make targeted improvements:</p>
            <ul>
              <li>
                <strong>Masking:</strong> Select specific areas for adjustment
              </li>
              <li>
                <strong>Radial Filters:</strong> Create vignettes or spotlight effects
              </li>
              <li>
                <strong>Linear Gradients:</strong> Adjust skies or foregrounds
              </li>
              <li>
                <strong>Brush Adjustments:</strong> Paint adjustments onto specific areas
              </li>
            </ul>

            <h3>Step 5: Sharpening and Noise Reduction</h3>
            <p>Optimize image quality:</p>
            <ul>
              <li>
                <strong>Sharpening:</strong> Enhance edge definition
              </li>
              <li>
                <strong>Noise Reduction:</strong> Reduce grain from high ISO
              </li>
              <li>
                <strong>Masking:</strong> Apply sharpening only to edges
              </li>
              <li>
                <strong>Detail Enhancement:</strong> Bring out texture and fine details
              </li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <div className="flex items-start">
                <ImageIcon className="w-6 h-6 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Workflow Tip</h3>
                  <p className="text-green-800">
                    Process one image completely, then copy those settings to similar images in the same lighting
                    conditions. This saves time and ensures consistency across your work.
                  </p>
                </div>
              </div>
            </div>

            <h2>Optimizing for Web Delivery</h2>

            <h3>Export Settings for Web</h3>
            <p>Different platforms require different optimization strategies:</p>

            <h4>Social Media Platforms</h4>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left">Platform</th>
                    <th className="border border-gray-300 p-3 text-left">Optimal Size</th>
                    <th className="border border-gray-300 p-3 text-left">Format</th>
                    <th className="border border-gray-300 p-3 text-left">Quality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Instagram Feed</td>
                    <td className="border border-gray-300 p-3">1080x1080px</td>
                    <td className="border border-gray-300 p-3">JPEG</td>
                    <td className="border border-gray-300 p-3">85-90%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Instagram Stories</td>
                    <td className="border border-gray-300 p-3">1080x1920px</td>
                    <td className="border border-gray-300 p-3">JPEG</td>
                    <td className="border border-gray-300 p-3">85-90%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Facebook</td>
                    <td className="border border-gray-300 p-3">1200x630px</td>
                    <td className="border border-gray-300 p-3">JPEG</td>
                    <td className="border border-gray-300 p-3">80-85%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Twitter</td>
                    <td className="border border-gray-300 p-3">1200x675px</td>
                    <td className="border border-gray-300 p-3">JPEG</td>
                    <td className="border border-gray-300 p-3">80-85%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>Website and Portfolio Use</h4>
            <ul>
              <li>
                <strong>Full Size:</strong> 2048px on longest side, JPEG 90-95% quality
              </li>
              <li>
                <strong>Gallery Thumbnails:</strong> 400-600px, JPEG 80-85% quality
              </li>
              <li>
                <strong>Blog Images:</strong> 1200px wide, JPEG 85-90% quality
              </li>
              <li>
                <strong>Hero Images:</strong> 1920px wide, JPEG 90-95% quality
              </li>
            </ul>

            <h3>Advanced Web Optimization</h3>

            <h4>Responsive Image Strategy</h4>
            <p>Create multiple sizes for different devices:</p>
            <ul>
              <li>
                <strong>Mobile:</strong> 480px wide
              </li>
              <li>
                <strong>Tablet:</strong> 768px wide
              </li>
              <li>
                <strong>Desktop:</strong> 1200px wide
              </li>
              <li>
                <strong>High-DPI:</strong> 2x versions for retina displays
              </li>
            </ul>

            <h4>Modern Format Support</h4>
            <p>Consider newer formats for better compression:</p>
            <ul>
              <li>
                <strong>WebP:</strong> 25-35% smaller than JPEG with similar quality
              </li>
              <li>
                <strong>AVIF:</strong> 50% smaller than JPEG, growing browser support
              </li>
              <li>
                <strong>HEIC:</strong> Excellent for iOS users
              </li>
              <li>
                <strong>Fallback Strategy:</strong> Always provide JPEG fallbacks
              </li>
            </ul>

            <h2>Mobile-Specific Challenges and Solutions</h2>

            <h3>Storage Management</h3>
            <p>RAW files are large and can quickly fill mobile storage:</p>
            <ul>
              <li>
                <strong>Cloud Storage:</strong> Automatically sync RAW files to cloud services
              </li>
              <li>
                <strong>External Storage:</strong> Use USB-C or Lightning external drives
              </li>
              <li>
                <strong>Selective Sync:</strong> Only keep recent projects on device
              </li>
              <li>
                <strong>Regular Cleanup:</strong> Delete processed files after export
              </li>
              <li>
                <strong>Compression:</strong> Use efficient RAW formats when available
              </li>
            </ul>

            <h3>Processing Power Limitations</h3>
            <p>Mobile devices have limited processing power compared to desktops:</p>
            <ul>
              <li>
                <strong>Batch Processing:</strong> Process multiple images overnight
              </li>
              <li>
                <strong>Simplified Workflows:</strong> Focus on essential adjustments
              </li>
              <li>
                <strong>Proxy Files:</strong> Work with smaller preview files when possible
              </li>
              <li>
                <strong>Background Processing:</strong> Let apps process while doing other tasks
              </li>
            </ul>

            <h3>Battery Management</h3>
            <p>RAW processing is battery-intensive:</p>
            <ul>
              <li>
                <strong>Power Management:</strong> Process images while charging
              </li>
              <li>
                <strong>Efficient Apps:</strong> Choose apps optimized for mobile processors
              </li>
              <li>
                <strong>Batch Operations:</strong> Process multiple images at once
              </li>
              <li>
                <strong>Background Limits:</strong> Limit background processing
              </li>
            </ul>

            <h2>Advanced Mobile Photography Techniques</h2>

            <h3>Computational Photography</h3>
            <p>Modern smartphones use AI and computational photography to enhance images:</p>
            <ul>
              <li>
                <strong>HDR Processing:</strong> Combine multiple exposures automatically
              </li>
              <li>
                <strong>Night Mode:</strong> AI-enhanced low-light photography
              </li>
              <li>
                <strong>Portrait Mode:</strong> Computational depth of field effects
              </li>
              <li>
                <strong>Smart HDR:</strong> Intelligent highlight and shadow recovery
              </li>
            </ul>

            <h3>Multi-Frame Processing</h3>
            <p>Combine multiple frames for better results:</p>
            <ul>
              <li>
                <strong>Focus Stacking:</strong> Combine multiple focus points
              </li>
              <li>
                <strong>Exposure Bracketing:</strong> Manual HDR processing
              </li>
              <li>
                <strong>Noise Reduction:</strong> Average multiple frames to reduce noise
              </li>
              <li>
                <strong>Super Resolution:</strong> Combine frames for higher resolution
              </li>
            </ul>

            <h3>Creative Techniques</h3>
            <p>Push the boundaries of mobile photography:</p>
            <ul>
              <li>
                <strong>Long Exposure:</strong> Use ND filters or computational techniques
              </li>
              <li>
                <strong>Light Painting:</strong> Creative use of artificial lighting
              </li>
              <li>
                <strong>Macro Photography:</strong> Close-up work with additional lenses
              </li>
              <li>
                <strong>Astrophotography:</strong> Capture stars and night sky
              </li>
            </ul>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
              <div className="flex items-start">
                <Camera className="w-6 h-6 text-pink-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-pink-900 mb-2">Creative Challenge</h3>
                  <p className="text-pink-800">
                    Try shooting the same scene with different mobile photography techniques: standard photo, HDR,
                    portrait mode, and night mode. Compare the RAW files and see how each mode affects the captured
                    data.
                  </p>
                </div>
              </div>
            </div>

            <h2>Building a Mobile Photography Portfolio</h2>

            <h3>Consistency in Style</h3>
            <p>Develop a recognizable editing style:</p>
            <ul>
              <li>
                <strong>Color Palette:</strong> Stick to consistent color grading
              </li>
              <li>
                <strong>Contrast Levels:</strong> Maintain similar contrast across images
              </li>
              <li>
                <strong>Saturation:</strong> Develop a signature saturation level
              </li>
              <li>
                <strong>Presets:</strong> Create and use custom presets
              </li>
            </ul>

            <h3>Portfolio Platforms</h3>
            <p>Choose the right platform for showcasing your work:</p>
            <ul>
              <li>
                <strong>Instagram:</strong> Great for building audience and engagement
              </li>
              <li>
                <strong>Behance:</strong> Professional portfolio platform
              </li>
              <li>
                <strong>500px:</strong> Photography-focused community
              </li>
              <li>
                <strong>Personal Website:</strong> Complete control over presentation
              </li>
            </ul>

            <h2>Future of Mobile Photography</h2>
            <p>Mobile photography continues to evolve rapidly with new technologies:</p>

            <h3>Hardware Advances</h3>
            <ul>
              <li>
                <strong>Larger Sensors:</strong> Better low-light performance and dynamic range
              </li>
              <li>
                <strong>Periscope Lenses:</strong> Improved optical zoom capabilities
              </li>
              <li>
                <strong>Computational Sensors:</strong> AI-powered image capture
              </li>
              <li>
                <strong>Variable Aperture:</strong> More control over depth of field
              </li>
            </ul>

            <h3>Software Evolution</h3>
            <ul>
              <li>
                <strong>AI Enhancement:</strong> Intelligent image improvement
              </li>
              <li>
                <strong>Real-time Processing:</strong> Live preview of edits
              </li>
              <li>
                <strong>Cloud Processing:</strong> Offload intensive tasks to the cloud
              </li>
              <li>
                <strong>AR Integration:</strong> Augmented reality photography tools
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Mobile photography has reached a point where the quality gap between smartphones and traditional cameras
              continues to narrow. With proper technique, the right apps, and an understanding of RAW processing, you
              can create professional-quality images entirely on your mobile device.
            </p>
            <p>
              The key to success in mobile photography lies in understanding your tools, developing efficient workflows,
              and continuously experimenting with new techniques. As technology continues to advance, the possibilities
              for mobile photography will only expand.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white text-center my-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Mobile Photos?</h2>
            <p className="text-lg mb-6 opacity-90">Convert and optimize your mobile RAW files for web delivery</p>
            <Link href="/">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Download className="w-5 h-5 mr-2" />
                Start Converting Now
              </Button>
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold mb-2">Should I always shoot RAW on my smartphone?</h3>
                <p className="text-gray-600">
                  Shoot RAW when you plan to edit the image or when lighting conditions are challenging. For casual
                  snapshots and social media, JPEG is often sufficient and saves storage space.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold mb-2">What's the best mobile app for RAW processing?</h3>
                <p className="text-gray-600">
                  Adobe Lightroom Mobile offers the most comprehensive RAW processing tools, but Snapseed is excellent
                  for beginners and free users. Choose based on your skill level and needs.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold mb-2">How much storage do RAW files take on mobile?</h3>
                <p className="text-gray-600">
                  Mobile RAW files typically range from 20-50MB each, depending on your phone's sensor. A 128GB phone
                  can store roughly 3,000-6,000 RAW files, so cloud storage is recommended.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold mb-2">Can mobile RAW files match DSLR quality?</h3>
                <p className="text-gray-600">
                  Modern flagship smartphones can produce RAW files with quality approaching entry-level DSLRs,
                  especially in good lighting. However, DSLRs still have advantages in low light and dynamic range.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold mb-2">What's the best format for sharing mobile photos online?</h3>
                <p className="text-gray-600">
                  JPEG remains the most compatible format for sharing. Use 85-90% quality for social media and 90-95%
                  for portfolio work. Consider WebP for websites that support it.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
