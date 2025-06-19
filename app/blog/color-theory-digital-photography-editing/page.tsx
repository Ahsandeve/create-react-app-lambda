import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Palette, Eye, Lightbulb, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Color Theory for Digital Photography & Editing 2024 | Advanced Image Converter",
  description:
    "Master color theory for digital photography and photo editing. Learn color harmony, temperature, grading techniques, and professional color correction methods.",
  keywords: [
    "color theory",
    "digital photography",
    "photo editing",
    "color grading",
    "color correction",
    "color harmony",
  ],
  openGraph: {
    title: "Color Theory for Digital Photography & Editing",
    description: "Complete guide to color theory for photographers and digital artists.",
    type: "article",
  },
}

export default function ColorTheoryGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center text-pink-600 hover:text-pink-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Color Theory for Digital Photography & Editing 2024
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>Published on December 1, 2024</span>
              <span className="mx-2">•</span>
              <span>By Maria Rodriguez</span>
              <span className="mx-2">•</span>
              <span>17 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Master the art and science of color in digital photography. Learn how color theory transforms ordinary
              photos into compelling visual stories through professional techniques.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-l-4 border-l-pink-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Palette className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Why Color Theory Matters</h3>
                    <p className="text-gray-700">
                      Color is one of the most powerful tools in photography and digital editing. Understanding color
                      theory helps you create mood, direct attention, and evoke emotions in your images.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Fundamentals of Color Theory</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">The Color Wheel</h3>
            <p>
              The color wheel is the foundation of color theory, organizing colors in a logical sequence that reveals
              relationships and harmonies between different hues.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-red-700">Primary Colors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>🔴 Red - Energy, passion, warmth</li>
                    <li>🔵 Blue - Calm, trust, stability</li>
                    <li>🟡 Yellow - Joy, optimism, attention</li>
                  </ul>
                  <p className="text-xs mt-3 text-red-600">Cannot be created by mixing other colors</p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-green-700">Secondary Colors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>🟠 Orange - Enthusiasm, creativity</li>
                    <li>🟢 Green - Nature, growth, harmony</li>
                    <li>🟣 Purple - Luxury, mystery, spirituality</li>
                  </ul>
                  <p className="text-xs mt-3 text-green-600">Created by mixing two primary colors</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-blue-700">Tertiary Colors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>🔶 Red-orange, Yellow-orange</li>
                    <li>🔷 Blue-green, Blue-violet</li>
                    <li>🔸 Red-violet, Yellow-green</li>
                  </ul>
                  <p className="text-xs mt-3 text-blue-600">Mix of primary and secondary colors</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Color Properties</h3>
            <p>Every color has three fundamental properties that determine its appearance and emotional impact:</p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Property</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Definition</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Photography Impact</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Editing Control</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <strong>Hue</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">The color itself (red, blue, green)</td>
                    <td className="border border-gray-300 px-4 py-2">Sets mood and atmosphere</td>
                    <td className="border border-gray-300 px-4 py-2">HSL Hue slider, Color Grading</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <strong>Saturation</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Intensity or purity of color</td>
                    <td className="border border-gray-300 px-4 py-2">Creates vibrancy or subtlety</td>
                    <td className="border border-gray-300 px-4 py-2">Saturation, Vibrance sliders</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <strong>Luminance</strong>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Brightness or darkness of color</td>
                    <td className="border border-gray-300 px-4 py-2">Affects contrast and depth</td>
                    <td className="border border-gray-300 px-4 py-2">Luminance, Exposure controls</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Color Harmony in Photography</h2>

            <Card className="my-8 bg-orange-50 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Eye className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-orange-800">Visual Harmony</h3>
                    <p className="text-orange-700">
                      Color harmony creates pleasing visual relationships that feel balanced and intentional.
                      Understanding these relationships helps you compose more compelling images.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Types of Color Harmony</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Complementary Colors</h4>
                  <p className="text-sm mb-3">
                    Colors opposite on the color wheel create high contrast and visual impact.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Red & Green:</strong> Christmas, nature contrasts
                    </li>
                    <li>
                      • <strong>Blue & Orange:</strong> Sunset skies, movie posters
                    </li>
                    <li>
                      • <strong>Yellow & Purple:</strong> Dramatic, artistic looks
                    </li>
                  </ul>
                  <p className="text-xs mt-3 text-gray-600">Best for: Creating drama, drawing attention</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Analogous Colors</h4>
                  <p className="text-sm mb-3">Adjacent colors on the wheel create harmony and unity.</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Blue-Green-Blue:</strong> Ocean scenes
                    </li>
                    <li>
                      • <strong>Red-Orange-Yellow:</strong> Autumn foliage
                    </li>
                    <li>
                      • <strong>Purple-Blue-Green:</strong> Cool, calming moods
                    </li>
                  </ul>
                  <p className="text-xs mt-3 text-gray-600">Best for: Creating mood, peaceful scenes</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Triadic Colors</h4>
                  <p className="text-sm mb-3">Three colors equally spaced on the wheel create vibrant balance.</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • <strong>Red-Yellow-Blue:</strong> Primary triad
                    </li>
                    <li>
                      • <strong>Orange-Green-Purple:</strong> Secondary triad
                    </li>
                    <li>• Dynamic yet balanced compositions</li>
                  </ul>
                  <p className="text-xs mt-3 text-gray-600">Best for: Vibrant, energetic images</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Monochromatic</h4>
                  <p className="text-sm mb-3">Variations of a single hue create sophisticated unity.</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Different shades, tints, and tones</li>
                    <li>• Elegant, minimalist aesthetic</li>
                    <li>• Focus on texture and form</li>
                  </ul>
                  <p className="text-xs mt-3 text-gray-600">Best for: Artistic, minimalist photography</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Color Temperature and White Balance</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Understanding Color Temperature</h3>
            <p>
              Color temperature, measured in Kelvin (K), describes the warmth or coolness of light and dramatically
              affects the mood of your images.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Light Source</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Temperature (K)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Color Cast</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Mood Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Candlelight</td>
                    <td className="border border-gray-300 px-4 py-2">1,900K</td>
                    <td className="border border-gray-300 px-4 py-2">Very warm orange</td>
                    <td className="border border-gray-300 px-4 py-2">Intimate, cozy</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Tungsten bulbs</td>
                    <td className="border border-gray-300 px-4 py-2">2,700K</td>
                    <td className="border border-gray-300 px-4 py-2">Warm yellow</td>
                    <td className="border border-gray-300 px-4 py-2">Comfortable, homey</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Golden hour</td>
                    <td className="border border-gray-300 px-4 py-2">3,200K</td>
                    <td className="border border-gray-300 px-4 py-2">Golden yellow</td>
                    <td className="border border-gray-300 px-4 py-2">Romantic, magical</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Daylight</td>
                    <td className="border border-gray-300 px-4 py-2">5,500K</td>
                    <td className="border border-gray-300 px-4 py-2">Neutral white</td>
                    <td className="border border-gray-300 px-4 py-2">Natural, balanced</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Overcast sky</td>
                    <td className="border border-gray-300 px-4 py-2">6,500K</td>
                    <td className="border border-gray-300 px-4 py-2">Cool white</td>
                    <td className="border border-gray-300 px-4 py-2">Calm, subdued</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Blue hour</td>
                    <td className="border border-gray-300 px-4 py-2">9,000K</td>
                    <td className="border border-gray-300 px-4 py-2">Cool blue</td>
                    <td className="border border-gray-300 px-4 py-2">Mysterious, dramatic</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Creative White Balance Techniques</h3>
            <p>While accurate white balance is important, creative manipulation can enhance mood and storytelling:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Creative White Balance Applications:</h4>
                <ul className="space-y-3">
                  <li>
                    <strong>Warm Bias (+200-500K):</strong> Enhances golden hour, creates cozy indoor feeling
                  </li>
                  <li>
                    <strong>Cool Bias (-200-500K):</strong> Emphasizes blue hour, creates modern/clinical look
                  </li>
                  <li>
                    <strong>Split Toning:</strong> Warm highlights, cool shadows for cinematic effect
                  </li>
                  <li>
                    <strong>Extreme Shifts:</strong> Artistic interpretation, surreal moods
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Color Grading Techniques</h2>

            <Card className="my-8 bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-purple-800">Color Grading vs Color Correction</h3>
                    <p className="text-purple-700">
                      Color correction fixes technical issues and achieves accurate colors. Color grading is the
                      creative process of enhancing mood and style through intentional color choices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Professional Color Grading Workflow</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Step 1: Color Correction</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Set proper white balance</li>
                    <li>Adjust exposure and contrast</li>
                    <li>Correct color casts</li>
                    <li>Balance highlights and shadows</li>
                    <li>Ensure skin tones look natural</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Step 2: Creative Grading</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Define the mood and style</li>
                    <li>Apply color harmony principles</li>
                    <li>Enhance or shift specific colors</li>
                    <li>Create depth with color contrast</li>
                    <li>Fine-tune for final impact</li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Popular Color Grading Styles</h3>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Orange & Teal</h4>
                  <p className="text-sm text-gray-600 mb-2">Hollywood blockbuster look</p>
                  <ul className="text-xs space-y-1">
                    <li>• Warm skin tones (orange)</li>
                    <li>• Cool backgrounds (teal/blue)</li>
                    <li>• High contrast and drama</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Film Emulation</h4>
                  <p className="text-sm text-gray-600 mb-2">Vintage analog film look</p>
                  <ul className="text-xs space-y-1">
                    <li>• Lifted blacks, rolled highlights</li>
                    <li>• Specific color characteristics</li>
                    <li>• Grain and texture</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Desaturated</h4>
                  <p className="text-sm text-gray-600 mb-2">Modern, minimalist aesthetic</p>
                  <ul className="text-xs space-y-1">
                    <li>• Reduced overall saturation</li>
                    <li>• Emphasis on luminance</li>
                    <li>• Clean, sophisticated look</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Color Psychology in Photography</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Emotional Impact of Colors</h3>
            <p>
              Understanding how colors affect emotions helps you create images that resonate with viewers on a deeper
              level:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-red-700">Warm Colors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      🔴 <strong>Red:</strong> Passion, energy, danger, love
                    </li>
                    <li>
                      🟠 <strong>Orange:</strong> Enthusiasm, creativity, warmth
                    </li>
                    <li>
                      🟡 <strong>Yellow:</strong> Joy, optimism, attention, caution
                    </li>
                  </ul>
                  <p className="text-xs mt-3 text-red-600">
                    <strong>Use for:</strong> Dynamic portraits, action shots, emotional scenes
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-blue-700">Cool Colors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      🔵 <strong>Blue:</strong> Calm, trust, stability, sadness
                    </li>
                    <li>
                      🟢 <strong>Green:</strong> Nature, growth, harmony, freshness
                    </li>
                    <li>
                      🟣 <strong>Purple:</strong> Luxury, mystery, creativity, spirituality
                    </li>
                  </ul>
                  <p className="text-xs mt-3 text-blue-600">
                    <strong>Use for:</strong> Landscapes, peaceful scenes, corporate imagery
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Cultural Color Associations</h3>
            <p>
              Color meanings can vary significantly across cultures. Consider your audience when making color choices:
            </p>

            <Card className="my-6 bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Cultural Color Examples:</h4>
                <ul className="space-y-2">
                  <li>
                    <strong>White:</strong> Purity/weddings (Western) vs. mourning/death (Eastern)
                  </li>
                  <li>
                    <strong>Red:</strong> Luck/prosperity (Chinese) vs. danger/stop (Western)
                  </li>
                  <li>
                    <strong>Green:</strong> Nature/go (Western) vs. infidelity (China)
                  </li>
                  <li>
                    <strong>Purple:</strong> Royalty (Western) vs. death/mourning (Thailand)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Advanced Color Techniques</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Selective Color Adjustment</h3>
            <p>Target specific colors in your image for precise control without affecting the entire image:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Selective Color Applications:</h4>
                <ul className="space-y-3">
                  <li>
                    <strong>Skin Tone Enhancement:</strong> Adjust orange/red hues for flattering portraits
                  </li>
                  <li>
                    <strong>Sky Improvement:</strong> Enhance blue saturation and luminance
                  </li>
                  <li>
                    <strong>Foliage Pop:</strong> Increase green vibrancy in landscape photography
                  </li>
                  <li>
                    <strong>Color Isolation:</strong> Desaturate everything except one color for impact
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Color Masking and Luminosity</h3>
            <p>Advanced techniques for precise color control:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Color Range Masking</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Select specific color ranges</li>
                    <li>• Apply adjustments to selected colors only</li>
                    <li>• Refine selections with feathering</li>
                    <li>• Combine multiple color selections</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Luminosity Masking</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Target highlights, midtones, shadows</li>
                    <li>• Preserve natural color transitions</li>
                    <li>• Create complex, realistic adjustments</li>
                    <li>• Maintain image integrity</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Color Management Workflow</h2>

            <Card className="my-8 bg-teal-50 border-teal-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-teal-800">Consistent Color Workflow</h3>
                    <p className="text-teal-700">
                      Proper color management ensures your colors look consistent across different devices and output
                      methods, from screen to print.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Color Space Selection</h3>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Color Space</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Gamut Size</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Best Use</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Compatibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">sRGB</td>
                    <td className="border border-gray-300 px-4 py-2">Small</td>
                    <td className="border border-gray-300 px-4 py-2">Web, social media</td>
                    <td className="border border-gray-300 px-4 py-2">Universal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Adobe RGB</td>
                    <td className="border border-gray-300 px-4 py-2">Medium</td>
                    <td className="border border-gray-300 px-4 py-2">Print, professional work</td>
                    <td className="border border-gray-300 px-4 py-2">Professional software</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">ProPhoto RGB</td>
                    <td className="border border-gray-300 px-4 py-2">Large</td>
                    <td className="border border-gray-300 px-4 py-2">High-end editing, archival</td>
                    <td className="border border-gray-300 px-4 py-2">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Monitor Calibration</h3>
            <p>Accurate monitor calibration is essential for reliable color work:</p>

            <ul className="space-y-3 mt-4">
              <li>
                <strong>Hardware Calibration:</strong> Use colorimeters like X-Rite i1Display Pro
              </li>
              <li>
                <strong>Regular Calibration:</strong> Monthly for critical work, quarterly for general use
              </li>
              <li>
                <strong>Viewing Environment:</strong> Controlled lighting, neutral wall colors
              </li>
              <li>
                <strong>Monitor Settings:</strong> 6500K white point, 120 cd/m² brightness
              </li>
            </ul>

            <div className="bg-gradient-to-r from-pink-600 to-orange-600 text-white p-8 rounded-lg my-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Master Color Theory in Your Photography</h2>
                <p className="mb-6">
                  Apply professional color theory techniques to transform your images with our advanced color grading
                  and editing tools.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Start Color Grading
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    What's the difference between color correction and color grading?
                  </h3>
                  <p className="text-gray-700">
                    Color correction fixes technical issues like white balance and exposure to achieve accurate, natural
                    colors. Color grading is the creative process of enhancing mood and style through intentional color
                    choices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Should I shoot in RAW for better color control?</h3>
                  <p className="text-gray-700">
                    Yes, RAW files contain much more color information than JPEGs, giving you greater flexibility in
                    post-processing. You can adjust white balance, recover highlights/shadows, and make dramatic color
                    changes without quality loss.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How do I choose colors that work well together?</h3>
                  <p className="text-gray-700">
                    Use the color wheel to find harmonious relationships: complementary colors for contrast, analogous
                    colors for harmony, or triadic colors for vibrant balance. Consider the mood you want to create and
                    your subject matter.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Why do my colors look different on different devices?</h3>
                  <p className="text-gray-700">
                    Different devices use different color spaces and calibration. Use proper color management, calibrate
                    your monitor, and work in appropriate color spaces (sRGB for web, Adobe RGB for print) to maintain
                    consistency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can I fix bad lighting with color grading?</h3>
                  <p className="text-gray-700">
                    Color grading can improve many lighting issues like color casts and white balance problems. However,
                    it can't fix fundamental exposure problems or add detail that wasn't captured. Good lighting at
                    capture time is always preferable.
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
