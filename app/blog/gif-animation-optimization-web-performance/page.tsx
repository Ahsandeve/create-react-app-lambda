import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GIF Animation Optimization: Reduce Size by 80% | Advanced Image Converter",
  description:
    "Master GIF optimization techniques to reduce file sizes by up to 80%. Learn frame reduction, color optimization, and modern alternatives like WebP.",
  keywords:
    "GIF optimization, animation compression, web performance, file size reduction, animated images, WebP animation",
  openGraph: {
    title: "GIF Animation Optimization: Reduce Size by 80%",
    description: "Learn professional techniques to optimize GIF animations for web performance.",
    type: "article",
    publishedTime: "2024-01-25T10:00:00.000Z",
    authors: ["Emma Thompson"],
  },
}

export default function GIFOptimizationGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 mb-4">
              Animation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              GIF Animation Optimization: Reduce Size by 80%
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <img src="/placeholder-user.jpg" alt="Emma Thompson" className="w-8 h-8 rounded-full" />
                <span>Emma Thompson</span>
              </div>
              <time dateTime="2024-01-25">January 25, 2024</time>
              <span>10 min read</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              GIF animations can be massive files that slow down your website. With the right optimization techniques,
              you can reduce GIF file sizes by up to 80% while maintaining visual quality and smooth animation.
            </p>

            <h2>Understanding GIF Structure</h2>
            <p>
              GIF (Graphics Interchange Format) animations consist of multiple frames with specific characteristics:
            </p>
            <ul>
              <li>
                <strong>Frame count:</strong> More frames = larger file size
              </li>
              <li>
                <strong>Dimensions:</strong> Resolution directly impacts file size
              </li>
              <li>
                <strong>Color palette:</strong> Limited to 256 colors per frame
              </li>
              <li>
                <strong>Frame timing:</strong> Delay between frames affects smoothness
              </li>
            </ul>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">💡 Quick Tip</h3>
              <p className="text-green-800 dark:text-green-200 mb-0">
                Consider using modern formats like WebP or AVIF for animations - they can be 30-50% smaller than
                optimized GIFs with better quality.
              </p>
            </div>

            <h2>Frame Optimization Techniques</h2>

            <h3>1. Frame Reduction</h3>
            <p>Remove unnecessary frames while maintaining smooth motion:</p>
            <ul>
              <li>Identify key frames that define the motion</li>
              <li>Remove duplicate or near-duplicate frames</li>
              <li>Use consistent frame timing (avoid random delays)</li>
              <li>Consider 12-15 FPS instead of 24+ FPS</li>
            </ul>

            <h3>2. Dimension Optimization</h3>
            <p>Reduce dimensions strategically:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`Original: 800x600 = 480,000 pixels per frame
Optimized: 400x300 = 120,000 pixels per frame
File size reduction: ~75% (before compression)`}</code>
              </pre>
            </div>

            <h3>3. Color Palette Reduction</h3>
            <p>Optimize the color palette for each frame:</p>
            <ul>
              <li>Use global palette when possible</li>
              <li>Reduce colors from 256 to 128, 64, or 32</li>
              <li>Apply dithering to maintain quality</li>
              <li>Remove unused colors from palette</li>
            </ul>

            <h2>Advanced Compression Methods</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3">Delta Compression</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Only store changed pixels between frames</p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  <code>Savings: 30-60% for static backgrounds</code>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3">LZW Optimization</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Optimize the compression algorithm settings</p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  <code>Best for: Patterns and solid colors</code>
                </div>
              </div>
            </div>

            <h2>Optimization Tools Comparison</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Tool</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Platform</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Compression Ratio</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">GIMP</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Desktop</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Good (50-70%)</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Free</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Photoshop</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Desktop</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Excellent (60-80%)</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">$20/month</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">EZGIF</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Web</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Good (40-60%)</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Free</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">GIFsicle</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Command Line</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Very Good (55-75%)</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Step-by-Step Optimization Process</h2>

            <h3>Phase 1: Preparation</h3>
            <ol>
              <li>
                <strong>Analyze the source:</strong> Check original dimensions and frame count
              </li>
              <li>
                <strong>Define requirements:</strong> Determine acceptable quality vs. file size trade-off
              </li>
              <li>
                <strong>Choose dimensions:</strong> Calculate optimal size for use case
              </li>
            </ol>

            <h3>Phase 2: Frame Optimization</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`// Using GIFsicle command line
gifsicle -O3 --lossy=80 --colors=64 --resize-width=400 input.gif > output.gif

Options explained:
-O3: Maximum optimization
--lossy=80: Allow 20% quality loss
--colors=64: Reduce to 64 colors
--resize-width=400: Resize to 400px width`}</code>
              </pre>
            </div>

            <h3>Phase 3: Quality Check</h3>
            <ul>
              <li>Compare file sizes (aim for 70-80% reduction)</li>
              <li>Check animation smoothness</li>
              <li>Verify visual quality meets requirements</li>
              <li>Test loading performance on slow connections</li>
            </ul>

            <h2>Modern Alternatives to GIF</h2>

            <h3>WebP Animation</h3>
            <p>WebP animations offer superior compression:</p>
            <ul>
              <li>30-50% smaller than optimized GIFs</li>
              <li>True color support (not limited to 256 colors)</li>
              <li>Better compression algorithms</li>
              <li>Supported by all modern browsers</li>
            </ul>

            <h3>AVIF Animation</h3>
            <p>Next-generation format with exceptional compression:</p>
            <ul>
              <li>Up to 50% smaller than WebP</li>
              <li>HDR support</li>
              <li>Excellent quality at low bitrates</li>
              <li>Growing browser support</li>
            </ul>

            <h3>Implementation Strategy</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<picture>
  <source srcset="animation.avif" type="image/avif">
  <source srcset="animation.webp" type="image/webp">
  <img src="animation.gif" alt="Animation description">
