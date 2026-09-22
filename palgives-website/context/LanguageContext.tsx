
'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

interface LanguageContextType {
  locale: string;
  setLocale: (lang: string) => void;
  t: (text: string) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [locale, setLocale] = useState('en');

  const [cache, setCache] = useState<Record<string, string>>({});

  const t = async (text: string): Promise<string> => {
    // English doesn't need translation
    if (!text || locale === 'en') {
      return text;
    }

    // Check if we already translated this text
    const cacheKey = `${locale}:${text}`;

    if (cache[cacheKey]) {
      return cache[cacheKey];
    }

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          targetLanguage: locale,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Translation API error: ${response.status}`
        );
      }

      const data = await response.json();

      const translated = data.translatedText;

      if (translated) {
        setCache((prev) => ({
          ...prev,
          [cacheKey]: translated,
        }));

        return translated;
      }

      return text;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
      }}
    >
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    );
  }

  return context;
}

