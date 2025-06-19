import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photoshop Web Export Optimization Guide | Advanced Image Converter",
  description:
    "Master Photoshop export settings for web optimization. Learn Save for Web, Export As, and batch processing techniques for perfect web images.",
  keywords:
    "Photoshop web export, Save for Web, Export As, image optimization, web graphics, Photoshop batch processing",
  openGraph: {
    title: "Photoshop Web Export Optimization Guide",
    description: "Learn professional Photoshop export techniques for optimized web images.",
    type: "article",
    publishedTime: "2024-02-10T10:00:00.000Z",
    authors: ["Alex Chen"],
  },
}

export default function PhotoshopWebExportGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 mb-4">
              Photoshop
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Photoshop Web Export Optimization Guide
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <img src="/placeholder-user.jpg" alt="Alex Chen" className="w-8 h-8 rounded-full" />
                <span>Alex Chen</span>
              </div>
              <time dateTime="2024-02-10">February 10, 2024</time>
              <span>13 min read</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Photoshop offers powerful export options for web optimization. This comprehensive guide covers Save for
              Web, Export As, and advanced techniques to create perfectly optimized images for any web project.
            </p>

            <h2>Export Methods Comparison</h2>
            <p>Photoshop provides several export methods, each with specific advantages:</p>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Method</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Best For</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Formats</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Save for Web</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Legacy workflow</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">JPEG, PNG, GIF</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Preview comparison</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Export As</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Modern workflow</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">All formats + WebP</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Artboard support</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Quick Export</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Rapid iteration</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">PNG (default)</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">One-click export</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 mb-2">💡 Pro Tip</h3>
              <p className="text-cyan-800 dark:text-cyan-200 mb-0">
                Use Export As for modern workflows - it supports WebP format and provides better color management than
                Save for Web.
              </p>
            </div>

            <h2>Save for Web (Legacy)</h2>

            <h3>Accessing Save for Web</h3>
            <p>
              Navigate to File → Export → Save for Web (Legacy) or use Ctrl+Alt+Shift+S (Windows) / Cmd+Opt+Shift+S
              (Mac).
            </p>

            <h3>JPEG Optimization Settings</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`Quality Settings:
• High (60-80): Detailed photos, hero images
• Medium (40-60): General web photos
• Low (20-40): Thumbnails, background images

Advanced Options:
• Progressive: ✓ (better perceived loading)
• Optimized: ✓ (smaller file size)
• Embed Color Profile: ✗ (web doesn't need it)
• Convert to sRGB: ✓ (web standard)`}</code>
              </pre>
            </div>

            <h3>PNG Optimization Settings</h3>
            <ul>
              <li>
                <strong>PNG-8:</strong> Up to 256 colors, smaller files
              </li>
              <li>
                <strong>PNG-24:</strong> Millions of colors, larger files
              </li>
              <li>
                <strong>Transparency:</strong> Choose based on need
              </li>
              <li>
                <strong>Interlaced:</strong> Usually off for web
              </li>
            </ul>

            <h2>Export As (Modern Method)</h2>

            <h3>Accessing Export As</h3>
            <p>File → Export → Export As or Ctrl+Alt+Shift+W (Windows) / Cmd+Opt+Shift+W (Mac).</p>

            <h3>Format-Specific Settings</h3>

            <h4>JPEG Settings</h4>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h5 className="text-lg font-semibold mb-3">Quality Levels</h5>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                  <li>
                    <strong>12 (Maximum):</strong> Print quality
                  </li>
                  <li>
                    <strong>10-11:</strong> High-end web
                  </li>
                  <li>
                    <strong>8-9:</strong> Standard web
                  </li>
                  <li>
                    <strong>6-7:</strong> Compressed web
                  </li>
                  <li>
                    <strong>1-5:</strong> Thumbnails only
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h5 className="text-lg font-semibold mb-3">Advanced Options</h5>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                  <li>Color Space: sRGB</li>
                  <li>Embed Color Profile: Off</li>
                  <li>Convert to sRGB: On</li>
                  <li>Progressive: On</li>
                </ul>
              </div>
            </div>

            <h4>WebP Settings</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`WebP Quality Settings:
• Lossless: Perfect quality, larger files
• Lossy 90-100: High quality photos
• Lossy 75-89: Standard web images
• Lossy 60-74: Compressed images
• Lossy <60: Thumbnails and icons

Recommended: Lossy 80-85 for most web images`}</code>
              </pre>
            </div>

            <h2>Batch Processing and Actions</h2>

            <h3>Creating Export Actions</h3>
            <p>Automate repetitive export tasks:</p>
            <ol>
              <li>Open the Actions panel (Window → Actions)</li>
              <li>Create new action set</li>
              <li>Record export process with desired settings</li>
              <li>Stop recording</li>
              <li>Apply to multiple files using File → Automate → Batch</li>
            </ol>

            <h3>Image Processor</h3>
            <p>Built-in batch processing tool (File → Scripts → Image Processor):</p>
            <ul>
              <li>Process multiple files simultaneously</li>
              <li>Export to multiple formats at once</li>
              <li>Resize images during export</li>
              <li>Apply actions during processing</li>
            </ul>

            <h2>Artboard and Layer Export</h2>

            <h3>Artboard Export</h3>
            <p>Export multiple artboards efficiently:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`File → Export → Artboards to Files

Options:
• Range: All Artboards or specific range
• Format: Choose target format
• Location: Output folder
• Prefix: Add filename prefix
• Include: Artboard names in filenames`}</code>
              </pre>
            </div>

            <h3>Layer Export</h3>
            <p>Export individual layers or layer groups:</p>
            <ul>
              <li>Right-click layer → Export As</li>
              <li>File → Export → Layers to Files</li>
              <li>Use layer comps for variations</li>
              <li>Generator feature for automatic export</li>
            </ul>

            <h2>Generator Feature</h2>

            <h3>Setting Up Generator</h3>
            <p>Enable automatic asset generation:</p>
            <ol>
              <li>File → Generate → Image Assets</li>
              <li>Rename layers with export syntax</li>
              <li>Assets generate automatically on save</li>
            </ol>

            <h3>Generator Naming Syntax</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`Layer Naming Examples:
• "icon.png" → exports as PNG
• "logo.jpg" → exports as JPEG
• "hero@2x.png" → exports at 2x resolution
• "button.png, button@2x.png" → multiple exports
• "200% logo.png" → exports at 200% scale
• "icon.png8" → exports as PNG-8`}</code>
              </pre>
            </div>

            <h2>Color Management for Web</h2>

            <h3>Color Profile Settings</h3>
            <p>Ensure consistent colors across devices:</p>
            <ul>
              <li>
                <strong>Working Space:</strong> sRGB IEC61966-2.1
              </li>
              <li>
                <strong>Color Management:</strong> Convert to sRGB
              </li>
              <li>
                <strong>Embed Profile:</strong> Disable for web
              </li>
              <li>
                <strong>Proof Colors:</strong> Monitor RGB for preview
              </li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">Color Accuracy</h4>
              <p className="text-blue-800 dark:text-blue-200 mb-0">
                Always convert to sRGB for web use. Most web browsers assume sRGB color space, and embedded profiles
                increase file size unnecessarily.
              </p>
            </div>

            <h2>Responsive Image Export</h2>

            <h3>Multiple Resolution Export</h3>
            <p>Create responsive image sets:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`Export Workflow:
1. Create artboards at different sizes:
   • Mobile: 400px width
   • Tablet: 800px width  
   • Desktop: 1200px width

2. Use Export As with scale options:
   • 1x for standard displays
   • 2x for high-DPI displays

3. Batch process using Image Processor`}</code>
              </pre>
            </div>

            <h3>Smart Object Scaling</h3>
            <p>Use Smart Objects for non-destructive scaling:</p>
            <ul>
              <li>Convert layers to Smart Objects</li>
              <li>Scale Smart Objects without quality loss</li>
              <li>Update source and all instances update</li>
              <li>Perfect for responsive design workflows</li>
            </ul>

            <h2>Optimization Techniques</h2>

            <h3>Pre-Export Optimization</h3>
            <ul>
              <li>
                <strong>Flatten unnecessary layers:</strong> Reduce file complexity
              </li>
              <li>
                <strong>Crop to content:</strong> Remove empty space
              </li>
              <li>
                <strong>Merge similar layers:</strong> Simplify layer structure
              </li>
              <li>
                <strong>Rasterize effects:</strong> Convert layer styles to pixels
              </li>
            </ul>

            <h3>Post-Export Optimization</h3>
            <p>Further optimize exported files:</p>
            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h5 className="font-semibold mb-2">TinyPNG/TinyJPG</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Online compression service</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h5 className="font-semibold mb-2">ImageOptim</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Mac compression tool</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h5 className="font-semibold mb-2">Squoosh</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Google's web-based optimizer</p>
              </div>
            </div>

            <h2>Quality Control Checklist</h2>

            <h3>Before Export</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`✓ Document is in RGB color mode
✓ Resolution is 72 PPI for web
✓ Image is properly cropped
✓ Unnecessary layers are flattened
✓ Color profile is set to sRGB
✓ Text is rasterized if needed
✓ Effects are applied/rasterized`}</code>
              </pre>
            </div>

            <h3>After Export</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`✓ File size is appropriate for use case
✓ Image quality meets requirements
✓ Colors appear correct in browser
✓ Transparency works as expected
✓ Image loads quickly
✓ Responsive versions are consistent`}</code>
              </pre>
            </div>

            <h2>Common Export Mistakes</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">⚠️ Avoid These Pitfalls</h3>
              <ul className="text-red-800 dark:text-red-200 space-y-2">
                <li>Exporting in CMYK color mode</li>
                <li>Using 300 DPI for web images</li>
                <li>Embedding color profiles unnecessarily</li>
                <li>Not optimizing file sizes</li>
                <li>Forgetting to convert text to outlines</li>
                <li>Exporting with transparent backgrounds when not needed</li>
              </ul>
            </div>

            <h2>Conclusion</h2>
            <p>
              Mastering Photoshop's export features is essential for efficient web design workflows. Use Export As for
              modern projects, leverage batch processing for efficiency, and always optimize for your specific use case.
              Remember that the best export method depends on your content type and performance requirements.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-xl my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Optimize Your Photoshop Exports</h3>
              <p className="text-cyan-100 mb-6">
                Further optimize your Photoshop exports with our advanced image converter
              </p>
              <a
                href="/"
                className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
              >
                Start Converting
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Should I use Save for Web or Export As?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use Export As for modern workflows. It supports more formats (including WebP), has better color
                  management, and is actively maintained by Adobe.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">What's the best JPEG quality setting for web?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  For most web images, quality 8-9 (80-90%) provides the best balance of file size and visual quality.
                  Adjust based on your specific needs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">How do I export multiple artboards at once?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use File → Export → Artboards to Files. This allows you to export all artboards simultaneously with
                  consistent settings.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Why are my exported colors different from Photoshop?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ensure you're working in sRGB color space and converting to sRGB on export. Also, calibrate your
                  monitor for accurate color representation.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Can I automate the export process?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, use Actions to record export settings, then apply them via Batch processing or Image Processor
                  for multiple files.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
