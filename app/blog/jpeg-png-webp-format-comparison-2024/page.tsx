import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, Tag, ArrowLeft, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "JPEG vs PNG vs WebP: Comprehensive Format Comparison 2024 | Advanced Image Converter",
  description:
    "Complete comparison of JPEG, PNG, and WebP image formats. Learn which format to choose for web, print, and storage based on quality, file size, and compatibility.",
  keywords:
    "JPEG vs PNG, PNG vs WebP, image format comparison, best image format, web image optimization, photo formats 2024",
  openGraph: {
    title: "JPEG vs PNG vs WebP: Which Image Format Should You Choose?",
    description: "Comprehensive comparison of the three most popular image formats for web and digital use",
    type: "article",
  },
}

const faqs = [
  {
    question: "Which image format is best for websites?",
    answer:
      "WebP is generally the best choice for websites due to its superior compression and broad browser support. Use JPEG for photographs and PNG for graphics with transparency when WebP isn't supported.",
  },
  {
    question: "Should I use PNG or JPEG for photos?",
    answer:
      "Use JPEG for photographs as it provides excellent compression for complex images with many colors. PNG is better for graphics, screenshots, and images that need transparency.",
  },
  {
    question: "Is WebP really better than JPEG and PNG?",
    answer:
      "Yes, WebP typically provides 25-35% better compression than JPEG and 26% better than PNG while maintaining similar quality. It also supports both lossy and lossless compression plus transparency.",
  },
  {
    question: "When should I still use PNG instead of WebP?",
    answer:
      "Use PNG when you need maximum compatibility with older systems, when working with print materials, or when you need the absolute highest quality for graphics with sharp edges.",
  },
  {
    question: "Can I convert between these formats without losing quality?",
    answer:
      "Converting from lossy formats (JPEG) to lossless (PNG) won't improve quality. For best results, start with the highest quality source and convert to your target format using our Advanced Image Converter.",
  },
]

