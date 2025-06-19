import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Image Conversion Blog - Tips, Tutorials & Best Practices",
  description:
    "Expert guides on image conversion, optimization tips, format comparisons, and best practices for web developers and designers.",
  keywords: "image conversion blog, image optimization, web development, image formats, tutorials",
  openGraph: {
    title: "Advanced Image Converter Blog",
    description: "Latest tutorials and tips for image conversion and optimization",
    type: "website",
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
