
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
const translationGlossary: Record<string, Record<string, string>> = {
  ar: {
    // Navigation
    'HOME': 'الرئيسية',
    'Home': 'الرئيسية',
    'home': 'الرئيسية',

    'ABOUT US': 'من نحن',
    'About Us': 'من نحن',
    'About us': 'من نحن',
    'about us': 'من نحن',

    'CONTACT US': 'تواصل معنا',
    'Contact Us': 'تواصل معنا',
    'Contact us': 'تواصل معنا',
    'contact us': 'تواصل معنا',

    'DONATE NOW': 'تبرع الآن',
    'Donate Now': 'تبرع الآن',
    'Donate now': 'تبرع الآن',

    'PROGRAMS': 'برامجنا',
    'Programs': 'برامجنا',
    'programs': 'برامجنا',

    'VOLUNTEER': 'تطوع',
    'Volunteer': 'تطوع',
    'volunteer': 'تطوع',

    // Common buttons
    'GET INVOLVED': 'شارك معنا',
    'Get Involved': 'شارك معنا',

    'LEARN MORE': 'اعرف المزيد',
    'Learn More': 'اعرف المزيد',

    'READ MORE': 'اقرأ المزيد',
    'Read More': 'اقرأ المزيد',

    'VIEW ALL': 'عرض الكل',
    'View All': 'عرض الكل',

    'SUBMIT': 'إرسال',
    'Submit': 'إرسال',

    'SEND': 'إرسال',
    'Send': 'إرسال',

    'JOIN US': 'انضم إلينا',
    'Join Us': 'انضم إلينا',

    'SUPPORT US': 'ادعمنا',
    'Support Us': 'ادعمنا',

    // PalGives
    'PALGIVES': 'فلسطين تعطي',
    'PalGives': 'فلسطين تعطي',
    'palgives': 'فلسطين تعطي',

    'PALGIVES FOUNDATION': 'مؤسسة فلسطين تعطي',
    'PalGives Foundation': 'مؤسسة فلسطين تعطي',
    'palgives foundation': 'مؤسسة فلسطين تعطي',


    'Director of the Medical Committee': 'مديرة اللجنة الطبية',

'Northern Area Coordinator': 'منسقة المنطقة الشمالية',

'Program Director': 'مدير البرامج',

'Director of the Cultural Committee': 'مدير اللجنة الثقافية',

'Director of the Medical Committee at PalGives, overseeing all medical and health-related activities, ensuring quality healthcare and support for children, youth, and the local community.':
  'مديرة اللجنة الطبية في فلسطين تعطي، وتشرف على جميع الأنشطة الطبية والصحية، وتضمن جودة الرعاية الصحية والدعم للأطفال والشباب والمجتمع المحلي.',

'Northern Area Coordinator at PalGives, responsible for coordinating activities and initiatives in the northern region, supporting children, youth, and the local community to ensure programs reach all beneficiaries effectively.':
  'منسقة المنطقة الشمالية في فلسطين تعطي، وهي مسؤولة عن تنسيق الأنشطة والمبادرات في المنطقة الشمالية، ودعم الأطفال والشباب والمجتمع المحلي، وضمان وصول البرامج إلى جميع المستفيدين بفعالية.',

'Program Director at PalGives, overseeing the design and implementation of programs and initiatives that empower children and youth and enhance their role in the community.':
  'مدير البرامج في فلسطين تعطي، ويشرف على تصميم وتنفيذ البرامج والمبادرات التي تهدف إلى تمكين الأطفال والشباب وتعزيز دورهم في المجتمع.',

'Directs cultural programs and activities at PalGives, fostering creativity, youth dialogue, and community empowerment through cultural initiatives.':
  'يدير البرامج والأنشطة الثقافية في فلسطين تعطي، ويساهم في تعزيز الإبداع والحوار بين الشباب وتمكين المجتمع من خلال المبادرات الثقافية.',
  },
};

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

    const cleanText = text.trim();

    if (!cleanText) {
      return text;
    }

    // -----------------------------------------
    // 1. Check manual glossary first
    // -----------------------------------------
    const glossaryTranslation =
      translationGlossary[locale]?.[cleanText];

    if (glossaryTranslation) {
      return glossaryTranslation;
    }

    // -----------------------------------------
    // 2. Check cache
    // -----------------------------------------
    const cacheKey = `${locale}:${cleanText}`;

    if (cache[cacheKey]) {
      return cache[cacheKey];
    }

    // -----------------------------------------
    // 3. Use Argos translation for everything
    //    that is not in the glossary
    // -----------------------------------------
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: cleanText,
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