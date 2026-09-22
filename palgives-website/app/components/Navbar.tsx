'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { programs } from '../data/programs';
import { VOLUNTEER_FORM_URL } from "../constants";
import InPageSearch from './SearchBar';
import AutoTranslator from './AutoTranslator';
import { useLanguage } from '@/context/LanguageContext';
import T from '../components/T';
export default function Navbar() {
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale } = useLanguage();

  // Dictionary for instant static text translations without state side-effects
  const t = {
    home: locale === 'ar' ? 'الرئيسية' : 'Home',
    about: locale === 'ar' ? 'من نحن' : 'About Us',
    donate: locale === 'ar' ? 'تبرع الآن' : 'Donate Now',
    programs: locale === 'ar' ? 'البرامج' : 'Programs',
    contact: locale === 'ar' ? 'اتصل بنا' : 'Contact Us',
    volunteer: locale === 'ar' ? 'تطوع' : 'Volunteer',
    impact: locale === 'ar' ? 'مجالات التأثير' : 'Impact Focus Areas',
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Brand (Left Side) */}
          <div className="flex items-center space-x-3 notranslate" translate="no">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-black text-slate-900 tracking-tight">
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

          {/* Navigation Links (Desktop Middle/Right) */}
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

            {/* Our Programs Dynamic Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProgramOpen(true)}
              onMouseLeave={() => setIsProgramOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsProgramOpen((prev) => !prev)}
                className="flex items-center space-x-1 hover:text-[#F3D03E] transition-colors"
              >
                {t.programs}
              </button>

              {isProgramOpen && (
                <div className="absolute left-0 top-full w-[680px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-12 gap-6 z-50">
                  <div className="col-span-12 space-y-2">
                    <p className="text-xs font-semibold text-[#F3D03E] uppercase tracking-widest mb-2">
                      <T>{t.impact}</T>
                    </p>

                    {programs.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/programs/${item.slug}`}
                        onClick={() => setIsProgramOpen(false)}
                        className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-[#F3D03E]">
                          <T>{item.title}</T>
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          <T>{item.summary}</T>
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

          {/* Right Action Elements */}
          <div className="hidden lg:flex items-center gap-4">
            <InPageSearch />
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 shadow-sm">
              <AutoTranslator />
            </div>
          </div>

          {/* Mobile Menu & Translator Button */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs shadow-sm">
              <AutoTranslator />
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
            <div className="pl-3 space-y-2 border-l-2 border-amber-400">
              {programs.map((p) => (
                <Link 
                  key={p.slug} 
                  href={`/programs/${p.slug}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-slate-600 hover:text-amber-600 py-1"
                >
                  {p.title}
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