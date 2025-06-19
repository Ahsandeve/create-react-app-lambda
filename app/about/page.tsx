import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us - Advanced Image Converter | Free Online Tool",
  description:
    "Learn about our mission to provide the best free online image conversion tool. Convert images between formats with privacy and security.",
  keywords: "about image converter, online image tool, image conversion history, free image converter",
  openGraph: {
    title: "About Advanced Image Converter",
    description: "Discover our story and commitment to providing secure, fast image conversion",
    type: "website",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
