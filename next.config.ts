import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Export static files
  basePath: '/apoorva-chavali.github.io', // Replace 'your-repo' with your GitHub repository name
  assetPrefix: '/apoorva-chavali.github.io/', // Prefix for assets
  trailingSlash: true, // Adds trailing slashes to paths for static exports
};

export default nextConfig;
