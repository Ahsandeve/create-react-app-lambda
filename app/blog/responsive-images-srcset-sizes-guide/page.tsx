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
              Responsive images are essential for modern web development. Learn how to use srcset and sizes attributes
              to deliver the perfect image for every device, improving performance and user experience.
            </p>

            <h2>The Problem with Fixed Images</h2>
            <p>Traditional img tags serve the same image to all devices, leading to:</p>
            <ul>
              <li>
                <strong>Wasted bandwidth:</strong> Mobile users download desktop-sized images
              </li>
              <li>
                <strong>Poor performance:</strong> Large images slow down page loading
              </li>
              <li>
                <strong>Suboptimal quality:</strong> Images may appear pixelated on high-DPI screens
              </li>
              <li>
                <strong>Layout issues:</strong> Fixed images don't adapt to different screen sizes
              </li>
            </ul>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-2">📱 Mobile First</h3>
              <p className="text-orange-800 dark:text-orange-200 mb-0">
                Mobile users account for over 50% of web traffic. Optimizing images for mobile devices is crucial for
                performance and user retention.
              </p>
            </div>

            <h2>Understanding srcset Attribute</h2>

            <h3>Basic Syntax</h3>
            <p>The srcset attribute provides multiple image sources with descriptors:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<img 
  src="image-800.jpg" 
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  alt="Responsive image example"
>`}</code>
              </pre>
            </div>

            <h3>Width Descriptors (w)</h3>
            <p>Width descriptors tell the browser the intrinsic width of each image:</p>
            <ul>
              <li>
                <code>400w</code> = image is 400 pixels wide
              </li>
              <li>
                <code>800w</code> = image is 800 pixels wide
              </li>
              <li>
                <code>1200w</code> = image is 1200 pixels wide
              </li>
            </ul>

            <h3>Density Descriptors (x)</h3>
            <p>Density descriptors specify pixel density:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<img 
  src="image.jpg" 
  srcset="image.jpg 1x,
          image@2x.jpg 2x,
          image@3x.jpg 3x"
  alt="High-DPI image example"
>`}</code>
              </pre>
            </div>

            <h2>The sizes Attribute</h2>

            <h3>Purpose and Syntax</h3>
            <p>The sizes attribute tells the browser how much space the image will occupy:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<img 
  src="image-800.jpg"
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 50vw,
         33vw"
  alt="Image with sizes attribute"
>`}</code>
              </pre>
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
                <p className="text-gray-600 dark:text-gray-400 text-sm">Full width on mobile, half width on desktop</p>
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
              <pre className="text-sm">
                <code>{`<picture>
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
            hero-mobile-600.jpg 600w"
    sizes="100vw">
  
  <!-- Fallback -->
  <img src="hero-desktop-800.jpg" alt="Hero image">
</picture>`}</code>
              </pre>
            </div>

            <h2>Format Selection Strategy</h2>

            <h3>Modern Format Support</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<picture>
  <!-- AVIF for supporting browsers -->
  <source 
    srcset="image-400.avif 400w,
            image-800.avif 800w"
    sizes="(max-width: 768px) 100vw, 50vw"
    type="image/avif">
  
  <!-- WebP fallback -->
  <source 
    srcset="image-400.webp 400w,
            image-800.webp 800w"
    sizes="(max-width: 768px) 100vw, 50vw"
    type="image/webp">
  
  <!-- JPEG fallback -->
  <img 
    src="image-800.jpg"
    srcset="image-400.jpg 400w,
            image-800.jpg 800w"
    sizes="(max-width: 768px) 100vw, 50vw"
    alt="Responsive image with format fallbacks">
</picture>`}</code>
              </pre>
            </div>

            <h2>Performance Optimization</h2>

            <h3>Lazy Loading</h3>
            <p>Combine responsive images with lazy loading:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<img 
  src="image-800.jpg"
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
  alt="Lazy-loaded responsive image"
