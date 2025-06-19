import type { Metadata } from "next"
import PrivacyPageClient from "./PrivacyPageClient"

export const metadata: Metadata = {
  title: "Privacy Policy - Advanced Image Converter | Your Data Protection",
  description:
    "Our comprehensive privacy policy explains how we protect your data. All image processing happens locally in your browser - we never see or store your files.",
  keywords: "privacy policy, data protection, image converter privacy, local processing, secure conversion",
  openGraph: {
    title: "Privacy Policy - Advanced Image Converter",
    description: "Learn how we protect your privacy with local image processing",
    type: "website",
  },
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
