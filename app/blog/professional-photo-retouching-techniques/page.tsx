import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Brush, Sparkles, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Professional Photo Retouching Techniques 2024 | Advanced Image Converter",
  description:
    "Master professional photo retouching techniques. Learn skin retouching, frequency separation, dodging and burning, and advanced Photoshop methods used by pros.",
  keywords: [
    "photo retouching",
    "skin retouching",
    "frequency separation",
    "dodging and burning",
    "Photoshop techniques",
    "portrait editing",
  ],
  openGraph: {
    title: "Professional Photo Retouching Techniques",
    description: "Complete guide to professional photo retouching techniques used by industry experts.",
    type: "article",
  },
}

export default function PhotoRetouchingGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-rose-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent mb-4">
              Professional Photo Retouching Techniques 2024
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>Published on November 28, 2024</span>
              <span className="mx-2">•</span>
              <span>By James Wilson</span>
              <span className="mx-2">•</span>
              <span>19 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Master the art of professional photo retouching with advanced techniques used by industry experts. Learn
              to enhance portraits while maintaining natural beauty and authenticity.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-l-4 border-l-violet-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Brush className="w-6 h-6 text-violet-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Professional Retouching Philosophy</h3>
                    <p className="text-gray-700">
                      Professional retouching enhances natural beauty without creating unrealistic expectations. The
                      goal is to create polished, authentic images that maintain the subject's unique characteristics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Fundamentals of Professional Retouching</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">The Non-Destructive Workflow</h3>
            <p>
              Professional retouching always follows non-destructive principles, preserving the original image data
              while building edits on separate layers. This approach allows for unlimited revisions and maintains the
              highest quality throughout the process.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-green-700">Non-Destructive Benefits</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Preserve original image quality</li>
                    <li>✅ Unlimited undo/redo capability</li>
                    <li>✅ Easy to modify or remove edits</li>
                    <li>✅ Client revision flexibility</li>
                    <li>✅ Maintain editing history</li>
                    <li>✅ Professional workflow standards</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-blue-700">Essential Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li>🎨 Adjustment layers</li>
                    <li>🖌️ Layer masks</li>
                    <li>📋 Clipping masks</li>
                    <li>🔧 Smart objects</li>
                    <li>📁 Layer groups</li>
                    <li>⚡ Blend modes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Professional Retouching Levels</h3>
            <p>Understanding different levels of retouching helps set appropriate expectations and pricing:</p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Level</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Scope</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Time Required</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Typical Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <strong>Basic</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Color correction, exposure, crop</td>
                    <td className="border border-gray-300 px-4 py-2">5-15 minutes</td>
                    <td className="border border-gray-300 px-4 py-2">Event photography, basic portraits</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <strong>Standard</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">+ Skin smoothing, blemish removal</td>
                    <td className="border border-gray-300 px-4 py-2">15-45 minutes</td>
                    <td className="border border-gray-300 px-4 py-2">Professional headshots, portraits</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <strong>Advanced</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">+ Frequency separation, detailed work</td>
                    <td className="border border-gray-300 px-4 py-2">1-3 hours</td>
                    <td className="border border-gray-300 px-4 py-2">Beauty, fashion, commercial</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <strong>High-End</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">+ Extensive reconstruction, artistry</td>
                    <td className="border border-gray-300 px-4 py-2">3+ hours</td>
                    <td className="border border-gray-300 px-4 py-2">Magazine covers, luxury brands</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Skin Retouching Mastery</h2>

            <Card className="my-8 bg-rose-50 border-rose-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-6 h-6 text-rose-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-rose-800">Natural Skin Enhancement</h3>
                    <p className="text-rose-700">
                      Professional skin retouching enhances natural beauty while preserving skin texture and character.
                      The goal is to create flawless yet believable results.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Frequency Separation Technique</h3>
            <p>
              Frequency separation is the gold standard for professional skin retouching, allowing separate control over
              texture and color/tone:
            </p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Frequency Separation Setup:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Duplicate background layer twice</li>
                  <li>Name layers "Low Frequency" and "High Frequency"</li>
                  <li>Apply Gaussian Blur to Low Frequency (radius 3-8px)</li>
                  <li>Apply High Pass filter to High Frequency (same radius)</li>
                  <li>Set High Frequency blend mode to Linear Light</li>
                  <li>Reduce High Frequency opacity to 50%</li>
                </ol>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Advanced Skin Techniques</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Low Frequency (Color/Tone)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Use soft brush with low opacity (10-20%)</li>
                    <li>• Sample nearby skin tones</li>
                    <li>• Paint over discoloration and uneven tones</li>
                    <li>• Blend harsh shadow transitions</li>
                    <li>• Even out skin color variations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">High Frequency (Texture)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Use Clone Stamp or Healing Brush</li>
                    <li>• Sample clean skin texture nearby</li>
                    <li>• Remove blemishes and imperfections</li>
                    <li>• Preserve natural skin texture</li>
                    <li>• Work at 100% zoom for precision</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Skin Retouching Best Practices</h3>

            <Card className="my-6 bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Professional Guidelines:</h4>
                <ul className="space-y-2">
                  <li>
                    ✓ <strong>Preserve Character:</strong> Keep natural skin texture and features
                  </li>
                  <li>
                    ✓ <strong>Work Gradually:</strong> Build up effects with multiple low-opacity layers
                  </li>
                  <li>
                    ✓ <strong>Maintain Consistency:</strong> Match skin treatment across all areas
                  </li>
                  <li>
                    ✓ <strong>Respect Age:</strong> Age-appropriate retouching levels
                  </li>
                  <li>
                    ✓ <strong>Client Communication:</strong> Discuss expectations beforehand
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Dodging and Burning Mastery</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Professional D&B Workflow</h3>
            <p>
              Dodging and burning is the art of selectively lightening and darkening areas to enhance dimension, mood,
              and focus:
            </p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">D&B Layer Setup:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Create new layer filled with 50% gray</li>
                  <li>Set blend mode to Soft Light or Overlay</li>
                  <li>Use soft brush with 10-20% opacity</li>
                  <li>Paint with white to dodge (lighten)</li>
                  <li>Paint with black to burn (darken)</li>
                  <li>Build up effects gradually</li>
                </ol>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Strategic D&B Applications</h3>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Portrait Enhancement</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Brighten eyes and teeth</li>
                    <li>• Enhance cheekbone definition</li>
                    <li>• Sculpt jawline and nose</li>
                    <li>• Add depth to hair</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Landscape Drama</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Enhance sky contrast</li>
                    <li>• Brighten foreground elements</li>
                    <li>• Create depth and dimension</li>
                    <li>• Guide viewer's eye</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Product Photography</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Enhance product highlights</li>
                    <li>• Create shadow depth</li>
                    <li>• Improve texture visibility</li>
                    <li>• Focus attention on key features</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Advanced Retouching Techniques</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Hair Retouching</h3>
            <p>
              Professional hair retouching requires patience and the right techniques to maintain natural flow and
              texture:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Hair Enhancement</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Flyaway Removal:</strong> Clone Stamp with soft brush
                    </li>
                    <li>
                      • <strong>Volume Addition:</strong> Warp tool for subtle reshaping
                    </li>
                    <li>
                      • <strong>Shine Enhancement:</strong> Dodging highlights
                    </li>
                    <li>
                      • <strong>Color Correction:</strong> Selective color adjustments
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Hair Reconstruction</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Strand Painting:</strong> Custom brushes for realistic strands
                    </li>
                    <li>
                      • <strong>Texture Sampling:</strong> Clone from similar hair areas
                    </li>
                    <li>
                      • <strong>Layer Masking:</strong> Blend new hair naturally
                    </li>
                    <li>
                      • <strong>Direction Flow:</strong> Follow natural hair patterns
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Eye Enhancement Techniques</h3>
            <p>Eyes are the focal point of portraits and deserve special attention in retouching:</p>

            <Card className="my-6 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Professional Eye Retouching:</h4>
                <ul className="space-y-3">
                  <li>
                    <strong>Iris Enhancement:</strong> Increase contrast and saturation selectively
                  </li>
                  <li>
                    <strong>Catchlight Addition:</strong> Add or enhance natural light reflections
                  </li>
                  <li>
                    <strong>Whitening:</strong> Subtle brightening of eye whites without over-processing
                  </li>
                  <li>
                    <strong>Sharpening:</strong> Enhance eyelash definition and iris detail
                  </li>
                  <li>
                    <strong>Color Matching:</strong> Ensure both eyes have consistent color and brightness
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Body and Shape Retouching</h2>

            <Card className="my-8 bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-purple-800">Ethical Considerations</h3>
                    <p className="text-purple-700">
                      Body retouching should enhance natural beauty while promoting realistic body image. Always
                      consider the impact of your edits on viewers and society.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Liquify Tool Mastery</h3>
            <p>The Liquify tool is powerful for subtle shape adjustments when used with restraint:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Liquify Best Practices</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Use low pressure settings (10-30%)</li>
                    <li>• Work with large brush sizes</li>
                    <li>• Make multiple small adjustments</li>
                    <li>• Preserve natural proportions</li>
                    <li>• Check background distortion</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Common Applications</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Posture improvement</li>
                    <li>• Clothing fit adjustment</li>
                    <li>• Hair shape refinement</li>
                    <li>• Subtle body contouring</li>
                    <li>• Facial feature balancing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Color and Tone Perfection</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Professional Color Grading</h3>
            <p>
              Color grading in retouching goes beyond basic correction to create mood and enhance the overall aesthetic:
            </p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Color Grading Workflow:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <strong>Color Correction:</strong> Fix white balance and exposure
                  </li>
                  <li>
                    <strong>Skin Tone Optimization:</strong> Perfect skin color and luminosity
                  </li>
                  <li>
                    <strong>Selective Color:</strong> Enhance specific color ranges
                  </li>
                  <li>
                    <strong>Split Toning:</strong> Add complementary colors to highlights/shadows
                  </li>
                  <li>
                    <strong>Final Grade:</strong> Overall mood and style enhancement
                  </li>
                </ol>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Advanced Masking Techniques</h3>
            <p>Precision masking is essential for professional-quality selective adjustments:</p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Luminosity Masks</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Target specific tonal ranges</li>
                    <li>• Natural-looking transitions</li>
                    <li>• Preserve image integrity</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Color Range Masks</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Select specific colors</li>
                    <li>• Adjust individual color channels</li>
                    <li>• Fine-tune selections</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">AI-Powered Masks</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Subject/background separation</li>
                    <li>• Sky and object detection</li>
                    <li>• Time-saving automation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Workflow Optimization</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Action and Automation</h3>
            <p>Professional retouchers use actions and automation to streamline repetitive tasks:</p>

            <Card className="my-6 bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Essential Actions to Create:</h4>
                <ul className="space-y-2">
                  <li>
                    • <strong>Frequency Separation Setup:</strong> Automate layer creation and settings
                  </li>
                  <li>
                    • <strong>D&B Layer Creation:</strong> Quick setup for dodging and burning
                  </li>
                  <li>
                    • <strong>Sharpening Workflow:</strong> Output sharpening for different media
                  </li>
                  <li>
                    • <strong>Color Grading Presets:</strong> Consistent look across projects
                  </li>
                  <li>
                    • <strong>Export Settings:</strong> Automated sizing and format conversion
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Quality Control Checklist</h3>
            <p>Professional retouching requires systematic quality control to ensure consistent results:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Final Review Process:</h4>
                <ul className="space-y-2">
                  <li>☐ Check at 100% zoom for artifacts</li>
                  <li>☐ Verify skin texture preservation</li>
                  <li>☐ Ensure natural color balance</li>
                  <li>☐ Review edge quality and masking</li>
                  <li>☐ Test different viewing sizes</li>
                  <li>☐ Compare with original for authenticity</li>
                  <li>☐ Check consistency across series</li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-violet-600 to-rose-600 text-white p-8 rounded-lg my-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Perfect Your Retouching Skills</h2>
                <p className="mb-6">
                  Apply professional retouching techniques with our advanced editing tools and achieve studio-quality
                  results.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Start Retouching
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How much retouching is too much?</h3>
                  <p className="text-gray-700">
                    Professional retouching should enhance natural beauty without creating unrealistic expectations. If
                    the person looks significantly different from reality, you've likely gone too far. Always maintain
                    skin texture and natural features.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What's the difference between healing and cloning?</h3>
                  <p className="text-gray-700">
                    The Healing Brush blends texture from the source with the color and luminosity of the destination,
                    making it ideal for skin retouching. The Clone Stamp copies exactly what you sample, better for
                    precise texture work.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Should I retouch every photo in a series?</h3>
                  <p className="text-gray-700">
                    For professional work, maintain consistency across a series. Create a retouching template or action
                    based on the first image, then adapt it for each subsequent photo while maintaining the same level
                    and style of retouching.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How do I price retouching services?</h3>
                  <p className="text-gray-700">
                    Price based on complexity and time required. Basic retouching: $25-50/image, Standard:
                    $50-100/image, Advanced: $100-300/image, High-end: $300+/image. Always provide clear examples of
                    what each level includes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What monitor should I use for retouching?</h3>
                  <p className="text-gray-700">
                    Use a calibrated monitor with good color accuracy. Professional options include Eizo ColorEdge, BenQ
                    SW series, or Dell UltraSharp monitors. Calibrate monthly with a hardware colorimeter for consistent
                    results.
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
