import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Advanced Image Converter | Image Processing Tips & Guides",
  description:
    "Learn about image conversion, optimization techniques, format comparisons, and best practices for web developers and designers.",
  keywords: "image conversion blog, image optimization, web development, image formats, compression techniques",
  openGraph: {
    title: "Image Conversion Blog - Tips, Guides & Best Practices",
    description: "Expert insights on image processing, format optimization, and web performance.",
    type: "website",
  },
}

export default function BlogPage() {
  const featuredPost = {
    title: "Complete Guide to Image Formats in 2024: WebP vs AVIF vs JPEG",
    excerpt:
      "Discover which image format is best for your website. Compare file sizes, quality, and browser support for modern image formats.",
    slug: "webp-vs-avif-vs-jpeg-complete-guide-2024",
    category: "Technology",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    featured: true,
  }

  const recentPosts = [
    {
      title: "How to Optimize Images for Web Performance in 2024",
      excerpt:
        "Learn the latest techniques for optimizing images to improve your website's loading speed and user experience.",
      slug: "optimize-images-web-performance-2024",
      category: "Tutorials",
      readTime: "6 min read",
      date: "Dec 12, 2024",
    },
    {
      title: "AVIF vs WebP: The Ultimate Comparison for Web Developers",
      excerpt: "Compare AVIF and WebP formats in detail. Which one should you choose for your next project?",
      slug: "avif-vs-webp-ultimate-comparison",
      category: "Technology",
      readTime: "7 min read",
      date: "Dec 10, 2024",
    },
    {
      title: "Batch Image Processing: Save Hours with These Techniques",
      excerpt: "Discover how to process hundreds of images efficiently using batch conversion tools and automation.",
      slug: "batch-image-processing-techniques",
      category: "Productivity",
      readTime: "5 min read",
      date: "Dec 8, 2024",
    },
    {
      title: "Image Compression Without Quality Loss: Advanced Techniques",
      excerpt:
        "Master lossless and near-lossless compression techniques to reduce file sizes while maintaining image quality.",
      slug: "image-compression-without-quality-loss",
      category: "Technical",
      readTime: "9 min read",
      date: "Dec 5, 2024",
    },
    {
      title: "Photography Workflow: From RAW to Web-Ready Images",
      excerpt: "Complete workflow for photographers to convert and optimize images for web publishing.",
      slug: "photography-workflow-raw-to-web",
      category: "Photography",
      readTime: "10 min read",
      date: "Dec 3, 2024",
    },
    {
      title: "Mobile Image Optimization: Best Practices for App Developers",
      excerpt:
        "Essential techniques for optimizing images in mobile applications for better performance and user experience.",
      slug: "mobile-image-optimization-best-practices",
      category: "Development",
      readTime: "8 min read",
      date: "Dec 1, 2024",
    },
  ]

  const categories = [
    { name: "All Posts", count: 15, path: "/blog" },
    { name: "Tutorials", count: 4, path: "/blog/category/tutorials" },
    { name: "Technology", count: 3, path: "/blog/category/technology" },
    { name: "Photography", count: 3, path: "/blog/category/photography" },
    { name: "Development", count: 2, path: "/blog/category/development" },
    { name: "Technical", count: 2, path: "/blog/category/technical" },
    { name: "Guides", count: 1, path: "/blog/category/guides" },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Image Conversion Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert insights, tutorials, and best practices for image conversion, optimization, and web performance. Stay
            updated with the latest in image processing technology.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Link key={category.name} href={category.path}>
              <Badge
                variant="outline"
                className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.name} ({category.count})
              </Badge>
            </Link>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2024</div>
                  <div className="text-sm text-muted-foreground">Complete Guide</div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge>{featuredPost.category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                >
                  Read Full Article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">{post.excerpt}</CardDescription>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest articles about image optimization, web performance, and conversion techniques delivered to
            your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
