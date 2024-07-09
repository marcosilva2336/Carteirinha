const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  });
  require('dotenv').config();
  
  module.exports = withPWA({
    // outras configurações do Next.js
  });
  