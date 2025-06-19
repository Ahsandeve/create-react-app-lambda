import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Monitor, Smartphone, Tablet, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Building Responsive Images: Best Practices for Modern Web | 2024 Guide",
  description:
    "Master responsive image techniques for optimal performance across all devices. Learn srcset, picture element, and modern optimization strategies.",
  keywords:
    "responsive images, srcset, picture element, web performance, mobile optimization, image optimization, responsive design, modern web development",
  openGraph: {
    title: "Building Responsive Images: Best Practices for Modern Web | 2024 Guide",
    description:
      "Master responsive image techniques for optimal performance across all devices. Learn srcset, picture element, and modern optimization strategies.",
    type: "article",
    publishedTime: "2024-02-05T10:00:00.000Z",
    authors: ["Advanced Image Converter Team"],
  },
}

export default function ResponsiveImagesGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span>February 5, 2024</span>
              <span>•</span>
              <span>20 min read</span>
              <span>•</span>
              <span>By Advanced Image Converter Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Responsive Images: Best Practices for Modern Web
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Master the art of responsive images. Learn how to deliver the perfect image for every 
              device, screen size, and network condition while maintaining optimal performance.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src="/placeholder.svg?height=400&width=800" 
              alt="Responsive images across different devices"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>The Responsive Images Challenge</h2>
            <p>
              In today's multi-device world, images must adapt to countless screen sizes, pixel densities, 
              and network conditions. A single image approach leads to poor performance on mobile devices 
              or pixelated displays on high-resolution screens. Responsive images solve this by delivering 
              the right image for each context.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8">
              <div className="flex items-start">
                <Monitor className="w-6 h-6 text-indigo-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Performance Impact</h3>
                  <p className="text-indigo-800">
                    Responsive images can reduce data usage by 40-70% on mobile devices while 
                    ensuring crisp display on high-resolution screens, dramatically improving 
                    both performance and user experience.
                  </p>
                </div>
              </div>
            </div>

            <h2>Understanding Responsive Image Fundamentals</h2>
            
            <h3>The Problems We're Solving</h3>
            <ul>
              <li><strong>Resolution Switching:</strong> Different image sizes for different screen sizes</li>
              <li><strong>Density Switching:</strong> Higher resolution images for high-DPI displays</li>
              <li><strong>Art Direction:</strong> Different crops or compositions for different contexts</li>
              <li><strong>Format Selection:</strong> Modern formats with fallbacks for older browsers</li>
              <li><strong>Performance Optimization:</strong> Faster loading and reduced bandwidth usage</li>
            </ul>

            <h3>Key Concepts</h3>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <Smartphone className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold mb-2">Viewport Width</h4>
                  <p className="text-sm">The visible area of a web page on the user's device, measured in CSS pixels.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Tablet className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="font-semibold mb-2">Device Pixel Ratio</h4>
                  <p className="text-sm">The ratio between physical pixels and CSS pixels on a device.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Monitor className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="font-semibold mb-2">Intrinsic Size</h4>
                  <p className="text-sm">The actual dimensions of an image file in pixels.</p>
                </CardContent>
              </Card>
            </div>

            <h2>The srcset Attribute</h2>
            
            <h3>Basic srcset Syntax</h3>
            <p>
              The srcset attribute allows you to specify multiple image sources for different conditions:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Width-based srcset:</h5>
              <pre className="text-sm overflow-x-auto">
{`<img src="image-400.jpg"
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w,
             image-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
     alt="Responsive image example">`}
              </pre>
            </div>

            <h3>Density-based srcset</h3>
            <p>
              For high-DPI displays, use density descriptors:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Density-based srcset:</h5>
              <pre className="text-sm overflow-x-auto">
{`<img src="image.jpg"
     srcset="image.jpg 1x,
             image-2x.jpg 2x,
             image-3x.jpg 3x"
     alt="High-DPI responsive image">`}
              </pre>
            </div>

            <h3>The sizes Attribute</h3>
            <p>
              The sizes attribute tells the browser how much space the image will occupy:
            </p>
            <ul>
              <li><strong>Media Conditions:</strong> CSS media query conditions</li>
              <li><strong>Length Values:</strong> How much space the image takes up</li>
              <li><strong>Viewport Units:</strong> vw, vh, vmin, vmax</li>
              <li><strong>Default Size:</strong> The last value without a media condition</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <div className="flex items-start">
                <Zap className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Tip</h3>
                  <p className="text-blue-800">
                    The browser uses srcset and sizes to choose the best image before downloading. 
                    Make sure your sizes attribute accurately reflects your CSS layout.
                  </p>
                </div>
              </div>
            </div>

            <h2>The Picture Element</h2>
            
            <h3>Art Direction with Picture</h3>
            <p>
              The picture element provides full control over which image is displayed:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Art Direction Example:</h5>
              <pre className="text-sm overflow-x-auto">
{`<picture>
  <source media="(max-width: 600px)"
          srcset="image-mobile-400.jpg 400w,
                  image-mobile-800.jpg 800w"
          sizes="100vw">
  <source media="(max-width: 1200px)"
          srcset="image-tablet-600.jpg 600w,
                  image-tablet-1200.jpg 1200w"
          sizes="100vw">
  <img src="image-desktop-1600.jpg"
       srcset="image-desktop-1600.jpg 1600w,
               image-desktop-3200.jpg 3200w"
       sizes="100vw"
       alt="Responsive image with art direction">
</picture>`}
              </pre>
            </div>

            <h3>Format Selection with Picture</h3>
            <p>
              Use picture to provide modern formats with fallbacks:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Format Selection Example:</h5>
              <pre className="text-sm overflow-x-auto">
{`<picture>
  <source type="image/avif"
          srcset="image.avif 1x, image-2x.avif 2x">
  <source type="image/webp"
          srcset="image.webp 1x, image-2x.webp 2x">
  <img src="image.jpg"
       srcset="image.jpg 1x, image-2x.jpg 2x"
       alt="Modern format with fallbacks">
</picture>`}
              </pre>
            </div>

            <h2>Creating Responsive Image Sets</h2>
            
            <h3>Planning Your Image Sizes</h3>
            <p>
              Determine the right image sizes based on your design and common device sizes:
            </p>

            <h4>Common Breakpoints</h4>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left">Device Category</th>
                    <th className="border border-gray-300 p-3 text-left">Viewport Width</th>
                    <th className="border border-gray-300 p-3 text-left">Recommended Image Width</th>
                    <th className="border border-gray-300 p-3 text-left">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Mobile Portrait</td>
                    <td className="border border-gray-300 p-3">320-480px</td>
                    <td className="border border-gray-300 p-3">400-600px</td>
                    <td className="border border-gray-300 p-3">Full-width images</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Mobile Landscape</td>
                    <td className="border border-gray-300 p-3">480-768px</td>
                    <td className="border border-gray-300 p-3">600-900px</td>
                    <td className="border border-gray-300 p-3">Full-width images</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Tablet</td>
                    <td className="border border-gray-300 p-3">768-1024px</td>
                    <td className="border border-gray-300 p-3">800-1200px</td>
                    <td className="border border-gray-300 p-3">Content images</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Desktop</td>
                    <td className="border border-gray-300 p-3">1024px+</td>
                    <td className="border border-gray-300 p-3">1200-1920px</td>
                    <td className="border border-gray-300 p-3">Hero images</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Image Generation Workflow</h3>
            <p>
              Create a systematic approach to generating responsive image sets:
            </p>
            <ol>
              <li><strong>Start with High Resolution:</strong> Begin with the largest size you'll need</li>
              <li><strong>Calculate Sizes:</strong> Determine all required sizes based on breakpoints</li>
              <li><strong>Batch Resize:</strong> Use tools to generate all sizes automatically</li>
              <li><strong>Optimize Each Size:</strong> Apply appropriate compression for each size</li>
              <li><strong>Generate Multiple Formats:</strong> Create WebP, AVIF versions</li>
              <li><strong>Test and Validate:</strong> Verify images work across devices</li>
            </ol>

            <h2>Advanced Responsive Image Techniques</h2>
            
            <h3>Lazy Loading</h3>
            <p>
              Improve performance by loading images only when needed:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Native Lazy Loading:</h5>
              <pre className="text-sm overflow-x-auto">
{`<img src="image-400.jpg"
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 50vw"
     loading="lazy"
     alt="Lazy loaded responsive image">`}
              </pre>
            </div>

            <h3>Intersection Observer API</h3>
            <p>
              For more control over lazy loading behavior:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">JavaScript Lazy Loading:</h5>
              <pre className="text-sm overflow-x-auto">
{`const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.srcset = img.dataset.srcset;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});`}
              </pre>
            </div>

            <h3>Progressive Enhancement</h3>
            <p>
              Build responsive images that work even when JavaScript fails:
            </p>
            <ul>
              <li><strong>Fallback Images:</strong> Always provide a src attribute</li>
              <li><strong>No-JS Support:</strong> Ensure basic functionality without JavaScript</li>
              <li><strong>Graceful Degradation:</strong> Enhanced features for capable browsers</li>
              <li><strong>Performance Budget:</strong> Set limits for image sizes and formats</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <div className="flex items-start">
                <Smartphone className="w-6 h-6 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Mobile-First Approach</h3>
                  <p className="text-green-800">
                    Design your responsive image strategy mobile-first. Start with the smallest, 
                    most optimized images and enhance for larger screens and better connections.
                  </p>
                </div>
              </div>
            </div>

            <h2>Tools and Automation</h2>
            
            <h3>Build Tools Integration</h3>
            
            <h4>Webpack and Image Processing</h4>
            <p>
              Automate responsive image generation in your build process:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Webpack Configuration:</h5>
              <pre className="text-sm overflow-x-auto">
{`const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              sizes: [400, 800, 1200, 1600],
              placeholder: true,
              quality: 85,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.sharpMinify,
        options: {
          encodeOptions: {
            jpeg: { quality: 85 },
            webp: { quality: 85 },
            avif: { quality: 85 },
          },
        },
      },
    }),
  ],
};`}
              </pre>
            </div>

            <h4>Next.js Image Optimization</h4>
            <p>
              Next.js provides built-in responsive image optimization:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Next.js Image Component:</h5>
              <pre className="text-sm overflow-x-auto">
{`import Image from 'next/image';

function ResponsiveImage() {
  return (
    <Image
      src="/hero-image.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
    />
  );
}`}
              </pre>
            </div>

            <h3>Content Management Systems</h3>
            
            <h4>WordPress Responsive Images</h4>
            <p>
              WordPress automatically generates responsive images:
            </p>
            <ul>
              <li><strong>Automatic srcset:</strong> Generated for uploaded images</li>
              <li><strong>Custom Image Sizes:</strong> Define additional breakpoints</li>
              <li><strong>WebP Support:</strong> Plugins for modern format delivery</li>
              <li><strong>Lazy Loading:</strong> Built-in lazy loading support</li>
            </ul>

            <h4>Headless CMS Solutions</h4>
            <p>
              Modern headless CMS platforms offer responsive image APIs:
            </p>
            <ul>
              <li><strong>Contentful:</strong> Dynamic image resizing and optimization</li>
              <li><strong>Strapi:</strong> Image transformation plugins</li>
              <li><strong>Sanity:</strong> Real-time image processing</li>
              <li><strong>Cloudinary:</strong> Comprehensive image management</li>
            </ul>

            <h2>Performance Optimization Strategies</h2>
            
            <h3>Critical Path Optimization</h3>
            <p>
              Optimize images in the critical rendering path:
            </p>
            <ul>
              <li><strong>Above-the-fold Images:</strong> Prioritize visible images</li>
              <li><strong>Preload Critical Images:</strong> Use link rel="preload" for hero images</li>
              <li><strong>Inline Critical Images:</strong> Consider data URIs for small, critical images</li>
              <li><strong>Defer Non-critical Images:</strong> Lazy load below-the-fold content</li>
            </ul>

            <h3>Network-Aware Loading</h3>
            <p>
              Adapt image delivery based on network conditions:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Network API Example:</h5>
              <pre className="text-sm overflow-x-auto">
{`function getImageQuality() {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return 'low';
    } else if (connection.effectiveType === '3g') {
      return 'medium';
    }
  }
  return 'high';
}

function loadResponsiveImage(img) {
  const quality = getImageQuality();
  const srcset = img.dataset[quality + 'Srcset'];
  if (srcset) {
    img.srcset = srcset;
  }
}`}
              </pre>
            </div>

            <h3>Caching Strategies</h3>
            <p>
              Implement effective caching for responsive images:
            </p>
            <ul>
              <li><strong>Browser Caching:</strong> Set appropriate cache headers</li>
              <li><strong>CDN Caching:</strong> Use CDNs for global image delivery</li>
              <li><strong>Service Worker Caching:</strong> Cache images for offline use</li>
              <li><strong>Adaptive Caching:</strong> Cache based on device capabilities</li>
            </ul>

            <h2>Testing and Validation</h2>
            
            <h3>Cross-Device Testing</h3>
            <p>
              Ensure responsive images work across all target devices:
            </p>
            <ul>
              <li><strong>Device Testing:</strong> Test on real devices when possible</li>
              <li><strong>Browser DevTools:</strong> Use device emulation for quick testing</li>
              <li><strong>Online Testing Tools:</strong> Services like BrowserStack</li>
              <li><strong>Performance Testing:</strong> Measure loading times across devices</li>
            </ul>

            <h3>Automated Testing</h3>
            <p>
              Set up automated tests for responsive image functionality:
            </p>
            <div className="bg-gray-100 p-\
