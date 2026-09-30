
'use client';

import Image from 'next/image';
import { useLanguage } from '../../../context/LanguageContext';

export default function WomensEmpowerment() {
  const { isArabic } = useLanguage();

  const content = {
    impactProgram: isArabic ? 'برنامج مؤثر' : 'Impact Program',

    title: isArabic
      ? 'تمكين المرأة'
      : "WOMEN'S EMPOWERMENT",

    description: isArabic
      ? 'تعزيز القدرات الشخصية والمهنية والاجتماعية للنساء الفلسطينيات لدعم الاستقلال الاقتصادي والقيادة.'
      : 'Strengthening the personal, professional, and social capacities of Palestinian women to foster economic independence and leadership.',

    overview: isArabic ? 'نظرة عامة' : 'Overview',

    overviewTitle: isArabic
      ? 'بناء القيادة والقدرة على التكيف'
      : 'Building Leadership & Resilience',

    overviewText: isArabic
      ? 'يهدف برنامج تمكين المرأة في فلسطين تعطي إلى دعم النساء في فلسطين من خلال تعزيز قدراتهن الشخصية والمهنية والاجتماعية، وتمكينهن من المشاركة الفاعلة في الحياة الاقتصادية والاجتماعية.'
      : "The Women's Empowerment program at PalGives aims to support women in Palestine by enhancing their personal, professional, and social capacities, enabling them to actively participate in economic and social life.",

    programGoals: isArabic ? 'أهداف البرنامج' : 'PROGRAM GOALS',

    goal1: isArabic
      ? 'تعزيز الثقة بالنفس والاستقلالية'
      : 'Boost self-confidence and independence',

    goal2: isArabic
      ? 'تطوير مهارات القيادة والإدارة'
      : 'Develop leadership and management skills',

    goal3: isArabic
      ? 'دعم النساء في ريادة الأعمال والعمل الحر'
      : 'Support women in entrepreneurship and freelancing',

    goal4: isArabic
      ? 'تعزيز المشاركة المجتمعية والمواطنة الفاعلة'
      : 'Promote community engagement and active citizenship',

    expectedOutcomes: isArabic
      ? 'النتائج المتوقعة'
      : 'EXPECTED OUTCOMES',

    outcome1: isArabic
      ? 'زيادة فرص مشاركة النساء في سوق العمل'
      : 'Increased opportunities for women to participate in the workforce',

    outcome2: isArabic
      ? 'تعزيز القدرة على قيادة المشاريع والمبادرات'
      : 'Strengthened capacity to lead projects and initiatives',

    outcome3: isArabic
      ? 'بناء مجتمع نسائي داعم ومترابط'
      : "Building a supportive and connected women's community",

    outcome4: isArabic
      ? 'تمكين النساء ليصبحن مساهمات فاعلات في التنمية الاقتصادية والاجتماعية'
      : 'Empowering women to become active contributors to economic and social development',

    coreStrategy: isArabic ? 'الاستراتيجية الأساسية' : 'Core Strategy',

    programPillars: isArabic ? 'ركائز البرنامج' : 'PROGRAM PILLARS',

    pillar1Title: isArabic
      ? '1. التدريب المهني وريادة الأعمال'
      : '1. Professional Training & Entrepreneurship',

    pillar1Item1: isArabic
      ? 'ورشات حول تأسيس المشاريع الصغيرة والمتوسطة'
      : 'Workshops on establishing small and medium enterprises',

    pillar1Item2: isArabic
      ? 'إدارة الأعمال والتخطيط المالي'
      : 'Business management and financial planning',

    pillar1Item3: isArabic
      ? 'التسويق الرقمي وبناء العلامة التجارية'
      : 'Digital marketing and brand building',

    pillar2Title: isArabic
      ? '2. تطوير المهارات الشخصية والقيادية'
      : '2. Personal & Leadership Skills Development',

    pillar2Item1: isArabic
      ? 'مهارات التواصل الفعال'
      : 'Effective communication skills',

    pillar2Item2: isArabic
      ? 'التفكير النقدي وحل المشكلات'
      : 'Critical thinking and problem-solving',

    pillar2Item3: isArabic
      ? 'القيادة وإدارة الوقت'
      : 'Leadership and time management',

    pillar3Title: isArabic
      ? '3. الإرشاد والدعم'
      : '3. Mentorship & Support',

    pillar3Item1: isArabic
      ? 'جلسات إرشاد فردية مع الخبراء'
      : 'Individual guidance sessions with experts',

    pillar3Item2: isArabic
      ? 'بناء شبكة دعم من القيادات النسائية'
      : 'Building a support network of women leaders',

    pillar3Item3: isArabic
      ? 'المتابعة المستمرة للمشاريع والمبادرات'
      : 'Ongoing follow-up for projects and initiatives',

    ctaTitle: isArabic
      ? 'ادعموا المبادرات التي تقودها النساء في فلسطين'
      : 'Support Women-Led Initiatives in Palestine',

    ctaDescription: isArabic
      ? 'يساعد دعمكم في تمويل المنح التجارية وبرامج الإرشاد وورشات التدريب المهني للنساء الطموحات.'
      : 'Your support helps fund business grants, mentorship programs, and vocational workshops for ambitious women.',

    supportButton: isArabic
      ? 'مكّن المرأة اليوم'
      : 'Empower Women Today',
  };

  const donateHref = isArabic ? '/ar/donate' : '/en/donate';

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-50 font-sans text-slate-800"
    >
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-20 px-6 sm:px-12 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F3D03E] text-slate-900 text-xs font-extrabold tracking-widest uppercase rounded">
            {content.impactProgram}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {content.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {content.overview}
          </h2>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {content.overviewTitle}
          </h3>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            {content.overviewText}
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
                alt={
                  isArabic
                    ? 'نقاش جماعي للنساء'
                    : 'Women group discussion'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {content.programGoals}
              </h2>

              <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-medium list-disc list-inside">
                <li>{content.goal1}</li>
                <li>{content.goal2}</li>
                <li>{content.goal3}</li>
                <li>{content.goal4}</li>
              </ul>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center pt-16 border-t border-slate-300/60">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 order-2 md:order-1">
              <Image
                src="/images/programs/youth14.jpg"
                alt={
                  isArabic
                    ? 'مشاركات في ورشة نسائية'
                    : 'Women workshop participants'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {content.expectedOutcomes}
              </h2>

              <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-medium list-disc list-inside">
                <li>{content.outcome1}</li>
                <li>{content.outcome2}</li>
                <li>{content.outcome3}</li>
                <li>{content.outcome4}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM PILLARS */}
      <section className="bg-[#F3D03E] py-20 sm:py-28 px-6 sm:px-12 text-slate-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">

          {/* Pillars List */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-slate-800">
                {content.coreStrategy}
              </span>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-1">
                {content.programPillars}
              </h2>
            </div>

            <div className="space-y-4">

              {/* Pillar 1 */}
              <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-white shadow-sm space-y-2">
                <h3 className="font-bold text-slate-950 text-base sm:text-lg">
                  {content.pillar1Title}
                </h3>

                <ul className="space-y-1 text-xs sm:text-sm text-slate-800 font-medium list-disc list-inside">
                  <li>{content.pillar1Item1}</li>
                  <li>{content.pillar1Item2}</li>
                  <li>{content.pillar1Item3}</li>
                </ul>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-white shadow-sm space-y-2">
                <h3 className="font-bold text-slate-950 text-base sm:text-lg">
                  {content.pillar2Title}
                </h3>

                <ul className="space-y-1 text-xs sm:text-sm text-slate-800 font-medium list-disc list-inside">
                  <li>{content.pillar2Item1}</li>
                  <li>{content.pillar2Item2}</li>
                  <li>{content.pillar2Item3}</li>
                </ul>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-white shadow-sm space-y-2">
                <h3 className="font-bold text-slate-950 text-base sm:text-lg">
                  {content.pillar3Title}
                </h3>

                <ul className="space-y-1 text-xs sm:text-sm text-slate-800 font-medium list-disc list-inside">
                  <li>{content.pillar3Item1}</li>
                  <li>{content.pillar3Item2}</li>
                  <li>{content.pillar3Item3}</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Double Image Block */}
          <div className="space-y-6">
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/programs/women-2.jpg"
                alt={
                  isArabic
                    ? 'تدريب على ريادة الأعمال'
                    : 'Entrepreneurship training'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/programs/youth26.jpg"
                alt={
                  isArabic
                    ? 'دائرة إرشاد ودعم'
                    : 'Mentorship and support circle'
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            {content.ctaTitle}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base">
            {content.ctaDescription}
          </p>

          <div className="pt-2">
            <a
              href={donateHref}
              className="inline-block px-8 py-3.5 bg-[#F3D03E] text-slate-900 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
            >
              {content.supportButton}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