</picture>`}</code>
              </pre>
            </div>

            <h2>Performance Considerations</h2>

            <h3>Loading Strategies</h3>
            <ul>
              <li>
                <strong>Lazy loading:</strong> Load animations when visible
              </li>
              <li>
                <strong>Intersection Observer:</strong> Start animation on viewport entry
              </li>
              <li>
                <strong>Preload critical animations:</strong> Use resource hints
              </li>
              <li>
                <strong>Reduce motion:</strong> Respect user preferences
              </li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">Accessibility Note</h4>
              <p className="text-blue-800 dark:text-blue-200 mb-0">
                Always provide controls to pause animations and respect the prefers-reduced-motion CSS media query for
                users with vestibular disorders.
              </p>
            </div>

            <h2>Common Optimization Mistakes</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">⚠️ Avoid These Pitfalls</h3>
              <ul className="text-red-800 dark:text-red-200 space-y-2">
                <li>Over-optimizing and losing essential visual elements</li>
                <li>Not testing across different devices and connections</li>
                <li>Ignoring modern format alternatives</li>
                <li>Creating animations that are too fast or too slow</li>
                <li>Not considering accessibility requirements</li>
              </ul>
            </div>

            <h2>Conclusion</h2>
            <p>
              GIF optimization is crucial for web performance, but consider modern alternatives like WebP and AVIF for
              new projects. The key is finding the right balance between file size, quality, and browser support for
              your specific use case.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-xl my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Optimize Your Animations</h3>
              <p className="text-green-100 mb-6">
                Convert your GIFs to modern formats like WebP and AVIF for better performance
              </p>
              <a
                href="/"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
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
                <h3 className="text-lg font-semibold mb-2">What's the ideal GIF file size for web use?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Aim for under 1MB for web use, with 500KB being ideal. Larger files significantly impact page load
                  times and user experience.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Should I replace all GIFs with WebP animations?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use the picture element with fallbacks. Serve WebP to supporting browsers and GIF to older browsers
                  for maximum compatibility.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">How many frames should a GIF animation have?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Keep it under 30 frames for most use cases. More frames dramatically increase file size. Focus on
                  essential keyframes for smooth motion.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Can I optimize GIFs without losing quality?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Some quality loss is inevitable for significant size reduction. Focus on optimizations that don't
                  affect the animation's core message or function.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">What's the best dimension for social media GIFs?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Square (500x500) or landscape (500x281) work well for most platforms. Each platform has specific
                  requirements, so check their guidelines.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
