import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Code, Zap, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "SVG Vector Graphics for Web Development: Complete Guide 2024 | Advanced Image Converter",
  description:
    "Master SVG vector graphics for web development. Learn optimization techniques, accessibility features, animations, and best practices for scalable web graphics.",
  keywords: [
    "SVG graphics",
    "vector graphics",
    "web development",
    "scalable graphics",
    "SVG optimization",
    "responsive design",
  ],
  openGraph: {
    title: "SVG Vector Graphics for Web Development: Complete Guide",
    description: "Complete guide to using SVG vector graphics in web development with optimization and best practices.",
    type: "article",
  },
}

export default function SVGWebDevelopmentGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              SVG Vector Graphics for Web Development: Complete Guide 2024
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>Published on December 12, 2024</span>
              <span className="mx-2">•</span>
              <span>By Michael Chen</span>
              <span className="mx-2">•</span>
              <span>15 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              SVG (Scalable Vector Graphics) revolutionizes web graphics with infinite scalability, small file sizes,
              and interactive capabilities. Master SVG for modern web development.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Code className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What You'll Learn</h3>
                    <p className="text-gray-700">
                      This comprehensive guide covers SVG fundamentals, optimization techniques, accessibility features,
                      animations, and practical implementation strategies for modern web development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Why SVG Dominates Modern Web Graphics</h2>
            <p>
              SVG (Scalable Vector Graphics) has become the gold standard for web graphics, offering unmatched
              versatility and performance. Unlike raster images, SVG graphics scale infinitely without quality loss,
              making them perfect for responsive design and high-resolution displays.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-green-700">SVG Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Infinite scalability</li>
                    <li>✅ Small file sizes</li>
                    <li>✅ CSS styleable</li>
                    <li>✅ JavaScript interactive</li>
                    <li>✅ SEO friendly</li>
                    <li>✅ Accessibility support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-blue-700">Use Cases</h3>
                  <ul className="space-y-2 text-sm">
                    <li>🎨 Icons and logos</li>
                    <li>📊 Data visualizations</li>
                    <li>🎭 Illustrations</li>
                    <li>🎮 Interactive graphics</li>
                    <li>📱 Responsive layouts</li>
                    <li>🎬 Animations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">SVG Fundamentals</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Basic SVG Structure</h3>
            <p>Every SVG starts with the root element that defines the coordinate system and viewbox:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- SVG content goes here -->
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>`}</code>
                </pre>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Essential SVG Elements</h3>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Element</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Key Attributes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <code>&lt;rect&gt;</code>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Rectangles</td>
                    <td className="border border-gray-300 px-4 py-2">x, y, width, height, rx, ry</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <code>&lt;circle&gt;</code>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Circles</td>
                    <td className="border border-gray-300 px-4 py-2">cx, cy, r</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <code>&lt;path&gt;</code>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Complex shapes</td>
                    <td className="border border-gray-300 px-4 py-2">d (path data)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <code>&lt;text&gt;</code>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Text content</td>
                    <td className="border border-gray-300 px-4 py-2">x, y, font-family, font-size</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">SVG Integration Methods</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Inline SVG (Recommended)</h3>
            <p>Embedding SVG directly in HTML provides maximum control and performance:</p>

            <Card className="my-6 bg-green-50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Advantages:</h4>
                <ul className="space-y-2">
                  <li>• Full CSS and JavaScript control</li>
                  <li>• No additional HTTP requests</li>
                  <li>• Accessibility features work properly</li>
                  <li>• Easy to modify and animate</li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. External SVG Files</h3>
            <p>Linking to external SVG files enables caching and reusability:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`<!-- As image -->
<img src="icon.svg" alt="Logo" width="100" height="100">

<!-- As object -->
<object data="icon.svg" type="image/svg+xml" width="100" height="100"></object>

