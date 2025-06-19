import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Image SEO Optimization: Boost Search Rankings by 40% | Advanced Image Converter",
  description:
    "Master image SEO with alt text, file names, structured data, and technical optimization. Improve search rankings and drive more organic traffic.",
  keywords:
    "image SEO, alt text optimization, image search rankings, structured data, Google Images, visual search optimization",
  openGraph: {
    title: "Image SEO Optimization: Boost Search Rankings by 40%",
    description: "Learn advanced image SEO techniques to improve search visibility and drive organic traffic.",
    type: "article",
    publishedTime: "2024-02-05T10:00:00.000Z",
    authors: ["Lisa Wang"],
  },
}

export default function ImageSEOGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 mb-4">
              SEO
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Image SEO Optimization: Boost Search Rankings by 40%
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <img src="/placeholder-user.jpg" alt="Lisa Wang" className="w-8 h-8 rounded-full" />
                <span>Lisa Wang</span>
              </div>
              <time dateTime="2024-02-05">February 5, 2024</time>
              <span>16 min read</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Images account for over 20% of all Google searches. Proper image SEO optimization can significantly boost
              your search rankings, drive organic traffic, and improve user engagement. This comprehensive guide covers
              everything you need to know.
            </p>

            <h2>Why Image SEO Matters</h2>
            <p>Image optimization impacts multiple ranking factors:</p>
            <ul>
              <li>
                <strong>Page load speed:</strong> Optimized images improve Core Web Vitals
              </li>
              <li>
                <strong>User experience:</strong> Fast-loading, relevant images reduce bounce rate
              </li>
              <li>
                <strong>Accessibility:</strong> Proper alt text helps screen readers and search engines
              </li>
              <li>
                <strong>Visual search:</strong> Growing importance of Google Lens and visual search
              </li>
            </ul>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-300 mb-2">🔍 SEO Fact</h3>
              <p className="text-indigo-800 dark:text-indigo-200 mb-0">
                Google Images drives 22.6% of all web searches. Optimizing for image search can significantly increase
                your organic traffic.
              </p>
            </div>

            <h2>File Name Optimization</h2>

            <h3>Descriptive File Names</h3>
            <p>Use descriptive, keyword-rich file names:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`❌ Bad: IMG_1234.jpg, photo.png, image1.webp

✅ Good: 
- red-running-shoes-nike-air-max.jpg
- chocolate-chip-cookies-recipe.webp
- modern-kitchen-design-white-cabinets.png`}</code>
              </pre>
            </div>

            <h3>File Naming Best Practices</h3>
            <ul>
              <li>Use hyphens (-) instead of underscores (_) or spaces</li>
              <li>Keep names under 60 characters</li>
              <li>Include primary keyword naturally</li>
              <li>Be specific and descriptive</li>
              <li>Use lowercase letters</li>
            </ul>

            <h2>Alt Text Optimization</h2>

            <h3>Writing Effective Alt Text</h3>
            <p>Alt text serves both accessibility and SEO purposes:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<!-- Product image -->
<img src="wireless-bluetooth-headphones-black.jpg" 
     alt="Black wireless Bluetooth headphones with noise cancellation on white background">

<!-- Informational image -->
<img src="seo-ranking-factors-chart.png" 
     alt="Chart showing top 10 SEO ranking factors with percentages for 2024">

<!-- Decorative image -->
<img src="abstract-blue-pattern.svg" 
     alt="" 
     role="presentation">`}</code>
              </pre>
            </div>

            <h3>Alt Text Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3 text-green-600">✅ Do</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                  <li>Describe the image content accurately</li>
                  <li>Include relevant keywords naturally</li>
                  <li>Keep it under 125 characters</li>
                  <li>Be specific and contextual</li>
                  <li>Consider the image's purpose</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3 text-red-600">❌ Don't</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                  <li>Keyword stuff</li>
                  <li>Start with "Image of" or "Picture of"</li>
                  <li>Leave alt text empty for content images</li>
                  <li>Use generic descriptions</li>
                  <li>Repeat the same alt text</li>
                </ul>
              </div>
            </div>

            <h2>Technical Image SEO</h2>

            <h3>Image Format Selection</h3>
            <p>Choose the right format for SEO and performance:</p>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Format</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Best For</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">SEO Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">WebP</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Most web images</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Excellent (fast loading)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">AVIF</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Next-gen optimization</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Excellent (smallest files)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">JPEG</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Photos, fallback</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Good (universal support)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">PNG</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Logos, transparency</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Fair (larger files)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Image Compression</h3>
            <p>Balance quality and file size for optimal SEO:</p>
            <ul>
              <li>
                <strong>JPEG:</strong> 80-90% quality for most photos
              </li>
              <li>
                <strong>WebP:</strong> 75-85% quality setting
              </li>
              <li>
                <strong>PNG:</strong> Use tools like TinyPNG for compression
              </li>
              <li>
                <strong>Target:</strong> Under 100KB for most images
              </li>
            </ul>

            <h2>Structured Data for Images</h2>

            <h3>Product Images</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Wireless Bluetooth Headphones",
  "image": [
    "https://example.com/headphones-front.jpg",
    "https://example.com/headphones-side.jpg",
    "https://example.com/headphones-back.jpg"
  ],
  "description": "Premium wireless Bluetooth headphones with noise cancellation",
  "brand": {
    "@type": "Brand",
    "name": "AudioTech"
  }
}`}</code>
              </pre>
            </div>

            <h3>Article Images</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to Image SEO",
  "image": {
    "@type": "ImageObject",
    "url": "https://example.com/image-seo-guide.jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Person",
    "name": "Lisa Wang"
  }
}`}</code>
              </pre>
            </div>

            <h2>Image Sitemap Optimization</h2>

            <h3>Creating Image Sitemaps</h3>
            <p>Help search engines discover your images:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://example.com/product-page</loc>
    <image:image>
      <image:loc>https://example.com/product-image.jpg</image:loc>
      <image:caption>Wireless Bluetooth headphones with premium sound quality</image:caption>
      <image:title>AudioTech Pro Headphones</image:title>
    </image:image>
  </url>
</urlset>`}</code>
              </pre>
            </div>

            <h2>Page Speed and Core Web Vitals</h2>

            <h3>Largest Contentful Paint (LCP)</h3>
            <p>Optimize hero images for better LCP scores:</p>
            <ul>
              <li>Preload critical images above the fold</li>
              <li>Use appropriate image dimensions</li>
              <li>Implement responsive images with srcset</li>
              <li>Consider using a CDN for faster delivery</li>
            </ul>

            <h3>Cumulative Layout Shift (CLS)</h3>
            <p>Prevent layout shifts with proper image sizing:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<!-- Always specify width and height -->
