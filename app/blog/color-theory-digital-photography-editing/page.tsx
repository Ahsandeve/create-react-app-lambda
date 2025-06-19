import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Palette, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Color Theory in Digital Photography & Editing 2024 | Advanced Image Converter",
  description:
    "Master color theory for digital photography and editing. Learn color harmony, temperature, grading techniques, and psychological impact for stunning visual results.",
  keywords: [
    "color theory",
    "digital photography",
    "color grading",
    "photo editing",
    "color harmony",
    "visual composition",
  ],
  openGraph: {
    title: "Color Theory in Digital Photography & Editing",
    description:
      "Complete guide to color theory for photographers and digital artists to create compelling visual narratives.",
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
              Color Theory in Digital Photography & Editing 2024
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>Published on December 1, 2024</span>
              <span className="mx-2">•</span>
              <span>By Maria Rodriguez</span>
              <span className="mx-2">•</span>
              <span>17 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Master color theory to create compelling visual narratives in digital photography. Learn color harmony, temperature control, advanced grading techniques, and the psychological impact of color choices.
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
                      Color is one of the most powerful tools in visual storytelling. Understanding color theory transforms good photos into extraordinary ones by creating emotional connections and guiding viewer attention.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Fundamentals of Color Theory</h2>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">The Color Wheel and Relationships</h3>
            <p>
              The color wheel is the foundation of color theory, showing relationships between colors that create harmony or contrast in your images:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-red-700">Primary Colors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>🔴 <strong>Red:</strong> Energy, passion, warmth</li>
                    <li>🔵 <strong>Blue:</strong> Calm, trust, coolness</li>
                    <li>🟡 <strong>Yellow:</strong> Joy, optimism, brightness</li>
                  </ul>
                  <p className="text-xs mt-3 text-red-600">
                    Cannot be created by mixing other colors
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-green-700">Secondary Colors</h4>
                  <ul className="space-y-2 text-sm">
                    <li>🟠 <strong>Orange:</strong> Red + Yellow</li>
                    <li>🟢 <strong>Green:</strong> Blue + Yellow</li>
                    <li>🟣 <strong>Purple:</strong> Red + Blue</li>
                  </ul>
                  <p className="text-xs mt-3 text-green-600">
                    Created by mixing two primary colors
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Color Harmony Schemes</h3>
            <p>
              Understanding color harmony helps create visually pleasing and emotionally impactful compositions:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Harmony Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Visual Effect</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Best Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Complementary</td>
                    <td className="border border-gray-300 px-4 py-2">Opposite colors on wheel</td>
                    <td className="border border-gray-300 px-4 py-2">High contrast, vibrant</td>
                    <td className="border border-gray-300 px-4 py-2">Drama, focal points</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Analogous</td>
                    <td className="border border-gray-300 px-4 py-2">Adjacent colors</td>
                    <td className="border border-gray-300 px-4 py-2">Harmonious, peaceful</td>
                    <td className="border border-gray-300 px-4 py-2">Landscapes, portraits</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Triadic</td>
                    <td className="border border-gray-300 px-4 py-2">Three evenly spaced colors</td>
                    <td className="border border-gray-300 px-4 py-2">Balanced, lively</td>
                    <td className="border border-gray-300 px-4 py-2">Creative compositions</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Monochromatic</td>
                    <td className="border border-gray-300 px-4 py-2">Variations of single hue</td>
                    <td className="border border-gray-300 px-4 py-2">Unified, sophisticated</td>
                    <td className="border border-gray-300 px-4 py-2">Minimalist, elegant</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Color Temperature and White Balance</h2>

            <Card className="my-8 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-800">Understanding Color Temperature</h3>
                    <p className="text-blue-700">
                      Color temperature, measured in Kelvin (K), describes the warmth or coolness of light. Mastering temperature control is crucial for mood and atmosphere in your images.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Color Temperature Scale</h3>
            
            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-orange-700">Warm (2000K-3500K)</h4>
                  <ul className="text-sm space-y-1">
                    <li>🕯️ Candlelight: 1900K</li>
                    <li>💡 Tungsten: 2700K</li>
                    <li>🌅 Sunrise: 3200K</li>
                  </ul>
                  <p className="text-xs mt-2 text-orange-600">
                    Creates cozy, intimate mood
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-yellow-700">Neutral (3500K-5500K)</h4>
                  <ul className="text-sm space-y-1">
                    <li>🌤️ Morning sun: 4000K</li>
                    <li>📸 Flash: 5000K</li>
                    <li>☀️ Midday: 5500K</li>
                  </ul>
                  <p className="text-xs mt-2 text-yellow-600">
                    Natural, balanced appearance
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-blue-700">Cool (5500K-10000K)</h4>
                  <ul className="text-sm space-y-1">
                    <li>☁️ Overcast: 6500K</li>
                    <li>🌌 Blue hour: 8000K</li>
                    <li>🏔️ Clear sky: 10000K</li>
                  </ul>
                  <p className="text-xs mt-2 text-blue-600">
                    Modern, clean, dramatic feel
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Creative White Balance Techniques</h3>
            <p>
              Beyond correction, white balance becomes a creative tool for storytelling:
            </p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Creative Applications:</h4>
                <ul className="space-y-2">
                  <li>\
