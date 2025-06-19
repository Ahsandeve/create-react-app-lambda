import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileType,
  Shield,
  Download,
  Layers,
  Smartphone,
  CloudOff,
  Palette,
  Zap,
  Settings,
  Lock,
  Globe,
  Cpu,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Features - Advanced Image Converter | Complete Image Processing Suite",
  description:
    "Discover all features of our advanced image converter: batch processing, format support, quality control, privacy protection, and more. Professional image conversion made simple.",
  keywords:
    "image converter features, batch image processing, image format conversion, image quality control, secure image processing",
  openGraph: {
    title: "Advanced Image Converter Features",
    description: "Complete image processing suite with privacy protection",
    type: "website",
  },
}

export default function FeaturesPage() {
  const features = [
    {
      icon: <FileType className="h-12 w-12 text-blue-600" />,
      title: "Universal Format Support",
      description:
        "Convert between JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, HEIC, and SVG with perfect quality preservation.",
      category: "Formats",
      highlights: ["15+ Supported Formats", "Lossless Conversion", "Vector Support"],
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Complete Privacy Protection",
      description:
        "All processing happens locally in your browser. Your images never leave your device or touch our servers.",
      category: "Security",
      highlights: ["Local Processing", "Zero Data Collection", "GDPR Compliant"],
    },
    {
      icon: <Download className="h-12 w-12 text-purple-600" />,
      title: "Advanced Batch Processing",
      description: "Process multiple images simultaneously with intelligent queuing and progress tracking.",
      category: "Productivity",
      highlights: ["Unlimited Files", "Smart Queuing", "Progress Tracking"],
    },
    {
      icon: <Layers className="h-12 w-12 text-orange-600" />,
      title: "Precision Quality Control",
      description: "Fine-tune compression, quality settings, and output parameters for perfect results every time.",
      category: "Quality",
      highlights: ["Custom Quality", "Compression Control", "Size Optimization"],
    },
    {
      icon: <Smartphone className="h-12 w-12 text-pink-600" />,
      title: "Cross-Platform Compatibility",
      description: "Works seamlessly on desktop, tablet, and mobile devices with responsive design.",
      category: "Compatibility",
      highlights: ["Mobile Optimized", "Touch Friendly", "All Browsers"],
    },
    {
      icon: <CloudOff className="h-12 w-12 text-gray-600" />,
      title: "Offline Functionality",
      description: "No internet connection required after initial load. Process images anywhere, anytime.",
      category: "Accessibility",
      highlights: ["Offline Mode", "No Limits", "Always Available"],
    },
    {
      icon: <Palette className="h-12 w-12 text-indigo-600" />,
      title: "Smart Image Enhancement",
      description: "Automatic color correction, noise reduction, and intelligent optimization algorithms.",
      category: "Enhancement",
      highlights: ["Auto Enhancement", "Noise Reduction", "Color Correction"],
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-600" />,
      title: "Lightning-Fast Processing",
      description: "Optimized algorithms deliver results in seconds using modern web technologies.",
      category: "Performance",
      highlights: ["WebAssembly", "GPU Acceleration", "Instant Results"],
    },
    {
      icon: <Settings className="h-12 w-12 text-red-600" />,
      title: "Advanced Configuration",
      description: "Customize every aspect of conversion with professional-grade settings and presets.",
      category: "Customization",
      highlights: ["Custom Presets", "Bulk Settings", "Expert Mode"],
    },
    {
      icon: <Lock className="h-12 w-12 text-teal-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with encrypted processing and secure memory management.",
      category: "Security",
      highlights: ["Encrypted Processing", "Secure Memory", "Audit Trail"],
    },
    {
      icon: <Globe className="h-12 w-12 text-cyan-600" />,
      title: "Multi-Language Support",
      description: "Available in multiple languages with RTL support and localized interfaces.",
      category: "Accessibility",
      highlights: ["20+ Languages", "RTL Support", "Cultural Adaptation"],
    },
    {
      icon: <Cpu className="h-12 w-12 text-violet-600" />,
      title: "AI-Powered Optimization",
      description: "Machine learning algorithms automatically optimize settings for best results.",
      category: "AI",
      highlights: ["Smart Optimization", "Auto Settings", "Learning System"],
    },
  ]

  const categories = [...new Set(features.map((f) => f.category))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need for professional image conversion, built with privacy and performance in mind.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="px-4 py-2 text-sm">
              {category}
            </Badge>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4 bg-gray-50 dark:bg-gray-800 rounded-full p-4 w-fit mx-auto">{feature.icon}</div>
                <Badge variant="secondary" className="mb-2 w-fit mx-auto">
                  {feature.category}
                </Badge>
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </CardDescription>
                <div className="flex flex-wrap justify-center gap-2">
                  {feature.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold mb-4">Technical Specifications</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Built with cutting-edge technology for maximum performance and reliability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Processing Speed</h4>
                  <p className="text-2xl font-bold text-blue-400">2-5 sec</p>
                  <p className="text-sm text-gray-400">Per image</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Max File Size</h4>
                  <p className="text-2xl font-bold text-green-400">50 MB</p>
                  <p className="text-sm text-gray-400">Per image</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Batch Limit</h4>
                  <p className="text-2xl font-bold text-purple-400">Unlimited</p>
                  <p className="text-sm text-gray-400">No restrictions</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Browser Support</h4>
                  <p className="text-2xl font-bold text-orange-400">95%+</p>
                  <p className="text-sm text-gray-400">Modern browsers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Ready to Experience These Features?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                Start converting your images now and discover the power of professional image processing in your
                browser.
              </p>
              <Link
                href="/#converter"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Try It Now - Free
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
