"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, CheckCircle } from "lucide-react"

const faqs = [
  {
    question: "What is the main advantage of WebP over JPEG?",
    answer:
      "WebP provides 25-35% better compression than JPEG while maintaining the same visual quality. This means significantly smaller file sizes, leading to faster website loading times and reduced bandwidth usage.",
  },
  {
    question: "Is WebP supported by all browsers?",
    answer:
      "WebP is now supported by over 97% of browsers including Chrome, Firefox, Safari, and Edge. For older browsers, you can use fallback images or progressive enhancement techniques.",
  },
  {
    question: "Can WebP handle transparency like PNG?",
    answer:
      "Yes! WebP supports both lossy and lossless compression, as well as transparency (alpha channel). This makes it an excellent replacement for both JPEG and PNG in most use cases.",
  },
  {
    question: "How do I convert my existing images to WebP?",
    answer:
      "You can use our Advanced Image Converter tool to easily convert JPEG, PNG, and other formats to WebP. Simply upload your images, select WebP as the output format, and download the converted files.",
  },
  {
    question: "Does WebP affect SEO rankings?",
    answer:
      "WebP can positively impact SEO by improving page load speeds, which is a ranking factor. Faster-loading pages provide better user experience and may rank higher in search results.",
  },
  {
    question: "What's the difference between WebP lossy and lossless?",
    answer:
      "WebP lossy is ideal for photographs and complex images, offering smaller file sizes. WebP lossless is perfect for graphics, logos, and images where you need pixel-perfect quality.",
  },
]

export default function WebPGuideClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/blog" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span>January 15, 2024</span>
            <span>•</span>
            <Clock className="h-4 w-4" />
            <span>8 min read</span>
            <span>•</span>
            <BookOpen className="h-4 w-4" />
            <span>Web Optimization</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Complete Guide to WebP: Why It's the Future of Web Images
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Discover why WebP is revolutionizing web performance with up to 35% smaller file sizes while maintaining
            superior quality. Learn everything you need to know about this game-changing format.
          </p>

          <div className="flex items-center gap-4">
            <Button size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share Article
            </Button>
          </div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-6 bg-primary/5 border-primary/20">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-lg">Table of Contents</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#what-is-webp" className="text-primary hover:underline">
                    1. What is WebP?
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-primary hover:underline">
                    2. Key Benefits of WebP
                  </a>
                </li>
                <li>
                  <a href="#comparison" className="text-primary hover:underline">
                    3. WebP vs Other Formats
                  </a>
                </li>
                <li>
                  <a href="#browser-support" className="text-primary hover:underline">
                    4. Browser Support
                  </a>
                </li>
                <li>
                  <a href="#implementation" className="text-primary hover:underline">
                    5. How to Implement WebP
                  </a>
                </li>
                <li>
                  <a href="#conversion" className="text-primary hover:underline">
                    6. Converting to WebP
                  </a>
                </li>
                <li>
                  <a href="#best-practices" className="text-primary hover:underline">
                    7. Best Practices
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <section id="what-is-webp" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What is WebP?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              WebP is a modern image format developed by Google that provides superior compression for images on the
              web. It supports both lossy and lossless compression, as well as transparency and animation, making it a
              versatile replacement for JPEG, PNG, and GIF.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
              <p className="text-blue-800 dark:text-blue-200 mb-2 font-semibold">💡 Quick Fact</p>
              <p className="text-blue-700 dark:text-blue-300">
                WebP was first announced by Google in 2010 and has since become the go-to format for web optimization,
                being adopted by major platforms like YouTube, Netflix, and Facebook.
              </p>
            </div>
          </section>

          <section id="benefits" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Benefits of WebP</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Smaller File Sizes
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">
                    WebP provides 25-35% better compression than JPEG and up to 50% better than PNG, significantly
                    reducing bandwidth usage and improving load times.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Superior Quality
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">
                    Advanced compression algorithms preserve image quality better than traditional formats, especially
                    at lower file sizes.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Transparency Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">
                    WebP supports alpha transparency with better compression than PNG, making it ideal for logos and
                    graphics.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Animation Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">
                    WebP can handle animations more efficiently than GIF, with better quality and smaller file sizes for
                    animated content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="conversion" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Converting to WebP</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Converting your images to WebP is straightforward with the right tools. Our Advanced Image Converter makes
              this process seamless with batch processing capabilities and quality controls.
            </p>

            <Card className="p-6 bg-gradient-to-r from-primary/5 to-purple-600/5 border-primary/20 mb-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle>Try Our WebP Converter</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-4">
                  Convert your JPEG, PNG, and other image formats to WebP instantly with our free online tool.
                </p>
                <Link href="/#converter">
                  <Button>Start Converting Now</Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-purple-600/10 border-primary/20">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl">Ready to Optimize Your Images?</CardTitle>
              <CardDescription className="text-lg">
                Start converting your images to WebP today and experience the performance benefits
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#converter">
                  <Button size="lg">Convert to WebP Now</Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" size="lg">
                    Read More Articles
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
