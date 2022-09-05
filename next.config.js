/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // for viewing
    domains: ['i.pinimg.com', 's3.eu-north-1.amazonaws.com']
  }
};

module.exports = nextConfig;
