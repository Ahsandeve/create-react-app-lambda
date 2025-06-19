import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://advanced-image-converter.vercel.app"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]

  // Blog posts
  const blogPosts = [
    "complete-guide-webp-format-future-web-images",
    "jpeg-png-webp-format-comparison-2024",
    "image-compression-lossless-vs-lossy-explained",
    "batch-image-processing-pro-tips",
    "mobile-photography-raw-to-web-ready",
    "advanced-png-optimization-reduce-file-size",
    "building-responsive-images-best-practices",
    "avif-format-next-generation-image-compression",
    "image-seo-optimization-complete-guide",
    "convert-heic-to-jpg-complete-guide",
    "gif-to-webp-animation-conversion-guide",
    "image-metadata-privacy-security-guide",
    "progressive-jpeg-vs-baseline-performance",
    "svg-optimization-web-performance-guide",
    "image-lazy-loading-best-practices",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Blog categories
  const categories = ["guides", "tutorials", "technology", "photography", "technical", "development"].map(
    (category) => ({
      url: `${baseUrl}/blog/category/${category}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }),
  )

  return [...staticPages, ...blogPosts, ...categories]
}
