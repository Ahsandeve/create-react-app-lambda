"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to WebP: Why It's the Future of Web Images",
    slug: "webp-complete-guide-future-web-images",
    excerpt:
      "Discover why WebP is revolutionizing web performance with up to 35% smaller file sizes while maintaining superior quality.",
    category: "Web Optimization",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    tags: ["WebP", "Performance", "Web Development"],
    featured: true,
  },
  {
    id: 2,
    title: "JPEG vs PNG vs WebP: Ultimate Format Comparison 2024",
    slug: "jpeg-png-webp-format-comparison-2024",
    excerpt:
      "Make informed decisions about image formats with our comprehensive comparison covering quality, file size, and browser support.",
    category: "Formats",
    readTime: "12 min read",
    publishDate: "2024-01-12",
    tags: ["JPEG", "PNG", "WebP", "Comparison"],
    featured: true,
  },
  {
    id: 3,
    title: "Image Compression Techniques: Lossy vs Lossless Explained",
    slug: "image-compression-lossy-lossless-explained",
    excerpt:
      "Master image compression with detailed explanations of lossy and lossless techniques, plus when to use each method.",
    category: "Technical",
    readTime: "10 min read",
    publishDate: "2024-01-10",
    tags: ["Compression", "Quality", "Technical"],
    featured: false,
  },
  {
    id: 4,
    title: "Converting Images for Social Media: Platform-Specific Guide",
    slug: "converting-images-social-media-platform-guide",
    excerpt:
      "Optimize your images for Facebook, Instagram, Twitter, and LinkedIn with platform-specific dimensions and formats.",
    category: "Social Media",
    readTime: "6 min read",
    publishDate: "2024-01-08",
    tags: ["Social Media", "Optimization", "Dimensions"],
    featured: false,
  },
  {
    id: 5,
    title: "AVIF Format: The Next Generation Image Format Explained",
    slug: "avif-format-next-generation-image-format",
    excerpt:
      "Explore AVIF, the cutting-edge image format offering superior compression and quality compared to JPEG and WebP.",
    category: "Formats",
    readTime: "9 min read",
    publishDate: "2024-01-05",
    tags: ["AVIF", "Modern Formats", "Performance"],
    featured: false,
  },
  {
    id: 6,
    title: "Batch Image Processing: Converting Multiple Images Efficiently",
    slug: "batch-image-processing-multiple-images-efficiently",
    excerpt:
      "Learn efficient techniques for processing multiple images simultaneously, saving time and maintaining consistency.",
    category: "Productivity",
    readTime: "7 min read",
    publishDate: "2024-01-03",
    tags: ["Batch Processing", "Efficiency", "Workflow"],
    featured: false,
  },
]

const categories = ["All Posts", "Web Optimization", "Formats", "Technical", "Social Media", "Productivity"]

export default function BlogClientPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Image Conversion Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert guides, tutorials, and best practices for image conversion, optimization, and web performance
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All Posts" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center">
                  <div className="text-6xl opacity-20">📸</div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Tag className="h-4 w-4" />
                    <span>{post.category}</span>
                    <span>•</span>
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-purple-600/5 flex items-center justify-center">
                  <div className="text-4xl opacity-20">🖼️</div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-purple-600/5 border-none">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get the latest image optimization tips, format updates, and tutorials delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
