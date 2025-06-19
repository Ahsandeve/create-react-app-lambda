import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Zap, AlertTriangle, Smartphone, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "GIF Animations: Web Performance Optimization Guide 2024 | Advanced Image Converter",
  description:
    "Optimize GIF animations for web performance. Learn compression techniques, alternatives like WebP and MP4, and best practices for fast-loading animated content.",
  keywords: [
    "GIF optimization",
    "animated GIF",
    "web performance",
    "GIF compression",
    "WebP animation",
    "video alternatives",
  ],
  openGraph: {
    title: "GIF Animations: Web Performance Optimization Guide",
    description: "Complete guide to optimizing GIF animations for better web performance and user experience.",
    type: "article",
  },
}

export default function GIFOptimizationGuide() {
  const baseName = "animation"
  const loadStaticVersion = () => {
    // Implementation for loading static version
  }
  const loadAnimation = () => {
    // Implementation for loading animation
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              GIF Animations: Web Performance Optimization Guide 2024
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>Published on December 10, 2024</span>
              <span className="mx-2">•</span>
              <span>By Alex Rodriguez</span>
              <span className="mx-2">•</span>
              <span>14 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              GIF animations can significantly impact web performance. Learn advanced optimization techniques and modern alternatives to deliver engaging animations without sacrificing speed.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Play className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Performance Impact</h3>
                    <p className="text-gray-700">
                      Unoptimized GIF animations can be 5-10x larger than equivalent video formats, causing slow page loads and poor user experience. This guide shows you how to fix that.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">The GIF Performance Problem</h2>
            <p>
              GIF animations remain popular for their universal support and simplicity, but they come with significant performance costs. A typical 3-second animated GIF can easily exceed 2MB, while an equivalent MP4 video might be under 200KB.
            </p>

            <Card className="my-8 bg-red-50 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-red-800">Performance Impact Statistics</h3>
                    <ul className="space-y-2 text-red-700">
                      <li>• Average GIF size: 2-8MB for 3-5 second animations</li>
                      <li>• Page load time increase: 3-7 seconds on mobile</li>
                      <li>• Bounce rate increase: 32% for every additional second</li>
                      <li>• Mobile data consumption: Significant on limited plans</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Why GIFs Are So Large</h3>
            <ul className="space-y-3">
              <li><strong>Lossless Compression:</strong> GIF uses LZW compression which is less efficient than modern codecs</li>
              <li><strong>Limited Color Palette:</strong> 256 colors maximum leads to dithering in complex images</li>
              <li><strong>Frame-by-Frame Storage:</strong> Each frame stored separately without inter-frame compression</li>
              <li><strong>No Motion Compensation:</strong> Unlike video formats, GIF doesn't optimize for motion between frames</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">GIF Optimization Techniques</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Reduce Dimensions and Frame Rate</h3>
            <p>
              The most effective way to reduce GIF size is to optimize the source parameters:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Dimension Guidelines</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Desktop: Max 800px width</li>
                    <li>• Mobile: Max 400px width</li>
                    <li>• Social media: Platform-specific limits</li>
                    <li>• Email: Max 600px width</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Frame Rate Optimization</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Standard: 10-15 FPS</li>
                    <li>• Smooth motion: 20-24 FPS</li>
                    <li>• Simple animations: 6-8 FPS</li>
                    <li>• Loading spinners: 8-12 FPS</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Color Palette Optimization</h3>
            <p>
              Reducing the color palette significantly decreases file size:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Colors</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">File Size Impact</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Best Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">256 (Max)</td>
                    <td className="border border-gray-300 px-4 py-2">Largest</td>
                    <td className="border border-gray-300 px-4 py-2">Complex illustrations</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">128</td>
                    <td className="border border-gray-300 px-4 py-2">-25%</td>
                    <td className="border border-gray-300 px-4 py-2">Most animations</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">64</td>
                    <td className="border border-gray-300 px-4 py-2">-50%</td>
                    <td className="border border-gray-300 px-4 py-2">Simple graphics</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">32</td>
                    <td className="border border-gray-300 px-4 py-2">-75%</td>
                    <td className="border border-gray-300 px-4 py-2">Basic icons</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Advanced Compression Tools</h3>
            
            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Gifsicle</h4>
                  <p className="text-sm text-gray-600 mb-2">Command-line GIF optimizer</p>
                  <ul className="text-xs space-y-1">
                    <li>• Lossless optimization</li>
                    <li>• Frame deduplication</li>
                    <li>• Color reduction</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">ImageOptim</h4>
                  <p className="text-sm text-gray-600 mb-2">Mac GUI application</p>
                  <ul className="text-xs space-y-1">
                    <li>• Drag-and-drop interface</li>
                    <li>• Batch processing</li>
                    <li>• Multiple formats</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Online Tools</h4>
                  <p className="text-sm text-gray-600 mb-2">Web-based compressors</p>
                  <ul className="text-xs space-y-1">
                    <li>• No installation required</li>
                    <li>• Instant results</li>
                    <li>• Preview comparisons</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Modern Alternatives to GIF</h2>

            <Card className="my-8 bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-green-800">Better Alternatives Available</h3>
                    <p className="text-green-700">
                      Modern formats like WebP, AVIF, and MP4 can deliver the same visual experience with 70-90% smaller file sizes and better quality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Animated WebP</h3>
            <p>
              WebP supports animation with superior compression compared to GIF:
            </p>
            <ul className="space-y-2 mt-4">
              <li><strong>File Size:</strong> 70-80% smaller than equivalent GIF</li>
              <li><strong>Quality:</strong> Better color depth and compression</li>
              <li><strong>Support:</strong> 95%+ modern browser support</li>
              <li><strong>Transparency:</strong> Full alpha channel support</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. MP4 Video as GIF Replacement</h3>
            <p>
              Short MP4 videos can replace GIFs with dramatically better performance:
            </p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto"><code>{`<!-- GIF replacement with MP4 -->
<video autoplay muted loop playsinline width="400" height="300">
  <source src="animation.mp4" type="video/mp4">
  <img src="fallback.gif" alt="Animation fallback">
</video>

/* CSS for responsive video */
.gif-replacement {
  width: 100%;
  height: auto;
  max-width: 400px;
}`}</code></pre>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. CSS Animations</h3>
            <p>
              For simple animations, CSS can completely replace GIFs:
            </p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto"><code>{`/* Loading spinner CSS animation */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Pulsing effect */
.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}`}</code></pre>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Progressive Enhancement Strategy</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Format Detection and Fallbacks</h3>
            <p>
              Implement a progressive enhancement approach to serve the best format for each browser:
            </p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto"><code>{`<!-- Picture element with multiple formats -->
<picture>
  <source srcset="animation.avif" type="image/avif">
  <source srcset="animation.webp" type="image/webp">
  <img src="animation.gif" alt="Animated illustration" loading="lazy">
</picture>

/* JavaScript feature detection */
function loadOptimalAnimation() {
  if (supportsWebP()) {
    return 'animation.webp';
  }
  return 'animation.gif';
}

function supportsWebP() {
  return document.createElement('canvas')
    .toDataURL('image/webp').indexOf('data:image/webp') === 0;
}`}</code></pre>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Lazy Loading Implementation</h3>
            <p>
              Defer loading of animations until they're needed to improve initial page performance:
            </p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto"><code>{`/* Intersection Observer for lazy loading */
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animation = entry.target;
      animation.src = animation.dataset.src;
      animationObserver.unobserve(animation);
    }
  });
});

