/** @type {import('next').NextConfig} */
const intercept = require("intercept-stdout");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

/**
 * Hide warning of RecoilJS when hot reload
 */
intercept((text) => (text.includes("Duplicate atom key") ? "" : text));

module.exports = nextConfig;
