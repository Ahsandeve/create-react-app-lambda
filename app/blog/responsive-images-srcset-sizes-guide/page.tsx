import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Responsive Images with srcset and sizes: Complete Guide | Advanced Image Converter",
  description:
    "Master responsive images with srcset and sizes attributes. Learn art direction, resolution switching, and performance optimization for any device.",
  keywords: "responsive images, srcset, sizes attribute, art direction, resolution switching, web performance, HTML5",
  openGraph: {
    title: "Responsive Images with srcset and sizes: Complete Guide",
    description: "Learn how to implement responsive images that adapt perfectly to any device and screen size.",
    type: "article",
    publishedTime: "2024-01-30T10:00:00.000Z",
    authors: ["David Kim"],
  },
}

export default function ResponsiveImagesGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 mb-4">
              Responsive Design
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Responsive Images with srcset and sizes: Complete Guide
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <img src="/placeholder-user.jpg" alt="David Kim" className="w-8 h-8 rounded-full" />
                <span>David Kim</span>
              </div>
              <time dateTime="2024-01-30">January 30, 2024</time>
              <span>14 min read</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Responsive images are essential for modern web development. Learn how to use srcset and sizes attributes to deliver the perfect image for every device, improving performance and user experience.
            </p>

            <h2>The Problem with Fixed Images</h2>
            <p>
              Traditional img tags serve the same image to all devices, leading to:
            </p>
            <ul>
              <li><strong>Wasted bandwidth:</strong> Mobile users download desktop-sized images</li>
              <li><strong>Poor performance:</strong> Large images slow down page loading</li>
              <li><strong>Suboptimal quality:</strong> Images may appear pixelated on high-DPI screens</li>
              <li><strong>Layout issues:</strong> Fixed images don't adapt to different screen sizes</li>
            </ul>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-2">📱 Mobile First</h3>
              <p className="text-orange-800 dark:text-orange-200 mb-0">
                Mobile users account for over 50% of web traffic. Optimizing images for mobile devices is crucial for performance and user retention.
              </p>
            </div>

            <h2>Understanding srcset Attribute</h2>
            
            <h3>Basic Syntax</h3>
            <p>The srcset attribute provides multiple image sources with descriptors:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm"><code>{`<img 
  src="image-800.jpg" 
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  alt="Responsive image example"
>`}</code></pre>
            </div>

            <h3>Width Descriptors (w)</h3>
            <p>Width descriptors tell the browser the intrinsic width of each image:</p>
            <ul>
              <li><code>400w</code> = image is 400 pixels wide</li>
              <li><code>800w</code> = image is 800 pixels wide</li>
              <li><code>1200w</code> = image is 1200 pixels wide</li>
            </ul>

            <h3>Density Descriptors (x)</h3>
            <p>Density descriptors specify pixel density:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm"><code>{`<img 
  src="image.jpg" 
  srcset="image.jpg 1x,
          image@2x.jpg 2x,
          image@3x.jpg 3x"
  alt="High-DPI image example"
>`}</code></pre>
            </div>

            <h2>The sizes Attribute</h2>

            <h3>Purpose and Syntax</h3>
            <p>The sizes attribute tells the browser how much space the image will occupy:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm"><code>{`<img 
  src="image-800.jpg"
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 50vw,
         33vw"
  alt="Image with sizes attribute"
>`}</code></pre>
            </div>

            <h3>Common sizes Patterns</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3">Full-width Hero</h4>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm mb-2">
                  <code>sizes="100vw"</code>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Image takes full viewport width on all devices
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3">Responsive Grid</h4>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm mb-2">
                  <code>sizes="(max-width: 768px) 100vw, 50vw"</code>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Full width on mobile, half width on desktop
                </p>
              </div>
            </div>

            <h2>Art Direction with &lt;picture&gt;</h2>

            <h3>When to Use Picture Element</h3>
            <p>Use the picture element for:</p>
            <ul>
              <li>Different image crops for different screen sizes</li>
              <li>Format fallbacks (WebP → JPEG)</li>
              <li>Dark mode image variations</li>
              <li>Orientation-specific images</li>
            </ul>

            <h3>Art Direction Example</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm"><code>{`<picture>
  <!-- Desktop: Landscape crop -->
  <source 
    media="(min-width: 768px)" 
    srcset="hero-desktop-800.jpg 800w,
            hero-desktop-1200.jpg 1200w"
    sizes="100vw">
  
  <!-- Mobile: Portrait crop -->
  <source 
    media="(max-width: 767px)" 
    srcset="hero-mobile-400.jpg 400w,
            hero-mobile-600.
