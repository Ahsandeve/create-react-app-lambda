/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static export

  trailingSlash: true, // 👈 Ensures paths like /about become /about/
  assetPrefix: "/", // 👈 Makes paths relative (fixes invalid / paths)
  basePath: "",                // Keep empty if hosting at root

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