<!-- CSS background -->
.icon { background-image: url('icon.svg'); }`}</code>
                </pre>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Data URLs</h3>
            <p>Embedding SVG as data URLs eliminates HTTP requests while maintaining inline benefits:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`<img src="data:image/svg+xml;base64,[base64-encoded-svg]" alt="Icon">

/* CSS */
.icon {
  background-image: url("data:image/svg+xml,%3Csvg...%3E");
}`}</code>
                </pre>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">SVG Optimization Techniques</h2>

            <Card className="my-8 bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-yellow-800">Performance Impact</h3>
                    <p className="text-yellow-700">
                      Unoptimized SVG files can be 50-80% larger than necessary. Proper optimization techniques can
                      dramatically reduce file sizes while maintaining visual quality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Manual Optimization</h3>
            <ul className="space-y-3">
              <li>
                <strong>Remove unnecessary elements:</strong> Hidden layers, unused definitions
              </li>
              <li>
                <strong>Simplify paths:</strong> Reduce path complexity and point count
              </li>
              <li>
                <strong>Optimize coordinates:</strong> Round to appropriate decimal places
              </li>
              <li>
                <strong>Remove metadata:</strong> Creator information and comments
              </li>
              <li>
                <strong>Group similar elements:</strong> Use &lt;g&gt; elements efficiently
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Automated Tools</h3>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">SVGO</h4>
                  <p className="text-sm text-gray-600">Command-line tool for advanced SVG optimization</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">SVGOMG</h4>
                  <p className="text-sm text-gray-600">Web-based SVGO interface with live preview</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">ImageOptim</h4>
                  <p className="text-sm text-gray-600">Mac app for drag-and-drop optimization</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Responsive SVG Design</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">ViewBox and Scaling</h3>
            <p>The viewBox attribute is crucial for responsive SVG behavior:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`/* Responsive SVG */
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>

/* CSS for container */
.svg-container {
  width: 100%;
  max-width: 300px;
  height: auto;
}`}</code>
                </pre>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">CSS Media Queries</h3>
            <p>SVG elements can respond to media queries for adaptive design:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`<svg viewBox="0 0 200 100">
  <style>
    .mobile-text { display: none; }
    .desktop-text { display: block; }
    
    @media (max-width: 768px) {
      .mobile-text { display: block; }
      .desktop-text { display: none; }
    }
  </style>
  <text class="desktop-text" x="10" y="20">Full Description</text>
  <text class="mobile-text" x="10" y="20">Short</text>
</svg>`}</code>
                </pre>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">SVG Accessibility</h2>

            <Card className="my-8 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-800">Accessibility First</h3>
                    <p className="text-blue-700">
                      SVG graphics can be fully accessible when properly implemented. Screen readers can interpret SVG
                      content, making graphics inclusive for all users.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Essential Accessibility Features</h3>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`<svg role="img" aria-labelledby="chart-title" aria-describedby="chart-desc">
  <title id="chart-title">Sales Data Chart</title>
  <desc id="chart-desc">Bar chart showing quarterly sales from Q1 to Q4</desc>
  
  <!-- Chart content -->
  <rect x="10" y="10" width="30" height="60" fill="blue">
    <title>Q1: $50,000</title>
  </rect>
</svg>`}</code>
                </pre>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">ARIA Attributes</h3>
            <ul className="space-y-2">
              <li>
                <strong>role="img":</strong> Identifies SVG as an image
              </li>
              <li>
                <strong>aria-labelledby:</strong> References title element
              </li>
              <li>
                <strong>aria-describedby:</strong> References description element
              </li>
              <li>
                <strong>aria-hidden="true":</strong> Hides decorative SVGs
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">SVG Animation and Interactivity</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">CSS Animations</h3>
            <p>CSS provides powerful animation capabilities for SVG elements:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`/* Rotating icon */
