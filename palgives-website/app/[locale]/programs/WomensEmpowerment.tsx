'use client';

import Image from 'next/image';
import T from '../../components/T';

export default function WomensEmpowerment() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
            <T>Impact Program</T>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            <T>WOMEN&apos;S EMPOWERMENT</T>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            <T>Strengthening the personal, professional, and social capacities of Palestinian women to foster economic independence and leadership.</T>
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            <T>Overview</T>
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            <T>Building Leadership & Resilience</T>
          </h3>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            <T>The</T> <strong className="text-slate-900"><T>Women&apos;s Empowerment</T></strong> <T>program at</T> <strong className="text-slate-900 notranslate" translate="no">PalGives</strong> <T>aims to support women in Palestine by enhancing their personal, professional, and social capacities, enabling them to actively participate in economic and social life.</T>
          </p>
        </div>
      </section>

      {/* 3. PROGRAM GOALS & EXPECTED OUTCOMES */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto space-y-20 sm:space-y-24">
          
          {/* Program Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/programs/youth25.jpg" 
                alt="Women group discussion"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                <T>PROGRAM GOALS</T>
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-medium list-disc list-inside">
                <li><T>Boost self-confidence and independence</T></li>
                <li><T>Develop leadership and management skills</T></li>
                <li><T>Support women in entrepreneurship and freelancing</T></li>
                <li><T>Promote community engagement and active citizenship</T></li>
              </ul>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-16 border-t border-slate-300/60">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 order-2 md:order-1">
              <Image
                src="/images/programs/youth14.jpg" 
                alt="Women workshop participants"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                <T>EXPECTED OUTCOMES</T>
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-medium list-disc list-inside">
                <li><T>Increased opportunities for women to participate in the workforce</T></li>
                <li><T>Strengthened capacity to lead projects and initiatives</T></li>
                <li><T>Building a supportive and connected women&apos;s community</T></li>
                <li><T>Empowering women to become active contributors to economic and social development</T></li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PROGRAM PILLARS (YELLOW BANNER) */}
      <section className="bg-[#F3D03E] py-20 sm:py-28 px-6 sm:px-12 text-slate-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          {/* Pillars List */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-slate-800">
                <T>Core Strategy</T>
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-1">
                <T>PROGRAM PILLARS</T>
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-white shadow-sm space-y-2">
                <h3 className="font-bold text-slate-950 text-base sm:text-lg">
                  <T>1. Professional Training & Entrepreneurship</T>
                </h3>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-800 font-medium list-disc list-inside">
                  <li><T>Workshops on establishing small and medium enterprises</T></li>
                  <li><T>Business management and financial planning</T></li>
                  <li><T>Digital marketing and brand building</T></li>
                </ul>
              </div>

              <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-white shadow-sm space-y-2">
                <h3 className="font-bold text-slate-950 text-base sm:text-lg">
                  <T>2. Personal & Leadership Skills Development</T>
                </h3>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-800 font-medium list-disc list-inside">
                  <li><T>Effective communication skills</T></li>
                  <li><T>Critical thinking and problem-solving</T></li>
                  <li><T>Leadership and time management</T></li>
                </ul>
              </div>

              <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-white shadow-sm space-y-2">
                <h3 className="font-bold text-slate-950 text-base sm:text-lg">
                  <T>3. Mentorship & Support</T>
                </h3>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-800 font-medium list-disc list-inside">
                  <li><T>Individual guidance sessions with experts</T></li>
                  <li><T>Building a support network of women leaders</T></li>
                  <li><T>Ongoing follow-up for projects and initiatives</T></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Double Image Block */}
          <div className="space-y-6">
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/programs/women-2.jpg" 
                alt="Entrepreneurship training"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/programs/youth26.jpg" 
                alt="Mentorship and support circle"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 sm:py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">
            <T>Support Women-Led Initiatives in Palestine</T>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            <T>Your support helps fund business grants, mentorship programs, and vocational workshops for ambitious women.</T>
          </p>
          <div className="pt-2">
            <a
              href="/donate"
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
            >
              <T>Empower Women Today</T>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}