import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Search, TrendingUp, Eye, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Image SEO Optimization: Complete Guide to Ranking Images in 2024",
  description:
    "Master image SEO with proven strategies to rank your images in Google Image Search. Learn alt text, file naming, structured data, and technical optimization.",
  keywords:
    "image SEO, Google Images, alt text optimization, image search ranking, visual search, image metadata, SEO best practices, search engine optimization",
  openGraph: {
    title: "Image SEO Optimization: Complete Guide to Ranking Images in 2024",
    description:
      "Master image SEO with proven strategies to rank your images in Google Image Search. Learn alt text, file naming, structured data, and technical optimization.",
    type: "article",
    publishedTime: "2024-02-10T10:00:00.000Z",
    authors: ["Advanced Image Converter Team"],
  },
}

export default function ImageSEOGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
              <span>February 10, 2024</span>
              <span>•</span>
              <span>22 min read</span>
              <span>•</span>
              <span>By Advanced Image Converter Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Image SEO Optimization: Complete Guide to Ranking Images in 2024
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlock the power of image SEO to drive traffic from Google Images. Master alt text, file optimization,
              structured data, and advanced techniques to rank your images at the top.
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Image SEO optimization strategies and ranking factors"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Why Image SEO Matters More Than Ever</h2>
            <p>
              Image search represents a massive opportunity that many websites overlook. Google Images receives over 1
              billion searches per month, and visual search is growing rapidly with the rise of mobile devices and
              AI-powered search features. Optimizing your images for search engines can drive significant traffic and
              improve your overall SEO performance.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8">
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-emerald-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-emerald-900 mb-2">Image Search Statistics</h3>
                  <p className="text-emerald-800">
                    Google Images drives 22.6% of all web searches, and 27% of searches across all major search engines
                    are for images. Visual content is 40x more likely to be shared on social media than other types of
                    content.
                  </p>
                </div>
              </div>
            </div>

            <h2>Understanding Image SEO Fundamentals</h2>

            <h3>How Search Engines See Images</h3>
            <p>
              Search engines can't "see" images the way humans do. They rely on various signals to understand image
              content:
            </p>
            <ul>
              <li>
                <strong>Alt Text:</strong> Primary description of image content
              </li>
              <li>
                <strong>File Names:</strong> Descriptive naming provides context
              </li>
              <li>
                <strong>Surrounding Text:</strong> Content around the image
              </li>
              <li>
                <strong>Image Captions:</strong> Visible descriptions near images
              </li>
              <li>
                <strong>Page Context:</strong> Overall page topic and relevance
              </li>
              <li>
                <strong>Structured Data:</strong> Machine-readable image information
              </li>
            </ul>

            <h3>Google's Image Ranking Factors</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <Search className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold mb-2">Content Relevance</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Image content matches search query</li>
                    <li>• Alt text accuracy and descriptiveness</li>
                    <li>• Contextual relevance to page content</li>
                    <li>• Semantic relationship to keywords</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Target className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="font-semibold mb-2">Technical Quality</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Image resolution and clarity</li>
                    <li>• File size and loading speed</li>
                    <li>• Mobile-friendly display</li>
                    <li>• Proper image format usage</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>Alt Text Optimization Mastery</h2>

            <h3>Writing Effective Alt Text</h3>
            <p>Alt text is the most important factor for image SEO. It should be descriptive, accurate, and concise:</p>

            <h4>Alt Text Best Practices</h4>
            <ul>
              <li>
                <strong>Be Descriptive:</strong> Describe what you see in the image
              </li>
              <li>
                <strong>Include Keywords:</strong> Use relevant keywords naturally
              </li>
              <li>
                <strong>Keep it Concise:</strong> Aim for 125 characters or less
              </li>
              <li>
                <strong>Avoid Redundancy:</strong> Don't start with "Image of" or "Picture of"
              </li>
              <li>
                <strong>Context Matters:</strong> Consider the image's purpose on the page
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Alt Text Examples:</h5>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-red-600">❌ Poor:</p>
                  <code>alt="image1.jpg"</code>
                </div>
                <div>
                  <p className="font-medium text-yellow-600">⚠️ Okay:</p>
                  <code>alt="dog"</code>
                </div>
                <div>
                  <p className="font-medium text-green-600">✅ Good:</p>
                  <code>alt="Golden retriever playing fetch in a sunny park"</code>
                </div>
                <div>
                  <p className="font-medium text-green-600">✅ Great:</p>
                  <code>alt="Golden retriever catching red frisbee in Central Park on sunny day"</code>
                </div>
              </div>
            </div>

            <h3>Alt Text for Different Image Types</h3>

            <h4>Product Images</h4>
            <p>Include brand, model, color, and key features:</p>
            <div className="bg-gray-100 p-3 rounded text-sm my-4">
              <code>alt="Apple iPhone 15 Pro in titanium blue showing camera system"</code>
            </div>

            <h4>Infographics</h4>
            <p>Summarize the main message or data presented:</p>
            <div className="bg-gray-100 p-3 rounded text-sm my-4">
              <code>alt="Social media usage statistics 2024 showing Instagram leads with 2.4B users"</code>
            </div>

            <h4>Screenshots</h4>
            <p>Describe the interface and action being shown:</p>
            <div className="bg-gray-100 p-3 rounded text-sm my-4">
              <code>alt="WordPress dashboard showing posts menu with add new post button highlighted"</code>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8">
              <div className="flex items-start">
                <Eye className="w-6 h-6 text-teal-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">Accessibility First</h3>
                  <p className="text-teal-800">
                    Remember that alt text serves accessibility first, SEO second. Write for screen reader users who
                    need to understand the image content, and SEO benefits will follow naturally.
                  </p>
                </div>
              </div>
            </div>

            <h2>Strategic File Naming</h2>

            <h3>SEO-Friendly File Names</h3>
            <p>File names provide important context to search engines before they even process the image:</p>

            <h4>File Naming Best Practices</h4>
            <ul>
              <li>
                <strong>Use Descriptive Names:</strong> Describe the image content
              </li>
              <li>
                <strong>Include Keywords:</strong> Use relevant search terms
              </li>
              <li>
                <strong>Use Hyphens:</strong> Separate words with hyphens, not underscores
              </li>
              <li>
                <strong>Keep it Lowercase:</strong> Use lowercase letters consistently
              </li>
              <li>
                <strong>Avoid Special Characters:</strong> Stick to letters, numbers, and hyphens
              </li>
              <li>
                <strong>Be Specific:</strong> More specific is usually better
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">File Naming Examples:</h5>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-red-600">❌ Poor:</p>
                  <code>IMG_1234.jpg, image1.png, photo.jpeg</code>
                </div>
                <div>
                  <p className="font-medium text-yellow-600">⚠️ Okay:</p>
                  <code>laptop.jpg, coffee_cup.png</code>
                </div>
                <div>
                  <p className="font-medium text-green-600">✅ Good:</p>
                  <code>macbook-pro-2024.jpg, espresso-coffee-cup.png</code>
                </div>
                <div>
                  <p className="font-medium text-green-600">✅ Great:</p>
                  <code>macbook-pro-16-inch-space-gray-2024.jpg, italian-espresso-ceramic-cup-saucer.png</code>
                </div>
              </div>
            </div>

            <h3>File Naming Strategies by Industry</h3>

            <h4>E-commerce</h4>
            <p>Include brand, product name, model, and key attributes:</p>
            <ul>
              <li>
                <code>nike-air-max-90-white-mens-size-10.jpg</code>
              </li>
              <li>
                <code>samsung-galaxy-s24-ultra-titanium-black-front-view.jpg</code>
              </li>
              <li>
                <code>ikea-billy-bookcase-white-5-shelf-assembled.jpg</code>
              </li>
            </ul>

            <h4>Real Estate</h4>
            <p>Include location, property type, and room/feature:</p>
            <ul>
              <li>
                <code>downtown-seattle-condo-kitchen-granite-countertops.jpg</code>
              </li>
              <li>
                <code>suburban-denver-home-master-bedroom-walk-in-closet.jpg</code>
              </li>
              <li>
                <code>manhattan-apartment-living-room-city-view.jpg</code>
              </li>
            </ul>

            <h4>Food & Recipe</h4>
            <p>Include dish name, cooking method, and key ingredients:</p>
            <ul>
              <li>
                <code>homemade-chocolate-chip-cookies-fresh-baked.jpg</code>
              </li>
              <li>
                <code>grilled-salmon-lemon-herbs-dinner-plate.jpg</code>
              </li>
              <li>
                <code>vegan-quinoa-salad-avocado-tomatoes-bowl.jpg</code>
              </li>
            </ul>

            <h2>Technical Image Optimization</h2>

            <h3>Image Format Selection</h3>
            <p>Choose the right format for SEO and performance:</p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left">Format</th>
                    <th className="border border-gray-300 p-3 text-left">Best For</th>
                    <th className="border border-gray-300 p-3 text-left">SEO Benefits</th>
                    <th className="border border-gray-300 p-3 text-left">Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">JPEG</td>
                    <td className="border border-gray-300 p-3">Photographs, complex images</td>
                    <td className="border border-gray-300 p-3">Universal support, good compression</td>
                    <td className="border border-gray-300 p-3">No transparency</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">PNG</td>
                    <td className="border border-gray-300 p-3">Graphics, logos, transparency</td>
                    <td className="border border-gray-300 p-3">Lossless quality, transparency</td>
                    <td className="border border-gray-300 p-3">Larger file sizes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">WebP</td>
                    <td className="border border-gray-300 p-3">Modern web, all image types</td>
                    <td className="border border-gray-300 p-3">Superior compression, quality</td>
                    <td className="border border-gray-300 p-3">Limited older browser support</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">SVG</td>
                    <td className="border border-gray-300 p-3">Icons, simple graphics</td>
                    <td className="border border-gray-300 p-3">Scalable, small file sizes</td>
                    <td className="border border-gray-300 p-3">Not suitable for photos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Image Size and Compression</h3>
            <p>Balance quality and file size for optimal SEO performance:</p>
            <ul>
              <li>
                <strong>Optimal Dimensions:</strong> Use appropriate sizes for context
              </li>
              <li>
                <strong>Compression Levels:</strong> 80-85% quality for most images
              </li>
              <li>
                <strong>File Size Targets:</strong> Under 100KB for most web images
              </li>
              <li>
                <strong>Progressive Loading:</strong> Use progressive JPEG for large images
              </li>
            </ul>

            <h3>Responsive Images for SEO</h3>
            <p>Implement responsive images to improve mobile SEO:</p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Responsive Image Example:</h5>
              <pre className="text-sm overflow-x-auto">
                {`<img src="product-image-800w.jpg"
     srcset="product-image-400w.jpg 400w,
             product-image-800w.jpg 800w,
             product-image-1200w.jpg 1200w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
     alt="Nike Air Max 90 white sneakers on wooden background"
     loading="lazy">`}
              </pre>
            </div>

            <h2>Structured Data for Images</h2>

            <h3>Image Object Schema</h3>
            <p>Use structured data to provide additional context to search engines:</p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Basic Image Schema:</h5>
              <pre className="text-sm overflow-x-auto">
                {`{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://example.com/image.jpg",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "acquireLicensePage": "https://example.com/license",
  "creditText": "Jane Doe Photography",
  "creator": {
    "@type": "Person",
    "name": "Jane Doe"
  },
  "copyrightNotice": "© 2024 Jane Doe"
}`}
              </pre>
            </div>

            <h3>Product Image Schema</h3>
            <p>For e-commerce, use Product schema with image properties:</p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Product with Images Schema:</h5>
              <pre className="text-sm overflow-x-auto">
                {`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Nike Air Max 90",
  "image": [
    "https://example.com/nike-air-max-90-front.jpg",
    "https://example.com/nike-air-max-90-side.jpg",
    "https://example.com/nike-air-max-90-back.jpg"
  ],
  "description": "Classic Nike Air Max 90 sneakers",
  "brand": {
    "@type": "Brand",
    "name": "Nike"
  }
}`}
              </pre>
            </div>

            <h2>Advanced Image SEO Strategies</h2>

            <h3>Image Sitemaps</h3>
            <p>Help search engines discover your images with XML sitemaps:</p>
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <h5 className="font-semibold mb-2">Image Sitemap Example:</h5>
              <pre className="text-sm overflow-x-auto">
                {`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://example.com/product-page</loc>
    <image:image>
      <image:loc>https://example.com/product-image.jpg</image:loc>
      <image:caption>Nike Air Max 90 white sneakers</image:caption>
      <image:title>Nike Air Max 90 - White</image:title>
      <image:license>https://example.com/license</image:license>
    </image:image>
  </url>
</urlset>`}
              </pre>
            </div>

            <h3>Image Lazy Loading and SEO</h3>
            <p>Implement lazy loading without hurting SEO:</p>
            <ul>
              <li>
                <strong>Native Lazy Loading:</strong> Use loading="lazy" attribute
              </li>
              <li>
                <strong>Above-the-fold Images:</strong> Don't lazy load critical images
              </li>
              <li>
                <strong>SEO-friendly Implementation:</strong> Ensure crawlers can access images
              </li>
              <li>
                <strong>Fallback Support:</strong> Provide noscript alternatives
              </li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <div className="flex items-start">
                <Search className="w-6 h-6 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">SEO Tip</h3>
                  <p className="text-green-800">
                    Google's John Mueller confirmed that lazy loading doesn't hurt SEO when implemented correctly. Use
                    native lazy loading and avoid lazy loading above-the-fold images.
                  </p>
                </div>
              </div>
            </div>

            <h3>Image CDN and SEO</h3>
            <p>Use Content Delivery Networks to improve image SEO:</p>
            <ul>
              <li>
                <strong>Faster Loading:</strong> Improved page speed signals
              </li>
              <li>
                <strong>Global Distribution:</strong> Better performance worldwide
              </li>
              <li>
                <strong>Automatic Optimization:</strong> Format and size optimization
              </li>
              <li>
                <strong>SEO-friendly URLs:</strong> Maintain descriptive image URLs
              </li>
            </ul>

            <h2>Local SEO and Images</h2>

            <h3>Geotagged Images</h3>
            <p>For local businesses, include location data in images:</p>
            <ul>
              <li>
                <strong>EXIF Data:</strong> Include GPS coordinates when relevant
              </li>
              <li>
                <strong>Local Keywords:</strong> Use location-based keywords in alt text
              </li>
              <li>
                <strong>Business Photos:</strong> Show your physical location
              </li>
              <li>
                <strong>Local Events:</strong> Document community involvement
              </li>
            </ul>

            <h3>Google My Business Images</h3>
            <p>Optimize images for local search visibility:</p>
            <ul>
              <li>
                <strong>High-Quality Photos:</strong> Professional business photos
              </li>
              <li>
                <strong>Regular Updates:</strong> Fresh content signals activity
              </li>
              <li>
                <strong>Diverse Content:</strong> Interior, exterior, products, team
              </li>
              <li>
                <strong>Customer Photos:</strong> Encourage user-generated content
              </li>
            </ul>

            <h2>Measuring Image SEO Success</h2>

            <h3>Key Metrics to Track</h3>
            <ul>
              <li>
                <strong>Google Images Traffic:</strong> Monitor referral traffic from image search
              </li>
              <li>
                <strong>Image Impressions:</strong> Track image visibility in search results
              </li>
              <li>
                <strong>Click-through Rates:</strong> Measure engagement with your images
              </li>
              <li>
                <strong>Page Speed Impact:</strong> Monitor loading time improvements
              </li>
              <li>
                <strong>Ranking Positions:</strong> Track image rankings for target keywords
              </li>
            </ul>

            <h3>Tools for Image SEO Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <Search className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold mb-2">Free Tools</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Google Search Console</li>
                    <li>• Google PageSpeed Insights</li>
                    <li>• Google Images search</li>
                    <li>• Browser developer tools</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Target className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="font-semibold mb-2">Premium Tools</h4>
                  <ul className="text-sm space-y-1">
                    <li>• SEMrush Image SEO</li>
                    <li>• Ahrefs Site Audit</li>
                    <li>• Screaming Frog SEO Spider</li>
                    <li>• GTmetrix image analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>Common Image SEO Mistakes</h2>

            <h3>Technical Mistakes</h3>
            <ul>
              <li>
                <strong>Missing Alt Text:</strong> Leaving alt attributes empty
              </li>
              <li>
                <strong>Generic File Names:</strong> Using default camera file names
              </li>
              <li>
                <strong>Oversized Images:</strong> Not optimizing for web delivery
              </li>
              <li>
                <strong>Wrong Formats:</strong> Using inappropriate image formats
              </li>
              <li>
                <strong>Broken Images:</strong> 404 errors for image files
              </li>
            </ul>

            <h3>Content Mistakes</h3>
            <ul>
              <li>
                <strong>Keyword Stuffing:</strong> Over-optimizing alt text with keywords
              </li>
              <li>
                <strong>Irrelevant Images:</strong> Using stock photos unrelated to content
              </li>
              <li>
                <strong>Poor Quality:</strong> Low-resolution or blurry images
              </li>
              <li>
                <strong>Copyright Issues:</strong> Using images without proper licensing
              </li>
              <li>
                <strong>Inconsistent Branding:</strong> Mixed visual styles across site
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <div className="flex items-start">
                <Eye className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Quality Warning</h3>
                  <p className="text-yellow-800">
                    Google's algorithms can detect low-quality, irrelevant, or spammy images. Focus on providing genuine
                    value to users rather than trying to game the system.
                  </p>
                </div>
              </div>
            </div>

            <h2>Future of Image SEO</h2>
            <p>Image SEO continues to evolve with advancing technology and changing user behavior:</p>

            <h3>AI and Visual Search</h3>
            <ul>
              <li>
                <strong>Google Lens Integration:</strong> Visual search becoming mainstream
              </li>
              <li>
                <strong>AI Image Recognition:</strong> Better understanding of image content
              </li>
              <li>
                <strong>Visual Shopping:</strong> Product discovery through images
              </li>
              <li>
                <strong>Contextual Understanding:</strong> AI analyzing image context and meaning
              </li>
            </ul>

            <h3>Emerging Technologies</h3>
            <ul>
              <li>
                <strong>WebP and AVIF Adoption:</strong> Next-generation image formats
              </li>
              <li>
                <strong>Core Web Vitals:</strong> Image optimization for performance metrics
              </li>
              <li>
                <strong>Voice Search Integration:</strong> Images supporting voice queries
              </li>
              <li>
                <strong>Augmented Reality:</strong> 3D and AR content in search results
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Image SEO is a powerful but often underutilized strategy for driving organic traffic. By optimizing alt
              text, file names, technical aspects, and implementing structured data, you can significantly improve your
              visibility in image search results. Remember that successful image SEO balances optimization with user
              experience and accessibility.
            </p>
            <p>
              Start with the fundamentals—descriptive alt text and proper file naming—then gradually implement more
              advanced techniques. Monitor your results, stay updated with search engine guidelines, and always
              prioritize providing value to your users.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-white text-center my-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Images for SEO?</h2>
            <p className="text-lg mb-6 opacity-90">Start optimizing your images with proper formats and compression</p>
            <Link href="/">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Download className="w-5 h-5 mr-2" />
                Optimize Images Now
              </Button>
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold mb-2">How long does alt text affect SEO rankings?</h3>
                <p className="text-gray-600">
                  Alt text is one of the primary ways search engines understand image content. Well-written, descriptive
                  alt text can help images rank in Google Images and contribute to overall page relevance for related
                  keywords.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold mb-2">Should I include keywords in image file names?</h3>
                <p className="text-gray-600">
                  Yes, but naturally. Use descriptive file names that include relevant keywords while accurately
                  describing the image content. Avoid keyword stuffing and focus on clarity and relevance.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold mb-2">Do image sitemaps help with SEO?</h3>
                <p className="text-gray-600">
                  Image sitemaps help search engines discover and index your images, especially if they're loaded via
                  JavaScript or not easily discoverable through crawling. They're particularly useful for large sites
                  with many images.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold mb-2">How does image loading speed affect SEO?</h3>
                <p className="text-gray-600">
                  Page speed is a ranking factor, and images often contribute significantly to loading times. Optimized
                  images improve Core Web Vitals scores, which directly impact SEO performance, especially on mobile
                  devices.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold mb-2">Can I use the same image on multiple pages?</h3>
                <p className="text-gray-600">
                  Yes, but ensure each instance has appropriate alt text for its context. The same image might need
                  different descriptions depending on how it's used on different pages. Avoid duplicate content issues
                  by varying the context.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
