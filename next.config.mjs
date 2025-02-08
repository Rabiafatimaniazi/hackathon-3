/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['cdn.sanity.io'], // Allow 'cdn.sanity.io' for external images
    },
  };
  
  export default nextConfig;
  