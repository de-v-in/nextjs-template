/** @type {import('next').NextConfig} */
const intercept = require('intercept-stdout');

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
};

/**
 * Hide warning of RecoilJS when hot reload
 */
intercept((text) => (text.includes('Duplicate atom key') ? '' : text));

module.exports = nextConfig;
