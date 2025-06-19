import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";
import { ToastProvider } from "@/components/ui/toast-notification";
import { CustomToastContainer } from "@/components/ui/custom-toast";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import AnimatedBackground from "@/components/animated-background";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { DomainProvider } from "@/context/DomainContext";

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Advanced Image Converter - Fast, Secure, Privacy-First Image Processing",
    template: "%s | Advanced Image Converter"
  },
  description: "Convert images between formats instantly with our privacy-first image converter. Support for JPG, PNG, WebP, AVIF, GIF, and more. No uploads required - everything processes locally in your browser.",
  keywords: "image converter, convert images online, JPG to PNG, WebP converter, AVIF converter, batch image processing, image optimization, privacy-first image tool",
  authors: [{ name: "Advanced Image Converter Team" }],
  creator: "Advanced Image Converter",
  publisher: "Advanced Image Converter",
  generator: "Next.js",
  applicationName: "Advanced Image Converter",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#22c55e" },
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Advanced Image Converter - Fast, Secure, Privacy-First Image Processing",
    description: "Convert images between formats instantly with our privacy-first image converter. Support for JPG, PNG, WebP, AVIF, GIF, and more. No uploads required - everything processes locally in your browser.",
    url: 'https://advancedimageconverter.com',
    siteName: 'Advanced Image Converter',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Advanced Image Converter OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Advanced Image Converter - Fast, Secure, Privacy-First Image Processing",
    description: "Convert images between formats instantly with our privacy-first image converter. Support for JPG, PNG, WebP, AVIF, GIF, and more. No uploads required - everything processes locally in your browser.",
    images: ['/og-image.png'],
    creator: '@AIC_Converter',
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    microsoft: 'microsoft'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={inter.className}> */}
      <body>
        <DomainProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <ToastProvider>
                <AnimatedBackground />
                <div className="flex flex-col min-h-screen relative z-10">
                  <Header />
                  <ScrollProgressBar />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
                <ScrollToTop />
                <CustomToastContainer />
              </ToastProvider>
            </AuthProvider>
          </ThemeProvider>
        </DomainProvider>
      </body>
    </html>
  );
}
