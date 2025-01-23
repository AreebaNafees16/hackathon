// const { i18n } = require('./next-i18next.config');

// module.exports = {
//     reactStrictMode: true,
//     i18n,
// };

// module.exports = {
//     i18n: {
//       locales: ['en', 'ur', 'ar', 'zh', 'de', 'fr'],
//       defaultLocale: 'en',
//       localeDetection: true,
//     },
//   };
  
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  // Other Next.js configurations
};
