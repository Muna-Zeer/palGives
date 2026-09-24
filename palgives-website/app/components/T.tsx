'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface TProps {
  children: string;
}

export default function T({ children }: TProps) {
  const { locale, t } = useLanguage();
  const [translated, setTranslated] = useState(children);

  useEffect(() => {
    let cancelled = false;

    if (!children || locale === 'en') {
      setTranslated(children);
      return;
    }

    setTranslated(children);

    t(children)
      .then((result) => {
        if (!cancelled) {
          setTranslated(result || children);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setTranslated(children);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [children, locale, t]);

  return <>{translated}</>;
}