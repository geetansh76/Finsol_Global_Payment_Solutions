// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static export
  images: { unoptimized: true },
  trailingSlash: true, 
    source: "/development/filter/:path*",
        destination: "http://192.168.1.11:5000/development/filter/:path*",
};
export default nextConfig;