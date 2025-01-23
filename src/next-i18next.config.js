// module.exports = {
//     i18n: {
//         defaultLocale: 'en',
//         locales: ['en', 'ur', 'ar', 'zh', 'de', 'fr'], // Added Urdu (ur), Arabic (ar), Chinese (zh), German (de), and French (fr)
//         localeDetection: true // Detect browser language
//     },

    
// };

const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur', 'ar', 'zh', 'de', 'fr'],
  },
  localePath: path.resolve('./locales'),
};
