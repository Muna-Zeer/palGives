'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';
import React from 'react';

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const nextLocale = e.target.value as 'en' | 'ar';

    router.replace(pathname, {
      locale: nextLocale
    });
  };

  return (
    <select
      value={locale}
      onChange={handleLanguageChange}
      className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 pr-8 text-sm font-semibold text-gray-700 cursor-pointer"
    >
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  );
}