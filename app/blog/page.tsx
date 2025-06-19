import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Blog - Advanced Image Converter | Image Processing Tips & Guides",
  description:
    "Learn about image conversion, optimization techniques, format comparisons, and professional image processing tips. Stay updated with the latest in image technology.",
  keywords:
    "image conversion blog, image optimization tips, image format guides, photo editing tutorials, image processing techniques",
  openGraph: {
    title: "Advanced Image Converter Blog",
    description: "Expert tips and guides for image conversion and optimization",
    type: "website",
  },
}

// Blog posts data with high-SEO content
const featuredPost = {
  id: "complete-guide-image-formats-2024",
  title: "Complete Guide to Image Formats in 2024: JPG vs PNG vs WebP vs AVIF",
  excerpt:
    "Discover which image format is best for your needs. Compare file sizes, quality, browser support, and use cases for all major image formats in our comprehensive 2024 guide.",
  content:
    "Learn everything about modern image formats including the revolutionary AVIF format that's changing web performance...",
  author: "Image Tech Team",
  publishedAt: "2024-12-15",
  readTime: "12 min read",
  views: "2.5K",
  category: "Technology",
  tags: ["Image Formats", "Web Performance", "Optimization"],
  featured: true,
  image: "/placeholder.svg?height=400&width=800",
}

const latestPosts = [
  {
    id: "batch-image-processing-guide",
    title: "Master Batch Image Processing: Convert 100+ Images in Minutes",
    excerpt:
      "Learn professional techniques for batch processing images efficiently. Save hours with these expert tips for bulk image conversion and optimization.",
    author: "Pro User Guide",
    publishedAt: "2024-12-14",
    readTime: "8 min read",
    views: "1.8K",
    category: "Tutorials",
    tags: ["Batch Processing", "Productivity", "Workflow"],
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "webp-vs-avif-2024-comparison",
    title: "WebP vs AVIF in 2024: The Ultimate Performance Comparison",
    excerpt:
      "Detailed analysis of WebP and AVIF formats. Real-world testing results, browser support data, and recommendations for modern web development.",
    author: "Tech Analysis Team",
    publishedAt: "2024-12-13",
    readTime: "10 min read",
    views: "3.2K",
    category: "Technology",
    tags: ["WebP", "AVIF", "Performance"],
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "image-compression-best-practices",
    title: "Image Compression Best Practices: Maintain Quality While Reducing Size",
    excerpt:
      "Expert strategies for optimal image compression. Learn how to reduce file sizes by 70% without losing visual quality using advanced techniques.",
    author: "Optimization Expert",
    publishedAt: "2024-12-12",
    readTime: "9 min read",
    views: "2.1K",
    category: "Guides",
    tags: ["Compression", "Quality", "Optimization"],
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "mobile-image-optimization-guide",
    title: "Mobile Image Optimization: Speed Up Your Website by 60%",
    excerpt:
      "Complete guide to optimizing images for mobile devices. Reduce load times, improve user experience, and boost your mobile SEO rankings.",
    author: "Mobile UX Team",
    publishedAt: "2024-12-11",
    readTime: "11 min read",
    views: "4.1K",
    category: "Guides",
    tags: ["Mobile", "Speed", "SEO"],
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "photography-format-selection-guide",
    title: "Photographer's Guide to Choosing the Right Image Format",
    excerpt:
      "Professional photographer's perspective on image formats. When to use RAW, JPEG, TIFF, and emerging formats for different photography needs.",
    author: "Pro Photography",
    publishedAt: "2024-12-10",
    readTime: "7 min read",
    views: "1.5K",
    category: "Photography",
    tags: ["Photography", "Professional", "Workflow"],
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: "web-developer-image-guide",
    title: "Web Developer's Complete Image Optimization Checklist",
    excerpt:
      "Essential image optimization checklist for web developers. Improve Core Web Vitals, reduce bandwidth costs, and enhance user experience.",
    author: "Dev Team",
    publishedAt: "2024-12-09",
    readTime: "13 min read",
    views: "2.8K",
    category: "Development",
    tags: ["Web Development", "Performance", "SEO"],
    image: "/placeholder.svg?height=300&width=600",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Image Conversion Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert insights, tutorials, and guides for mastering image conversion, optimization, and processing
            techniques.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Featured Article</h2>
          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-2/3">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">Featured</Badge>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{featuredPost.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500 gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {featuredPost.views}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 line-clamp-2">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Latest Articles */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center text-sm text-gray-500 gap-3 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {post.views}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800 dark:text-white line-clamp-2 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-4">Stay Updated</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Get the latest image conversion tips, tutorials, and industry insights delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-md mx-auto flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-100 mt-3">No spam, unsubscribe anytime. We respect your privacy.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
