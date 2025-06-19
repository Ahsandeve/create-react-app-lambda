import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Eye, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Complete Guide to Image Formats 2024: JPG vs PNG vs WebP vs AVIF | Advanced Image Converter",
  description:
    "Comprehensive comparison of image formats in 2024. Learn when to use JPG, PNG, WebP, AVIF, GIF, and more. Expert analysis of file sizes, quality, and browser support.",
  keywords:
    "image formats 2024, JPG vs PNG, WebP vs AVIF, image format comparison, best image format, web performance, image optimization",
  openGraph: {
    title: "Complete Guide to Image Formats 2024",
    description: "Expert comparison of all major image formats with real-world testing",
    type: "article",
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-blue-600 text-white">Technology</Badge>
              <Badge variant="outline">Featured</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              Complete Guide to Image Formats in 2024: JPG vs PNG vs WebP vs AVIF
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                December 15, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                12 min read
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                2.5K views
              </span>
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>

            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Image formats comparison chart"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="text-xl leading-relaxed mb-8 text-gray-600 dark:text-gray-300">
              Choosing the right image format in 2024 can make or break your website's performance. With new formats
              like AVIF gaining traction and traditional formats evolving, understanding the strengths and weaknesses of
              each format is crucial for developers, designers, and content creators.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-12 mb-6">
              The Evolution of Image Formats
            </h2>
            <p className="mb-6">
              Image formats have come a long way since the early days of the web. What started with simple GIF
              animations has evolved into a complex ecosystem of formats, each optimized for specific use cases. In
              2024, we're seeing a shift towards more efficient formats that balance quality, file size, and browser
              compatibility.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-12 mb-6">Format-by-Format Analysis</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              JPEG/JPG: The Reliable Workhorse
            </h3>
            <p className="mb-4">
              JPEG remains the most widely used image format on the web, and for good reason. Its excellent compression
              ratio makes it ideal for photographs and images with complex color gradients.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">JPEG Pros:</h4>
              <ul className="list-disc list-inside text-blue-700 dark:text-blue-400 space-y-1">
                <li>Universal browser support (100%)</li>
                <li>Excellent compression for photographs</li>
                <li>Small file sizes for complex images</li>
                <li>Hardware acceleration support</li>
              </ul>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mt-4 mb-3">JPEG Cons:</h4>
              <ul className="list-disc list-inside text-blue-700 dark:text-blue-400 space-y-1">
                <li>No transparency support</li>
                <li>Lossy compression artifacts</li>
                <li>Poor performance with text and graphics</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">PNG: The Quality Champion</h3>
            <p className="mb-4">
              PNG excels where JPEG fails. Its lossless compression and transparency support make it the go-to format
              for logos, graphics, and images requiring pixel-perfect quality.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">PNG Pros:</h4>
              <ul className="list-disc list-inside text-green-700 dark:text-green-400 space-y-1">
                <li>Lossless compression</li>
                <li>Full transparency support</li>
                <li>Perfect for graphics and text</li>
                <li>Universal browser support</li>
              </ul>
              <h4 className="font-semibold text-green-800 dark:text-green-300 mt-4 mb-3">PNG Cons:</h4>
              <ul className="list-disc list-inside text-green-700 dark:text-green-400 space-y-1">
                <li>Large file sizes for photographs</li>
                <li>No animation support</li>
                <li>Limited compression options</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              WebP: The Modern Alternative
            </h3>
            <p className="mb-4">
              Google's WebP format has gained significant traction, offering superior compression compared to both JPEG
              and PNG while maintaining excellent quality.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">WebP Pros:</h4>
              <ul className="list-disc list-inside text-purple-700 dark:text-purple-400 space-y-1">
                <li>25-35% smaller than JPEG</li>
                <li>26% smaller than PNG</li>
                <li>Supports both lossy and lossless compression</li>
                <li>Animation and transparency support</li>
                <li>96% browser support (2024)</li>
              </ul>
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mt-4 mb-3">WebP Cons:</h4>
              <ul className="list-disc list-inside text-purple-700 dark:text-purple-400 space-y-1">
                <li>Limited support in older browsers</li>
                <li>Requires fallback strategies</li>
                <li>Slower encoding than JPEG</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">AVIF: The Future is Here</h3>
            <p className="mb-4">
              AVIF (AV1 Image File Format) is the newest player in the image format game, offering unprecedented
              compression efficiency that outperforms all other formats.
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">AVIF Pros:</h4>
              <ul className="list-disc list-inside text-orange-700 dark:text-orange-400 space-y-1">
                <li>50% smaller than JPEG</li>
                <li>20% smaller than WebP</li>
                <li>Excellent quality retention</li>
                <li>Wide color gamut support</li>
                <li>HDR support</li>
              </ul>
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mt-4 mb-3">AVIF Cons:</h4>
              <ul className="list-disc list-inside text-orange-700 dark:text-orange-400 space-y-1">
                <li>Limited browser support (71% in 2024)</li>
                <li>Slow encoding/decoding</li>
                <li>High CPU usage</li>
                <li>Requires modern hardware</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-12 mb-6">Performance Comparison</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                      Format
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                      File Size
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                      Quality
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                      Browser Support
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                      Use Case
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-medium">JPEG</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Medium</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Good</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">100%</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Photographs</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-medium">PNG</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Large</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Excellent</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">100%</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Graphics, Logos</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-medium">WebP</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Small</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Excellent</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">96%</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Modern Web</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-medium">AVIF</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Very Small</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Excellent</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">71%</td>
                    <td className="border border-gray-200 dark:border-gray-600 px-4 py-3">Cutting Edge</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-12 mb-6">2024 Recommendations</h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Best Practices for 2024</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-white/20 rounded-full p-1 text-xs font-bold mt-1">1</span>
                  <span>Use AVIF with WebP fallback for maximum efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white/20 rounded-full p-1 text-xs font-bold mt-1">2</span>
                  <span>Implement responsive images with different formats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white/20 rounded-full p-1 text-xs font-bold mt-1">3</span>
                  <span>Use PNG only for graphics requiring transparency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white/20 rounded-full p-1 text-xs font-bold mt-1">4</span>
                  <span>Always test formats with your specific content</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Try Our Tool CTA */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg my-12">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Try Different Formats Now</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Experiment with different image formats using our free converter. See the difference in file size and
              quality for yourself.
            </p>
            <Link
              href="/#converter"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
            >
              Convert Images Now
            </Link>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">
                    Which image format should I use for my website in 2024?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    For modern websites, use AVIF with WebP fallback and JPEG as the final fallback. This approach gives
                    you the best compression while maintaining compatibility. For graphics and logos, PNG is still the
                    best choice when transparency is needed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">
                    Is AVIF worth using despite limited browser support?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    Yes, AVIF is worth implementing with proper fallbacks. With 71% browser support in 2024 and 50%
                    smaller file sizes than JPEG, the performance benefits outweigh the complexity. Modern users with
                    supported browsers get significantly faster loading times.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">
                    How much can I reduce file sizes by switching from JPEG to WebP?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    WebP typically reduces file sizes by 25-35% compared to JPEG at the same quality level. For PNG
                    images, the savings can be even more dramatic, with reductions of up to 26% while maintaining the
                    same visual quality.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">
                    What's the best quality setting for different image formats?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    For JPEG, use 80-85% quality for most web images. For WebP lossy, 75-80% provides excellent results.
                    AVIF can maintain great quality at 50-60%. Always test with your specific images as optimal settings
                    vary by content type.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">
                    Should I still use PNG for anything?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    Yes, PNG is still the best choice for images requiring transparency (logos, icons, graphics with
                    transparent backgrounds) and for images where absolute pixel-perfect quality is required. For
                    photographs, modern formats like WebP and AVIF are better choices.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I implement multiple format support on my website?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    Use the HTML &lt;picture&gt; element with multiple &lt;source&gt; tags for different formats, or
                    implement server-side detection to serve the best format based on browser support. Many CDNs also
                    offer automatic format optimization.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Related Articles */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">Tutorial</Badge>
                <CardTitle className="text-lg">
                  <Link href="/blog/batch-image-processing-guide" className="hover:text-blue-600 transition-colors">
                    Master Batch Image Processing: Convert 100+ Images in Minutes
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Learn professional techniques for batch processing images efficiently. Save hours with these expert
                  tips.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">Technology</Badge>
                <CardTitle className="text-lg">
                  <Link href="/blog/webp-vs-avif-2024-comparison" className="hover:text-blue-600 transition-colors">
                    WebP vs AVIF in 2024: The Ultimate Performance Comparison
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Detailed analysis of WebP and AVIF formats with real-world testing results and recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
