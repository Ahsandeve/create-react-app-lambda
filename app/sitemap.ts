import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-domain.com" // Replace with your actual domain

  // Static pages
  const staticPages = ["", "/about", "/blog", "/privacy", "/terms", "/contact"]

  // Blog posts
  const blogPosts = [
    "webp-complete-guide-future-web-images",
    "jpeg-png-webp-format-comparison-2024",
    "image-compression-lossy-lossless-explained",
    "converting-images-social-media-platform-guide",
    "avif-format-next-generation-image-format",
    "batch-image-processing-multiple-images-efficiently",
    // Add more blog post slugs here
  ]

  // Blog category pages
  const blogCategories = ["guides", "tutorials", "technology", "photography", "technical", "development"]

  return [
    // Static pages
    ...staticPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
      priority: route === "" ? 1 : 0.8,
    })),

    // Blog posts
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Blog category pages
    ...blogCategories.map((category) => ({
      url: `${baseUrl}/blog/category/${category}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ]
}