.rotating-icon {
  animation: rotate 2s linear infinite;
  transform-origin: center;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Hover effects */
.interactive-shape:hover {
  fill: #ff6b6b;
  transform: scale(1.1);
  transition: all 0.3s ease;
}`}</code>
                </pre>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">JavaScript Interactivity</h3>
            <p>JavaScript enables dynamic SVG manipulation and complex interactions:</p>

            <Card className="my-6 bg-gray-50">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code>{`// Dynamic SVG manipulation
const circle = document.querySelector('#interactive-circle');

circle.addEventListener('click', function() {
  this.setAttribute('r', Math.random() * 50 + 10);
  this.setAttribute('fill', getRandomColor());
});

// SVG path animation
function animatePath(path, duration) {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  path.style.animation = \`draw \${duration}s ease-in-out forwards\`;
}`}</code>
                </pre>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mt-12 mb-6">Performance Best Practices</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Optimization Checklist</h3>
            <ul className="space-y-2">
              <li>✅ Remove unnecessary metadata and comments</li>
              <li>✅ Optimize path data and coordinates</li>
              <li>✅ Use appropriate precision (2-3 decimal places)</li>
              <li>✅ Minimize use of gradients and filters</li>
              <li>✅ Group related elements efficiently</li>
              <li>✅ Use symbols for repeated elements</li>
              <li>✅ Consider sprite sheets for multiple icons</li>
            </ul>

            <Card className="my-8 bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-red-800">Performance Pitfalls</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Over-complex paths with excessive points</li>
                  <li>• Unnecessary precision in coordinates</li>
                  <li>• Inline styles instead of CSS classes</li>
                  <li>• Large embedded base64 images</li>
                  <li>• Unoptimized filters and effects</li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">File Size Comparison</h3>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Icon Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">PNG (24x24)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">SVG Unoptimized</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">SVG Optimized</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Simple Icon</td>
                    <td className="border border-gray-300 px-4 py-2">1.2 KB</td>
                    <td className="border border-gray-300 px-4 py-2">2.1 KB</td>
                    <td className="border border-gray-300 px-4 py-2">0.8 KB</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Complex Icon</td>
                    <td className="border border-gray-300 px-4 py-2">3.5 KB</td>
                    <td className="border border-gray-300 px-4 py-2">5.2 KB</td>
                    <td className="border border-gray-300 px-4 py-2">2.1 KB</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Logo</td>
                    <td className="border border-gray-300 px-4 py-2">8.1 KB</td>
                    <td className="border border-gray-300 px-4 py-2">12.3 KB</td>
                    <td className="border border-gray-300 px-4 py-2">4.7 KB</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg my-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Optimize Your SVG Files Today</h2>
                <p className="mb-6">
                  Convert and optimize your vector graphics for perfect web performance with our advanced SVG processing
                  tools.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Start Optimizing
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">When should I use SVG instead of PNG or JPG?</h3>
                  <p className="text-gray-700">
                    Use SVG for logos, icons, simple illustrations, and graphics that need to scale across different
                    screen sizes. Use PNG/JPG for photographs and complex images with many colors.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How do I make SVG responsive?</h3>
                  <p className="text-gray-700">
                    Remove width and height attributes, use viewBox for the coordinate system, and apply CSS width: 100%
                    and height: auto to make SVG scale with its container.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can SVG be styled with CSS?</h3>
                  <p className="text-gray-700">
                    Yes, SVG elements can be styled with CSS using properties like fill, stroke, opacity, and
                    transforms. Inline SVG provides the most styling flexibility.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What's the difference between SVG and canvas?</h3>
                  <p className="text-gray-700">
                    SVG is vector-based, scalable, and maintains DOM structure (good for static graphics and
                    interactions). Canvas is raster-based, better for complex animations and pixel manipulation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How do I optimize SVG for better performance?</h3>
                  <p className="text-gray-700">
                    Use tools like SVGO to remove unnecessary data, simplify paths, optimize coordinates, group similar
                    elements, and remove unused definitions and metadata.
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
