import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, Tag, ArrowLeft, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Image Compression Techniques: Lossless vs Lossy Explained | Advanced Image Converter",
  description:
    "Understanding the difference between lossless and lossy compression and when to use each method for optimal results. Complete guide to image compression techniques.",
  keywords:
    "image compression, lossless compression, lossy compression, image quality, file size optimization, compression algorithms",
  openGraph: {
    title: "Image Compression Techniques: Lossless vs Lossy Explained",
    description: "Learn the difference between lossless and lossy compression for optimal image results",
    type: "article",
  },
}

const faqs = [
  {
    question: "What's the main difference between lossless and lossy compression?",
    answer:
      "Lossless compression preserves all original image data and allows perfect reconstruction, while lossy compression removes some data to achieve smaller file sizes but cannot be perfectly reconstructed.",
  },
  {
    question: "When should I use lossless compression?",
    answer:
      "Use lossless compression for graphics, logos, screenshots, medical images, or any image where perfect quality is essential and file size is less important.",
  },
  {
    question: "When is lossy compression better?",
    answer:
      "Lossy compression is ideal for photographs, web images, and situations where smaller file sizes are more important than perfect quality. It's perfect for reducing bandwidth and storage costs.",
  },
  {
    question: "Can I convert from lossy to lossless format?",
    answer:
      "You can convert the format, but you cannot recover the lost data. Converting a JPEG (lossy) to PNG (lossless) won't improve quality - the compression artifacts will remain.",
  },
  {
    question: "Which compression type does WebP use?",
    answer:
      "WebP supports both lossless and lossy compression, making it versatile for different use cases. You can choose the compression type based on your specific needs.",
  },
]

