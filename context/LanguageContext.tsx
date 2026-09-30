
'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

interface LanguageContextType {
  locale: 'en' | 'ar';
  setLocale: (lang: 'en' | 'ar') => void;
  isArabic: boolean;

  // Kept temporarily so existing components using t() don't break.
  // It no longer calls any translation API.
  t: (text: string) => Promise<string>;
}

const translationGlossary: Record<string, Record<string, string>> = {
  ar: {
    // Navigation
    HOME: 'الرئيسية',
    Home: 'الرئيسية',
    home: 'الرئيسية',

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

    PROGRAMS: 'برامجنا',
    Programs: 'برامجنا',
    programs: 'برامجنا',

    VOLUNTEER: 'تطوع',
    Volunteer: 'تطوع',
    volunteer: 'تطوع',

    // Common buttons
    'GET INVOLVED': 'شارك معنا',
    'Get Involved': 'شارك معنا',

    'LEARN MORE': 'اعرف المزيد',
    'Learn More': 'اعرف المزيد',

    'READ MORE': 'اقرأ المزيد',
    'Read More': 'اقرأ المزيد',

    'VIEW ALL': 'عرض الكل',
    'View All': 'عرض الكل',

    SUBMIT: 'إرسال',
    Submit: 'إرسال',

    SEND: 'إرسال',
    Send: 'إرسال',

    'JOIN US': 'انضم إلينا',
    'Join Us': 'انضم إلينا',

    'SUPPORT US': 'ادعمنا',
    'Support Us': 'ادعمنا',

    // PalGives
    PALGIVES: 'فلسطين تعطي',
    PalGives: 'فلسطين تعطي',
    palgives: 'فلسطين تعطي',

    'PALGIVES FOUNDATION': 'مؤسسة فلسطين تعطي',
    'PalGives Foundation': 'مؤسسة فلسطين تعطي',
    'palgives foundation': 'مؤسسة فلسطين تعطي',

    // Team roles
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
  const [locale, setLocaleState] = useState<'en' | 'ar'>('en');

  /*
   * Change language.
   *
   * We keep this in one place so every component using
   * useLanguage() updates automatically.
   */
  const setLocale = (lang: 'en' | 'ar') => {
    setLocaleState(lang);
  };

  const isArabic = locale === 'ar';

  /*
   * Temporary compatibility function.
   *
   * IMPORTANT:
   * This function no longer calls /api/translate.
   * It only checks the local glossary.
   *
   * Later, when all <T> components are removed,
   * we can remove t() completely.
   */
  const t = async (text: string): Promise<string> => {
    if (!text) {
      return text;
    }

    // English
    if (locale === 'en') {
      return text;
    }

    const cleanText = text.trim();

    if (!cleanText) {
      return text;
    }

    // Arabic glossary
    const translation = translationGlossary.ar[cleanText];

    if (translation) {
      return translation;
    }

    /*
     * No API call here.
     *
     * If a text is not yet translated, return the original
     * English text instead of causing a Vercel/API error.
     */
    return text;
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        isArabic,
        t,
      }}
    >
      <div dir={isArabic ? 'rtl' : 'ltr'}>
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

