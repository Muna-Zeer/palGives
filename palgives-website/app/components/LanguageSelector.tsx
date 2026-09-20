'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function LanguageSelector() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const nextLocale = e.target.value;

    const segments = pathname.split('/');

    // /en/about -> /ar/about
    // /ar/about -> /en/about
    segments[1] = nextLocale;

    router.push(segments.join('/'));
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