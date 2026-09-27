'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale: 'en' | 'ar') => {
    if (nextLocale === locale) return;

    // تحديث اللغة في الـ Context وتخزينها محلياً
    setLocale(nextLocale);

    // تعديل مسار الـ URL ليتناسب مع اللغة الجديدة (/ar أو /en)
    let newPath: string;

    if (pathname === '/en' || pathname === '/ar') {
      newPath = `/${nextLocale}`;
    } else if (pathname.startsWith('/en/') || pathname.startsWith('/ar/')) {
      newPath = pathname.replace(/^\/(en|ar)/, `/${nextLocale}`);
    } else {
      newPath = nextLocale === 'en' ? `/en${pathname}` : `/ar${pathname}`;
    }

    router.replace(newPath);
  };

  return (
    <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-full border border-gray-200 shadow-sm">
      <button
        type="button"
        onClick={() => changeLanguage('ar')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
          locale === 'ar'
            ? 'bg-[#F3D03E] text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        العربية
      </button>

      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
          locale === 'en'
            ? 'bg-[#F3D03E] text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </button>
    </div>
  );
}