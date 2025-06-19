import type { Metadata } from "next"
import WebPGuideClientPage from "./WebPGuideClientPage"

export const metadata: Metadata = {
  title: "Complete Guide to WebP: Why It's the Future of Web Images | Advanced Image Converter",
  description:
    "Master WebP format with our comprehensive guide. Learn about superior compression, quality benefits, browser support, and conversion techniques.",
  keywords: "WebP guide, WebP format, image optimization, web performance, WebP conversion, WebP vs JPEG, WebP vs PNG",
  openGraph: {
    title: "Complete Guide to WebP: The Future of Web Images",
    description: "Everything you need to know about WebP format and why it's revolutionizing web performance",
    type: "article",
  },
}

export default function WebPGuidePage() {
  return <WebPGuideClientPage />
}
