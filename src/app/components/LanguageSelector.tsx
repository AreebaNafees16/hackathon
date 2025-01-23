'use client';

import { useRouter } from 'next/navigation';

export default function LanguageSelector() {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    const currentPath = window.location.pathname;
    router.push(`/${locale}${currentPath}`);
  };

  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="ur">Urdu</option>
      <option value="ar">Arabic</option>
      <option value="zh">Chinese</option>
      <option value="de">German</option>
      <option value="fr">French</option>
    </select>
  );
}







// 'use client';

// import { useRouter } from 'next/router';

// const LanguageSwitcher = () => {
//   const { locale, push, asPath } = useRouter();

//   const changeLanguage = (lang: string) => {
//     push(asPath, asPath, { locale: lang });
//   };

//   return (
//     <div>
//       <select value={locale} onChange={(e) => changeLanguage(e.target.value)}>
//         <option value="en">English</option>
//         <option value="ur">Urdu</option>
//         <option value="ar">Arabic</option>
//         <option value="zh">Chinese</option>
//         <option value="de">German</option>
//         <option value="fr">French</option>
//       </select>
//     </div>
//   );
// };

// export default LanguageSwitcher;




// import { useRouter } from 'next/router';

// const LanguageSwitcher = () => {
//     const router = useRouter();
//     const { locale, locales, pathname, query } = router;

//     const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         const newLocale = event.target.value;
//         router.push({ pathname, query }, pathname, { locale: newLocale });
//     };

//     return (
//         <div className="language-switcher">
//             <label htmlFor="language-select" className="mr-2">Language:</label>
//             <select
//                 id="language-select"
//                 value={locale}
//                 onChange={handleChange}
//                 className="p-2 border rounded"
//             >
//                 {locales?.map((loc) => (
//                     <option key={loc} value={loc}>
//                         {loc === 'en'
//                             ? 'English'
//                             : loc === 'ur'
//                             ? 'اردو'
//                             : loc === 'ar'
//                             ? 'العربية'
//                             : loc === 'zh'
//                             ? '中文'
//                             : loc === 'de'
//                             ? 'Deutsch'
//                             : loc === 'fr'
//                             ? 'Français'
//                             : loc}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };

// export default LanguageSwitcher;
