import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://advanced-image-converter.vercel.app"),
  title: {
    default: "Advanced Image Converter - Free Online Image Format Converter",
    template: "%s | Advanced Image Converter",
  },
  description:
    "Convert images between formats instantly with our free online tool. Support for JPEG, PNG, WebP, GIF, BMP, TIFF, and AVIF. Fast, secure, and works entirely in your browser.",
  keywords: [
    "image converter",
    "photo converter",
    "online image converter",
    "free image converter",
    "JPEG to PNG",
    "PNG to WebP",
    "image format converter",
    "batch image converter",
    "compress images",
    "optimize images",
    "convert photos online",
    "image processing tool",
  ],
  authors: [{ name: "Advanced Image Converter Team" }],
  creator: "Advanced Image Converter",
  publisher: "Advanced Image Converter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://advanced-image-converter.vercel.app",
    siteName: "Advanced Image Converter",
    title: "Advanced Image Converter - Free Online Image Format Converter",
    description:
      "Convert images between formats instantly. Support for JPEG, PNG, WebP, GIF, BMP, TIFF, and AVIF. Fast, secure, and private.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Advanced Image Converter - Convert images online for free",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Image Converter - Free Online Image Format Converter",
    description: "Convert images between formats instantly. Fast, secure, and works in your browser.",
    images: ["/og-image.jpg"],
    creator: "@imageconverter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://advanced-image-converter.vercel.app",
    languages: {
      "en-US": "https://advanced-image-converter.vercel.app",
    },
  },
  category: "technology",
    generator: 'v0.dev'
}

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Advanced Image Converter",
  description:
    "Free online image converter supporting multiple formats including JPEG, PNG, WebP, GIF, BMP, TIFF, and AVIF",
  url: "https://advanced-image-converter.vercel.app",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Convert between multiple image formats",
    "Batch processing support",
    "Client-side processing for privacy",
    "No file size limits",
    "High-quality compression",
    "Instant conversion",
  ],
  screenshot: "https://advanced-image-converter.vercel.app/screenshot.jpg",
  softwareVersion: "2.0",
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString(),
  author: {
    "@type": "Organization",
    name: "Advanced Image Converter Team",
  },
  publisher: {
    "@type": "Organization",
    name: "Advanced Image Converter",
    logo: {
      "@type": "ImageObject",
      url: "https://advanced-image-converter.vercel.app/logo.png",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
