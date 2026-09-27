'use client';

import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react';

type Locale = 'en' | 'ar';

// القاموس اللغوي الذي أرسلته
const translations = {
  en: {
    Navbar: {
      home: "HOME",
      about: "ABOUT US",
      donate: "DONATE NOW",
      programs: "PROGRAMS",
      contact: "CONTACT US",
      volunteer: "VOLUNTEER"
    },
    Hero: {
      title: "Empowering Youth for a Better Tomorrow",
      subtitle: "Join us in our mission to build leadership and skills across communities."
    }
  },
  ar: {
    Navbar: {
      home: "الرئيسية",
      about: "من نحن",
      donate: "تبرع الآن",
      programs: "البرامج",
      contact: "اتصل بنا",
      volunteer: "تطوع"
    },
    Hero: {
      title: "تمكين الشباب من أجل غدٍ أفضل",
      subtitle: "انضم إلينا في رسالتنا لبناء القيادة والمهارات عبر المجتمعات."
    }
  }
};

interface LanguageContextType {
    locale: Locale;
    setLocale: (lang: Locale) => void;
    t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function LanguageProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [locale, setLocaleState] = useState<Locale>('en');

    useEffect(() => {
        const savedLocale = localStorage.getItem('locale');
        if (savedLocale === 'ar' || savedLocale === 'en') {
            setLocaleState(savedLocale);
        }
    }, []);

    const setLocale = (lang: Locale) => {
        setLocaleState(lang);
        localStorage.setItem('locale', lang);
    };

    const t = (section: string, key: string): string => {
        try {
            // @ts-ignore
            return translations[locale]?.[section]?.[key] || key;
        } catch {
            return key;
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
            <div
                dir={locale === 'ar' ? 'rtl' : 'ltr'}
                lang={locale}
                className="min-h-screen"
            >
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