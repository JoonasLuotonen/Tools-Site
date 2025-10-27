/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/clarity-test", destination: "/clarity", permanent: true }];
  },
};
module.exports = nextConfig;
