/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/youtube',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
