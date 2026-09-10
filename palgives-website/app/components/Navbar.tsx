'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { programs } from '../data/programs';
import { VOLUNTEER_FORM_URL } from "../constants";
import SearchBar from './SearchBar';
import InPageSearch from './SearchBar';

export default function Navbar() {
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState(programs[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Navigation Links (Left Side) */}
          <nav className="flex items-center space-x-1 gap-6 md:gap-8 text-slate-700 hover:text-[#F3D03E] transition-colors text-sm uppercase tracking-wider font-semibold"
          >
            <Link
              href="/"
              className="px-3 py-2 text-sm uppercase tracking-wider font-bold text-black bg-[#F3D03E] rounded transition-colors"
            >
              Home
            </Link>
            
            <Link
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-[#F3D03E] transition-colors text-sm uppercase tracking-wider"
            >
              About Us
            </Link>


            {/* Donate Dropdown / Link */}
            <div className="relative group">
              <Link
                href="/donate"
                className="flex items-center pg-4 space-x-1 text-slate-700 hover:text-[#F3D03E] transition-colors text-sm uppercase tracking-wider font-semibold"
              >
                <span>Donate Now</span>
              </Link>
            </div>

            {/* Our Programs Dynamic Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProgramOpen(true)}
              onMouseLeave={() => setIsProgramOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsProgramOpen((prev) => !prev)}
                className="flex items-center space-x-1 text-slate-700 hover:text-[#F3D03E] transition-colors text-sm uppercase tracking-wider font-semibold"
              >
                Programs
              </button>


              {/* Mega Menu Dropdown */}
              {isProgramOpen && (
                <div className="absolute left-0 top-full w-[680px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-12 gap-6 z-50">
                  <div className="col-span-12 space-y-2">
                    <p className="text-xs font-semibold text-[#F3D03E] uppercase tracking-widest mb-2">
                      Impact Focus Areas
                    </p>

                    {programs.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/programs/${item.slug}`}
                        onClick={() => setIsProgramOpen(false)}
                        className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-[#F3D03E]">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {item.summary}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us Dropdown */}
            <div className="relative group">
              <Link
                href="/contact"
                className="flex items-center space-x-1 text-slate-700 hover:text-[#F3D03E] transition-colors text-sm uppercase tracking-wider font-semibold"
              >
                <span>Contact Us</span>
              </Link>

            </div>
            <Link
              href={VOLUNTEER_FORM_URL}
              className="flex items-center space-x-1 text-slate-700 hover:text-[#F3D03E] transition-colors text-sm uppercase tracking-wider font-semibold"
            >
              Volunteer
            </Link>
          </nav>

        <div className ="flex items-center gap-4 ">
          <InPageSearch />
        </div>
          {/* Logo Brand (Right Side matching original design) */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                Pal<span className="text-amber-500">Gives</span>
              </span>
              <div className="w-9 h-9 relative">
                <div className="w-9 h-9 relative">
                  <Image
                    src="/images/PalGives_logo.jpg"
                    alt=""
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-800 hover:text-[#F3D03E] p-2 focus:outline-none"
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
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-3">
          <Link href="/" className="block text-slate-800 font-semibold py-2">Home</Link>
          <Link href="/about" className="block text-slate-800 font-semibold py-2">About Us</Link>

          <div className="py-2">
            <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Our Programs</p>
            <div className="pl-3 space-y-2 border-l-2 border-amber-400">
              {programs.map((p) => (
                <Link key={p.slug} href={`/programs/${p.slug}`} className="block text-sm text-slate-600 hover:text-amber-600">
                  {p.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/donate"
            className="flex items-center space-x-1 text-slate-700 hover:text-[#F3D03E] transition-colors text-sm uppercase tracking-wider font-semibold"
          >
            Donate Now
          </Link>          <Link href="/contact" className="block text-slate-800 font-semibold py-2">
            Contact Us
          </Link>
          <Link
            href={VOLUNTEER_FORM_URL}
            className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-gray-900 bg-yellow-400 hover:bg-yellow-500 rounded transition-all shadow-sm"
          >
            Volunteer
          </Link>        </div>
      )}
    </header>
  );
}