import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight, Tag, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Image Conversion Blog - Tips, Tutorials & Best Practices | Advanced Image Converter",
  description:
    "Expert insights on image conversion, optimization techniques, format comparisons, and photography tips. Learn how to get the best results from your image processing.",
  keywords:
    "image conversion blog, photo optimization, image formats, compression techniques, photography tips, WebP vs JPG, PNG optimization",
  openGraph: {
    title: "Image Conversion Blog - Expert Tips & Tutorials",
    description: "Learn professional image conversion techniques and optimization strategies",
    type: "website",
  },
}

// Mock blog data - in a real app, this would come from a CMS or database
const featuredPost = {
  id: 1,
  title: "The Complete Guide to WebP Format: Why It's the Future of Web Images",
  excerpt:
    "Discover why WebP is becoming the preferred image format for modern websites and how to optimize your images for maximum performance and quality.",
  content: "WebP is a modern image format that provides superior lossless and lossy compression for web images...",
  author: "Sarah Johnson",
  publishDate: "2024-01-15",
  readTime: "8 min read",
  category: "technology",
  tags: ["webp", "optimization", "web-performance"],
  image: "/placeholder.svg?height=400&width=800",
  slug: "complete-guide-webp-format-future-web-images",
}

const recentPosts = [
  {
    id: 2,
    title: "JPEG vs PNG vs WebP: Comprehensive Format Comparison 2024",
    excerpt:
      "An in-depth analysis of the three most popular web image formats, helping you choose the right format for every use case.",
    author: "Mike Chen",
    publishDate: "2024-01-12",
    readTime: "12 min read",
    category: "guides",
    tags: ["comparison", "jpeg", "png", "webp"],
    image: "/placeholder.svg?height=300&width=600",
    slug: "jpeg-png-webp-format-comparison-2024",
  },
  {
    id: 3,
    title: "Image Compression Techniques: Lossless vs Lossy Explained",
    excerpt:
      "Understanding the difference between lossless and lossy compression and when to use each method for optimal results.",
    author: "Emily Rodriguez",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    category: "technical",
    tags: ["compression", "image-quality", "optimization"],
    image: "/placeholder.svg?height=300&width=600",
    slug: "image-compression-lossless-vs-lossy-explained",
  },
  {
    id: 4,
    title: "Batch Image Processing: Save Hours with These Pro Tips",
    excerpt:
      "Learn professional workflows for processing hundreds of images efficiently while maintaining consistent quality.",
    author: "David Park",
    publishDate: "2024-01-08",
    readTime: "10 min read",
    category: "tutorials",
    tags: ["batch-processing", "workflow", "productivity"],
    image: "/placeholder.svg?height=300&width=600",
    slug: "batch-image-processing-pro-tips",
  },
  {
    id: 5,
    title: "Mobile Photography: Converting RAW to Web-Ready Images",
    excerpt: "A complete guide to processing RAW mobile photos and optimizing them for web use without losing quality.",
    author: "Lisa Wang",
    publishDate: "2024-01-05",
    readTime: "9 min read",
    category: "photography",
    tags: ["mobile", "raw", "photography"],
    image: "/placeholder.svg?height=300&width=600",
    slug: "mobile-photography-raw-to-web-ready",
  },
  {
    id: 6,
    title: "Advanced PNG Optimization: Reduce File Size by 70%",
    excerpt: "Professional techniques to dramatically reduce PNG file sizes while maintaining perfect image quality.",
    author: "Alex Thompson",
    publishDate: "2024-01-03",
    readTime: "7 min read",
    category: "guides",
    tags: ["png", "optimization", "file-size"],
    image: "/placeholder.svg?height=300&width=600",
    slug: "advanced-png-optimization-reduce-file-size",
  },
  {
    id: 7,
    title: "Building Responsive Images: Modern Best Practices",
    excerpt: "Learn how to implement responsive images that look perfect on every device and screen size.",
    author: "Rachel Kim",
    publishDate: "2024-01-01",
    readTime: "11 min read",
    category: "development",
    tags: ["responsive", "web-development", "css"],
    image: "/placeholder.svg?height=300&width=600",
    slug: "building-responsive-images-best-practices",
  },
]

const categories = [
  { name: "All Posts", slug: "all", count: recentPosts.length + 1 },
  { name: "Guides", slug: "guides", count: 3 },
  { name: "Tutorials", slug: "tutorials", count: 2 },
  { name: "Technology", slug: "technology", count: 1 },
  { name: "Photography", slug: "photography", count: 1 },
  { name: "Technical", slug: "technical", count: 2 },
  { name: "Development", slug: "development", count: 1 },
]

function getCategoryColor(category: string) {
  const colors: { [key: string]: string } = {
    guides: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    tutorials: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    technology: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    photography: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
    technical: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
    development: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
  }
  return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Image Conversion Insights</h1>
            <p className="text-xl opacity-90 mb-8">
              Expert tips, tutorials, and best practices for professional image processing and optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.slice(1).map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm transition-colors"
                >
                  {category.name} ({category.count})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredPost.category)}`}
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{featuredPost.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Link
                        href={`/blog/category/${post.category}`}
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)} hover:opacity-80 transition-opacity`}
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </Link>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get the latest tips and tutorials delivered straight to your inbox. Join thousands of creators improving
            their image processing skills.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="px-8 bg-white text-primary hover:bg-gray-100">Subscribe</Button>
          </div>
          <p className="text-sm opacity-75 mt-4">No spam, unsubscribe anytime. We respect your privacy.</p>
        </div>
      </section>
    </div>
  )
}
