"use client"
import Hero from "./components/hero";
import LanguageSelector from "./components/LanguageSelector";
import Navbar from "./components/navbar";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    
    <div>
            {/* <h1 className="text-2xl font-bold">{t('welcome')}</h1>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded">
                {t('shop_now')}
            </button> */}
         {/* <h1>{t('welcome')}</h1>
      <p>{t('cart')}</p>
      <LanguageSelector />  */}
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />      
    </div>
  );
}
