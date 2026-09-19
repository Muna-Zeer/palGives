'use client';

import Image from 'next/image';

export default function WomensEmpowerment() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
            Impact Program
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            WOMEN&apos;S EMPOWERMENT
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Strengthening the personal, professional, and social capacities of Palestinian women to foster economic independence and leadership.
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Overview
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Building Leadership & Resilience
          </h3>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            The <strong className="text-slate-900">Women&apos;s Empowerment</strong> program at <strong className="text-slate-900">PalGives</strong> aims to support women in Palestine by enhancing their personal, professional, and social capacities, enabling them to actively participate in economic and social life.
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
                PROGRAM GOALS
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-medium list-disc list-inside">
                <li>Boost self-confidence and independence</li>
                <li>Develop leadership and management skills</li>
                <li>Support women in entrepreneurship and freelancing</li>
                <li>Promote community engagement and active citizenship</li>
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
                EXPECTED OUTCOMES
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-medium list-disc list-inside">
                <li>Increased opportunities for women to participate in the workforce</li>
                <li>Strengthened capacity to lead projects and initiatives</li>
                <li>Building a supportive and connected women&apos;s community</li>
                <li>Empowering women to become active contributors to economic and social development</li>
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
                Core Strategy
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-1">
                PROGRAM PILLARS
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-white shadow-sm space-y-2">
                <h3 className="font-bold text-slate-950 text-base sm:text-lg">
                  1. Professional Training & Entrepreneurship
                </h3>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-800 font-medium list-disc list-inside">
                  <li>Workshops on establishing small and medium enterprises</li>
                  <li>Business management and financial planning</li>
                  <li>Digital marketing and brand building</li>
                </ul>
              </div>

              <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-white shadow-sm space-y-2">
                <h3 className="font-bold text-slate-950 text-base sm:text-lg">
                  2. Personal & Leadership Skills Development
                </h3>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-800 font-medium list-disc list-inside">
                  <li>Effective communication skills</li>
                  <li>Critical thinking and problem-solving</li>
                  <li>Leadership and time management</li>
                </ul>
              </div>

              <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-white shadow-sm space-y-2">
                <h3 className="font-bold text-slate-950 text-base sm:text-lg">
                  3. Mentorship & Support
                </h3>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-800 font-medium list-disc list-inside">
                  <li>Individual guidance sessions with experts</li>
                  <li>Building a support network of women leaders</li>
                  <li>Ongoing follow-up for projects and initiatives</li>
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
            Support Women-Led Initiatives in Palestine
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Your support helps fund business grants, mentorship programs, and vocational workshops for ambitious women.
          </p>
          <div className="pt-2">
            <a
              href="/donate"
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md"
            >
              Empower Women Today
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}