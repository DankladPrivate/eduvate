/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.alias['@/../public'] = require('path').resolve(__dirname, 'public');
      return config;
    },
  };
  
  module.exports = nextConfig;
  