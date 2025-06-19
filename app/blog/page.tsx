import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight, TrendingUp, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Image Conversion Blog - Tips, Tutorials & Best Practices | Advanced Image Converter",
  description:
    "Expert guides on image conversion, optimization, and best practices. Learn how to convert JPG to PNG, optimize WebP, and master image formats.",
  keywords:
    "image conversion blog, image optimization, JPG to PNG, WebP conversion, image formats, photography tips, web optimization",
  openGraph: {
    title: "Image Conversion Blog - Expert Tips & Tutorials",
    description:
      "Master image conversion with our comprehensive guides and tutorials. Learn optimization techniques and best practices.",
    type: "website",
  },
}

// Sample blog posts data
const featuredPost = {
  slug: "ultimate-guide-image-formats-2024",
  title: "The Ultimate Guide to Image Formats in 2024",
  excerpt:
    "Discover which image format to use for your specific needs. Compare JPG, PNG, WebP, AVIF, and more formats with real-world examples.",
  category: "guides",
  author: "Sarah Johnson",
  date: "2024-01-15",
  readTime: "12 min read",
  image: "/placeholder.svg?height=400&width=600",
  featured: true,
  tags: ["formats", "optimization", "webp", "avif"],
}

const recentPosts = [
  {
    slug: "jpg-to-png-conversion-guide",
    title: "JPG to PNG Conversion: When and How to Convert",
    excerpt:
      "Learn when to convert JPG to PNG and how to do it while maintaining quality. Complete guide with examples and best practices.",
    category: "tutorials",
    author: "Mike Chen",
    date: "2024-01-12",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["jpg", "png", "conversion"],
  },
  {
    slug: "webp-optimization-techniques",
    title: "WebP Optimization Techniques for Faster Websites",
    excerpt:
      "Master WebP optimization to reduce file sizes by up to 30% without quality loss. Essential for modern web development.",
    category: "technical",
    author: "Lisa Rodriguez",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["webp", "optimization", "performance"],
  },
  {
    slug: "batch-image-processing-tips",
    title: "Batch Image Processing: Save Hours of Manual Work",
    excerpt:
      "Efficient techniques for processing multiple images at once. Boost your productivity with these professional tips.",
    category: "productivity",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["batch", "productivity", "workflow"],
  },
  {
    slug: "avif-vs-webp-comparison",
    title: "AVIF vs WebP: Which Next-Gen Format Should You Use?",
    excerpt: "Detailed comparison of AVIF and WebP formats. Learn the pros, cons, and browser support for each format.",
    category: "technology",
    author: "Emma Wilson",
    date: "2024-01-05",
    readTime: "9 min read",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["avif", "webp", "comparison"],
  },
  {
    slug: "image-compression-photography",
    title: "Image Compression for Photographers: Quality vs Size",
    excerpt:
      "Professional photographer's guide to image compression. Balance quality and file size for different use cases.",
    category: "photography",
    author: "Alex Turner",
    date: "2024-01-03",
    readTime: "11 min read",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["photography", "compression", "quality"],
  },
  {
    slug: "png-transparency-guide",
    title: "PNG Transparency: Complete Guide for Designers",
    excerpt:
      "Everything you need to know about PNG transparency. From basic concepts to advanced techniques for designers.",
    category: "design",
    author: "Rachel Green",
    date: "2024-01-01",
    readTime: "7 min read",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["png", "transparency", "design"],
  },
]

const popularTags = [
  "Image Conversion",
  "WebP",
  "JPG to PNG",
  "Optimization",
  "Photography",
  "Web Development",
  "Image Formats",
  "Compression",
  "AVIF",
  "Performance",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Image Conversion Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Expert guides, tutorials, and best practices for image conversion and optimization
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularTags.slice(0, 5).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-5 w-5 text-yellow-500" />
            <h2 className="text-2xl font-bold">Featured Article</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="default">{featuredPost.category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 line-clamp-2">{featuredPost.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{featuredPost.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button>
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <h2 className="text-2xl font-bold">Latest Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">{post.excerpt}</CardDescription>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Tags */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Popular Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
              <div className="grid gap-4">
                {[
                  { name: "Guides", count: 8, color: "bg-blue-100 text-blue-800" },
                  { name: "Tutorials", count: 12, color: "bg-green-100 text-green-800" },
                  { name: "Technology", count: 6, color: "bg-purple-100 text-purple-800" },
                  { name: "Photography", count: 9, color: "bg-orange-100 text-orange-800" },
                  { name: "Technical", count: 7, color: "bg-red-100 text-red-800" },
                  { name: "Development", count: 5, color: "bg-indigo-100 text-indigo-800" },
                ].map((category, index) => (
                  <Link key={index} href={`/blog/category/${category.name.toLowerCase()}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="flex items-center justify-between p-4">
                        <span className="font-medium">{category.name}</span>
                        <Badge className={category.color}>{category.count} articles</Badge>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                  <CardDescription>Get the latest articles and tips delivered to your inbox</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm"
                    />
                    <Button>Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
