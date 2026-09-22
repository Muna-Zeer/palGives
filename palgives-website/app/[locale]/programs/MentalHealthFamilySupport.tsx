'use client';

import Image from 'next/image';
import T from '../../components/T';

export default function MentalHealthFamilySupport() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[450px] flex flex-col justify-center items-center text-center bg-stone-100 bg-cover bg-center px-4" style={{ backgroundImage: "url('/images/')" }}>
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
            <T>Impact Program</T>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            <T>MENTAL HEALTH & FAMILY SUPPORT</T>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            <T>Promoting emotional well-being, strengthening family bonds, and providing essential psychosocial care for children, youth, and parents.</T>
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
            <T>Nurturing Resilience & Well-being</T>
          </h3>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            <T>The</T> <strong className="text-slate-900"><T>Mental Health & Family Support</T></strong> <T>program at</T> <strong className="text-slate-900 notranslate" translate="no">PalGives</strong> <T>aims to promote the mental well-being of children, youth, and family members, providing the necessary support to strengthen family bonds and empower families to face daily challenges in a healthy and sustainable way.</T>
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
                src="/images/programs/Health.jpg"
                alt="Family therapy session"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                <T>PROGRAM GOALS</T>
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li><T>Enhance the mental health of children and youth</T></li>
                <li><T>Provide psychosocial and social support to families</T></li>
                <li><T>Strengthen skills for coping with daily pressures and challenges</T></li>
                <li><T>Build a healthy and stable family environment</T></li>
              </ul>
            </div>
          </div>

          {/* Expected Outcomes Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-16 border-t border-slate-900/20">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
              <Image
                src="/images/programs/Health2.jpg"
                alt="Outdoor community activity"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                <T>EXPECTED OUTCOMES</T>
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li><T>Improved mental health for children and youth</T></li>
                <li><T>Strengthened family bonds and effective communication</T></li>
                <li><T>Increased family capacity to manage pressures and challenges</T></li>
                <li><T>Establishing a supportive and stable family environment that fosters children&apos;s and youth&apos;s growth</T></li>
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
              <T>Core Strategy</T>
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              <T>PROGRAM PILLARS</T>
            </h2>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Pillar 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/Health3.jpg"
                  alt="Psychosocial & Social Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  <T>Psychosocial & Social Support</T>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li><T>Individual and group therapy sessions</T></li>
                  <li><T>Programs to boost self-confidence and social adaptation</T></li>
                  <li><T>Workshops on managing emotions and handling stress</T></li>
                </ul>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/Health4.jpg"
                  alt="Family Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  <T>Family Support</T>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li><T>Family guidance and counseling sessions</T></li>
                  <li><T>Promoting healthy communication and family relationships</T></li>
                  <li><T>Programs to help parents support their children academically and socially</T></li>
                </ul>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/women-health-6.jpg"
                  alt="Training & Life Skills"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  <T>Training & Life Skills</T>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li><T>Programs to develop problem-solving and decision-making skills</T></li>
                  <li><T>Enhancing communication skills among family members</T></li>
                  <li><T>Workshops on time management and organizing family life</T></li>
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
            <T>Support Family Well-being in Palestine</T>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            <T>Your support provides professional psychological counseling, family workshops, and youth support circles to build resilient communities.</T>
          </p>
          <div className="pt-2">
            <a
              href="/donate"
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
            >
              <T>Support Mental Health Programs</T>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}