>`}</code>
              </pre>
            </div>

            <h3>Preloading Critical Images</h3>
            <p>Preload above-the-fold responsive images:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<link 
  rel="preload" 
  as="image" 
  href="hero-800.jpg"
  imagesrcset="hero-400.jpg 400w,
               hero-800.jpg 800w,
               hero-1200.jpg 1200w"
  imagesizes="100vw"
>`}</code>
              </pre>
            </div>

            <h2>Common Implementation Patterns</h2>

            <h3>Blog Post Images</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<img 
  src="blog-image-800.jpg"
  srcset="blog-image-400.jpg 400w,
          blog-image-600.jpg 600w,
          blog-image-800.jpg 800w"
  sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 90vw,
         800px"
  alt="Blog post illustration"
>`}</code>
              </pre>
            </div>

            <h3>Product Gallery</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<img 
  src="product-400.jpg"
  srcset="product-200.jpg 200w,
          product-400.jpg 400w,
          product-600.jpg 600w"
  sizes="(max-width: 480px) 50vw,
         (max-width: 768px) 33vw,
         25vw"
  alt="Product thumbnail"
>`}</code>
              </pre>
            </div>

            <h2>Testing and Debugging</h2>

            <h3>Browser DevTools</h3>
            <p>Use browser developer tools to verify image selection:</p>
            <ul>
              <li>
                <strong>Network tab:</strong> Check which images are downloaded
              </li>
              <li>
                <strong>Device simulation:</strong> Test different screen sizes
              </li>
              <li>
                <strong>Performance tab:</strong> Measure loading performance
              </li>
              <li>
                <strong>Lighthouse:</strong> Audit image optimization
              </li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">Testing Tip</h4>
              <p className="text-blue-800 dark:text-blue-200 mb-0">
                Test on real devices with slow connections. Emulation doesn't always reflect real-world performance.
              </p>
            </div>

            <h2>Browser Support and Fallbacks</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Feature</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Support</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Fallback</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">srcset</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">95%+ browsers</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">src attribute</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3">sizes</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">95%+ browsers</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">100vw assumed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">picture</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">95%+ browsers</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">img element</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3">loading="lazy"</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">90%+ browsers</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">JavaScript polyfill</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Common Mistakes to Avoid</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">⚠️ Avoid These Pitfalls</h3>
              <ul className="text-red-800 dark:text-red-200 space-y-2">
                <li>Using srcset without sizes for width descriptors</li>
                <li>Incorrect sizes calculations leading to wrong image selection</li>
                <li>Not providing appropriate fallbacks for older browsers</li>
                <li>Over-optimizing and creating too many image variants</li>
                <li>Forgetting to test on real devices and connections</li>
              </ul>
            </div>

            <h2>Conclusion</h2>
            <p>
              Responsive images with srcset and sizes are essential for modern web performance. Start with basic
              implementations and gradually add complexity as needed. Always test across devices and measure the
              performance impact of your optimizations.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-xl my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Create Responsive Image Sets</h3>
              <p className="text-orange-100 mb-6">
                Generate multiple image sizes and formats for perfect responsive implementation
              </p>
              <a
                href="/"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Start Converting
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">How many image sizes should I create?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Start with 3-4 sizes covering mobile, tablet, and desktop. Add more sizes if you notice significant
                  gaps in your analytics data.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Can I use srcset with CSS background images?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No, srcset only works with img elements. For background images, use CSS media queries with different
                  background-image values.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">What happens if sizes attribute is wrong?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The browser might select suboptimal images, leading to either wasted bandwidth or poor image quality.
                  Always test your sizes calculations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Should I use picture or img with srcset?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use img with srcset for resolution switching. Use picture for art direction (different crops) or
                  format fallbacks.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">How do I handle responsive images in CMS?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Most modern CMS platforms can automatically generate multiple image sizes and srcset attributes. Check
                  your CMS documentation for responsive image features.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
