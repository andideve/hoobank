const fontPaths = [
  '/assets/fonts/Poppins-Regular.woff',
  '/assets/fonts/Poppins-Medium.woff',
  '/assets/fonts/Poppins-SemiBold.woff',
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return fontPaths.map((fontPath) => ({
      source: fontPath,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=16070400',
        },
      ],
    }));
  },
};

module.exports = nextConfig;
