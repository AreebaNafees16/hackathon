// import '@/styles/globals.css';
// import { appWithTranslation } from 'next-i18next';
// import { useRouter } from 'next/router';

// function MyApp({ Component, pageProps }: any) {
//     const { locale } = useRouter();

//     return (
//         <div dir={locale === 'ar' || locale === 'ur' ? 'rtl' : 'ltr'}>
//             <Component {...pageProps} />
//         </div>
//     );
// }

// export default appWithTranslation(MyApp);
import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
