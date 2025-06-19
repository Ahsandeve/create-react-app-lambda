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
  Zap,
  Palette,
  Settings,
  Lock,
  Gauge,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Features - Advanced Image Converter | Complete Feature List",
  description:
    "Explore all features of our advanced image converter: batch processing, quality control, format support, privacy protection, and more professional tools.",
  keywords: "image converter features, batch processing, quality control, format conversion, privacy protection",
  openGraph: {
    title: "Advanced Image Converter Features - Professional Tools",
    description: "Discover powerful features for professional image conversion and processing.",
    type: "website",
  },
}

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: <FileType className="h-8 w-8 text-primary" />,
      title: "15+ Format Support",
      description:
        "Convert between JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, HEIC, and SVG formats with perfect quality preservation.",
      category: "Conversion",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "100% Private Processing",
      description:
        "All conversions happen in your browser. Your images never leave your device, ensuring complete privacy.",
      category: "Security",
    },
    {
      icon: <Download className="h-8 w-8 text-primary" />,
      title: "Batch Processing",
      description: "Convert multiple images simultaneously and download them as a convenient ZIP file.",
      category: "Productivity",
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Advanced Quality Control",
      description: "Fine-tune compression levels and quality settings for the perfect balance of size and quality.",
      category: "Quality",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile Optimized",
      description: "Fully responsive design that works perfectly on smartphones, tablets, and desktop computers.",
      category: "Accessibility",
    },
    {
      icon: <CloudOff className="h-8 w-8 text-primary" />,
      title: "No Upload Limits",
      description: "Process images up to 50MB each with no daily limits or restrictions on usage.",
      category: "Freedom",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized conversion engine processes images in seconds using advanced browser APIs.",
      category: "Performance",
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Custom Resize Options",
      description: "Resize images to specific dimensions while maintaining aspect ratio or custom proportions.",
      category: "Editing",
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Secure by Design",
      description: "No data collection, no tracking, no server uploads. Your privacy is guaranteed by design.",
      category: "Security",
    },
    {
      icon: <Gauge className="h-8 w-8 text-primary" />,
      title: "Real-time Preview",
      description: "See file size changes and quality differences in real-time as you adjust settings.",
      category: "User Experience",
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Dark Mode Support",
      description: "Beautiful dark and light themes that automatically adapt to your system preferences.",
      category: "Design",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Accessibility First",
      description: "Built with screen readers and keyboard navigation in mind for inclusive design.",
      category: "Accessibility",
    },
  ]

  const categories = ["All", "Conversion", "Security", "Productivity", "Quality", "Performance"]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Every Need</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover why millions of users trust our advanced image converter for their daily image processing needs.
            From basic conversions to professional workflows.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="px-4 py-2">
              {category}
            </Badge>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">{feature.icon}</div>
                  <Badge variant="secondary">{feature.category}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Supported Formats</h3>
              <p className="text-sm text-muted-foreground">JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, HEIC, SVG</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Max File Size</h3>
              <p className="text-sm text-muted-foreground">50MB per image</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Batch Limit</h3>
              <p className="text-sm text-muted-foreground">Unlimited files</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Browser Support</h3>
              <p className="text-sm text-muted-foreground">All modern browsers</p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Converter?</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 dark:border-gray-700">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-200 dark:border-gray-700 p-4 text-left">Feature</th>
                  <th className="border border-gray-200 dark:border-gray-700 p-4 text-center">Our Tool</th>
                  <th className="border border-gray-200 dark:border-gray-700 p-4 text-center">Other Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 dark:border-gray-700 p-4">Privacy Protection</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center text-green-600">
                    ✓ 100% Local
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center text-red-600">
                    ✗ Server Upload
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 dark:border-gray-700 p-4">File Size Limits</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center text-green-600">✓ 50MB</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center text-red-600">✗ 5-10MB</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 dark:border-gray-700 p-4">Batch Processing</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center text-green-600">
                    ✓ Unlimited
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center text-red-600">
                    ✗ Limited
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 dark:border-gray-700 p-4">Quality Control</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center text-green-600">
                    ✓ Advanced
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center text-yellow-600">
                    ~ Basic
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 dark:border-gray-700 p-4">Cost</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center text-green-600">
                    ✓ Free Forever
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center text-red-600">
                    ✗ Subscription
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-muted-foreground mb-6">
            Join millions of users who trust our advanced image converter for their daily needs.
          </p>
          <a
            href="/#converter"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Start Converting Now
          </a>
        </div>
      </div>
    </div>
  )
}
