'use client';

import Image from 'next/image';

export default function ChildPreventiveHealthProgram() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
            Impact Program
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Child Preventive Health Program
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ensuring early health screenings, essential nutritional guidance, and preventive care to build a healthier future for Palestinian children.
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
            Protecting Child Health & Development
          </h3>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            The <strong className="text-slate-900">Child Preventive Health Program</strong> at <strong className="text-slate-900">PalGives</strong> focuses on proactive medical support, health education, and early interventions. By partnering with medical professionals and local communities, we safeguard children against preventable illnesses and encourage lifelong wellness habits.
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
                src="/images/programs/child1.jpg" 
                alt="Medical health screening for children"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
                Program Goals
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>Provide early developmental and health screenings for young children</li>
                <li>Offer nutritional assessments and essential supplement guidance</li>
                <li>Educate families on hygiene, preventive care, and disease prevention</li>
                <li>Reduce health disparities in under-resourced communities</li>
              </ul>
            </div>
          </div>

          {/* Expected Outcomes Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-16 border-t border-slate-900/20">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white order-2 md:order-1">
              <Image
                src="/images/programs/child7.jpg" 
                alt="Nutritional and health workshop"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">
                Expected Outcomes
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-900 font-medium list-disc list-inside">
                <li>Increased detection rates for early childhood health conditions</li>
                <li>Enhanced parental awareness surrounding pediatric hygiene and nutrition</li>
                <li>Stronger community-wide commitment to preventive healthcare practices</li>
                <li>Long-term reduction in avoidable childhood illness and absenteeism</li>
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
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              Program Pillars
            </h2>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/child8.jpg" 
                  alt="Early Medical Screening"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  1. Early Screenings & Diagnostics
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>Routine vision, dental, and general physical checkups</li>
                  <li>Early detection of developmental delays</li>
                  <li>Referral systems for specialized pediatric care</li>
                </ul>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/child-health-8.jpg"
                  alt="Nutritional Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  2. Nutritional Support & Wellness
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>Customized meal planning and dietary counseling</li>
                  <li>Distribution of essential vitamins and micronutrients</li>
                  <li>Monitoring growth milestones and physical health</li>
                </ul>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/programs/women-health-9.png" 
                  alt="Health Education"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1">
                <h3 className="font-extrabold text-slate-900 text-lg">
                  3. Family Hygiene & Health Education
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                  <li>Interactive workshops on personal hygiene habits</li>
                  <li>Parental guidance for managing common childhood illnesses</li>
                  <li>Community-driven sanitation and health awareness campaigns</li>
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
            Protect Children&apos;s Health in Palestine
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Your support finances mobile health clinics, screening kits, and essential nutrition packs for vulnerable children.
          </p>
          <div className="pt-2">
            <a
              href="/donate"
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md"
            >
              Support Child Health Today
            </a>
          </div>
        </div>
      </section>

      {/* 6. FOOTER COPYRIGHT */}
      <footer className="py-8 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
        Youth Empowerment Initiative. All Rights Reserved. -2024–2026 PalGives ©
      </footer>

    </div>
  );
}