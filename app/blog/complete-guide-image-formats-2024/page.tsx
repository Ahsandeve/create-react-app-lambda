import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Guide to Image Formats 2024: JPG vs PNG vs WebP vs AVIF | Best Format Comparison",
  description:
    "Ultimate guide comparing JPG, PNG, WebP, AVIF, GIF, BMP, TIFF formats. Learn file sizes, quality, browser support, and when to use each format for web and print.",
  keywords:
    "image formats 2024, JPG vs PNG vs WebP, AVIF format guide, best image format web, image compression comparison, WebP vs AVIF, PNG transparency, image format browser support",
  openGraph: {
    title: "Complete Guide to Image Formats 2024: JPG vs PNG vs WebP vs AVIF",
    description:
      "Master image formats with our comprehensive 2024 guide. Compare file sizes, quality, and browser support for all major formats.",
    type: "article",
    url: "https://image-converter.unaux.com/blog/complete-guide-image-formats-2024/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide to Image Formats 2024",
    description: "Everything you need to know about choosing the right image format for your needs.",
  },
  alternates: {
    canonical: "https://image-converter.unaux.com/blog/complete-guide-image-formats-2024/",
  },
}

export default function ImageFormatsGuidePage() {
  const formatComparison = [
    {
      format: "JPG/JPEG",
      bestFor: "Photographs, complex images",
      fileSize: "Small",
      quality: "Good (lossy)",
      transparency: false,
      animation: false,
      browserSupport: "100%",
      pros: ["Excellent compression", "Universal support", "Small file sizes"],
      cons: ["Lossy compression", "No transparency", "Quality degrades with editing"]
    },
    {
      format: "PNG",
      bestFor: "Graphics, logos, screenshots",
      fileSize: "Large",
      quality: "Excellent (lossless)",
      transparency: true,
      animation: false,
      browserSupport: "100%",
      pros: ["Lossless compression", "Transparency support", "No quality loss"],
      cons: ["Large file sizes", "Not ideal for photos", "No animation support"]
    },
    {
      format: "WebP",
      bestFor: "Web images, modern browsers",
      fileSize: "Very Small",
      quality: "Excellent",
      transparency: true,
      animation: true,
      browserSupport: "96%",
      pros: ["Superior compression", "Transparency & animation", "Smaller than JPG/PNG"],
      cons: ["Limited older browser support", "Newer format", "Some tools don't support"]
    },
    {
      format: "AVIF",
      bestFor: "Next-gen web images",
      fileSize: "Smallest",
      quality: "Superior",
      transparency: true,
      animation: true,
      browserSupport: "89%",
      pros: ["Best compression ratio", "Excellent quality", "Future-proof"],
      cons: ["Limited browser support", "Newer format", "Encoding complexity"]
    }
  ]

  const faqs = [
    {
      question: "Which image format should I use for my website in 2024?",
      answer: "For modern websites, use WebP as your primary format with JPG/PNG fallbacks. WebP offers 25-50% smaller file sizes than JPG/PNG while maintaining excellent quality. For cutting-edge sites, consider AVIF for even better compression, but ensure you have fallbacks for older browsers."
    },
    {
      question: "Is AVIF better than WebP?",
      answer: "AVIF generally provides better compression than WebP (20-50% smaller files) with superior quality, especially for complex images. However, WebP has better browser support (96% vs 89%). Use AVIF for new projects with WebP fallbacks, or stick with WebP for broader compatibility."
    },
    {
      question: "When should I still use JPG in 2024?",
      answer: "Use JPG for: 1) Maximum compatibility across all devices and browsers, 2) Email attachments where recipients may have older software, 3) Print materials where CMYK color space is required, 4) Legacy systems that don't support newer formats, 5) When file size is more important than quality."
    },
    {
      question: "Should I convert all my PNG images to WebP?",
      answer: "Not always. Keep PNG for: 1) Images requiring transparency in older browsers, 2) Simple graphics where PNG is already small, 3) Images that will be edited frequently (PNG is lossless), 4) Screenshots and technical diagrams. Convert to WebP for: photographs, complex graphics, and images where file size matters."
    },
    {
      question: "How much smaller are WebP files compared to JPG?",
      answer: "WebP files are typically 25-50% smaller than equivalent quality JPG files. For photographs, expect 25-35% reduction. For graphics with fewer colors, savings can reach 50-80%. The exact savings depend on image content, quality settings, and compression algorithms used."
    },
    {
      question: "What's the difference between lossy and lossless compression?",
      answer: "Lossy compression (JPG, WebP lossy) removes some image data to achieve smaller files, potentially reducing quality. Lossless compression (PNG, WebP lossless) preserves all original data while still reducing file size. Use lossy for photographs where slight quality loss is acceptable, lossless for graphics requiring perfect quality."
    },
    {
      question: "Can I use AVIF for all my images now?",
      answer: "Not yet. While AVIF offers superior compression and quality, browser support is at 89% (missing Internet Explorer, older Safari versions). Implement AVIF with proper fallbacks: serve AVIF to supporting browsers, WebP to others, and JPG/PNG as final fallback using the <picture> element or server-side detection."
    },
    {
      question: "Which format is best for mobile websites?",
      answer: "WebP is currently the best choice for mobile websites. It provides excellent compression (crucial for mobile data usage), good quality, and strong mobile browser support. AVIF is even better for compression but has slightly lower mobile support. Always implement progressive enhancement with fallbacks."
    },
    {
      question: "How do I implement multiple image formats on my website?",
      answer: "Use the HTML <picture> element: <picture><source srcset='image.avif' type='image/avif'><source srcset='image.webp' type='image/webp'><img src='image.jpg' alt='description'></picture>. This serves the best supported format to each browser automatically."
    },
    {
      question: "Are there any SEO benefits to using modern image formats?",
      answer: "Yes! Smaller file sizes from WebP/AVIF improve page load speeds, which is a Google ranking factor. Faster loading images improve user experience, reduce bounce rates, and can boost search rankings. Google specifically recommends using modern image formats for better Core Web Vitals scores."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Complete Guide • 2024 Edition
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Complete Guide to Image Formats in 2024: JPG vs PNG vs WebP vs AVIF
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Master image formats with our comprehensive guide. Learn which format to choose for web, mobile, 
              and print projects based on file size, quality, and browser support.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>Updated: January 2024</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Expert Guide</span>
            </div>
          </header>

          {/* Quick Comparison Table */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Quick Format Comparison
              </CardTitle>
              <CardDescription>
                At-a-glance comparison of major image formats for 2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Format\
