'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface TProps {
  children: string;
}

export default function T({ children }: TProps) {
  const { locale, t } = useLanguage();

  const [translatedText, setTranslatedText] = useState(children);

  useEffect(() => {
    let isMounted = true;

    if (!children) return;

    if (locale === 'en') {
      setTranslatedText(children);
      return;
    }

    t(children)
      .then((res) => {
        if (isMounted && res) {
          setTranslatedText(res);
        }
      })
      .catch(() => {
        if (isMounted) {
          setTranslatedText(children);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [children, locale, t]);

  return <>{translatedText}</>;
}