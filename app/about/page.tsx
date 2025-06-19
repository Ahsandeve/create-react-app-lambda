import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us - Advanced Image Converter | Professional Image Conversion Tool",
  description:
    "Learn about our mission to provide the most advanced, secure, and user-friendly image conversion tool. Convert images between formats with professional-grade quality.",
  keywords: "about image converter, image conversion company, photo converter team, image processing experts",
  openGraph: {
    title: "About Advanced Image Converter - Professional Image Processing",
    description: "Discover our story and commitment to providing the best image conversion experience",
    type: "website",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
