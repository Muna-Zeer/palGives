
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { programs } from '../data/programs';
import { VOLUNTEER_FORM_URL } from '../constants';
import InPageSearch from './SearchBar';
import AutoTranslator from './AutoTranslator';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { locale } = useLanguage();

  const isArabic = locale === 'ar';

  /*
   * Always include the current locale in internal URLs.
   * Example:
   * English -> /en/about
   * Arabic  -> /ar/about
   */
  const localizedHref = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
  };

  const translations = {
    home: isArabic ? 'الرئيسية' : 'Home',
    about: isArabic ? 'من نحن' : 'About Us',
    donate: isArabic ? 'تبرع الآن' : 'Donate Now',
    programs: isArabic ? 'البرامج' : 'Programs',
    contact: isArabic ? 'اتصل بنا' : 'Contact Us',
    volunteer: isArabic ? 'تطوع' : 'Volunteer',
    impact: isArabic ? 'مجالات التأثير' : 'Impact Focus Areas',
    explore: isArabic
      ? 'اكتشف كيف نصنع التأثير'
      : 'Explore How We Create Impact',
    initiatives: isArabic ? 'مبادراتنا' : 'Our Initiatives',
  };

  const closeMenus = () => {
    setIsProgramOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      dir={isArabic ? 'rtl' : 'ltr'}
      className="sticky top-0 z-50 bg-white shadow-md font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div
            className="flex items-center space-x-3 notranslate"
            translate="no"
          >
            <Link
              href={localizedHref('/')}
              onClick={closeMenus}
              className="flex items-center gap-2"
            >
              <span className="hidden sm:inline text-2xl font-black text-slate-900 tracking-tight">
                Pal<span className="text-amber-500">Gives</span>
              </span>

              <div className="w-9 h-9 relative">
                <Image
                  src="/images/palgives_imgs/palgives_logo.jpg"
                  alt="PalGives Logo"
                  fill
                  sizes="36px"
                  className="object-contain rounded-full"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-slate-700 text-sm uppercase tracking-wider font-semibold">

            {/* Home */}
            <Link
              href={localizedHref('/')}
              onClick={closeMenus}
              className="px-3 py-2 text-black bg-[#F3D03E] rounded transition-colors"
            >
              {translations.home}
            </Link>

            {/* About */}
            <Link
              href={localizedHref('/about')}
              onClick={closeMenus}
              className="hover:text-[#F3D03E] transition-colors"
            >
              {translations.about}
            </Link>

            {/* Donate */}
            <Link
              href={localizedHref('/donate')}
              onClick={closeMenus}
              className="hover:text-[#F3D03E] transition-colors"
            >
              {translations.donate}
            </Link>

            {/* Programs Dropdown */}
            <div className="relative">

              <button
                type="button"
                onClick={() => setIsProgramOpen((prev) => !prev)}
                className="flex items-center gap-1 hover:text-[#F3D03E] transition-colors cursor-pointer font-medium focus:outline-none"
                aria-expanded={isProgramOpen}
                aria-haspopup="menu"
              >
                <span>{translations.programs}</span>

                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProgramOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isProgramOpen && (
                <div
                  className={`absolute ${
                    isArabic ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'
                  } top-full mt-3 w-[720px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50`}
                  dir={isArabic ? 'rtl' : 'ltr'}
                >
                  {/* Dropdown Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div>
                      <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                        {translations.impact}
                      </p>

                      <h4 className="text-sm font-semibold text-slate-800 mt-1">
                        {translations.explore}
                      </h4>
                    </div>
                  </div>

                  {/* Programs */}
                  <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-1">

                    {programs.map((item) => {
                      const title =
                        isArabic && item.titleAr
                          ? item.titleAr
                          : item.title;

                      const summary =
                        isArabic && item.summaryAr
                          ? item.summaryAr
                          : item.summary;

                      return (
                        <Link
                          key={item.slug}
                          href={localizedHref(
                            `/programs/${item.slug}`
                          )}
                          onClick={closeMenus}
                          className="group relative p-3.5 rounded-xl bg-slate-50/70 hover:bg-amber-50/40 border border-slate-100 hover:border-amber-200/60 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md"
                        >
                          <div>
                            <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors flex items-center justify-between gap-2">
                              <span>{title}</span>

                              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500 text-xs">
                                {isArabic ? '←' : '→'}
                              </span>
                            </div>

                            <div className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                              {summary}
                            </div>
                          </div>
                        </Link>
                      );
                    })}

                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              href={localizedHref('/contact')}
              onClick={closeMenus}
              className="hover:text-[#F3D03E] transition-colors"
            >
              {translations.contact}
            </Link>

            {/* Volunteer */}
            <Link
              href={VOLUNTEER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenus}
              className="hover:text-[#F3D03E] transition-colors"
            >
              {translations.volunteer}
            </Link>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <InPageSearch />

            <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 shadow-sm">
              <AutoTranslator />
            </div>
          </div>

          {/* Mobile Right Side */}
          <div className="lg:hidden flex items-center gap-3">

            <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs shadow-sm">
              <AutoTranslator />
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-slate-800 hover:text-[#F3D03E] p-2 focus:outline-none rounded-lg bg-slate-100"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          dir={isArabic ? 'rtl' : 'ltr'}
          className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 space-y-4 shadow-xl rounded-b-2xl"
        >
          {/* Home */}
          <Link
            href={localizedHref('/')}
            onClick={closeMenus}
            className="block text-slate-800 font-bold py-2 border-b border-slate-100 hover:text-amber-500 transition-colors"
          >
            {translations.home}
          </Link>

          {/* About */}
          <Link
            href={localizedHref('/about')}
            onClick={closeMenus}
            className="block text-slate-800 font-bold py-2 border-b border-slate-100 hover:text-amber-500 transition-colors"
          >
            {translations.about}
          </Link>

          {/* Programs */}
          <div className="py-2 border-b border-slate-100">
            <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">
              {translations.programs}
            </p>

            <div
              className={`${
                isArabic ? 'pr-3 border-r-2' : 'pl-3 border-l-2'
              } space-y-2 border-amber-400`}
            >
              {programs.map((p) => {
                const title =
                  isArabic && p.titleAr
                    ? p.titleAr
                    : p.title;

                return (
                  <Link
                    key={p.slug}
                    href={localizedHref(`/programs/${p.slug}`)}
                    onClick={closeMenus}
                    className="block text-sm text-slate-600 hover:text-amber-600 py-1"
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Donate */}
          <Link
            href={localizedHref('/donate')}
            onClick={closeMenus}
            className="block text-slate-800 font-bold py-2 border-b border-slate-100 hover:text-amber-500 transition-colors"
          >
            {translations.donate}
          </Link>

          {/* Contact */}
          <Link
            href={localizedHref('/contact')}
            onClick={closeMenus}
            className="block text-slate-800 font-bold py-2 border-b border-slate-100 hover:text-amber-500 transition-colors"
          >
            {translations.contact}
          </Link>

          {/* Volunteer */}
          <div className="pt-2">
            <Link
              href={VOLUNTEER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenus}
              className="block text-center w-full px-4 py-3 text-sm font-bold uppercase tracking-wider text-slate-900 bg-[#F3D03E] hover:bg-yellow-400 rounded-xl transition-all shadow-sm"
            >
              {translations.volunteer}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

