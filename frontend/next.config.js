/** @type {import('next').NextConfig} */
const nextConfig = {
  // let any host (LAN IPs, hostnames) use the dev server, not just localhost
  allowedDevOrigins: ['**.*'],
}

module.exports = nextConfig
