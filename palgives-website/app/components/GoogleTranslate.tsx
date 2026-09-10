'use client';

import { useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslate() {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');

  // Callback executed automatically when Next/Script finishes loading
  const handleScriptLoad = () => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,ar',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };
  };

  const changeLanguage = (lang: 'en' | 'ar') => {
    setCurrentLang(lang);

    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Safely query the hidden select element rendered by Google
    const selectElement = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (selectElement) {
      selectElement.value = lang;
      selectElement.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Dynamic, optimized script loading via Next.js */}
      <Script
        id="google-translate-script"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />

      {/* Hidden widget container */}
      <div id="google_translate_element" className="hidden" />

      {/* Language Switcher Buttons */}
      <div className="flex items-center rounded-lg border border-gray-200 p-1 text-sm font-semibold">
        <button
          type="button"
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1 rounded transition-colors ${
            currentLang === 'en'
              ? 'bg-amber-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => changeLanguage('ar')}
          className={`px-3 py-1 rounded transition-colors ${
            currentLang === 'ar'
              ? 'bg-amber-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          العربية
        </button>
      </div>
    </div>
  );
}