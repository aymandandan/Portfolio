import type { NextConfig } from "next";

// Check if we're running in production
const isProd = process.env.NODE_ENV === 'production';
// Replace 'Portfolio' with your actual GitHub repository name
const repoName = 'Portfolio';

const nextConfig: NextConfig = {
  // Enable static exports
  output: 'export',
  
  // Base path for GitHub Pages
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  
  // Required for static exports
  images: {
    unoptimized: true,
  },
  
  // Optional: Add trailing slash for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;

// Update your image paths in your components to use the basePath
// Example: `${isProd ? '/Portfolio' : ''}/images/your-image.jpg`
