import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, Tag, ArrowLeft, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Building Responsive Images: Modern Best Practices | Advanced Image Converter",
  description:
    "Learn how to implement responsive images that look perfect on every device and screen size. Master modern responsive image techniques and optimization strategies.",
  keywords:
    "responsive images, responsive design, image optimization, srcset, picture element, mobile images, web performance, CSS images",
  openGraph: {
    title: "Building Responsive Images: Modern Best Practices",
    description: "Master responsive images that look perfect on every device and screen size",
    type: "article",
  },
}

const faqs = [
  {
    question: "What are responsive images?",
    answer:
      "Responsive images automatically adapt to different screen sizes, resolutions, and device capabilities. They ensure optimal image quality and performance across all devices by serving appropriately sized images.",
  },
  {
    question: "What's the difference between srcset and the picture element?",
    answer:
      "srcset is used for serving different sizes of the same image, while the picture element allows serving completely different images based on conditions like screen size, resolution, or format support.",
  },
  {
    question: "How many image sizes should I create for responsive design?",
    answer:
      "Typically 3-5 sizes cover most use cases: small (320-480px), medium (768-1024px), large (1200-1600px), and optionally extra-large (1920px+) and thumbnail sizes.",
  },
  {
    question: "Do responsive images improve SEO?",
    answer:
      "Yes! Responsive images improve page load speeds, which is a ranking factor. They also provide better user experience, reduce bounce rates, and improve Core Web Vitals scores.",
  },
  {
    question: "Can I use responsive images with WebP format?",
    answer:
      "The picture element is perfect for serving WebP to supporting browsers while providing JPEG/PNG fallbacks for older browsers.",
  },
]

