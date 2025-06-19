import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ultimate Guide to Image Formats 2024: JPG vs PNG vs WebP vs AVIF | Complete Comparison",
  description:
    "Master image formats in 2024. Complete guide comparing JPG, PNG, WebP, AVIF, GIF, and more. Learn which format to use for web, photography, and design projects.",
  keywords:
    "image formats 2024, JPG vs PNG, WebP vs AVIF, best image format, image format comparison, web image optimization, photography formats",
  openGraph: {
    title: "Ultimate Guide to Image Formats 2024 - JPG vs PNG vs WebP vs AVIF",
    description:
      "Complete comparison of all image formats. Learn which format to choose for your specific needs with real examples and performance data.",
    type: "article",
  },
}

export default function ImageFormatsGuidePage() {
  const formats = [
    {
      name: "JPEG/JPG",
      bestFor: "Photographs, complex images",
      pros: ["Small file sizes", "Universal support", "Good for photos"],
      cons: ["Lossy compression", "No transparency", "Artifacts at high compression"],
      browserSupport: "100%",
      compression: "Lossy",
      transparency: false,
      animation: false,\
      color: "bg-blue-100
