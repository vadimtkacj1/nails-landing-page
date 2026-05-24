/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  basePath: '/landing/glam_nails',

  typescript: {
    ignoreBuildErrors: true,
  }
};
export default nextConfig;