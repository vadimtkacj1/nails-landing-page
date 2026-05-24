/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
    ignoreBuildErrors: true,
  },

  async rewrites() {
    return [
      {
        source: '/landing/glam_nails',
        destination: 'http://localhost:3001/landing/glam_nails',
      },
      {
        source: '/landing/glam_nails/:path*',
        destination: 'http://localhost:3001/landing/glam_nails/:path*',
      },
    ];
  },
};
export default nextConfig;