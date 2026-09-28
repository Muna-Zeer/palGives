'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { programs } from '../data/programs';
import { VOLUNTEER_FORM_URL } from "../constants";
import InPageSearch from './SearchBar';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale } = useLanguage();
  const isArabic = locale === 'ar';

  // Dictionary for instant static text translations
  const t = {
    home: isArabic ? 'الرئيسية' : 'Home',
    about: isArabic ? 'من نحن' : 'About Us',
    donate: isArabic ? 'تبرع الآن' : 'Donate Now',
    programs: isArabic ? 'البرامج' : 'Programs',
    contact: isArabic ? 'اتصل بنا' : 'Contact Us',
    volunteer: isArabic ? 'تطوع' : 'Volunteer',
    impact: isArabic ? 'مجالات التأثير' : 'Impact Focus Areas',
    explore: isArabic ? 'استكشف كيف نحقق أثراً' : 'Explore How We Create Impact',
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Brand */}
          <div className="flex items-center space-x-3 notranslate" translate="no">
            <Link href="/" className="flex items-center space-x-2">
              <span className="hidden sm:inline text-2xl font-black text-slate-900 tracking-tight">
                Pal<span className="text-amber-500">Gives</span>
              </span>

              <div className="w-9 h-9 relative">
                <Image
                  src="/images/PalGives_logo.jpg"
                  alt="PalGives Logo"
                  fill
                  sizes="36px"
                  className="object-contain rounded-full"
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-1 gap-6 text-slate-700 text-sm uppercase tracking-wider font-semibold">
            <Link
              href="/"
              className="px-3 py-2 text-black bg-[#F3D03E] rounded transition-colors"
            >
              {t.home}
            </Link>

            <Link
              href="/about"
              className="hover:text-[#F3D03E] transition-colors"
            >
              {t.about}
            </Link>

            <Link
              href="/donate"
              className="hover:text-[#F3D03E] transition-colors"
            >
              {t.donate}
            </Link>

            {/* Our Programs Dynamic Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsProgramOpen((prev) => !prev)}
                className="flex items-center space-x-1 hover:text-[#F3D03E] transition-colors cursor-pointer font-medium focus:outline-none"
              >
                <span>{t.programs}</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isProgramOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu Container */}
              {isProgramOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">

                  {/* Mega Menu Header Section */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div>
                      <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                        {t.impact}
                      </p>
                      <h4 className="text-sm font-semibold text-slate-800">
                        {t.explore}
                      </h4>
                    </div>
                  </div>

                  {/* Grid Cards Container (2-Column Layout) */}
                  <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-1">
                    {programs.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/programs/${item.slug}`}
                        onClick={() => setIsProgramOpen(false)}
                        className="group relative p-3.5 rounded-xl bg-slate-50/70 hover:bg-amber-50/40 border border-slate-100 hover:border-amber-200/60 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors flex items-center justify-between">
                            <span>{item.title[isArabic ? 'ar' : 'en']}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500 text-xs">
                              {isArabic ? '←' : '→'}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                            {item.summary[isArabic ? 'ar' : 'en']}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-[#F3D03E] transition-colors">
              {t.contact}
            </Link>

            <Link
              href={VOLUNTEER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3D03E] transition-colors"
            >
              {t.volunteer}
            </Link>
          </nav>

          {/* Right Action Elements (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <InPageSearch />
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 shadow-sm">
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Menu & Translator Button */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs shadow-sm">
              <LanguageSelector />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 hover:text-[#F3D03E] p-2 focus:outline-none rounded-lg bg-slate-100"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Enhanced Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 space-y-4 shadow-xl rounded-b-2xl animate-fadeIn">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-800 font-bold py-2 border-b border-slate-100 hover:text-amber-500 transition-colors"
          >
            {t.home}
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-800 font-bold py-2 border-b border-slate-100 hover:text-amber-500 transition-colors"
          >
            {t.about}
          </Link>

          {/* Mobile Programs Sub-list */}
          <div className="py-2 border-b border-slate-100">
            <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">{t.programs}</p>
            <div className={`${isArabic ? 'pr-3 border-r-2' : 'pl-3 border-l-2'} space-y-2 border-amber-400`}>
              {programs.map((p) => (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-slate-600 hover:text-amber-600 py-1"
                >
                  {p.title[isArabic ? 'ar' : 'en']}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/donate"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-800 font-bold py-2 border-b border-slate-100 hover:text-amber-500 transition-colors"
          >
            {t.donate}
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-800 font-bold py-2 border-b border-slate-100 hover:text-amber-500 transition-colors"
          >
            {t.contact}
          </Link>

          <div className="pt-2">
            <Link
              href={VOLUNTEER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full px-4 py-3 text-sm font-bold uppercase tracking-wider text-slate-900 bg-[#F3D03E] hover:bg-yellow-400 rounded-xl transition-all shadow-sm"
            >
              {t.volunteer}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}