export default function FormatComparisonPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                <Tag className="h-3 w-3 mr-1" />
                guides
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                12 min read
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                January 12, 2024
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              JPEG vs PNG vs WebP: Comprehensive Format Comparison 2024
            </h1>

            {/* Author */}
            <div className="flex items-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                MC
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Mike Chen</p>
                <p className="text-sm text-gray-500">Senior Image Processing Engineer</p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Choosing the right image format can significantly impact your website's performance, user experience,
                and storage costs. In this comprehensive guide, we'll compare the three most popular web image formats:
                JPEG, PNG, and WebP, helping you make informed decisions for your specific use cases.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Quick Comparison Overview</h2>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 font-semibold">Feature</th>
                        <th className="text-left py-3 font-semibold">JPEG</th>
                        <th className="text-left py-3 font-semibold">PNG</th>
                        <th className="text-left py-3 font-semibold">WebP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 font-medium">Compression</td>
                        <td className="py-3">Lossy only</td>
                        <td className="py-3">Lossless only</td>
                        <td className="py-3">Both lossy & lossless</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 font-medium">Transparency</td>
                        <td className="py-3">❌ No</td>
                        <td className="py-3">✅ Yes</td>
                        <td className="py-3">✅ Yes</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 font-medium">Animation</td>
                        <td className="py-3">❌ No</td>
                        <td className="py-3">❌ No</td>
                        <td className="py-3">✅ Yes</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 font-medium">Browser Support</td>
                        <td className="py-3">Universal</td>
                        <td className="py-3">Universal</td>
                        <td className="py-3">95%+ modern</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 font-medium">Best Use Case</td>
                        <td className="py-3">Photographs</td>
                        <td className="py-3">Graphics, logos</td>
                        <td className="py-3">Web images</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">Average File Size</td>
                        <td className="py-3">Medium</td>
                        <td className="py-3">Large</td>
                        <td className="py-3">🏆 Smallest</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">JPEG: The Photography Standard</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Strengths</h3>
              <ul>
                <li>
                  <strong>Excellent for photographs:</strong> JPEG's lossy compression is optimized for images with
                  smooth color transitions
                </li>
                <li>
                  <strong>Small file sizes:</strong> Highly efficient compression for complex images
                </li>
                <li>
                  <strong>Universal compatibility:</strong> Supported by every device and browser
                </li>
                <li>
                  <strong>Adjustable quality:</strong> Fine-tune the balance between file size and image quality
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Weaknesses</h3>
              <ul>
                <li>
                  <strong>No transparency support:</strong> Cannot handle transparent backgrounds
                </li>
                <li>
                  <strong>Lossy compression:</strong> Each save degrades image quality
                </li>
                <li>
                  <strong>Poor for graphics:</strong> Creates artifacts around sharp edges and text
                </li>
                <li>
                  <strong>Limited metadata:</strong> Less flexible than newer formats
                </li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  💡 Best Practices for JPEG
                </h4>
                <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Use quality settings between 75-85 for web images</li>
                  <li>• Save at 90-95 quality for print materials</li>
                  <li>• Avoid multiple saves to prevent quality degradation</li>
                  <li>• Use progressive JPEG for faster perceived loading</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">PNG: The Graphics Champion</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Strengths</h3>
              <ul>
                <li>
                  <strong>Lossless compression:</strong> Perfect quality preservation
                </li>
                <li>
                  <strong>Transparency support:</strong> Full alpha channel support
                </li>
                <li>
                  <strong>Excellent for graphics:</strong> Sharp edges and text remain crisp
                </li>
                <li>
                  <strong>Wide color support:</strong> Supports various color depths
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Weaknesses</h3>
              <ul>
                <li>
                  <strong>Large file sizes:</strong> Especially for photographs
                </li>
                <li>
                  <strong>No animation support:</strong> Static images only
                </li>
                <li>
                  <strong>Limited compression:</strong> Not ideal for complex images
                </li>
                <li>
                  <strong>Slower loading:</strong> Larger files mean longer load times
                </li>
              </ul>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                  💡 Best Practices for PNG
                </h4>
                <ul className="text-green-800 dark:text-green-200 space-y-1">
                  <li>• Use PNG-8 for simple graphics with limited colors</li>
                  <li>• Use PNG-24 when you need transparency</li>
                  <li>• Optimize with tools to reduce file size</li>
                  <li>• Consider WebP as a modern alternative</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">WebP: The Modern Solution</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Strengths</h3>
              <ul>
                <li>
                  <strong>Superior compression:</strong> 25-35% smaller than JPEG, 26% smaller than PNG
                </li>
                <li>
                  <strong>Versatile:</strong> Supports both lossy and lossless compression
                </li>
                <li>
                  <strong>Modern features:</strong> Transparency and animation support
                </li>
                <li>
                  <strong>Excellent browser support:</strong> 95%+ coverage in modern browsers
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Weaknesses</h3>
              <ul>
                <li>
                  <strong>Limited legacy support:</strong> Not supported in very old browsers
                </li>
                <li>
                  <strong>Software compatibility:</strong> Some older image editors don't support WebP
                </li>
                <li>
                  <strong>Processing overhead:</strong> Slightly more CPU intensive to decode
                </li>
              </ul>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  💡 Best Practices for WebP
                </h4>
                <ul className="text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• Use 80-85 quality for lossy WebP images</li>
                  <li>• Implement fallbacks for older browsers</li>
                  <li>• Use lossless WebP for graphics and screenshots</li>
                  <li>• Consider WebP for all new web projects</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Real-World Performance Comparison</h2>

              <p>
                To demonstrate the practical differences, let's look at file size comparisons for different image types:
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold mb-4">Sample Image: High-resolution photograph (1920x1080)</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg">
                    <h5 className="font-semibold text-lg mb-2">JPEG (Quality 80)</h5>
                    <p className="text-2xl font-bold text-blue-600">245 KB</p>
                    <p className="text-sm text-gray-500">Baseline</p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg">
                    <h5 className="font-semibold text-lg mb-2">PNG-24</h5>
                    <p className="text-2xl font-bold text-green-600">1.2 MB</p>
                    <p className="text-sm text-gray-500">+390% larger</p>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg">
                    <h5 className="font-semibold text-lg mb-2">WebP (Quality 80)</h5>
                    <p className="text-2xl font-bold text-purple-600">180 KB</p>
                    <p className="text-sm text-gray-500">26% smaller</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Decision Framework: Which Format to Choose</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Choose JPEG when:</h3>
              <ul>
                <li>Working with photographs or complex images</li>
                <li>File size is more important than perfect quality</li>
                <li>Maximum compatibility is required</li>
                <li>Working with print materials</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Choose PNG when:</h3>
              <ul>
                <li>You need transparency support</li>
                <li>Working with graphics, logos, or screenshots</li>
                <li>Perfect quality is essential</li>
                <li>Images have sharp edges or text</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Choose WebP when:</h3>
              <ul>
                <li>Building modern web applications</li>
                <li>Performance and file size are priorities</li>
                <li>You can implement fallbacks for older browsers</li>
                <li>You need the benefits of both JPEG and PNG</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Future Considerations</h2>
              <p>
                The image format landscape continues to evolve. AVIF, the newest format, promises even better
                compression than WebP but has limited browser support. For now, WebP represents the best balance of
                performance, features, and compatibility for most web applications.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
              <p>
                While JPEG and PNG remain important for specific use cases, WebP is increasingly becoming the format of
                choice for modern web development. Its superior compression, versatility, and broad browser support make
                it an excellent default choice for most web images.
              </p>

              <p>
                The key is understanding your specific requirements and choosing the format that best balances quality,
                file size, and compatibility for your use case. Our Advanced Image Converter makes it easy to experiment
                with different formats and find the perfect solution for your needs.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Compare Formats Yourself</h3>
              <p className="text-lg opacity-90 mb-6">
                Try converting the same image to different formats and see the differences in quality and file size.
              </p>
              <Button asChild className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/#converter">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Start Converting Now
                </Link>
              </Button>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