export default function CompressionTechniquesPage() {
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                <Tag className="h-3 w-3 mr-1" />
                technical
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" />6 min read
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                January 10, 2024
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Image Compression Techniques: Lossless vs Lossy Explained
            </h1>

            {/* Author */}
            <div className="flex items-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                ER
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Emily Rodriguez</p>
                <p className="text-sm text-gray-500">Compression Algorithm Specialist</p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Understanding image compression is crucial for anyone working with digital images. Whether you're a web
                developer optimizing site performance or a photographer managing storage, knowing when to use lossless
                versus lossy compression can make a significant difference in your results.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">What is Image Compression?</h2>
              <p>
                Image compression is the process of reducing the file size of digital images by removing redundant or
                unnecessary data. This process is essential for efficient storage, faster transmission, and better web
                performance. There are two fundamental approaches to image compression: lossless and lossy.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Lossless Compression Explained</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">How Lossless Compression Works</h3>
              <p>
                Lossless compression reduces file size without losing any original image data. It works by identifying
                and eliminating statistical redundancy in the image data. When you decompress a losslessly compressed
                image, you get back exactly the same data as the original.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Lossless Compression Techniques</h3>
              <ul>
                <li>
                  <strong>Run-Length Encoding (RLE):</strong> Replaces sequences of identical pixels with a count and
                  value
                </li>
                <li>
                  <strong>Huffman Coding:</strong> Assigns shorter codes to more frequent pixel values
                </li>
                <li>
                  <strong>LZ77/LZ78:</strong> Replaces repeated sequences with references to previous occurrences
                </li>
                <li>
                  <strong>Deflate:</strong> Combines LZ77 and Huffman coding (used in PNG)
                </li>
              </ul>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                  ✅ Lossless Compression Advantages
                </h4>
                <ul className="text-green-800 dark:text-green-200 space-y-1">
                  <li>• Perfect quality preservation</li>
                  <li>• Reversible compression</li>
                  <li>• Ideal for graphics and text</li>
                  <li>• No generation loss</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Lossless Compression Limitations
                </h4>
                <ul className="text-red-800 dark:text-red-200 space-y-1">
                  <li>• Larger file sizes</li>
                  <li>• Limited compression ratios</li>
                  <li>• Not ideal for photographs</li>
                  <li>• Higher bandwidth requirements</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Lossy Compression Explained</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">How Lossy Compression Works</h3>
              <p>
                Lossy compression achieves much smaller file sizes by permanently removing some image data that is
                considered less important or less noticeable to the human eye. This process is irreversible - once the
                data is removed, it cannot be recovered.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Lossy Compression Techniques</h3>
              <ul>
                <li>
                  <strong>Discrete Cosine Transform (DCT):</strong> Used in JPEG, converts spatial data to frequency
                  domain
                </li>
                <li>
                  <strong>Quantization:</strong> Reduces precision of less important frequency components
                </li>
                <li>
                  <strong>Chroma Subsampling:</strong> Reduces color information resolution
                </li>
                <li>
                  <strong>Perceptual Coding:</strong> Removes data less noticeable to human vision
                </li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  ✅ Lossy Compression Advantages
                </h4>
                <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Much smaller file sizes</li>
                  <li>• Excellent for photographs</li>
                  <li>• Faster loading times</li>
                  <li>• Reduced storage costs</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  ❌ Lossy Compression Limitations
                </h4>
                <ul className="text-red-800 dark:text-red-200 space-y-1">
                  <li>• Quality loss</li>
                  <li>• Irreversible process</li>
                  <li>• Generation loss with re-compression</li>
                  <li>• Artifacts in graphics and text</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Compression Comparison by Format</h2>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 font-semibold">Format</th>
                        <th className="text-left py-3 font-semibold">Compression Type</th>
                        <th className="text-left py-3 font-semibold">Best Use Case</th>
                        <th className="text-left py-3 font-semibold">Typical Ratio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 font-medium">JPEG</td>
                        <td className="py-3">Lossy</td>
                        <td className="py-3">Photographs</td>
                        <td className="py-3">10:1 to 20:1</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 font-medium">PNG</td>
                        <td className="py-3">Lossless</td>
                        <td className="py-3">Graphics, screenshots</td>
                        <td className="py-3">2:1 to 5:1</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 font-medium">WebP Lossy</td>
                        <td className="py-3">Lossy</td>
                        <td className="py-3">Web photographs</td>
                        <td className="py-3">15:1 to 25:1</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 font-medium">WebP Lossless</td>
                        <td className="py-3">Lossless</td>
                        <td className="py-3">Web graphics</td>
                        <td className="py-3">3:1 to 7:1</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">GIF</td>
                        <td className="py-3">Lossless</td>
                        <td className="py-3">Simple animations</td>
                        <td className="py-3">2:1 to 4:1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">When to Use Each Compression Type</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Choose Lossless When:</h3>
              <ul>
                <li>
                  <strong>Quality is paramount:</strong> Medical images, legal documents, archival purposes
                </li>
                <li>
                  <strong>Working with graphics:</strong> Logos, icons, illustrations with sharp edges
                </li>
                <li>
                  <strong>Screenshots:</strong> Software documentation, tutorials
                </li>
                <li>
                  <strong>Intermediate processing:</strong> Images that will be edited further
                </li>
                <li>
                  <strong>Text-heavy images:</strong> Diagrams, charts, infographics
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Choose Lossy When:</h3>
              <ul>
                <li>
                  <strong>File size matters:</strong> Web images, email attachments
                </li>
                <li>
                  <strong>Photographs:</strong> Natural images with smooth color transitions
                </li>
                <li>
                  <strong>Storage limitations:</strong> Mobile devices, cloud storage
                </li>
                <li>
                  <strong>Bandwidth constraints:</strong> Slow internet connections
                </li>
                <li>
                  <strong>Final distribution:</strong> Images that won't be edited further
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Quality vs File Size Trade-offs</h2>

              <p>
                The key to effective image compression is finding the right balance between quality and file size for
                your specific use case. Here are some guidelines:
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold mb-4">Quality Settings Guide</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Web Images (JPEG)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• High quality: 85-95</li>
                      <li>• Medium quality: 75-85</li>
                      <li>• Low quality: 60-75</li>
                      <li>• Thumbnail: 50-60</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">WebP Settings</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Photos: 80-85 (lossy)</li>
                      <li>• Graphics: Lossless</li>
                      <li>• Mixed content: 85-90</li>
                      <li>• Thumbnails: 70-80</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Best Practices for Image Compression</h2>

              <ol>
                <li>
                  <strong>Start with high-quality sources:</strong> Always begin with the highest quality original
                </li>
                <li>
                  <strong>Choose the right format:</strong> Match the compression type to your content
                </li>
                <li>
                  <strong>Test different settings:</strong> Find the optimal quality/size balance
                </li>
                <li>
                  <strong>Avoid re-compression:</strong> Don't repeatedly compress lossy formats
                </li>
                <li>
                  <strong>Consider your audience:</strong> Factor in their devices and connection speeds
                </li>
                <li>
                  <strong>Use modern formats:</strong> WebP and AVIF offer better compression than legacy formats
                </li>
              </ol>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
              <p>
                Understanding the difference between lossless and lossy compression is essential for making informed
                decisions about image optimization. Lossless compression preserves perfect quality but results in larger
                files, while lossy compression achieves much smaller files at the cost of some quality loss.
              </p>

              <p>
                The key is choosing the right compression type for your specific needs. Use lossless for graphics,
                logos, and situations where quality is paramount. Use lossy for photographs and web images where file
                size and loading speed are more important than perfect quality.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Try Different Compression Settings</h3>
              <p className="text-lg opacity-90 mb-6">
                Experiment with lossless and lossy compression to find the perfect balance for your images.
              </p>
              <Button asChild className="bg-white text-orange-600 hover:bg-gray-100">
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
