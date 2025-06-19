import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Tag, TrendingUp, Star, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Image Conversion Blog - Tips, Tutorials & Best Practices | Advanced Image Converter",
  description:
    "Learn image conversion techniques, format comparisons, optimization tips, and best practices. Expert guides for JPG, PNG, WebP, AVIF, GIF, BMP, TIFF formats.",
  keywords:
    "image conversion blog, image format tutorials, JPG vs PNG, WebP optimization, image compression tips, photo editing guides, digital image processing",
  openGraph: {
    title: "Image Conversion Blog - Expert Tips & Tutorials",
    description:
      "Master image conversion with our comprehensive guides, tutorials, and best practices for all image formats.",
    type: "website",
    url: "https://image-converter.unaux.com/blog/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Conversion Blog - Expert Tips & Tutorials",
    description: "Learn image conversion techniques and optimization strategies from our expert guides.",
  },
  alternates: {
    canonical: "https://image-converter.unaux.com/blog/",
  },
}

// Blog posts data
const featuredPost = {
  title: "Complete Guide to Image Formats in 2024: JPG vs PNG vs WebP vs AVIF",
  excerpt:
    "Discover which image format is best for your needs. Compare file sizes, quality, browser support, and use cases for all major image formats.",
  slug: "complete-guide-image-formats-2024",
  category: "guides",
  readTime: "12 min read",
  publishDate: "2024-01-15",
  featured: true,
  tags: ["formats", "comparison", "optimization"],
}

const blogPosts = [
  {
    title: "How to Convert JPG to WebP for 50% Smaller File Sizes",
    excerpt:
      "Learn how to convert JPG images to WebP format and reduce file sizes by up to 50% while maintaining excellent quality.",
    slug: "convert-jpg-to-webp-smaller-files",
    category: "tutorials",
    readTime: "8 min read",
    publishDate: "2024-01-14",
    tags: ["webp", "jpg", "optimization"],
  },
  {
    title: "PNG vs JPG: When to Use Each Format for Web Images",
    excerpt:
      "Understand the key differences between PNG and JPG formats and learn when to use each for optimal web performance.",
    slug: "png-vs-jpg-web-images",
    category: "guides",
    readTime: "6 min read",
    publishDate: "2024-01-13",
    tags: ["png", "jpg", "web"],
  },
  {
    title: "AVIF Format Explained: The Future of Image Compression",
    excerpt:
      "Explore AVIF, the next-generation image format that offers superior compression and quality compared to JPG and WebP.",
    slug: "avif-format-future-image-compression",
    category: "technology",
    readTime: "10 min read",
    publishDate: "2024-01-12",
    tags: ["avif", "compression", "future"],
  },
  {
    title: "Batch Image Conversion: Process 100+ Images Efficiently",
    excerpt:
      "Master batch image conversion techniques to process hundreds of images quickly while maintaining quality and consistency.",
    slug: "batch-image-conversion-guide",
    category: "tutorials",
    readTime: "7 min read",
    publishDate: "2024-01-11",
    tags: ["batch", "efficiency", "workflow"],
  },
  {
    title: "Image Compression Without Quality Loss: Advanced Techniques",
    excerpt:
      "Discover advanced techniques for compressing images without visible quality loss using modern algorithms and formats.",
    slug: "image-compression-without-quality-loss",
    category: "technical",
    readTime: "9 min read",
    publishDate: "2024-01-10",
    tags: ["compression", "quality", "techniques"],
  },
  {
    title: "Photography Workflow: RAW to Web-Ready Images",
    excerpt:
      "Complete workflow guide for photographers: from RAW processing to web-optimized images for portfolios and social media.",
    slug: "photography-workflow-raw-to-web",
    category: "photography",
    readTime: "15 min read",
    publishDate: "2024-01-09",
    tags: ["photography", "raw", "workflow"],
  },
]

const categories = [
  { name: "Guides", count: 8, color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" },
  { name: "Tutorials", count: 6, color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" },
  { name: "Technology", count: 4, color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400" },
  { name: "Photography", count: 3, color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400" },
  { name: "Technical", count: 5, color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" },
  { name: "Development", count: 2, color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400" },
]

const stats = [
  { icon: <Users className="h-5 w-5" />, label: "Readers", value: "50K+" },
  { icon: <Star className="h-5 w-5" />, label: "Articles", value: "28" },
  { icon: <TrendingUp className="h-5 w-5" />, label: "Monthly Views", value: "100K+" },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Image Conversion Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Master image conversion with expert guides, tutorials, and best practices. Learn optimization techniques for
            all image formats.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                {stat.icon}
                <span className="font-semibold">{stat.value}</span>
                <span className="text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Featured Post */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  Featured Article
                </h2>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">2024</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Complete Guide</div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          Featured
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{featuredPost.category}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                        <Link href={`/blog/${featuredPost.slug}/`}>{featuredPost.title}</Link>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(featuredPost.publishDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {featuredPost.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs text-gray-600 dark:text-gray-300"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Latest Articles */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Link
                            href={`/blog/category/${post.category}/`}
                            className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
                          >
                            {post.category}
                          </Link>
                        </div>
                        <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 leading-relaxed">{post.excerpt}</CardDescription>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.publishDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1 mt-3">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs text-gray-600 dark:text-gray-300"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5 text-primary" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/blog/category/${category.name.toLowerCase()}/`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <span className="font-medium">{category.name}</span>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${category.color}`}
                      >
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "webp",
                      "jpg",
                      "png",
                      "optimization",
                      "compression",
                      "avif",
                      "batch",
                      "quality",
                      "formats",
                      "photography",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardHeader>
                  <CardTitle>Stay Updated</CardTitle>
                  <CardDescription>
                    Get the latest image conversion tips and tutorials delivered to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                    />
                    <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium transition-colors">
                      Subscribe
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
