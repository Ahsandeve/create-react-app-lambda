import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SVG Optimization Guide: Boost Web Performance by 60% | Advanced Image Converter",
  description:
    "Master SVG optimization techniques to reduce file sizes by up to 60%. Learn advanced compression methods, code optimization, and best practices for web performance.",
  keywords:
    "SVG optimization, vector graphics, web performance, file size reduction, SVG compression, scalable vector graphics, web development",
  openGraph: {
    title: "SVG Optimization Guide: Boost Web Performance by 60%",
    description:
      "Master SVG optimization techniques to reduce file sizes by up to 60%. Learn advanced compression methods and best practices.",
    type: "article",
    publishedTime: "2024-01-15T10:00:00.000Z",
    authors: ["Sarah Chen"],
  },
}

export default function SVGOptimizationGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 mb-4">
              Vector Graphics
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              SVG Optimization Guide: Boost Web Performance by 60%
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <img src="/placeholder-user.jpg" alt="Sarah Chen" className="w-8 h-8 rounded-full" />
                <span>Sarah Chen</span>
              </div>
              <time dateTime="2024-01-15">January 15, 2024</time>
              <span>12 min read</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="SVG optimization techniques comparison"
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              SVG files can be surprisingly large, but with the right optimization techniques, you can reduce their size
              by up to 60% without losing quality. This comprehensive guide covers everything from basic compression to
              advanced optimization strategies.
            </p>

            <h2>Understanding SVG File Structure</h2>
            <p>
              Scalable Vector Graphics (SVG) are XML-based vector graphics that can contain various elements
              contributing to file size:
            </p>
            <ul>
              <li>
                <strong>Path data:</strong> The actual vector information
              </li>
              <li>
                <strong>Metadata:</strong> Creator information, timestamps, and comments
              </li>
              <li>
                <strong>Unused elements:</strong> Hidden layers and unnecessary groups
              </li>
              <li>
                <strong>Inefficient code:</strong> Redundant attributes and verbose syntax
              </li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Pro Tip</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-0">
                Before optimizing, always keep a backup of your original SVG files. Some optimization processes are
                irreversible.
              </p>
            </div>

            <h2>Manual SVG Optimization Techniques</h2>

            <h3>1. Remove Unnecessary Metadata</h3>
            <p>Most SVG files contain metadata that adds unnecessary bulk:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<!-- Remove this metadata -->
<metadata>
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <!-- Extensive metadata -->
  </rdf:RDF>
</metadata>`}</code>
              </pre>
            </div>

            <h3>2. Simplify Path Data</h3>
            <p>Optimize path commands for smaller file sizes:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<!-- Before: Verbose path -->
<path d="M 10 10 L 20 10 L 20 20 L 10 20 Z"/>

<!-- After: Simplified path -->
<path d="M10 10h10v10H10z"/>`}</code>
              </pre>
            </div>

            <h3>3. Remove Redundant Attributes</h3>
            <p>Eliminate default values and unused attributes:</p>
            <ul>
              <li>
                Remove <code>fill="black"</code> (default)
              </li>
              <li>
                Remove <code>stroke="none"</code> (default)
              </li>
              <li>Consolidate similar elements</li>
            </ul>

            <h2>Automated SVG Optimization Tools</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3">SVGO (Node.js)</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Command-line tool with extensive optimization plugins
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  <code>
                    npm install -g svgo
                    <br />
                    svgo input.svg -o output.svg
                  </code>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3">SVGOMG (Web-based)</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  User-friendly web interface for SVGO optimization
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  <code>Visit: jakearchibald.github.io/svgomg/</code>
                </div>
              </div>
            </div>

            <h2>Advanced Optimization Strategies</h2>

            <h3>CSS Integration</h3>
            <p>Move styling to external CSS for better caching:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`/* External CSS */
.icon-primary { fill: #3b82f6; }
.icon-secondary { fill: #64748b; }

<!-- SVG with classes -->
<path class="icon-primary" d="M10 10h10v10H10z"/>`}</code>
              </pre>
            </div>

            <h3>Symbol Reuse</h3>
            <p>Use SVG symbols for repeated elements:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
                <code>{`<svg>
  <defs>
    <symbol id="icon-star" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77"/>
    </symbol>
  </defs>
  <use href="#icon-star"/>
  <use href="#icon-star" x="30"/>
</svg>`}</code>
              </pre>
            </div>

            <h2>Performance Impact Comparison</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Optimization Level</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">File Size Reduction</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Load Time Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Basic (metadata removal)</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">15-25%</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">10-20%</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Intermediate (path optimization)
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">35-45%</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">25-35%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Advanced (full optimization)</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">50-60%</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">40-50%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Common Optimization Mistakes</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">⚠️ Avoid These Mistakes</h3>
              <ul className="text-red-800 dark:text-red-200 space-y-2">
                <li>Over-optimizing at the expense of editability</li>
                <li>Removing necessary accessibility attributes</li>
                <li>Breaking animations through aggressive optimization</li>
                <li>Not testing optimized files across browsers</li>
              </ul>
            </div>

            <h2>Browser Compatibility</h2>
            <p>Modern SVG optimization is well-supported across browsers, but consider:</p>
            <ul>
              <li>
                <strong>IE 11:</strong> Limited support for advanced SVG features
              </li>
              <li>
                <strong>Safari:</strong> Excellent SVG support with minor quirks
              </li>
              <li>
                <strong>Chrome/Firefox:</strong> Full support for all optimization techniques
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              SVG optimization is a critical skill for modern web development. By implementing these techniques, you can
              achieve significant performance improvements while maintaining visual quality. Start with automated tools
              like SVGO, then apply manual optimizations for maximum impact.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Images?</h3>
              <p className="text-blue-100 mb-6">Try our advanced image converter with built-in optimization features</p>
              <a
                href="/"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Converting Now
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Will SVG optimization affect image quality?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No, SVG optimization removes unnecessary code without affecting visual quality. Since SVGs are
                  vector-based, they maintain perfect quality at any size.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Can I reverse SVG optimization?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Some optimizations are irreversible, particularly metadata removal and path simplification. Always
                  keep backups of your original files.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">What's the best tool for SVG optimization?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  SVGO is the most comprehensive tool, available as a command-line utility or through the SVGOMG web
                  interface for easier use.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">How often should I optimize SVG files?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Optimize SVG files once during the final production stage, or whenever you notice performance issues.
                  Avoid repeated optimization cycles.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Do optimized SVGs work with animations?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, but be careful with optimization settings. Some aggressive optimizations might remove
                  animation-related attributes or IDs.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