document.querySelectorAll('[data-src]').forEach(img => {
  animationObserver.observe(img);
});`}</code></pre>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Mobile-First Optimization</h2>

            <Card className="my-8 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Smartphone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-800">Mobile Considerations</h3>
                    <p className="text-blue-700">
                      Mobile users are particularly sensitive to large animations due to slower connections and limited data plans. Optimize specifically for mobile experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Connection-Aware Loading</h3>
            <p>
              Use the Network Information API to adapt animation quality based on connection speed:
            </p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto"><code>{`/* Connection-aware animation loading */
function getAnimationSrc(baseName) {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (connection) {
    if (connection.effectiveType === '4g') {
      return `${baseName}-hq.webp`; // High quality\
    } else if (connection.effectiveType === '3g') {
      return `${baseName}-mq.webp\`; // Medium quality
    }
  }
  
  return `${baseName}-lq.gif`; // Low quality fallback
}

// Respect user's data preferences
if (navigator.connection && navigator.connection.saveData) {
  // Serve static image instead of animation
  loadStaticVersion();
} else {
  loadAnimation();
}\`}</code></pre>\
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Reduced Motion Accessibility</h3>
            <p>
              Respect user preferences for reduced motion:
            </p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto"><code>{`/* CSS for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animated-content {
    animation: none;
  }
  
  .gif-container video {
    display: none;
  }
  
  .gif-container .static-fallback {
    display: block;
  }
}

/* JavaScript implementation */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Load static image instead of animation
  document.querySelectorAll('.animation').forEach(el => {
    el.src = el.dataset.static;
  });
}`}</code></pre>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Performance Monitoring</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Key Metrics to Track</h3>
            <ul className="space-y-3">
              <li><strong>Largest Contentful Paint (LCP):</strong> Impact of large animations</li>
              <li><strong>First Input Delay (FID):</strong> Rendering performance during animation</li>
              <li><strong>Cumulative Layout Shift (CLS):</strong> Layout stability with animations</li>
              <li><strong>Total Blocking Time (TBT):</strong> Main thread blocking during load</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Testing Tools</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Lighthouse Audits</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Performance scoring</li>
                    <li>• Optimization suggestions</li>
                    <li>• Mobile-specific insights</li>
                    <li>• Accessibility checks</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">WebPageTest</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Real device testing</li>
                    <li>• Connection simulation</li>
                    <li>• Waterfall analysis</li>
                    <li>• Video playback</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Implementation Checklist</h2>

            <Card className="my-8 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Pre-Optimization</h3>
                <ul className="space-y-2">
                  <li>☐ Audit current GIF usage and sizes</li>
                  <li>☐ Identify conversion candidates</li>
                  <li>☐ Establish performance budget</li>
                  <li>☐ Set up monitoring tools</li>
                </ul>

                <h3 className="font-semibold text-lg mb-4 mt-6">Optimization Phase</h3>
                <ul className="space-y-2">
                  <li>☐ Reduce dimensions and frame rate</li>
                  <li>☐ Optimize color palettes</li>
                  <li>☐ Convert to modern formats</li>
                  <li>☐ Implement lazy loading</li>
                  <li>☐ Add fallbacks for older browsers</li>
                </ul>

                <h3 className="font-semibold text-lg mb-4 mt-6">Testing & Deployment</h3>
                <ul className="space-y-2">
                  <li>☐ Test across devices and connections</li>
                  <li>☐ Verify accessibility compliance</li>
                  <li>☐ Monitor performance impact</li>
                  <li>☐ Gather user feedback</li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg my-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Optimize Your Animations Today</h2>
                <p className="mb-6">
                  Convert your GIFs to modern formats and implement performance optimizations with our advanced animation tools.
                </p>
                <Link href="/" className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  <Download className="w-5 h-5 mr-2" />
                  Start Optimizing
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Should I completely replace all GIFs on my website?</h3>
                  <p className="text-gray-700">
                    Not necessarily. Focus on large, performance-impacting GIFs first. Small, simple GIFs (under 100KB) may not warrant replacement, especially if they're not in critical loading paths.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What's the best alternative to GIF for social media?</h3>
                  <p className="text-gray-700">
                    MP4 videos are ideal for social media as most platforms support them and automatically optimize playback. For web use, animated WebP provides the best balance of quality and file size.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How much can I expect to reduce file sizes?</h3>
                  <p className="text-gray-700">
                    Typical reductions: WebP (70-80%), MP4 (80-90%), optimized GIF (30-50%). Results vary based on content complexity, duration, and original quality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Do animated WebP files work in all browsers?</h3>
                  <p className="text-gray-700">
                    Animated WebP has 95%+ browser support including Chrome, Firefox, Safari, and Edge. Always provide GIF fallbacks for older browsers using the picture element.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can I use CSS animations instead of image animations?</h3>
                  <p className="text-gray-700">
                    CSS animations are perfect for simple effects like loading spinners, hover states, and basic transitions. They're lightweight and performant but limited to geometric shapes and simple effects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
