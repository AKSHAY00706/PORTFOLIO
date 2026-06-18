/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow Three.js and R3F imports
  transpilePackages: ["three"],
};

export default nextConfig;