<img src="product.jpg" 
     width="400" 
     height="300" 
     alt="Product description"
     style="aspect-ratio: 4/3;">

<!-- Or use CSS aspect-ratio -->
.image-container {
  aspect-ratio: 16/9;
  width: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`}</code>
              </pre>
            </div>

            <h2>Mobile Image SEO</h2>

            <h3>Mobile-First Optimization</h3>
            <p>Optimize images for mobile devices:</p>
            <ul>
              <li>Use responsive images with appropriate sizes</li>
              <li>Prioritize mobile loading performance</li>
              <li>Consider mobile-specific image crops</li>
              <li>Test on real mobile devices</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">Mobile Priority</h4>
              <p className="text-blue-800 dark:text-blue-200 mb-0">
                Google uses mobile-first indexing. Ensure your images are optimized for mobile devices first, then
                enhance for desktop.
              </p>
            </div>

            <h2>Local SEO and Images</h2>

            <h3>Location-Based Image Optimization</h3>
            <p>For local businesses, optimize images with location context:</p>
            <ul>
              <li>Include location in file names: "pizza-restaurant-downtown-chicago.jpg"</li>
              <li>Add location context to alt text</li>
              <li>Use geotagged images when relevant</li>
              <li>Include local landmarks or recognizable locations</li>
            </ul>

            <h2>E-commerce Image SEO</h2>

            <h3>Product Image Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3">Multiple Angles</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Provide front, side, back, and detail shots</p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  <code>
                    product-name-front.jpg
                    <br />
                    product-name-side.jpg
                  </code>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3">Lifestyle Images</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Show products in use or context</p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  <code>headphones-lifestyle-commute.jpg</code>
                </div>
              </div>
            </div>

            <h2>Measuring Image SEO Success</h2>

            <h3>Key Metrics to Track</h3>
            <ul>
              <li>
                <strong>Google Search Console:</strong> Image search impressions and clicks
              </li>
              <li>
                <strong>Page speed tools:</strong> LCP, CLS, and overall performance
              </li>
              <li>
                <strong>Analytics:</strong> Traffic from Google Images
              </li>
              <li>
                <strong>Rankings:</strong> Image search rankings for target keywords
              </li>
            </ul>

            <h3>Tools for Image SEO</h3>
            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h5 className="font-semibold mb-2">Google PageSpeed Insights</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Core Web Vitals analysis</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h5 className="font-semibold mb-2">Screaming Frog</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Image audit and analysis</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h5 className="font-semibold mb-2">GTmetrix</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Performance monitoring</p>
              </div>
            </div>

            <h2>Common Image SEO Mistakes</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">⚠️ Avoid These Mistakes</h3>
              <ul className="text-red-800 dark:text-red-200 space-y-2">
                <li>Using generic file names like "image1.jpg"</li>
                <li>Missing or poor alt text</li>
                <li>Oversized images that slow page loading</li>
                <li>Not using responsive images</li>
                <li>Ignoring image compression</li>
                <li>Duplicate alt text across multiple images</li>
              </ul>
            </div>

            <h2>Conclusion</h2>
            <p>
              Image SEO is a powerful but often overlooked aspect of search optimization. By implementing proper file
              naming, alt text, technical optimization, and structured data, you can significantly improve your search
              visibility and drive more organic traffic to your website.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Optimize Your Images for SEO</h3>
              <p className="text-indigo-100 mb-6">
                Convert and optimize your images with SEO-friendly formats and compression
              </p>
              <a
                href="/"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Start Optimizing
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">How long should alt text be for SEO?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Keep alt text under 125 characters. Screen readers typically cut off after this length, and it's long
                  enough to be descriptive without being verbose.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Do image file names really affect SEO?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, descriptive file names help search engines understand image content and can improve rankings in
                  image search results.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Should I use the same keyword in file name and alt text?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  It's okay to use related keywords, but avoid exact duplication. Use variations and synonyms to provide
                  more context to search engines.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">How do I optimize images for Google Images?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Focus on high-quality images, descriptive file names, detailed alt text, relevant surrounding content,
                  and fast loading speeds.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Can lazy loading hurt image SEO?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Modern lazy loading (using loading="lazy") is SEO-friendly. Avoid lazy loading above-the-fold images,
                  as this can hurt Core Web Vitals.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