export default function ResponsiveImagesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
                <Tag className="h-3 w-3 mr-1" />
                development
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                11 min read
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                January 1, 2024
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Building Responsive Images: Modern Best Practices
            </h1>

            {/* Author */}
            <div className="flex items-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                RK
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Rachel Kim</p>
                <p className="text-sm text-gray-500">Frontend Development Expert</p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                In today's multi-device world, images must adapt seamlessly to countless screen sizes, resolutions, and
                viewing conditions. Responsive images are no longer optional—they're essential for delivering fast,
                beautiful experiences across all devices. This comprehensive guide covers everything you need to know
                about implementing responsive images using modern web standards.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Why Responsive Images Matter</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Performance Impact</h3>
              <p>
                Serving appropriately sized images can reduce page load times by 50-80%. A 2MB desktop image served to a
                mobile device wastes bandwidth and slows loading, while a tiny mobile image on a large screen looks
                pixelated and unprofessional.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">User Experience Benefits</h3>
              <ul>
                <li>
                  <strong>Faster loading:</strong> Optimized images for each device
                </li>
                <li>
                  <strong>Better quality:</strong> Sharp images on all screen densities
                </li>
                <li>
                  <strong>Reduced data usage:</strong> Important for mobile users
                </li>
                <li>
                  <strong>Improved accessibility:</strong> Better experience for all users
                </li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  📊 Performance Statistics
                </h4>
                <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Images account for 50-60% of average page weight</li>
                  <li>• Responsive images can reduce image bytes by 40-80%</li>
                  <li>• 1-second delay in loading can reduce conversions by 7%</li>
                  <li>• 53% of mobile users abandon sites that take >3 seconds to load</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Core Responsive Image Techniques</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">1. The srcset Attribute</h3>
              <p>
                The srcset attribute allows you to specify multiple image sources with different resolutions or sizes.
                The browser automatically selects the most appropriate image based on the device's characteristics.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
                <h5 className="font-semibold mb-3">Basic srcset Example:</h5>
                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`<img src="image-800.jpg"
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1000px) 800px,
            1200px"
     alt="Responsive image example">`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">2. The Picture Element</h3>
              <p>
                The picture element provides more control over which image is displayed. It's perfect for art direction
                (showing different images at different sizes) or format selection (serving WebP to supporting browsers).
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
                <h5 className="font-semibold mb-3">Picture Element Example:</h5>
                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`<picture>
  <source media="(max-width: 600px)" 
          srcset="mobile-image.webp" 
          type="image/webp">
  <source media="(max-width: 600px)" 
          srcset="mobile-image.jpg">
  <source srcset="desktop-image.webp" 
          type="image/webp">
  <img src="desktop-image.jpg" 
       alt="Responsive picture example">
</picture>`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">3. CSS Responsive Images</h3>
              <p>
                CSS provides powerful tools for responsive images, including object-fit, object-position, and media
                queries for background images.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
                <h5 className="font-semibold mb-3">CSS Responsive Techniques:</h5>
                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`/* Responsive image container */
.responsive-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
}

/* Responsive background images */
.hero-section {
  background-image: url('mobile-bg.jpg');
}

@media (min-width: 768px) {
  .hero-section {
    background-image: url('desktop-bg.jpg');
  }
}`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Planning Your Responsive Image Strategy</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: Analyze Your Breakpoints</h3>
              <p>Identify the key screen sizes where your layout changes. Common breakpoints include:</p>
              <ul>
                <li>
                  <strong>Mobile:</strong> 320px - 767px
                </li>
                <li>
                  <strong>Tablet:</strong> 768px - 1023px
                </li>
                <li>
                  <strong>Desktop:</strong> 1024px - 1439px
                </li>
                <li>
                  <strong>Large Desktop:</strong> 1440px+
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: Determine Image Sizes</h3>
              <p>For each breakpoint, calculate the maximum image size needed:</p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
                <h5 className="font-semibold mb-3">Image Size Calculation:</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-medium mb-2">Container-based sizing:</h6>
                    <ul className="text-sm space-y-1">
                      <li>• Full-width: viewport width</li>
                      <li>• Half-width: viewport width ÷ 2</li>
                      <li>• Fixed container: container max-width</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium mb-2">High-DPI considerations:</h6>
                    <ul className="text-sm space-y-1">
                      <li>• 2x displays: double the pixel width</li>
                      <li>• 3x displays: triple the pixel width</li>
                      <li>• Consider 1.5x for mid-range devices</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Step 3: Create Image Variants</h3>
              <p>Generate multiple sizes of each image. A typical set might include:</p>
              <ul>
                <li>
                  <strong>320w:</strong> Small mobile devices
                </li>
                <li>
                  <strong>640w:</strong> Large mobile devices and small tablets
                </li>
                <li>
                  <strong>768w:</strong> Tablets in portrait mode
                </li>
                <li>
                  <strong>1024w:</strong> Tablets in landscape and small desktops
                </li>
                <li>
                  <strong>1200w:</strong> Standard desktop displays
                </li>
                <li>
                  <strong>1600w:</strong> Large desktop displays
                </li>
                <li>
                  <strong>2400w:</strong> High-DPI large displays
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Advanced Responsive Image Patterns</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Art Direction</h3>
              <p>
                Sometimes you need different images for different screen sizes—not just different sizes of the same
                image. This is called art direction.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
                <h5 className="font-semibold mb-3">Art Direction Example:</h5>
                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`<picture>
  <!-- Mobile: Show close-up portrait -->
  <source media="(max-width: 767px)" 
          srcset="portrait-closeup-400.jpg 400w,
                  portrait-closeup-800.jpg 800w">
  
  <!-- Desktop: Show full landscape scene -->
  <source srcset="landscape-wide-800.jpg 800w,
                  landscape-wide-1200.jpg 1200w,
                  landscape-wide-1600.jpg 1600w">
  
  <img src="landscape-wide-800.jpg" 
       alt="Scenic landscape view">
</picture>`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Format Selection</h3>
              <p>
                Use the picture element to serve modern formats like WebP and AVIF to supporting browsers while
                providing fallbacks.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
                <h5 className="font-semibold mb-3">Multi-format Example:</h5>
                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`<picture>
  <!-- AVIF for cutting-edge browsers -->
  <source srcset="image-400.avif 400w,
                  image-800.avif 800w,
                  image-1200.avif 1200w"
          type="image/avif">
  
  <!-- WebP for modern browsers -->
  <source srcset="image-400.webp 400w,
                  image-800.webp 800w,
                  image-1200.webp 1200w"
          type="image/webp">
  
  <!-- JPEG fallback -->
  <img src="image-800.jpg"
       srcset="image-400.jpg 400w,
               image-800.jpg 800w,
               image-1200.jpg 1200w"
       sizes="(max-width: 600px) 400px,
              (max-width: 1000px) 800px,
              1200px"
       alt="Multi-format responsive image">
</picture>`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Lazy Loading</h3>
              <p>Combine responsive images with lazy loading to further improve performance:</p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-8">
                <h5 className="font-semibold mb-3">Lazy Loading Implementation:</h5>
                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  {`<img src="placeholder.jpg"
     data-srcset="image-400.jpg 400w,
                  image-800.jpg 800w,
                  image-1200.jpg 1200w"
     data-sizes="(max-width: 600px) 400px,
                 (max-width: 1000px) 800px,
                 1200px"
     loading="lazy"
     alt="Lazy loaded responsive image">`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Responsive Image Workflow</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">1. Image Preparation</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                  <h5 className="font-semibold mb-3">Manual Process:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Start with highest quality source</li>
                    <li>• Resize to each required width</li>
                    <li>• Optimize each size individually</li>
                    <li>• Generate multiple formats</li>
                    <li>• Test quality at each size</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                  <h5 className="font-semibold mb-3">Automated Process:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Use build tools (Webpack, Gulp)</li>
                    <li>• Implement responsive image plugins</li>
                    <li>• Set up automated optimization</li>
                    <li>• Generate srcset automatically</li>
                    <li>• Use our Advanced Image Converter</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">2. Implementation Strategy</h3>
              <ol>
                <li>
                  <strong>Start simple:</strong> Begin with basic srcset implementation
                </li>
                <li>
                  <strong>Add complexity gradually:</strong> Introduce picture element where needed
                </li>
                <li>
                  <strong>Test thoroughly:</strong> Verify on real devices and connections
                </li>
                <li>
                  <strong>Monitor performance:</strong> Use tools to measure impact
                </li>
                <li>
                  <strong>Iterate and improve:</strong> Refine based on real-world data
                </li>
              </ol>

              <h2 className="text-3xl font-bold mt-12 mb-6">Common Responsive Image Mistakes</h2>

              <div className="space-y-6">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">❌ Too Many Image Sizes</h4>
                  <p className="text-red-800 dark:text-red-200">
                    Creating too many image variants increases complexity and storage costs without significant
                    benefits. 3-5 sizes usually cover most use cases effectively.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                    ❌ Incorrect sizes Attribute
                  </h4>
                  <p className="text-red-800 dark:text-red-200">
                    The sizes attribute must accurately reflect how the image will be displayed. Incorrect sizes can
                    cause browsers to download unnecessarily large images.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                    ❌ Forgetting High-DPI Displays
                  </h4>
                  <p className="text-red-800 dark:text-red-200">
                    Not accounting for high-DPI displays results in blurry images on modern devices. Always consider 2x
                    and 3x pixel densities.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">❌ No Fallback Strategy</h4>
                  <p className="text-red-800 dark:text-red-200">
                    Always provide fallbacks for older browsers and ensure your images work even when responsive
                    features aren't supported.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Testing and Optimization</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Testing Tools</h3>
              <ul>
                <li>
                  <strong>Browser DevTools:</strong> Network tab shows which images are downloaded
                </li>
                <li>
                  <strong>Responsive Design Mode:</strong> Test different viewport sizes
                </li>
                <li>
                  <strong>Lighthouse:</strong> Performance audits and recommendations
                </li>
                <li>
                  <strong>WebPageTest:</strong> Real-world performance testing
                </li>
                <li>
                  <strong>GTmetrix:</strong> Comprehensive performance analysis
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Performance Metrics</h3>
              <ul>
                <li>
                  <strong>Largest Contentful Paint (LCP):</strong> How quickly main content loads
                </li>
                <li>
                  <strong>Cumulative Layout Shift (CLS):</strong> Visual stability during loading
                </li>
                <li>
                  <strong>First Input Delay (FID):</strong> Interactivity responsiveness
                </li>
                <li>
                  <strong>Total image bytes:</strong> Overall bandwidth usage
                </li>
                <li>
                  <strong>Image load time:</strong> Time to display images
                </li>
              </ul>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                  🚀 Performance Optimization Tips
                </h4>
                <ul className="text-green-800 dark:text-green-200 space-y-1">
                  <li>• Use appropriate image formats (WebP, AVIF)</li>
                  <li>• Implement lazy loading for below-fold images</li>
                  <li>• Preload critical above-fold images</li>
                  <li>• Use CDN for global image delivery</li>
                  <li>• Monitor real user metrics (RUM)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Future of Responsive Images</h2>
              <p>Responsive images continue to evolve with new technologies and standards:</p>
              <ul>
                <li>
                  <strong>Container Queries:</strong> Images that respond to container size, not viewport
                </li>
                <li>
                  <strong>AVIF adoption:</strong> Better compression than WebP
                </li>
                <li>
                  <strong>AI-powered optimization:</strong> Automatic image enhancement and sizing
                </li>
                <li>
                  <strong>Edge computing:</strong> Real-time image processing at CDN edge
                </li>
                <li>
                  <strong>Variable fonts:</strong> Responsive typography to complement responsive images
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
              <p>
                Responsive images are essential for modern web development. They improve performance, enhance user
                experience, and ensure your content looks great on every device. While the implementation can seem
                complex, starting with basic srcset and gradually adding advanced features like the picture element and
                format selection will give you powerful, flexible image solutions.
              </p>

              <p>
                Remember to test thoroughly, monitor performance, and iterate based on real-world usage. With proper
                implementation, responsive images can reduce bandwidth usage by 40-80% while delivering superior visual
                experiences across all devices.
              </p>

              <p>
                Use our Advanced Image Converter to generate the multiple image sizes and formats you need for
                responsive image implementation, and start delivering better experiences to your users today.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Create Responsive Image Sets</h3>
              <p className="text-lg opacity-90 mb-6">
                Generate multiple sizes and formats for your responsive images with our Advanced Image Converter.
              </p>
              <Button asChild className="bg-white text-indigo-600 hover:bg-gray-100">
                <Link href="/#converter">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Start Creating
                </Link>
              </Button>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
