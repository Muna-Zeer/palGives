'use client';

import Image from 'next/image';

export default function MentalHealthFamilySupport() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
            Impact Program
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            MENTAL HEALTH & FAMILY SUPPORT
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Promoting emotional well-being, strengthening family bonds, and providing essential psychosocial care for children, youth, and parents.
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
            Nurturing Resilience & Well-being
          </h3>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            The <strong className="text-slate-900">Mental Health & Family Support</strong> program at <strong className="text-slate-900">PalGives</strong> aims to promote the mental well-being of children, youth, and family members, providing the necessary support to strengthen family bonds and empower families to face daily challenges in a healthy and sustainable way.
          </p>
        </div>
      </section>

      {/* 3. PROGRAM GOALS & EXPECTED OUTCOMES (YELLOW BANNER) */}
      <section className="bg-[#F3D03E] py-20 sm:py-28 px-6 sm:px-12 text-slate-900">
        <div className="max-w-5xl mx-auto space-y-20 sm:space-y-24">
          
          {/* Program Goals Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/mental-health-1.jpg" // Update with your actual image path
                alt="Family therapy session"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                PROGRAM GOALS
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>Enhance the mental health of children and youth</li>
                <li>Provide psychosocial and social support to families</li>
                <li>Strengthen skills for coping with daily pressures and challenges</li>
                <li>Build a healthy and stable family environment</li>
              </ul>
            </div>
          </div>

          {/* Expected Outcomes Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-16 border-t border-slate-900/20">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
              <Image
                src="/images/mental-health-2.jpg" // Update with your actual image path
                alt="Outdoor community activity"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                EXPECTED OUTCOMES
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>Improved mental health for children and youth</li>
                <li>Strengthened family bonds and effective communication</li>
                <li>Increased family capacity to manage pressures and challenges</li>
                <li>Establishing a supportive and stable family environment that fosters children&apos;s and youth&apos;s growth</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PROGRAM PILLARS */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-600">
              Core Strategy
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              PROGRAM PILLARS
            </h2>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/mental-health-pillar-1.jpg" // Update with your actual image path
                  alt="Psychosocial & Social Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  Psychosocial & Social Support
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>Individual and group therapy sessions</li>
                  <li>Programs to boost self-confidence and social adaptation</li>
                  <li>Workshops on managing emotions and handling stress</li>
                </ul>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/mental-health-pillar-2.jpg" // Update with your actual image path
                  alt="Family Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  Family Support
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>Family guidance and counseling sessions</li>
                  <li>Promoting healthy communication and family relationships</li>
                  <li>Programs to help parents support their children academically and socially</li>
                </ul>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/mental-health-pillar-3.jpg" // Update with your actual image path
                  alt="Training & Life Skills"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  Training & Life Skills
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>Programs to develop problem-solving and decision-making skills</li>
                  <li>Enhancing communication skills among family members</li>
                  <li>Workshops on time management and organizing family life</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 sm:py-24 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">
            Support Family Well-being in Palestine
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Your support provides professional psychological counseling, family workshops, and youth support circles to build resilient communities.
          </p>
          <div className="pt-2">
            <a
              href="/donate"
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md"
            >
              Support Mental Health Programs
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}