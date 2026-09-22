'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useRouter, usePathname } from 'next/navigation';

export default function AutoTranslator() {
  const { setLocale } = useLanguage();

  const router = useRouter();
  const pathname = usePathname();

  // Get the language that is actually in the URL
  const urlLocale =
    pathname === '/ar' || pathname.startsWith('/ar/')
      ? 'ar'
      : 'en';

  const changeLanguage = (nextLocale: 'en' | 'ar') => {
    // Don't do anything if the URL is already using this language
    if (nextLocale === urlLocale) {
      return;
    }

    // Tell your Argos translation context to use the new language
    setLocale(nextLocale);

    // Replace the locale part of the URL
    let newPath: string;

    if (
      pathname === '/en' ||
      pathname === '/ar'
    ) {
      newPath = `/${nextLocale}`;
    } else if (
      pathname.startsWith('/en/') ||
      pathname.startsWith('/ar/')
    ) {
      newPath = pathname.replace(/^\/(en|ar)/, `/${nextLocale}`);
    } else {
      newPath =
        nextLocale === 'en'
          ? `/en${pathname}`
          : `/ar${pathname}`;
    }

    router.replace(newPath);
  };

  return (
    <div className="flex items-center gap-1 text-xs font-bold">
      <button
        type="button"
        onClick={() => changeLanguage('ar')}
        className={`px-2 py-1 rounded transition-colors ${
          urlLocale === 'ar'
            ? 'bg-[#F3D03E] text-black shadow-sm'
            : 'text-slate-600 hover:text-black'
        }`}
      >
        AR
      </button>

      <span className="text-slate-300">|</span>

      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded transition-colors ${
          urlLocale === 'en'
            ? 'bg-[#F3D03E] text-black shadow-sm'
            : 'text-slate-600 hover:text-black'
        }`}
      >
        EN
      </button>
    </div>
  );
}